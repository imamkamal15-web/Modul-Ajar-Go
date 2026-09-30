import { DeepLearningModule, ProfilDimensiItem, SintakIntiItem, SoalEvaluasi, RekapKeterampilanItem } from "../types";
import { GenerateFormValues, buildFallbackModule } from "./generatorEngine";

export function parseMarkdownToModule(
  markdown: string,
  formDefaults: GenerateFormValues
): DeepLearningModule {
  // Start with complete base structure from form defaults
  const base = buildFallbackModule(formDefaults);
  base.rawMarkdown = markdown;

  try {
    // Extract Identitas Metadata if available
    const tahunMatch = markdown.match(/\*\*Tahun Ajaran\*\*\s*:\s*([^\n]+)/i);
    if (tahunMatch) base.tahunAjaran = tahunMatch[1].trim();

    const kelasMatch = markdown.match(/\*\*Kelas \/ Fase \/ Semester\*\*\s*:\s*([^\n\/]+)\s*\/\s*([^\n\/]+)\s*\/\s*([^\n]+)/i);
    if (kelasMatch) {
      base.kelas = kelasMatch[1].trim();
      base.fase = kelasMatch[2].trim();
      base.semester = kelasMatch[3].trim();
    }

    const mapelMatch = markdown.match(/\*\*Mata Pelajaran\*\*\s*:\s*([^\n]+)/i);
    if (mapelMatch) base.mataPelajaran = mapelMatch[1].trim();

    const materiMatch = markdown.match(/\*\*Materi Pelajaran\*\*\s*:\s*([^\n]+)/i);
    if (materiMatch) base.materiPelajaran = materiMatch[1].trim();

    const alokasiMatch = markdown.match(/\*\*Alokasi Waktu\*\*\s*:\s*([^\n]+)/i);
    if (alokasiMatch) base.alokasiWaktu = alokasiMatch[1].trim();

    const pertemuanMatch = markdown.match(/\*\*Jumlah Pertemuan\*\*\s*:\s*(\d+)/i) || markdown.match(/(\d+)\s*Pertemuan/i);
    if (pertemuanMatch) {
      base.jumlahPertemuan = parseInt(pertemuanMatch[1], 10);
      if (base.jumlahPertemuan > 1 && (!base.daftarPertemuan || base.daftarPertemuan.length !== base.jumlahPertemuan)) {
        const regenerated = buildFallbackModule({
          ...formDefaults,
          jumlahPertemuan: base.jumlahPertemuan,
          alokasiWaktu: base.alokasiWaktu || formDefaults.alokasiWaktu,
          mataPelajaran: base.mataPelajaran || formDefaults.mataPelajaran,
          materiPelajaran: base.materiPelajaran || formDefaults.materiPelajaran,
        });
        if (regenerated.daftarPertemuan && regenerated.daftarPertemuan.length > 0) {
          base.daftarPertemuan = regenerated.daftarPertemuan;
        }
      }
    }

    // Helper to sanitize extracted field text (strip surrounding asterisks/brackets/placeholders and extra whitespace)
    const cleanText = (txt: string) => {
      let res = txt.trim();
      // Remove trailing separator dashes if any
      res = res.replace(/(\r?\n)*---+\s*$/g, "").trim();
      // If it starts with brackets like [Isi...] strip leading [ and trailing ]
      if (res.startsWith("[") && res.endsWith("]")) {
        res = res.slice(1, -1).trim();
      }
      return res;
    };

    // Extract Section A: IDENTIFIKASI
    // 1. Identifikasi Kesiapan Murid
    const kesiapanMatch = markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Identifikasi Kesiapan Murid(?:\*?\*?)?\s*[:\-]?\s*([\s\S]*?)(?=(?:\r?\n)\s*(?:[*#_>\s-]*)\*?\*?(?:Karakteristik Materi Pelajaran|Karakteristik Materi|Dimensi Profil Lulusan|Dimensi Profil|## B|\n---)|$)/i
    );
    if (kesiapanMatch && cleanText(kesiapanMatch[1])) {
      base.kesiapanMurid = cleanText(kesiapanMatch[1]);
    }

    // 2. Karakteristik Materi Pelajaran
    const karakteristikMatch = markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Karakteristik Materi(?: Pelajaran)?(?:\*?\*?)?\s*[:\-]?\s*([\s\S]*?)(?=(?:\r?\n)\s*(?:[*#_>\s-]*)\*?\*?(?:Dimensi Profil Lulusan|Dimensi Profil|## B|\n---)|$)/i
    );
    if (karakteristikMatch && cleanText(karakteristikMatch[1])) {
      const cleanedKarakteristik = cleanText(karakteristikMatch[1]);
      base.karakteristikMateriPelajaran = cleanedKarakteristik;
      base.karakteristikMateri = cleanedKarakteristik;
    }

    // 3. Dimensi Profil Lulusan (Parse checkmarks and contextual explanations if present)
    const dimensiBlockMatch = markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Dimensi Profil(?: Lulusan)?(?:\*?\*?)?\s*[:\-]?\s*([\s\S]*?)(?=(?:\r?\n)\s*(?:## B|\n---|## C|$))/i
    );
    if (dimensiBlockMatch && dimensiBlockMatch[1]) {
      const dimBlock = dimensiBlockMatch[1];
      const dimensionMap: { [key: string]: string } = {
        "penalaran-kritis": "Penalaran Kritis",
        "kreativitas": "Kreativitas",
        "kolaborasi": "Kolaborasi",
        "kemandirian": "Kemandirian",
        "komunikasi": "Komunikasi",
        "keimanan-ketaqwaan": "Keimanan dan Ketaqwaan",
        "kewargaan": "Kewargaan",
      };

      const updatedDimensi = base.dimensiProfilLulusan.map((item) => {
        // Regex pattern to check if checked [v] or [✓] or [x] and get optional contextual explanation
        const itemRegex = new RegExp(
          `\\[([✓vxX ])\\]\\s*\\*?\\*?${item.label}\\*?\\*?(?:[:\\-]?\\s*([^\\n]+))?`,
          "i"
        );
        const match = dimBlock.match(itemRegex);
        if (match) {
          const isChecked = match[1] !== " ";
          const explanation = match[2]?.trim();
          return {
            ...item,
            checked: isChecked,
            penjelasan: explanation || item.penjelasan,
          };
        }
        // If not listed in markdown block at all, mark as unchecked
        return {
          ...item,
          checked: false,
        };
      });
      base.dimensiProfilLulusan = updatedDimensi;
    }

    // Extract Section B: DESAIN PEMBELAJARAN
    // 1. Capaian Pembelajaran
    const cpMatch = markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Capaian Pembelajaran(?:\*?\*?)?\s*[:\-]?\s*([\s\S]*?)(?=(?:\r?\n)\s*(?:[*#_>\s-]*)\*?\*?(?:Tujuan Pembelajaran|Praktik Pedagogis|Pendekatan Pembelajaran|## C|\n---)|$)/i
    );
    if (cpMatch && cleanText(cpMatch[1])) {
      base.capaianPembelajaran = cleanText(cpMatch[1]);
    }

    // 2. Tujuan Pembelajaran
    const tpMatch = markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Tujuan Pembelajaran(?:\*?\*?)?\s*[:\-]?\s*([\s\S]*?)(?=(?:\r?\n)\s*(?:[*#_>\s-]*)\*?\*?(?:Praktik Pedagogis|Pendekatan Pembelajaran|Lingkungan Pembelajaran|Model Pembelajaran|## C|\n---)|$)/i
    );
    if (tpMatch && cleanText(tpMatch[1])) {
      base.tujuanPembelajaran = cleanText(tpMatch[1]);
    }

    // 3. Praktik Pedagogis (Pendekatan, Model, Metode)
    const pendekatanMatch = markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Pendekatan Pembelajaran(?:\*?\*?)?\s*[:\-]?\s*([^\n]+)/i
    );
    if (pendekatanMatch && cleanText(pendekatanMatch[1])) {
      base.pendekatanPembelajaran = cleanText(pendekatanMatch[1]);
    }

    const modelMatch = markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Model Pembelajaran(?:\*?\*?)?\s*[:\-]?\s*([^\n]+)/i
    );
    if (modelMatch && cleanText(modelMatch[1])) {
      base.modelPembelajaran = cleanText(modelMatch[1]);
    }

    const metodeMatch = markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Metode Pembelajaran(?:\*?\*?)?\s*[:\-]?\s*([^\n]+)/i
    );
    if (metodeMatch && cleanText(metodeMatch[1])) {
      base.metodePembelajaran = cleanText(metodeMatch[1]);
    }

    // 4. Lingkungan & Kemitraan Pembelajaran
    const budayaMatch = markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Budaya Belajar(?:\*?\*?)?\s*[:\-]?\s*([^\n]+)/i
    );
    if (budayaMatch && cleanText(budayaMatch[1])) {
      base.budayaBelajar = cleanText(budayaMatch[1]);
    }

    const ruangFisikMatch = markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Ruang Fisik(?:\*?\*?)?\s*[:\-]?\s*([^\n]+)/i
    );
    if (ruangFisikMatch && cleanText(ruangFisikMatch[1])) {
      base.ruangFisik = cleanText(ruangFisikMatch[1]);
    }

    const kemitraanMatch = markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Antar\s*murid(?:\*?\*?)?\s*[:\-]?\s*([^\n]+)/i
    ) || markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Kemitraan(?:\s*Pembelajaran)?(?:\s*Antar\s*murid)?(?:\*?\*?)?\s*[:\-]?\s*([^\n]+)/i
    );
    if (kemitraanMatch && cleanText(kemitraanMatch[1])) {
      base.kemitraanMurid = cleanText(kemitraanMatch[1]);
    }

    // 5. Pemanfaatan Digital & Media Pembelajaran
    const platformMatch = markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Platform Desain(?:\s*\/\s*Media Digital)?(?:\*?\*?)?\s*[:\-]?\s*([^\n]+)/i
    );
    if (platformMatch && cleanText(platformMatch[1])) {
      base.platformDigital = cleanText(platformMatch[1]);
    }

    const perangkatMatch = markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Perangkat(?:\*?\*?)?\s*[:\-]?\s*([^\n]+)/i
    );
    if (perangkatMatch && cleanText(perangkatMatch[1])) {
      base.perangkat = cleanText(perangkatMatch[1]);
    }

    const mediaMatch = markdown.match(
      /(?:^|\n)\s*(?:[*#_>\s-]*)\*?\*?Media Pembelajaran(?:\*?\*?)?\s*[:\-]?\s*([^\n]+)/i
    );
    if (mediaMatch && cleanText(mediaMatch[1])) {
      base.mediaPembelajaran = cleanText(mediaMatch[1]);
    }

    // Extract Section D: ASESMEN
    const sumatifMatch = markdown.match(/\*?\*?Asesmen Sumatif:\*?\*?\s*([^\n]+)/i);
    if (sumatifMatch) {
      base.asesmenSumatifDeskripsi = sumatifMatch[1].trim();
    }

    // Extract Lampiran 1: RINGKASAN MATERI AJAR
    const materiAjarMatch = markdown.match(/###\s*1\.\s*RINGKASAN MATERI AJAR\s*([\s\S]*?)(?=###\s*2\.|$)/i);
    if (materiAjarMatch && materiAjarMatch[1].trim()) {
      base.ringkasanMateriAjar = materiAjarMatch[1].trim();
    }

    // Extract Lampiran 2: LKPD Title & Topic
    const lkpdMatch = markdown.match(/###\s*2\.\s*LEMBAR KERJA MURID[^\n]*\n([\s\S]*?)(?=###\s*3\.|$)/i);
    if (lkpdMatch) {
      const lkpdContent = lkpdMatch[1];
      const judulMatch = lkpdContent.match(/\*\*Judul\*\*\s*:\s*([^\n]+)|#+\s*([^\n]+LKM[^\n]*|[^\n]+LKPD[^\n]*|[^\n]+Ekspedisi[^\n]*)/i);
      if (judulMatch) {
        base.lkpd.judul = (judulMatch[1] || judulMatch[2]).replace(/^[#*\s]+|[#*\s]+$/g, "");
      }
    }
  } catch (err) {
    console.warn("Markdown parsing warning:", err);
  }

  return base;
}
