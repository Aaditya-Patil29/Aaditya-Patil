import React from 'react';
import { Terminal, ShieldCheck, Heart, GitBranch, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#30363D] bg-[#0D1117] pt-12 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-8 font-mono">
        {/* Terminal Header Exit Line */}
        <div className="p-4 rounded-xl bg-[#161B22] border border-[#30363D] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[#3FB950]">aaditya@devops</span>
              <span className="text-[#8B949E]">:</span>
              <span className="text-[#58A6FF]">~$</span>
              <span className="text-[#E6EDF3] font-bold">exit</span>
            </div>
            <p className="text-xs text-[#8B949E] font-sans">
              Thanks for visiting. Session terminated cleanly [Process 0 exit code 0].
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#0D1117] hover:bg-[#1F242C] border border-[#30363D] hover:border-[#58A6FF] text-[#E6EDF3] text-xs font-mono transition-colors"
          >
            <ArrowUp className="w-3.5 h-3.5 text-[#58A6FF]" />
            <span>Top of Page</span>
          </button>
        </div>

        {/* Bottom Line Info */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B949E] pt-4 border-t border-[#30363D]/50 font-sans">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#3FB950]" />
            <span>
              Designed and Built by <strong className="text-[#E6EDF3] font-mono">{PERSONAL_INFO.name}</strong>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span className="flex items-center gap-1 text-[#3FB950]">
              <ShieldCheck className="w-3.5 h-3.5" />
              SLA 99.99% Uptime
            </span>
            <span>AWS / K8s Docker Stack</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
