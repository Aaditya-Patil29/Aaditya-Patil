import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCode2, 
  GitBranch, 
  History, 
  Copy, 
  ExternalLink, 
  User, 
  Briefcase, 
  GraduationCap, 
  Target, 
  BookOpen, 
  Rocket, 
  CheckCircle2,
  Terminal,
  ShieldAlert
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyRaw = () => {
    const rawContent = `# About.md

## Profile
Name: ${PERSONAL_INFO.name}
Role: ${PERSONAL_INFO.role}
Education: Computer Engineering Undergraduate

## Technical Focus
- Cloud Infrastructure
- Backend Development
- Automation
- System Design
- Cloud Native

## Current Learning
- Docker
- Kubernetes
- AWS
- Terraform
- CI/CD
- Monitoring

## Mission
Build scalable infrastructure, automate deployments, and design reliable distributed systems.`;

    navigator.clipboard.writeText(rawContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border border-[#30363D] bg-[#161B22] shadow-2xl overflow-hidden"
      >
        {/* GitHub README Header Bar */}
        <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#0D1117] border-b border-[#30363D] gap-2">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8B949E]">
              <FileCode2 className="w-4 h-4 text-[#58A6FF]" />
              <span className="text-[#E6EDF3] font-semibold">About.md</span>
            </div>
            <span className="text-[#30363D]">|</span>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#8B949E]">
              <GitBranch className="w-3.5 h-3.5 text-[#3FB950]" />
              <span>main</span>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-[#8B949E]">
            <span className="hidden sm:inline-block text-[11px]">42 lines (36 sloc) • 1.2 KB</span>
            <button
              onClick={handleCopyRaw}
              className="flex items-center gap-1 px-2.5 py-1 rounded bg-[#161B22] border border-[#30363D] hover:border-[#58A6FF] text-[#E6EDF3] transition-colors text-xs"
            >
              <Copy className="w-3 h-3 text-[#58A6FF]" />
              <span>{copied ? 'Copied Raw!' : 'Copy Raw'}</span>
            </button>
          </div>
        </div>

        {/* GitHub Commit Header strip */}
        <div className="px-5 py-2.5 bg-[#161B22] border-b border-[#30363D] flex items-center justify-between text-xs font-mono text-[#8B949E]">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-[#58A6FF]/20 border border-[#58A6FF] flex items-center justify-center text-[10px] font-bold text-[#58A6FF]">
              AP
            </div>
            <span className="text-[#E6EDF3] font-semibold">{PERSONAL_INFO.handle}</span>
            <span className="hidden sm:inline">docs(profile): update engineering architecture & mission roadmap</span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-[#3FB950]">
            <History className="w-3.5 h-3.5" />
            <span>Latest commit e89f1a2</span>
          </div>
        </div>

        {/* README Body Rendered */}
        <div className="p-6 sm:p-8 space-y-8 font-sans">
          {/* H1 Heading */}
          <div className="border-b border-[#30363D] pb-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold font-mono text-[#E6EDF3] flex items-center gap-2">
                <span className="text-[#58A6FF]">#</span> About.md
              </h1>
              <p className="text-xs text-[#8B949E] font-mono mt-1">
                // System Specification & Developer Manifest
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-[#3FB950]/10 border border-[#3FB950]/30 text-xs font-mono text-[#3FB950]">
              DevOps Ready
            </span>
          </div>

          {/* GitHub Markdown Block Quotes / Specs Table */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Identity Box */}
            <div className="p-4 rounded-xl bg-[#0D1117] border border-[#30363D] space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#58A6FF] uppercase tracking-wider font-semibold">
                <User className="w-4 h-4 text-[#3FB950]" />
                Identity & Role
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex items-baseline justify-between border-b border-[#30363D]/50 pb-1.5">
                  <span className="text-[#8B949E] font-mono text-xs">Name</span>
                  <span className="font-semibold text-[#E6EDF3] font-mono">{PERSONAL_INFO.name}</span>
                </div>
                <div className="flex items-baseline justify-between border-b border-[#30363D]/50 pb-1.5">
                  <span className="text-[#8B949E] font-mono text-xs">Role</span>
                  <span className="font-medium text-[#58A6FF] font-mono text-right text-xs">
                    Backend Engineer | DevOps
                  </span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-[#8B949E] font-mono text-xs">Education</span>
                  <span className="font-medium text-[#E6EDF3] text-xs">
                    Computer Engineering Undergraduate
                  </span>
                </div>
              </div>
            </div>

            {/* Core Mission Quote Box */}
            <div className="p-4 rounded-xl bg-[#0D1117] border-l-4 border-l-[#58A6FF] border border-[#30363D] space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-[#58A6FF] uppercase tracking-wider font-semibold">
                <Rocket className="w-4 h-4 text-[#D29922]" />
                Engineering Mission
              </div>
              <blockquote className="text-sm italic text-[#E6EDF3] leading-relaxed pt-1">
                "{PERSONAL_INFO.bio}"
              </blockquote>
            </div>
          </div>

          {/* Section: Technical Focus */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold font-mono text-[#E6EDF3] flex items-center gap-2">
              <span className="text-[#58A6FF]">##</span> Technical Focus
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono text-xs">
              {[
                { title: 'Cloud Infrastructure', desc: 'AWS, VPC, EC2, EKS, IAM', color: '#FF9900' },
                { title: 'Backend Development', desc: 'Node.js, Express, Microservices', color: '#58A6FF' },
                { title: 'Automation', desc: 'GitHub Actions, CI/CD, Shell', color: '#3FB950' },
                { title: 'System Design', desc: 'Distributed Specs, Caching, DBs', color: '#D29922' },
                { title: 'Cloud Native', desc: 'Docker, Kubernetes, Helm', color: '#326CE5' },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-3 rounded-lg bg-[#0D1117] border border-[#30363D] space-y-1 hover:border-[#58A6FF] transition-colors"
                >
                  <div className="font-semibold text-[#E6EDF3] flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }}></span>
                    {item.title}
                  </div>
                  <div className="text-[11px] text-[#8B949E] font-sans">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Current Learning */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold font-mono text-[#E6EDF3] flex items-center gap-2">
              <span className="text-[#58A6FF]">##</span> Current Learning & Roadmap
            </h3>
            <div className="p-4 rounded-xl bg-[#0D1117] border border-[#30363D]">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                {['Docker', 'Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Monitoring'].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center gap-2 p-2 rounded bg-[#161B22] border border-[#30363D] text-xs font-mono text-[#E6EDF3]"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#3FB950]" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
