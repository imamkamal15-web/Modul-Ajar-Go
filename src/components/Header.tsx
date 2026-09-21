import React from "react";
import {
  BookOpen,
  Copy,
  Download,
  FileText,
  Printer,
  Sparkles,
  Check,
  Edit3,
  Eye,
  Code2,
} from "lucide-react";
import { DeepLearningModule } from "../types";
import { PRESET_MODULES } from "../data/presets";

interface HeaderProps {
  currentModule: DeepLearningModule;
  onSelectPreset: (module: DeepLearningModule) => void;
  onOpenGenerator: () => void;
  onOpenEditor: () => void;
  onCopyMarkdown: () => void;
  onExportWord: () => void;
  onPrint: () => void;
  activeView: "document" | "markdown";
  onViewChange: (view: "document" | "markdown") => void;
  copied: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentModule,
  onSelectPreset,
  onOpenGenerator,
  onOpenEditor,
  onCopyMarkdown,
  onExportWord,
  onPrint,
  activeView,
  onViewChange,
  copied,
}) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between py-3 gap-3">
          {/* Brand & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-700 flex items-center justify-center text-white shadow-sm ring-1 ring-emerald-700/20">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                  Perencana Deep Learning
                </h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-300/50">
                  Kurikulum Merdeka
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                Modul Perencanaan Pembelajaran Mendalam Siap Pakai & Ekspor
              </p>
            </div>
          </div>

          {/* Action Tools */}
          <div className="flex flex-wrap items-center gap-2">
            {/* View switcher */}
            <div className="inline-flex rounded-lg bg-slate-100 p-0.5 border border-slate-200">
              <button
                type="button"
                onClick={() => onViewChange("document")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeView === "document"
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Tampilan Format Dokumen Resmi"
              >
                <Eye className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Dokumen Resmi</span>
              </button>
              <button
                type="button"
                onClick={() => onViewChange("markdown")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  activeView === "markdown"
                    ? "bg-white text-slate-900 shadow-xs font-semibold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
                title="Tampilan Format Markdown & Tabel"
              >
                <Code2 className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Markdown</span>
              </button>
            </div>

            {/* Quick Edit */}
            <button
              type="button"
              onClick={onOpenEditor}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs"
            >
              <Edit3 className="w-3.5 h-3.5 text-slate-500" />
              <span>Sesuaikan</span>
            </button>

            {/* Copy Markdown */}
            <button
              type="button"
              onClick={onCopyMarkdown}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-2xs ${
                copied
                  ? "bg-emerald-600 text-white"
                  : "bg-slate-800 text-white hover:bg-slate-900"
              }`}
              title="Salin Markdown Lengkap untuk Paste ke Word / Google Docs"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Tersalin!" : "Salin Markdown"}</span>
            </button>

            {/* Export Word */}
            <button
              type="button"
              onClick={onExportWord}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 transition-colors shadow-2xs"
              title="Unduh Dokumen Microsoft Word / Google Docs (.doc)"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Unduh Word (.doc)</span>
            </button>

            {/* Print / PDF */}
            <button
              type="button"
              onClick={onPrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs"
              title="Cetak atau Simpan sebagai PDF"
            >
              <Printer className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Cetak PDF</span>
            </button>

            {/* New / AI Generator Button */}
            <button
              type="button"
              onClick={onOpenGenerator}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-xs transition-all ring-1 ring-emerald-500/30"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-200" />
              <span>Rancang Modul Baru</span>
            </button>
          </div>
        </div>

        {/* Preset quick bar */}
        <div className="flex items-center gap-2 py-2 border-t border-slate-100 overflow-x-auto text-xs no-scrollbar">
          <span className="text-slate-400 font-medium whitespace-nowrap flex items-center gap-1">
            <FileText className="w-3 h-3" />
            Contoh Modul Baku:
          </span>
          {PRESET_MODULES.map((preset) => {
            const isSelected = currentModule.id === preset.id;
            return (
              <button
                key={preset.id}
                type="button"
                onClick={() => onSelectPreset(preset)}
                className={`whitespace-nowrap px-2.5 py-1 rounded-full font-medium transition-all ${
                  isSelected
                    ? "bg-emerald-100 text-emerald-900 border border-emerald-300 font-semibold"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 border border-transparent"
                }`}
              >
                {preset.mataPelajaran} ({preset.kelas}) - {preset.materiPelajaran.split(":")[0]}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
