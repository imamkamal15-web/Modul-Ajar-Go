import React, { useState, useEffect } from "react";
import { DeepLearningModule } from "./types";
import { PRESET_MODULES } from "./data/presets";
import { generateModuleMarkdown } from "./utils/markdownGenerator";
import { exportToWordDoc, downloadMarkdownFile } from "./utils/wordExport";
import { Header } from "./components/Header";
import { QuickOutline } from "./components/QuickOutline";
import { ModuleDocumentView } from "./components/ModuleDocumentView";
import { MarkdownView } from "./components/MarkdownView";
import { GeneratorModal } from "./components/GeneratorModal";
import { EditModuleModal } from "./components/EditModuleModal";
import {
  FileText,
  Sparkles,
  Download,
  Copy,
  Printer,
  CheckCircle,
  HelpCircle,
  Award,
  Layers,
  HeartHandshake,
} from "lucide-react";

export default function App() {
  // Initialize with the first preset (IPAS Fotosintesis)
  const [currentModule, setCurrentModule] = useState<DeepLearningModule>(() => {
    const initial = PRESET_MODULES[0];
    return {
      ...initial,
      rawMarkdown: generateModuleMarkdown(initial),
    };
  });

  const [activeView, setActiveView] = useState<"document" | "markdown">("document");
  const [copied, setCopied] = useState(false);
  const [isGeneratorOpen, setIsGeneratorOpen] = useState(false);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Auto-clear toast
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const handleSelectPreset = (preset: DeepLearningModule) => {
    const updated = {
      ...preset,
      rawMarkdown: generateModuleMarkdown(preset),
    };
    setCurrentModule(updated);
    showToast(`Memuat modul: ${preset.materiPelajaran.split(":")[0]}`);
  };

  const handleCopyMarkdown = async () => {
    const md = currentModule.rawMarkdown || generateModuleMarkdown(currentModule);
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(md);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = md;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      showToast("Format Markdown & Tabel tersalin! Siap di-paste ke Google Docs / Word.");
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy:", err);
      showToast("Gagal menyalin otomatis. Silakan salin manual dari tab Markdown.");
    }
  };

  const handleExportWord = () => {
    exportToWordDoc(currentModule);
    showToast("Mengunduh dokumen Microsoft Word (.doc)...");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleScrollToSection = (id: string) => {
    if (activeView !== "document") {
      setActiveView("document");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleModuleGenerated = (newModule: DeepLearningModule) => {
    setCurrentModule(newModule);
    setActiveView("document");
    showToast(`Modul "${newModule.materiPelajaran.split(":")[0]}" berhasil dirancang!`);
  };

  const handleModuleSaved = (updated: DeepLearningModule) => {
    setCurrentModule(updated);
    showToast("Data modul berhasil diperbarui!");
  };

  const handleUpdateRawMarkdown = (newMd: string) => {
    setCurrentModule((prev) => ({
      ...prev,
      rawMarkdown: newMd,
    }));
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col selection:bg-emerald-500 selection:text-white">
      {/* Sticky Top Header Navigation */}
      <Header
        currentModule={currentModule}
        onSelectPreset={handleSelectPreset}
        onOpenGenerator={() => setIsGeneratorOpen(true)}
        onOpenEditor={() => setIsEditorOpen(true)}
        onCopyMarkdown={handleCopyMarkdown}
        onExportWord={handleExportWord}
        onPrint={handlePrint}
        activeView={activeView}
        onViewChange={setActiveView}
        copied={copied}
      />

      {/* Main Workspace */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Info Banner for Deep Learning Principles */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-900 text-white shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 no-print">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-400/20 text-emerald-200 border border-emerald-400/30">
                Pilar Deep Learning Indonesia
              </span>
              <span className="text-xs text-emerald-100/80">
                Standar Kurikulum Merdeka & Profil Pelajar Pancasila
              </span>
            </div>
            <p className="text-sm font-medium text-emerald-50 leading-snug">
              <strong className="text-white">Bermakna:</strong> Keterkaitan kontekstual dengan kehidupan nyata.{" "}
              <strong className="text-white">Berkesadaran:</strong> Mindful reflection & regulasi diri.{" "}
              <strong className="text-white">Menggembirakan:</strong> Joyful learning & rasa ingin tahu tinggi.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => downloadMarkdownFile(currentModule)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20"
              title="Unduh File Markdown (.md)"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Unduh .md</span>
            </button>
            <button
              type="button"
              onClick={handleExportWord}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-bold bg-white text-emerald-950 hover:bg-emerald-50 transition-colors shadow-xs"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-800" />
              <span>Ekspor ke Word</span>
            </button>
          </div>
        </div>

        {/* Layout Grid: Sidebar outline (desktop) + Document / Markdown View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Sticky Left Navigation Outline */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-28 space-y-4 no-print">
            <QuickOutline onScrollTo={handleScrollToSection} />

            {/* Quick Tips Card */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-2 text-xs">
              <div className="flex items-center gap-1.5 font-bold text-slate-800">
                <HeartHandshake className="w-4 h-4 text-emerald-600" />
                <span>Tips Ekspor ke Dokumen</span>
              </div>
              <p className="text-slate-600 leading-relaxed text-[11px]">
                Gunakan tombol <strong>"Salin Markdown"</strong> untuk langsung paste ke Google Docs atau Microsoft Word. Semua tabel format akan tertata otomatis dengan rapi.
              </p>
            </div>
          </aside>

          {/* Center Document Container */}
          <div className="lg:col-span-9 w-full">
            {activeView === "document" ? (
              <ModuleDocumentView module={currentModule} />
            ) : (
              <MarkdownView
                markdown={currentModule.rawMarkdown || generateModuleMarkdown(currentModule)}
                onCopy={handleCopyMarkdown}
                copied={copied}
                onUpdateMarkdown={handleUpdateRawMarkdown}
              />
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500 no-print">
        <p className="font-semibold text-slate-700">
          Perencana Pembelajaran Mendalam (Deep Learning) — Kurikulum Merdeka Indonesia
        </p>
        <p className="mt-1 text-slate-400">
          Dirancang untuk guru dan instruktur: Memahami, Mengaplikasi, Merefleksi.
        </p>
      </footer>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="bg-slate-900 text-white px-4 py-2.5 rounded-xl shadow-lg border border-slate-800 text-xs sm:text-sm font-medium flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Modals */}
      <GeneratorModal
        isOpen={isGeneratorOpen}
        onClose={() => setIsGeneratorOpen(false)}
        onGenerated={handleModuleGenerated}
      />

      <EditModuleModal
        isOpen={isEditorOpen}
        onClose={() => setIsEditorOpen(false)}
        module={currentModule}
        onSave={handleModuleSaved}
      />
    </div>
  );
}
