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

    // Extract Section A: IDENTIFIKASI
    const kesiapanMatch = markdown.match(/\*?\*?Identifikasi Kesiapan Murid:\*?\*?\s*([\s\S]*?)(?=\n\*?\*?Karakteristik|\n\*\*Dimensi|\n## B|$)/i);
    if (kesiapanMatch && kesiapanMatch[1].trim()) {
      base.kesiapanMurid = kesiapanMatch[1].trim();
    }

    const karakteristikMatch = markdown.match(/\*?\*?Karakteristik Materi Pelajaran:\*?\*?\s*([\s\S]*?)(?=\n\*?\*?Dimensi|\n## B|$)/i);
    if (karakteristikMatch && karakteristikMatch[1].trim()) {
      base.karakteristikMateriPelajaran = karakteristikMatch[1].trim();
      base.karakteristikMateri = karakteristikMatch[1].trim();
    }

    // Extract Section B: DESAIN PEMBELAJARAN
    const cpMatch = markdown.match(/\*?\*?Capaian Pembelajaran:\*?\*?\s*([\s\S]*?)(?=\n\*?\*?Tujuan Pembelajaran|\n\*?\*?Praktik Pedagogis|$)/i);
    if (cpMatch && cpMatch[1].trim()) {
      base.capaianPembelajaran = cpMatch[1].trim();
    }

    const tpMatch = markdown.match(/\*?\*?Tujuan Pembelajaran:\*?\*?\s*([\s\S]*?)(?=\n\*?\*?Praktik Pedagogis|\n\*?\*?Pendekatan|$)/i);
    if (tpMatch && tpMatch[1].trim()) {
      base.tujuanPembelajaran = tpMatch[1].trim();
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
