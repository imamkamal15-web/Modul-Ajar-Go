import { DeepLearningModule } from "../types";
import { generateModuleMarkdown } from "./markdownGenerator";

export function exportToWordDoc(module: DeepLearningModule) {
  const markdown = module.rawMarkdown || generateModuleMarkdown(module);
  
  // Create an HTML document with Microsoft Word compatible styling
  const htmlContent = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>${module.materiPelajaran} - Modul Deep Learning</title>
<!--[if gte mso 9]>
<xml>
<w:WordDocument>
<w:View>Print</w:View>
<w:Zoom>100</w:Zoom>
<w:DoNotOptimizeForBrowser/>
</w:WordDocument>
</xml>
<![endif]-->
<style>
  @page {
    size: A4;
    margin: 2.5cm 2.5cm 2.5cm 2.5cm;
    mso-page-orientation: portrait;
  }
  body {
    font-family: 'Times New Roman', Times, serif;
    font-size: 12pt;
    line-height: 1.4;
    color: #111;
  }
  h1 {
    font-size: 16pt;
    font-weight: bold;
    text-align: center;
    margin-bottom: 12pt;
    text-transform: uppercase;
  }
  h2 {
    font-size: 13pt;
    font-weight: bold;
    margin-top: 14pt;
    margin-bottom: 6pt;
    border-bottom: 1pt solid #333;
    padding-bottom: 2pt;
  }
  h3 {
    font-size: 12pt;
    font-weight: bold;
    margin-top: 10pt;
    margin-bottom: 4pt;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 10pt 0;
    font-size: 11pt;
  }
  th, td {
    border: 1pt solid #444;
    padding: 6pt 8pt;
    vertical-align: top;
  }
  th {
    background-color: #f2f4f8;
    font-weight: bold;
    text-align: left;
  }
  ul, ol {
    margin: 4pt 0 8pt 18pt;
    padding: 0;
  }
  li {
    margin-bottom: 3pt;
  }
  .header-meta {
    margin-bottom: 14pt;
    line-height: 1.5;
  }
  .signature-table {
    width: 100%;
    border: none;
    margin-top: 24pt;
  }
  .signature-table td {
    border: none;
    width: 50%;
    text-align: center;
    padding-top: 10pt;
  }
  .page-break {
    page-break-before: always;
  }
  .badge {
    display: inline-block;
    padding: 2pt 6pt;
    font-weight: bold;
    font-size: 9pt;
    background: #e2e8f0;
    border-radius: 3pt;
  }
</style>
</head>
<body>
  <h1>PERENCANAAN PEMBELAJARAN MENDALAM (DEEP LEARNING)</h1>
  
  <div class="header-meta">
    <table style="border:none; margin:0; width:100%;">
      <tr>
        <td style="border:none; width:30%; padding:2pt 0;"><strong>Tahun Ajaran</strong></td>
        <td style="border:none; padding:2pt 0;">: ${module.tahunAjaran}</td>
      </tr>
      <tr>
        <td style="border:none; padding:2pt 0;"><strong>Kelas / Fase / Semester</strong></td>
        <td style="border:none; padding:2pt 0;">: ${module.kelas} / ${module.fase} / ${module.semester}</td>
      </tr>
      <tr>
        <td style="border:none; padding:2pt 0;"><strong>Mata Pelajaran</strong></td>
        <td style="border:none; padding:2pt 0;">: ${module.mataPelajaran}</td>
      </tr>
      <tr>
        <td style="border:none; padding:2pt 0;"><strong>Materi Pelajaran</strong></td>
        <td style="border:none; padding:2pt 0;">: ${module.materiPelajaran}</td>
      </tr>
      <tr>
        <td style="border:none; padding:2pt 0;"><strong>Alokasi Waktu</strong></td>
        <td style="border:none; padding:2pt 0;">: ${module.alokasiWaktu}</td>
      </tr>
    </table>
  </div>

  <hr style="border: 0.5pt solid #888;" />

  <h2>A. IDENTIFIKASI</h2>
  <p><strong>• Identifikasi Kesiapan Murid:</strong><br/>${module.kesiapanMurid}</p>
  <p><strong>• Karakteristik Materi Pelajaran:</strong><br/>${module.karakteristikMateriPelajaran}</p>
  <p><strong>• Dimensi Profil Lulusan:</strong></p>
  <ul>
    ${module.dimensiProfilLulusan
      .map((d) => `<li>[${d.checked ? "✓" : " "}] <strong>${d.label}:</strong> ${d.penjelasan}</li>`)
      .join("")}
  </ul>

  <h2>B. DESAIN PEMBELAJARAN</h2>
  <p><strong>• Capaian Pembelajaran:</strong><br/>${module.capaianPembelajaran}</p>
  <p><strong>• Tujuan Pembelajaran:</strong><br/>${module.tujuanPembelajaran}</p>
  <p><strong>• Praktik Pedagogis:</strong></p>
  <ul>
    <li><strong>Pendekatan Pembelajaran:</strong> ${module.pendekatanPembelajaran}</li>
    <li><strong>Model Pembelajaran:</strong> ${module.modelPembelajaran}</li>
    <li><strong>Metode Pembelajaran:</strong> ${module.metodePembelajaran}</li>
  </ul>
  <p><strong>• Lingkungan Pembelajaran:</strong></p>
  <ul>
    <li><strong>Budaya Belajar:</strong> ${module.budayaBelajar}</li>
    <li><strong>Ruang Fisik:</strong> ${module.ruangFisik}</li>
  </ul>
  <p><strong>• Kemitraan Pembelajaran:</strong></p>
  <ul>
    <li><strong>Antar murid:</strong> ${module.kemitraanMurid}</li>
  </ul>
  <p><strong>• Pemanfaatan Digital:</strong></p>
  <ul>
    <li><strong>Platform Desain / Media Digital:</strong> ${module.platformDigital}</li>
    <li><strong>Perangkat:</strong> ${module.perangkat}</li>
  </ul>
  <p><strong>• Media Pembelajaran:</strong> ${module.mediaPembelajaran}</p>

  <h2>C. PENGALAMAN BELAJAR</h2>
  <table>
    <thead>
      <tr>
        <th style="width: 20%;">Kegiatan</th>
        <th style="width: 65%;">Deskripsi Kegiatan</th>
        <th style="width: 15%;">Alokasi Waktu</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Pendahuluan</strong><br/><em>(Memahami)</em></td>
        <td>
          <ul>
            ${module.deskripsiPendahuluan.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </td>
        <td>${module.waktuPendahuluan}</td>
      </tr>
      <tr>
        <td><strong>Inti</strong><br/><em>(Memahami, Mengaplikasi)</em></td>
        <td>
          <p><em>(Sintak Model ${module.modelPembelajaran} dipadu prinsip Deep Learning)</em></p>
          ${module.sintakInti
            .map(
              (s) => `
            <div style="margin-bottom: 10pt;">
              <strong>Sintak ${s.sintakNomor}: ${s.namaSintak}</strong><br/>
              <span style="font-size:10pt; color:#1e40af;">[${s.tagDeepLearning} | Profil: ${s.dimensiProfil}]</span>
              <ul>
                ${s.deskripsi.split("\n").map((d) => `<li>${d}</li>`).join("")}
              </ul>
            </div>
          `
            )
            .join("")}
        </td>
        <td>${module.waktuInti}</td>
      </tr>
      <tr>
        <td><strong>Penutup</strong><br/><em>(Merefleksi)</em></td>
        <td>
          <strong>DEEP LEARNING – MEREFLEKSI</strong>
          <ul>
            ${module.deskripsiPenutup.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </td>
        <td>${module.waktuPenutup}</td>
      </tr>
    </tbody>
  </table>

  <h2>D. ASESMEN PEMBELAJARAN</h2>
  <ul>
    <li><strong>Asesmen Formatif:</strong>
      <ul>
        <li><strong>Penilaian Sikap (Profil Lulusan):</strong> ${module.asesmenFormatifSikap}</li>
        <li><strong>Penilaian Keterampilan:</strong> ${module.asesmenFormatifKeterampilan}</li>
      </ul>
    </li>
    <li><strong>Asesmen Sumatif:</strong> ${module.asesmenSumatifDeskripsi}</li>
  </ul>

  <table class="signature-table">
    <tr>
      <td>
        Mengetahui,<br/>
        <strong>Kepala Sekolah</strong><br/><br/><br/><br/>
        <strong>(${module.namaKepsek})</strong><br/>
        NIP. ${module.nipKepsek}
      </td>
      <td>
        ${module.kota}, ${module.tanggal}<br/>
        <strong>Guru Kelas / Mata Pelajaran</strong><br/><br/><br/><br/>
        <strong>(${module.namaGuru})</strong><br/>
        NIP. ${module.nipGuru}
      </td>
    </tr>
  </table>

  <div class="page-break"></div>

  <h1>LAMPIRAN</h1>

  <h3>1. RINGKASAN MATERI AJAR</h3>
  <div style="text-align: justify;">
    ${module.ringkasanMateriAjar.replace(/\n\n/g, "<br/><br/>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}
  </div>

  <h3 style="margin-top: 20pt;">2. LEMBAR KERJA MURID (LKM / LKPD)</h3>
  <div style="border: 1pt solid #666; padding: 10pt; margin-top: 6pt;">
    <p style="text-align:center; font-weight:bold; font-size:13pt; margin:0;">${module.lkpd.judul}</p>
    <p style="text-align:center; font-style:italic; margin:4pt 0 10pt 0;">Tema: ${module.lkpd.temaKontekstual}</p>
    <p><strong>Nama Kelompok / Anggota:</strong> ..........................................................................<br/><strong>Kelas / Semester:</strong> ${module.kelas} / ${module.semester}</p>
    
    <p><strong>A. Petunjuk Belajar:</strong></p>
    <ol>
      ${module.lkpd.petunjukBelajar.map((p) => `<li>${p}</li>`).join("")}
    </ol>

    <p><strong>B. Alat dan Bahan:</strong></p>
    <ul>
      ${module.lkpd.alatDanBahan.map((a) => `<li>${a}</li>`).join("")}
    </ul>

    <p><strong>C. Langkah Aktivitas Penyelidikan:</strong></p>
    <ol>
      ${module.lkpd.langkahAktivitas.map((l) => `<li>${l}</li>`).join("")}
    </ol>

    ${
      module.lkpd.tabelPengamatanHeader && module.lkpd.tabelPengamatanRows
        ? `
      <table>
        <thead>
          <tr>
            ${module.lkpd.tabelPengamatanHeader.map((h) => `<th>${h}</th>`).join("")}
          </tr>
        </thead>
        <tbody>
          ${module.lkpd.tabelPengamatanRows
            .map(
              (row) => `
            <tr>
              ${row.map((cell) => `<td>${cell}</td>`).join("")}
            </tr>
          `
            )
            .join("")}
        </tbody>
      </table>
    `
        : ""
    }

    <p><strong>D. Pertanyaan Analisis:</strong></p>
    <ol>
      ${module.lkpd.pertanyaanAnalisis.map((q) => `<li>${q}</li>`).join("")}
    </ol>

    <p><strong>E. Refleksi Pribadi & Kelompok:</strong></p>
    <ol>
      ${module.lkpd.refleksiSiswa.map((r) => `<li>${r}</li>`).join("")}
    </ol>
  </div>

  <h3 style="margin-top: 20pt;">3. PENILAIAN SIKAP (LEMBAR OBSERVASI DIMENSI PROFIL LULUSAN)</h3>
  <p>
    <strong>Nama Sekolah:</strong> ${module.namaSekolah}<br/>
    <strong>Tahun Ajaran:</strong> ${module.tahunAjaran} | <strong>Fase / Kelas:</strong> ${module.fase} / ${module.kelas}<br/>
    <strong>Mata Pelajaran:</strong> ${module.mataPelajaran} | <strong>Materi:</strong> ${module.materiPelajaran}
  </p>

  <table>
    <thead>
      <tr>
        <th style="width: 5%;">No</th>
        <th style="width: 25%;">Aspek Pengamatan</th>
        <th style="width: 50%;">Kriteria Indikator</th>
        <th style="width: 20%;">Skor</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td><strong>Keimanan dan Ketaqwaan</strong></td>
        <td>• Berdoa sebelum & sesudah kegiatan.<br/>• Khusyuk dan bersikap baik.</td>
        <td>3 = 3 aspek<br/>2 = 2 aspek<br/>1 = 1 aspek</td>
      </tr>
      <tr>
        <td>2</td>
        <td><strong>Kewargaan</strong></td>
        <td>• Peduli & menghargai teman.<br/>• Menggunakan bahasa santun.</td>
        <td>3 = 3 aspek<br/>2 = 2 aspek<br/>1 = 1 aspek</td>
      </tr>
      <tr>
        <td>3</td>
        <td><strong>Penalaran Kritis</strong></td>
        <td>• Mampu mengidentifikasi & menganalisis masalah.<br/>• Reflektif dalam memecahkan tugas.</td>
        <td>3 = 3 aspek<br/>2 = 2 aspek<br/>1 = 1 aspek</td>
      </tr>
      <tr>
        <td>4</td>
        <td><strong>Kreativitas</strong></td>
        <td>• Mampu membuat ide/karya unik.<br/>• Antusias menyelesaikan tantangan.</td>
        <td>3 = 3 aspek<br/>2 = 2 aspek<br/>1 = 1 aspek</td>
      </tr>
      <tr>
        <td>5</td>
        <td><strong>Kolaborasi</strong></td>
        <td>• Aktif bekerja sama dalam tim.<br/>• Membantu teman yang kesulitan.</td>
        <td>3 = 3 aspek<br/>2 = 2 aspek<br/>1 = 1 aspek</td>
      </tr>
      <tr>
        <td>6</td>
        <td><strong>Kemandirian</strong></td>
        <td>• Mengelola waktu pengerjaan tugas.<br/>• Percaya diri menyampaikan pendapat.</td>
        <td>3 = 3 aspek<br/>2 = 2 aspek<br/>1 = 1 aspek</td>
      </tr>
      <tr>
        <td>7</td>
        <td><strong>Komunikasi</strong></td>
        <td>• Menyampaikan argumen dengan santun.<br/>• Menyajikan hasil diskusi dengan jelas.</td>
        <td>3 = 3 aspek<br/>2 = 2 aspek<br/>1 = 1 aspek</td>
      </tr>
    </tbody>
  </table>

  <h3 style="margin-top: 20pt;">4. PENILAIAN PENGETAHUAN (ASESMEN SUMATIF)</h3>
  <table>
    <thead>
      <tr>
        <th style="width: 5%;">No</th>
        <th style="width: 25%;">Indikator Soal</th>
        <th style="width: 45%;">Soal</th>
        <th style="width: 10%;">Level</th>
        <th style="width: 10%;">Jenis</th>
        <th style="width: 5%;">Skor</th>
      </tr>
    </thead>
    <tbody>
      ${module.soalEvaluasi
        .map(
          (s) => `
        <tr>
          <td>${s.no}</td>
          <td>${s.indikator}</td>
          <td>${s.soal.replace(/\n/g, "<br/>")}</td>
          <td>${s.levelKognitif}</td>
          <td>${s.jenisSoal}</td>
          <td><strong>${s.skor}</strong></td>
        </tr>
      `
        )
        .join("")}
      <tr>
        <td colspan="5" style="text-align:right;"><strong>TOTAL SKOR MAKSIMAL</strong></td>
        <td><strong>30</strong></td>
      </tr>
    </tbody>
  </table>

  <p><strong>Tabel Konversi Nilai Pengetahuan:</strong><br/><em>Rumus: Nilai Akhir = (Skor Perolehan / 30) x 100</em></p>
  <table>
    <thead>
      <tr>
        <th>Jumlah Skor</th>
        <th>Nilai Akhir</th>
        <th>Kriteria Penilaian</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>30</td><td><strong>100</strong></td><td>Sangat Baik, seluruh soal dijawab benar dan tepat.</td></tr>
      <tr><td>25</td><td><strong>90</strong></td><td>Sangat Baik, hanya 1 soal C3 salah.</td></tr>
      <tr><td>20</td><td><strong>80</strong></td><td>Baik, soal tipe C4 benar, 2 soal C3 salah.</td></tr>
      <tr><td>15</td><td><strong>70</strong></td><td>Cukup, soal tipe C4 benar, 3 soal C3 salah.</td></tr>
      <tr><td>10</td><td><strong>60</strong></td><td>Cukup, hanya soal C4 yang benar.</td></tr>
      <tr><td>5</td><td><strong>50</strong></td><td>Kurang, hanya menjawab 1 soal C3 benar.</td></tr>
      <tr><td>0</td><td><strong>0</strong></td><td>Perlu Bimbingan Intensif.</td></tr>
    </tbody>
  </table>

  <h3 style="margin-top: 20pt;">5. PENILAIAN KETERAMPILAN</h3>
  <p><strong>Rubrik Penilaian Keterampilan:</strong></p>
  <table>
    <thead>
      <tr>
        <th>Kriteria</th>
        <th>Sangat Baik (4)</th>
        <th>Baik (3)</th>
        <th>Cukup (2)</th>
        <th>Perlu Bimbingan (1)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Kerja Sama Kelompok</strong></td>
        <td>Inisiatif tinggi, membagi tugas adil, aktif membantu.</td>
        <td>Berkolaborasi dengan baik & berpartisipasi aktif.</td>
        <td>Berpartisipasi, kontribusi terbatas.</td>
        <td>Pasif, hanya mengikuti arahan teman.</td>
      </tr>
      <tr>
        <td><strong>Ketepatan Menganalisis / Membuat Karya</strong></td>
        <td>Sangat tepat, komprehensif, tanpa kesalahan.</td>
        <td>Sebagian besar tepat, ada kekeliruan kecil.</td>
        <td>Sebagian benar, analisis/karya kurang mendalam.</td>
        <td>Belum tepat & butuh bimbingan intensif.</td>
      </tr>
      <tr>
        <td><strong>Komunikasi / Presentasi</strong></td>
        <td>Suara jelas, runtut, percaya diri, dan santun.</td>
        <td>Jelas dan cukup percaya diri.</td>
        <td>Ragu-ragu & kurang jelas.</td>
        <td>Sulit mengomunikasikan hasil di depan kelas.</td>
      </tr>
    </tbody>
  </table>

  <p><em>Rumus Nilai Keterampilan: Nilai = (Skor Perolehan / 12) x 100</em></p>

  <p><strong>Tabel Rekapitulasi Penilaian Keterampilan Kelompok:</strong></p>
  <table>
    <thead>
      <tr>
        <th>No</th>
        <th>Nama Kelompok / Murid</th>
        <th>Kriteria 1</th>
        <th>Kriteria 2</th>
        <th>Kriteria 3</th>
        <th>Total</th>
        <th>Nilai</th>
        <th>Kriteria</th>
      </tr>
    </thead>
    <tbody>
      ${module.rekapKeterampilan
        .map(
          (r) => `
        <tr>
          <td>${r.no}</td>
          <td>${r.namaKelompok}</td>
          <td>${r.skorKriteria1 ?? ""}</td>
          <td>${r.skorKriteria2 ?? ""}</td>
          <td>${r.skorKriteria3 ?? ""}</td>
          <td><strong>${r.skorTotal ?? ""}</strong></td>
          <td><strong>${r.nilai ?? ""}</strong></td>
          <td>${r.kriteria ?? ""}</td>
        </tr>
      `
        )
        .join("")}
    </tbody>
  </table>

  <table class="signature-table">
    <tr>
      <td>
        Mengetahui,<br/>
        <strong>Kepala Sekolah</strong><br/><br/><br/><br/>
        <strong>(${module.namaKepsek})</strong><br/>
        NIP. ${module.nipKepsek}
      </td>
      <td>
        ${module.kota}, ${module.tanggal}<br/>
        <strong>Guru Kelas / Mata Pelajaran</strong><br/><br/><br/><br/>
        <strong>(${module.namaGuru})</strong><br/>
        NIP. ${module.nipGuru}
      </td>
    </tr>
  </table>
</body>
</html>
`;

  const blob = new Blob([htmlContent], { type: "application/msword;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  const sanitizedTitle = module.materiPelajaran.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 30);
  link.download = `Modul_Deep_Learning_${sanitizedTitle}.doc`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadMarkdownFile(module: DeepLearningModule) {
  const markdown = module.rawMarkdown || generateModuleMarkdown(module);
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  const sanitizedTitle = module.materiPelajaran.replace(/[^a-zA-Z0-9]/g, "_").slice(0, 30);
  link.download = `Modul_Deep_Learning_${sanitizedTitle}.md`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
