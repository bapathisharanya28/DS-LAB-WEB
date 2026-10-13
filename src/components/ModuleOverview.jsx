import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Edit3, Trash2, Sparkles, FileText } from 'lucide-react';
import PdfViewer from './PdfViewer';

export default function ModuleOverview({ module, allModules, onBackToModules, onNavigateModule, onEditModule, onDeleteModule }) {
  const [pdfViewer, setPdfViewer] = useState(null);
  if (!module) return null;
  const index = allModules.findIndex((m) => m.id === module.id);
  const prev = index > 0 ? allModules[index - 1] : null;
  const next = index < allModules.length - 1 ? allModules[index + 1] : null;
  const number = String(module.number || module.id).padStart(2, '0');

  return (
    <div className="py-10 sm:py-16 animate-fadeIn">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-stone-200 dark:border-white/10">
          <button onClick={onBackToModules} className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono uppercase tracking-wider text-stone-600 dark:text-stone-400 hover:text-violet-700 dark:hover:text-violet-300"><ArrowLeft className="w-4 h-4" /> Back to All Modules</button>
          <div className="flex gap-2"><button onClick={() => onEditModule(module)} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300"><Edit3 className="w-3.5 h-3.5" /> Edit Module</button><button onClick={() => onDeleteModule(module)} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs border border-rose-300/40 text-rose-600 dark:text-rose-400"><Trash2 className="w-3.5 h-3.5" /> Delete</button></div>
        </div>
        <header className="space-y-4"><span className="inline-flex px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-violet-500/10 text-violet-800 dark:text-violet-200 border border-violet-500/20">MODULE {number}</span><h1 className="font-serif font-black text-4xl sm:text-5xl md:text-6xl text-stone-950 dark:text-white tracking-tight leading-tight">{module.title}</h1><p className="text-base sm:text-lg text-stone-700 dark:text-stone-300 max-w-3xl leading-relaxed">{module.description}</p></header>
        <section className="p-8 rounded-2xl card-academic glow-violet-subtle space-y-4"><h2 className="text-xs font-mono uppercase tracking-widest text-violet-700 dark:text-violet-300 font-bold flex items-center gap-2"><BookOpen className="w-4 h-4" /> OVERVIEW</h2><p className="text-stone-800 dark:text-stone-200 text-sm sm:text-base leading-relaxed">{module.overview || module.description}</p></section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="p-7 rounded-2xl card-academic space-y-4"><h2 className="text-xs font-mono uppercase tracking-widest text-violet-700 dark:text-violet-300 font-bold flex items-center gap-2"><Sparkles className="w-4 h-4" /> WHAT YOU WILL LEARN</h2><div className="flex flex-wrap gap-2">{(module.topics || []).map((topic, i) => <span key={i} className="px-3 py-1.5 rounded-xl text-xs font-medium bg-stone-100 dark:bg-white/5 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700">• {topic}</span>)}</div></section>
          <section className="p-7 rounded-2xl card-academic space-y-4"><h2 className="text-xs font-mono uppercase tracking-widest text-violet-700 dark:text-violet-300 font-bold flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> MODULE OBJECTIVES</h2><ol className="space-y-3">{(module.objectives || []).map((obj, i) => <li key={i} className="flex gap-3 text-sm text-stone-800 dark:text-stone-200"><span className="w-5 h-5 rounded-full bg-violet-500/10 text-violet-700 dark:text-violet-300 font-mono text-xs flex items-center justify-center shrink-0">{i + 1}</span>{obj}</li>)}</ol></section>
        </div>
        <section className="p-7 rounded-2xl card-academic space-y-4">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-violet-700 dark:text-violet-300 font-bold flex items-center gap-2">
              <BookOpen className="w-4 h-4" /> MODULE PDF MATERIAL & FLIPBOOK
            </h2>
            <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
              Read the complete module material in an interactive 3D digital flipbook with page turns, or open the PDF directly.
            </p>
          </div>
          {(module.pdfs || []).length ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {module.pdfs.map((pdf, i) => (
                <div
                  key={pdf.id || i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-white/[0.03] hover:border-violet-400/70 transition-all shadow-sm"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-10 h-10 rounded-lg bg-violet-500/10 dark:bg-violet-500/20 flex items-center justify-center shrink-0">
                      <FileText className="w-5 h-5 text-violet-600 dark:text-violet-300" />
                    </div>
                    <div className="min-w-0">
                      <span className="block text-sm font-semibold text-stone-900 dark:text-stone-100 truncate">
                        {pdf.name}
                      </span>
                      <span className="block text-[11px] font-mono text-stone-500 dark:text-stone-400">
                        Module {number} Material
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-stone-100 dark:border-white/5">
                    <button
                      onClick={() => setPdfViewer(i)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold shadow-sm transition-all"
                      title="Open interactive 3D flipbook"
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>Flip Book</span>
                    </button>
                    <a
                      href={pdf.dataUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-stone-300 dark:border-stone-700 hover:bg-stone-100 dark:hover:bg-white/5 text-stone-800 dark:text-stone-200 text-xs font-medium transition-all"
                      title="View original PDF in a new tab"
                    >
                      <FileText className="w-3.5 h-3.5 text-stone-500" />
                      <span>View PDF</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-stone-500">No PDFs added yet. Use Edit Module → Add PDF(s).</p>
          )}
        </section>
        <section className="p-7 rounded-2xl card-academic"><h2 className="text-xs font-mono uppercase tracking-widest text-stone-600 dark:text-stone-400 mb-6 font-bold">MODULE INFORMATION</h2><div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center"><div><div className="font-serif font-black text-3xl text-stone-950 dark:text-white">{module.periods || "—"}</div><div className="text-xs font-mono text-stone-500 uppercase mt-1">Periods</div></div><div><div className="font-serif font-black text-3xl text-stone-950 dark:text-white">{(module.topics || []).length}</div><div className="text-xs font-mono text-stone-500 uppercase mt-1">Topics</div></div><div><div className="font-serif font-black text-3xl text-violet-700 dark:text-violet-300">{(module.pdfs || []).length}</div><div className="text-xs font-mono text-stone-500 uppercase mt-1">PDFs</div></div></div></section>
        <div className="pt-8 border-t border-stone-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">{prev ? <button onClick={() => onNavigateModule(prev)} className="inline-flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 hover:text-violet-700"><ArrowLeft className="w-4 h-4" /> Previous Module</button> : <span />}{next ? <button onClick={() => onNavigateModule(next)} className="inline-flex items-center gap-2 text-sm text-stone-700 dark:text-stone-300 hover:text-violet-700">Next Module <ArrowRight className="w-4 h-4" /></button> : <button onClick={onBackToModules} className="px-5 py-2.5 rounded-xl text-xs font-mono uppercase border border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-200">Back to Modules</button>}</div>
      </div>
      {pdfViewer !== null && <PdfViewer pdfs={module.pdfs || []} initialIndex={pdfViewer} onClose={() => setPdfViewer(null)} />}
    </div>
  );
}
