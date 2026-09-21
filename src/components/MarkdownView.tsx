import React, { useState } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Copy, Check, Code, Eye, FileText } from "lucide-react";

interface MarkdownViewProps {
  markdown: string;
  onCopy: () => void;
  copied: boolean;
  onUpdateMarkdown?: (newMarkdown: string) => void;
}

export const MarkdownView: React.FC<MarkdownViewProps> = ({
  markdown,
  onCopy,
  copied,
  onUpdateMarkdown,
}) => {
  const [mode, setMode] = useState<"preview" | "raw">("preview");

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xs max-w-5xl mx-auto overflow-hidden">
      {/* Top action bar */}
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3 bg-slate-50 border-b border-slate-200 gap-2">
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-lg bg-slate-200/70 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setMode("preview")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
                mode === "preview"
                  ? "bg-white text-slate-900 shadow-2xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Pratinjau Markdown</span>
            </button>
            <button
              type="button"
              onClick={() => setMode("raw")}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md font-medium transition-all ${
                mode === "raw"
                  ? "bg-white text-slate-900 shadow-2xs font-semibold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Teks Mentah (Raw Markdown)</span>
            </button>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Siap disalin ke Google Docs / Word / Notion
          </span>
        </div>

        <button
          type="button"
          onClick={onCopy}
          className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all shadow-2xs ${
            copied
              ? "bg-emerald-600 text-white"
              : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? "Tersalin ke Clipboard!" : "Salin Format Markdown"}</span>
        </button>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8">
        {mode === "raw" ? (
          <div className="relative">
            <textarea
              value={markdown}
              onChange={(e) => onUpdateMarkdown && onUpdateMarkdown(e.target.value)}
              rows={28}
              className="w-full font-mono text-xs sm:text-sm text-slate-800 bg-slate-900 text-slate-100 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 overflow-x-auto leading-relaxed"
              placeholder="Teks Markdown lengkap..."
            />
            <p className="text-[11px] text-slate-400 mt-2">
              Anda dapat mengedit teks Markdown di atas secara langsung atau menyalinnya.
            </p>
          </div>
        ) : (
          <div className="markdown-body prose prose-slate max-w-none text-slate-800 text-sm sm:text-base leading-relaxed">
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-xl sm:text-2xl font-black text-slate-900 pb-3 border-b border-slate-300 mt-6 mb-4 uppercase text-center">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-lg font-bold text-slate-900 mt-8 mb-3 pb-1 border-b border-slate-200 flex items-center gap-2">
                    <span className="w-2 h-4 bg-emerald-600 rounded-xs"></span>
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-base font-bold text-slate-900 mt-6 mb-2">
                    {children}
                  </h3>
                ),
                table: ({ children }) => (
                  <div className="overflow-x-auto my-4 rounded-xl border border-slate-300">
                    <table className="w-full text-xs sm:text-sm border-collapse text-left">
                      {children}
                    </table>
                  </div>
                ),
                th: ({ children }) => (
                  <th className="bg-slate-100 p-2.5 font-bold border border-slate-300 text-slate-900">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="p-2.5 border border-slate-200 text-slate-700 align-top">
                    {children}
                  </td>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc pl-5 my-2 space-y-1 text-slate-700">
                    {children}
                  </ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal pl-5 my-2 space-y-1 text-slate-700">
                    {children}
                  </ol>
                ),
                hr: () => <hr className="my-6 border-slate-200" />,
                strong: ({ children }) => (
                  <strong className="font-bold text-slate-900">{children}</strong>
                ),
              }}
            >
              {markdown}
            </Markdown>
          </div>
        )}
      </div>
    </div>
  );
};
