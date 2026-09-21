import { DeepLearningModule } from "../types";

export interface GenerateFormValues {
  jenjang: string;
  fase: string;
  kelas: string;
  semester: string;
  mataPelajaran: string;
  materiPelajaran: string;
  alokasiWaktu: string;
  modelPembelajaran: string;
  tahunAjaran: string;
  namaSekolah: string;
  namaGuru: string;
  nipGuru: string;
  namaKepsek: string;
  nipKepsek: string;
  kota: string;
  catatanTambahan?: string;
}

export function buildFallbackModule(form: GenerateFormValues): DeepLearningModule {
  const mapel = form.mataPelajaran || "Ilmu Pengetahuan Alam dan Sosial (IPAS)";
  const materi = form.materiPelajaran || "Eksplorasi Kontekstual";
  const model = form.modelPembelajaran || "Problem Based Learning (PBL) berpadu Gamifikasi";
  const kelas = form.kelas || "Kelas 4";
  const fase = form.fase || "Fase B";
  const semester = form.semester || "Semester 1";
  const alokasi = form.alokasiWaktu || "2 x 35 Menit";

  return {
    id: `custom-${Date.now()}`,
    tahunAjaran: form.tahunAjaran || "2024/2025",
    kelas,
    fase,
    semester,
    mataPelajaran: mapel,
    materiPelajaran: materi,
    alokasiWaktu: alokasi,
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

    dimensiProfilLulusan: [
      {
        key: "penalaran-kritis",
        label: "Penalaran Kritis",
        checked: true,
        penjelasan: `Menganalisis permasalahan kontekstual pada materi ${materi} dan menemukan solusi berbasis data/fakta.`,
      },
      {
        key: "kreativitas",
        label: "Kreativitas",
        checked: true,
        penjelasan: `Menghasilkan gagasan orisinal dan karya/produk presentasi yang variatif dan aplikatif.`,
      },
      {
        key: "kolaborasi",
        label: "Kolaborasi",
        checked: true,
        penjelasan: `Bekerja sama secara aktif dan suportif dalam kelompok investigasi dan diskusi terbimbing.`,
      },
      {
        key: "kemandirian",
        label: "Kemandirian",
        checked: true,
        penjelasan: `Bertanggung jawab atas peran kerja, mengelola waktu secara sadar, dan percaya diri mengemukakan ide.`,
      },
      {
        key: "komunikasi",
        label: "Komunikasi",
        checked: true,
        penjelasan: `Menyampaikan hasil telaah dan kesimpulan dengan bahasa yang runtut, santun, dan jelas.`,
      },
      {
        key: "keimanan-ketaqwaan",
        label: "Keimanan dan Ketaqwaan",
        checked: true,
        penjelasan: `Mengawali dan mengakhiri kegiatan dengan doa khusyuk serta mensyukuri ilmu pengetahuan sebagai karunia Tuhan.`,
      },
      {
        key: "kewargaan",
        label: "Kewargaan",
        checked: true,
        penjelasan: `Menumbuhkan kepedulian sosial, toleransi, dan aksi nyata bermanfaat bagi lingkungan sekitar.`,
      },
    ],

    capaianPembelajaran: `Pada akhir ${fase}, murid mampu menganalisis, mengaplikasikan konsep, dan memecahkan permasalahan nyata yang berkaitan dengan materi ${materi} secara bernalar kritis, kreatif, dan bergotong royong dalam kehidupan sehari-hari.`,

    tujuanPembelajaran: `Melalui penerapan model ${model} dan investigasi terbimbing pada LKPD, murid mampu mengidentifikasi konsep kunci, menyelesaikan studi kasus kontekstual pada materi ${materi}, dan merefleksikan kebermanfaatannya dengan tingkat akurasi minimal 80%.`,

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
