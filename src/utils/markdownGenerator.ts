import { DeepLearningModule } from "../types";

export function generateModuleMarkdown(module: DeepLearningModule): string {
  // Checklist for Dimensi Profil Lulusan
  const dimensiText = module.dimensiProfilLulusan
    .map((d) => `  - [${d.checked ? "✓" : " "}] **${d.label}**${d.penjelasan ? `: ${d.penjelasan}` : ""}`)
    .join("\n");

  // Format Pendahuluan lines
  const pendahuluanText = module.deskripsiPendahuluan
    .map((item) => `• ${item}`)
    .join("<br>");

  // Format Sintak Inti
  const sintakText = module.sintakInti
    .map(
      (s) =>
        `**Sintak ${s.sintakNomor}: ${s.namaSintak}**<br>*[${s.tagDeepLearning} | Profil: ${s.dimensiProfil}]*<br>• ${s.deskripsi.replace(/\n/g, "<br>• ")}`
    )
    .join("<br><br>");

  // Format Penutup
  const penutupText = module.deskripsiPenutup
    .map((item) => `• ${item}`)
    .join("<br>");

  // Format Soal Evaluasi Table rows
  const soalRows = module.soalEvaluasi
    .map(
      (s) =>
        `| ${s.no} | ${s.indikator} | ${s.soal.replace(/\n/g, " ")} | ${s.levelKognitif} | ${s.jenisSoal} | ${s.skor} |`
    )
    .join("\n");

  // Format Rekap Keterampilan Table rows
  const rekapRows = module.rekapKeterampilan
    .map(
      (r) =>
        `| ${r.no} | ${r.namaKelompok} | ${r.skorKriteria1 ?? ""} | ${r.skorKriteria2 ?? ""} | ${r.skorKriteria3 ?? ""} | ${r.skorTotal ?? ""} | ${r.nilai ?? ""} | ${r.kriteria ?? ""} |`
    )
    .join("\n");

  // Format LKPD Steps
  const petunjukLkpd = module.lkpd.petunjukBelajar.map((p, idx) => `${idx + 1}. ${p}`).join("\n");
  const alatLkpd = module.lkpd.alatDanBahan.map((a) => `- ${a}`).join("\n");
  const langkahLkpd = module.lkpd.langkahAktivitas.map((l, idx) => `${idx + 1}. ${l}`).join("\n");
  const pertanyaanLkpd = module.lkpd.pertanyaanAnalisis.map((q, idx) => `${idx + 1}. ${q}`).join("\n");
  const refleksiLkpd = module.lkpd.refleksiSiswa.map((r, idx) => `${idx + 1}. ${r}`).join("\n");

  // Format optional LKPD table
  let lkpdTable = "";
  if (module.lkpd.tabelPengamatanHeader && module.lkpd.tabelPengamatanRows) {
    const header = `| ${module.lkpd.tabelPengamatanHeader.join(" | ")} |`;
    const separator = `| ${module.lkpd.tabelPengamatanHeader.map(() => ":---").join(" | ")} |`;
    const rows = module.lkpd.tabelPengamatanRows
      .map((row) => `| ${row.join(" | ")} |`)
      .join("\n");
    lkpdTable = `\n**Tabel Kerja / Hasil Investigasi Siswa:**\n${header}\n${separator}\n${rows}\n`;
  }

  // Format Section C: Pengalaman Belajar (Single or Multi-Pertemuan)
  let pengalamanBelajarMarkdown = "";
  if (module.daftarPertemuan && module.daftarPertemuan.length > 1) {
    pengalamanBelajarMarkdown = module.daftarPertemuan
      .map((p) => {
        const pSintak = p.sintakInti
          .map(
            (s) =>
              `**Sintak ${s.sintakNomor}: ${s.namaSintak}**<br>• *Tag*: ${s.tagDeepLearning}<br>• *Profil Lulusan*: ${s.dimensiProfil}<br>• *Aktivitas*: ${s.deskripsi.replace(/\n/g, "<br>• ")}`
          )
          .join("<br><br>");

        const pPendahuluan = p.deskripsiPendahuluan.map((d) => `• ${d}`).join("<br>");
        const pPenutup = p.deskripsiPenutup.map((d) => `• ${d}`).join("<br>");

        return `### ${p.judulFokus} (Alokasi: ${p.alokasiWaktu})\n\n| Kegiatan | Deskripsi Kegiatan | Alokasi Waktu |\n| :--- | :--- | :--- |\n| **Pendahuluan**<br>*(Memahami)* | ${pPendahuluan} | ${p.waktuPendahuluan} |\n| **Inti**<br>*(Memahami, Mengaplikasi)* | *(Integrasi Sintak Model ${module.modelPembelajaran}, tag DEEP LEARNING, serta Dimensi Profil Lulusan).*<br><br>${pSintak} | ${p.waktuInti} |\n| **Penutup**<br>*(Merefleksi)* | **DEEP LEARNING – MEREFLEKSI**<br>${pPenutup} | ${p.waktuPenutup} |`;
      })
      .join("\n\n---\n\n");
  } else {
    pengalamanBelajarMarkdown = `| Kegiatan | Deskripsi Kegiatan | Alokasi Waktu |
| :--- | :--- | :--- |
| **Pendahuluan**<br>*(Memahami)* | ${pendahuluanText} | ${module.waktuPendahuluan} |
| **Inti**<br>*(Memahami, Mengaplikasi)* | *(Integrasi Sintak Model ${module.modelPembelajaran}, tag DEEP LEARNING, serta Dimensi Profil Lulusan).*<br><br>${sintakText} | ${module.waktuInti} |
| **Penutup**<br>*(Merefleksi)* | **DEEP LEARNING – MEREFLEKSI**<br>${penutupText} | ${module.waktuPenutup} |`;
  }

  return `# PERENCANAAN PEMBELAJARAN MENDALAM (DEEP LEARNING)

**Tahun Ajaran** : ${module.tahunAjaran}
**Kelas / Fase / Semester** : ${module.kelas} / ${module.fase} / ${module.semester}
**Mata Pelajaran** : ${module.mataPelajaran}
**Materi Pelajaran** : ${module.materiPelajaran}
**Alokasi Waktu** : ${module.alokasiWaktu}${module.jumlahPertemuan && module.jumlahPertemuan > 1 ? `\n**Jumlah Pertemuan** : ${module.jumlahPertemuan} Pertemuan` : ""}

---

## A. IDENTIFIKASI
* **Identifikasi Kesiapan Murid:** ${module.kesiapanMurid}
* **Karakteristik Materi Pelajaran:** ${module.karakteristikMateriPelajaran || module.karakteristikMateri || ""}
* **Dimensi Profil Lulusan:**
${dimensiText}

---

## B. DESAIN PEMBELAJARAN
* **Capaian Pembelajaran:** ${module.capaianPembelajaran}
* **Tujuan Pembelajaran:** ${module.tujuanPembelajaran}
* **Praktik Pedagogis:**
  * **Pendekatan Pembelajaran:** ${module.pendekatanPembelajaran}
  * **Model Pembelajaran:** ${module.modelPembelajaran}
  * **Metode Pembelajaran:** ${module.metodePembelajaran}
* **Lingkungan Pembelajaran:**
  * **Budaya Belajar:** ${module.budayaBelajar}
  * **Ruang Fisik:** ${module.ruangFisik}
* **Kemitraan Pembelajaran:**
  * **Antar murid:** ${module.kemitraanMurid}
* **Pemanfaatan Digital:**
  * **Platform Desain / Media Digital:** ${module.platformDigital}
  * **Perangkat:** ${module.perangkat}
* **Media Pembelajaran:** ${module.mediaPembelajaran}

---

## C. PENGALAMAN BELAJAR

${pengalamanBelajarMarkdown}

---

## D. ASESMEN PEMBELAJARAN
* **Asesmen Formatif:**
  * Penilaian Sikap (Profil Lulusan): ${module.asesmenFormatifSikap}
  * Penilaian Keterampilan: ${module.asesmenFormatifKeterampilan}
* **Asesmen Sumatif:** ${module.asesmenSumatifDeskripsi}

---

Mengetahui,  
**Kepala Sekolah**  
(${module.namaKepsek})  
NIP. ${module.nipKepsek}  

${module.kota}, ${module.tanggal}  
**Guru Kelas / Mata Pelajaran**  
(${module.namaGuru})  
NIP. ${module.nipGuru}  

---
---

# LAMPIRAN

### 1. RINGKASAN MATERI AJAR
${module.ringkasanMateriAjar}

---

### 2. LEMBAR KERJA MURID (LKM / LKPD)
**Judul Kegiatan:** ${module.lkpd.judul}  
**Tema Kontekstual:** ${module.lkpd.temaKontekstual}  
**Nama Kelompok / Anggota:** __________________________________  
**Kelas / Semester:** ${module.kelas} / ${module.semester}  

**A. Petunjuk Belajar:**  
${petunjukLkpd}

**B. Alat dan Bahan:**  
${alatLkpd}

**C. Langkah Aktivitas Penyelidikan:**  
${langkahLkpd}
${lkpdTable}
**D. Pertanyaan Analisis & Pemecahan Masalah:**  
${pertanyaanLkpd}

**E. Refleksi Pribadi & Kelompok:**  
${refleksiLkpd}

---

### 3. PENILAIAN SIKAP (LEMBAR OBSERVASI DIMENSI PROFIL LULUSAN)
**Nama Sekolah** : ${module.namaSekolah}  
**Tahun Ajaran** : ${module.tahunAjaran}  
**Fase / Kelas / Semester** : ${module.fase} / ${module.kelas} / ${module.semester}  
**Mata Pelajaran** : ${module.mataPelajaran}  
**Materi** : ${module.materiPelajaran}  

| No | Aspek Pengamatan | Kriteria Indikator | Skor |
| :--- | :--- | :--- | :--- |
| 1 | Keimanan dan Ketaqwaan | • Berdoa sebelum & sesudah kegiatan.<br>• Khusyuk dan bersikap baik. | 3 = 3 aspek<br>2 = 2 aspek<br>1 = 1 aspek |
| 2 | Kewargaan | • Peduli & menghargai teman.<br>• Menggunakan bahasa santun. | 3 = 3 aspek<br>2 = 2 aspek<br>1 = 1 aspek |
| 3 | Penalaran Kritis | • Mampu mengidentifikasi & menganalisis masalah.<br>• Reflektif dalam memecahkan tugas. | 3 = 3 aspek<br>2 = 2 aspek<br>1 = 1 aspek |
| 4 | Kreativitas | • Mampu membuat ide/karya unik.<br>• Antusias menyelesaikan tantangan. | 3 = 3 aspek<br>2 = 2 aspek<br>1 = 1 aspek |
| 5 | Kolaborasi | • Aktif bekerja sama dalam tim.<br>• Membantu teman yang kesulitan. | 3 = 3 aspek<br>2 = 2 aspek<br>1 = 1 aspek |
| 6 | Kemandirian | • Mengelola waktu pengerjaan tugas.<br>• Percaya diri menyampaikan pendapat. | 3 = 3 aspek<br>2 = 2 aspek<br>1 = 1 aspek |
| 7 | Komunikasi | • Menyampaikan argumen dengan santun.<br>• Menyajikan hasil diskusi dengan jelas. | 3 = 3 aspek<br>2 = 2 aspek<br>1 = 1 aspek |

---

### 4. PENILAIAN PENGETAHUAN (ASESMEN SUMATIF)
| No | Indikator Soal | Soal | Level Kognitif | Jenis Soal | Skor |
| :--- | :--- | :--- | :--- | :--- | :--- |
${soalRows}
| **TOTAL SKOR MAKSIMAL** | | | | | **30** |

**Tabel Konversi Nilai Pengetahuan:**  
Rumus: Nilai Akhir = (Skor Perolehan / 30) x 100

| Jumlah Skor | Nilai Akhir | Kriteria Penilaian |
| :--- | :--- | :--- |
| 30 | 100 | Sangat Baik, seluruh soal dijawab benar dan tepat. |
| 25 | 90 | Sangat Baik, hanya 1 soal C3 salah. |
| 20 | 80 | Baik, soal tipe C4 benar, 2 soal C3 salah. |
| 15 | 70 | Cukup, soal tipe C4 benar, 3 soal C3 salah. |
| 10 | 60 | Cukup, hanya soal C4 yang benar. |
| 5 | 50 | Kurang, hanya menjawab 1 soal C3 benar. |
| 0 | 0 | Perlu Bimbingan Intensif. |

---

### 5. PENILAIAN KETERAMPILAN
**Rubrik Penilaian Keterampilan:**

| Kriteria | Sangat Baik (4) | Baik (3) | Cukup (2) | Perlu Bimbingan (1) |
| :--- | :--- | :--- | :--- | :--- |
| **Kerja Sama Kelompok** | Inisiatif tinggi, membagi tugas adil, aktif membantu. | Berkolaborasi dengan baik & berpartisipasi aktif. | Berpartisipasi, kontribusi terbatas. | Pasif, hanya mengikuti arahan teman. |
| **Ketepatan Menganalisis / Membuat Karya** | Sangat tepat, komprehensif, tanpa kesalahan. | Sebagian besar tepat, ada kekeliruan kecil. | Sebagian benar, analisis/karya kurang mendalam. | Belum tepat & butuh bimbingan intensif. |
| **Komunikasi / Presentasi** | Suara jelas, runtut, percaya diri, dan santun. | Jelas dan cukup percaya diri. | Ragu-ragu & kurang jelas. | Sulit mengomunikasikan hasil di depan kelas. |

**Rumus Nilai Keterampilan:** Nilai = (Skor Perolehan / 12) x 100

**Tabel Rekapitulasi Penilaian Keterampilan Kelompok:**

| No | Nama Kelompok / Murid | Skor Kriteria 1 | Skor Kriteria 2 | Skor Kriteria 3 | Skor Total | Nilai | Kriteria |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
${rekapRows}

---

Mengetahui,  
**Kepala Sekolah**  
(${module.namaKepsek})  
NIP. ${module.nipKepsek}  

${module.kota}, ${module.tanggal}  
**Guru Kelas / Mata Pelajaran**  
(${module.namaGuru})  
NIP. ${module.nipGuru}
`;
}
