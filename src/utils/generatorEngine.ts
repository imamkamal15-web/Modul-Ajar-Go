import { DeepLearningModule } from "../types";

export interface GenerateFormValues {
  jenjang: string;
  fase: string;
  kelas: string;
  semester: string;
  mataPelajaran: string;
  materiPelajaran: string;
  alokasiWaktu: string;
  jumlahPertemuan?: number | string;
  modelPembelajaran: string;
  tahunAjaran: string;
  namaSekolah: string;
  namaGuru: string;
  nipGuru: string;
  namaKepsek: string;
  nipKepsek: string;
  kota: string;
  catatanTambahan?: string;
  capaianPembelajaran?: string;
  tujuanPembelajaran?: string;
  dimensiProfilLulusan?: string[];
}

export const STANDARD_PROFIL_DIMENSI = [
  {
    key: "keimanan-ketaqwaan",
    label: "Keimanan dan Ketaqwaan",
    sublabel: "Beriman, Bertakwa kepada Tuhan YME, & Berakhlak Mulia",
    deskripsiDefault: "Mengawali dan mengakhiri kegiatan dengan doa khusyuk serta mensyukuri ilmu pengetahuan sebagai karunia Tuhan.",
  },
  {
    key: "penalaran-kritis",
    label: "Penalaran Kritis",
    sublabel: "Menganalisis informasi, bukti konkret, & solusi masalah",
    deskripsiDefault: "Menganalisis permasalahan kontekstual dan menemukan solusi berbasis data serta fakta empiris.",
  },
  {
    key: "kreativitas",
    label: "Kreativitas",
    sublabel: "Gagasan orisinal, ide inovatif, & karya unjuk rasa",
    deskripsiDefault: "Menghasilkan gagasan orisinal dan karya/produk unjuk belajar yang variatif dan solutif.",
  },
  {
    key: "kolaborasi",
    label: "Kolaborasi",
    sublabel: "Gotong royong, kerja kelompok, & saling mendukung",
    deskripsiDefault: "Bekerja sama secara aktif, peduli sesama, dan suportif dalam kelompok penyelidikan terarah.",
  },
  {
    key: "kemandirian",
    label: "Kemandirian",
    sublabel: "Regulasi diri, tanggung jawab kerja, & rasa percaya diri",
    deskripsiDefault: "Bertanggung jawab atas peran belajar, mengelola waktu secara berkesadaran, dan berinisiatif aktif.",
  },
  {
    key: "komunikasi",
    label: "Komunikasi",
    sublabel: "Artikulasi gagasan santun, dialog kritis, & presentasi",
    deskripsiDefault: "Menyampaikan hasil telaah dan refleksi dengan bahasa yang runtut, santun, dan komunikatif.",
  },
  {
    key: "kewargaan",
    label: "Kewargaan",
    sublabel: "Kepedulian sosial, kebhinekaan global, & aksi lingkungan",
    deskripsiDefault: "Menumbuhkan kepedulian terhadap kelestarian lingkungan dan kebermanfaatan bagi masyarakat sekitar.",
  },
];

export function suggestCpAndTp(mapel: string, fase: string, materi: string) {
  const m = materi.trim() || "Materi Pelajaran";
  const f = fase.trim() || "Fase Terkait";
  const mp = mapel.trim().toLowerCase();

  let cp = `Pada akhir ${f}, peserta didik memiliki kemampuan memahami konsep inti dan keterkaitan materi "${m}" dengan fenomena sehari-hari, mampu melakukan penyelidikan ilmiah/kontekstual sederhana, serta mengomunikasikan gagasannya secara bernalar kritis, kreatif, dan mandiri sesuai karakteristik ${mapel}.`;
  
  if (mp.includes("ipas") || mp.includes("alam") || mp.includes("sosial")) {
    cp = `Pada akhir ${f}, peserta didik menganalisis hubungan antara fenomena alam dan sosial yang berkaitan dengan "${m}". Peserta didik mengamati, menyelidiki faktor-faktor penyebab, dan merefleksikan peran manusia dalam menjaga keseimbangan alam dan kehidupan bermasyarakat.`;
  } else if (mp.includes("matematika")) {
    cp = `Pada akhir ${f}, peserta didik dapat menunjukkan pemahaman dan intuisi bilangan/aljabar/geometri yang berkaitan dengan "${m}", menyelesaikan masalah kontekstual yang melibatkan konsep tersebut, serta mengomunikasikan proses berpikir matematis secara runtut.`;
  } else if (mp.includes("bahasa indonesia")) {
    cp = `Pada akhir ${f}, peserta didik memiliki kemampuan berbahasa untuk berkomunikasi dan bernalar sesuai dengan tujuan dan konteks sosial materi "${m}". Peserta didik mampu memahami, mengolah, dan menginterpretasikan informasi teks/audiovisual serta memproduksi gagasan kreatif.`;
  } else if (mp.includes("pancasila") || mp.includes("pkn")) {
    cp = `Pada akhir ${f}, peserta didik mampu memahami makna dan menerapkan nilai-nilai luhur Pancasila dalam materi "${m}", membiasakan gotong royong, menghargai keberagaman, dan menunjukkan perilaku bertanggung jawab di lingkungan sekolah dan masyarakat.`;
  }

  const tp = `1. Melalui pengamatan fenomena dan stimulasi kontekstual, murid mampu mengidentifikasi dan menjelaskan konsep kunci "${m}" secara tepat dan mendalam (Memahami).
2. Melalui investigasi kolaboratif dan pengerjaan LKPD tematik, murid mampu menganalisis permasalahan riil terkait "${m}" serta merumuskan alternatif solusi solutif (Mengaplikasi).
3. Melalui unjuk karya dan diskusi kelas, murid mampu merefleksikan kebermanfaatan materi "${m}" dalam kehidupan nyata dengan penuh kesadaran dan tanggung jawab (Merefleksi).`;

  return { cp, tp };
}

export function buildFallbackModule(form: GenerateFormValues): DeepLearningModule {
  const mapel = form.mataPelajaran || "Ilmu Pengetahuan Alam dan Sosial (IPAS)";
  const materi = form.materiPelajaran || "Eksplorasi Kontekstual";
  const model = form.modelPembelajaran || "Problem Based Learning (PBL) berpadu Gamifikasi";
  const kelas = form.kelas || "Kelas 4";
  const fase = form.fase || "Fase B";
  const semester = form.semester || "Semester 1";
  const alokasi = form.alokasiWaktu || "2 x 35 Menit";

  // Determine number of meetings
  let countPertemuan = 1;
  if (form.jumlahPertemuan) {
    countPertemuan = Math.max(1, parseInt(String(form.jumlahPertemuan), 10) || 1);
  } else {
    const match = alokasi.match(/(\d+)\s*pertemuan/i);
    if (match) {
      countPertemuan = Math.max(1, parseInt(match[1], 10));
    }
  }

  // Generate multi-meeting list if > 1 (supports up to 15 meetings dynamically)
  let daftarPertemuan: any[] | undefined = undefined;

  if (countPertemuan > 1) {
    const meetingTemplates = [
      {
        judul: "Memahami - Stimulasi Masalah Kontekstual & Fondasi Konsep",
        tag: "DEEP LEARNING - MEMAHAMI (Bermakna & Menggembirakan)",
        dimensi: "Penalaran Kritis & Keimanan",
        fokus: `Orientasi masalah autentik seputar ${materi}, pembagian kelompok belajar berdiferensiasi, dan perumusan pertanyaan pemantik awal.`,
      },
      {
        judul: "Memahami & Mengorganisasi - Investigasi Konsep & Perumusan Hipotesis",
        tag: "DEEP LEARNING - MEMAHAMI (Kolaboratif & Berkesadaran)",
        dimensi: "Kolaborasi & Kemandirian",
        fokus: `Telaah bahan ajar kontekstual, observasi objek konkret/fenomena materi ${materi}, dan pembagian peran tim investigasi.`,
      },
      {
        judul: "Mengaplikasi - Pengumpulan Data Lapangan & Eksperimen Terpandu",
        tag: "DEEP LEARNING - MENGAPLIKASI (Experiential Learning)",
        dimensi: "Penalaran Kritis & Kolaborasi",
        fokus: `Eksplorasi aktif melalui percobaan ilmiah/studi kasus nyata, pencatatan data pada LKPD, dan bimbingan berjenjang (scaffolding).`,
      },
      {
        judul: "Mengaplikasi - Analisis Data & Verifikasi Fakta Solusi",
        tag: "DEEP LEARNING - MENGAPLIKASI (Analitis & Kritis)",
        dimensi: "Penalaran Kritis",
        fokus: `Mengolah data hasil investigasi terkait ${materi}, membandingkan dengan hipotesis awal, dan mengidentifikasi pola kunci pemecahan masalah.`,
      },
      {
        judul: "Mengaplikasi - Perancangan Draf Solusi & Prototipe Gagasan",
        tag: "DEEP LEARNING - MENGAPLIKASI (Kreativitas Solutif)",
        dimensi: "Kreativitas & Kolaborasi",
        fokus: `Merancang solusi kreatif berbasis temuan investigasi dan menyusun kerangka visual/karya aplikatif.`,
      },
      {
        judul: "Mengaplikasi & Mendalami - Pemantapan Konseptual & Uji Coba Model",
        tag: "DEEP LEARNING - MEMAHAMI & MENGAPLIKASI (Konseptual)",
        dimensi: "Penalaran Kritis & Kemandirian",
        fokus: `Uji coba model/gagasan kelompok, konfirmasi teori dengan guru, dan klarifikasi miskonsepsi yang muncul.`,
      },
      {
        judul: "Mengaplikasi - Diferensiasi Penyelidikan Lanjutan Berbasis Minat",
        tag: "DEEP LEARNING - MENGAPLIKASI (Berdiferensiasi)",
        dimensi: "Kemandirian & Kreativitas",
        fokus: `Penyelidikan kasus lanjutan sesuai profil belajar murid dengan pilihan media (visual, auditori, kinestetik/praktik).`,
      },
      {
        judul: "Mengaplikasi - Pengembangan Produk Karya & Media Unjuk Kerja",
        tag: "DEEP LEARNING - MENGAPLIKASI (Karya Nyata)",
        dimensi: "Kreativitas & Komunikasi",
        fokus: `Pembuatan produk akhir unjuk kerja (laporan mini, poster infografis, alat peraga, atau media digital) secara kolaboratif.`,
      },
      {
        judul: "Mengaplikasi & Meninjau - Finalisasi Karya & Validasi Umpan Balik",
        tag: "DEEP LEARNING - MENGAPLIKASI (Reflektif)",
        dimensi: "Kolaborasi & Komunikasi",
        fokus: `Penyempurnaan produk karya, uji coba presentasi internal kelompok, dan saling memberikan saran konstruktif.`,
      },
      {
        judul: "Mengaplikasi & Mengomunikasikan - Gelar Karya (Gallery Walk) & Peer Review",
        tag: "DEEP LEARNING - MENGAPLIKASI (Komunikasi & Apresiasi)",
        dimensi: "Komunikasi & Kewargaan",
        fokus: `Pameran karya kelas 'Gallery Walk', presentasi perwakilan kelompok, dan pemberian umpan balik apresiatif dari rekan sejawat.`,
      },
      {
        judul: "Merefleksi & Memperbaiki - Rekonstruksi Solusi Berdasarkan Masukan",
        tag: "DEEP LEARNING - MEREFLEKSI (Perbaikan Sadar)",
        dimensi: "Penalaran Kritis & Kemandirian",
        fokus: `Menelaah masukan dari kelompok lain, mengevaluasi kelebihan dan keterbatasan karya, serta merumuskan revisi terbaik.`,
      },
      {
        judul: "Mengaplikasi Lanjutan - Transfer Belajar pada Konteks Masalah Baru",
        tag: "DEEP LEARNING - MENGAPLIKASI (Kontekstual)",
        dimensi: "Penalaran Kritis & Kewargaan",
        fokus: `Menghubungkan konsep materi ${materi} dengan permasalahan lingkungan hidup atau kehidupan sehari-hari di luar sekolah.`,
      },
      {
        judul: "Mengomunikasikan - Presentasi Pleno & Advokasi Solusi Komprehensif",
        tag: "DEEP LEARNING - MENGAPLIKASI & MEREFLEKSI (Artikulasi)",
        dimensi: "Komunikasi & Kolaborasi",
        fokus: `Penyampaian hasil belajar secara komprehensif di forum kelas dan diskusi tanya jawab terpandu.`,
      },
      {
        judul: "Mengevaluasi - Asesmen Sumatif Pemahaman Konsep & Kemampuan HOTs",
        tag: "DEEP LEARNING - MEMAHAMI & MEREFLEKSI (Evaluatif)",
        dimensi: "Penalaran Kritis & Kemandirian",
        fokus: `Pelaksanaan penilaian sumatif berbasis soal penalaran (C3-C5), pengukuran capaian kompetensi, dan analisis kemajuan belajar.`,
      },
      {
        judul: "Merefleksi - Refleksi Holistik, Perayaan Belajar & Rencana Aksi Nyata",
        tag: "DEEP LEARNING - MEREFLEKSI (Bermakna & Menggembirakan)",
        dimensi: "Keimanan, Kemandirian & Kewargaan",
        fokus: `Refleksi mendalam 360° perjalanan belajar modul, penyusunan komitmen aksi nyata bagi masyarakat/lingkungan, dan perayaan karya bersama.`,
      },
    ];

    daftarPertemuan = Array.from({ length: countPertemuan }, (_, idx) => {
      const num = idx + 1;
      let template;
      if (num === 1) {
        template = meetingTemplates[0];
      } else if (num === countPertemuan) {
        template = meetingTemplates[meetingTemplates.length - 1];
      } else {
        const step = Math.min(
          meetingTemplates.length - 2,
          Math.max(1, Math.round(((num - 1) / (countPertemuan - 1)) * (meetingTemplates.length - 2)))
        );
        template = meetingTemplates[step];
      }

      return {
        pertemuanKe: num,
        judulFokus: `Pertemuan ${num}: ${template.judul}`,
        alokasiWaktu: "2 x 35 Menit",
        waktuPendahuluan: "10 Menit",
        deskripsiPendahuluan: [
          "Orientasi, Salam Hangat, dan Doa bersama yang dipimpin perwakilan murid (Keimanan dan Ketaqwaan).",
          "Pemeriksaan kesiapan belajar, penataan ruang kelas fleksibel, dan Mindful Check-in (2 Menit) untuk membangun kehadiran penuh (Joyful Learning).",
          `Apersepsi mengaitkan progres materi "${materi}" dari sesi sebelumnya dengan tantangan hari ini.`,
          `Penyampaian target kompetensi Pertemuan ${num} dan kesepakatan belajar kolaboratif.`,
        ],
        waktuInti: "50 Menit",
        sintakInti: [
          {
            sintakNomor: 1,
            namaSintak: `Aktivitas Eksploratif: ${template.judul.split(" - ")[1] || template.judul}`,
            tagDeepLearning: template.tag,
            dimensiProfil: template.dimensi,
            deskripsi: `${template.fokus}\nMurid bekerja dalam kelompok heterogen terarah dan mengisi lembar kerja investigasi berpanduan diferensiasi.`,
          },
          {
            sintakNomor: 2,
            namaSintak: "Konfirmasi Konsep, Pendampingan Scaffolding & Validasi Guru",
            tagDeepLearning: "DEEP LEARNING - MEMAHAMI & MENGAPLIKASI",
            dimensiProfil: "Penalaran Kritis & Kolaborasi",
            deskripsi: `Guru berkeliling memberikan bimbingan bagi murid yang membutuhkan scaffolding serta memfasilitasi pengayaan bagi murid yang sudah siap mandiri.\nSetiap kelompok mengonfirmasi keabsahan temuan dan menarik simpulan awal.`,
          },
        ],
        waktuPenutup: "10 Menit",
        deskripsiPenutup: [
          "DEEP LEARNING – MEREFLEKSI: Murid mengisi jurnal refleksi singkat (Apa hal paling bermakna yang kupahami hari ini? Tantangan apa yang berhasil kuhadapi?).",
          "Pendidik memberikan penguatan, apresiasi atas inisiatif kolaborasi tim, dan arahan misi untuk pertemuan berikutnya.",
          "Doa penutup penuh rasa syukur dan salam perpisahan yang hangat.",
        ],
      };
    });
  }

  return {
    id: `custom-${Date.now()}`,
    tahunAjaran: form.tahunAjaran || "2024/2025",
    kelas,
    fase,
    semester,
    mataPelajaran: mapel,
    materiPelajaran: materi,
    alokasiWaktu: countPertemuan > 1 && !alokasi.toLowerCase().includes("pertemuan")
      ? `${countPertemuan} Pertemuan (${alokasi})`
      : alokasi,
    jumlahPertemuan: countPertemuan,
    daftarPertemuan: daftarPertemuan,
    namaSekolah: form.namaSekolah || "SD Negeri Percontohan",
    namaKepsek: form.namaKepsek || "Drs. H. Mulyadi, M.Pd.",
    nipKepsek: form.nipKepsek || "19720415 199803 1 004",
    namaGuru: form.namaGuru || "Imam Kamaluddin, S.Pd., Gr.",
    nipGuru: form.nipGuru || "19890821 201502 1 002",
    kota: form.kota || "Jakarta",
    tanggal: new Date().toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),

    kesiapanMurid: `Sebagian besar murid telah memiliki pengalaman awal yang relevan dengan topik "${materi}" dari aktivitas sehari-hari, namun pemahaman konsep inti masih bervariasi. Sekitar 60% murid siap belajar mandiri dan berkolaborasi dalam kelompok terarah, sedangkan 40% murid memerlukan perancah (scaffolding) visual-konkret dan contoh terbimbing. Diferensiasi proses dirancang melalui variasi media dan pembagian peran tim yang adil. ${form.catatanTambahan ? `Catatan khusus: ${form.catatanTambahan}` : ""}`,

    karakteristikMateriPelajaran: `Materi "${materi}" memiliki keterkaitan erat dengan kehidupan nyata murid sehingga sangat potensial disajikan secara kontekstual dan menggembirakan. Melalui pendekatan Deep Learning, murid diajak mengalami langsung fenomena, membedah studi kasus nyata, dan melakukan refleksi sadar (mindful reflection) sehingga materi tidak sekadar dihafal, melainkan diinternalisasi secara bermakna.`,

    dimensiProfilLulusan: STANDARD_PROFIL_DIMENSI.map((std) => {
      const isSelected = form.dimensiProfilLulusan && form.dimensiProfilLulusan.length > 0
        ? form.dimensiProfilLulusan.includes(std.key) || form.dimensiProfilLulusan.includes(std.label)
        : true;
      return {
        key: std.key,
        label: std.label,
        checked: isSelected,
        penjelasan: `${std.deskripsiDefault} (Konteks materi: ${materi}).`,
      };
    }),

    capaianPembelajaran: form.capaianPembelajaran?.trim()
      ? form.capaianPembelajaran.trim()
      : `Pada akhir ${fase}, murid mampu menganalisis, mengaplikasikan konsep, dan memecahkan permasalahan nyata yang berkaitan dengan materi ${materi} secara bernalar kritis, kreatif, dan bergotong royong dalam kehidupan sehari-hari.`,

    tujuanPembelajaran: form.tujuanPembelajaran?.trim()
      ? form.tujuanPembelajaran.trim()
      : `Melalui penerapan model ${model} dan investigasi terbimbing pada LKPD, murid mampu mengidentifikasi konsep kunci, menyelesaikan studi kasus kontekstual pada materi ${materi}, dan merefleksikan kebermanfaatannya dengan tingkat akurasi minimal 80%.`,

    pendekatanPembelajaran: "Deep Learning (Bermakna, Berkesadaran, Menggembirakan), Experiential Learning & Contextual Teaching.",
    modelPembelajaran: model,
    metodePembelajaran: "Permainan edukatif pemantik, investigasi pos/studi kasus, diskusi kolaboratif, dan presentasi karya.",
    budayaBelajar: "Budaya eksplorasi aktif, rasa ingin tahu tinggi, saling menghargai pendapat, dan bebas dari rasa takut salah.",
    ruangFisik: "Ruang kelas fleksibel dengan sudut pos kolaborasi dan area observasi lingkungan.",
    kemitraanMurid: "Kelompok kerja heterogen (4-5 murid) dengan peran Kapten, Notulis, Pengamat, dan Juru Bicara.",
    platformDigital: "Canva for Education, Quizizz / Wordwall, Slide Interaktif, dan Video Kontekstual.",
    perangkat: "Proyektor LCD, Laptop Guru, Speaker Aktif, dan Lembar Kerja Siswa.",
    mediaPembelajaran: `LKPD Tematik "${materi}", Alat peraga nyata/kartu tantangan bernalar, dan Instrumen Pengamatan.`,

    waktuPendahuluan: "15 Menit",
    deskripsiPendahuluan: [
      "Orientasi, Salam Hangat, dan Doa bersama yang dipimpin oleh ketua kelas (Keimanan dan Ketaqwaan).",
      "Cek kehadiran, kerapian lingkungan belajar, dan 'Latihan Berkesadaran (Mindful Check-in)': Murid mengidentifikasi suasana hati dan kesiapannya mengikuti pelajaran.",
      `Apersepsi & Pertanyaan Pemantik Berkesadaran yang menantang rasa ingin tahu terkait realitas materi ${materi} di lingkungan sekitar.`,
      "Penyampaian Tujuan Pembelajaran, alur aktivitas pembelajaran mendalam yang menggembirakan, serta kesepakatan belajar kelas.",
    ],

    waktuInti: "75 Menit",
    sintakInti: [
      {
        sintakNomor: 1,
        namaSintak: "Orientasi Murid pada Masalah Kontekstual / Stimulasi Awal",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Bermakna & Menggembirakan)",
        dimensiProfil: "Penalaran Kritis & Keimanan",
        deskripsi: `Guru menayangkan video pendek atau menyajikan studi kasus nyata seputar ${materi}.\nMurid mengamati dan mengajukan pertanyaan pemantik awal secara kritis.\nGuru merespons dan mengarahkan fokus penyelidikan murid pada tantangan utama yang harus dipecahkan bersama.`,
      },
      {
        sintakNomor: 2,
        namaSintak: "Mengorganisasikan Murid untuk Belajar Berdiferensiasi",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Kolaboratif & Berkesadaran)",
        dimensiProfil: "Kolaborasi & Kemandirian",
        deskripsi: `Guru memfasilitasi pembentukan kelompok kerja heterogen (4-5 murid) dan membagikan LKPD Tematik.\nSetiap anggota kelompok menyepakati peran tugas (Kapten, Pengamat, Notulis, Presenter).\nGuru memberikan petunjuk pengerjaan dan menegaskan nilai saling menghargai dalam berdiskusi.`,
      },
      {
        sintakNomor: 3,
        namaSintak: "Membimbing Penyelidikan Mandiri dan Kelompok (Investigasi Terarah)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Experiential & Joyful Learning)",
        dimensiProfil: "Penalaran Kritis & Kreativitas",
        deskripsi: `Kelompok melakukan investigasi, mengumpulkan data/informasi dari bahan ajar, dan memecahkan tantangan studi kasus pada LKPD.\nMurid menguji coba alternatif penyelesaian masalah dan mencatat bukti-bukti temuan.\nGuru berkeliling memberikan scaffolding bagi kelompok yang membutuhkan bimbingan intensif dan memvalidasi proses berpikir murid.`,
      },
      {
        sintakNomor: 4,
        namaSintak: "Mengembangkan dan Menyajikan Hasil Karya (Kreativitas Produk)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Komunikasi & Kolaborasi)",
        dimensiProfil: "Komunikasi, Kreativitas & Kolaborasi",
        deskripsi: `Kelompok menyusun produk penyelesaian masalah (peta pikiran / infografis mini / lembar kerja kreasi).\nPerwakilan kelompok mempresentasikan hasil karyanya di hadapan teman-teman melalui panggung unjuk karya atau galeri berjalan.\nKelompok lain memberikan tanggapan, apresiasi, dan pertanyaan konstruktif.`,
      },
      {
        sintakNomor: 5,
        namaSintak: "Menganalisis dan Mengevaluasi Proses Pemecahan Masalah",
        tagDeepLearning: "DEEP LEARNING - MEREFLEKSI & MEMAHAMI",
        dimensiProfil: "Penalaran Kritis & Komunikasi",
        deskripsi: `Guru bersama murid melakukan klarifikasi konsep, menyelaraskan pemahaman, dan mengoreksi miskonsepsi yang muncul.\nGuru memberikan penguatan konseptual mendalam dan mengapresiasi kerja keras serta kerja sama seluruh tim.`,
      },
    ],

    waktuPenutup: "15 Menit",
    deskripsiPenutup: [
      `DEEP LEARNING – MEREFLEKSI: Murid mengisi jurnal refleksi berkesadaran (Apa hal paling bermakna yang aku pelajari dari ${materi}? Apa perasaan yang kurasakan saat memecahkan masalah ini bersama teman?).`,
      "Menyimpulkan pembelajaran secara bersama-sama dengan menggarisbawahi poin-poin kunci materi.",
      "Asesmen Sumatif singkat (kuis pemahaman konsep 5 butir soal C3-C5).",
      "Pemberian tindak lanjut aksi nyata kontekstual di lingkungan rumah dan sekolah.",
      "Doa Penutup penuh rasa syukur dan salam hangat.",
    ],

    asesmenFormatifSikap: "Jurnal Observasi 7 Dimensi Profil Lulusan selama kegiatan belajar berlangsung.",
    asesmenFormatifKeterampilan: `Penilaian unjuk kerja pemecahan masalah pada materi ${materi}, keakuratan pengisian LKPD, dan kemampuan presentasi kelompok.`,
    asesmenSumatifDeskripsi: "Tes tertulis / kuis objektif dan penalaran HOTs sebanyak 5 butir soal (skor total 30, konversi skala 0-100).",

    ringkasanMateriAjar: `**1. Pengantar dan Hakikat Konsep: ${materi}**
Materi ${materi} dalam mata pelajaran ${mapel} di ${kelas} (${fase}) memegang peranan krusial untuk membangun fondasi kecakapan murid dalam memahami fenomena lingkungan dan berpikir analitis.

**2. Poin-Poin Kunci Pembelajaran Mendalam:**
- **Pemahaman Konseptual:** Mengetahui definisi, karakteristik utama, dan mekanisme dasar dari ${materi}.
- **Aplikasi Nyata:** Bagaimana prinsip-prinsip ${materi} bekerja dan dimanfaatkan dalam pemecahan masalah kehidupan sehari-hari murid di Indonesia.
- **Nilai Kebermaknaan:** Melatih kebiasaan berpikir kritis, empati sosial, serta kesadaran menjaga harmoni alam dan kemanusiaan.

**3. Contoh Studi Kasus & Keterkaitan Kontekstual:**
Di lingkungan sekitar murid, fenomena ${materi} dapat diamati secara langsung. Dengan menghubungkan teori pada buku teks dengan peristiwa nyata di sekitar sekolah dan rumah, murid memperoleh pemahaman yang melekat lama (long-term memory) dan menggembirakan.`,

    lkpd: {
      judul: `Ekspedisi Pembelajaran Mendalam: Menyelidiki ${materi}`,
      temaKontekstual: `Pemecahan Masalah dan Investigasi Kontekstual ${materi} di Sekitar Kita`,
      petunjukBelajar: [
        "Bacalah setiap instruksi dan studi kasus dengan cermat bersama kelompok.",
        "Bagi peran anggota tim secara merata agar semua berkontribusi aktif.",
        "Diskusikan alternatif jawaban dengan berpijak pada data pengamatan nyata.",
      ],
      alatDanBahan: [
        "Lembar Kerja Siswa (LKPD)",
        "Alat tulis dan spidol warna",
        "Materi bacaan pendukung / gawai untuk eksplorasi informasi",
      ],
      langkahAktivitas: [
        `Amati fenomena studi kasus ${materi} yang disajikan oleh guru.`,
        "Identifikasi 3 pertanyaan utama yang perlu dipecahkan kelompok.",
        "Kumpulkan data dan lakukan diskusi analisis bersama seluruh anggota tim.",
        "Tuliskan kesimpulan dan rekomendasi pemecahan masalah pada lembar kerja!",
      ],
      tabelPengamatanHeader: ["No", "Aspek Pengamatan", "Temuan Kasus", "Analisis Masalah", "Rekomendasi Solusi"],
      tabelPengamatanRows: [
        ["1", `Konsep Inti ${materi}`, "Ditemukan fakta kontekstual", "Perlu penguatan pemahaman", "Simulasi terbimbing & diskusi"],
        ["2", "Penerapan Nyata", "Tantangan di lingkungan sekitar", "Kesenjangan pemahaman", "Aksi kolaboratif kelompok"],
        ["3", "Evaluasi Solusi", "Uji coba gagasan kreatif", "Peluang pengembangan", "Presentasi dan perbaikan tim"],
      ],
      pertanyaanAnalisis: [
        `Apa keterkaitan utama antara materi ${materi} dengan kehidupan sehari-harimu?`,
        "Solusi kreatif apa yang kelompokmu rancang untuk mengatasi tantangan yang dihadapi pada studi kasus di atas?",
        "Mengapa kerja sama dan komunikasi tim menjadi kunci keberhasilan dalam menyelesaikan tugas ini?",
      ],
      refleksiSiswa: [
        "Apa satu pelajaran paling berharga yang kamu dapatkan hari ini?",
        "Tindakan baik apa yang ingin kamu terapkan mulai esok hari terkait materi ini?",
      ],
    },

    soalEvaluasi: [
      {
        no: 1,
        indikator: `Disajikan konsep dasar, murid dapat menentukan pengertian utama terkait ${materi}.`,
        soal: `Berdasarkan pembelajaran hari ini, manakah pernyataan berikut yang paling tepat menjelaskan konsep utama dari ${materi}?\nA. Konsep yang hanya berlaku di laboratorium tanpa kaitan nyata.\nB. Suatu proses atau fenomena yang berperan penting dalam memecahkan masalah kehidupan sehari-hari.\nC. Kumpulan hafalan yang tidak memiliki dampak bagi lingkungan sekitar.\nD. Aturan yang tidak perlu dipraktikkan dalam kegiatan bersama.`,
        levelKognitif: "C3",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: B. Pembahasan: Pembelajaran mendalam menekankan konsep bermakna yang aplikatif dalam kehidupan nyata.",
      },
      {
        no: 2,
        indikator: `Murid dapat mengidentifikasi faktor utama yang memengaruhi keberhasilan penerapan ${materi}.`,
        soal: `Faktor kunci yang sangat menentukan keberhasilan pemecahan masalah pada materi ${materi} secara berkelanjutan adalah ...\nA. Kerja sama tim, penalaran kritis, dan ketelitian data\nB. Mengerjakan tugas sendirian tanpa peduli masukan teman\nC. Mengabaikan petunjuk keselamatan dan prosedur kerja\nD. Mengandalkan orang lain sepenuhnya`,
        levelKognitif: "C3",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: A. Pembahasan: Kolaborasi dan penalaran kritis adalah pilar profil lulusan.",
      },
      {
        no: 3,
        indikator: `Disajikan situasi masalah kontekstual, murid dapat menentukan langkah awal pemecahan yang tepat.`,
        soal: `Ketika menghadapi hambatan saat melakukan investigasi materi ${materi}, langkah pertama yang paling bijak dan reflektif dilakukan adalah ...\nA. Langsung menyerah dan menyalahkan teman sekelompok\nB. Mengidentifikasi akar penyebab masalah secara tenang dan mendiskusikannya kembali bersama tim\nC. Menghapus seluruh pekerjaan dan membuat keributan\nD. Mengabaikan masalah tersebut sampai bel berbunyi`,
        levelKognitif: "C3",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: B. Pembahasan: Sikap reflektif dan pemecahan masalah sistematis.",
      },
      {
        no: 4,
        indikator: `Murid dapat membedakan dampak positif dan negatif dari alternatif solusi dalam materi ${materi}.`,
        soal: `Perhatikan dua pilihan tindakan dalam mengelola ${materi} di lingkungan sekolah:\nTindakan I: Melibatkan seluruh warga sekolah dalam aksi gotong royong terencana.\nTindakan II: Menyerahkan seluruh beban pemeliharaan hanya kepada satu orang petugas.\nBerdasarkan analisis keberlanjutan dan nilai kebajikan, manakah tindakan yang paling tepat?\nA. Tindakan II, karena tidak merepotkan orang lain.\nB. Tindakan I, karena menumbuhkan rasa kepemilikan bersama, gotong royong, dan dampak jangka panjang yang positif.\nC. Kedua tindakan sama-sama tidak efektif.\nD. Tidak perlu melakukan tindakan apa pun.`,
        levelKognitif: "C4",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: B. Pembahasan: Tindakan gotong royong menumbuhkan nilai kewargaan dan keberlanjutan.",
      },
      {
        no: 5,
        indikator: `Murid mampu menganalisis studi kasus kompleks, mengevaluasi solusi, dan menyusun argumen bernalar kritis (HOTs).`,
        soal: `Bacalah studi kasus berikut:\n"Di lingkungan sekitar sekolah, ditemukan permasalahan terkait penerapan ${materi}. Masyarakat sekitar masih terbiasa dengan cara lama yang kurang efektif dan cenderung menimbulkan dampak kurang baik bagi lingkungan."\nTugasmu: Jelaskan analisis kritis kelompokmu! (a) Apa akar penyebab utama permasalahan tersebut? (b) Rancangan solusi kreatif apa yang dapat kamu tawarkan agar masyarakat tertarik menerapkan cara baru yang lebih bermakna dan ramah lingkungan? Tuliskan dengan alasan yang logis!`,
        levelKognitif: "C4/C5",
        jenisSoal: "Uraian Terbuka",
        skor: 10,
        kunciJawaban: "Rubrik Skor 10: Murid mampu: (1) Mengidentifikasi akar masalah secara mendalam (skor 3), (2) Mengusulkan solusi kreatif yang aplikatif dan realistis (skor 4), (3) Memberikan alasan logis bernilai kebajikan dan keberlanjutan (skor 3).",
      },
    ],

    rekapKeterampilan: [
      {
        no: 1,
        namaKelompok: "Kelompok 1 (Inovator)",
        skorKriteria1: 4,
        skorKriteria2: 4,
        skorKriteria3: 4,
        skorTotal: 12,
        nilai: 100,
        kriteria: "Sangat Baik",
      },
      {
        no: 2,
        namaKelompok: "Kelompok 2 (Eksplorer)",
        skorKriteria1: 4,
        skorKriteria2: 3,
        skorKriteria3: 4,
        skorTotal: 11,
        nilai: 92,
        kriteria: "Sangat Baik",
      },
      {
        no: 3,
        namaKelompok: "Kelompok 3 (Kolaborator)",
        skorKriteria1: 3,
        skorKriteria2: 3,
        skorKriteria3: 3,
        skorTotal: 9,
        nilai: 75,
        kriteria: "Baik",
      },
      {
        no: 4,
        namaKelompok: "Kelompok 4 (Kreator)",
        skorKriteria1: 4,
        skorKriteria2: 3,
        skorKriteria3: 3,
        skorTotal: 10,
        nilai: 83,
        kriteria: "Baik",
      },
    ],
  };
}
