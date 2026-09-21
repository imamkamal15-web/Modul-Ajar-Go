import React from "react";
import {
  Compass,
  CheckCircle2,
  FileCheck,
  Table,
  Layers,
  Sparkles,
  BookOpen,
  ClipboardList,
} from "lucide-react";

interface QuickOutlineProps {
  onScrollTo: (elementId: string) => void;
}

export const QuickOutline: React.FC<QuickOutlineProps> = ({ onScrollTo }) => {
  const sections = [
    { id: "section-identifikasi", label: "A. Identifikasi", icon: Compass },
    { id: "section-desain", label: "B. Desain Pembelajaran", icon: Layers },
    { id: "section-pengalaman", label: "C. Pengalaman Belajar (Tabel)", icon: Table },
    { id: "section-asesmen", label: "D. Asesmen Pembelajaran", icon: CheckCircle2 },
    { id: "section-lampiran-1", label: "Lampiran 1: Materi Ajar", icon: BookOpen },
    { id: "section-lampiran-2", label: "Lampiran 2: LKPD / LKM", icon: ClipboardList },
    { id: "section-lampiran-3", label: "Lampiran 3: Rubrik Sikap 7 Dimensi", icon: FileCheck },
    { id: "section-lampiran-4", label: "Lampiran 4: Soal Evaluasi (30 Poin)", icon: Sparkles },
    { id: "section-lampiran-5", label: "Lampiran 5: Penilaian Keterampilan", icon: Table },
  ];

  return (
    <nav className="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-2">
        Daftar Struktur Dokumen
      </div>
      <div className="space-y-1">
        {sections.map((sec) => {
          const Icon = sec.icon;
          return (
            <button
              key={sec.id}
              type="button"
              onClick={() => onScrollTo(sec.id)}
              className="w-full text-left flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs text-slate-700 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
            >
              <Icon className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{sec.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
