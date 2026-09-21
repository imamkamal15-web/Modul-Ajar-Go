export interface ProfilDimensiItem {
  key: string;
  label: string;
  checked: boolean;
  penjelasan: string;
}

export interface PengalamanItem {
  kegiatan: string;
  tagDeepLearning: string;
  alokasiWaktu: string;
  deskripsi: string;
}

export interface SintakIntiItem {
  sintakNomor: number;
  namaSintak: string;
  deskripsi: string;
  tagDeepLearning: string;
  dimensiProfil: string;
}

export interface PertemuanItem {
  pertemuanKe: number;
  judulFokus: string;
  alokasiWaktu: string;
  waktuPendahuluan: string;
  deskripsiPendahuluan: string[];
  waktuInti: string;
  sintakInti: SintakIntiItem[];
  waktuPenutup: string;
  deskripsiPenutup: string[];
}

export interface SoalEvaluasi {
  no: number;
  indikator: string;
  soal: string;
  levelKognitif: string;
  jenisSoal: string;
  skor: number;
  kunciJawaban?: string;
}

export interface RekapKeterampilanItem {
  no: number;
  namaKelompok: string;
  skorKriteria1?: number | string;
  skorKriteria2?: number | string;
  skorKriteria3?: number | string;
  skorTotal?: number | string;
  nilai?: number | string;
  kriteria?: string;
}

export interface DeepLearningModule {
  id: string;
  tahunAjaran: string;
  kelas: string;
  fase: string;
  semester: string;
  mataPelajaran: string;
  materiPelajaran: string;
  alokasiWaktu: string;
  jumlahPertemuan?: number;
  daftarPertemuan?: PertemuanItem[];
  
  // Data Sekolah & Pendidik
  namaSekolah: string;
  namaKepsek: string;
  nipKepsek: string;
  namaGuru: string;
  nipGuru: string;
  kota: string;
  tanggal: string;

  // A. IDENTIFIKASI
  kesiapanMurid: string;
  karakteristikMateriPelajaran: string;
  karakteristikMateri?: string;
  dimensiProfilLulusan: ProfilDimensiItem[];

  // B. DESAIN PEMBELAJARAN
  capaianPembelajaran: string;
  tujuanPembelajaran: string;
  pendekatanPembelajaran: string;
  modelPembelajaran: string;
  metodePembelajaran: string;
  budayaBelajar: string;
  ruangFisik: string;
  kemitraanMurid: string;
  platformDigital: string;
  perangkat: string;
  mediaPembelajaran: string;

  // C. PENGALAMAN BELAJAR
  waktuPendahuluan: string;
  deskripsiPendahuluan: string[];
  
  waktuInti: string;
  sintakInti: SintakIntiItem[];
  
  waktuPenutup: string;
  deskripsiPenutup: string[];

  // D. ASESMEN PEMBELAJARAN
  asesmenFormatifSikap: string;
  asesmenFormatifKeterampilan: string;
  asesmenSumatifDeskripsi: string;

  // LAMPIRAN
  ringkasanMateriAjar: string;
  lkpd: {
    judul: string;
    temaKontekstual: string;
    petunjukBelajar: string[];
    alatDanBahan: string[];
    langkahAktivitas: string[];
    tabelPengamatanHeader?: string[];
    tabelPengamatanRows?: string[][];
    pertanyaanAnalisis: string[];
    refleksiSiswa: string[];
  };

  soalEvaluasi: SoalEvaluasi[];
  rekapKeterampilan: RekapKeterampilanItem[];

  // Raw markdown cache
  rawMarkdown?: string;
}
