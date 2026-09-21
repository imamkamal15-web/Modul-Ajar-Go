import { DeepLearningModule } from "../types";
import { generateModuleMarkdown } from "./markdownGenerator";

export function exportToWordDoc(module: DeepLearningModule) {
  // Build Section C HTML for either Single or Multi-Pertemuan
  let sectionCPengalamanHtml = "";

  if (module.daftarPertemuan && module.daftarPertemuan.length > 1) {
    sectionCPengalamanHtml = module.daftarPertemuan
      .map((p) => {
        const sintakRows = p.sintakInti
          .map(
            (s) => `
            <div style="background-color: #ffffff; border: 1pt solid #cbd5e1; border-radius: 6pt; padding: 8pt 10pt; margin-bottom: 8pt;">
              <table style="width: 100%; border: none; margin: 0 0 4pt 0;">
                <tr>
                  <td style="border: none; padding: 0; font-weight: bold; font-size: 10.5pt; color: #0f172a;">
                    Sintak ${s.sintakNomor}: ${s.namaSintak}
                  </td>
                  <td style="border: none; padding: 0; text-align: right;">
                    <span style="display: inline-block; background-color: #d1fae5; color: #065f46; font-size: 8.5pt; font-weight: bold; padding: 2pt 8pt; border-radius: 10pt;">
                      ${s.tagDeepLearning}
                    </span>
                  </td>
                </tr>
              </table>
              <div style="font-size: 9.5pt; color: #1d4ed8; font-weight: 600; margin-bottom: 4pt;">
                Profil Disasar: ${s.dimensiProfil}
              </div>
              <div style="font-size: 10pt; color: #334155; line-height: 1.5;">
                ${s.deskripsi
                  .split("\n")
                  .map(
                    (d) =>
                      `<div style="border-left: 2pt solid #34d399; padding-left: 6pt; margin: 3pt 0;">${d}</div>`
                  )
                  .join("")}
              </div>
            </div>
          `
          )
          .join("");

        return `
        <div style="margin-top: 14pt; margin-bottom: 12pt;">
          <div style="background-color: #ecfeff; border: 1pt solid #a5f3fc; border-radius: 6pt; padding: 7pt 12pt; margin-bottom: 6pt;">
            <table style="width: 100%; border: none; margin: 0;">
              <tr>
                <td style="border: none; padding: 0; font-weight: bold; color: #083344; font-size: 11pt;">
                  • ${p.judulFokus}
                </td>
                <td style="border: none; padding: 0; text-align: right;">
                  <span style="display: inline-block; background-color: #ffffff; border: 1pt solid #a5f3fc; color: #0e7490; font-size: 9pt; font-weight: bold; padding: 2pt 8pt; border-radius: 12pt;">
                    Alokasi: ${p.alokasiWaktu}
                  </span>
                </td>
              </tr>
            </table>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-top: 4pt;">
            <thead>
              <tr style="background-color: #f1f5f9;">
                <th style="width: 22%; border: 1pt solid #94a3b8; padding: 8pt; text-align: left; font-size: 10pt; color: #1e293b;">Kegiatan</th>
                <th style="width: 63%; border: 1pt solid #94a3b8; padding: 8pt; text-align: left; font-size: 10pt; color: #1e293b;">Deskripsi Kegiatan</th>
                <th style="width: 15%; border: 1pt solid #94a3b8; padding: 8pt; text-align: center; font-size: 10pt; color: #1e293b;">Alokasi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="border: 1pt solid #cbd5e1; padding: 8pt; vertical-align: top; background-color: #fafafa;">
                  <div style="font-weight: bold; color: #0f172a; font-size: 10.5pt;">Pendahuluan</div>
                  <div style="color: #047857; font-size: 9pt; font-style: italic; font-weight: 600; margin-top: 2pt;">(Memahami)</div>
                </td>
                <td style="border: 1pt solid #cbd5e1; padding: 8pt; vertical-align: top; color: #334155;">
                  <ul style="margin: 0; padding-left: 14pt; line-height: 1.5; font-size: 10pt;">
                    ${p.deskripsiPendahuluan.map((item) => `<li style="margin-bottom: 3pt;">${item}</li>`).join("")}
                  </ul>
                </td>
                <td style="border: 1pt solid #cbd5e1; padding: 8pt; text-align: center; vertical-align: middle; font-weight: bold; color: #334155; font-size: 10pt;">
                  ${p.waktuPendahuluan}
                </td>
              </tr>

              <tr style="background-color: #f8fafc;">
                <td style="border: 1pt solid #cbd5e1; padding: 8pt; vertical-align: top;">
                  <div style="font-weight: bold; color: #0f172a; font-size: 10.5pt;">Inti</div>
                  <div style="color: #1d4ed8; font-size: 9pt; font-style: italic; font-weight: 600; margin-top: 2pt;">(Memahami, Mengaplikasi)</div>
                  <div style="font-size: 8.5pt; color: #64748b; margin-top: 6pt;">Model: ${module.modelPembelajaran}</div>
                </td>
                <td style="border: 1pt solid #cbd5e1; padding: 8pt; vertical-align: top;">
                  ${sintakRows}
                </td>
                <td style="border: 1pt solid #cbd5e1; padding: 8pt; text-align: center; vertical-align: middle; font-weight: bold; color: #334155; font-size: 10pt;">
                  ${p.waktuInti}
                </td>
              </tr>

              <tr>
                <td style="border: 1pt solid #cbd5e1; padding: 8pt; vertical-align: top; background-color: #fafafa;">
                  <div style="font-weight: bold; color: #0f172a; font-size: 10.5pt;">Penutup</div>
                  <div style="color: #6b21a8; font-size: 9pt; font-style: italic; font-weight: 600; margin-top: 2pt;">(Merefleksi)</div>
                </td>
                <td style="border: 1pt solid #cbd5e1; padding: 8pt; vertical-align: top; color: #334155;">
                  <div style="font-weight: bold; color: #6b21a8; font-size: 9pt; margin-bottom: 4pt; text-transform: uppercase; letter-spacing: 0.5pt;">
                    DEEP LEARNING – MEREFLEKSI
                  </div>
                  <ul style="margin: 0; padding-left: 14pt; line-height: 1.5; font-size: 10pt;">
                    ${p.deskripsiPenutup.map((item) => `<li style="margin-bottom: 3pt;">${item}</li>`).join("")}
                  </ul>
                </td>
                <td style="border: 1pt solid #cbd5e1; padding: 8pt; text-align: center; vertical-align: middle; font-weight: bold; color: #334155; font-size: 10pt;">
                  ${p.waktuPenutup}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
      })
      .join("");
  } else {
    // Single meeting table
    const sintakRows = module.sintakInti
      .map(
        (s) => `
        <div style="background-color: #ffffff; border: 1pt solid #cbd5e1; border-radius: 6pt; padding: 8pt 10pt; margin-bottom: 8pt;">
          <table style="width: 100%; border: none; margin: 0 0 4pt 0;">
            <tr>
              <td style="border: none; padding: 0; font-weight: bold; font-size: 10.5pt; color: #0f172a;">
                Sintak ${s.sintakNomor}: ${s.namaSintak}
              </td>
              <td style="border: none; padding: 0; text-align: right;">
                <span style="display: inline-block; background-color: #d1fae5; color: #065f46; font-size: 8.5pt; font-weight: bold; padding: 2pt 8pt; border-radius: 10pt;">
                  ${s.tagDeepLearning}
                </span>
              </td>
            </tr>
          </table>
          <div style="font-size: 9.5pt; color: #1d4ed8; font-weight: 600; margin-bottom: 4pt;">
            Profil Disasar: ${s.dimensiProfil}
          </div>
          <div style="font-size: 10pt; color: #334155; line-height: 1.5;">
            ${s.deskripsi
              .split("\n")
              .map(
                (d) =>
                  `<div style="border-left: 2pt solid #34d399; padding-left: 6pt; margin: 3pt 0;">${d}</div>`
              )
              .join("")}
          </div>
        </div>
      `
      )
      .join("");

    sectionCPengalamanHtml = `
      <table style="width: 100%; border-collapse: collapse; margin-top: 6pt;">
        <thead>
          <tr style="background-color: #f1f5f9;">
            <th style="width: 22%; border: 1pt solid #94a3b8; padding: 8pt; text-align: left; font-size: 10pt; color: #1e293b;">Kegiatan</th>
            <th style="width: 63%; border: 1pt solid #94a3b8; padding: 8pt; text-align: left; font-size: 10pt; color: #1e293b;">Deskripsi Kegiatan</th>
            <th style="width: 15%; border: 1pt solid #94a3b8; padding: 8pt; text-align: center; font-size: 10pt; color: #1e293b;">Alokasi</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="border: 1pt solid #cbd5e1; padding: 8pt; vertical-align: top; background-color: #fafafa;">
              <div style="font-weight: bold; color: #0f172a; font-size: 10.5pt;">Pendahuluan</div>
              <div style="color: #047857; font-size: 9pt; font-style: italic; font-weight: 600; margin-top: 2pt;">(Memahami)</div>
            </td>
            <td style="border: 1pt solid #cbd5e1; padding: 8pt; vertical-align: top; color: #334155;">
              <ul style="margin: 0; padding-left: 14pt; line-height: 1.5; font-size: 10pt;">
                ${module.deskripsiPendahuluan.map((item) => `<li style="margin-bottom: 3pt;">${item}</li>`).join("")}
              </ul>
            </td>
            <td style="border: 1pt solid #cbd5e1; padding: 8pt; text-align: center; vertical-align: middle; font-weight: bold; color: #334155; font-size: 10pt;">
              ${module.waktuPendahuluan}
            </td>
          </tr>

          <tr style="background-color: #f8fafc;">
            <td style="border: 1pt solid #cbd5e1; padding: 8pt; vertical-align: top;">
              <div style="font-weight: bold; color: #0f172a; font-size: 10.5pt;">Inti</div>
              <div style="color: #1d4ed8; font-size: 9pt; font-style: italic; font-weight: 600; margin-top: 2pt;">(Memahami, Mengaplikasi)</div>
              <div style="font-size: 8.5pt; color: #64748b; margin-top: 6pt;">Model: ${module.modelPembelajaran}</div>
            </td>
            <td style="border: 1pt solid #cbd5e1; padding: 8pt; vertical-align: top;">
              ${sintakRows}
            </td>
            <td style="border: 1pt solid #cbd5e1; padding: 8pt; text-align: center; vertical-align: middle; font-weight: bold; color: #334155; font-size: 10pt;">
              ${module.waktuInti}
            </td>
          </tr>

          <tr>
            <td style="border: 1pt solid #cbd5e1; padding: 8pt; vertical-align: top; background-color: #fafafa;">
              <div style="font-weight: bold; color: #0f172a; font-size: 10.5pt;">Penutup</div>
              <div style="color: #6b21a8; font-size: 9pt; font-style: italic; font-weight: 600; margin-top: 2pt;">(Merefleksi)</div>
            </td>
            <td style="border: 1pt solid #cbd5e1; padding: 8pt; vertical-align: top; color: #334155;">
              <div style="font-weight: bold; color: #6b21a8; font-size: 9pt; margin-bottom: 4pt; text-transform: uppercase; letter-spacing: 0.5pt;">
                DEEP LEARNING – MEREFLEKSI
              </div>
              <ul style="margin: 0; padding-left: 14pt; line-height: 1.5; font-size: 10pt;">
                ${module.deskripsiPenutup.map((item) => `<li style="margin-bottom: 3pt;">${item}</li>`).join("")}
              </ul>
            </td>
            <td style="border: 1pt solid #cbd5e1; padding: 8pt; text-align: center; vertical-align: middle; font-weight: bold; color: #334155; font-size: 10pt;">
              ${module.waktuPenutup}
            </td>
          </tr>
        </tbody>
      </table>
    `;
  }

  // Dimension Profil Cards (2 columns)
  const dimensiCardsHtml = `
    <table style="width: 100%; border-collapse: collapse; margin-top: 6pt;">
      <tr>
        <td style="width: 50%; border: none; padding: 0 4pt 6pt 0; vertical-align: top;">
          ${module.dimensiProfilLulusan
            .slice(0, 4)
            .map(
              (dim) => `
            <div style="background-color: ${dim.checked ? "#f0fdf4" : "#f8fafc"}; border: 1pt solid ${dim.checked ? "#bbf7d0" : "#e2e8f0"}; border-radius: 6pt; padding: 6pt 8pt; margin-bottom: 6pt;">
              <table style="width: 100%; border: none; margin: 0;">
                <tr>
                  <td style="width: 18pt; border: none; padding: 0; vertical-align: top;">
                    <span style="display: inline-block; width: 14pt; height: 14pt; line-height: 14pt; text-align: center; border-radius: 3pt; background-color: ${dim.checked ? "#059669" : "#cbd5e1"}; color: #ffffff; font-size: 9pt; font-weight: bold;">
                      ${dim.checked ? "✓" : ""}
                    </span>
                  </td>
                  <td style="border: none; padding-left: 6pt; vertical-align: top;">
                    <div style="font-weight: bold; font-size: 10pt; color: #0f172a;">${dim.label}</div>
                    <div style="font-size: 9pt; color: #475569; line-height: 1.4; margin-top: 2pt;">${dim.penjelasan}</div>
                  </td>
                </tr>
              </table>
            </div>
          `
            )
            .join("")}
        </td>
        <td style="width: 50%; border: none; padding: 0 0 6pt 4pt; vertical-align: top;">
          ${module.dimensiProfilLulusan
            .slice(4)
            .map(
              (dim) => `
            <div style="background-color: ${dim.checked ? "#f0fdf4" : "#f8fafc"}; border: 1pt solid ${dim.checked ? "#bbf7d0" : "#e2e8f0"}; border-radius: 6pt; padding: 6pt 8pt; margin-bottom: 6pt;">
              <table style="width: 100%; border: none; margin: 0;">
                <tr>
                  <td style="width: 18pt; border: none; padding: 0; vertical-align: top;">
                    <span style="display: inline-block; width: 14pt; height: 14pt; line-height: 14pt; text-align: center; border-radius: 3pt; background-color: ${dim.checked ? "#059669" : "#cbd5e1"}; color: #ffffff; font-size: 9pt; font-weight: bold;">
                      ${dim.checked ? "✓" : ""}
                    </span>
                  </td>
                  <td style="border: none; padding-left: 6pt; vertical-align: top;">
                    <div style="font-weight: bold; font-size: 10pt; color: #0f172a;">${dim.label}</div>
                    <div style="font-size: 9pt; color: #475569; line-height: 1.4; margin-top: 2pt;">${dim.penjelasan}</div>
                  </td>
                </tr>
              </table>
            </div>
          `
            )
            .join("")}
        </td>
      </tr>
    </table>
  `;

  // Create complete official HTML document
  const htmlContent = `
<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
<head>
<meta charset='utf-8'>
<title>${module.materiPelajaran} - Perencanaan Pembelajaran Mendalam</title>
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
    margin: 2cm 2cm 2cm 2cm;
    mso-page-orientation: portrait;
  }
  body {
    font-family: 'Times New Roman', Times, 'Segoe UI', Calibri, Arial, serif;
    font-size: 11pt;
    line-height: 1.45;
    color: #000000;
    background-color: #ffffff;
  }
  h1, h2, h3, h4 {
    font-family: 'Times New Roman', Times, 'Segoe UI', Calibri, Arial, serif;
    color: #000000;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  .page-break {
    page-break-before: always;
    mso-break-type: page-break;
  }
</style>
</head>
<body style="padding: 0; margin: 0;">

  <!-- OFFICIAL HEADER -->
  <div style="text-align: center; margin-bottom: 14pt; padding-bottom: 12pt; border-bottom: 2pt solid #e2e8f0;">
    <div style="margin-bottom: 8pt;">
      <span style="display: inline-block; padding: 4pt 14pt; background-color: #ecfdf5; border: 1pt solid #a7f3d0; border-radius: 20pt; color: #065f46; font-size: 9pt; font-weight: bold; letter-spacing: 0.5pt;">
        FORMAT BAKU PEMBELAJARAN MENDALAM (DEEP LEARNING) KURIKULUM MERDEKA
      </span>
    </div>
    <h1 style="font-size: 18pt; font-weight: 800; text-align: center; margin: 0 0 2pt 0; color: #0f172a; letter-spacing: 0.5pt; text-transform: uppercase;">
      PERENCANAAN PEMBELAJARAN MENDALAM
    </h1>
    <p style="font-size: 13pt; font-weight: 700; text-align: center; margin: 0 0 2pt 0; color: #065f46; text-transform: uppercase;">
      (DEEP LEARNING)
    </p>
    <p style="font-size: 11pt; text-align: center; margin: 0; color: #64748b; font-weight: 600;">
      ${module.namaSekolah}
    </p>
  </div>

  <!-- METADATA IDENTITY BOX -->
  <div style="background-color: #f8fafc; border: 1pt solid #cbd5e1; border-radius: 8pt; padding: 10pt 14pt; margin-bottom: 16pt;">
    <table style="width: 100%; border: none; margin: 0; border-collapse: collapse;">
      <tr>
        <td style="width: 50%; border: none; padding: 2pt 8pt 2pt 0; vertical-align: top;">
          <table style="width: 100%; border: none; margin: 0; border-collapse: collapse;">
            <tr>
              <td style="width: 130pt; border: none; padding: 3pt 0; font-weight: bold; color: #334155; font-size: 10pt;">Tahun Ajaran</td>
              <td style="border: none; padding: 3pt 0; color: #0f172a; font-size: 10pt;">: ${module.tahunAjaran}</td>
            </tr>
            <tr>
              <td style="border: none; padding: 3pt 0; font-weight: bold; color: #334155; font-size: 10pt;">Kelas / Fase / Semester</td>
              <td style="border: none; padding: 3pt 0; color: #0f172a; font-size: 10pt;">: ${module.kelas} / ${module.fase} / ${module.semester}</td>
            </tr>
            <tr>
              <td style="border: none; padding: 3pt 0; font-weight: bold; color: #334155; font-size: 10pt;">Mata Pelajaran</td>
              <td style="border: none; padding: 3pt 0; color: #0f172a; font-size: 10pt; font-weight: bold;">: ${module.mataPelajaran}</td>
            </tr>
            ${
              module.jumlahPertemuan && module.jumlahPertemuan > 1
                ? `
            <tr>
              <td style="border: none; padding: 3pt 0; font-weight: bold; color: #047857; font-size: 10pt;">Jumlah Pertemuan</td>
              <td style="border: none; padding: 3pt 0; color: #047857; font-size: 10pt; font-weight: bold;">: ${module.jumlahPertemuan} Pertemuan</td>
            </tr>`
                : ""
            }
          </table>
        </td>
        <td style="width: 50%; border: none; padding: 2pt 0 2pt 8pt; vertical-align: top;">
          <table style="width: 100%; border: none; margin: 0; border-collapse: collapse;">
            <tr>
              <td style="width: 120pt; border: none; padding: 3pt 0; font-weight: bold; color: #334155; font-size: 10pt;">Materi Pelajaran</td>
              <td style="border: none; padding: 3pt 0; color: #0f172a; font-size: 10pt; font-weight: bold;">: ${module.materiPelajaran}</td>
            </tr>
            <tr>
              <td style="border: none; padding: 3pt 0; font-weight: bold; color: #334155; font-size: 10pt;">Alokasi Waktu</td>
              <td style="border: none; padding: 3pt 0; color: #0f172a; font-size: 10pt;">: ${module.alokasiWaktu}</td>
            </tr>
            <tr>
              <td style="border: none; padding: 3pt 0; font-weight: bold; color: #334155; font-size: 10pt;">Model Pembelajaran</td>
              <td style="border: none; padding: 3pt 0; color: #0f172a; font-size: 10pt;">: ${module.modelPembelajaran}</td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>

  <!-- SECTION A. IDENTIFIKASI -->
  <div style="margin-top: 14pt; margin-bottom: 14pt; padding-bottom: 12pt; border-bottom: 1pt solid #e2e8f0;">
    <div style="margin-bottom: 6pt;">
      <span style="display: inline-block; width: 6pt; height: 16pt; background-color: #059669; border-radius: 2pt; margin-right: 6pt; vertical-align: middle;"></span>
      <h2 style="display: inline; font-size: 13pt; font-weight: bold; color: #0f172a; margin: 0; text-transform: uppercase; vertical-align: middle;">
        A. IDENTIFIKASI
      </h2>
    </div>

    <div style="margin-top: 8pt;">
      <div style="font-weight: bold; color: #0f172a; font-size: 10.5pt; margin-bottom: 2pt;">• Identifikasi Kesiapan Murid:</div>
      <div style="border-left: 2.5pt solid #cbd5e1; padding-left: 10pt; margin: 4pt 0 10pt 0; color: #334155; text-align: justify; font-size: 10pt; line-height: 1.5;">
        ${module.kesiapanMurid}
      </div>

      <div style="font-weight: bold; color: #0f172a; font-size: 10.5pt; margin-bottom: 2pt;">• Karakteristik Materi Pelajaran:</div>
      <div style="border-left: 2.5pt solid #cbd5e1; padding-left: 10pt; margin: 4pt 0 10pt 0; color: #334155; text-align: justify; font-size: 10pt; line-height: 1.5;">
        ${module.karakteristikMateriPelajaran || module.karakteristikMateri || ""}
      </div>

      <div style="font-weight: bold; color: #0f172a; font-size: 10.5pt; margin-bottom: 4pt;">• Dimensi Profil Lulusan:</div>
      ${dimensiCardsHtml}
    </div>
  </div>

  <!-- SECTION B. DESAIN PEMBELAJARAN -->
  <div style="margin-top: 14pt; margin-bottom: 14pt; padding-bottom: 12pt; border-bottom: 1pt solid #e2e8f0;">
    <div style="margin-bottom: 6pt;">
      <span style="display: inline-block; width: 6pt; height: 16pt; background-color: #0d9488; border-radius: 2pt; margin-right: 6pt; vertical-align: middle;"></span>
      <h2 style="display: inline; font-size: 13pt; font-weight: bold; color: #0f172a; margin: 0; text-transform: uppercase; vertical-align: middle;">
        B. DESAIN PEMBELAJARAN
      </h2>
    </div>

    <div style="margin-top: 8pt;">
      <div style="font-weight: bold; color: #0f172a; font-size: 10.5pt; margin-bottom: 2pt;">• Capaian Pembelajaran:</div>
      <div style="background-color: #f8fafc; border-left: 3pt solid #14b8a6; border: 1pt solid #e2e8f0; border-left-width: 3pt; border-radius: 6pt; padding: 7pt 10pt; margin: 4pt 0 10pt 0; color: #334155; text-align: justify; font-size: 10pt; line-height: 1.5;">
        ${module.capaianPembelajaran}
      </div>

      <div style="font-weight: bold; color: #0f172a; font-size: 10.5pt; margin-bottom: 2pt;">• Tujuan Pembelajaran:</div>
      <div style="background-color: #f8fafc; border-left: 3pt solid #14b8a6; border: 1pt solid #e2e8f0; border-left-width: 3pt; border-radius: 6pt; padding: 7pt 10pt; margin: 4pt 0 12pt 0; color: #334155; text-align: justify; font-size: 10pt; line-height: 1.5;">
        ${module.tujuanPembelajaran}
      </div>

      <!-- 3 Structured Cards for Pedagogis, Lingkungan, Digital -->
      <table style="width: 100%; border-collapse: collapse; margin-top: 8pt;">
        <tr>
          <td style="width: 50%; border: none; padding: 0 4pt 8pt 0; vertical-align: top;">
            <div style="background-color: #f8fafc; border: 1pt solid #cbd5e1; border-radius: 6pt; padding: 8pt 10pt;">
              <div style="font-size: 9pt; font-weight: bold; text-transform: uppercase; color: #065f46; letter-spacing: 0.5pt; margin-bottom: 4pt;">
                Praktik Pedagogis
              </div>
              <ul style="margin: 0; padding-left: 12pt; font-size: 9.5pt; color: #334155; line-height: 1.45;">
                <li><strong>Pendekatan:</strong> ${module.pendekatanPembelajaran}</li>
                <li><strong>Model:</strong> ${module.modelPembelajaran}</li>
                <li><strong>Metode:</strong> ${module.metodePembelajaran}</li>
              </ul>
            </div>
          </td>
          <td style="width: 50%; border: none; padding: 0 0 8pt 4pt; vertical-align: top;">
            <div style="background-color: #f8fafc; border: 1pt solid #cbd5e1; border-radius: 6pt; padding: 8pt 10pt;">
              <div style="font-size: 9pt; font-weight: bold; text-transform: uppercase; color: #065f46; letter-spacing: 0.5pt; margin-bottom: 4pt;">
                Lingkungan & Kemitraan
              </div>
              <ul style="margin: 0; padding-left: 12pt; font-size: 9.5pt; color: #334155; line-height: 1.45;">
                <li><strong>Budaya Belajar:</strong> ${module.budayaBelajar}</li>
                <li><strong>Ruang Fisik:</strong> ${module.ruangFisik}</li>
                <li><strong>Kemitraan Murid:</strong> ${module.kemitraanMurid}</li>
              </ul>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2" style="border: none; padding: 4pt 0 0 0;">
            <div style="background-color: #f8fafc; border: 1pt solid #cbd5e1; border-radius: 6pt; padding: 8pt 10pt;">
              <div style="font-size: 9pt; font-weight: bold; text-transform: uppercase; color: #065f46; letter-spacing: 0.5pt; margin-bottom: 4pt;">
                Pemanfaatan Digital & Media
              </div>
              <table style="width: 100%; border: none; margin: 0; font-size: 9.5pt;">
                <tr>
                  <td style="width: 33%; border: none; padding: 2pt 4pt 2pt 0; vertical-align: top;">
                    <strong style="color: #0f172a; display: block;">Platform Desain / Digital:</strong>
                    <span style="color: #334155;">${module.platformDigital}</span>
                  </td>
                  <td style="width: 33%; border: none; padding: 2pt 4pt 2pt 4pt; vertical-align: top;">
                    <strong style="color: #0f172a; display: block;">Perangkat:</strong>
                    <span style="color: #334155;">${module.perangkat}</span>
                  </td>
                  <td style="width: 34%; border: none; padding: 2pt 0 2pt 4pt; vertical-align: top;">
                    <strong style="color: #0f172a; display: block;">Media & Bahan Ajar:</strong>
                    <span style="color: #334155;">${module.mediaPembelajaran}</span>
                  </td>
                </tr>
              </table>
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>

  <!-- SECTION C. PENGALAMAN BELAJAR -->
  <div style="margin-top: 14pt; margin-bottom: 14pt; padding-bottom: 12pt; border-bottom: 1pt solid #e2e8f0;">
    <div style="margin-bottom: 4pt;">
      <span style="display: inline-block; width: 6pt; height: 16pt; background-color: #0891b2; border-radius: 2pt; margin-right: 6pt; vertical-align: middle;"></span>
      <h2 style="display: inline; font-size: 13pt; font-weight: bold; color: #0f172a; margin: 0; text-transform: uppercase; vertical-align: middle;">
        C. PENGALAMAN BELAJAR
      </h2>
    </div>
    <p style="font-size: 9.5pt; color: #64748b; font-style: italic; margin: 2pt 0 8pt 0;">
      Tabel alur pembelajaran mendalam mengintegrasikan prinsip Memahami, Mengaplikasi, dan Merefleksi dengan sintak model pedagogis.
    </p>

    ${sectionCPengalamanHtml}
  </div>

  <!-- SECTION D. ASESMEN PEMBELAJARAN -->
  <div style="margin-top: 14pt; margin-bottom: 14pt; padding-bottom: 12pt; border-bottom: 1pt solid #e2e8f0;">
    <div style="margin-bottom: 6pt;">
      <span style="display: inline-block; width: 6pt; height: 16pt; background-color: #d97706; border-radius: 2pt; margin-right: 6pt; vertical-align: middle;"></span>
      <h2 style="display: inline; font-size: 13pt; font-weight: bold; color: #0f172a; margin: 0; text-transform: uppercase; vertical-align: middle;">
        D. ASESMEN PEMBELAJARAN
      </h2>
    </div>

    <div style="font-size: 10pt; color: #334155; line-height: 1.6; margin-top: 6pt;">
      <div style="font-weight: bold; color: #0f172a; margin-bottom: 2pt;">• Asesmen Formatif:</div>
      <ul style="margin: 0 0 8pt 14pt; padding: 0;">
        <li style="margin-bottom: 3pt;"><strong>Penilaian Sikap (Profil Lulusan):</strong> ${module.asesmenFormatifSikap}</li>
        <li style="margin-bottom: 3pt;"><strong>Penilaian Keterampilan:</strong> ${module.asesmenFormatifKeterampilan}</li>
      </ul>

      <div style="font-weight: bold; color: #0f172a; margin-bottom: 2pt;">• Asesmen Sumatif:</div>
      <div style="margin-left: 14pt;">
        ${module.asesmenSumatifDeskripsi}
      </div>
    </div>
  </div>

  <!-- SIGNATURES BLOCK -->
  <table style="width: 100%; border: none; margin-top: 24pt; margin-bottom: 20pt; border-collapse: collapse;">
    <tr>
      <td style="width: 50%; border: none; text-align: center; vertical-align: top; font-size: 10.5pt; color: #0f172a;">
        Mengetahui,<br/>
        <strong>Kepala Sekolah</strong><br/><br/><br/><br/>
        <strong style="text-decoration: underline;">${module.namaKepsek}</strong><br/>
        NIP. ${module.nipKepsek}
      </td>
      <td style="width: 50%; border: none; text-align: center; vertical-align: top; font-size: 10.5pt; color: #0f172a;">
        ${module.kota}, ${module.tanggal}<br/>
        <strong>Guru Kelas / Mata Pelajaran</strong><br/><br/><br/><br/>
        <strong style="text-decoration: underline;">${module.namaGuru}</strong><br/>
        NIP. ${module.nipGuru}
      </td>
    </tr>
  </table>

  <!-- PAGE BREAK TO LAMPIRAN -->
  <div class="page-break" style="page-break-before: always; mso-break-type: page-break;"></div>

  <!-- LAMPIRAN-LAMPIRAN HEADER -->
  <div style="text-align: center; margin-top: 10pt; margin-bottom: 16pt; padding-bottom: 10pt; border-bottom: 2pt solid #e2e8f0;">
    <h1 style="font-size: 16pt; font-weight: 800; text-align: center; margin: 0 0 2pt 0; color: #0f172a; letter-spacing: 0.5pt; text-transform: uppercase;">
      LAMPIRAN-LAMPIRAN
    </h1>
    <p style="font-size: 10pt; text-align: center; margin: 0; color: #64748b; font-style: italic;">
      Dokumen Pendukung, Lembar Kerja, Rubrik Evaluasi, dan Rekapitulasi Penilaian
    </p>
  </div>

  <!-- LAMPIRAN 1: RINGKASAN MATERI AJAR -->
  <div style="margin-bottom: 20pt;">
    <div style="background-color: #f1f5f9; padding: 6pt 10pt; border-radius: 4pt; border-left: 3pt solid #0284c7; margin-bottom: 8pt;">
      <h3 style="font-size: 11pt; font-weight: bold; color: #0f172a; margin: 0; text-transform: uppercase;">
        1. RINGKASAN MATERI AJAR
      </h3>
    </div>
    <div style="background-color: #f8fafc; border: 1pt solid #cbd5e1; border-radius: 6pt; padding: 10pt 14pt; font-size: 10pt; color: #334155; line-height: 1.6; text-align: justify;">
      ${module.ringkasanMateriAjar
        .replace(/\n\n/g, "<br/><br/>")
        .replace(/\*\*(.*?)\*\*/g, "<strong style='color:#0f172a;'>$1</strong>")}
    </div>
  </div>

  <!-- LAMPIRAN 2: LEMBAR KERJA MURID (LKPD) -->
  <div style="margin-bottom: 20pt;">
    <div style="background-color: #f1f5f9; padding: 6pt 10pt; border-radius: 4pt; border-left: 3pt solid #059669; margin-bottom: 8pt;">
      <h3 style="font-size: 11pt; font-weight: bold; color: #0f172a; margin: 0; text-transform: uppercase;">
        2. LEMBAR KERJA MURID (LKM / LKPD)
      </h3>
    </div>

    <!-- Official Framed Student Worksheet -->
    <div style="border: 1.5pt solid #475569; border-radius: 8pt; padding: 14pt 16pt; background-color: #ffffff;">
      <div style="text-align: center; border-bottom: 1pt solid #cbd5e1; padding-bottom: 8pt; margin-bottom: 10pt;">
        <h2 style="font-size: 13pt; font-weight: 800; margin: 0; color: #0f172a; text-transform: uppercase;">
          ${module.lkpd.judul}
        </h2>
        <p style="font-size: 10pt; font-style: italic; color: #059669; margin: 3pt 0 0 0;">
          Tema Kontekstual: ${module.lkpd.temaKontekstual}
        </p>
      </div>

      <!-- Identity Grid for Worksheet -->
      <table style="width: 100%; border: 1pt solid #cbd5e1; background-color: #f8fafc; border-collapse: collapse; margin-bottom: 12pt; font-size: 9.5pt;">
        <tr>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt 8pt; width: 50%; vertical-align: top;">
            <strong>Nama Kelompok:</strong> ............................................................<br/>
            <strong>Kelas / Semester:</strong> ${module.kelas} / ${module.semester}
          </td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt 8pt; width: 50%; vertical-align: top;">
            <strong>Anggota Kelompok:</strong><br/>
            1. .................................................... 3. ....................................................<br/>
            2. .................................................... 4. ....................................................
          </td>
        </tr>
      </table>

      <!-- Steps & Instructions -->
      <div style="font-size: 10pt; color: #1e293b; line-height: 1.55;">
        <div style="font-weight: bold; color: #047857; margin-bottom: 2pt;">A. Petunjuk Belajar:</div>
        <ol style="margin: 0 0 8pt 14pt; padding: 0;">
          ${module.lkpd.petunjukBelajar.map((p) => `<li style="margin-bottom: 2pt;">${p}</li>`).join("")}
        </ol>

        <div style="font-weight: bold; color: #047857; margin-bottom: 2pt;">B. Alat dan Bahan:</div>
        <ul style="margin: 0 0 8pt 14pt; padding: 0;">
          ${module.lkpd.alatDanBahan.map((a) => `<li style="margin-bottom: 2pt;">${a}</li>`).join("")}
        </ul>

        <div style="font-weight: bold; color: #047857; margin-bottom: 2pt;">C. Langkah Aktivitas Penyelidikan:</div>
        <ol style="margin: 0 0 10pt 14pt; padding: 0;">
          ${module.lkpd.langkahAktivitas.map((l) => `<li style="margin-bottom: 2pt;">${l}</li>`).join("")}
        </ol>

        ${
          module.lkpd.tabelPengamatanHeader && module.lkpd.tabelPengamatanRows
            ? `
          <div style="font-weight: bold; color: #0f172a; margin-top: 8pt; margin-bottom: 4pt;">
            Tabel Kerja / Hasil Investigasi Siswa:
          </div>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 12pt; font-size: 9.5pt;">
            <thead>
              <tr style="background-color: #f1f5f9;">
                ${module.lkpd.tabelPengamatanHeader
                  .map(
                    (h) =>
                      `<th style="border: 1pt solid #94a3b8; padding: 6pt; text-align: left; font-weight: bold;">${h}</th>`
                  )
                  .join("")}
              </tr>
            </thead>
            <tbody>
              ${module.lkpd.tabelPengamatanRows
                .map(
                  (row) => `
                <tr>
                  ${row.map((cell) => `<td style="border: 1pt solid #cbd5e1; padding: 6pt;">${cell}</td>`).join("")}
                </tr>
              `
                )
                .join("")}
            </tbody>
          </table>
        `
            : ""
        }

        <div style="font-weight: bold; color: #047857; margin-top: 8pt; margin-bottom: 2pt;">
          D. Pertanyaan Analisis & Pemecahan Masalah:
        </div>
        <ol style="margin: 0 0 8pt 14pt; padding: 0;">
          ${module.lkpd.pertanyaanAnalisis
            .map(
              (q) => `
            <li style="margin-bottom: 8pt;">
              <div>${q}</div>
              <div style="border-bottom: 1pt dotted #94a3b8; height: 16pt; margin-top: 4pt;"></div>
              <div style="border-bottom: 1pt dotted #94a3b8; height: 16pt; margin-top: 4pt;"></div>
            </li>
          `
            )
            .join("")}
        </ol>

        <div style="font-weight: bold; color: #047857; margin-top: 8pt; margin-bottom: 2pt;">
          E. Refleksi Pribadi & Kelompok:
        </div>
        <ol style="margin: 0 0 4pt 14pt; padding: 0;">
          ${module.lkpd.refleksiSiswa
            .map(
              (r) => `
            <li style="margin-bottom: 8pt;">
              <div>${r}</div>
              <div style="border-bottom: 1pt dotted #94a3b8; height: 16pt; margin-top: 4pt;"></div>
            </li>
          `
            )
            .join("")}
        </ol>
      </div>
    </div>
  </div>

  <!-- LAMPIRAN 3: PENILAIAN SIKAP -->
  <div style="margin-bottom: 20pt;">
    <div style="background-color: #f1f5f9; padding: 6pt 10pt; border-radius: 4pt; border-left: 3pt solid #8b5cf6; margin-bottom: 8pt;">
      <h3 style="font-size: 11pt; font-weight: bold; color: #0f172a; margin: 0; text-transform: uppercase;">
        3. PENILAIAN SIKAP (LEMBAR OBSERVASI DIMENSI PROFIL LULUSAN)
      </h3>
    </div>

    <table style="width: 100%; border: none; margin-bottom: 8pt; font-size: 9.5pt; color: #334155;">
      <tr>
        <td style="border: none; padding: 2pt 0;"><strong>Nama Sekolah:</strong> ${module.namaSekolah}</td>
        <td style="border: none; padding: 2pt 0; text-align: right;"><strong>Tahun Ajaran:</strong> ${module.tahunAjaran}</td>
      </tr>
      <tr>
        <td style="border: none; padding: 2pt 0;"><strong>Kelas / Fase:</strong> ${module.kelas} / ${module.fase}</td>
        <td style="border: none; padding: 2pt 0; text-align: right;"><strong>Mata Pelajaran:</strong> ${module.mataPelajaran}</td>
      </tr>
    </table>

    <table style="width: 100%; border-collapse: collapse; font-size: 9.5pt;">
      <thead>
        <tr style="background-color: #f1f5f9;">
          <th style="width: 6%; border: 1pt solid #94a3b8; padding: 6pt; text-align: center;">No</th>
          <th style="width: 28%; border: 1pt solid #94a3b8; padding: 6pt; text-align: left;">Aspek Pengamatan (7 Dimensi)</th>
          <th style="width: 46%; border: 1pt solid #94a3b8; padding: 6pt; text-align: left;">Kriteria Indikator</th>
          <th style="width: 20%; border: 1pt solid #94a3b8; padding: 6pt; text-align: center;">Skor</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center;">1</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; font-weight: bold;">Keimanan dan Ketaqwaan</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt;">• Berdoa sebelum & sesudah kegiatan.<br/>• Khusyuk dan menunjukkan sikap terpuji.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; font-size: 8.5pt;">3 = 3 aspek terpenuhi<br/>2 = 2 aspek terpenuhi<br/>1 = 1 aspek terpenuhi</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center;">2</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; font-weight: bold;">Kewargaan</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt;">• Menghargai teman sebaya.<br/>• Menggunakan bahasa santun dan taat aturan kelas.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; font-size: 8.5pt;">3 = 3 aspek terpenuhi<br/>2 = 2 aspek terpenuhi<br/>1 = 1 aspek terpenuhi</td>
        </tr>
        <tr>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center;">3</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; font-weight: bold;">Penalaran Kritis</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt;">• Mampu mengidentifikasi fakta & menganalisis masalah.<br/>• Mengajukan pertanyaan reflektif bernalar.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; font-size: 8.5pt;">3 = 3 aspek terpenuhi<br/>2 = 2 aspek terpenuhi<br/>1 = 1 aspek terpenuhi</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center;">4</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; font-weight: bold;">Kreativitas</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt;">• Menyajikan ide orisinal dan solusi alternatif unik.<br/>• Antusias merancang produk karya.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; font-size: 8.5pt;">3 = 3 aspek terpenuhi<br/>2 = 2 aspek terpenuhi<br/>1 = 1 aspek terpenuhi</td>
        </tr>
        <tr>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center;">5</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; font-weight: bold;">Kolaborasi</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt;">• Berbagi tugas secara adil & aktif berpartisipasi.<br/>• Membantu rekan kelompok yang mengalami kesulitan.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; font-size: 8.5pt;">3 = 3 aspek terpenuhi<br/>2 = 2 aspek terpenuhi<br/>1 = 1 aspek terpenuhi</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center;">6</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; font-weight: bold;">Kemandirian</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt;">• Mampu mengelola waktu pengerjaan tugas.<br/>• Percaya diri mengambil inisiatif tanpa bergantung penuh.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; font-size: 8.5pt;">3 = 3 aspek terpenuhi<br/>2 = 2 aspek terpenuhi<br/>1 = 1 aspek terpenuhi</td>
        </tr>
        <tr>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center;">7</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; font-weight: bold;">Komunikasi</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt;">• Menyampaikan gagasan dengan runut dan artikulatif.<br/>• Menyimak penjelasan orang lain dengan penuh perhatian.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; font-size: 8.5pt;">3 = 3 aspek terpenuhi<br/>2 = 2 aspek terpenuhi<br/>1 = 1 aspek terpenuhi</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- LAMPIRAN 4: PENILAIAN PENGETAHUAN (ASESMEN SUMATIF) -->
  <div style="margin-bottom: 20pt;">
    <div style="background-color: #f1f5f9; padding: 6pt 10pt; border-radius: 4pt; border-left: 3pt solid #f59e0b; margin-bottom: 8pt;">
      <h3 style="font-size: 11pt; font-weight: bold; color: #0f172a; margin: 0; text-transform: uppercase;">
        4. PENILAIAN PENGETAHUAN (ASESMEN SUMATIF)
      </h3>
    </div>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 12pt; font-size: 9.5pt;">
      <thead>
        <tr style="background-color: #f1f5f9;">
          <th style="width: 5%; border: 1pt solid #94a3b8; padding: 6pt; text-align: center;">No</th>
          <th style="width: 25%; border: 1pt solid #94a3b8; padding: 6pt; text-align: left;">Indikator Soal</th>
          <th style="width: 44%; border: 1pt solid #94a3b8; padding: 6pt; text-align: left;">Butir Soal Evaluasi HOTs</th>
          <th style="width: 9%; border: 1pt solid #94a3b8; padding: 6pt; text-align: center;">Level</th>
          <th style="width: 9%; border: 1pt solid #94a3b8; padding: 6pt; text-align: center;">Jenis</th>
          <th style="width: 8%; border: 1pt solid #94a3b8; padding: 6pt; text-align: center;">Skor</th>
        </tr>
      </thead>
      <tbody>
        ${module.soalEvaluasi
          .map(
            (s, idx) => `
          <tr style="${idx % 2 === 1 ? "background-color: #f8fafc;" : ""}">
            <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; vertical-align: top;">${s.no}</td>
            <td style="border: 1pt solid #cbd5e1; padding: 6pt; vertical-align: top;">${s.indikator}</td>
            <td style="border: 1pt solid #cbd5e1; padding: 6pt; vertical-align: top; line-height: 1.5;">${s.soal.replace(/\n/g, "<br/>")}</td>
            <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; vertical-align: top;">
              <span style="display: inline-block; background-color: #e0f2fe; color: #0369a1; padding: 1pt 5pt; border-radius: 4pt; font-size: 8pt; font-weight: bold;">
                ${s.levelKognitif}
              </span>
            </td>
            <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; vertical-align: top; font-size: 8.5pt;">${s.jenisSoal}</td>
            <td style="border: 1pt solid #cbd5e1; padding: 6pt; text-align: center; vertical-align: top; font-weight: bold; color: #0f172a;">${s.skor}</td>
          </tr>
        `
          )
          .join("")}
        <tr style="background-color: #ecfdf5; font-weight: bold;">
          <td colspan="5" style="border: 1pt solid #94a3b8; padding: 6pt 10pt; text-align: right; color: #065f46;">
            TOTAL SKOR MAKSIMAL
          </td>
          <td style="border: 1pt solid #94a3b8; padding: 6pt; text-align: center; color: #065f46; font-size: 10.5pt;">
            30
          </td>
        </tr>
      </tbody>
    </table>

    <div style="font-weight: bold; color: #0f172a; font-size: 10pt; margin-bottom: 3pt;">
      Tabel Konversi Nilai Pengetahuan (Skala 0 - 100):
    </div>
    <div style="font-size: 9pt; color: #64748b; font-style: italic; margin-bottom: 6pt;">
      Rumus Perhitungan: Nilai Akhir = (Skor Perolehan / 30) x 100
    </div>
    <table style="width: 100%; border-collapse: collapse; font-size: 9.5pt;">
      <thead>
        <tr style="background-color: #f1f5f9;">
          <th style="border: 1pt solid #94a3b8; padding: 5pt; text-align: center;">Jumlah Skor</th>
          <th style="border: 1pt solid #94a3b8; padding: 5pt; text-align: center;">Nilai Akhir</th>
          <th style="border: 1pt solid #94a3b8; padding: 5pt; text-align: left;">Kriteria Capaian & Deskripsi</th>
        </tr>
      </thead>
      <tbody>
        <tr><td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center;">30</td><td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center; font-weight: bold; color: #047857;">100</td><td style="border: 1pt solid #cbd5e1; padding: 5pt;">Sangat Baik, seluruh soal dijawab benar dengan penalaran tepat.</td></tr>
        <tr style="background-color: #f8fafc;"><td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center;">25</td><td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center; font-weight: bold; color: #047857;">90</td><td style="border: 1pt solid #cbd5e1; padding: 5pt;">Sangat Baik, hanya 1 butir soal C3 yang kurang sempurna.</td></tr>
        <tr><td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center;">20</td><td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center; font-weight: bold; color: #0284c7;">80</td><td style="border: 1pt solid #cbd5e1; padding: 5pt;">Baik, soal analisis bernalar dijawab tepat dengan sedikit kekeliruan konsep dasar.</td></tr>
        <tr style="background-color: #f8fafc;"><td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center;">15</td><td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center; font-weight: bold; color: #d97706;">70</td><td style="border: 1pt solid #cbd5e1; padding: 5pt;">Cukup, mampu memecahkan masalah mendasar namun butuh penguatan analisis.</td></tr>
        <tr><td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center;">10</td><td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center; font-weight: bold; color: #d97706;">60</td><td style="border: 1pt solid #cbd5e1; padding: 5pt;">Cukup, hanya mampu menyelesaikan sebagian kecil pertanyaan bernalar.</td></tr>
        <tr style="background-color: #f8fafc;"><td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center;">5</td><td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center; font-weight: bold; color: #dc2626;">50</td><td style="border: 1pt solid #cbd5e1; padding: 5pt;">Kurang, pemahaman konsep belum terbentuk secara utuh.</td></tr>
        <tr><td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center;">0</td><td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center; font-weight: bold; color: #dc2626;">0</td><td style="border: 1pt solid #cbd5e1; padding: 5pt;">Perlu Bimbingan Intensif (Remedial Pembelajaran Khusus).</td></tr>
      </tbody>
    </table>
  </div>

  <!-- LAMPIRAN 5: PENILAIAN KETERAMPILAN -->
  <div style="margin-bottom: 20pt;">
    <div style="background-color: #f1f5f9; padding: 6pt 10pt; border-radius: 4pt; border-left: 3pt solid #10b981; margin-bottom: 8pt;">
      <h3 style="font-size: 11pt; font-weight: bold; color: #0f172a; margin: 0; text-transform: uppercase;">
        5. PENILAIAN KETERAMPILAN
      </h3>
    </div>

    <div style="font-weight: bold; color: #0f172a; font-size: 10pt; margin-bottom: 4pt;">
      Rubrik Penilaian Keterampilan:
    </div>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 10pt; font-size: 9.5pt;">
      <thead>
        <tr style="background-color: #f1f5f9;">
          <th style="width: 25%; border: 1pt solid #94a3b8; padding: 6pt; text-align: left;">Kriteria</th>
          <th style="width: 20%; border: 1pt solid #94a3b8; padding: 6pt; text-align: left;">Sangat Baik (4)</th>
          <th style="width: 20%; border: 1pt solid #94a3b8; padding: 6pt; text-align: left;">Baik (3)</th>
          <th style="width: 18%; border: 1pt solid #94a3b8; padding: 6pt; text-align: left;">Cukup (2)</th>
          <th style="width: 17%; border: 1pt solid #94a3b8; padding: 6pt; text-align: left;">Perlu Bimbingan (1)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; font-weight: bold; vertical-align: top;">Kerja Sama Kelompok</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; vertical-align: top;">Inisiatif tinggi, pembagian peran sangat adil, proaktif membantu teman.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; vertical-align: top;">Berkolaborasi baik, aktif berkontribusi dalam tugas kelompok.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; vertical-align: top;">Cukup berpartisipasi, namun kontribusi masih terbatas.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; vertical-align: top;">Pasif, hanya menunggu instruksi dari teman sebaya.</td>
        </tr>
        <tr style="background-color: #f8fafc;">
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; font-weight: bold; vertical-align: top;">Ketepatan Menganalisis / Membuat Karya</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; vertical-align: top;">Sangat tepat, mendalam, orisinal, dan bebas kesalahan konsep.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; vertical-align: top;">Sebagian besar analisis/produk tepat dengan sedikit kekeliruan kecil.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; vertical-align: top;">Sebagian benar, namun analisis kurang lengkap/dangkal.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; vertical-align: top;">Belum tepat dan membutuhkan bimbingan intensif dari guru.</td>
        </tr>
        <tr>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; font-weight: bold; vertical-align: top;">Komunikasi & Presentasi</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; vertical-align: top;">Penyampaian sangat runut, percaya diri tinggi, artikulasi jelas dan santun.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; vertical-align: top;">Jelas, cukup percaya diri, dan mudah dipahami teman sekelas.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; vertical-align: top;">Masih ragu-ragu dan intonasi suara kurang terdengar jelas.</td>
          <td style="border: 1pt solid #cbd5e1; padding: 6pt; vertical-align: top;">Belum berani berbicara di depan kelas dan membaca teks penuh.</td>
        </tr>
      </tbody>
    </table>

    <div style="font-size: 9pt; color: #64748b; font-style: italic; margin-bottom: 8pt;">
      Rumus Perhitungan: Nilai Keterampilan = (Skor Perolehan / 12) x 100
    </div>

    <div style="font-weight: bold; color: #0f172a; font-size: 10pt; margin-bottom: 4pt;">
      Tabel Rekapitulasi Penilaian Keterampilan Kelompok:
    </div>
    <table style="width: 100%; border-collapse: collapse; font-size: 9.5pt;">
      <thead>
        <tr style="background-color: #f1f5f9;">
          <th style="width: 6%; border: 1pt solid #94a3b8; padding: 5pt; text-align: center;">No</th>
          <th style="width: 34%; border: 1pt solid #94a3b8; padding: 5pt; text-align: left;">Nama Kelompok / Murid</th>
          <th style="width: 12%; border: 1pt solid #94a3b8; padding: 5pt; text-align: center;">Kriteria 1 (1-4)</th>
          <th style="width: 12%; border: 1pt solid #94a3b8; padding: 5pt; text-align: center;">Kriteria 2 (1-4)</th>
          <th style="width: 12%; border: 1pt solid #94a3b8; padding: 5pt; text-align: center;">Kriteria 3 (1-4)</th>
          <th style="width: 12%; border: 1pt solid #94a3b8; padding: 5pt; text-align: center;">Total Skor</th>
          <th style="width: 12%; border: 1pt solid #94a3b8; padding: 5pt; text-align: center;">Nilai (0-100)</th>
        </tr>
      </thead>
      <tbody>
        ${module.rekapKeterampilan
          .map(
            (r, idx) => `
          <tr style="${idx % 2 === 1 ? "background-color: #f8fafc;" : ""}">
            <td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center;">${r.no}</td>
            <td style="border: 1pt solid #cbd5e1; padding: 5pt; font-weight: 500;">${r.namaKelompok}</td>
            <td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center;">${r.skorKriteria1 ?? ""}</td>
            <td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center;">${r.skorKriteria2 ?? ""}</td>
            <td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center;">${r.skorKriteria3 ?? ""}</td>
            <td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center; font-weight: bold; color: #0f172a;">${r.skorTotal ?? ""}</td>
            <td style="border: 1pt solid #cbd5e1; padding: 5pt; text-align: center; font-weight: bold; color: #047857;">${r.nilai ?? ""}</td>
          </tr>
        `
          )
          .join("")}
      </tbody>
    </table>
  </div>

  <!-- CLOSING SIGNATURES -->
  <table style="width: 100%; border: none; margin-top: 24pt; border-collapse: collapse;">
    <tr>
      <td style="width: 50%; border: none; text-align: center; vertical-align: top; font-size: 10.5pt; color: #0f172a;">
        Mengetahui,<br/>
        <strong>Kepala Sekolah</strong><br/><br/><br/><br/>
        <strong style="text-decoration: underline;">${module.namaKepsek}</strong><br/>
        NIP. ${module.nipKepsek}
      </td>
      <td style="width: 50%; border: none; text-align: center; vertical-align: top; font-size: 10.5pt; color: #0f172a;">
        ${module.kota}, ${module.tanggal}<br/>
        <strong>Guru Kelas / Mata Pelajaran</strong><br/><br/><br/><br/>
        <strong style="text-decoration: underline;">${module.namaGuru}</strong><br/>
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
