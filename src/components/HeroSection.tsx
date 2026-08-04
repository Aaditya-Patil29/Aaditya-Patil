import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Github, 
  Linkedin, 
  FileText, 
  ArrowRight, 
  Cpu, 
  Server, 
  Boxes, 
  Cloud, 
  Users, 
  GitBranch, 
  Play, 
  CheckCircle2, 
  Zap, 
  Layers
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const BADGES = [
  { name: 'Docker', color: '#2496ED', bg: 'bg-[#2496ED]/10', border: 'border-[#2496ED]/30' },
  { name: 'Kubernetes', color: '#326CE5', bg: 'bg-[#326CE5]/10', border: 'border-[#326CE5]/30' },
  { name: 'AWS', color: '#FF9900', bg: 'bg-[#FF9900]/10', border: 'border-[#FF9900]/30' },
  { name: 'Terraform', color: '#844FBA', bg: 'bg-[#844FBA]/10', border: 'border-[#844FBA]/30' },
  { name: 'Linux', color: '#FCC624', bg: 'bg-[#FCC624]/10', border: 'border-[#FCC624]/30' },
  { name: 'GitHub Actions', color: '#2088FF', bg: 'bg-[#2088FF]/10', border: 'border-[#2088FF]/30' },
  { name: 'Node.js', color: '#339933', bg: 'bg-[#339933]/10', border: 'border-[#339933]/30' },
  { name: 'PostgreSQL', color: '#4169E1', bg: 'bg-[#4169E1]/10', border: 'border-[#4169E1]/30' },
  { name: 'MongoDB', color: '#47A248', bg: 'bg-[#47A248]/10', border: 'border-[#47A248]/30' },
  { name: 'React', color: '#61DAFB', bg: 'bg-[#61DAFB]/10', border: 'border-[#61DAFB]/30' },
  { name: 'TypeScript', color: '#3178C6', bg: 'bg-[#3178C6]/10', border: 'border-[#3178C6]/30' },
];

export const HeroSection: React.FC = () => {
  // Typing animation state
  const [typedText, setTypedText] = useState({
    command: '',
    name: '',
    role: '',
    bio: ''
  });
  const [stage, setStage] = useState(0);

  const fullCommand = 'whoami';
  const fullName = PERSONAL_INFO.name;
  const fullRole = PERSONAL_INFO.role;
  const fullBio = PERSONAL_INFO.tagline;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    // Stage 0: Type $ whoami
    if (stage === 0) {
      if (typedText.command.length < fullCommand.length) {
        timeout = setTimeout(() => {
          setTypedText(prev => ({ ...prev, command: fullCommand.slice(0, prev.command.length + 1) }));
        }, 80);
      } else {
        timeout = setTimeout(() => setStage(1), 300);
      }
    }
    // Stage 1: Type Name
    else if (stage === 1) {
      if (typedText.name.length < fullName.length) {
        timeout = setTimeout(() => {
          setTypedText(prev => ({ ...prev, name: fullName.slice(0, prev.name.length + 1) }));
        }, 50);
      } else {
        timeout = setTimeout(() => setStage(2), 200);
      }
    }
    // Stage 2: Type Role
    else if (stage === 2) {
      if (typedText.role.length < fullRole.length) {
        timeout = setTimeout(() => {
          setTypedText(prev => ({ ...prev, role: fullRole.slice(0, prev.role.length + 1) }));
        }, 30);
      } else {
        timeout = setTimeout(() => setStage(3), 200);
      }
    }
    // Stage 3: Type Bio
    else if (stage === 3) {
      if (typedText.bio.length < fullBio.length) {
        timeout = setTimeout(() => {
          setTypedText(prev => ({ ...prev, bio: fullBio.slice(0, prev.bio.length + 1) }));
        }, 20);
      } else {
        setStage(4);
      }
    }

    return () => clearTimeout(timeout);
  }, [stage, typedText]);

  // Pipeline animated active node step
  const [activePipelineStep, setActivePipelineStep] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePipelineStep(prev => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const pipelineNodes = [
    { label: 'GitHub', sub: 'Version Control', icon: GitBranch, color: '#2088FF' },
    { label: 'GitHub Actions', sub: 'CI/CD Engine', icon: Zap, color: '#3FB950' },
    { label: 'Docker', sub: 'Multi-Stage Build', icon: Boxes, color: '#2496ED' },
    { label: 'Kubernetes', sub: 'EKS Cluster Pods', icon: Server, color: '#326CE5' },
    { label: 'AWS', sub: 'EC2 / VPC / S3', icon: Cloud, color: '#FF9900' },
    { label: 'Users', sub: 'Global Endpoints', icon: Users, color: '#D29922' },
  ];

  return (
    <section id="about" className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#58A6FF]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#3FB950]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Terminal & Intro */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161B22] border border-[#30363D] text-xs font-mono text-[#3FB950]">
            <span className="w-2 h-2 rounded-full bg-[#3FB950] animate-pulse"></span>
            <span>SYSTEM_STATUS: ALL PIPELINES OPERATIONAL</span>
          </div>

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-[#30363D] bg-[#161B22] shadow-2xl overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D1117] border-b border-[#30363D]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#F85149] inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#D29922] inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#3FB950] inline-block"></span>
                <span className="ml-2 font-mono text-xs text-[#8B949E]">aaditya@devops-node-01:~</span>
              </div>
              <div className="flex items-center gap-1 text-[11px] font-mono text-[#8B949E]">
                <Terminal className="w-3.5 h-3.5 text-[#58A6FF]" /> zsh 5.9
              </div>
            </div>

            {/* Terminal Content */}
            <div className="p-5 sm:p-6 font-mono text-sm space-y-4 min-h-[220px]">
              {/* Command Prompt */}
              <div className="flex items-center gap-2">
                <span className="text-[#3FB950]">aaditya@devops</span>
                <span className="text-[#8B949E]">:</span>
                <span className="text-[#58A6FF]">~$</span>
                <span className="text-[#E6EDF3] font-semibold">{typedText.command}</span>
                {stage === 0 && <span className="w-2 h-4 bg-[#58A6FF] inline-block animate-pulse"></span>}
              </div>

              {/* Output Name */}
              {stage >= 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="space-y-1 pt-1"
                >
                  <h1 className="text-2xl sm:text-4xl font-bold font-sans tracking-tight text-[#E6EDF3]">
                    {typedText.name}
                    {stage === 1 && <span className="w-2.5 h-6 bg-[#3FB950] inline-block animate-pulse ml-1"></span>}
                  </h1>
                </motion.div>
              )}

              {/* Output Role */}
              {stage >= 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs sm:text-sm font-mono text-[#58A6FF] font-medium"
                >
                  {typedText.role}
                  {stage === 2 && <span className="w-2 h-4 bg-[#58A6FF] inline-block animate-pulse ml-1"></span>}
                </motion.div>
              )}

              {/* Output Bio */}
              {stage >= 3 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xs sm:text-sm text-[#8B949E] font-sans leading-relaxed pt-2 border-t border-[#30363D]/60"
                >
                  {typedText.bio}
                  {stage === 3 && <span className="w-2 h-4 bg-[#3FB950] inline-block animate-pulse ml-1"></span>}
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Badges Matrix */}
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#8B949E] uppercase tracking-wider block">
              // Core Infrastructure & Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {BADGES.map((badge, idx) => (
                <motion.span
                  key={badge.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + idx * 0.04 }}
                  className={`px-2.5 py-1 rounded-md text-xs font-mono border ${badge.bg} ${badge.border} transition-all duration-200 hover:scale-105 cursor-default`}
                  style={{ color: badge.color }}
                >
                  #{badge.name}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#238636] hover:bg-[#2ea043] text-white text-xs font-mono font-semibold transition-all shadow-md hover:shadow-[#238636]/20"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              download="Aaditya_Patil_Resume.pdf"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#161B22] hover:bg-[#1F242C] border border-[#30363D] hover:border-[#58A6FF] text-[#E6EDF3] text-xs font-mono font-medium transition-all"
            >
              <FileText className="w-4 h-4 text-[#58A6FF]" />
              <span>Download Resume</span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#161B22] hover:bg-[#1F242C] border border-[#30363D] hover:border-[#58A6FF] text-[#8B949E] hover:text-[#E6EDF3] transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#161B22] hover:bg-[#1F242C] border border-[#30363D] hover:border-[#58A6FF] text-[#8B949E] hover:text-[#58A6FF] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Animated DevOps Pipeline Diagram */}
        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-[#30363D] bg-[#161B22] p-5 shadow-2xl relative overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#30363D] mb-4">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#58A6FF]" />
                <span className="font-mono text-xs font-semibold text-[#E6EDF3] uppercase tracking-wider">
                  Automated Deployment Pipeline
                </span>
              </div>
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#3FB950]/10 border border-[#3FB950]/30 text-[#3FB950]">
                ACTIVE CICD
              </span>
            </div>

            {/* Pipeline Step Vertical List */}
            <div className="relative space-y-3">
              {pipelineNodes.map((node, index) => {
                const IconComponent = node.icon;
                const isActive = activePipelineStep === index;
                const isPassed = activePipelineStep > index;

                return (
                  <div key={node.label} className="relative flex items-center gap-3">
                    {/* Node Icon Box */}
                    <div
                      className={`relative z-10 p-2.5 rounded-lg border transition-all duration-300 ${
                        isActive
                          ? 'bg-[#161B22] border-[#58A6FF] shadow-lg shadow-[#58A6FF]/20 scale-105'
                          : isPassed
                          ? 'bg-[#0D1117] border-[#3FB950]'
                          : 'bg-[#0D1117] border-[#30363D]'
                      }`}
                    >
                      <IconComponent
                        className={`w-5 h-5 transition-colors ${
                          isActive
                            ? 'text-[#58A6FF]'
                            : isPassed
                            ? 'text-[#3FB950]'
                            : 'text-[#8B949E]'
                        }`}
                      />
                    </div>

                    {/* Step Info */}
                    <div className="flex-1 flex items-center justify-between p-2.5 rounded-lg bg-[#0D1117]/80 border border-[#30363D]/60">
                      <div>
                        <span className="font-mono text-xs font-semibold text-[#E6EDF3] block">
                          {node.label}
                        </span>
                        <span className="text-[11px] text-[#8B949E] font-sans">
                          {node.sub}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        {isActive ? (
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#58A6FF]">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#58A6FF] animate-ping"></span>
                            EXEC
                          </span>
                        ) : isPassed ? (
                          <CheckCircle2 className="w-4 h-4 text-[#3FB950]" />
                        ) : (
                          <span className="text-[10px] font-mono text-[#8B949E]">PENDING</span>
                        )}
                      </div>
                    </div>

                    {/* Vertical Connector Line (between steps) */}
                    {index < pipelineNodes.length - 1 && (
                      <div className="absolute left-5 top-10 w-0.5 h-4 bg-[#30363D] -z-0">
                        {isPassed && (
                          <div className="w-full h-full bg-[#3FB950] transition-all"></div>
                        )}
                        {isActive && (
                          <div className="w-full h-full bg-[#58A6FF] animate-pulse"></div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Live Pipeline Telemetry Footer */}
            <div className="mt-4 pt-3 border-t border-[#30363D] flex items-center justify-between text-[11px] font-mono text-[#8B949E]">
              <span>Build ID: #gh-actions-9481</span>
              <span className="text-[#3FB950]">Status: Green (0s latency)</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
