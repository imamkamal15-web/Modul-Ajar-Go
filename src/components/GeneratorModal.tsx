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
} from "lucide-react";
import { DeepLearningModule } from "../types";
import { GenerateFormValues, buildFallbackModule } from "../utils/generatorEngine";
import { generateModuleMarkdown } from "../utils/markdownGenerator";

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
  },
  {
    mapel: "Matematika",
    materi: "Penjumlahan dan Pengurangan Pecahan Berpenyebut Berbeda",
    jenjang: "SD",
    kelas: "Kelas 5",
    fase: "Fase C",
    model: "Problem Based Learning (PBL) berbasis Manipulatif Visual",
  },
  {
    mapel: "Bahasa Indonesia",
    materi: "Menulis Teks Narasi Kreatif Berdasarkan Pengalaman Nyata",
    jenjang: "SD",
    kelas: "Kelas 4",
    fase: "Fase B",
    model: "Project Based Learning (PjBL)",
  },
  {
    mapel: "Pendidikan Pancasila",
    materi: "Gotong Royong dalam Kehidupan Bermasyarakat di Indonesia",
    jenjang: "SD",
    kelas: "Kelas 4",
    fase: "Fase B",
    model: "Inquiry Based Learning & Studi Kasus",
  },
  {
    mapel: "Ilmu Pengetahuan Alam (IPA)",
    materi: "Ekosistem dan Jaring-Jaring Makanan di Lingkungan Sekolah",
    jenjang: "SMP",
    kelas: "Kelas 7",
    fase: "Fase D",
    model: "Discovery Learning & Observasi Lapangan",
  },
  {
    mapel: "Informatika",
    materi: "Berpikir Komputasional: Dekomposisi Masalah Sehari-Hari",
    jenjang: "SMP",
    kelas: "Kelas 8",
    fase: "Fase D",
    model: "Problem Based Learning (PBL) Unplugged",
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
    modelPembelajaran: "Problem Based Learning (PBL) dipadu Gamifikasi",
    tahunAjaran: "2024/2025",
    namaSekolah: "SD Negeri Merdeka Belajar",
    namaGuru: "Imam Kamaluddin, S.Pd., Gr.",
    nipGuru: "19890821 201502 1 002",
    namaKepsek: "Drs. H. Mulyadi, M.Pd.",
    nipKepsek: "19720415 199803 1 004",
    kota: "Jakarta",
    catatanTambahan: "Fokuskan pada latihan berkesadaran (mindful check-in) di awal dan pengalaman konkret murid.",
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
        // Ensure raw markdown is generated or attached
        if (!data.module.rawMarkdown) {
          data.module.rawMarkdown = generateModuleMarkdown(data.module);
        }
        onGenerated(data.module);
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Model Pembelajaran
                </label>
                <select
                  value={form.modelPembelajaran}
                  onChange={(e) => setForm({ ...form, modelPembelajaran: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                >
                  <option value="Problem Based Learning (PBL) dipadu Gamifikasi">
                    Problem Based Learning (PBL) + Gamifikasi
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
                  Alokasi Waktu
                </label>
                <input
                  type="text"
                  value={form.alokasiWaktu}
                  onChange={(e) => setForm({ ...form, alokasiWaktu: e.target.value })}
                  placeholder="2 x 35 Menit (1 Pertemuan)"
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-500 text-xs sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* Section 2: School & Signature Data */}
          <div className="space-y-4 pt-2 border-t border-slate-200">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <School className="w-3.5 h-3.5 text-teal-600" />
              <span>2. Satuan Pendidikan & Legalitas Tanda Tangan</span>
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

          {/* Section 3: Special Notes */}
          <div className="space-y-2 pt-2 border-t border-slate-200">
            <label className="block text-xs font-semibold text-slate-700">
              Catatan Kesiapan Murid / Kebutuhan Khusus Kelas (Opsional)
            </label>
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
