import React, { useState } from 'react';
import { Edit3, FileText } from 'lucide-react';

function LinkedInIcon({ className = 'w-3.5 h-3.5' }) { return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>; }
function GitHubIcon({ className = 'w-3.5 h-3.5' }) { return <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7.688.214.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>; }

export default function StudentProfile({ student, onEditProfile, onViewPortfolio }) {
  if (!student) return null;
  return (
    <>
      <div className="student-id-card w-[340px] max-w-[calc(100vw-2rem)] rounded-2xl overflow-hidden card-academic shadow-2xl border border-violet-500/25">
        <div className="h-1 bg-gradient-to-r from-violet-600 via-violet-400 to-amber-300" />
        <div className="p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <img src={student.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400'} alt={student.name} className="w-14 h-14 rounded-xl object-cover border border-violet-500/30" />
            <div className="min-w-0"><p className="text-[9px] font-mono uppercase tracking-[.18em] text-violet-700 dark:text-violet-300">Student Identity Card</p><h3 className="font-serif font-bold text-lg text-stone-900 dark:text-white truncate">{student.name}</h3><p className="text-[11px] text-stone-500 truncate">{student.course || 'B.Tech — Data Science'}</p></div>
          </div>
          <div className="flex flex-col gap-2 mt-4 text-[11px]">
            <div><span className="block uppercase font-mono text-[8px] tracking-wider text-stone-500">Roll No</span><b className="text-stone-800 dark:text-stone-200">{student.rollNo || '24102A030008'}</b></div>
            <div><span className="block uppercase font-mono text-[8px] tracking-wider text-stone-500">Branch</span><b className="text-stone-800 dark:text-stone-200">{student.branch || 'CSE (DS)'}</b></div>
            <div><span className="block uppercase font-mono text-[8px] tracking-wider text-stone-500">Section</span><b className="text-stone-800 dark:text-stone-200">{student.section || '1'}</b></div>
            <div><span className="block uppercase font-mono text-[8px] tracking-wider text-stone-500">Faculty</span><b className="text-stone-800 dark:text-stone-200 truncate block">{student.faculty || 'S.BosuBabu'}</b></div>
          </div>
        </div>
        <div className="px-4 py-3 border-t border-stone-200 dark:border-white/10 flex items-center justify-between gap-2 bg-stone-50/70 dark:bg-white/[0.02]">
          <div className="flex items-center gap-1.5">
            {student.github && <a href={student.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-white/10" title="GitHub"><GitHubIcon /></a>}
            {student.linkedIn && <a href={student.linkedIn} target="_blank" rel="noreferrer" className="p-2 rounded-lg text-[#0077b5] hover:bg-[#0077b5]/10" title="LinkedIn"><LinkedInIcon /></a>}
          </div>
          <div className="flex items-center gap-1">
            <button onClick={onEditProfile} className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-white/10"><Edit3 className="w-3 h-3" /> Edit</button>
            <button onClick={onViewPortfolio} className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] bg-violet-600 text-white hover:bg-violet-700"><FileText className="w-3 h-3" /> View More</button>
          </div>
        </div>
      </div>
    </>
  );
}
