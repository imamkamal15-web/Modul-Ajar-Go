import React, { useState } from "react";
import {
  X,
  Sparkles,
  BookOpen,
  School,
  Clock,
  User,
  MapPin,
  HelpCircle,
  Lightbulb,
  CheckCircle2,
  Loader2,
  Target,
  CheckSquare,
  Square,
  RotateCcw,
  Compass,
  Layers,
} from "lucide-react";
import { DeepLearningModule } from "../types";
import {
  GenerateFormValues,
  buildFallbackModule,
  STANDARD_PROFIL_DIMENSI,
  suggestCpAndTp,
} from "../utils/generatorEngine";
import { generateModuleMarkdown } from "../utils/markdownGenerator";
import { parseMarkdownToModule } from "../utils/markdownParser";

interface GeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerated: (module: DeepLearningModule) => void;
}

const TOPIC_SUGGESTIONS = [
  {
    mapel: "Ilmu Pengetahuan Alam dan Sosial (IPAS)",
    materi: "Fotosintesis: Proses Tumbuhan Menghasilkan Makanan dan Oksigen",
    jenjang: "SD",
    kelas: "Kelas 4",
    fase: "Fase B",
    model: "Problem Based Learning (PBL) dipadu Gamifikasi",
    cp: "Pada akhir Fase B, peserta didik menganalisis hubungan antara kebutuhan tumbuhan untuk fotosintesis (cahaya, air, klorofil, karbon dioksida) dan kaitannya dengan kelangsungan hidup makhluk hidup di bumi.",
    tp: "1. Murid mampu menganalisis proses fotosintesis tumbuhan dan zat yang dihasilkan melalui investigasi terpandu.\n2. Murid mampu menyajikan laporan skema fotosintesis dan rantai makanan secara kreatif dan kolaboratif.",
    dimensi: ["penalaran-kritis", "kreativitas", "kolaborasi", "keimanan-ketaqwaan"],
  },
  {
    mapel: "Matematika",
    materi: "Penjumlahan dan Pengurangan Pecahan Berpenyebut Berbeda",
    jenjang: "SD",
    kelas: "Kelas 5",
    fase: "Fase C",
    model: "Problem Based Learning (PBL) berbasis Manipulatif Visual",
    cp: "Pada akhir Fase C, peserta didik dapat membandingkan dan mengurutkan berbagai pecahan termasuk pecahan campuran, serta melakukan operasi penjumlahan dan pengurangan pecahan dengan penyebut berbeda.",
    tp: "1. Murid mampu menyamakan penyebut pecahan tidak sejenis menggunakan konsep KPK dan media manipulatif.\n2. Murid mampu memecahkan masalah sehari-hari yang berkaitan dengan operasi pecahan berpenyebut tidak sama.",
    dimensi: ["penalaran-kritis", "kemandirian", "kolaborasi"],
  },
  {
    mapel: "Bahasa Indonesia",
    materi: "Menulis Teks Narasi Kreatif Berdasarkan Pengalaman Nyata",
    jenjang: "SD",
    kelas: "Kelas 4",
    fase: "Fase B",
    model: "Project Based Learning (PjBL)",
    cp: "Pada akhir Fase B, peserta didik mampu menulis teks narasi sederhana dengan alur runtut (orientasi, masalah, penyelesaian), kosa kata kaya, serta penerapan ejaan dan tanda baca yang tepat.",
    tp: "1. Murid mampu menyusun kerangka cerita narasi berdasarkan peristiwa nyata yang berkesan.\n2. Murid mampu mengembangkan draft tulisan menjadi cerita narasi kreatif yang utuh dan menarik dibaca.",
    dimensi: ["kreativitas", "komunikasi", "kemandirian"],
  },
  {
    mapel: "Pendidikan Pancasila",
    materi: "Gotong Royong dalam Kehidupan Bermasyarakat di Indonesia",
    jenjang: "SD",
    kelas: "Kelas 4",
    fase: "Fase B",
    model: "Inquiry Based Learning & Studi Kasus",
    cp: "Pada akhir Fase B, peserta didik mampu mengidentifikasi dan mempraktikkan bentuk-bentuk gotong royong dalam keberagaman suku, agama, dan budaya di lingkungan sekitar sekolah dan tempat tinggal.",
    tp: "1. Murid mampu menguraikan nilai penting kerja sama dan gotong royong melalui telaah studi kasus nyata.\n2. Murid mampu merancang kesepakatan aksi peduli lingkungan kelas secara berkelompok.",
    dimensi: ["kolaborasi", "kewargaan", "keimanan-ketaqwaan", "komunikasi"],
  },
  {
    mapel: "Ilmu Pengetahuan Alam (IPA)",
    materi: "Ekosistem dan Jaring-Jaring Makanan di Lingkungan Sekolah",
    jenjang: "SMP",
    kelas: "Kelas 7",
    fase: "Fase D",
    model: "Discovery Learning & Observasi Lapangan",
    cp: "Pada akhir Fase D, peserta didik mampu mengidentifikasi interaksi antarmakhluk hidup dan lingkungannya dalam jaring-jaring makanan serta memprediksi dampak perubahan lingkungan terhadap ekosistem.",
    tp: "1. Murid mampu mengidentifikasi rantai makanan dan tingkatan trofik melalui pengamatan kebun sekolah.\n2. Murid mampu memprediksi dampak gangguan ekologis terhadap dinamika populasi konsumen dan produsen.",
    dimensi: ["penalaran-kritis", "kolaborasi", "kewargaan"],
  },
  {
    mapel: "Informatika",
    materi: "Berpikir Komputasional: Dekomposisi Masalah Sehari-Hari",
    jenjang: "SMP",
    kelas: "Kelas 8",
    fase: "Fase D",
    model: "Problem Based Learning (PBL) Unplugged",
    cp: "Pada akhir Fase D, peserta didik mampu menerapkan prinsip berpikir komputasional (dekomposisi, pengenalan pola, abstraksi, dan perancangan algoritma) untuk menyelesaikan tantangan logis terstruktur.",
    tp: "1. Murid mampu memecah suatu proses aktivitas rumit menjadi tahapan langkah kerja sederhana (dekomposisi).\n2. Murid mampu mempresentasikan algoritma pemecahan masalah dengan diagram alur yang jelas.",
    dimensi: ["penalaran-kritis", "kreativitas", "kemandirian"],
  },
];

export const GeneratorModal: React.FC<GeneratorModalProps> = ({
  isOpen,
  onClose,
  onGenerated,
}) => {
  const [form, setForm] = useState<GenerateFormValues>({
    jenjang: "SD",
    fase: "Fase B",
    kelas: "Kelas 4",
    semester: "Semester 1 (Ganjil)",
    mataPelajaran: "Ilmu Pengetahuan Alam dan Sosial (IPAS)",
    materiPelajaran: "Fotosintesis: Proses Tumbuhan Menghasilkan Makanan dan Oksigen",
    alokasiWaktu: "2 x 35 Menit (1 Pertemuan)",
    jumlahPertemuan: 1,
    modelPembelajaran: "Problem Based Learning (PBL) dipadu Gamifikasi",
    tahunAjaran: "2024/2025",
    namaSekolah: "SD Negeri Merdeka Belajar",
    namaGuru: "Imam Kamaluddin, S.Pd., Gr.",
    nipGuru: "19890821 201502 1 002",
    namaKepsek: "Drs. H. Mulyadi, M.Pd.",
    nipKepsek: "19720415 199803 1 004",
    kota: "Jakarta",
    catatanTambahan: "Fokuskan pada latihan berkesadaran (mindful check-in) di awal dan pengalaman konkret murid.",
    capaianPembelajaran: "",
    tujuanPembelajaran: "",
    dimensiProfilLulusan: [
      "penalaran-kritis",
      "kreativitas",
      "kolaborasi",
      "kemandirian",
      "keimanan-ketaqwaan",
    ],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [loadingStep, setLoadingStep] = useState<string>("");

  if (!isOpen) return null;

  const handleApplySuggestion = (sug: (typeof TOPIC_SUGGESTIONS)[0]) => {
    setForm((prev) => ({
      ...prev,
      mataPelajaran: sug.mapel,
      materiPelajaran: sug.materi,
      jenjang: sug.jenjang,
      kelas: sug.kelas,
      fase: sug.fase,
      modelPembelajaran: sug.model,
      capaianPembelajaran: sug.cp,
      tujuanPembelajaran: sug.tp,
      dimensiProfilLulusan: sug.dimensi,
    }));
  };

  const toggleDimensi = (key: string) => {
    setForm((prev) => {
      const current = prev.dimensiProfilLulusan || [];
      const exists = current.includes(key);
      const updated = exists ? current.filter((k) => k !== key) : [...current, key];
      return { ...prev, dimensiProfilLulusan: updated };
    });
  };

  const handleSelectAllDimensi = () => {
    setForm((prev) => ({
      ...prev,
      dimensiProfilLulusan: STANDARD_PROFIL_DIMENSI.map((d) => d.key),
    }));
  };

  const handleSelectCoreDimensi = () => {
    setForm((prev) => ({
      ...prev,
      dimensiProfilLulusan: ["penalaran-kritis", "kreativitas", "kolaborasi"],
    }));
  };

  const handleResetDimensi = () => {
    setForm((prev) => ({
      ...prev,
      dimensiProfilLulusan: [],
    }));
  };

  const handleAutoSuggestCpTp = () => {
    const { cp, tp } = suggestCpAndTp(form.mataPelajaran, form.fase, form.materiPelajaran);
    setForm((prev) => ({
      ...prev,
      capaianPembelajaran: cp,
      tujuanPembelajaran: tp,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setLoadingStep("Menghubungi AI Expert Instructional Designer...");

    try {
      setLoadingStep("Menganalisis prinsip Deep Learning (Bermakna, Berkesadaran, Menggembirakan)...");

      const response = await fetch("/api/generate-module", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      setLoadingStep("Menyusun sintak pengalaman belajar, LKPD tematik, dan rubrik asesmen...");
      const data = await response.json();

      if (data.module) {
        if (!data.module.rawMarkdown) {
          data.module.rawMarkdown = generateModuleMarkdown(data.module);
        }
        onGenerated(data.module);
        onClose();
        return;
      } else if (data.markdown) {
        const parsed = parseMarkdownToModule(data.markdown, form);
        onGenerated(parsed);
        onClose();
        return;
      }
    } catch (err) {
      console.warn("API call failed or unavailable, activating smart pedagogical fallback generator:", err);
      // Seamlessly construct a complete high-fidelity module with our deep learning generator engine
      const generated = buildFallbackModule(form);
      generated.rawMarkdown = generateModuleMarkdown(generated);
      onGenerated(generated);
      onClose();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-amber-200" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900">
                Rancang Modul Deep Learning Baru
              </h2>
              <p className="text-xs text-slate-500">
                Sesuai Struktur Baku Kurikulum Merdeka Indonesia
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-6 flex-1 text-xs sm:text-sm">
          {/* Quick suggestions */}
          <div>
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 mb-2">
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              <span>Inspirasi Cepat Topik Pembelajaran:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {TOPIC_SUGGESTIONS.map((sug, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => handleApplySuggestion(sug)}
                  className="px-2.5 py-1 rounded-lg text-xs bg-slate-100 hover:bg-emerald-50 hover:text-emerald-900 hover:border-emerald-300 border border-slate-200 text-slate-700 transition-colors text-left"
                >
                  <span className="font-semibold text-slate-900">{sug.mapel}</span> ({sug.kelas}) - {sug.materi.slice(0, 35)}...
                </button>
              ))}
            </div>
          </div>

          {/* Section 1: Academic Info */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
              <span>1. Identitas Mata Pelajaran & Kurikulum</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mata Pelajaran <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.mataPelajaran}
                  onChange={(e) => setForm({ ...form, mataPelajaran: e.target.value })}
                  placeholder="Contoh: IPAS / Matematika / Bahasa Indonesia"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Tahun Ajaran <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={form.tahunAjaran}
                  onChange={(e) => setForm({ ...form, tahunAjaran: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-xs sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Topik / Materi Pelajaran Spesifik <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                required
                value={form.materiPelajaran}
                onChange={(e) => setForm({ ...form, materiPelajaran: e.target.value })}
                placeholder="Contoh: Fotosintesis: Proses Tumbuhan Menghasilkan Makanan"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 focus:outline-none text-xs sm:text-sm"
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Jenjang
                </label>
                <select
                  value={form.jenjang}
                  onChange={(e) => setForm({ ...form, jenjang: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                >
                  <option value="SD">SD / MI</option>
                  <option value="SMP">SMP / MTs</option>
                  <option value="SMA">SMA / MA</option>
                  <option value="SMK">SMK</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Fase
                </label>
                <select
                  value={form.fase}
                  onChange={(e) => setForm({ ...form, fase: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                >
                  <option value="Fase A">Fase A (Kls 1-2)</option>
                  <option value="Fase B">Fase B (Kls 3-4)</option>
                  <option value="Fase C">Fase C (Kls 5-6)</option>
                  <option value="Fase D">Fase D (Kls 7-9)</option>
                  <option value="Fase E">Fase E (Kls 10)</option>
                  <option value="Fase F">Fase F (Kls 11-12)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kelas
                </label>
                <input
                  type="text"
                  value={form.kelas}
                  onChange={(e) => setForm({ ...form, kelas: e.target.value })}
                  placeholder="Kelas 4"
                  className="w-full px-2.5 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Semester
                </label>
                <select
                  value={form.semester}
                  onChange={(e) => setForm({ ...form, semester: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                >
                  <option value="Semester 1 (Ganjil)">Semester 1 (Ganjil)</option>
                  <option value="Semester 2 (Genap)">Semester 2 (Genap)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Model Pembelajaran
                </label>
                <select
                  value={form.modelPembelajaran}
                  onChange={(e) => setForm({ ...form, modelPembelajaran: e.target.value })}
                  className="w-full px-2.5 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                >
                  <option value="Problem Based Learning (PBL) dipadu Gamifikasi">
                    PBL + Gamifikasi
                  </option>
                  <option value="Project Based Learning (PjBL)">
                    Project Based Learning (PjBL)
                  </option>
                  <option value="Discovery Learning">
                    Discovery Learning
                  </option>
                  <option value="Inquiry Based Learning">
                    Inquiry Based Learning
                  </option>
                  <option value="Experiential Learning">
                    Experiential Learning
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Jumlah Pertemuan <span className="text-emerald-600 font-bold">★</span>
                </label>
                <select
                  value={form.jumlahPertemuan || 1}
                  onChange={(e) => {
                    const val = parseInt(e.target.value, 10);
                    let defaultAlokasi = form.alokasiWaktu;
                    if (val === 1) defaultAlokasi = "2 x 35 Menit (1 Pertemuan)";
                    else if (val === 2) defaultAlokasi = "4 x 35 Menit (2 Pertemuan)";
                    else if (val === 3) defaultAlokasi = "6 x 35 Menit (3 Pertemuan)";
                    else if (val === 4) defaultAlokasi = "8 x 35 Menit (4 Pertemuan)";
                    setForm({ ...form, jumlahPertemuan: val, alokasiWaktu: defaultAlokasi });
                  }}
                  className="w-full px-2.5 py-2 rounded-lg border border-emerald-300 bg-emerald-50/40 text-emerald-950 font-medium focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                >
                  <option value={1}>1 Pertemuan</option>
                  <option value={2}>2 Pertemuan</option>
                  <option value={3}>3 Pertemuan</option>
                  <option value={4}>4 Pertemuan</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Alokasi Waktu
                </label>
                <input
                  type="text"
                  value={form.alokasiWaktu}
                  onChange={(e) => setForm({ ...form, alokasiWaktu: e.target.value })}
                  placeholder="2 x 35 Menit"
                  className="w-full px-2.5 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Section 2: Capaian & Tujuan Pembelajaran (CP & TP) */}
          <div className="space-y-3 pt-3 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-emerald-600" />
                  <span>2. Capaian & Tujuan Pembelajaran (CP & TP)</span>
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Masukkan CP resmi & rumusan TP yang Anda gunakan, atau gunakan rekomendasi kurikulum otomatis.
                </p>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={handleAutoSuggestCpTp}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-emerald-800 bg-emerald-100/80 hover:bg-emerald-200/90 border border-emerald-300 transition-colors shadow-2xs"
                  title="Otomatis isi rekomendasi CP & TP standar sesuai mata pelajaran dan materi"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>Rekomendasikan CP & TP</span>
                </button>
                {(form.capaianPembelajaran || form.tujuanPembelajaran) && (
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, capaianPembelajaran: "", tujuanPembelajaran: "" })}
                    className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                    title="Kosongkan kolom CP & TP"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            <div className="space-y-3 bg-slate-50/80 p-3.5 rounded-xl border border-slate-200">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-slate-800 flex items-center gap-1">
                    <span>Capaian Pembelajaran (CP) Sesuai Fase & Elemen</span>
                  </label>
                  <span className="text-[10px] text-slate-400 italic">Opsional / Dokumen Resmi</span>
                </div>
                <textarea
                  rows={2}
                  value={form.capaianPembelajaran || ""}
                  onChange={(e) => setForm({ ...form, capaianPembelajaran: e.target.value })}
                  placeholder={`Contoh: Pada akhir ${form.fase || "fase"}, murid menganalisis proses fotosintesis pada tumbuhan, memahami peran penting cahaya matahari, serta mengaitkannya dengan jaring-jaring makanan...`}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 bg-white text-xs sm:text-sm placeholder:text-slate-400 transition-shadow"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="text-xs font-semibold text-slate-800 flex items-center gap-1">
                    <span>Tujuan Pembelajaran (TP) Berbasis Operasional ABCD</span>
                  </label>
                  <span className="text-[10px] text-slate-400 italic">Opsional / Alur Tujuan Pembelajaran</span>
                </div>
                <textarea
                  rows={3}
                  value={form.tujuanPembelajaran || ""}
                  onChange={(e) => setForm({ ...form, tujuanPembelajaran: e.target.value })}
                  placeholder="Contoh:&#10;1. Melalui observasi video dan simulasi, murid mampu menganalisis bahan dan hasil fotosintesis dengan akurasi 80%.&#10;2. Melalui diskusi tim terarah, murid mampu merumuskan kesimpulan manfaat fotosintesis bagi makhluk hidup."
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 bg-white text-xs sm:text-sm placeholder:text-slate-400 font-mono text-xs transition-shadow"
                />
              </div>

              <div className="text-[11px] text-emerald-900 bg-emerald-50/90 p-2.5 rounded-lg border border-emerald-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>
                  <strong>Kemudahan Guru:</strong> Jika kolom CP & TP ini diisi, modul yang dihasilkan akan <strong>100% menggunakan rumusan CP & TP yang Anda tetapkan</strong> sehingga dijamin selaras dengan buku administrasi sekolah dan ATP Anda.
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Pilihan Dimensi Profil Lulusan / Profil Pelajar Pancasila */}
          <div className="space-y-3 pt-3 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-teal-600" />
                    <span>3. Pilihan Dimensi Profil Lulusan</span>
                  </h3>
                  <span className="px-2 py-0.5 text-[10px] font-bold bg-teal-100 text-teal-800 rounded-full border border-teal-200">
                    {form.dimensiProfilLulusan?.length || 0} dari {STANDARD_PROFIL_DIMENSI.length} Dipilih
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Centang dimensi karakter Profil Pelajar Pancasila yang ingin disasar dan diperkuat pada pembelajaran ini.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                <button
                  type="button"
                  onClick={handleSelectAllDimensi}
                  className="px-2.5 py-1 text-[11px] rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold border border-slate-200 transition-colors"
                >
                  Pilih Semua (7)
                </button>
                <button
                  type="button"
                  onClick={handleSelectCoreDimensi}
                  className="px-2.5 py-1 text-[11px] rounded-md bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 font-semibold transition-colors"
                >
                  Fokus Inti (3)
                </button>
                <button
                  type="button"
                  onClick={handleResetDimensi}
                  className="px-2 py-1 text-[11px] rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  Kosongkan
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {STANDARD_PROFIL_DIMENSI.map((dim) => {
                const isChecked = form.dimensiProfilLulusan?.includes(dim.key) ?? true;
                return (
                  <div
                    key={dim.key}
                    onClick={() => toggleDimensi(dim.key)}
                    className={`flex items-start gap-2.5 p-2.5 rounded-xl border cursor-pointer select-none transition-all ${
                      isChecked
                        ? "bg-teal-50/70 border-teal-300 text-slate-900 shadow-2xs ring-1 ring-teal-200"
                        : "bg-slate-50/60 border-slate-200 hover:border-slate-300 text-slate-500"
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-teal-700" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <span className={`text-xs font-bold ${isChecked ? "text-teal-950" : "text-slate-700"}`}>
                          {dim.label}
                        </span>
                        {isChecked && (
                          <span className="text-[9px] font-semibold text-teal-700 bg-teal-100/90 px-1.5 py-0.2 rounded">
                            Aktif
                          </span>
                        )}
                      </div>
                      <p className="text-[11px] text-slate-500 mt-0.5 line-clamp-1 leading-snug">
                        {dim.sublabel}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 4: School & Signature Data */}
          <div className="space-y-4 pt-2 border-t border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <School className="w-3.5 h-3.5 text-teal-600" />
              <span>4. Satuan Pendidikan & Legalitas Tanda Tangan</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Nama Satuan Pendidikan / Sekolah
                </label>
                <input
                  type="text"
                  value={form.namaSekolah}
                  onChange={(e) => setForm({ ...form, namaSekolah: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Kota / Kabupaten
                </label>
                <input
                  type="text"
                  value={form.kota}
                  onChange={(e) => setForm({ ...form, kota: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Guru
                  </label>
                  <input
                    type="text"
                    value={form.namaGuru}
                    onChange={(e) => setForm({ ...form, namaGuru: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    NIP Guru
                  </label>
                  <input
                    type="text"
                    value={form.nipGuru}
                    onChange={(e) => setForm({ ...form, nipGuru: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Kepala Sekolah
                  </label>
                  <input
                    type="text"
                    value={form.namaKepsek}
                    onChange={(e) => setForm({ ...form, namaKepsek: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    NIP Kepala Sekolah
                  </label>
                  <input
                    type="text"
                    value={form.nipKepsek}
                    onChange={(e) => setForm({ ...form, nipKepsek: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Special Notes */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              5. Catatan Kesiapan Murid / Kebutuhan Khusus Kelas (Opsional)
            </h3>
            <textarea
              rows={2}
              value={form.catatanTambahan}
              onChange={(e) => setForm({ ...form, catatanTambahan: e.target.value })}
              placeholder="Contoh: Murid aktif menyukai permainan, 3 siswa butuh visual tambahan, sediakan media video..."
              className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
            />
          </div>

          {/* Modal Footer */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 font-medium text-xs transition-colors"
            >
              Batal
            </button>

            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-md transition-all disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-white" />
                  <span>Sedang Merancang...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-200" />
                  <span>Rancang Modul Lengkap</span>
                </>
              )}
            </button>
          </div>

          {isLoading && (
            <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin text-emerald-700 shrink-0" />
              <span>{loadingStep || "Sedang memproses instruksi..."}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};
