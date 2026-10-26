import React, { useState, useEffect } from 'react';
import { X, Save, Layers, Plus, Trash2, AlertCircle, FileText } from 'lucide-react';

export default function ModuleModal({ 
  isOpen, 
  onClose, 
  onSave, 
  initialModule = null, 
  nextModuleNumber = 4 
}) {
  const isEditing = Boolean(initialModule?.id);

  const [number, setNumber] = useState(nextModuleNumber);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [overview, setOverview] = useState('');
  const [topicsStr, setTopicsStr] = useState('');
  const [objectives, setObjectives] = useState(['']);
  const [errorMsg, setErrorMsg] = useState('');
  const [pdfs, setPdfs] = useState([]);

  useEffect(() => {
    if (initialModule) {
      setNumber(initialModule.number || 1);
      setTitle(initialModule.title || '');
      setDescription(initialModule.description || '');
      setOverview(initialModule.overview || '');
      setTopicsStr((initialModule.topics || []).join(', '));
      setObjectives(initialModule.objectives?.length ? initialModule.objectives : ['']);
      setPdfs(initialModule.pdfs || []);
    } else {
      setNumber(nextModuleNumber);
      setTitle('');
      setDescription('');
      setOverview('');
      setTopicsStr('Exploratory Data Analysis, Feature Engineering');
      setObjectives([
        'Understand foundational algorithmic concepts.',
        'Implement production-ready pipelines in Python.'
      ]);
      setPdfs([]);
    }
    setErrorMsg('');
  }, [initialModule, nextModuleNumber, isOpen]);

  if (!isOpen) return null;

  const handleAddObjective = () => {
    setObjectives([...objectives, '']);
  };

  const handleObjectiveChange = (index, value) => {
    const updated = [...objectives];
    updated[index] = value;
    setObjectives(updated);
  };

  const handleRemoveObjective = (index) => {
    if (objectives.length <= 1) return;
    setObjectives(objectives.filter((_, i) => i !== index));
  };

  const handlePdfUpload = (e) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      if (file.type !== 'application/pdf') return;
      const reader = new FileReader();
      reader.onload = () => setPdfs((prev) => [...prev, { id: `${Date.now()}-${file.name}`, name: file.name, dataUrl: reader.result }]);
      reader.readAsDataURL(file);
    });
    e.target.value = '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setErrorMsg('Please enter a module title.');
      return;
    }

    const topicsArray = topicsStr
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const validObjectives = objectives.map((o) => o.trim()).filter(Boolean);

    const moduleData = {
      id: initialModule?.id || Date.now(),
      number: Number(number),
      title: title.trim(),
      description: description.trim(),
      overview: overview.trim() || description.trim(),
      topics: topicsArray.length ? topicsArray : ['Data Science'],
      objectives: validObjectives.length ? validObjectives : ['Complete laboratory coursework.'],
      experiments: initialModule?.experiments || [],
      pdfs
    };

    onSave(moduleData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
      <div className="w-full max-w-2xl bg-stone-50 dark:bg-[#120c24] rounded-2xl border border-stone-200 dark:border-violet-900/40 shadow-2xl overflow-hidden my-6">
        
        {/* Top Bar */}
        <div className="px-6 py-4.5 bg-white dark:bg-[#160f2c] border-b border-stone-200 dark:border-stone-800/80 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-violet-600/10 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-stone-900 dark:text-stone-100">
                {isEditing ? 'Edit Module' : 'Add New Module'}
              </h3>
              <p className="text-xs font-mono text-stone-500">
                Academic Curriculum Definition
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[78vh] overflow-y-auto">
          
          {errorMsg && (
            <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-500 text-xs font-mono flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-3">
              <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 font-bold mb-1.5">
                Module No. *
              </label>
              <input
                type="number"
                min="1"
                required
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-[#1a1233] border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>

            <div className="sm:col-span-9">
              <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 font-bold mb-1.5">
                Module Title *
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Statistical Inference & Hypothesis Testing"
                className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#1a1233] border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 font-bold mb-1.5">
              Short Description (Card Summary) *
            </label>
            <input
              type="text"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief summary displayed on main curriculum cards..."
              className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#1a1233] border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 font-bold mb-1.5">
              Detailed Overview *
            </label>
            <textarea
              rows={3}
              required
              value={overview}
              onChange={(e) => setOverview(e.target.value)}
              placeholder="Comprehensive syllabus overview, pedagogical approach, and context..."
              className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#1a1233] border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 font-bold mb-1.5">
              What You Will Learn (Topics, comma-separated) *
            </label>
            <input
              type="text"
              required
              value={topicsStr}
              onChange={(e) => setTopicsStr(e.target.value)}
              placeholder="e.g. Hypothesis Testing, p-values, ANOVA, Chi-Square, SciPy"
              className="w-full px-4 py-2.5 rounded-xl bg-white dark:bg-[#1a1233] border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 font-mono"
            />
          </div>

          {/* Numbered Learning Objectives */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">
                Module Objectives (Numbered List)
              </label>
              <button
                type="button"
                onClick={handleAddObjective}
                className="inline-flex items-center gap-1 text-xs font-mono text-violet-600 dark:text-violet-400 hover:underline"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="space-y-2.5">
              {objectives.map((obj, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-300 font-mono text-xs flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <input
                    type="text"
                    value={obj}
                    onChange={(e) => handleObjectiveChange(idx, e.target.value)}
                    placeholder={`Objective ${idx + 1}`}
                    className="flex-1 px-3.5 py-2 rounded-xl bg-white dark:bg-[#1a1233] border border-stone-300 dark:border-stone-700 text-stone-900 dark:text-stone-100 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                  {objectives.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveObjective(idx)}
                      className="p-2 text-stone-400 hover:text-rose-500 transition-colors"
                      title="Remove objective"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="block text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">Module PDFs</label>
              <label className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white text-xs font-semibold cursor-pointer">
        
                <input type="file" accept="application/pdf" multiple onChange={handlePdfUpload} className="hidden" />
              </label>
            </div>
           
            {pdfs.length > 0 && <div className="space-y-2">{pdfs.map((pdf, i) => <div key={pdf.id || i} className="flex items-center justify-between gap-3 px-3 py-2 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#1a1233]"><span className="text-xs text-stone-800 dark:text-stone-200 truncate">{pdf.name}</span><button type="button" onClick={() => setPdfs((prev) => prev.filter((_, idx) => idx !== i))} className="text-xs text-rose-600 dark:text-rose-400">Remove</button></div>)}</div>}
          </div>

          {/* Actions */}
          <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl text-xs font-semibold text-stone-600 dark:text-stone-300 hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-violet-600 hover:bg-violet-700 text-white shadow-md shadow-violet-600/30 transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" />
            
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
