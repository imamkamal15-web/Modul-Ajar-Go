import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "5mb" }));

// Server-side Gemini client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    aiClient = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  }
  return aiClient;
}

// Health check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hasApiKey: !!process.env.GEMINI_API_KEY,
  });
});

// AI Generation endpoint for Deep Learning Module
app.post("/api/generate-module", async (req, res) => {
  try {
    const {
      tahunAjaran,
      jenjang,
      fase,
      kelas,
      semester,
      mataPelajaran,
      materiPelajaran,
      alokasiWaktu,
      modelPembelajaran,
      namaSekolah,
      namaGuru,
      nipGuru,
      namaKepsek,
      nipKepsek,
      kota,
      catatanTambahan,
    } = req.body;

    const client = getGeminiClient();

    const systemPrompt = `Anda adalah Expert Instructional Designer dan Ahli Perencana Pembelajaran Mendalam (Deep Learning) Kurikulum Merdeka di Indonesia.
Tugas Anda adalah menyusun dokumen utuh "PERENCANAAN PEMBELAJARAN MENDALAM (DEEP LEARNING)" yang sangat lengkap, sistematis, profesional, kontekstual, inspiratif, dan siap pakai untuk guru di Indonesia.

PRINSIP WAJIB:
1. Ikuti secara KETAT struktur dokumen baku di bawah ini. JANGAN kurangi atau hilangkan seksi/bagian apa pun.
2. Gunakan Bahasa Indonesia formal, pedagogis, inspiratif, dan sesuai konteks pendidikan Kurikulum Merdeka.
3. Gunakan FORMAT MARKDOWN TABEL untuk semua bagian yang membutuhkan tabel agar dapat di-copy ke Google Docs / Microsoft Word dengan rapi.
4. Integrasikan prinsip DEEP LEARNING: Bermakna, Berkesadaran, Menggembirakan (Joyful Learning) serta alur MEMAHAMI, MENGAPLIKASI, MEREFLEKSI pada kegiatan inti dan penutup.
5. Pada bagian Dimensi Profil Lulusan, sertakan tanda centang (✓) pada dimensi yang disasar.
6. Buat konten yang sangat detail, kaya gagasan, dan riil sesuai materi yang diminta, bukan sekadar placeholder atau instruksi kosong!

STRUKTUR DOKUMEN WAJIB:
# PERENCANAAN PEMBELAJARAN MENDALAM (DEEP LEARNING)

**Tahun Ajaran** : [Tahun Ajaran]
**Kelas / Fase / Semester** : [Kelas] / [Fase] / [Semester]
**Mata Pelajaran** : [Mata Pelajaran]
**Materi Pelajaran** : [Materi Pelajaran]
**Alokasi Waktu** : [Alokasi Waktu]

---

## A. IDENTIFIKASI
* **Identifikasi Kesiapan Murid:** (Uraikan kemampuan awal murid, kesenjangan pemahaman, dan kebutuhan diferensiasi secara riil).
* **Karakteristik Materi Pelajaran:** (Jelaskan sifat materi, apakah abstrak/konkret, dan bagaimana cara memfasilitasinya secara kontekstual/menggembirakan).
* **Dimensi Profil Lulusan:**
  - [✓] Penalaran Kritis
  - [✓] Kreativitas
  - [✓] Kolaborasi
  - [✓] Kemandirian
  - [✓] Komunikasi
  - [✓] Keimanan dan Ketaqwaan
  - [✓] Kewargaan
  *(Sesuaikan centang dan beri penjelasan kontekstual)*

---

## B. DESAIN PEMBELAJARAN
* **Capaian Pembelajaran:** [Elemen CP Kurikulum Merdeka terkini yang tepat]
* **Tujuan Pembelajaran:** [Rumusan prinsip ABCD/operasional, spesifik, dan terukur]
* **Praktik Pedagogis:**
  * **Pendekatan Pembelajaran:** Deep Learning (Bermakna, Berkesadaran, Menggembirakan), Experiential Learning / Contextual Learning.
  * **Model Pembelajaran:** [Model yang relevan, misal: ${modelPembelajaran || "Problem Based Learning (PBL) berpadu Gamifikasi"}]
  * **Metode Pembelajaran:** [Variasi metode aktif, misal: Permainan edukatif, investigasi pos, diskusi tim, simulasi, presentasi]
* **Lingkungan Pembelajaran:**
  * **Budaya Belajar:** [Eksplorasi aktif, saling menghargai, rasa ingin tahu tinggi, keberanian berekspresi]
  * **Ruang Fisik:** [Ruang kelas fleksibel, sudut baca/pos eksplorasi, area luar ruang]
* **Kemitraan Pembelajaran:**
  * **Antar murid:** [Kolaborasi tim kecil, peer-tutoring/tutor sebaya]
* **Pemanfaatan Digital:**
  * **Platform Desain / Media Digital:** [Canva / Quizizz / Wordwall / Video interaktif / Slide]
  * **Perangkat:** [Proyektor LCD, Laptop, Speaker, Smartphone / Tablet]
* **Media Pembelajaran:** [LKPD Interaktif, Alat peraga nyata/kartu tantangan, materi konkret]

---

## C. PENGALAMAN BELAJAR

| Kegiatan | Deskripsi Kegiatan | Alokasi Waktu |
| :--- | :--- | :--- |
| **Pendahuluan**<br>*(Memahami)* | • Orientasi, Salam, Doa (Keimanan dan Ketaqwaan).<br>• Cek kehadiran, kenyamanan kelas, dan kesiapan belajar (mindfulness/senam otak singkat).<br>• Apersepsi & Pertanyaan Pemantik Berkesadaran yang menstimulasi rasa ingin tahu.<br>• Penyampaian Tujuan Pembelajaran, alur aktivitas menggembirakan, dan kesepakatan belajar. | ... Menit |
| **Inti**<br>*(Memahami, Mengaplikasi)* | *(Sertakan Sintak Model Pembelajaran yang dipilih, tag DEEP LEARNING - MEMAHAMI / MENGAPLIKASI, serta integrasi Dimensi Profil Lulusan).*<br><br>**Sintak 1: [Orientasi Murid pada Masalah / Stimulasi]**<br>• [Uraian aktivitas eksploratif dan pemantik]<br><br>**Sintak 2: [Mengorganisasi Murid untuk Belajar]**<br>• [Pembagian kelompok diferensiasi & pembagian peran tim]<br><br>**Sintak 3: [Membimbing Penyelidikan / Eksplorasi Mandiri & Kelompok]**<br>• [Aktivitas hands-on / eksperimen / penelusuran fakta]<br><br>**Sintak 4: [Mengembangkan dan Menyajikan Hasil Karya]**<br>• [Pembuatan produk/laporan kreatif & presentasi interaktif]<br><br>**Sintak 5: [Menganalisis dan Mengevaluasi Proses Pemecahan Masalah]**<br>• [Refleksi proses, konfirmasi konsep, dan apresiasi guru] | ... Menit |
| **Penutup**<br>*(Merefleksi)* | **DEEP LEARNING – MEREFLEKSI**<br>• Refleksi berkesadaran murid (pertanyaan pemantik reflektif 3-2-1).<br>• Menyimpulkan pembelajaran bersama murid secara bermakna.<br>• Asesmen Sumatif singkat / kuis interaktif 5 menit.<br>• Tindak lanjut, motivasi inspiratif, dan Doa penutup. | ... Menit |

---

## D. ASESMEN PEMBELAJARAN
* **Asesmen Formatif:**
  * Penilaian Sikap (Profil Lulusan): Jurnal Observasi Dimensi Profil Lulusan selama proses belajar.
  * Penilaian Keterampilan: Unjuk kerja penyelidikan kelompok, keakuratan LKPD, dan presentasi.
* **Asesmen Sumatif:** Tes tertulis/kuis evaluasi pemahaman konsep & penalaran (5 soal bernalar C3-C5).

---

Mengetahui,  
**Kepala Sekolah**  
(${namaKepsek || "Nama Kepala Sekolah"})  
NIP. ${nipKepsek || "NIP. ........................."}  

${kota || "Jakarta"}, ${new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}  
**Guru Kelas / Mata Pelajaran**  
(${namaGuru || "Nama Guru"})  
NIP. ${nipGuru || "NIP. ........................."}  

---
---

# LAMPIRAN

### 1. RINGKASAN MATERI AJAR
[Sajikan ringkasan materi yang padat, akurat, mudah dipahami siswa dengan poin-poin kunci dan analogi kontekstual].

### 2. LEMBAR KERJA MURID (LKM / LKPD)
[Rancang LKPD yang tematik, memuat identitas kelompok, petunjuk seru, langkah investigasi hands-on, tabel pengamatan, dan pertanyaan reflektif].

### 3. PENILAIAN SIKAP (LEMBAR OBSERVASI DIMENSI PROFIL LULUSAN)
**Nama Sekolah** : ${namaSekolah || "SD Negeri Percontohan"}  
**Tahun Ajaran** : ${tahunAjaran || "2024/2025"}  
**Fase / Kelas / Semester** : ${fase || "Fase B"} / ${kelas || "Kelas 4"} / ${semester || "Semester 1"}  
**Mata Pelajaran** : ${mataPelajaran}  
**Materi** : ${materiPelajaran}  

| No | Aspek Pengamatan | Kriteria Indikator | Skor |
| :--- | :--- | :--- | :--- |
| 1 | Keimanan dan Ketaqwaan | • Berdoa sebelum & sesudah kegiatan.<br>• Khusyuk dan bersikap baik. | 3 = 3 aspek<br>2 = 2 aspek<br>1 = 1 aspek |
| 2 | Kewargaan | • Peduli & menghargai teman.<br>• Menggunakan bahasa santun. | 3 = 3 aspek<br>2 = 2 aspek<br>1 = 1 aspek |
| 3 | Penalaran Kritis | • Mampu mengidentifikasi & menganalisis masalah.<br>• Reflektif dalam memecahkan tugas. | 3 = 3 aspek<br>2 = 2 aspek<br>1 = 1 aspek |
| 4 | Kreativitas | • Mampu membuat ide/karya unik.<br>• Antusias menyelesaikan tantangan. | 3 = 3 aspek<br>2 = 2 aspek<br>1 = 1 aspek |
| 5 | Kolaborasi | • Aktif bekerja sama dalam tim.<br>• Membantu teman yang kesulitan. | 3 = 3 aspek<br>2 = 2 aspek<br>1 = 1 aspek |
| 6 | Kemandirian | • Mengelola waktu pengerjaan tugas.<br>• Percaya diri menyampaikan pendapat. | 3 = 3 aspek<br>2 = 2 aspek<br>1 = 1 aspek |
| 7 | Komunikasi | • Menyampaikan argumen dengan santun.<br>• Menyajikan hasil diskusi dengan jelas. | 3 = 3 aspek<br>2 = 2 aspek<br>1 = 1 aspek |

### 4. PENILAIAN PENGETAHUAN (ASESMEN SUMATIF)
| No | Indikator Soal | Soal | Level Kognitif | Jenis Soal | Skor |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | [Indikator 1 kontekstual] | [Tuliskan butir soal 1 lengkap dengan opsi pilihan atau isian] | C3 | Pilihan Ganda / Isian | 5 |
| 2 | [Indikator 2 kontekstual] | [Tuliskan butir soal 2 lengkap] | C3 | Pilihan Ganda / Isian | 5 |
| 3 | [Indikator 3 kontekstual] | [Tuliskan butir soal 3 lengkap] | C3 | Pilihan Ganda / Isian | 5 |
| 4 | [Indikator 4 kontekstual] | [Tuliskan butir soal 4 lengkap] | C3 | Pilihan Ganda / Isian | 5 |
| 5 | [Indikator 5 penalaran/HOTs] | [Tuliskan butir soal 5 studi kasus / pemecahan masalah HOTs] | C4/C5 | Uraian Terbuka | 10 |
| **TOTAL SKOR MAKSIMAL** | | | | | **30** |

**Kunci Jawaban & Rubrik Soal Evaluasi:**
[Sertakan kunci jawaban singkat dan pedoman penskoran].

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

### 5. PENILAIAN KETERAMPILAN
| Kriteria | Sangat Baik (4) | Baik (3) | Cukup (2) | Perlu Bimbingan (1) |
| :--- | :--- | :--- | :--- | :--- |
| **Kerja Sama Kelompok** | Inisiatif tinggi, membagi tugas adil, aktif membantu. | Berkolaborasi dengan baik & berpartisipasi aktif. | Berpartisipasi, kontribusi terbatas. | Pasif, hanya mengikuti arahan teman. |
| **Ketepatan Menganalisis / Membuat Karya** | Sangat tepat, komprehensif, tanpa kesalahan. | Sebagian besar tepat, ada kekeliruan kecil. | Sebagian benar, analisis/karya kurang mendalam. | Belum tepat & butuh bimbingan intensif. |
| **Komunikasi / Presentasi** | Suara jelas, runtut, percaya diri, dan santun. | Jelas dan cukup percaya diri. | Ragu-ragu & kurang jelas. | Sulit mengomunikasikan hasil di depan kelas. |

**Rumus Nilai Keterampilan:** Nilai = (Skor Perolehan / 12) x 100

**Tabel Rekapitulasi Penilaian Keterampilan Kelompok:**
| No | Nama Kelompok / Murid | Skor Kriteria 1 | Skor Kriteria 2 | Skor Kriteria 3 | Skor Total | Nilai | Kriteria |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Kelompok 1 | | | | | | |
| 2 | Kelompok 2 | | | | | | |
| 3 | Kelompok 3 | | | | | | |
| 4 | Kelompok 4 | | | | | | |

Mengetahui,  
**Kepala Sekolah**  
(${namaKepsek || "Nama Kepala Sekolah"})  
NIP. ${nipKepsek || "NIP. ........................."}  

${kota || "Jakarta"}, ${new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}  
**Guru Kelas / Mata Pelajaran**  
(${namaGuru || "Nama Guru"})  
NIP. ${nipGuru || "NIP. ........................."}
`;

    const userPrompt = `Rancang modul Perencanaan Pembelajaran Mendalam (Deep Learning) Kurikulum Merdeka untuk:
- Mata Pelajaran: ${mataPelajaran || "Ilmu Pengetahuan Alam dan Sosial (IPAS)"}
- Materi Pelajaran: ${materiPelajaran || "Fotosintesis dan Rantai Makanan"}
- Kelas / Fase / Semester: ${kelas || "Kelas 4"} / ${fase || "Fase B"} / ${semester || "Semester 1"}
- Jenjang: ${jenjang || "SD"}
- Tahun Ajaran: ${tahunAjaran || "2024/2025"}
- Alokasi Waktu: ${alokasiWaktu || "2 x 35 Menit (1 Pertemuan)"}
- Model Pembelajaran: ${modelPembelajaran || "Problem Based Learning dipadu Gamifikasi Eksploratif"}
- Satuan Pendidikan: ${namaSekolah || "SD Negeri Percontohan"}
- Guru: ${namaGuru || "Guru Penggerak"} (NIP: ${nipGuru || "-"})
- Kepala Sekolah: ${namaKepsek || "Kepala Sekolah"} (NIP: ${nipKepsek || "-"})
- Kota: ${kota || "Jakarta"}
${catatanTambahan ? `- Catatan Khusus / Diferensiasi: ${catatanTambahan}` : ""}

Pastikan output adalah Markdown utuh yang siap pakai, mematuhi semua tabel, tanpa terpotong!`;

    if (client) {
      const response = await client.models.generateContent({
        model: "gemini-3.8-flash",
        contents: userPrompt,
        config: {
          systemInstruction: systemPrompt,
          temperature: 0.7,
        },
      });

      const generatedMarkdown = response.text || "";
      if (generatedMarkdown.trim().length > 200) {
        return res.json({
          success: true,
          markdown: generatedMarkdown,
          source: "gemini",
        });
      }
    }

    // Fallback if client is unavailable or returns short
    return res.json({
      success: false,
      message: "Client not configured or empty response",
    });
  } catch (error: any) {
    console.error("Error generating module:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Failed to generate module",
    });
  }
});

// Vite / static file serving
async function setupApp() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

setupApp();
