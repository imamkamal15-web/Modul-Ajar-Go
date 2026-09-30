import React, { useState } from "react";
import { X, Save, Edit3, School, BookOpen } from "lucide-react";
import { DeepLearningModule } from "../types";
import { generateModuleMarkdown } from "../utils/markdownGenerator";
import { buildFallbackModule } from "../utils/generatorEngine";

interface EditModuleModalProps {
  isOpen: boolean;
  onClose: () => void;
  module: DeepLearningModule;
  onSave: (updated: DeepLearningModule) => void;
}

export const EditModuleModal: React.FC<EditModuleModalProps> = ({
  isOpen,
  onClose,
  module,
  onSave,
}) => {
  const [formData, setFormData] = useState<DeepLearningModule>({ ...module });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      ...formData,
      rawMarkdown: generateModuleMarkdown(formData),
    };
    onSave(updated);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <Edit3 className="w-4 h-4 text-emerald-600" />
            <h2 className="text-sm font-bold text-slate-900">
              Sesuaikan Data & Identitas Modul
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 space-y-4 text-xs sm:text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Tahun Ajaran
              </label>
              <input
                type="text"
                value={formData.tahunAjaran}
                onChange={(e) => setFormData({ ...formData, tahunAjaran: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Sekolah
              </label>
              <input
                type="text"
                value={formData.namaSekolah}
                onChange={(e) => setFormData({ ...formData, namaSekolah: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Kelas
              </label>
              <input
                type="text"
                value={formData.kelas}
                onChange={(e) => setFormData({ ...formData, kelas: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Fase
              </label>
              <input
                type="text"
                value={formData.fase}
                onChange={(e) => setFormData({ ...formData, fase: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Semester
              </label>
              <input
                type="text"
                value={formData.semester}
                onChange={(e) => setFormData({ ...formData, semester: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Mata Pelajaran
              </label>
              <input
                type="text"
                value={formData.mataPelajaran}
                onChange={(e) => setFormData({ ...formData, mataPelajaran: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Materi Pelajaran
              </label>
              <input
                type="text"
                value={formData.materiPelajaran}
                onChange={(e) => setFormData({ ...formData, materiPelajaran: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Jumlah Pertemuan (Maks. 15)
              </label>
              <select
                value={formData.jumlahPertemuan || 1}
                onChange={(e) => {
                  const val = parseInt(e.target.value, 10);
                  const updated: DeepLearningModule = {
                    ...formData,
                    jumlahPertemuan: val,
                    alokasiWaktu:
                      val > 1 && !formData.alokasiWaktu.includes("Pertemuan")
                        ? `${val * 2} x 35 Menit (${val} Pertemuan)`
                        : formData.alokasiWaktu,
                  };
                  if (val > 1 && (!updated.daftarPertemuan || updated.daftarPertemuan.length !== val)) {
                    const regenerated = buildFallbackModule({
                      jenjang: "SD",
                      fase: updated.fase,
                      kelas: updated.kelas,
                      semester: updated.semester,
                      mataPelajaran: updated.mataPelajaran,
                      materiPelajaran: updated.materiPelajaran,
                      alokasiWaktu: updated.alokasiWaktu,
                      jumlahPertemuan: val,
                      modelPembelajaran: updated.modelPembelajaran,
                      tahunAjaran: updated.tahunAjaran,
                      namaSekolah: updated.namaSekolah,
                      namaGuru: updated.namaGuru,
                      nipGuru: updated.nipGuru,
                      namaKepsek: updated.namaKepsek,
                      nipKepsek: updated.nipKepsek,
                      kota: updated.kota,
                      capaianPembelajaran: updated.capaianPembelajaran,
                      tujuanPembelajaran: updated.tujuanPembelajaran,
                    });
                    if (regenerated.daftarPertemuan) {
                      updated.daftarPertemuan = regenerated.daftarPertemuan;
                    }
                  } else if (val === 1) {
                    updated.daftarPertemuan = undefined;
                  }
                  setFormData(updated);
                }}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs bg-white"
              >
                {Array.from({ length: 15 }, (_, i) => i + 1).map((n) => (
                  <option key={n} value={n}>
                    {n} Pertemuan
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Alokasi Waktu
              </label>
              <input
                type="text"
                value={formData.alokasiWaktu}
                onChange={(e) => setFormData({ ...formData, alokasiWaktu: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
              />
            </div>
          </div>

          <div className="space-y-3 border-t border-slate-200 pt-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              A. Identifikasi Pembelajaran
            </h3>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Identifikasi Kesiapan Murid
              </label>
              <textarea
                rows={2}
                value={formData.kesiapanMurid}
                onChange={(e) => setFormData({ ...formData, kesiapanMurid: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                placeholder="Uraian kesiapan murid..."
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Karakteristik Materi Pelajaran
              </label>
              <textarea
                rows={2}
                value={formData.karakteristikMateriPelajaran}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    karakteristikMateriPelajaran: e.target.value,
                    karakteristikMateri: e.target.value,
                  })
                }
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                placeholder="Uraian karakteristik materi..."
              />
            </div>
            {formData.dimensiProfilLulusan && formData.dimensiProfilLulusan.length > 0 && (
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Dimensi Profil Lulusan yang Disasar (Centang yang aktif)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                  {formData.dimensiProfilLulusan.map((dim, idx) => (
                    <label
                      key={dim.key || idx}
                      className={`flex items-start gap-2 p-2 rounded-md border cursor-pointer select-none transition-colors ${
                        dim.checked
                          ? "bg-emerald-50 border-emerald-300 text-slate-900"
                          : "bg-white border-slate-200 text-slate-500 opacity-70 hover:opacity-100"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={dim.checked}
                        onChange={(e) => {
                          const updated = [...formData.dimensiProfilLulusan];
                          updated[idx] = { ...updated[idx], checked: e.target.checked };
                          setFormData({ ...formData, dimensiProfilLulusan: updated });
                        }}
                        className="mt-0.5 rounded text-emerald-600 focus:ring-emerald-500"
                      />
                      <div className="text-xs">
                        <div className="font-semibold text-slate-900">{dim.label}</div>
                        {dim.penjelasan && (
                          <div className="text-[10px] text-slate-500 line-clamp-1">{dim.penjelasan}</div>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-3 border-t border-slate-200 pt-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              B. Desain Pembelajaran
            </h3>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Capaian Pembelajaran (CP)
              </label>
              <textarea
                rows={2}
                value={formData.capaianPembelajaran}
                onChange={(e) => setFormData({ ...formData, capaianPembelajaran: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                placeholder="Capaian Pembelajaran resmi..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Tujuan Pembelajaran (TP)
              </label>
              <textarea
                rows={3}
                value={formData.tujuanPembelajaran}
                onChange={(e) => setFormData({ ...formData, tujuanPembelajaran: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
                placeholder="Rumusan prinsip ABCD..."
              />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Guru
              </label>
              <input
                type="text"
                value={formData.namaGuru}
                onChange={(e) => setFormData({ ...formData, namaGuru: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                NIP Guru
              </label>
              <input
                type="text"
                value={formData.nipGuru}
                onChange={(e) => setFormData({ ...formData, nipGuru: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Nama Kepala Sekolah
              </label>
              <input
                type="text"
                value={formData.namaKepsek}
                onChange={(e) => setFormData({ ...formData, namaKepsek: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                NIP Kepala Sekolah
              </label>
              <input
                type="text"
                value={formData.nipKepsek}
                onChange={(e) => setFormData({ ...formData, nipKepsek: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Kota Penandatanganan
              </label>
              <input
                type="text"
                value={formData.kota}
                onChange={(e) => setFormData({ ...formData, kota: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Tanggal Penandatanganan
              </label>
              <input
                type="text"
                value={formData.tanggal}
                onChange={(e) => setFormData({ ...formData, tanggal: e.target.value })}
                className="w-full px-3 py-1.5 rounded-lg border border-slate-300 text-xs"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-200 flex items-center justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-100 text-xs font-medium"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 shadow-xs"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Simpan Perubahan</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
