import { DeepLearningModule } from "../types";

export const PRESET_MODULES: DeepLearningModule[] = [
  {
    id: "ipas-fase-b-fotosintesis",
    tahunAjaran: "2024/2025",
    kelas: "Kelas 4",
    fase: "Fase B",
    semester: "Semester 1 (Ganjil)",
    mataPelajaran: "Ilmu Pengetahuan Alam dan Sosial (IPAS)",
    materiPelajaran: "Fotosintesis: Proses Terpenting di Bumi dan Rantai Makanan",
    alokasiWaktu: "3 x 35 Menit (1 Pertemuan Pembelajaran Mendalam)",
    namaSekolah: "SD Negeri Percontohan Merdeka Belajar",
    namaKepsek: "Drs. H. Mulyadi, M.Pd.",
    nipKepsek: "19720415 199803 1 004",
    namaGuru: "Imam Kamaluddin, S.Pd., Gr.",
    nipGuru: "19890821 201502 1 002",
    kota: "Jakarta",
    tanggal: "21 September 2024",

    // A. IDENTIFIKASI
    kesiapanMurid:
      "Sebagian besar murid (70%) sudah memahami bahwa tumbuhan membutuhkan air dan sinar matahari untuk tumbuh dari materi kelas 3, namun konsep bahwa tumbuhan 'memasak makanan sendiri' (autotrof) dan menghasilkan gas oksigen masih dianggap abstrak dan sering disalahpahami sebagai sekadar 'minum air'. Sebanyak 30% murid membutuhkan perancah visual konkret dan simulasi peran (kinestetik) untuk memahami pertukaran gas (karbon dioksida dan oksigen). Kebutuhan diferensiasi difasilitasi melalui media belajar bertingkat: kelompok visual dengan infografis alur, kelompok kinestetik dengan simulasi kartu peran molekul, dan kelompok auditori dengan lagu/ritme fotosintesis.",
    karakteristikMateriPelajaran:
      "Materi fotosintesis bersifat mikroskopis dan semi-abstrak karena proses biokimia berlangsung di dalam kloroplas daun yang tak terlihat langsung oleh mata telanjang. Oleh karena itu, materi ini difasilitasi secara kontekstual dan menggembirakan melalui: (1) Investigasi langsung di taman sekolah (mengamati gelembung oksigen pada daun Hydrilla / tanaman air di dalam botol transparan di bawah sinar matahari), (2) Gamifikasi pos 'Dapur Hijau Klorofil', dan (3) Eksplorasi peran bermakna mengenai hubungan fotosintesis dengan ketersediaan makanan bagi hewan dan manusia.",
    dimensiProfilLulusan: [
      {
        key: "penalaran-kritis",
        label: "Penalaran Kritis",
        checked: true,
        penjelasan: "Menganalisis hubungan sebab-akibat antara ketersediaan cahaya matahari, air, dan CO2 terhadap kelangsungan rantai makanan di bumi.",
      },
      {
        key: "kreativitas",
        label: "Kreativitas",
        checked: true,
        penjelasan: "Merancang peta konsep infografis 'Dapur Ajaib Daun' atau membuat komik pendek siklus fotosintesis.",
      },
      {
        key: "kolaborasi",
        label: "Kolaborasi",
        checked: true,
        penjelasan: "Bekerja sama dalam tim investigasi pos saintifik untuk mengamati pembentukan gelembung gas oksigen.",
      },
      {
        key: "kemandirian",
        label: "Kemandirian",
        checked: true,
        penjelasan: "Mengelola tugas investigasi secara bertanggung jawab dan memantau waktu kerja kelompok secara sadar.",
      },
      {
        key: "komunikasi",
        label: "Komunikasi",
        checked: true,
        penjelasan: "Mempresentasikan temuan eksperimen di depan kelas dengan bahasa yang santun, runtut, dan percaya diri.",
      },
      {
        key: "keimanan-ketaqwaan",
        label: "Keimanan dan Ketaqwaan",
        checked: true,
        penjelasan: "Mengagumi keteraturan ciptaan Tuhan Yang Maha Esa atas anugerah daun hijau penyedia oksigen dan makanan di bumi.",
      },
      {
        key: "kewargaan",
        label: "Kewargaan",
        checked: true,
        penjelasan: "Menunjukkan kepedulian nyata menjaga kelestarian pepohonan dan ruang hijau di lingkungan sekitar sekolah.",
      },
    ],

    // B. DESAIN PEMBELAJARAN
    capaianPembelajaran:
      "Pada akhir Fase B, murid mengidentifikasi keterkaitan antara proses fotosintesis pada tumbuhan dengan ketersediaan energi bagi makhluk hidup lainnya, serta menganalisis pentingnya menjaga keseimbangan ekosistem dan keanekaragaman hayati dalam kehidupan sehari-hari.",
    tujuanPembelajaran:
      "Melalui kegiatan investigasi pos saintifik dan simulasi gamifikasi 'Dapur Daun', murid (Audience) mampu menguraikan 4 komponen utama fotosintesis (cahaya, air, klorofil, karbondioksida) dan 2 produk hasilnya (karbohidrat/glukosa dan oksigen) (Behavior) dengan tepat dan berbasis bukti pengamatan (Condition) minimal 85% akurat serta mengaitkannya dengan rantai makanan (Degree).",
    pendekatanPembelajaran:
      "Deep Learning (Bermakna, Berkesadaran, Menggembirakan), Experiential Learning dan Contextual Science Inquiry.",
    modelPembelajaran:
      "Problem Based Learning (PBL).",
    metodePembelajaran:
      "Investigasi eksperimen sederhana (Ingenhousz mini), diskusi kelompok berdiferensiasi, permainan peran molekul kimia, dan presentasi unjuk kerja.",
    budayaBelajar:
      "Budaya saling mendengarkan, rasa ingin tahu ilmiah tanpa takut salah, kebiasaan bertanya secara kritis, dan kehangatan gotong royong.",
    ruangFisik:
      "Ruang kelas yang ditata menjadi 4 Pos Dapur Daun, area luar ruang/taman sekolah untuk observasi tanaman hidup dan sinar matahari langsung.",
    kemitraanMurid:
      "Kelompok heterogen (4-5 murid) dengan peran terstruktur: 'Kapten Peneliti', 'Pencatat Data', 'Pengelola Alat & Bahan', serta 'Juru Bicara'.",
    platformDigital:
      "Wordwall (Kuis interaktif 'Teka-Teki Molekul Hijau'), Canva for Education (infografis panduan), dan video pendek animasi stomata & klorofil.",
    perangkat:
      "Proyektor LCD, Laptop guru, Speaker aktif, Stoples kaca transparan, dan Kaca pembesar (lup).",
    mediaPembelajaran:
      "Tanaman air Hydrilla / daun sirih segar, air bersih, baking soda sedikit (penghasil CO2), LKPD 'Ekspedisi Dapur Klorofil', dan Kartu Peran Unsur Fotosintesis.",

    // C. PENGALAMAN BELAJAR
    waktuPendahuluan: "15 Menit",
    deskripsiPendahuluan: [
      "Orientasi, Salam Hangat, dan Doa Bersama yang dipimpin oleh salah satu murid (Keimanan dan Ketaqwaan).",
      "Cek kehadiran, kenyamanan suasana kelas, dan 'Latihan Napas Sadar (Mindful Breathing) 2 menit': Murid diajak menarik napas dalam-dalam, merasakan udara segar masuk ke paru-paru, lalu mengembuskannya perlahan.",
      "Apersepsi Berkesadaran & Pertanyaan Pemantik: Guru menanyakan: 'Anak-anak, kita baru saja menghirup napas segar. Dari manakah oksigen segar ini berasal? Mengapa tumbuhan hijau di taman sekolah tidak pernah pergi ke warung makan, tetapi tetap bisa tumbuh besar dan menghasilkan buah lebat?'",
      "Penyampaian Tujuan Pembelajaran dan skenario petualangan sains hari ini: 'Hari ini kita akan menjadi detektif biologi di Dapur Rahasia Daun untuk membuktikan bagaimana tumbuhan memberi makan seluruh isi bumi!'.",
    ],

    waktuInti: "75 Menit",
    sintakInti: [
      {
        sintakNomor: 1,
        namaSintak: "Orientasi Murid pada Masalah Kontekstual",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Bermakna & Menggembirakan)",
        dimensiProfil: "Penalaran Kritis & Keimanan",
        deskripsi:
          "Guru menampilkan video pendek fenomena hutan gundul vs hutan lebat dan stoples tertutup berisi tanaman air di bawah sinar matahari.\nMurid mengamati gelembung-gelembung kecil yang keluar dari permukaan daun tanaman air di dalam botol transparan.\nGuru memantik: 'Apakah butiran gelembung itu? Apakah tumbuhan sedang bernapas, memasak, atau mengeluarkan sesuatu? Mari kita buktikan bersama!'",
      },
      {
        sintakNomor: 2,
        namaSintak: "Mengorganisasikan Murid untuk Belajar Berdiferensiasi",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Berkesadaran & Kolaboratif)",
        dimensiProfil: "Kolaborasi & Kemandirian",
        deskripsi:
          "Guru membagi kelas ke dalam kelompok heterogen (masing-masing 4-5 anak) dengan pembagian peran eksplisit (Kapten, Pengamat, Notulis, Presenter).\nGuru membagikan LKPD 'Ekspedisi Dapur Klorofil' dan kotak alat sains.\nMurid menyepakati aturan kerja tim yang berkesadaran: saling menyimak, berbicara bergantian, dan menjaga kebersihan alat kerja.",
      },
      {
        sintakNomor: 3,
        namaSintak: "Membimbing Penyelidikan Mandiri dan Kelompok (Investigasi Pos)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Joyful Experiential Learning)",
        dimensiProfil: "Penalaran Kritis, Kreativitas & Kolaborasi",
        deskripsi:
          "Kelompok melakukan uji coba mini Ingenhousz: meletakkan botol transparan berisi tanaman di bawah terik matahari dan satu botol pembanding di dalam kardus gelap.\nMurid menghitung dan mencatat jumlah gelembung udara yang terbentuk selama 10 menit dengan stopwatch.\nKelompok bergerak ke Pos Gamifikasi: Murid menyusun Kartu Formula Fotosintesis (Air dari akar + Karbon Dioksida dari stomata + Cahaya Matahari diserap Klorofil -> Glukosa + Gas Oksigen O2).\nGuru berkeliling memberikan scaffolding (bimbingan khusus bagi kelompok yang memerlukan bantuan visual dan penguatan konsep).",
      },
      {
        sintakNomor: 4,
        namaSintak: "Mengembangkan dan Menyajikan Hasil Karya (Kreativitas Produk)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Kreatif & Bermakna)",
        dimensiProfil: "Kreativitas, Komunikasi & Kolaborasi",
        deskripsi:
          "Setiap kelompok menuangkan data dan analisisnya ke dalam 'Poster Dapur Hijau' atau peta alur fotosintesis pada LKPD.\nMurid membuat simpulan hubungan fotosintesis dengan kehidupan kelinci, sapi, dan manusia (rantai makanan).\nPerwakilan kelompok mempresentasikan hasil investigasinya dengan metode 'Galeri Berjalan' (Window Shopping), di mana satu anggota tinggal sebagai pemandu pos dan anggota lain berkeliling mengamati hasil pos lain.",
      },
      {
        sintakNomor: 5,
        namaSintak: "Menganalisis dan Mengevaluasi Proses Pemecahan Masalah",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI & MEREFLEKSI",
        dimensiProfil: "Penalaran Kritis & Komunikasi",
        deskripsi:
          "Guru memfasilitasi pleno klasikal: membandingkan botol yang terkena sinar matahari vs botol di tempat gelap untuk membuktikan pentingnya cahaya matahari.\nGuru meluruskan miskonsepsi: tumbuhan bukan hanya butuh air, tetapi air adalah bahan baku pembentuk zat gula dan oksigen.\nGuru memberikan apresiasi penuh semangat (Tepuk Klorofil) atas ketekunan dan kerja sama seluruh kelompok.",
      },
    ],

    waktuPenutup: "15 Menit",
    deskripsiPenutup: [
      "DEEP LEARNING – MEREFLEKSI (Refleksi Berkesadaran): Murid mengisi jurnal refleksi 3-2-1: (3 Hal baru yang aku pahami hari ini, 2 Hal yang paling menggembirakan saat bekerja kelompok, 1 Pertanyaan yang masih membuatku penasaran tentang tumbuhan).",
      "Menyimpulkan Pembelajaran: Bersama-sama menyimpulkan bahwa tumbuhan hijau adalah produsen utama di bumi; tanpa fotosintesis, rantai makanan terputus dan kehidupan akan berhenti.",
      "Asesmen Sumatif Singkat: Kuis cepat 5 butir soal pemahaman konsep dan penalaran (menggunakan lembar instrumen atau kuis interaktif).",
      "Tindak Lanjut & Aksi Nyata Kewargaan: Murid diberi misi mingguan 'Sahabat Tunas Hijau': menyiram dan memastikan tanaman hias di teras rumah/sekolah mendapatkan sinar matahari cukup.",
      "Doa Penutup dan Salam Penuh Rasa Syukur atas oksigen gratis yang dianugerahkan Tuhan.",
    ],

    // D. ASESMEN PEMBELAJARAN
    asesmenFormatifSikap:
      "Jurnal Observasi 7 Dimensi Profil Lulusan selama aktivitas berlangsung (Keimanan, Kewargaan, Penalaran Kritis, Kreativitas, Kolaborasi, Kemandirian, Komunikasi).",
    asesmenFormatifKeterampilan:
      "Penilaian unjuk kerja investigasi pembuktian fotosintesis, keakuratan pengisian data LKPD, dan kemampuan presentasi galeri berjalan.",
    asesmenSumatifDeskripsi:
      "Tes tertulis 5 butir soal objektif & uraian bernalar (Level Kognitif C3-C5) dengan skor total 30 poin, dikonversikan ke skala 0-100.",

    // LAMPIRAN 1: RINGKASAN MATERI AJAR
    ringkasanMateriAjar: `**1. Hakikat dan Pengertian Fotosintesis**
Fotosintesis berasal dari kata *foto* (cahaya) dan *sintesis* (penyusunan/pembuatan). Fotosintesis adalah proses biokimia yang dilakukan oleh tumbuhan berklorofil (zat hijau daun) untuk memproduksi makanannya sendiri berupa glukosa (zat gula/karbohidrat) dengan memanfaatkan energi cahaya matahari.

**2. Empat Bahan Utama (Reaktan) Fotosintesis:**
- **Air (H₂O):** Diserap oleh akar tanaman dari dalam tanah, kemudian diangkut melalui berkas pembuluh xilem menuju ke daun.
- **Karbon Dioksida (CO₂):** Gas yang dihembuskan manusia/hewan dan asap pabrik/kendaraan yang diserap oleh daun melalui lubang-lubang kecil bernama *stomata* (mulut daun).
- **Klorofil (Zat Hijau Daun):** Pigmen khusus di dalam kloroplas yang berfungsi menangkap dan memerangkap energi foton dari sinar matahari.
- **Cahaya Matahari:** Sumber energi penggerak reaksi kimia pengubahan air dan karbon dioksida.

**3. Dua Produk Hasil (Produk) Fotosintesis:**
- **Glukosa / Karbohidrat (C₆H₁₂O₆):** Makanan yang diedarkan ke seluruh tubuh tumbuhan untuk pertumbuhan, pembentukan batang, daun, bunga, dan buah cadangan makanan.
- **Gas Oksigen (O₂):** Gas yang dilepaskan ke udara bebas melalui stomata yang dihirup oleh manusia dan hewan untuk bernapas setiap detik.

**Persamaan Reaksi Sederhana:**
*Air + Karbon Dioksida + (Cahaya Matahari & Klorofil) → Glukosa (Makanan) + Gas Oksigen*

**4. Kaitan Fotosintesis dengan Rantai Makanan & Kehidupan di Bumi:**
Tumbuhan berkedudukan sebagai **Produsen Primer**. Hewan herbivora memakan tumbuhan, kemudian dimakan oleh karnivora. Jika tumbuhan tidak dapat berfotosintesis, produsen punah, rantai makanan runtuh, dan oksigen di atmosfer habis. Menjaga pohon berarti menjaga napas seluruh makhluk hidup di bumi.`,

    // LAMPIRAN 2: LKPD
    lkpd: {
      judul: "Petualangan Detektif Sains: Membongkar Rahasia Dapur Daun",
      temaKontekstual: "Menyelidiki Bukti Nyata Hasil Fotosintesis dan Kebutuhan Tumbuhan",
      petunjukBelajar: [
        "Bacalah setiap langkah kerja bersama kelompok dengan kompak dan teliti.",
        "Bagi peran anggota tim secara adil: Kapten, Pengamat Waktu, Notulis, dan Juru Bicara.",
        "Gunakan alat dan bahan dengan hati-hati serta jaga kebersihan meja kerja.",
        "Diskusikan pertanyaan analisis berdasarkan hasil pengamatan riil, bukan sekadar menebak!",
      ],
      alatDanBahan: [
        "2 botol kaca/plastik bening ukuran 500 ml berisi air bersih",
        "Tanaman air segar (Hydrilla verticillata) atau ranting berdaun hijau segar",
        "Sedikit serbuk soda kue (opsional, untuk menambah CO2 terlarut)",
        "Stopwatch / pengukur waktu smartphone",
        "Kaca pembesar (lup)",
        "Kardus penutup gelap (untuk botol pembanding)",
      ],
      langkahAktivitas: [
        "Masukkan tanaman air ke dalam kedua botol bening yang telah diisi air hingga penuh.",
        "Letakkan Botol A di area taman sekolah yang terkena sinar matahari terik langsung.",
        "Letakkan Botol B di dalam ruangan tertutup kardus hitam (kondisi tanpa cahaya).",
        "Amati kedua botol secara seksama menggunakan kaca pembesar selama 10 menit.",
        "Hitung dan catat kemunculan gelembung gas kecil pada permukaan daun pada tabel pengamatan di bawah ini!",
      ],
      tabelPengamatanHeader: [
        "Kondisi Botol",
        "Perlakuan Cahaya",
        "Jumlah Gelembung Menit ke-5",
        "Jumlah Gelembung Menit ke-10",
        "Kondisi Daun",
      ],
      tabelPengamatanRows: [
        ["Botol A", "Terik Matahari Langsung", "Banyak (... butir)", "Sangat Banyak (... butir)", "Segar dan aktif"],
        ["Botol B", "Gelap / Tanpa Cahaya", "Hampir tidak ada (0)", "Tidak ada (0)", "Pasif / Tenang"],
      ],
      pertanyaanAnalisis: [
        "Berdasarkan tabel di atas, pada botol manakah muncul banyak gelembung udara? Mengapa hal tersebut terjadi?",
        "Gas apakah sebenarnya yang terkandung di dalam butiran gelembung udara tersebut? Dari proses apakah gas itu dihasilkan?",
        "Apa yang membuktikan bahwa cahaya matahari mutlak dibutuhkan oleh tumbuhan untuk memproduksi oksigen?",
        "Jika di suatu kota seluruh pohon ditebang habis untuk bangunan, apa yang akan terjadi pada kadar oksigen dan karbon dioksida di kota tersebut? Jelaskan analisismu!",
      ],
      refleksiSiswa: [
        "Apa perasaanmu saat melihat gelembung udara keluar langsung dari daun tumbuhan?",
        "Sebutkan 1 tindakan nyata yang akan kamu lakukan di rumah mulai hari ini untuk merawat tanaman!",
      ],
    },

    // LAMPIRAN 4: SOAL EVALUASI PENGETAHUAN
    soalEvaluasi: [
      {
        no: 1,
        indikator: "Disajikan deskripsi proses fotosintesis, murid dapat menentukan zat yang diserap daun dari udara.",
        soal: "Saat siang hari yang terik, daun tumbuhan menyerap gas dari udara melalui lubang kecil bernama stomata untuk bahan fotosintesis. Gas yang diserap tersebut adalah ...\nA. Gas Oksigen (O₂)\nB. Gas Karbon Dioksida (CO₂)\nC. Gas Nitrogen (N₂)\nD. Uap Air Terbakar",
        levelKognitif: "C3 (Penerapan Konsep)",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: B (Karbon Dioksida). Pembahasan: Daun menyerap gas CO2 melalui stomata untuk bahan baku fotosintesis.",
      },
      {
        no: 2,
        indikator: "Murid dapat menentukan zat hijau daun yang berfungsi menyerap energi foton cahaya matahari.",
        soal: "Zat hijau khusus yang terdapat pada daun tumbuhan dan berfungsi utama untuk menangkap serta memerangkap energi cahaya matahari disebut ...\nA. Klorofil\nB. Xilem\nC. Floem\nD. Epidermis",
        levelKognitif: "C3 (Pemahaman & Penamaan)",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: A (Klorofil). Pembahasan: Klorofil merupakan pigmen hijau penangkap energi matahari.",
      },
      {
        no: 3,
        indikator: "Murid dapat mengidentifikasi dua hasil utama dari peristiwa fotosintesis tumbuhan.",
        soal: "Dua zat penting yang dihasilkan dari proses fotosintesis dan sangat bermanfaat bagi kehidupan manusia serta hewan di bumi adalah ...\nA. Karbon dioksida dan air\nB. Oksigen dan karbon dioksida\nC. Glukosa (makanan) dan gas oksigen\nD. Pupuk dan garam mineral",
        levelKognitif: "C3 (Aplikasi Hubungan)",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: C (Glukosa dan Gas Oksigen). Pembahasan: Hasil fotosintesis adalah glukosa sebagai makanan dan oksigen yang dilepaskan ke udara.",
      },
      {
        no: 4,
        indikator: "Disajikan kasus percobaan tanaman di tempat gelap, murid dapat memprediksi dampaknya terhadap pembentukan zat makanan.",
        soal: "Rani meletakkan tanaman hiasnya di dalam lemari yang gelap gulita selama dua minggu dan tetap menyiramnya setiap hari. Setelah dua minggu daunnya mulai menguning dan layu. Mengapa tanaman Rani tidak dapat tumbuh sehat meskipun diberi air cukup?\nA. Karena tanaman kekurangan gas nitrogen di dalam lemari.\nB. Karena tanaman kelebihan air sehingga akarnya membeku.\nC. Karena tanpa cahaya matahari, klorofil tidak dapat melakukan fotosintesis untuk membuat makanan.\nD. Karena tanaman takut pada kegelapan.",
        levelKognitif: "C4 (Analisis Kasus)",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: C. Pembahasan: Air saja tidak cukup; tanpa cahaya matahari, reaksi fotosintesis tidak dapat berlangsung sehingga tumbuhan kelaparan.",
      },
      {
        no: 5,
        indikator: "Murid mampu menganalisis keterkaitan punahnya tumbuhan dengan keberlangsungan rantai makanan ekosistem (HOTs).",
        soal: "Jelaskan dengan alur penalaran logis: 'Mengapa tumbuhan hijau disebut sebagai Produsen Pokok dalam rantai makanan di bumi? Apa yang akan terjadi pada hewan herbivora, hewan karnivora, dan manusia jika semua tumbuhan hijau di bumi berhenti berfotosintesis?' Tuliskan analisismu secara lengkap!",
        levelKognitif: "C4/C5 (Penalaran Kritis & Sintesis)",
        jenisSoal: "Uraian Terbuka",
        skor: 10,
        kunciJawaban: "Rubrik Skor 10: Murid mampu menjelaskan bahwa: (1) Tumbuhan disebut produsen karena satu-satunya makhluk hidup yang mampu membuat makanannya sendiri dari energi matahari, (2) Jika fotosintesis berhenti, herbivora akan mati kelaparan, disusul karnivora dan manusia, (3) Pasokan oksigen menipis drastis sehingga kehidupan di bumi akan punah.",
      },
    ],

    // LAMPIRAN 5: REKAPITULASI KETERAMPILAN
    rekapKeterampilan: [
      {
        no: 1,
        namaKelompok: "Kelompok 1 (Klorofil Hebat)",
        skorKriteria1: 4,
        skorKriteria2: 4,
        skorKriteria3: 4,
        skorTotal: 12,
        nilai: 100,
        kriteria: "Sangat Baik",
      },
      {
        no: 2,
        namaKelompok: "Kelompok 2 (Surya Kencana)",
        skorKriteria1: 3,
        skorKriteria2: 4,
        skorKriteria3: 3,
        skorTotal: 10,
        nilai: 83,
        kriteria: "Baik",
      },
      {
        no: 3,
        namaKelompok: "Kelompok 3 (Akar Mandiri)",
        skorKriteria1: 3,
        skorKriteria2: 3,
        skorKriteria3: 3,
        skorTotal: 9,
        nilai: 75,
        kriteria: "Baik",
      },
      {
        no: 4,
        namaKelompok: "Kelompok 4 (Stomata Ceria)",
        skorKriteria1: 4,
        skorKriteria2: 3,
        skorKriteria3: 4,
        skorTotal: 11,
        nilai: 92,
        kriteria: "Sangat Baik",
      },
    ],
  },

  {
    id: "matematika-fase-c-pecahan",
    tahunAjaran: "2024/2025",
    kelas: "Kelas 5",
    fase: "Fase C",
    semester: "Semester 1 (Ganjil)",
    mataPelajaran: "Matematika",
    materiPelajaran: "Penjumlahan dan Pengurangan Pecahan Berpenyebut Berbeda dalam Kehidupan Kontekstual",
    alokasiWaktu: "3 x 35 Menit (1 Pertemuan)",
    namaSekolah: "SD Negeri Cerdas Nusantara",
    namaKepsek: "Siti Rahmawati, M.Pd.",
    nipKepsek: "19750912 200003 2 003",
    namaGuru: "Imam Kamaluddin, S.Pd., Gr.",
    nipGuru: "19890821 201502 1 002",
    kota: "Jakarta",
    tanggal: "28 September 2024",

    kesiapanMurid:
      "Murid telah menguasai konsep pecahan senilai dan operasi pecahan berpenyebut sama di Fase B. Namun, saat menjumlahkan pecahan dengan penyebut berbeda (seperti 1/2 + 1/3), sekitar 45% murid masih terjebak miskonsepsi menjumlahkan langsung pembilang dan penyebut (1+1)/(2+3) = 2/5. Diferensiasi proses dilakukan dengan memanfaatkan manipulatif pecahan transparan (fractions overlay strip) untuk murid visual-kinestetik dan tabel kelipatan KPK interaktif untuk murid yang siap berpikir abstrak.",
    karakteristikMateriPelajaran:
      "Materi pecahan berpenyebut berbeda sarat dengan logika abstraksi nilai. Pembelajaran dikemas menggembirakan melalui simulasi 'Pasar Tradisional & Resep Kuliner Nusantara': murid membantu koki menyiapkan resep kue lapis dengan menakar bahan pecahan secara riil.",
    dimensiProfilLulusan: [
      {
        key: "penalaran-kritis",
        label: "Penalaran Kritis",
        checked: true,
        penjelasan: "Menganalisis mengapa penyebut pecahan harus disamakan terlebih dahulu melalui konsep KPK sebelum dijumlahkan.",
      },
      {
        key: "kreativitas",
        label: "Kreativitas",
        checked: true,
        penjelasan: "Menemukan berbagai strategi visual menyamakan penyebut menggunakan kertas lipat atau garis bilangan berwarna.",
      },
      {
        key: "kolaborasi",
        label: "Kolaborasi",
        checked: true,
        penjelasan: "Berbagi peran dalam tim menyelesaikan tantangan belanja bahan resep pecahan.",
      },
      {
        key: "kemandirian",
        label: "Kemandirian",
        checked: true,
        penjelasan: "Menyelesaikan perhitungan secara cermat, gigih, dan jujur.",
      },
      {
        key: "komunikasi",
        label: "Komunikasi",
        checked: true,
        penjelasan: "Menjelaskan langkah penalaran matematika secara runtut kepada teman sebaya.",
      },
      {
        key: "keimanan-ketaqwaan",
        label: "Keimanan dan Ketaqwaan",
        checked: true,
        penjelasan: "Menanamkan nilai kejujuran dan ketepatan timbangan sebagai wujud integritas moral.",
      },
      {
        key: "kewargaan",
        label: "Kewargaan",
        checked: true,
        penjelasan: "Menghargai gotong royong ekonomi lokal di pasar tradisional Indonesia.",
      },
    ],

    capaianPembelajaran:
      "Pada akhir Fase C, murid dapat membandingkan dan mengurutkan berbagai pecahan, serta melakukan operasi penjumlahan dan pengurangan pecahan berpenyebut berbeda untuk memecahkan masalah kehidupan sehari-hari.",
    tujuanPembelajaran:
      "Melalui media manipulatif pecahan dan simulasi kontekstual 'Dapur Resep Nusantara', murid mampu menyelesaikan operasi penjumlahan dan pengurangan pecahan berpenyebut berbeda secara tepat dan bernalar minimal 80% benar.",
    pendekatanPembelajaran: "Deep Learning (Bermakna, Berkesadaran, Menggembirakan), Realistic Mathematics Education (RME).",
    modelPembelajaran: "Problem Based Learning (PBL) berbasis Manipulatif Visual.",
    metodePembelajaran: "Eksplorasi kertas lipat pecahan, tantangan pasar teka-teki, diskusi terbimbing, dan presentasi strategi hitung.",
    budayaBelajar: "Iklim belajar yang merayakan kesalahan sebagai sarana belajar ('Mistakes are proof that you are trying'), saling menghargai cara berpikir teman.",
    ruangFisik: "Ruang kelas ditata menjadi 4 Kedai Bahan Masakan Pecahan.",
    kemitraanMurid: "Kelompok berpasangan dan kelompok kecil (tutor sebaya terstruktur).",
    platformDigital: "GeoGebra Fraction Bars, Quizizz Live Paper Mode / Interactive Challenge.",
    perangkat: "Proyektor, Laptop, Alat peraga batang pecahan warna-warni.",
    mediaPembelajaran: "Kertas lipat origami persegi, LKPD 'Koki Cilik Nusantara', dan Kartu Resep Masakan.",

    waktuPendahuluan: "15 Menit",
    deskripsiPendahuluan: [
      "Orientasi, Salam Penuh Semangat, dan Doa bersama (Keimanan dan Ketaqwaan).",
      "Ice breaking 'Tepuk Pecahan Senilai' dan cek kesiapan mental murid.",
      "Apersepsi Berkesadaran: Guru membawa 1/2 potong roti manis dan 1/4 potong roti lainnya, lalu bertanya: 'Jika Ibu menggabungkan kedua potongan ini, berapa bagian roti utuh yang Ibu miliki sekarang? Bisakah kita langsung menyebutnya 2 bagian?'",
      "Penyampaian Tujuan Pembelajaran dan alur petualangan Koki Matematika hari ini.",
    ],

    waktuInti: "75 Menit",
    sintakInti: [
      {
        sintakNomor: 1,
        namaSintak: "Orientasi pada Masalah Nyata (Tantangan Resep Koki)",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Kontekstual & Bermakna)",
        dimensiProfil: "Penalaran Kritis",
        deskripsi:
          "Guru menyajikan video simulasi Koki Nusantara yang kekurangan tepung: terdapat 1/2 kg tepung terigu di wadah A dan 1/3 kg di wadah B. Resep membutuhkan 5/6 kg tepung.\nMurid dihadapkan pada pertanyaan: 'Apakah tepung yang ada cukup untuk membuat pesanan kue bolu? Bagaimana cara membuktikannya tanpa timbangan digital?'",
      },
      {
        sintakNomor: 2,
        namaSintak: "Mengorganisasikan Murid dengan Alat Manipulatif",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Eksploratif)",
        dimensiProfil: "Kolaborasi & Kemandirian",
        deskripsi:
          "Murid dikelompokkan menjadi tim 4 orang dan diberikan selembar kertas origami persegi serta batang pecahan.\nMurid melipat kertas menjadi 1/2 secara horizontal dan 1/3 secara vertikal, lalu mengamati berapa petak kotak yang terbentuk (konsep KPK visual).",
      },
      {
        sintakNomor: 3,
        namaSintak: "Membimbing Penyelidikan Mandiri & Kelompok",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Joyful Math)",
        dimensiProfil: "Penalaran Kritis & Kreativitas",
        deskripsi:
          "Murid menemukan bahwa 1/2 sama luasnya dengan 3/6 dan 1/3 sama luasnya dengan 2/6. Maka 3/6 + 2/6 = 5/6 bagian.\nKelompok menyelesaikan 3 variasi tantangan resep masakan pada LKPD 'Koki Cilik Nusantara'.\nGuru memberikan bimbingan intensif bagi kelompok yang memerlukan bantuan kelipatan bilangan.",
      },
      {
        sintakNomor: 4,
        namaSintak: "Mengembangkan dan Mempresentasikan Solusi Matematika",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Komunikatif)",
        dimensiProfil: "Komunikasi & Kolaborasi",
        deskripsi:
          "Setiap kelompok menuliskan strategi hitung mereka pada papan tulis mini (Whiteboard Challenge).\nPresenter kelompok memaparkan mengapa penyebut 2 dan 3 diubah menjadi 6 dan bagaimana menyederhanakan hasil akhir jika nilainya pecahan campuran.",
      },
      {
        sintakNomor: 5,
        namaSintak: "Menganalisis & Mengevaluasi Proses Berpikir",
        tagDeepLearning: "DEEP LEARNING - MEREFLEKSI & MEMAHAMI",
        dimensiProfil: "Penalaran Kritis",
        deskripsi:
          "Guru memandu refleksi kelas atas miskonsepsi umum: mengapa (1+1)/(2+3) keliru dan tidak masuk akal secara logika ukuran.\nPenguatan rumus umum matematika: mencari KPK penyebut lalu menyesuaikan pembilang secara ekuivalen.",
      },
    ],

    waktuPenutup: "15 Menit",
    deskripsiPenutup: [
      "DEEP LEARNING – MEREFLEKSI: Murid menuliskan 'Eureka Moment' hari ini: Apa hal yang tadinya sulit sekarang menjadi mudah dipahami?",
      "Menyimpulkan aturan baku penjumlahan dan pengurangan pecahan berpenyebut berbeda.",
      "Asesmen Sumatif singkat 5 butir soal pemahaman & pemecahan masalah.",
      "Apresiasi dan tepuk salut untuk seluruh murid atas kegigihan bernalar hari ini.",
      "Doa penutup dan salam.",
    ],

    asesmenFormatifSikap: "Jurnal Observasi 7 Dimensi Profil Lulusan selama diskusi kelompok dan kerja manipulatif.",
    asesmenFormatifKeterampilan: "Rubrik unjuk kerja memvisualisasikan pecahan senilai dan akurasi penyelesaian tantangan resep.",
    asesmenSumatifDeskripsi: "Kuis tertulis 5 soal (C3-C5) dengan skor maksimal 30 poin, konversi ke skala 100.",

    ringkasanMateriAjar: `**1. Konsep Dasar Pecahan Berpenyebut Berbeda**
Pecahan menyatakan bagian dari suatu kesatuan utuh. Bilangan di atas garis disebut **Pembilang** (banyaknya bagian yang diambil), dan bilangan di bawah garis disebut **Penyebut** (jumlah total bagian yang sama besar).
Jika penyebut berbeda, ukuran masing-masing potongan tidak sama besar. Kita tidak dapat langsung menjumlahkannya sebelum potongannya disamakan ukurannya!

**2. Langkah Menyelesaikan Penjumlahan & Pengurangan Pecahan Berbeda Penyebut:**
- **Langkah 1:** Tentukan KPK (Kelipatan Persekutuan Terkecil) dari seluruh penyebut untuk dijadikan penyebut bersama.
- **Langkah 2:** Ubah setiap pecahan menjadi pecahan senilai dengan membagi penyebut baru dengan penyebut lama, lalu dikalikan dengan pembilang lama.
- **Langkah 3:** Jumlahkan atau kurangkan pembilang-pembilangnya, sementara penyebutnya tetap sama.
- **Langkah 4:** Sederhanakan hasil akhir ke bentuk pecahan paling sederhana atau pecahan campuran jika pembilang lebih besar dari penyebut.

*Contoh:*
1/4 + 2/3 = ... (KPK dari 4 dan 3 adalah 12)
(1 x 3)/12 + (2 x 4)/12 = 3/12 + 8/12 = 11/12.`,

    lkpd: {
      judul: "Tantangan Koki Cilik: Menakar Resep Kuliner Nusantara",
      temaKontekstual: "Menghitung Bahan Kue Tradisional dengan Operasi Pecahan",
      petunjukBelajar: [
        "Diskusikan bersama rekan sekelompok dengan cermat dan tertib.",
        "Gunakan kertas lipat pembuktian untuk memverifikasi pecahan senilai sebelum menghitung.",
        "Tuliskan cara penyelesaian langkah demi langkah secara jelas.",
      ],
      alatDanBahan: [
        "Kertas origami berwarna ukuran 15x15 cm",
        "Penggaris dan spidol warna",
        "Lembar Kerja Siswa",
      ],
      langkahAktivitas: [
        "Ambil kertas lipat, arsir bagian 1/2 dengan warna biru.",
        "Ambil kertas lipat kedua dengan ukuran sama, arsir bagian 1/4 dengan warna merah.",
        "Tentukan berapa kotak pecahan 1/4 yang setara dengan 1/2 bagian.",
        "Selesaikan soal resep di tabel tantangan!",
      ],
      tabelPengamatanHeader: ["No", "Bahan Masakan", "Takaran A", "Takaran B", "Operasi Hitung", "Total Takaran"],
      tabelPengamatanRows: [
        ["1", "Gula Pasir", "1/2 kg", "1/4 kg", "Penjumlahan", "3/4 kg"],
        ["2", "Santan Kelapa", "3/4 liter", "1/2 liter", "Pengurangan", "1/4 liter"],
        ["3", "Tepung Ketan", "2/3 kg", "1/6 kg", "Penjumlahan", "5/6 kg"],
      ],
      pertanyaanAnalisis: [
        "Mengapa pecahan 1/2 dan 1/3 tidak boleh langsung dijumlahkan menjadi 2/5? Buktikan dengan gambar atau penjelasan logis!",
        "Bagaimana cara termudah menentukan penyebut bersama antara angka 4 dan 6?",
        "Jika koki memiliki 1 kg mentega dan dipakai 3/8 kg untuk kue tart, berapa sisa mentega koki sekarang?",
      ],
      refleksiSiswa: [
        "Bagian mana dari operasi pecahan hari ini yang paling menyenangkan?",
        "Kapan kamu bisa memanfaatkan kemampuan menghitung pecahan ini di rumah?",
      ],
    },

    soalEvaluasi: [
      {
        no: 1,
        indikator: "Murid dapat menghitung hasil penjumlahan dua pecahan berpenyebut berbeda sederhana.",
        soal: "Hasil dari operasi penjumlahan pecahan 1/3 + 2/5 adalah ...\nA. 3/8\nB. 11/15\nC. 3/15\nD. 7/15",
        levelKognitif: "C3",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: B (11/15). Cara: KPK 3 dan 5 = 15. (5/15) + (6/15) = 11/15.",
      },
      {
        no: 2,
        indikator: "Murid dapat menghitung pengurangan dua pecahan berpenyebut berbeda.",
        soal: "Hasil dari 3/4 - 1/6 adalah ...\nA. 2/2\nB. 2/12\nC. 7/12\nD. 1/2",
        levelKognitif: "C3",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: C (7/12). Cara: KPK 4 dan 6 = 12. (9/12) - (2/12) = 7/12.",
      },
      {
        no: 3,
        indikator: "Disajikan soal cerita kontekstual pembelian kain, murid dapat menentukan total panjang pecahan.",
        soal: "Ibu membeli kain katun sepanjang 2/5 meter dan kain sutra sepanjang 1/2 meter untuk membuat kerajinan. Berapa meter total panjang seluruh kain yang dibeli Ibu?\nA. 3/7 meter\nB. 9/10 meter\nC. 3/10 meter\nD. 1 meter",
        levelKognitif: "C3",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: B (9/10 meter). Cara: 2/5 + 1/2 = 4/10 + 5/10 = 9/10 meter.",
      },
      {
        no: 4,
        indikator: "Murid dapat memecahkan masalah pengurangan pecahan dalam kasus sisa persediaan.",
        soal: "Paman memiliki persediaan beras 5/6 karung. Sebanyak 1/3 karung disedekahkan kepada tetangga yang membutuhkan. Berapa sisa persediaan beras Paman sekarang?\nA. 1/2 karung\nB. 4/3 karung\nC. 4/6 karung (belum sederhana)\nD. 2/3 karung",
        levelKognitif: "C4",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: A (1/2 karung). Cara: 5/6 - 1/3 = 5/6 - 2/6 = 3/6 = 1/2 karung.",
      },
      {
        no: 5,
        indikator: "Murid mampu menganalisis kesalahan pengerjaan operasi pecahan dan menyusun solusi penalaran yang benar (HOTs).",
        soal: "Budi mengerjakan soal penjumlahan pecahan: '1/2 + 2/3 = 3/5'.\nJelaskan: (a) Mengapa jawaban Budi tersebut salah dan keliru secara logika ukuran?\n(b) Tuliskan langkah penyelesaian yang benar beserta alasannya!",
        levelKognitif: "C4/C5",
        jenisSoal: "Uraian Terbuka",
        skor: 10,
        kunciJawaban: "Rubrik Skor 10: (a) Jawaban Budi salah karena menjumlahkan pembilang dengan pembilang dan penyebut dengan penyebut. Secara logika ukuran, 1/2 adalah setengah utuh, sedangkan 2/3 lebih dari setengah, jika dijumlahkan pastilah lebih dari 1 (tepatnya 7/6 atau 1 1/6), sedangkan 3/5 bernilai kurang dari 1. (b) Langkah benar: KPK 2 dan 3 adalah 6. 1/2 = 3/6; 2/3 = 4/6. Hasil = 3/6 + 4/6 = 7/6 = 1 1/6.",
      },
    ],

    rekapKeterampilan: [
      {
        no: 1,
        namaKelompok: "Kelompok 1 (Koki Pintar)",
        skorKriteria1: 4,
        skorKriteria2: 4,
        skorKriteria3: 4,
        skorTotal: 12,
        nilai: 100,
        kriteria: "Sangat Baik",
      },
      {
        no: 2,
        namaKelompok: "Kelompok 2 (Geometri Ceria)",
        skorKriteria1: 4,
        skorKriteria2: 3,
        skorKriteria3: 3,
        skorTotal: 10,
        nilai: 83,
        kriteria: "Baik",
      },
      {
        no: 3,
        namaKelompok: "Kelompok 3 (Aljabar Muda)",
        skorKriteria1: 3,
        skorKriteria2: 3,
        skorKriteria3: 3,
        skorTotal: 9,
        nilai: 75,
        kriteria: "Baik",
      },
      {
        no: 4,
        namaKelompok: "Kelompok 4 (KPK Hebat)",
        skorKriteria1: 4,
        skorKriteria2: 4,
        skorKriteria3: 3,
        skorTotal: 11,
        nilai: 92,
        kriteria: "Sangat Baik",
      },
    ],
  },

  {
    id: "bahasa-indonesia-fase-b-narasi",
    tahunAjaran: "2024/2025",
    kelas: "Kelas 4",
    fase: "Fase B",
    semester: "Semester 1 (Ganjil)",
    mataPelajaran: "Bahasa Indonesia",
    materiPelajaran: "Menulis Teks Narasi Kreatif Berdasarkan Pengamatan Lingkungan Sekolah",
    alokasiWaktu: "3 x 35 Menit (1 Pertemuan)",
    namaSekolah: "SD Negeri Percontohan Merdeka Belajar",
    namaKepsek: "Drs. H. Mulyadi, M.Pd.",
    nipKepsek: "19720415 199803 1 004",
    namaGuru: "Imam Kamaluddin, S.Pd., Gr.",
    nipGuru: "19890821 201502 1 002",
    kota: "Jakarta",
    tanggal: "05 Oktober 2024",

    kesiapanMurid:
      "Murid telah mampu merangkai kalimat tunggal dan majemuk setara, namun kerap kesulitan menyusun paragraf cerita yang memiliki alur waktu teratur (awal, tengah, akhir) dan masih minim penggunaan kata hubung antarkalimat. Sekitar 35% murid membutuhkan bantuan pancingan visual 'Peta Perjalanan Karakter' untuk memantik imajinasi naratifnya.",
    karakteristikMateriPelajaran:
      "Materi menulis teks narasi sarat dengan ekspresi rasa, imajinasi, dan kesadaran tata bahasa. Materi difasilitasi dengan metode 'Safari Penulis Cilik': murid keluar kelas mengamati taman, kantin, atau perpustakaan lalu mengubahnya menjadi latar cerita fantasi petualangan yang menggembirakan.",
    dimensiProfilLulusan: [
      {
        key: "penalaran-kritis",
        label: "Penalaran Kritis",
        checked: true,
        penjelasan: "Menyusun rangkaian peristiwa sebab-akibat yang masuk akal dalam plot cerita.",
      },
      {
        key: "kreativitas",
        label: "Kreativitas",
        checked: true,
        penjelasan: "Menciptakan tokoh unik, dialog ekspresif, dan alur cerita imajinatif.",
      },
      {
        key: "kolaborasi",
        label: "Kolaborasi",
        checked: true,
        penjelasan: "Melakukan proses tinjau rekan sebaya (peer review) untuk saling memberikan masukan ramah.",
      },
      {
        key: "kemandirian",
        label: "Kemandirian",
        checked: true,
        penjelasan: "Fokus menyelesaikan draf tulisan cerita mandiri hingga tuntas.",
      },
      {
        key: "komunikasi",
        label: "Komunikasi",
        checked: true,
        penjelasan: "Membacakan penggalan narasi dengan intonasi, ekspresi wajah, dan pelafalan yang memikat.",
      },
      {
        key: "keimanan-ketaqwaan",
        label: "Keimanan dan Ketaqwaan",
        checked: true,
        penjelasan: "Menyisipkan pesan moral kebajikan dan syukur atas keindahan alam sekitar dalam karya narasi.",
      },
      {
        key: "kewargaan",
        label: "Kewargaan",
        checked: true,
        penjelasan: "Mencintai bahasa persatuan Bahasa Indonesia dan peduli kebersihan lingkungan sekolah.",
      },
    ],

    capaianPembelajaran:
      "Pada akhir Fase B, murid mampu menulis teks narasi sederhana dengan rangkaian kalimat yang beragam, informasi yang runut, dan kosakata baru yang relevan untuk menarik minat pembaca.",
    tujuanPembelajaran:
      "Melalui kegiatan pengamatan lingkungan sekolah dan kerangka 'Peta Cerita 3 Babak', murid mampu menyusun draf teks narasi minimal 3 paragraf (awal, konflik sederhana, penyelesaian) dengan pilihan kata ekspresif dan tanda baca tepat.",
    pendekatanPembelajaran: "Deep Learning (Bermakna, Berkesadaran, Menggembirakan), Process Writing Approach.",
    modelPembelajaran: "Project Based Learning (PjBL) Mini: Menghasilkan Antologi Cerita Kelas.",
    metodePembelajaran: "Safari pengamatan, curah gagasan (brainstorming), menulis mandiri, dan panggung dongeng cilik.",
    budayaBelajar: "Ruang ekspresi yang bebas dari rasa takut dihakimi, saling mengapresiasi keunikan imajinasi setiap kawan.",
    ruangFisik: "Taman hijau sekolah dan perpustakaan sudut baca.",
    kemitraanMurid: "Teman sebaya (Peer-editing partner) untuk saling menyemangati draf cerita.",
    platformDigital: "Canva Comic Strip / Book Creator / Google Docs untuk pengetikan cerita.",
    perangkat: "Proyektor LCD, Laptop guru, Speaker pengiring musik instrumental tenang.",
    mediaPembelajaran: "Buku Jurnal Safari Penulis, LKPD 'Peta Alur Cerita', dan Kotak Dadu Cerita Berhadiah.",

    waktuPendahuluan: "15 Menit",
    deskripsiPendahuluan: [
      "Orientasi, Doa bersama dengan khusyuk, dan salam kehangatan (Keimanan dan Ketaqwaan).",
      "Permainan pemantik: 'Tebak Kelanjutan Cerita Misteri': Guru memulai 2 kalimat awal, murid bergantian menyambung 1 kalimat dengan seru.",
      "Apersepsi Berkesadaran: 'Pernahkah kalian melihat seekor kucing oranye sedang diam melamun di bawah pohon mangga sekolah? Kira-kira apa yang sedang ia pikirkan? Hari ini kita akan meminjam mata para penulis hebat untuk mengungkap kisah di balik benda-benda di sekitar kita!'",
      "Penyampaian Tujuan Pembelajaran dan misi penerbitan buku mini cerita kelas.",
    ],

    waktuInti: "75 Menit",
    sintakInti: [
      {
        sintakNomor: 1,
        namaSintak: "Penentuan Pertanyaan Mendasar & Inspirasi Objek",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Bermakna & Mengamati)",
        dimensiProfil: "Penalaran Kritis & Kreativitas",
        deskripsi:
          "Guru mengajak murid berkeliling halaman sekolah selama 7 menit (Safari Pengamatan).\nMurid memilih 1 objek menarik (misal: pohon beringin tua, sepeda pak tukang kebun, atau bola sepak di pojok lapangan).\nMurid mencatat ciri panca indera objek: warna, bentuk, suara di sekitarnya, dan aroma lingkungan.",
      },
      {
        sintakNomor: 2,
        namaSintak: "Mendesain Perencanaan Karya (Peta Cerita 3 Babak)",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI & MERANCANG",
        dimensiProfil: "Kemandirian & Kreativitas",
        deskripsi:
          "Murid kembali ke kelas dan mengisi LKPD 'Peta Cerita 3 Babak' (Tokoh, Latar Waktu/Tempat, Masalah yang dihadapi, Cara penyelesaian).\nGuru memandu diferensiasi: murid yang membutuhkan scaffolding diberikan templat kalimat pembuka cerita.",
      },
      {
        sintakNomor: 3,
        namaSintak: "Menyusun Jadwal dan Menulis Draf Pertama (Drafting)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Joyful Writing Flow)",
        dimensiProfil: "Kemandirian & Penalaran Kritis",
        deskripsi:
          "Guru menyalakan musik instrumental tenang pengantar konsentrasi.\nMurid menulis draf narasi secara mandiri dan hening selama 20 menit.\nGuru berkeliling memberikan apresiasi lisan dan membimbing pemilihan kosakata indah (diksi).",
      },
      {
        sintakNomor: 4,
        namaSintak: "Tinjau Rekan Sebaya & Revisi (Peer Review & Editing)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Kolaboratif & Berkesadaran)",
        dimensiProfil: "Kolaborasi & Komunikasi",
        deskripsi:
          "Murid bertukar draf cerita dengan pasangan belajarnya menggunakan lembar cek ramah 'Dua Bintang Satu Harapan' (Two Stars and a Wish).\nTeman memberikan apresiasi atas bagian cerita yang paling seru dan memberi saran santun untuk tanda baca titik dan huruf kapital.",
      },
      {
        sintakNomor: 5,
        namaSintak: "Panggung Membaca Nyaring & Evaluasi Pengalaman",
        tagDeepLearning: "DEEP LEARNING - MEREFLEKSI & MENGAPRESIASI",
        dimensiProfil: "Komunikasi & Kewargaan",
        deskripsi:
          "Tiga perwakilan murid membacakan penggalan narasi terbaiknya di depan kelas dengan standing applause dari teman-teman.\nGuru menyimpulkan kekuatan alur cerita dan memvalidasi perasaan bangga murid sebagai penulis cilik.",
      },
    ],

    waktuPenutup: "15 Menit",
    deskripsiPenutup: [
      "DEEP LEARNING – MEREFLEKSI: Refleksi berkesadaran murid tentang proses kreatif mereka: 'Apa yang kamu rasakan saat idemu akhirnya berubah menjadi sebuah cerita utuh?'",
      "Menyimpulkan bersama unsur-unsur penting pembangun teks narasi (Tokoh, Latar, Alur, Pesan).",
      "Pemberian Asesmen Sumatif singkat (5 butir soal pemahaman struktur narasi).",
      "Pengumuman rencana penjilidan karya menjadi buku 'Antologi Kisah Sahabat Merdeka'.",
      "Doa penutup dan salam.",
    ],

    asesmenFormatifSikap: "Jurnal Observasi 7 Dimensi Profil Lulusan (keuletan mandiri dan empati saat peer-review).",
    asesmenFormatifKeterampilan: "Rubrik penilaian karya teks narasi (kelengkapan struktur, kekayaan kosakata, dan ejaan).",
    asesmenSumatifDeskripsi: "Tes pemahaman konsep teks narasi 5 butir soal (skor total 30, konversi nilai 100).",

    ringkasanMateriAjar: `**1. Pengertian Teks Narasi**
Teks narasi adalah karangan yang menceritakan suatu peristiwa atau kejadian secara berurutan sesuai dengan urutan waktu (kronologis). Teks narasi dapat bersifat nyata (nonfiksi) seperti autobiografi atau rekaan/khayalan (fiksi) seperti dongeng, cerpen, dan cerita petualangan.

**2. Tiga Struktur Utama Teks Narasi:**
- **Awal (Orientasi):** Bagian pengenalan tokoh, watak, latar tempat, dan suasana cerita.
- **Tengah (Komplikasi):** Munculnya permasalahan, konflik, atau tantangan menarik yang dihadapi oleh tokoh utama.
- **Akhir (Resolusi):** Cara penyelesaian masalah, akhir nasib tokoh, serta pesan moral (amanat) yang dapat dipetik pembaca.

**3. Kaidah Kebahasaan Teks Narasi:**
- Menggunakan kata kerja aksi (misal: melompat, menyelinap, berlari, menggenggam).
- Menggunakan kata keterangan waktu dan tempat (misal: di sudut taman sekolah, saat bel istirahat berbunyi, keesokan paginya).
- Menggunakan kata hubung urutan waktu (misal: mula-mula, kemudian, tiba-tiba, setelah itu, akhirnya).
- Menggunakan huruf kapital untuk awal kalimat dan nama orang, serta tanda titik (.) di akhir kalimat.`,

    lkpd: {
      judul: "Safari Penulis Cilik: Menggali Kisah di Balik Sudut Sekolah",
      temaKontekstual: "Menulis Cerita Narasi Kreatif Berdasarkan Pengamatan Lingkungan",
      petunjukBelajar: [
        "Amati lingkungan sekitar sekolah dengan tenang dan gunakan panca indera.",
        "Pilihlah satu objek atau kejadian yang paling menarik hatimu.",
        "Isi peta cerita di bawah ini sebelum mulai menulis cerita lengkap.",
      ],
      alatDanBahan: [
        "Buku catatan safari dan pulpen/pensil warna",
        "Papan jalan (clipboard)",
      ],
      langkahAktivitas: [
        "Lakukan safari pengamatan selama 7 menit di halaman sekolah.",
        "Tentukan siapa tokoh utamamu (bisa manusia, hewan, atau benda ajaib).",
        "Lengkapi kolom Babak 1, Babak 2, dan Babak 3.",
        "Tuliskan draf ceritamu minimal dalam 3 paragraf!",
      ],
      tabelPengamatanHeader: ["Babak Cerita", "Fokus Isi Paragraf", "Ide Ceritaku"],
      tabelPengamatanRows: [
        ["Babak 1: Awal", "Pengenalan tokoh utama dan suasana tempat", "Kucing belang tiga bernama Tomi sedang tertidur di bawah pohon mangga."],
        ["Babak 2: Masalah", "Kejadian mengejutkan / tantangan tokoh", "Tiba-tiba angin kencang menerbangkan topi murid dan tersangkut di dahan pohon."],
        ["Babak 3: Akhir", "Bagaimana masalah terpecahkan & pesan moral", "Tomi melompat lincah dan membantu menjatuhkan topi tersebut dengan gembira."],
      ],
      pertanyaanAnalisis: [
        "Apakah ceritamu sudah memuat urutan waktu (awal, tengah, dan akhir) yang jelas?",
        "Tunjukkan 2 kata kerja aksi yang paling menarik yang kamu gunakan dalam ceritamu!",
        "Pesan kebaikan apa yang ingin kamu sampaikan kepada pembaca melalui ceritamu?",
      ],
      refleksiSiswa: [
        "Apa tantangan terbesarmu saat menuangkan ide ke dalam tulisan?",
        "Bagaimana masukan dari teman sebangkumu membantumu memperbaiki tulisan?",
      ],
    },

    soalEvaluasi: [
      {
        no: 1,
        indikator: "Murid dapat menentukan bagian struktur narasi yang memuat pengenalan tokoh dan latar cerita.",
        soal: "Bagian awal dalam sebuah cerita narasi yang berisi pengenalan nama tokoh, watak, serta latar waktu dan tempat disebut ...\nA. Orientasi\nB. Komplikasi\nC. Resolusi\nD. Koda",
        levelKognitif: "C3",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: A (Orientasi). Pembahasan: Orientasi adalah tahap pengenalan tokoh dan latar.",
      },
      {
        no: 2,
        indikator: "Disajikan penggalan teks, murid dapat mengidentifikasi kata hubung kronologis urutan waktu.",
        soal: "'Mula-mula Riko mengikat tali sepatunya. Kemudian, ia berlari kencang mengejar bola yang mengarah ke gawang.' Kata hubung yang menunjukkan urutan waktu pada kalimat tersebut adalah ...\nA. Mengikat dan mengarah\nB. Mula-mula dan kemudian\nC. Sepatu dan gawang\nD. Berlari dan kencang",
        levelKognitif: "C3",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: B (Mula-mula dan kemudian). Pembahasan: Kata hubung kronologis penanda waktu.",
      },
      {
        no: 3,
        indikator: "Murid dapat memilih penggunaan huruf kapital dan tanda baca yang tepat dalam kalimat narasi.",
        soal: "Penulisan kalimat narasi berikut yang menggunakan huruf kapital dan tanda baca secara benar adalah ...\nA. pada hari senin, doni pergi ke perpustakaan daerah\nB. Pada hari Senin, Doni pergi ke perpustakaan daerah.\nC. Pada hari senin, doni pergi ke Perpustakaan daerah.\nD. pada hari Senin, Doni pergi ke perpustakaan Daerah?",
        levelKognitif: "C3",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: B. Pembahasan: Huruf kapital di awal kalimat, nama hari (Senin), nama orang (Doni), diakhiri tanda titik.",
      },
      {
        no: 4,
        indikator: "Disajikan cuplikan paragraf narasi, murid dapat menganalisis watak tokoh utama.",
        soal: "Bacalah kutipan berikut:\n'Meskipun keringat membasahi dahinya dan teman-temannya sudah pulang beristirahat, Budi tetap bertahan di taman sekolah untuk merapikan kembali pot-pot bunga yang terguling akibat angin kencang.'\nWatak tokoh Budi dalam kutipan di atas adalah ...\nA. Penakut dan pendiam\nB. Tanggung jawab dan peduli lingkungan\nC. Sombong dan suka dipuji\nD. Keras kepala dan malas",
        levelKognitif: "C4",
        jenisSoal: "Pilihan Ganda",
        skor: 5,
        kunciJawaban: "Kunci: B (Tanggung jawab dan peduli lingkungan). Pembahasan: Tindakan merapikan pot bunga tanpa disuruh menunjukkan rasa tanggung jawab.",
      },
      {
        no: 5,
        indikator: "Murid mampu menyusun kelanjutan komplikasi cerita narasi dengan alur logis dan bahasa ekspresif (HOTs).",
        soal: "Bacalah penggalan awal cerita berikut:\n'Pagi itu, bel istirahat berbunyi nyaring. Sarah membuka kotak bekalnya di bawah pohon rindang sekolah. Namun betapa terkejutnya ia ketika melihat sebuah anak burung pipit kecil tergeletak lemah di dekat kakinya dengan sayap yang basah kuyup...'\nTugasmu: Tulislah kelanjutan cerita tersebut sebanyak minimal 4-5 kalimat yang memuat tindakan Sarah, cara ia menolong anak burung itu, dan bagaimana akhir ceritanya!",
        levelKognitif: "C4/C5",
        jenisSoal: "Uraian Terbuka",
        skor: 10,
        kunciJawaban: "Rubrik Skor 10: Murid mampu menyambung cerita dengan alur logis: (1) Reaksi Sarah yang peduli, (2) Upaya nyata menolong anak burung dengan hati-hati, (3) Resolusi akhir yang membahagiakan, dan (4) Penggunaan ejaan serta tanda baca yang runtut dan ekspresif.",
      },
    ],

    rekapKeterampilan: [
      {
        no: 1,
        namaKelompok: "Kelompok 1 (Pena Kencana)",
        skorKriteria1: 4,
        skorKriteria2: 4,
        skorKriteria3: 4,
        skorTotal: 12,
        nilai: 100,
        kriteria: "Sangat Baik",
      },
      {
        no: 2,
        namaKelompok: "Kelompok 2 (Tinta Ceria)",
        skorKriteria1: 3,
        skorKriteria2: 4,
        skorKriteria3: 4,
        skorTotal: 11,
        nilai: 92,
        kriteria: "Sangat Baik",
      },
      {
        no: 3,
        namaKelompok: "Kelompok 3 (Jejak Imajinasi)",
        skorKriteria1: 3,
        skorKriteria2: 3,
        skorKriteria3: 3,
        skorTotal: 9,
        nilai: 75,
        kriteria: "Baik",
      },
      {
        no: 4,
        namaKelompok: "Kelompok 4 (Kisah Merdeka)",
        skorKriteria1: 4,
        skorKriteria2: 3,
        skorKriteria3: 3,
        skorTotal: 10,
        nilai: 83,
        kriteria: "Baik",
      },
    ],
  },
];
