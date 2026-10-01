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
  tanggal?: string;
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

export const RUBRIK_DIMENSI_STANDAR: Record<string, { label: string; indikator: string; skor: string }> = {
  "keimanan-ketaqwaan": {
    label: "Keimanan dan Ketaqwaan",
    indikator: "• Berdoa sebelum & sesudah kegiatan pembelajaran dengan khusyuk.\n• Menunjukkan sikap santun, jujur, dan berakhlak mulia kepada guru dan sesama teman.",
    skor: "3 = Memenuhi 3 aspek\n2 = Memenuhi 2 aspek\n1 = Memenuhi 1 aspek",
  },
  "kewargaan": {
    label: "Kewargaan",
    indikator: "• Menghargai keragaman teman sebaya dan berempati sosial.\n• Menggunakan bahasa santun dan menaati kesepakatan belajar kelas.",
    skor: "3 = Memenuhi 3 aspek\n2 = Memenuhi 2 aspek\n1 = Memenuhi 1 aspek",
  },
  "penalaran-kritis": {
    label: "Penalaran Kritis",
    indikator: "• Mampu mengidentifikasi fakta, bukti kontekstual, dan menganalisis masalah.\n• Mengajukan pertanyaan kritis dan berpikir reflektif dalam pemecahan tugas.",
    skor: "3 = Memenuhi 3 aspek\n2 = Memenuhi 2 aspek\n1 = Memenuhi 1 aspek",
  },
  "kreativitas": {
    label: "Kreativitas",
    indikator: "• Menyajikan gagasan orisinal dan solusi alternatif yang variatif.\n• Menunjukkan antusiasme tinggi dalam merancang produk/karya nyata.",
    skor: "3 = Memenuhi 3 aspek\n2 = Memenuhi 2 aspek\n1 = Memenuhi 1 aspek",
  },
  "kolaborasi": {
    label: "Kolaborasi",
    indikator: "• Berbagi peran secara adil dan aktif berpartisipasi dalam diskusi tim.\n• Membantu rekan kelompok yang mengalami kesulitan dengan penuh kepedulian.",
    skor: "3 = Memenuhi 3 aspek\n2 = Memenuhi 2 aspek\n1 = Memenuhi 1 aspek",
  },
  "kemandirian": {
    label: "Kemandirian",
    indikator: "• Mampu mengelola waktu, fokus belajar, dan menuntaskan tugas mandiri.\n• Percaya diri mengambil inisiatif tanpa bergantung penuh pada orang lain.",
    skor: "3 = Memenuhi 3 aspek\n2 = Memenuhi 2 aspek\n1 = Memenuhi 1 aspek",
  },
  "komunikasi": {
    label: "Komunikasi",
    indikator: "• Menyampaikan pendapat atau hasil karya secara runut, artikulatif, dan santun.\n• Menyimak penjelasan orang lain dan memberikan tanggapan konstruktif.",
    skor: "3 = Memenuhi 3 aspek\n2 = Memenuhi 2 aspek\n1 = Memenuhi 1 aspek",
  },
};

export function getRubrikDimensi(dim: { key?: string; label?: string } | string): { label: string; indikator: string; skor: string } {
  const rawKey = typeof dim === "string" ? dim : (dim.key || dim.label || "");
  const normalizedKey = rawKey.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
  const label = typeof dim === "string" ? dim : (dim.label || dim.key || "Dimensi Karakter");

  for (const [k, val] of Object.entries(RUBRIK_DIMENSI_STANDAR)) {
    if (normalizedKey.includes(k) || k.includes(normalizedKey)) {
      return { label: val.label || label, indikator: val.indikator, skor: val.skor };
    }
  }

  const lowerLabel = label.toLowerCase();
  if (lowerLabel.includes("iman") || lowerLabel.includes("taqwa") || lowerLabel.includes("takwa") || lowerLabel.includes("akhlak")) {
    const std = RUBRIK_DIMENSI_STANDAR["keimanan-ketaqwaan"];
    return { label, indikator: std.indikator, skor: std.skor };
  }
  if (lowerLabel.includes("kritis") || lowerLabel.includes("nalar")) {
    const std = RUBRIK_DIMENSI_STANDAR["penalaran-kritis"];
    return { label, indikator: std.indikator, skor: std.skor };
  }
  if (lowerLabel.includes("kreatif")) {
    const std = RUBRIK_DIMENSI_STANDAR["kreativitas"];
    return { label, indikator: std.indikator, skor: std.skor };
  }
  if (lowerLabel.includes("gotong") || lowerLabel.includes("kolaborasi") || lowerLabel.includes("kerjasama")) {
    const std = RUBRIK_DIMENSI_STANDAR["kolaborasi"];
    return { label, indikator: std.indikator, skor: std.skor };
  }
  if (lowerLabel.includes("mandiri")) {
    const std = RUBRIK_DIMENSI_STANDAR["kemandirian"];
    return { label, indikator: std.indikator, skor: std.skor };
  }
  if (lowerLabel.includes("komunikasi") || lowerLabel.includes("bicara")) {
    const std = RUBRIK_DIMENSI_STANDAR["komunikasi"];
    return { label, indikator: std.indikator, skor: std.skor };
  }
  if (lowerLabel.includes("warga") || lowerLabel.includes("kebhinekaan") || lowerLabel.includes("bhineka")) {
    const std = RUBRIK_DIMENSI_STANDAR["kewargaan"];
    return { label, indikator: std.indikator, skor: std.skor };
  }

  return {
    label,
    indikator: `• Menunjukkan konsistensi pengamalan nilai ${label} dalam proses pembelajaran.\n• Bersikap positif dan bertanggung jawab dalam kegiatan mandiri maupun kelompok.`,
    skor: "3 = Memenuhi 3 aspek\n2 = Memenuhi 2 aspek\n1 = Memenuhi 1 aspek",
  };
}

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

export interface CanonicalSyntaxItem {
  sintakNomor: number;
  namaSintak: string;
  tagDeepLearning: string;
  dimensiProfil: string;
  deskripsi: string;
}

export function generateModelSyntaxSystem(
  model: string,
  materi: string,
  mapel: string,
  activeDimNames: string
) {
  const norm = model.toLowerCase();
  const dim = activeDimNames || "Penalaran Kritis & Kolaborasi";

  // Category detection
  const isPjbl = norm.includes("project") || norm.includes("pjbl") || norm.includes("proyek");
  const isDiscovery = norm.includes("discovery");
  const isInquiry = norm.includes("inquiry") || norm.includes("inkuiri");
  const isExperiential = norm.includes("experiential") || norm.includes("kolb");
  const isCooperative = norm.includes("cooperative") || norm.includes("kooperatif");
  const isDifferentiated = norm.includes("diferensiasi") || norm.includes("tarl");
  // Default is Problem Based Learning (PBL)

  // 1. Canonical Single-Meeting Syntaxes (Sintaks Baku Lengkap untuk 1 Pertemuan)
  let singleMeetingSintak: CanonicalSyntaxItem[] = [];

  if (isPjbl) {
    singleMeetingSintak = [
      {
        sintakNomor: 1,
        namaSintak: "Penentuan Pertanyaan Mendasar (Start with the Essential Question)",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Bermakna & Menggembirakan)",
        dimensiProfil: dim,
        deskripsi: `Guru menyajikan tayangan fenomena nyata seputar "${materi}" dan melontarkan pertanyaan mendasar pemantik proyek yang solutif bagi kehidupan sehari-hari.\nMurid mencurahkan ide awal dan menyadari pentingnya menghasilkan produk karya nyata yang bermanfaat.`,
      },
      {
        sintakNomor: 2,
        namaSintak: "Mendesain Perencanaan Proyek (Design a Plan for the Project)",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI & MENGAPLIKASI (Kolaboratif)",
        dimensiProfil: "Kolaborasi & Kreativitas",
        deskripsi: `Murid membentuk tim proyek heterogen dan merancang desain produk karya proyek "${materi}" (alat peraga / media edukasi / prototipe karya).\nKelompok mengidentifikasi alat, bahan kontekstual ramah lingkungan, aturan main, dan pembagian peran tim secara inklusif.`,
      },
      {
        sintakNomor: 3,
        namaSintak: "Menyusun Jadwal Pelaksanaan Aktivitas Proyek (Create a Schedule)",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Kemandirian & Regulasi Diri)",
        dimensiProfil: "Kemandirian & Kolaborasi",
        deskripsi: `Kelompok dipandu guru menyusun linimasa jadwal aktivitas pengerjaan proyek dari tahap pengumpulan bahan, perakitan draf, uji coba, hingga penyelesaian akhir secara disiplin.`,
      },
      {
        sintakNomor: 4,
        namaSintak: "Memonitor Keaktifan dan Perkembangan Proyek (Monitor Progress)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Experiential & Pendampingan)",
        dimensiProfil: "Kreativitas & Kolaborasi",
        deskripsi: `Murid secara aktif mengeksekusi pembuatan produk proyek "${materi}" sesuai rencana dan panduan LKPD Proyek.\nGuru memonitor dinamika keaktifan setiap anggota, memfasilitasi kendala teknis, dan memberikan bimbingan formatif (scaffolding).`,
      },
      {
        sintakNomor: 5,
        namaSintak: "Menguji Hasil dan Penilaian Kelayakan Produk (Assess the Outcome)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI & MEREFLEKSI (Uji Kualitas)",
        dimensiProfil: "Penalaran Kritis & Komunikasi",
        deskripsi: `Kelompok menguji fungsi dan kelayakan produk proyek "${materi}" yang telah selesai dibuat.\nMurid menyajikan hasil karyanya melalui pameran kelas (Gallery Walk) atau demonstrasi unjuk kerja untuk dinilai.`,
      },
      {
        sintakNomor: 6,
        namaSintak: "Mengevaluasi Pengalaman Belajar & Refleksi Proyek (Evaluate the Experience)",
        tagDeepLearning: "DEEP LEARNING - MEREFLEKSI (Reflektif & Holistik)",
        dimensiProfil: "Kemandirian & Kewargaan",
        deskripsi: `Guru dan murid merefleksikan seluruh proses perancangan hingga penciptaan proyek "${materi}".\nSetiap anggota kelompok saling mengapresiasi kontribusi rekan sejawat, mencatat pelajaran bermakna, dan merencanakan keberlanjutan karya.`,
      },
    ];
  } else if (isDiscovery) {
    singleMeetingSintak = [
      {
        sintakNomor: 1,
        namaSintak: "Pemberian Rangsangan (Stimulation)",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Eksplorasi Awal)",
        dimensiProfil: dim,
        deskripsi: `Guru memulai pembelajaran dengan menyajikan demonstrasi sains / gambar fenomena konkret seputar "${materi}" tanpa memberi simpulan langsung.\nMurid mengamati keunikan fenomena tersebut dengan penuh rasa ingin tahu dan konsentrasi (mindful observing).`,
      },
      {
        sintakNomor: 2,
        namaSintak: "Pernyataan / Identifikasi Masalah (Problem Statement)",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Penalaran Kritis)",
        dimensiProfil: "Penalaran Kritis & Kemandirian",
        deskripsi: `Murid diberi kesempatan mengidentifikasi sebanyak mungkin misteri/pertanyaan dari fenomena "${materi}" yang diamati.\nKelompok memilih pertanyaan paling mendasar dan merumuskannya dalam bentuk hipotesis (dugaan sementara) yang dapat diuji.`,
      },
      {
        sintakNomor: 3,
        namaSintak: "Pengumpulan Data (Data Collection)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Penyelidikan Empiris)",
        dimensiProfil: "Kolaborasi & Penalaran Kritis",
        deskripsi: `Murid bekerja sama dalam kelompok mengumpulkan informasi dan data faktual relevan melalui studi literasi, observasi objek, atau eksperimen mini sesuai LKPD "${materi}".\nGuru memfasilitasi ketersediaan sumber belajar dan membimbing teknik pencatatan data.`,
      },
      {
        sintakNomor: 4,
        namaSintak: "Pengolahan Data (Data Processing)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Analisis Terpadu)",
        dimensiProfil: "Penalaran Kritis & Kreativitas",
        deskripsi: `Kelompok mengolah, mengelompokkan, dan mentabulasi data hasil observasi/eksperimen materi "${materi}".\nMurid berdiskusi aktif menemukan pola hubungan, sebab-akibat, dan menafsirkan arti dari data yang telah dikumpulkan.`,
      },
      {
        sintakNomor: 5,
        namaSintak: "Pembuktian (Verification)",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI & MENGAPLIKASI (Uji Hipotesis)",
        dimensiProfil: "Penalaran Kritis",
        deskripsi: `Murid melakukan pemeriksaan cermat membuktikan apakah hipotesis awal terbukti atau tidak berdasarkan hasil pengolahan data.\nGuru membimbing pembuktian ilmiah dan membantu meluruskan konsep agar bebas dari miskonsepsi.`,
      },
      {
        sintakNomor: 6,
        namaSintak: "Menarik Simpulan / Generalisasi (Generalization)",
        tagDeepLearning: "DEEP LEARNING - MEREFLEKSI (Konseptualisasi Bermakna)",
        dimensiProfil: "Komunikasi & Kemandirian",
        deskripsi: `Berdasarkan hasil verifikasi, murid merumuskan simpulan umum (kaidah/prinsip utama) mengenai materi "${materi}".\nPerwakilan kelompok mempresentasikan temuan generalisasi dan mengaitkannya dengan fenomena dalam kehidupan nyata.`,
      },
    ];
  } else if (isInquiry) {
    singleMeetingSintak = [
      {
        sintakNomor: 1,
        namaSintak: "Orientasi Masalah Penyelidikan & Pembinaan Iklim Inkuiri",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Bermakna & Menggembirakan)",
        dimensiProfil: dim,
        deskripsi: `Guru mengondisikan iklim belajar inkuiri dengan menghadapkan murid pada situasi teka-teki/fenomena kontekstual seputar "${materi}".\nMurid mengeksplorasi rasa ingin tahunya dan membangun kesiapan untuk melakukan investigasi ilmiah.`,
      },
      {
        sintakNomor: 2,
        namaSintak: "Merumuskan Masalah Penyelidikan",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Penalaran Kritis)",
        dimensiProfil: "Penalaran Kritis",
        deskripsi: `Murid dipandu guru membatasi ruang lingkup dan merumuskan pertanyaan penyelidikan ilmiah yang jelas dan terukur seputar "${materi}".\nKelompok mendefinisikan variabel-variabel kunci yang akan diselidiki.`,
      },
      {
        sintakNomor: 3,
        namaSintak: "Merumuskan Hipotesis Awal",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Kreativitas Berpikir)",
        dimensiProfil: "Penalaran Kritis & Kreativitas",
        deskripsi: `Murid menyusun jawaban dugaan sementara (hipotesis) berdasarkan pengetahuan awal dan logika rasional.\nSetiap kelompok mendiskusikan landasan berpikir di balik hipotesis yang diajukan.`,
      },
      {
        sintakNomor: 4,
        namaSintak: "Mengumpulkan Data & Eksplorasi Pembuktian (Data Gathering)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Experiential Learning)",
        dimensiProfil: "Kolaborasi & Kemandirian",
        deskripsi: `Murid melakukan penyelidikan aktif, melakukan pengujian/praktik langsung, dan mencatat fakta-fakta kuantitatif maupun kualitatif terkait "${materi}".\nGuru mengarahkan prosedur keselamatan kerja dan pendampingan terarah.`,
      },
      {
        sintakNomor: 5,
        namaSintak: "Menguji Hipotesis & Analisis Bukti Temuan",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Analisis Bukti)",
        dimensiProfil: "Penalaran Kritis",
        deskripsi: `Kelompok menganalisis data empiris yang diperoleh untuk menguji kebenaran hipotesis awal materi "${materi}".\nMurid membandingkan bukti yang ditemukan dengan teori dasar pada buku ajar dan menarik korelasi nyata.`,
      },
      {
        sintakNomor: 6,
        namaSintak: "Merumuskan Kesimpulan & Refleksi Solutif",
        tagDeepLearning: "DEEP LEARNING - MEREFLEKSI (Reflektif & Sintesis)",
        dimensiProfil: "Komunikasi & Kemandirian",
        deskripsi: `Murid menyusun simpulan ilmiah tuntas dari keseluruhan proses inkuiri "${materi}".\nKelompok mempresentasikan hasil penyelidikan dan merefleksikan cara berpikir ilmiah yang telah mereka kembangkan.`,
      },
    ];
  } else if (isExperiential) {
    singleMeetingSintak = [
      {
        sintakNomor: 1,
        namaSintak: "Pengalaman Konkret (Concrete Experience / Merasakan & Mengalami Langsung)",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Experiential & Joyful)",
        dimensiProfil: dim,
        deskripsi: `Murid diajak mengalami langsung fenomena materi "${materi}" melalui simulasi peran, observasi lapangan langsung, atau interaksi dengan benda nyata.\nMurid merasakan sensasi pengalaman belajar secara utuh tanpa penilaian teoritis di awal.`,
      },
      {
        sintakNomor: 2,
        namaSintak: "Observasi Reflektif (Reflective Observation / Meninjau & Mengamati)",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI & MEREFLEKSI (Mindful Observation)",
        dimensiProfil: "Penalaran Kritis & Kemandirian",
        deskripsi: `Murid menghentikan aktivitas sejenak untuk merenungkan dan meninjau kembali apa yang baru saja mereka alami seputar "${materi}".\nKelompok mendiskusikan: Apa yang terjadi? Mengapa fenomena tersebut terjadi? Apa faktor penyebab utamanya?`,
      },
      {
        sintakNomor: 3,
        namaSintak: "Konseptualisasi Abstrak (Abstract Conceptualization / Merumuskan Teori & Konsep)",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Konseptualisasi Mendalam)",
        dimensiProfil: "Penalaran Kritis",
        deskripsi: `Murid mengaitkan pengalaman nyata dan hasil refleksi dengan konsep ilmiah materi "${materi}" menggunakan bantuan guru dan bahan ajar.\nMurid merumuskan teori, prinsip, dan definisi konsep secara terstruktur.`,
      },
      {
        sintakNomor: 4,
        namaSintak: "Eksperimentasi Aktif (Active Experimentation / Menerapkan Konsep pada Kasus Baru)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Aksi Nyata & Solutif)",
        dimensiProfil: "Kreativitas & Kewargaan",
        deskripsi: `Murid menguji dan mempraktikkan konsep "${materi}" yang telah dipahami ke dalam situasi/tantangan masalah baru dalam kehidupan sehari-hari.\nKelompok menciptakan solusi atau karya aplikatif yang berdampak positif.`,
      },
    ];
  } else if (isCooperative) {
    singleMeetingSintak = [
      {
        sintakNomor: 1,
        namaSintak: "Menyampaikan Tujuan Pembelajaran dan Memotivasi Siswa",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Bermakna & Menggembirakan)",
        dimensiProfil: dim,
        deskripsi: `Guru mengomunikasikan tujuan pembelajaran materi "${materi}" dan membangun motivasi belajar kooperatif yang penuh empati dan kegembiraan.`,
      },
      {
        sintakNomor: 2,
        namaSintak: "Menyajikan Informasi Konseptual Awal",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Fondasi Konsep)",
        dimensiProfil: "Penalaran Kritis",
        deskripsi: `Guru menyajikan demonstrasi materi inti "${materi}" melalui slide interaktif atau media visual kontekstual sebagai pijakan diskusi.`,
      },
      {
        sintakNomor: 3,
        namaSintak: "Mengorganisasikan Siswa ke dalam Kelompok-Kelompok Belajar",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Kolaboratif)",
        dimensiProfil: "Kolaborasi & Kemandirian",
        deskripsi: `Murid dikelompokkan secara heterogen (4-5 murid dengan keragaman kesiapan belajar) dan menerima lembar tugas kooperatif seputar "${materi}".`,
      },
      {
        sintakNomor: 4,
        namaSintak: "Membimbing Kelompok Bekerja dan Berkolaborasi Terarah",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Tutor Sebaya & Scaffolding)",
        dimensiProfil: "Kolaborasi & Komunikasi",
        deskripsi: `Kelompok berdiskusi menyelesaikan tantangan studi kasus "${materi}". Anggota kelompok saling menjelaskan konsep (tutor sebaya), sementara guru mendampingi kelompok yang membutuhkan bantuan.`,
      },
      {
        sintakNomor: 5,
        namaSintak: "Evaluasi dan Presentasi Hasil Belajar Kelompok",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI & MEREFLEKSI (Uji Pemahaman)",
        dimensiProfil: "Penalaran Kritis & Komunikasi",
        deskripsi: `Setiap kelompok mempresentasikan hasil pemecahan masalah "${materi}". Guru menguji pemahaman individu dan kelompok melalui tanya jawab konfirmasi.`,
      },
      {
        sintakNomor: 6,
        namaSintak: "Memberikan Penghargaan dan Pengakuan Prestasi Tim",
        tagDeepLearning: "DEEP LEARNING - MEREFLEKSI (Apresiasi Sadar)",
        dimensiProfil: "Kewargaan & Keimanan",
        deskripsi: `Guru memberikan penghargaan atas keaktifan, kerja sama tim, dan kemajuan belajar seluruh murid dengan penuh kehangatan.`,
      },
    ];
  } else if (isDifferentiated) {
    singleMeetingSintak = [
      {
        sintakNomor: 1,
        namaSintak: "Asesmen Diagnostik Awal & Pemetaan Kesiapan Belajar",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Diagnostik Sadar)",
        dimensiProfil: "Kemandirian & Penalaran Kritis",
        deskripsi: `Guru memberikan pertanyaan pemantik diagnostik singkat terkait penguasaan awal topik "${materi}" untuk memetakan kesiapan murid.`,
      },
      {
        sintakNomor: 2,
        namaSintak: "Pengelompokan Fleksibel Berdasarkan Tingkat Capaian (Tiered Groups)",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Inklusif & Kolaboratif)",
        dimensiProfil: "Kolaborasi & Kemandirian",
        deskripsi: `Murid dikelompokkan secara fleksibel (kelompok pendampingan intensif, mandiri, dan pengayaan) dengan peran yang saling melengkapi.`,
      },
      {
        sintakNomor: 3,
        namaSintak: "Aktivitas Berjenjang dengan Scaffolding Adaptif (Diferensiasi Proses & Konten)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Berjenjang)",
        dimensiProfil: "Penalaran Kritis & Kreativitas",
        deskripsi: `Murid mengeksplorasi materi "${materi}" dengan media beragam (konkret/visual/abstrak) dan tingkat kesulitan tugas yang disesuaikan secara berkeadilan.`,
      },
      {
        sintakNomor: 4,
        namaSintak: "Unjuk Pemahaman Melalui Ragam Pilihan Produk (Diferensiasi Produk)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Ekspresi Kreatif)",
        dimensiProfil: "Kreativitas & Komunikasi",
        deskripsi: `Murid menunjukkan penguasaan konsep "${materi}" melalui pilihan produk yang diminati (infografis visual, rekaman penjelasan lisan, atau demonstrasi praktis).`,
      },
      {
        sintakNomor: 5,
        namaSintak: "Konfirmasi Capaian, Umpan Balik Personal & Reorientasi Target",
        tagDeepLearning: "DEEP LEARNING - MEREFLEKSI (Umpan Balik Bermakna)",
        dimensiProfil: "Kemandirian & Penalaran Kritis",
        deskripsi: `Guru memberikan umpan balik personal yang membangun, merayakan progres belajar setiap murid, dan meneguhkan konsep esensial.`,
      },
    ];
  } else {
    // Problem Based Learning (PBL) default
    singleMeetingSintak = [
      {
        sintakNomor: 1,
        namaSintak: "Orientasi Peserta Didik pada Masalah Kontekstual seputar Materi",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Bermakna & Menggembirakan)",
        dimensiProfil: dim,
        deskripsi: `Guru menyajikan tayangan video autentik / studi kasus riil seputar fenomena "${materi}".\nMurid mengamati secara seksama, mengidentifikasi akar permasalahan, dan merumuskan pertanyaan penyelidikan kritis yang menantang rasa ingin tahu.`,
      },
      {
        sintakNomor: 2,
        namaSintak: "Mengorganisasikan Peserta Didik untuk Belajar & Meneliti",
        tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Kolaboratif & Berkesadaran)",
        dimensiProfil: "Kolaborasi & Kemandirian",
        deskripsi: `Guru memfasilitasi pembentukan kelompok kerja heterogen (4-5 murid) dan membagikan LKPD Tematik "${materi}".\nMurid menyepakati pembagian peran (Kapten, Peneliti, Notulis, Presenter) dan merancang alur strategi penyelidikan kelompok.`,
      },
      {
        sintakNomor: 3,
        namaSintak: "Membimbing Penyelidikan Mandiri dan Kelompok (Investigasi Terarah)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Experiential Learning)",
        dimensiProfil: "Penalaran Kritis & Kreativitas",
        deskripsi: `Murid melakukan eksplorasi fakta dan pengumpulan data empiris dari bahan ajar, eksperimen mini, atau observasi konkret seputar "${materi}".\nGuru berkeliling memberikan pendampingan adaptif (scaffolding) dan memvalidasi keabsahan data temuan kelompok.`,
      },
      {
        sintakNomor: 4,
        namaSintak: "Mengembangkan dan Menyajikan Hasil Karya (Artefak Solusi)",
        tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Komunikasi & Kreativitas)",
        dimensiProfil: "Komunikasi & Kreativitas",
        deskripsi: `Kelompok mengolah data temuan, merumuskan solusi inovatif, dan menuangkannya ke dalam karya konkret (peta konsep / poster solusi / infografis mini).\nPerwakilan kelompok mempresentasikan hasil karya di hadapan kelas untuk mendapatkan tanggapan konstruktif.`,
      },
      {
        sintakNomor: 5,
        namaSintak: "Menganalisis dan Mengevaluasi Proses Pemecahan Masalah",
        tagDeepLearning: "DEEP LEARNING - MEREFLEKSI (Reflektif & Konseptual)",
        dimensiProfil: "Penalaran Kritis & Kemandirian",
        deskripsi: `Guru bersama murid melakukan rekonstruksi alur pemecahan masalah dan mengonfirmasi kebenaran konsep inti "${materi}".\nMurid mengevaluasi efektivitas solusi yang dirumuskan serta menyepakati komitmen aksi nyata dalam kehidupan sehari-hari.`,
      },
    ];
  }

  // 2. Multi-Meeting Dynamic Planner (Didistribusikan secara progresif sesuai Sintaks Baku Model)
  const buildMultiMeetingPlan = (count: number) => {
    return Array.from({ length: count }, (_, idx) => {
      const num = idx + 1;
      const isFirst = num === 1;
      const isLast = num === count;

      let judulFokus = "";
      let sintakInti: CanonicalSyntaxItem[] = [];

      if (isPjbl) {
        if (isFirst) {
          judulFokus = `Pertemuan 1: Penentuan Pertanyaan Mendasar & Desain Perencanaan Proyek "${materi}"`;
          sintakInti = [
            {
              sintakNomor: 1,
              namaSintak: "Sintak 1 PjBL: Penentuan Pertanyaan Mendasar (Start with Essential Question)",
              tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Bermakna & Menggembirakan)",
              dimensiProfil: dim,
              deskripsi: `Guru memaparkan fenomena nyata seputar "${materi}" dan melontarkan pertanyaan mendasar pemantik proyek karya aplikatif.\nMurid mencurahkan rasa ingin tahu, mendiskusikan latar belakang kebutuhan solusi, dan merumuskan tujuan proyek bersama.`,
            },
            {
              sintakNomor: 2,
              namaSintak: "Sintak 2 PjBL: Mendesain Perencanaan Proyek (Design a Plan for the Project)",
              tagDeepLearning: "DEEP LEARNING - MEMAHAMI & MENGAPLIKASI (Kolaboratif)",
              dimensiProfil: "Kolaborasi & Kreativitas",
              deskripsi: `Kelompok heterogen menyusun rancangan desain produk proyek "${materi}" (alat peraga kontekstual / media edukatif / prototipe karya).\nMurid menyepakati pemilihan alat, bahan kontekstual yang mudah didapat, aturan main kelompok, dan pembagian peran tim secara inklusif.`,
            },
          ];
        } else if (isLast) {
          judulFokus = `Pertemuan ${num}: Gelar Karya Proyek, Uji Kelayakan & Refleksi Pengalaman Belajar "${materi}"`;
          sintakInti = [
            {
              sintakNomor: 5,
              namaSintak: "Sintak 5 PjBL: Menguji Hasil dan Penilaian Kelayakan Produk (Assess the Outcome)",
              tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI & MEREFLEKSI (Uji Kualitas)",
              dimensiProfil: "Penalaran Kritis & Komunikasi",
              deskripsi: `Setiap kelompok memamerkan produk karya proyek "${materi}" melalui panggung unjuk karya atau pameran kelas 'Gallery Walk'.\nMurid menguji fungsi produk secara langsung di hadapan teman dan guru, serta saling memberikan apresiasi dan rubrik penilaian sejawat.`,
            },
            {
              sintakNomor: 6,
              namaSintak: "Sintak 6 PjBL: Mengevaluasi Pengalaman Belajar & Refleksi Holistik Proyek",
              tagDeepLearning: "DEEP LEARNING - MEREFLEKSI (Holistik & Bermakna)",
              dimensiProfil: "Kemandirian & Kewargaan",
              deskripsi: `Guru bersama seluruh murid mengevaluasi dinamika pengalaman merancang hingga mewujudkan karya proyek seputar "${materi}".\nMurid mengungkapkan refleksi sadar atas tantangan tim yang berhasil dilalui dan merumuskan rencana pemanfaatan karya bagi lingkungan sekolah.`,
            },
          ];
        } else {
          // Intermediate meetings
          const progressStage = (num - 1) / (count - 1);
          if (progressStage < 0.4) {
            judulFokus = `Pertemuan ${num}: Penyusunan Jadwal & Eksplorasi Bahan Proyek "${materi}"`;
            sintakInti = [
              {
                sintakNomor: 3,
                namaSintak: "Sintak 3 PjBL: Menyusun Jadwal Pelaksanaan Aktivitas Proyek (Create a Schedule)",
                tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Kemandirian & Regulasi Diri)",
                dimensiProfil: "Kemandirian & Kolaborasi",
                deskripsi: `Kelompok menyusun linimasa jadwal pelaksanaan aktivitas proyek "${materi}" secara terperinci mulai dari pengumpulan bahan hingga pengujian awal.\nMurid menetapkan target capaian (milestone) harian dan menyepakati komitmen penyelesaian tepat waktu.`,
              },
              {
                sintakNomor: 4,
                namaSintak: "Sintak 4 PjBL (Fase 1): Memonitor Perkembangan Proyek - Perakitan Draf Awal Karya",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Experiential Learning)",
                dimensiProfil: "Kreativitas & Kolaborasi",
                deskripsi: `Kelompok mulai merealisasikan pembuatan draf karya fisik/digital "${materi}" sesuai desain yang direncanakan.\nGuru berkeliling memonitor dinamika keaktifan anggota dan memastikan seluruh murid terlibat aktif sesuai perannya.`,
              },
            ];
          } else if (progressStage < 0.75) {
            judulFokus = `Pertemuan ${num}: Eksekusi Produksi Karya Proyek & Pendampingan Scaffolding "${materi}"`;
            sintakInti = [
              {
                sintakNomor: 4,
                namaSintak: "Sintak 4 PjBL (Fase 2): Memonitor dan Membimbing Perkembangan Proyek - Eksekusi Detail Karya",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Karya Nyata & Kolaboratif)",
                dimensiProfil: "Kreativitas & Kemandirian",
                deskripsi: `Murid secara kolaboratif melanjutkan perakitan detail, pewarnaan, dan penyusunan panduan penggunaan produk proyek "${materi}".\nGuru memberikan pendampingan adaptif (scaffolding) untuk mengatasi kendala teknis dan estetika karya yang dihadapi kelompok.`,
              },
              {
                sintakNomor: 4,
                namaSintak: "Sintak 4 PjBL (Fase 3): Validasi Awal Kelayakan & Konsultasi Perbaikan Produk",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI & MEMAHAMI (Refinishing)",
                dimensiProfil: "Penalaran Kritis & Kolaborasi",
                deskripsi: `Kelompok berkonsultasi dengan guru memeriksa apakah produk proyek "${materi}" telah memenuhi kriteria esensial pada LKPD.\nMurid mencatat masukan perbaikan dan menyempurnakan aspek fungsi sebelum uji coba final.`,
              },
            ];
          } else {
            judulFokus = `Pertemuan ${num}: Uji Coba Fungsi Produk, Penyempurnaan & Persiapan Presentasi "${materi}"`;
            sintakInti = [
              {
                sintakNomor: 4,
                namaSintak: "Sintak 4 PjBL (Fase 4): Uji Coba Mandiri Produk Karya & Finalisasi Estetika",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Penyempurnaan Karya)",
                dimensiProfil: "Kreativitas & Penalaran Kritis",
                deskripsi: `Kelompok melakukan simulasi uji coba mandiri terhadap produk proyek "${materi}" untuk memastikan fungsinya berjalan lancar dan aman.\nMurid menyelesaikan sentuhan akhir (finishing) pada karya fisik/media presentasi.`,
              },
              {
                sintakNomor: 5,
                namaSintak: "Sintak 5 PjBL (Fase Awal): Penyiapan Media Pameran & Lembar Informasi Produk",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Komunikasi Visual)",
                dimensiProfil: "Komunikasi & Kolaborasi",
                deskripsi: `Kelompok menyusun poster ringkas atau kartu identitas produk karya "${materi}" yang menjelaskan cara kerja dan manfaat praktisnya bagi audiens pameran.`,
              },
            ];
          }
        }
      } else if (isDiscovery) {
        if (isFirst) {
          judulFokus = `Pertemuan 1: Stimulasi Fenomena & Identifikasi Masalah Ilmiah "${materi}"`;
          sintakInti = [
            {
              sintakNomor: 1,
              namaSintak: "Sintak 1 Discovery: Pemberian Rangsangan (Stimulation)",
              tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Eksplorasi Awal)",
              dimensiProfil: dim,
              deskripsi: `Guru menyajikan fenomena kontekstual seputar "${materi}" melalui demonstrasi konkret atau video tanpa langsung mengungkap kesimpulan.\nMurid mengamati fenomena dengan penuh konsentrasi dan membangun kepekaan ilmiah awal.`,
            },
            {
              sintakNomor: 2,
              namaSintak: "Sintak 2 Discovery: Pernyataan / Identifikasi Masalah (Problem Statement)",
              tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Penalaran Kritis)",
              dimensiProfil: "Penalaran Kritis & Kemandirian",
              deskripsi: `Murid merumuskan berbagai pertanyaan pemantik bernalar tinggi mengenai rahasia prinsip materi "${materi}".\nKelompok memilih pertanyaan paling esensial dan merumuskan hipotesis kerja yang akan dibuktikan melalui penyelidikan.`,
            },
          ];
        } else if (isLast) {
          judulFokus = `Pertemuan ${num}: Pembuktian Fakta Terhadap Hipotesis & Generalisasi Konsep "${materi}"`;
          sintakInti = [
            {
              sintakNomor: 5,
              namaSintak: "Sintak 5 Discovery: Pembuktian (Verification)",
              tagDeepLearning: "DEEP LEARNING - MEMAHAMI & MENGAPLIKASI (Uji Hipotesis)",
              dimensiProfil: "Penalaran Kritis",
              deskripsi: `Murid melakukan pemeriksaan cermat dan membandingkan hasil pengolahan data dengan hipotesis awal materi "${materi}".\nGuru membimbing verifikasi konseptual secara objektif untuk memastikan kesimpulan bebas dari miskonsepsi.`,
            },
            {
              sintakNomor: 6,
              namaSintak: "Sintak 6 Discovery: Menarik Simpulan / Generalisasi (Generalization)",
              tagDeepLearning: "DEEP LEARNING - MEREFLEKSI (Konseptualisasi Bermakna)",
              dimensiProfil: "Komunikasi & Kemandirian",
              deskripsi: `Berdasarkan hasil pembuktian, kelompok menarik kesimpulan umum prinsip dasar materi "${materi}".\nPerwakilan kelompok mempresentasikan generalisasi di hadapan kelas dan mengaitkannya dengan fenomena kehidupan nyata.`,
            },
          ];
        } else {
          const progressStage = (num - 1) / (count - 1);
          if (progressStage < 0.5) {
            judulFokus = `Pertemuan ${num}: Pengumpulan Data Penyelidikan & Observasi Lapangan "${materi}"`;
            sintakInti = [
              {
                sintakNomor: 3,
                namaSintak: "Sintak 3 Discovery (Tahap 1): Pengumpulan Data Empiris (Data Collection)",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Penyelidikan Empiris)",
                dimensiProfil: "Kolaborasi & Penalaran Kritis",
                deskripsi: `Murid bekerja sama dalam kelompok melakukan eksperimen terbimbing, observasi objek langsung, atau telaah bahan ajar kontekstual terkait "${materi}".\nSetiap anggota mencatat data temuan kuantitatif dan kualitatif secara sistematis pada LKPD.`,
              },
              {
                sintakNomor: 3,
                namaSintak: "Sintak 3 Discovery (Tahap 2): Validasi Kelengkapan Bukti & Pengamatan Lanjutan",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Eksplorasi Mendalam)",
                dimensiProfil: "Kemandirian & Ketelitian",
                deskripsi: `Guru memandu kelompok memverifikasi apakah data yang terkumpul sudah mencukupi untuk menguji hipotesis "${materi}".\nKelompok melakukan pengamatan ulang pada aspek yang masih meragukan.`,
              },
            ];
          } else {
            judulFokus = `Pertemuan ${num}: Pengolahan Data, Tabulasi & Analisis Keterkaitan Konsep "${materi}"`;
            sintakInti = [
              {
                sintakNomor: 4,
                namaSintak: "Sintak 4 Discovery (Tahap 1): Pengolahan Data & Tabulasi (Data Processing)",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Analisis Terpadu)",
                dimensiProfil: "Penalaran Kritis & Kreativitas",
                deskripsi: `Kelompok mengklasifikasi, menyusun diagram, atau mentabulasi data hasil observasi materi "${materi}".\nMurid berdiskusi aktif mencari pola hubungan sebab-akibat antar fakta yang ditemukan.`,
              },
              {
                sintakNomor: 4,
                namaSintak: "Sintak 4 Discovery (Tahap 2): Diskusi Penalaran Kritis & Penafsiran Hubungan Konsep",
                tagDeepLearning: "DEEP LEARNING - MEMAHAMI & MENGAPLIKASI (Interpretasi)",
                dimensiProfil: "Penalaran Kritis & Kolaborasi",
                deskripsi: `Murid menafsirkan arti dari data yang telah diolah dan mengaitkannya dengan prinsip ilmiah materi "${materi}".\nGuru mendampingi proses penalaran agar kelompok menemukan benang merah konsep secara mandiri.`,
              },
            ];
          }
        }
      } else if (isInquiry) {
        if (isFirst) {
          judulFokus = `Pertemuan 1: Orientasi Fenomena Inkuiri & Perumusan Masalah Ilmiah "${materi}"`;
          sintakInti = [
            {
              sintakNomor: 1,
              namaSintak: "Sintak 1 Inkuiri: Orientasi Masalah Penyelidikan & Pembinaan Iklim Inkuiri",
              tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Bermakna & Menggembirakan)",
              dimensiProfil: dim,
              deskripsi: `Guru menyajikan fenomena alam/sosial seputar "${materi}" yang memicu tanda tanya besar.\nMurid membangun kesadaran inkuiri dan kesiapan mental untuk menyelidiki rahasia di balik fenomena tersebut.`,
            },
            {
              sintakNomor: 2,
              namaSintak: "Sintak 2 Inkuiri: Merumuskan Masalah Penyelidikan",
              tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Penalaran Kritis)",
              dimensiProfil: "Penalaran Kritis",
              deskripsi: `Murid menguraikan fenomena ke dalam pertanyaan-pertanyaan ilmiah operasional seputar "${materi}".\nKelompok membatasi variabel pengamatan dan menetapkan fokus masalah penyelidikan.`,
            },
          ];
        } else if (isLast) {
          judulFokus = `Pertemuan ${num}: Uji Hipotesis, Perumusan Kesimpulan & Refleksi Inkuiri "${materi}"`;
          sintakInti = [
            {
              sintakNomor: 5,
              namaSintak: "Sintak 5 Inkuiri: Menguji Hipotesis & Analisis Bukti Temuan",
              tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Analisis Bukti)",
              dimensiProfil: "Penalaran Kritis",
              deskripsi: `Kelompok menganalisis data empiris yang diperoleh untuk menguji kebenaran hipotesis awal materi "${materi}".\nMurid membandingkan bukti temuan dengan teori dasar buku rujukan secara objektif.`,
            },
            {
              sintakNomor: 6,
              namaSintak: "Sintak 6 Inkuiri: Merumuskan Kesimpulan & Refleksi Solutif",
              tagDeepLearning: "DEEP LEARNING - MEREFLEKSI (Reflektif & Sintesis)",
              dimensiProfil: "Komunikasi & Kemandirian",
              deskripsi: `Murid menyusun simpulan ilmiah tuntas dari keseluruhan proses inkuiri "${materi}".\nKelompok mempresentasikan hasil penyelidikan dan merefleksikan keterampilan bernalar ilmiah yang telah dilatih.`,
            },
          ];
        } else {
          const progressStage = (num - 1) / (count - 1);
          if (progressStage < 0.5) {
            judulFokus = `Pertemuan ${num}: Perumusan Hipotesis & Desain Prosedur Eksplorasi Data "${materi}"`;
            sintakInti = [
              {
                sintakNomor: 3,
                namaSintak: "Sintak 3 Inkuiri: Merumuskan Hipotesis Awal",
                tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Kreativitas Berpikir)",
                dimensiProfil: "Penalaran Kritis & Kreativitas",
                deskripsi: `Kelompok menyusun dugaan sementara (hipotesis ilmiah) yang masuk akal terkait fenomena "${materi}".\nMurid menjelaskan landasan logika di balik hipotesis yang mereka sepakati.`,
              },
              {
                sintakNomor: 4,
                namaSintak: "Sintak 4 Inkuiri (Fase 1): Merancang Prosedur Pengujian & Eksplorasi Awal",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Desain Percobaan)",
                dimensiProfil: "Kemandirian & Kolaborasi",
                deskripsi: `Kelompok merancang langkah-langkah praktikum atau investigasi data untuk membuktikan hipotesis "${materi}".\nGuru memvalidasi protokol keselamatan dan keabsahan instrumen pengamatan.`,
              },
            ];
          } else {
            judulFokus = `Pertemuan ${num}: Pengumpulan Data Eksperimen & Analisis Bukti Fakta "${materi}"`;
            sintakInti = [
              {
                sintakNomor: 4,
                namaSintak: "Sintak 4 Inkuiri (Fase 2): Mengumpulkan Data & Eksplorasi Pembuktian (Data Gathering)",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Experiential Learning)",
                dimensiProfil: "Kolaborasi & Ketelitian",
                deskripsi: `Murid mengeksekusi praktikum/pengamatan langsung dan mendokumentasikan fakta-fakta kuantitatif dan kualitatif terkait "${materi}" ke dalam LKPD.`,
              },
              {
                sintakNomor: 5,
                namaSintak: "Sintak 5 Inkuiri (Fase Awal): Verifikasi Silang & Komparasi Data Antar Kelompok",
                tagDeepLearning: "DEEP LEARNING - MEMAHAMI & MENGAPLIKASI (Analisis Komparatif)",
                dimensiProfil: "Penalaran Kritis",
                deskripsi: `Kelompok membandingkan konsistensi data yang mereka peroleh dengan kelompok lain untuk mendeteksi variasi atau anomali pengamatan seputar "${materi}".`,
              },
            ];
          }
        }
      } else {
        // Problem Based Learning (PBL) default multi-meeting distribution
        if (isFirst) {
          judulFokus = `Pertemuan 1: Orientasi Masalah Kontekstual & Pengorganisasian Tim Penyelidik "${materi}"`;
          sintakInti = [
            {
              sintakNomor: 1,
              namaSintak: "Sintak 1 PBL: Orientasi Peserta Didik pada Masalah Kontekstual seputar Materi",
              tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Bermakna & Menggembirakan)",
              dimensiProfil: dim,
              deskripsi: `Guru menayangkan video autentik / studi kasus riil seputar permasalahan "${materi}" yang relevan dengan kehidupan sehari-hari murid.\nMurid mengamati secara seksama, mengidentifikasi akar persoalan, dan merumuskan pertanyaan penyelidikan pemantik kritis.`,
            },
            {
              sintakNomor: 2,
              namaSintak: "Sintak 2 PBL: Mengorganisasikan Peserta Didik untuk Belajar & Menyusun Rencana Investigasi",
              tagDeepLearning: "DEEP LEARNING - MEMAHAMI (Kolaboratif & Berkesadaran)",
              dimensiProfil: "Kolaborasi & Kemandirian",
              deskripsi: `Guru memfasilitasi pembentukan kelompok kerja heterogen (4-5 murid) dan membagikan LKPD Tematik "${materi}".\nMurid menyepakati peran tim (Kapten, Peneliti, Notulis, Presenter) dan merancang alur strategi penyelidikan kelompok.`,
            },
          ];
        } else if (isLast) {
          judulFokus = `Pertemuan ${num}: Diseminasi Karya Solutif, Evaluasi Pemecahan Masalah & Aksi Nyata "${materi}"`;
          sintakInti = [
            {
              sintakNomor: 4,
              namaSintak: "Sintak 4 PBL (Fase Pleno): Menyajikan Hasil Karya Solusi Melalui Gelar Pameran / Diskusi Pleno",
              tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Komunikasi & Apresiasi)",
              dimensiProfil: "Komunikasi & Kolaborasi",
              deskripsi: `Setiap kelompok mempresentasikan produk solusi pemecahan masalah "${materi}" di hadapan forum kelas melalui pameran Gallery Walk atau presentasi interaktif.\nKelompok lain memberikan tanggapan apresiatif, kritik membangun, dan pertanyaan penalaran kritis.`,
            },
            {
              sintakNomor: 5,
              namaSintak: "Sintak 5 PBL: Menganalisis dan Mengevaluasi Proses Pemecahan Masalah serta Refleksi Holistik",
              tagDeepLearning: "DEEP LEARNING - MEREFLEKSI (Reflektif & Sadar)",
              dimensiProfil: "Penalaran Kritis & Kemandirian",
              deskripsi: `Guru bersama murid merekonstruksi seluruh alur pemecahan masalah dan mengonfirmasi kebenaran konsep inti "${materi}".\nMurid mengevaluasi efektivitas solusi yang dirumuskan, menyimpulkan pemahaman bermakna, dan merancang komitmen aksi nyata di lingkungan sekitar.`,
            },
          ];
        } else {
          const progressStage = (num - 1) / (count - 1);
          if (progressStage < 0.45) {
            judulFokus = `Pertemuan ${num}: Penyelidikan Lapangan Terarah & Pengumpulan Bukti Empiris "${materi}"`;
            sintakInti = [
              {
                sintakNomor: 3,
                namaSintak: "Sintak 3 PBL (Fase 1): Membimbing Penyelidikan Mandiri dan Kelompok - Pengumpulan Data Bukti",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Experiential Learning)",
                dimensiProfil: "Penalaran Kritis & Kolaborasi",
                deskripsi: `Kelompok melakukan eksplorasi lapangan, studi literatur, atau eksperimen mini untuk mengumpulkan bukti data seputar materi "${materi}".\nMurid mencatat data temuan faktual pada LKPD Tematik dipandu bimbingan bertahap dari guru.`,
              },
              {
                sintakNomor: 3,
                namaSintak: "Sintak 3 PBL (Fase 2): Pendampingan Scaffolding & Klarifikasi Awal Temuan",
                tagDeepLearning: "DEEP LEARNING - MEMAHAMI & MENGAPLIKASI (Berdiferensiasi)",
                dimensiProfil: "Kemandirian & Penalaran Kritis",
                deskripsi: `Guru berkeliling memberikan bimbingan intensif bagi kelompok yang memerlukan bantuan (scaffolding) dan memfasilitasi pendalaman bagi kelompok yang siap mandiri.\nKelompok memastikan validitas data bukti yang dikumpulkan.`,
              },
            ];
          } else if (progressStage < 0.8) {
            judulFokus = `Pertemuan ${num}: Analisis Data Penyelidikan & Perumusan Draf Karya Solusi "${materi}"`;
            sintakInti = [
              {
                sintakNomor: 3,
                namaSintak: "Sintak 3 PBL (Fase 3): Analisis Data Kritis & Verifikasi Alternatif Solusi",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Analitis & Kritis)",
                dimensiProfil: "Penalaran Kritis",
                deskripsi: `Kelompok menganalisis data temuan, membandingkannya dengan teori dasar konsep "${materi}", dan mengidentifikasi pola kunci pemecahan masalah.\nMurid merumuskan alternatif solusi terbaik yang paling aplikatif.`,
              },
              {
                sintakNomor: 4,
                namaSintak: "Sintak 4 PBL (Fase 1): Perancangan Draf Artefak Karya Solusi Pemecahan Masalah",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Kreativitas Solutif)",
                dimensiProfil: "Kreativitas & Kolaborasi",
                deskripsi: `Kelompok mulai menyusun draf produk karya solusi (peta konsep analitis, infografis mini, atau poster panduan aksi) terkait materi "${materi}".`,
              },
            ];
          } else {
            judulFokus = `Pertemuan ${num}: Finalisasi Karya Solusi, Validasi Tim & Uji Coba Presentasi "${materi}"`;
            sintakInti = [
              {
                sintakNomor: 4,
                namaSintak: "Sintak 4 PBL (Fase 2): Mengembangkan dan Menyempurnakan Hasil Karya (Artefak Solusi)",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Karya Nyata)",
                dimensiProfil: "Kreativitas & Komunikasi",
                deskripsi: `Kelompok menyelesaikan pembuatan artefak karya solusi secara rapi dan estetis.\nMurid memeriksa kelengkapan informasi argumen dan memastikan solusi yang ditawarkan berbasis bukti data valid materi "${materi}".`,
              },
              {
                sintakNomor: 4,
                namaSintak: "Sintak 4 PBL (Fase 3): Simulasi Internal Kelompok & Penyiapan Argumen Tanya Jawab",
                tagDeepLearning: "DEEP LEARNING - MENGAPLIKASI (Kesiapan Presentasi)",
                dimensiProfil: "Komunikasi & Kolaborasi",
                deskripsi: `Kelompok melakukan simulasi presentasi internal tim dan membagi tugas peran juru bicara serta penjawab pertanyaan untuk sesi pleno pertemuan berikutnya.`,
              },
            ];
          }
        }
      }

      return {
        pertemuanKe: num,
        judulFokus: judulFokus || `Pertemuan ${num}: Pendalaman Materi ${materi}`,
        alokasiWaktu: "2 x 35 Menit",
        waktuPendahuluan: "10 Menit",
        deskripsiPendahuluan: [
          "Orientasi, Salam Hangat, dan Doa bersama yang dipimpin perwakilan murid (Keimanan dan Ketaqwaan).",
          "Pemeriksaan kesiapan belajar, penataan ruang kelas fleksibel, dan Mindful Check-in (2 Menit) untuk membangun kehadiran penuh (Joyful Learning).",
          `Apersepsi mengaitkan progres materi "${materi}" dari sesi sebelumnya dengan tantangan hari ini.`,
          `Penyampaian target kompetensi Pertemuan ${num} dan kesepakatan belajar kolaboratif.`,
        ],
        waktuInti: "50 Menit",
        sintakInti,
        waktuPenutup: "10 Menit",
        deskripsiPenutup: [
          `DEEP LEARNING – MEREFLEKSI: Murid mengisi jurnal refleksi singkat berkesadaran (Apa hal paling bermakna yang kupahami dari ${materi} hari ini? Tantangan apa yang berhasil kuhadapi?).`,
          "Pendidik memberikan penguatan, apresiasi atas inisiatif kolaborasi tim, dan arahan misi untuk pertemuan berikutnya.",
          "Doa penutup penuh rasa syukur dan salam perpisahan yang hangat.",
        ],
      };
    });
  };

  return {
    singleMeetingSintak,
    buildMultiMeetingPlan,
  };
}

export function buildFallbackModule(form: GenerateFormValues): DeepLearningModule {
  const mapel = form.mataPelajaran || "Ilmu Pengetahuan Alam dan Sosial (IPAS)";
  const materi = form.materiPelajaran || "Eksplorasi Kontekstual";
  const model = form.modelPembelajaran || "Problem Based Learning (PBL)";
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

  const mappedDimensi = STANDARD_PROFIL_DIMENSI.map((std) => {
    const isSelected = Array.isArray(form.dimensiProfilLulusan)
      ? form.dimensiProfilLulusan.includes(std.key) || form.dimensiProfilLulusan.includes(std.label)
      : true;
    return {
      key: std.key,
      label: std.label,
      checked: isSelected,
      penjelasan: `${std.deskripsiDefault} (Konteks materi: ${materi}).`,
    };
  });
  const activeSelected = mappedDimensi.filter((d) => d.checked);
  const activeDimNames = activeSelected.map((d) => d.label).join(", ");
  const calculatedAsesmenFormatifSikap = activeSelected.length > 0
    ? `Jurnal Observasi Dimensi Profil Lulusan (${activeDimNames}) selama kegiatan belajar berlangsung.`
    : "Jurnal Observasi Sikap dan Keaktifan Murid selama kegiatan belajar berlangsung.";

  // Generate model-specific authentic syntaxes and multi-meeting plan
  const syntaxSystem = generateModelSyntaxSystem(model, materi, mapel, activeDimNames);
  const daftarPertemuan = countPertemuan > 1 ? syntaxSystem.buildMultiMeetingPlan(countPertemuan) : undefined;
  const sintakInti = syntaxSystem.singleMeetingSintak;

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
    tanggal: form.tanggal?.trim() || new Date().toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }),

    kesiapanMurid: `Sebagian besar murid telah memiliki pengalaman awal yang relevan dengan topik "${materi}" dari aktivitas sehari-hari, namun pemahaman konsep inti masih bervariasi. Sekitar 60% murid siap belajar mandiri dan berkolaborasi dalam kelompok terarah, sedangkan 40% murid memerlukan perancah (scaffolding) visual-konkret dan contoh terbimbing. Diferensiasi proses dirancang melalui variasi media dan pembagian peran tim yang adil. ${form.catatanTambahan ? `Catatan khusus: ${form.catatanTambahan}` : ""}`,

    karakteristikMateriPelajaran: `Materi "${materi}" memiliki keterkaitan erat dengan kehidupan nyata murid sehingga sangat potensial disajikan secara kontekstual dan menggembirakan. Melalui pendekatan Deep Learning, murid diajak mengalami langsung fenomena, membedah studi kasus nyata, dan melakukan refleksi sadar (mindful reflection) sehingga materi tidak sekadar dihafal, melainkan diinternalisasi secara bermakna.`,

    dimensiProfilLulusan: mappedDimensi,

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
    sintakInti: sintakInti,

    waktuPenutup: "15 Menit",
    deskripsiPenutup: [
      `DEEP LEARNING – MEREFLEKSI: Murid mengisi jurnal refleksi berkesadaran (Apa hal paling bermakna yang aku pelajari dari ${materi}? Apa perasaan yang kurasakan saat memecahkan masalah ini bersama teman?).`,
      "Menyimpulkan pembelajaran secara bersama-sama dengan menggarisbawahi poin-poin kunci materi.",
      "Asesmen Sumatif singkat (kuis pemahaman konsep 5 butir soal C3-C5).",
      "Pemberian tindak lanjut aksi nyata kontekstual di lingkungan rumah dan sekolah.",
      "Doa Penutup penuh rasa syukur dan salam hangat.",
    ],

    asesmenFormatifSikap: calculatedAsesmenFormatifSikap,
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
