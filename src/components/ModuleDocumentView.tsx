import React from "react";
import { DeepLearningModule } from "../types";
import {
  CheckCircle,
  HelpCircle,
  Clock,
  UserCheck,
  Check,
  Award,
  Sparkles,
  BookOpen,
  Users,
} from "lucide-react";

interface ModuleDocumentViewProps {
  module: DeepLearningModule;
}

export const ModuleDocumentView: React.FC<ModuleDocumentViewProps> = ({ module }) => {
  return (
    <article className="document-card bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10 md:p-14 max-w-5xl mx-auto text-slate-800 leading-relaxed text-sm sm:text-base">
      {/* Official Document Header */}
      <div className="text-center pb-6 border-b border-slate-300">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 mb-3 no-print">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Format Baku Pembelajaran Mendalam (Deep Learning) Kurikulum Merdeka</span>
        </div>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight uppercase">
          PERENCANAAN PEMBELAJARAN MENDALAM
        </h1>
        <p className="text-sm sm:text-base font-semibold text-emerald-800 mt-1 uppercase tracking-wide">
          (DEEP LEARNING)
        </p>
        <p className="text-xs text-slate-500 mt-1 font-medium">
          {module.namaSekolah}
        </p>
      </div>

      {/* Metadata Identity Box */}
      <div className="py-6 border-b border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-xs sm:text-sm">
        <div className="space-y-2">
          <div className="flex">
            <span className="w-44 font-bold text-slate-700">Tahun Ajaran</span>
            <span className="text-slate-900">: {module.tahunAjaran}</span>
          </div>
          <div className="flex">
            <span className="w-44 font-bold text-slate-700">Kelas / Fase / Semester</span>
            <span className="text-slate-900">: {module.kelas} / {module.fase} / {module.semester}</span>
          </div>
          <div className="flex">
            <span className="w-44 font-bold text-slate-700">Mata Pelajaran</span>
            <span className="text-slate-900 font-semibold">: {module.mataPelajaran}</span>
          </div>
          {module.jumlahPertemuan && module.jumlahPertemuan > 1 ? (
            <div className="flex items-center">
              <span className="w-44 font-bold text-emerald-800">Jumlah Pertemuan</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                : {module.jumlahPertemuan} Pertemuan
              </span>
            </div>
          ) : null}
        </div>
        <div className="space-y-2">
          <div className="flex">
            <span className="w-36 font-bold text-slate-700">Materi Pelajaran</span>
            <span className="text-slate-900 font-semibold">: {module.materiPelajaran}</span>
          </div>
          <div className="flex">
            <span className="w-36 font-bold text-slate-700">Alokasi Waktu</span>
            <span className="text-slate-900">: {module.alokasiWaktu}</span>
          </div>
          <div className="flex">
            <span className="w-36 font-bold text-slate-700">Model Pembelajaran</span>
            <span className="text-slate-900">: {module.modelPembelajaran}</span>
          </div>
        </div>
      </div>

      {/* SECTION A. IDENTIFIKASI */}
      <section id="section-identifikasi" className="pt-8 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-6 bg-emerald-600 rounded-xs"></span>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight uppercase">
            A. IDENTIFIKASI
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm pl-2">
          <div>
            <span className="font-bold text-slate-900 block mb-1">
              • Identifikasi Kesiapan Murid:
            </span>
            <p className="text-slate-700 text-justify pl-4 border-l-2 border-slate-200 py-0.5">
              {module.kesiapanMurid}
            </p>
          </div>

          <div>
            <span className="font-bold text-slate-900 block mb-1">
              • Karakteristik Materi Pelajaran:
            </span>
            <p className="text-slate-700 text-justify pl-4 border-l-2 border-slate-200 py-0.5">
              {module.karakteristikMateriPelajaran}
            </p>
          </div>

          <div>
            <span className="font-bold text-slate-900 block mb-2">
              • Dimensi Profil Lulusan:
            </span>
            {module.dimensiProfilLulusan.filter((d) => d.checked).length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 pl-2">
                {module.dimensiProfilLulusan
                  .filter((d) => d.checked)
                  .map((dim) => (
                    <div
                      key={dim.key}
                      className="p-2.5 rounded-lg border text-xs flex items-start gap-2.5 transition-colors bg-emerald-50/50 border-emerald-200 text-slate-800"
                    >
                      <div className="mt-0.5 w-4 h-4 rounded-xs flex items-center justify-center shrink-0 bg-emerald-600 text-white">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <div>
                        <span className="font-bold text-slate-900">{dim.label}</span>
                        {dim.penjelasan && (
                          <p className="text-slate-600 text-[11px] mt-0.5 leading-snug">
                            {dim.penjelasan}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
              </div>
            ) : (
              <div className="text-slate-500 text-xs italic pl-4 border-l-2 border-slate-200 py-1">
                Tidak ada dimensi khusus yang dipilih.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION B. DESAIN PEMBELAJARAN */}
      <section id="section-desain" className="pt-8 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-6 bg-teal-600 rounded-xs"></span>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight uppercase">
            B. DESAIN PEMBELAJARAN
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm pl-2">
          <div>
            <span className="font-bold text-slate-900 block mb-1">
              • Capaian Pembelajaran:
            </span>
            <p className="text-slate-700 text-justify pl-4 border-l-2 border-teal-200 py-0.5 bg-slate-50/50 p-2 rounded-r-lg">
              {module.capaianPembelajaran}
            </p>
          </div>

          <div>
            <span className="font-bold text-slate-900 block mb-1">
              • Tujuan Pembelajaran:
            </span>
            <p className="text-slate-700 text-justify pl-4 border-l-2 border-teal-200 py-0.5 bg-slate-50/50 p-2 rounded-r-lg">
              {module.tujuanPembelajaran}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-emerald-800">
                Praktik Pedagogis
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li>
                  <strong className="text-slate-900">Pendekatan:</strong>{" "}
                  {module.pendekatanPembelajaran}
                </li>
                <li>
                  <strong className="text-slate-900">Model:</strong>{" "}
                  {module.modelPembelajaran}
                </li>
                <li>
                  <strong className="text-slate-900">Metode:</strong>{" "}
                  {module.metodePembelajaran}
                </li>
              </ul>
            </div>

            <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-emerald-800">
                Lingkungan & Kemitraan
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700">
                <li>
                  <strong className="text-slate-900">Budaya Belajar:</strong>{" "}
                  {module.budayaBelajar}
                </li>
                <li>
                  <strong className="text-slate-900">Ruang Fisik:</strong>{" "}
                  {module.ruangFisik}
                </li>
                <li>
                  <strong className="text-slate-900">Kemitraan Antarmurid:</strong>{" "}
                  {module.kemitraanMurid}
                </li>
              </ul>
            </div>

            <div className="bg-slate-50/70 p-3.5 rounded-xl border border-slate-200 space-y-2 md:col-span-2">
              <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider text-emerald-800">
                Pemanfaatan Digital & Media
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700">
                <div>
                  <strong className="text-slate-900 block">Platform Desain / Digital:</strong>
                  <span>{module.platformDigital}</span>
                </div>
                <div>
                  <strong className="text-slate-900 block">Perangkat:</strong>
                  <span>{module.perangkat}</span>
                </div>
                <div>
                  <strong className="text-slate-900 block">Media & Bahan Ajar:</strong>
                  <span>{module.mediaPembelajaran}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C. PENGALAMAN BELAJAR (TABLE) */}
      <section id="section-pengalaman" className="pt-8 pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-6 bg-cyan-600 rounded-xs"></span>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight uppercase">
            C. PENGALAMAN BELAJAR
          </h2>
        </div>

        <p className="text-xs text-slate-500 mb-3 italic">
          Tabel alur pembelajaran mendalam mengintegrasikan prinsip Memahami, Mengaplikasi, dan Merefleksi dengan sintak model pedagogis.
        </p>

        {module.daftarPertemuan && module.daftarPertemuan.length > 1 ? (
          <div className="space-y-8">
            {module.daftarPertemuan.map((pertemuan, pIdx) => (
              <div key={pIdx} className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2 bg-cyan-50/80 px-4 py-2.5 rounded-lg border border-cyan-200">
                  <div className="font-bold text-cyan-950 text-sm flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-600"></span>
                    <span>{pertemuan.judulFokus}</span>
                  </div>
                  <span className="text-xs font-semibold bg-white text-cyan-800 px-3 py-1 rounded-full border border-cyan-200 shadow-2xs">
                    Alokasi: {pertemuan.alokasiWaktu}
                  </span>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-300">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="bg-slate-100 border-b border-slate-300 text-slate-800">
                        <th className="p-3 font-bold border-r border-slate-300 w-1/4">Kegiatan</th>
                        <th className="p-3 font-bold border-r border-slate-300 w-7/12">Deskripsi Kegiatan</th>
                        <th className="p-3 font-bold text-center w-1/6">Alokasi Waktu</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {/* Pendahuluan */}
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3 border-r border-slate-200 align-top">
                          <div className="font-bold text-slate-900 text-sm">Pendahuluan</div>
                          <div className="text-[11px] text-emerald-700 italic font-semibold mt-0.5">
                            (Memahami)
                          </div>
                        </td>
                        <td className="p-3 border-r border-slate-200 text-slate-700">
                          <ul className="space-y-1.5 list-disc pl-4">
                            {pertemuan.deskripsiPendahuluan.map((item, idx) => (
                              <li key={idx} className="leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="p-3 text-center align-middle font-semibold text-slate-700">
                          {pertemuan.waktuPendahuluan}
                        </td>
                      </tr>

                      {/* Inti */}
                      <tr className="bg-slate-50/30 hover:bg-slate-50/80">
                        <td className="p-3 border-r border-slate-200 align-top">
                          <div className="font-bold text-slate-900 text-sm">Inti</div>
                          <div className="text-[11px] text-blue-700 italic font-semibold mt-0.5">
                            (Memahami, Mengaplikasi)
                          </div>
                          <div className="mt-2 text-[10px] text-slate-500 leading-tight">
                            Model: {module.modelPembelajaran}
                          </div>
                        </td>
                        <td className="p-3 border-r border-slate-200 text-slate-700 space-y-4">
                          {pertemuan.sintakInti.map((sintak) => (
                            <div
                              key={sintak.sintakNomor}
                              className="p-3 bg-white rounded-lg border border-slate-200/90 shadow-2xs space-y-1.5"
                            >
                              <div className="flex flex-wrap items-center justify-between gap-1">
                                <span className="font-bold text-slate-900 text-xs">
                                  Sintak {sintak.sintakNomor}: {sintak.namaSintak}
                                </span>
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                                  {sintak.tagDeepLearning}
                                </span>
                              </div>
                              <div className="text-[11px] text-blue-700 font-medium">
                                Profil Disasar: {sintak.dimensiProfil}
                              </div>
                              <div className="text-xs text-slate-700 space-y-1 pt-1">
                                {sintak.deskripsi.split("\n").map((line, i) => (
                                  <p key={i} className="leading-relaxed pl-2 border-l border-emerald-400">
                                    {line}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ))}
                        </td>
                        <td className="p-3 text-center align-middle font-semibold text-slate-700">
                          {pertemuan.waktuInti}
                        </td>
                      </tr>

                      {/* Penutup */}
                      <tr className="hover:bg-slate-50/50">
                        <td className="p-3 border-r border-slate-200 align-top">
                          <div className="font-bold text-slate-900 text-sm">Penutup</div>
                          <div className="text-[11px] text-purple-700 italic font-semibold mt-0.5">
                            (Merefleksi)
                          </div>
                        </td>
                        <td className="p-3 border-r border-slate-200 text-slate-700">
                          <div className="font-bold text-purple-800 mb-1 text-xs uppercase tracking-wide">
                            DEEP LEARNING – MEREFLEKSI
                          </div>
                          <ul className="space-y-1.5 list-disc pl-4">
                            {pertemuan.deskripsiPenutup.map((item, idx) => (
                              <li key={idx} className="leading-relaxed">
                                {item}
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td className="p-3 text-center align-middle font-semibold text-slate-700">
                          {pertemuan.waktuPenutup}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-slate-300">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-slate-800">
                  <th className="p-3 font-bold border-r border-slate-300 w-1/4">Kegiatan</th>
                  <th className="p-3 font-bold border-r border-slate-300 w-7/12">Deskripsi Kegiatan</th>
                  <th className="p-3 font-bold text-center w-1/6">Alokasi Waktu</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {/* Pendahuluan */}
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 border-r border-slate-200 align-top">
                    <div className="font-bold text-slate-900 text-sm">Pendahuluan</div>
                    <div className="text-[11px] text-emerald-700 italic font-semibold mt-0.5">
                      (Memahami)
                    </div>
                  </td>
                  <td className="p-3 border-r border-slate-200 text-slate-700">
                    <ul className="space-y-1.5 list-disc pl-4">
                      {module.deskripsiPendahuluan.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-3 text-center align-middle font-semibold text-slate-700">
                    {module.waktuPendahuluan}
                  </td>
                </tr>

                {/* Inti */}
                <tr className="bg-slate-50/30 hover:bg-slate-50/80">
                  <td className="p-3 border-r border-slate-200 align-top">
                    <div className="font-bold text-slate-900 text-sm">Inti</div>
                    <div className="text-[11px] text-blue-700 italic font-semibold mt-0.5">
                      (Memahami, Mengaplikasi)
                    </div>
                    <div className="mt-2 text-[10px] text-slate-500 leading-tight">
                      Model: {module.modelPembelajaran}
                    </div>
                  </td>
                  <td className="p-3 border-r border-slate-200 text-slate-700 space-y-4">
                    {module.sintakInti.map((sintak) => (
                      <div
                        key={sintak.sintakNomor}
                        className="p-3 bg-white rounded-lg border border-slate-200/90 shadow-2xs space-y-1.5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1">
                          <span className="font-bold text-slate-900 text-xs">
                            Sintak {sintak.sintakNomor}: {sintak.namaSintak}
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-100 text-emerald-800">
                            {sintak.tagDeepLearning}
                          </span>
                        </div>
                        <div className="text-[11px] text-blue-700 font-medium">
                          Profil Disasar: {sintak.dimensiProfil}
                        </div>
                        <div className="text-xs text-slate-700 space-y-1 pt-1">
                          {sintak.deskripsi.split("\n").map((line, i) => (
                            <p key={i} className="leading-relaxed pl-2 border-l border-emerald-400">
                              {line}
                            </p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </td>
                  <td className="p-3 text-center align-middle font-semibold text-slate-700">
                    {module.waktuInti}
                  </td>
                </tr>

                {/* Penutup */}
                <tr className="hover:bg-slate-50/50">
                  <td className="p-3 border-r border-slate-200 align-top">
                    <div className="font-bold text-slate-900 text-sm">Penutup</div>
                    <div className="text-[11px] text-purple-700 italic font-semibold mt-0.5">
                      (Merefleksi)
                    </div>
                  </td>
                  <td className="p-3 border-r border-slate-200 text-slate-700">
                    <div className="font-bold text-purple-800 mb-1 text-xs uppercase tracking-wide">
                      DEEP LEARNING – MEREFLEKSI
                    </div>
                    <ul className="space-y-1.5 list-disc pl-4">
                      {module.deskripsiPenutup.map((item, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-3 text-center align-middle font-semibold text-slate-700">
                    {module.waktuPenutup}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* SECTION D. ASESMEN PEMBELAJARAN */}
      <section id="section-asesmen" className="pt-8 pb-8 border-b border-slate-200">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-2.5 h-6 bg-amber-600 rounded-xs"></span>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight uppercase">
            D. ASESMEN PEMBELAJARAN
          </h2>
        </div>

        <div className="space-y-3 text-xs sm:text-sm pl-2">
          <div>
            <strong className="text-slate-900 block">• Asesmen Formatif:</strong>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 mt-1">
              <li>
                <strong>Penilaian Sikap (Profil Lulusan):</strong> {module.asesmenFormatifSikap}
              </li>
              <li>
                <strong>Penilaian Keterampilan:</strong> {module.asesmenFormatifKeterampilan}
              </li>
            </ul>
          </div>
          <div>
            <strong className="text-slate-900 block">• Asesmen Sumatif:</strong>
            <p className="text-slate-700 pl-4 mt-1 border-l-2 border-amber-300">
              {module.asesmenSumatifDeskripsi}
            </p>
          </div>
        </div>
      </section>

      {/* SIGNATURE BLOCK 1 */}
      <div className="py-8 grid grid-cols-2 text-center text-xs sm:text-sm text-slate-800 print-avoid-break">
        <div>
          <p>Mengetahui,</p>
          <p className="font-bold text-slate-900">Kepala Sekolah</p>
          <div className="h-20"></div>
          <p className="font-bold text-slate-900 underline">({module.namaKepsek})</p>
          <p className="text-slate-600">NIP. {module.nipKepsek}</p>
        </div>
        <div>
          <p>{module.kota}, {module.tanggal}</p>
          <p className="font-bold text-slate-900">Guru Kelas / Mata Pelajaran</p>
          <div className="h-20"></div>
          <p className="font-bold text-slate-900 underline">({module.namaGuru})</p>
          <p className="text-slate-600">NIP. {module.nipGuru}</p>
        </div>
      </div>

      {/* PAGE BREAK FOR LAMPIRAN */}
      <div className="my-10 border-t-4 border-double border-slate-300 print-page-break"></div>

      {/* LAMPIRAN TITLE */}
      <div className="text-center pb-6">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight uppercase">
          LAMPIRAN-LAMPIRAN
        </h2>
        <p className="text-xs text-slate-500 font-medium">
          Materi Ajar, LKPD Interaktif, Rubrik Observasi Sikap 7 Dimensi, Kisi-Kisi Soal Evaluasi, dan Penilaian Keterampilan
        </p>
      </div>

      {/* LAMPIRAN 1: RINGKASAN MATERI AJAR */}
      <section id="section-lampiran-1" className="pt-6 pb-8 border-b border-slate-200">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-emerald-600" />
          <span>1. RINGKASAN MATERI AJAR</span>
        </h3>
        <div className="bg-slate-50/70 p-4 sm:p-6 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line text-justify">
          {module.ringkasanMateriAjar}
        </div>
      </section>

      {/* LAMPIRAN 2: LEMBAR KERJA MURID (LKM / LKPD) */}
      <section id="section-lampiran-2" className="pt-8 pb-8 border-b border-slate-200">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
          <Users className="w-4 h-4 text-teal-600" />
          <span>2. LEMBAR KERJA MURID (LKM / LKPD)</span>
        </h3>

        <div className="border-2 border-slate-300 rounded-xl p-5 sm:p-7 bg-white text-xs sm:text-sm space-y-4">
          <div className="text-center pb-3 border-b border-slate-200">
            <h4 className="font-extrabold text-sm sm:text-base text-slate-900 uppercase">
              {module.lkpd.judul}
            </h4>
            <p className="text-xs font-semibold text-emerald-700 mt-0.5 italic">
              Tema: {module.lkpd.temaKontekstual}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs bg-slate-50 p-2.5 rounded-lg">
            <div>
              <strong>Nama Kelompok:</strong> ........................................
            </div>
            <div>
              <strong>Kelas / Semester:</strong> {module.kelas} / {module.semester}
            </div>
            <div className="sm:col-span-2">
              <strong>Anggota:</strong> 1. .................... 2. .................... 3. .................... 4. ....................
            </div>
          </div>

          <div>
            <span className="font-bold text-slate-900 block mb-1">A. Petunjuk Belajar:</span>
            <ol className="list-decimal pl-5 space-y-1 text-slate-700">
              {module.lkpd.petunjukBelajar.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </div>

          <div>
            <span className="font-bold text-slate-900 block mb-1">B. Alat dan Bahan:</span>
            <ul className="list-disc pl-5 space-y-1 text-slate-700">
              {module.lkpd.alatDanBahan.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-bold text-slate-900 block mb-1">
              C. Langkah Aktivitas Penyelidikan:
            </span>
            <ol className="list-decimal pl-5 space-y-1 text-slate-700">
              {module.lkpd.langkahAktivitas.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ol>
          </div>

          {/* LKPD Observation Table */}
          {module.lkpd.tabelPengamatanHeader && module.lkpd.tabelPengamatanRows && (
            <div className="pt-2">
              <span className="font-bold text-slate-900 block mb-1.5">
                Tabel Kerja / Hasil Investigasi Siswa:
              </span>
              <div className="overflow-x-auto rounded-lg border border-slate-300">
                <table className="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-100 border-b border-slate-300 text-slate-800">
                      {module.lkpd.tabelPengamatanHeader.map((th, i) => (
                        <th key={i} className="p-2.5 font-bold border-r border-slate-300 last:border-r-0">
                          {th}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {module.lkpd.tabelPengamatanRows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50">
                        {row.map((cell, cIdx) => (
                          <td
                            key={cIdx}
                            className="p-2.5 border-r border-slate-200 last:border-r-0 text-slate-700"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <div>
            <span className="font-bold text-slate-900 block mb-1">
              D. Pertanyaan Analisis & Pemecahan Masalah:
            </span>
            <ol className="list-decimal pl-5 space-y-2 text-slate-700">
              {module.lkpd.pertanyaanAnalisis.map((item, idx) => (
                <li key={idx}>
                  <p>{item}</p>
                  <div className="mt-1 h-8 border-b border-dashed border-slate-300"></div>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <span className="font-bold text-slate-900 block mb-1">
              E. Refleksi Pribadi & Kelompok:
            </span>
            <ol className="list-decimal pl-5 space-y-2 text-slate-700">
              {module.lkpd.refleksiSiswa.map((item, idx) => (
                <li key={idx}>
                  <p>{item}</p>
                  <div className="mt-1 h-8 border-b border-dashed border-slate-300"></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* LAMPIRAN 3: PENILAIAN SIKAP (LEMBAR OBSERVASI DIMENSI PROFIL LULUSAN) */}
      <section id="section-lampiran-3" className="pt-8 pb-8 border-b border-slate-200">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
          <Award className="w-4 h-4 text-purple-600" />
          <span>3. PENILAIAN SIKAP (LEMBAR OBSERVASI DIMENSI PROFIL LULUSAN)</span>
        </h3>

        <div className="text-xs text-slate-600 mb-3 space-y-0.5">
          <p><strong>Nama Sekolah:</strong> {module.namaSekolah} | <strong>Tahun Ajaran:</strong> {module.tahunAjaran}</p>
          <p><strong>Fase / Kelas / Semester:</strong> {module.fase} / {module.kelas} / {module.semester}</p>
          <p><strong>Mata Pelajaran / Materi:</strong> {module.mataPelajaran} - {module.materiPelajaran}</p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-300">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-300 text-slate-800">
                <th className="p-2.5 font-bold border-r border-slate-300 w-12 text-center">No</th>
                <th className="p-2.5 font-bold border-r border-slate-300 w-1/4">Aspek Pengamatan</th>
                <th className="p-2.5 font-bold border-r border-slate-300 w-1/2">Kriteria Indikator</th>
                <th className="p-2.5 font-bold w-1/5 text-center">Skor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr>
                <td className="p-2.5 text-center font-bold border-r border-slate-200">1</td>
                <td className="p-2.5 font-bold border-r border-slate-200">Keimanan dan Ketaqwaan</td>
                <td className="p-2.5 border-r border-slate-200">• Berdoa sebelum & sesudah kegiatan.<br />• Khusyuk dan bersikap baik.</td>
                <td className="p-2.5 text-center text-[11px]">3 = 3 aspek<br />2 = 2 aspek<br />1 = 1 aspek</td>
              </tr>
              <tr>
                <td className="p-2.5 text-center font-bold border-r border-slate-200">2</td>
                <td className="p-2.5 font-bold border-r border-slate-200">Kewargaan</td>
                <td className="p-2.5 border-r border-slate-200">• Peduli & menghargai teman.<br />• Menggunakan bahasa santun.</td>
                <td className="p-2.5 text-center text-[11px]">3 = 3 aspek<br />2 = 2 aspek<br />1 = 1 aspek</td>
              </tr>
              <tr>
                <td className="p-2.5 text-center font-bold border-r border-slate-200">3</td>
                <td className="p-2.5 font-bold border-r border-slate-200">Penalaran Kritis</td>
                <td className="p-2.5 border-r border-slate-200">• Mampu mengidentifikasi & menganalisis masalah.<br />• Reflektif dalam memecahkan tugas.</td>
                <td className="p-2.5 text-center text-[11px]">3 = 3 aspek<br />2 = 2 aspek<br />1 = 1 aspek</td>
              </tr>
              <tr>
                <td className="p-2.5 text-center font-bold border-r border-slate-200">4</td>
                <td className="p-2.5 font-bold border-r border-slate-200">Kreativitas</td>
                <td className="p-2.5 border-r border-slate-200">• Mampu membuat ide/karya unik.<br />• Antusias menyelesaikan tantangan.</td>
                <td className="p-2.5 text-center text-[11px]">3 = 3 aspek<br />2 = 2 aspek<br />1 = 1 aspek</td>
              </tr>
              <tr>
                <td className="p-2.5 text-center font-bold border-r border-slate-200">5</td>
                <td className="p-2.5 font-bold border-r border-slate-200">Kolaborasi</td>
                <td className="p-2.5 border-r border-slate-200">• Aktif bekerja sama dalam tim.<br />• Membantu teman yang kesulitan.</td>
                <td className="p-2.5 text-center text-[11px]">3 = 3 aspek<br />2 = 2 aspek<br />1 = 1 aspek</td>
              </tr>
              <tr>
                <td className="p-2.5 text-center font-bold border-r border-slate-200">6</td>
                <td className="p-2.5 font-bold border-r border-slate-200">Kemandirian</td>
                <td className="p-2.5 border-r border-slate-200">• Mengelola waktu pengerjaan tugas.<br />• Percaya diri menyampaikan pendapat.</td>
                <td className="p-2.5 text-center text-[11px]">3 = 3 aspek<br />2 = 2 aspek<br />1 = 1 aspek</td>
              </tr>
              <tr>
                <td className="p-2.5 text-center font-bold border-r border-slate-200">7</td>
                <td className="p-2.5 font-bold border-r border-slate-200">Komunikasi</td>
                <td className="p-2.5 border-r border-slate-200">• Menyampaikan argumen dengan santun.<br />• Menyajikan hasil diskusi dengan jelas.</td>
                <td className="p-2.5 text-center text-[11px]">3 = 3 aspek<br />2 = 2 aspek<br />1 = 1 aspek</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* LAMPIRAN 4: PENILAIAN PENGETAHUAN (ASESMEN SUMATIF) */}
      <section id="section-lampiran-4" className="pt-8 pb-8 border-b border-slate-200">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-blue-600" />
          <span>4. PENILAIAN PENGETAHUAN (ASESMEN SUMATIF)</span>
        </h3>

        <p className="text-xs text-slate-500 mb-3">
          Tabel kisi-kisi dan butir soal evaluasi pemahaman konsep berbasis HOTs (C3-C5) dengan skor maksimal 30 poin.
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-300 mb-4">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-300 text-slate-800">
                <th className="p-2.5 font-bold border-r border-slate-300 w-10 text-center">No</th>
                <th className="p-2.5 font-bold border-r border-slate-300 w-1/4">Indikator Soal</th>
                <th className="p-2.5 font-bold border-r border-slate-300 w-5/12">Soal</th>
                <th className="p-2.5 font-bold border-r border-slate-300 w-16 text-center">Level</th>
                <th className="p-2.5 font-bold border-r border-slate-300 w-24 text-center">Jenis</th>
                <th className="p-2.5 font-bold text-center w-12">Skor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {module.soalEvaluasi.map((item) => (
                <tr key={item.no} className="hover:bg-slate-50">
                  <td className="p-2.5 text-center font-bold border-r border-slate-200 align-top">
                    {item.no}
                  </td>
                  <td className="p-2.5 border-r border-slate-200 align-top">
                    {item.indikator}
                  </td>
                  <td className="p-2.5 border-r border-slate-200 align-top space-y-1">
                    <div className="whitespace-pre-line leading-relaxed">{item.soal}</div>
                    {item.kunciJawaban && (
                      <div className="mt-2 text-[11px] text-emerald-800 bg-emerald-50/70 p-1.5 rounded-md border border-emerald-200">
                        {item.kunciJawaban}
                      </div>
                    )}
                  </td>
                  <td className="p-2.5 text-center border-r border-slate-200 align-top font-semibold text-slate-600">
                    {item.levelKognitif}
                  </td>
                  <td className="p-2.5 text-center border-r border-slate-200 align-top text-[11px]">
                    {item.jenisSoal}
                  </td>
                  <td className="p-2.5 text-center align-top font-bold text-slate-900">
                    {item.skor}
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-100/80 font-bold text-slate-900">
                <td colSpan={5} className="p-2.5 text-right border-r border-slate-300">
                  TOTAL SKOR MAKSIMAL
                </td>
                <td className="p-2.5 text-center">30</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Tabel Konversi Nilai */}
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
          <div className="font-bold text-slate-900 text-xs mb-1">
            Tabel Konversi Nilai Pengetahuan:
          </div>
          <p className="text-[11px] text-slate-600 mb-2 italic">
            Rumus: Nilai Akhir = (Skor Perolehan / 30) x 100
          </p>

          <div className="overflow-x-auto rounded-lg border border-slate-300">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-200/70 border-b border-slate-300 text-slate-800">
                  <th className="p-2 border-r border-slate-300 font-bold text-center w-28">Jumlah Skor</th>
                  <th className="p-2 border-r border-slate-300 font-bold text-center w-24">Nilai Akhir</th>
                  <th className="p-2 font-bold">Kriteria Penilaian</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                <tr><td className="p-2 text-center border-r border-slate-200 font-semibold">30</td><td className="p-2 text-center border-r border-slate-200 font-bold text-emerald-700">100</td><td className="p-2">Sangat Baik, seluruh soal dijawab benar dan tepat.</td></tr>
                <tr><td className="p-2 text-center border-r border-slate-200 font-semibold">25</td><td className="p-2 text-center border-r border-slate-200 font-bold text-emerald-700">90</td><td className="p-2">Sangat Baik, hanya 1 soal C3 salah.</td></tr>
                <tr><td className="p-2 text-center border-r border-slate-200 font-semibold">20</td><td className="p-2 text-center border-r border-slate-200 font-bold text-blue-700">80</td><td className="p-2">Baik, soal tipe C4 benar, 2 soal C3 salah.</td></tr>
                <tr><td className="p-2 text-center border-r border-slate-200 font-semibold">15</td><td className="p-2 text-center border-r border-slate-200 font-bold text-amber-700">70</td><td className="p-2">Cukup, soal tipe C4 benar, 3 soal C3 salah.</td></tr>
                <tr><td className="p-2 text-center border-r border-slate-200 font-semibold">10</td><td className="p-2 text-center border-r border-slate-200 font-bold text-amber-700">60</td><td className="p-2">Cukup, hanya soal C4 yang benar.</td></tr>
                <tr><td className="p-2 text-center border-r border-slate-200 font-semibold">5</td><td className="p-2 text-center border-r border-slate-200 font-bold text-rose-700">50</td><td className="p-2">Kurang, hanya menjawab 1 soal C3 benar.</td></tr>
                <tr><td className="p-2 text-center border-r border-slate-200 font-semibold">0</td><td className="p-2 text-center border-r border-slate-200 font-bold text-rose-700">0</td><td className="p-2 text-rose-700 font-medium">Perlu Bimbingan Intensif.</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* LAMPIRAN 5: PENILAIAN KETERAMPILAN */}
      <section id="section-lampiran-5" className="pt-8 pb-8">
        <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 flex items-center gap-2">
          <CheckCircle className="w-4 h-4 text-emerald-600" />
          <span>5. PENILAIAN KETERAMPILAN</span>
        </h3>

        {/* Rubrik Penilaian */}
        <div className="mb-4">
          <div className="font-bold text-slate-900 text-xs mb-1.5">
            Rubrik Penilaian Keterampilan:
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-300">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-slate-800">
                  <th className="p-2.5 font-bold border-r border-slate-300 w-1/4">Kriteria</th>
                  <th className="p-2.5 font-bold border-r border-slate-300 w-1/4 text-emerald-800">Sangat Baik (4)</th>
                  <th className="p-2.5 font-bold border-r border-slate-300 w-1/4 text-blue-800">Baik (3)</th>
                  <th className="p-2.5 font-bold border-r border-slate-300 w-1/6 text-amber-800">Cukup (2)</th>
                  <th className="p-2.5 font-bold text-rose-800 w-1/6">Perlu Bimbingan (1)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700">
                <tr>
                  <td className="p-2.5 font-bold border-r border-slate-200 bg-slate-50/50">Kerja Sama Kelompok</td>
                  <td className="p-2.5 border-r border-slate-200">Inisiatif tinggi, membagi tugas adil, aktif membantu.</td>
                  <td className="p-2.5 border-r border-slate-200">Berkolaborasi dengan baik & berpartisipasi aktif.</td>
                  <td className="p-2.5 border-r border-slate-200">Berpartisipasi, kontribusi terbatas.</td>
                  <td className="p-2.5">Pasif, hanya mengikuti arahan teman.</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold border-r border-slate-200 bg-slate-50/50">Ketepatan Menganalisis / Membuat Karya</td>
                  <td className="p-2.5 border-r border-slate-200">Sangat tepat, komprehensif, tanpa kesalahan.</td>
                  <td className="p-2.5 border-r border-slate-200">Sebagian besar tepat, ada kekeliruan kecil.</td>
                  <td className="p-2.5 border-r border-slate-200">Sebagian benar, analisis/karya kurang mendalam.</td>
                  <td className="p-2.5">Belum tepat & butuh bimbingan intensif.</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold border-r border-slate-200 bg-slate-50/50">Komunikasi / Presentasi</td>
                  <td className="p-2.5 border-r border-slate-200">Suara jelas, runtut, percaya diri, dan santun.</td>
                  <td className="p-2.5 border-r border-slate-200">Jelas dan cukup percaya diri.</td>
                  <td className="p-2.5 border-r border-slate-200">Ragu-ragu & kurang jelas.</td>
                  <td className="p-2.5">Sulit mengomunikasikan hasil di depan kelas.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-slate-500 mt-1 italic">
            Rumus Nilai Keterampilan: Nilai = (Skor Perolehan / 12) x 100
          </p>
        </div>

        {/* Tabel Rekapitulasi */}
        <div className="pt-2">
          <div className="font-bold text-slate-900 text-xs mb-1.5">
            Tabel Rekapitulasi Penilaian Keterampilan Kelompok:
          </div>
          <div className="overflow-x-auto rounded-xl border border-slate-300">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 border-b border-slate-300 text-slate-800">
                  <th className="p-2 border-r border-slate-300 text-center w-10">No</th>
                  <th className="p-2 border-r border-slate-300 w-1/3">Nama Kelompok / Murid</th>
                  <th className="p-2 border-r border-slate-300 text-center w-16">Kriteria 1</th>
                  <th className="p-2 border-r border-slate-300 text-center w-16">Kriteria 2</th>
                  <th className="p-2 border-r border-slate-300 text-center w-16">Kriteria 3</th>
                  <th className="p-2 border-r border-slate-300 text-center w-16">Skor Total</th>
                  <th className="p-2 border-r border-slate-300 text-center w-16">Nilai</th>
                  <th className="p-2 text-center w-24">Kriteria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                {module.rekapKeterampilan.map((item) => (
                  <tr key={item.no} className="hover:bg-slate-50">
                    <td className="p-2 text-center border-r border-slate-200 font-semibold">{item.no}</td>
                    <td className="p-2 border-r border-slate-200 font-medium text-slate-900">{item.namaKelompok}</td>
                    <td className="p-2 text-center border-r border-slate-200">{item.skorKriteria1 ?? "-"}</td>
                    <td className="p-2 text-center border-r border-slate-200">{item.skorKriteria2 ?? "-"}</td>
                    <td className="p-2 text-center border-r border-slate-200">{item.skorKriteria3 ?? "-"}</td>
                    <td className="p-2 text-center border-r border-slate-200 font-bold">{item.skorTotal ?? "-"}</td>
                    <td className="p-2 text-center border-r border-slate-200 font-bold text-emerald-700">{item.nilai ?? "-"}</td>
                    <td className="p-2 text-center font-medium">{item.kriteria ?? "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SIGNATURE BLOCK 2 (CLOSING SIGNATURE) */}
      <div className="pt-10 grid grid-cols-2 text-center text-xs sm:text-sm text-slate-800 print-avoid-break">
        <div>
          <p>Mengetahui,</p>
          <p className="font-bold text-slate-900">Kepala Sekolah</p>
          <div className="h-20"></div>
          <p className="font-bold text-slate-900 underline">({module.namaKepsek})</p>
          <p className="text-slate-600">NIP. {module.nipKepsek}</p>
        </div>
        <div>
          <p>{module.kota}, {module.tanggal}</p>
          <p className="font-bold text-slate-900">Guru Kelas / Mata Pelajaran</p>
          <div className="h-20"></div>
          <p className="font-bold text-slate-900 underline">({module.namaGuru})</p>
          <p className="text-slate-600">NIP. {module.nipGuru}</p>
        </div>
      </div>
    </article>
  );
};
