import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Github, 
  ExternalLink, 
  Star, 
  GitFork, 
  FileText, 
  Layers, 
  Terminal, 
  Server, 
  CheckCircle2, 
  Copy, 
  Check, 
  Lock, 
  Globe, 
  Cpu
} from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  initialTab?: 'readme' | 'architecture' | 'deployment' | 'api' | 'tech';
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, initialTab = 'readme', onClose }) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'readme' | 'architecture' | 'deployment' | 'api' | 'tech'>(initialTab);
  const [copiedClone, setCopiedClone] = useState(false);

  const handleCopyClone = () => {
    navigator.clipboard.writeText(`git clone ${project.githubUrl}.git`);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="relative w-full max-w-5xl max-h-[92vh] bg-[#161B22] border border-[#30363D] rounded-xl shadow-2xl overflow-hidden flex flex-col"
      >
        {/* Repository Header Bar */}
        <div className="px-6 py-4 bg-[#0D1117] border-b border-[#30363D] flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#161B22] border border-[#30363D] text-[#58A6FF]">
              <Github className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-mono text-[#8B949E]">Aaditya-Patil29 /</span>
                <h2 className="text-base font-bold font-mono text-[#58A6FF] hover:underline cursor-pointer">
                  {project.name}
                </h2>
                <span className="px-2 py-0.5 text-[11px] font-mono rounded-full bg-[#30363D]/60 text-[#8B949E] border border-[#30363D]">
                  Public
                </span>
              </div>
              <p className="text-xs text-[#8B949E] mt-0.5 max-w-xl line-clamp-1">{project.description}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyClone}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md bg-[#161B22] border border-[#30363D] hover:border-[#58A6FF] text-[#E6EDF3] transition-colors"
            >
              {copiedClone ? <Check className="w-3.5 h-3.5 text-[#3FB950]" /> : <Copy className="w-3.5 h-3.5 text-[#58A6FF]" />}
              <span>{copiedClone ? 'Copied' : 'git clone'}</span>
            </button>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md bg-[#238636] hover:bg-[#2ea043] text-white font-medium transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}

            <button
              onClick={onClose}
              className="p-1.5 rounded-md hover:bg-[#30363D] text-[#8B949E] hover:text-[#E6EDF3] transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tabs Navigation Bar */}
        <div className="flex items-center gap-1 px-6 bg-[#0D1117] border-b border-[#30363D] overflow-x-auto text-xs font-mono">
          {[
            { id: 'readme', label: 'README.md', icon: FileText },
            { id: 'architecture', label: 'Architecture', icon: Layers },
            { id: 'deployment', label: 'Deployment & CI/CD', icon: Terminal },
            { id: 'api', label: 'API Specs', icon: Server },
            { id: 'tech', label: 'Tech Stack', icon: Cpu },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 font-medium transition-all whitespace-nowrap ${
                  isActive
                    ? 'border-[#F78166] text-[#E6EDF3] bg-[#161B22]/50'
                    : 'border-transparent text-[#8B949E] hover:text-[#E6EDF3] hover:bg-[#161B22]/30'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-[#F78166]' : 'text-[#8B949E]'}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Modal Tab Content Area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 text-[#E6EDF3] font-sans">
          {/* TAB 1: README */}
          {activeTab === 'readme' && (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-[#0D1117] border border-[#30363D] space-y-4">
                <div className="flex items-center justify-between border-b border-[#30363D] pb-3 text-xs font-mono text-[#8B949E]">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#58A6FF]" />
                    <span className="text-[#E6EDF3] font-bold">README.md</span>
                  </div>
                  <span>Formatted GitHub Markdown View</span>
                </div>

                <div className="prose prose-invert max-w-none text-sm leading-relaxed space-y-4 font-mono">
                  <div className="p-4 rounded-lg bg-[#161B22] border border-[#30363D] text-[#E6EDF3]">
                    <h3 className="text-lg font-bold text-[#58A6FF] mb-2">{project.name}</h3>
                    <p className="text-xs text-[#8B949E] mb-4 font-sans">{project.fullDescription}</p>

                    <div className="bg-[#0D1117] p-4 rounded-md border border-[#30363D] font-mono text-xs overflow-x-auto">
                      <pre className="text-[#3FB950]">{project.readme}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-[#0D1117] border border-[#30363D] space-y-4">
                <h3 className="text-base font-bold font-mono text-[#58A6FF] flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#3FB950]" />
                  System Architecture & Data Flow
                </h3>
                <p className="text-xs text-[#8B949E] font-sans">
                  High-availability microservice design pattern, stateless execution layer, and storage routing.
                </p>

                {/* Flow String Box */}
                <div className="p-3 rounded-lg bg-[#161B22] border border-[#30363D] font-mono text-xs text-[#58A6FF]">
                  <span className="text-[#8B949E] block mb-1 text-[11px] uppercase tracking-wider">// End-to-End Execution Sequence</span>
                  {project.architecture.dataFlow}
                </div>

                {/* Components Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-lg bg-[#161B22] border border-[#30363D] space-y-2">
                    <h4 className="text-xs font-mono font-semibold text-[#E6EDF3] uppercase tracking-wider">
                      Core Infrastructure Services
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#8B949E]">
                      {project.architecture.components.map((comp) => (
                        <li key={comp} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#3FB950] shrink-0" />
                          <span>{comp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-lg bg-[#161B22] border border-[#30363D] space-y-2">
                    <h4 className="text-xs font-mono font-semibold text-[#E6EDF3] uppercase tracking-wider">
                      Performance & SLA Highlights
                    </h4>
                    <ul className="space-y-1.5 text-xs text-[#8B949E]">
                      {project.architecture.highlights.map((h) => (
                        <li key={h} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#58A6FF] shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DEPLOYMENT */}
          {activeTab === 'deployment' && (
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-[#0D1117] border border-[#30363D] space-y-4">
                <h3 className="text-base font-bold font-mono text-[#58A6FF] flex items-center gap-2">
                  <Terminal className="w-5 h-5 text-[#D29922]" />
                  Containerized Deployment Specs & Commands
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                  <div className="p-3 rounded-lg bg-[#161B22] border border-[#30363D]">
                    <span className="text-[#8B949E] block mb-1">Target Environment</span>
                    <span className="text-[#E6EDF3] font-semibold">{project.deployment.environment}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#161B22] border border-[#30363D]">
                    <span className="text-[#8B949E] block mb-1">CI Automation</span>
                    <span className="text-[#3FB950] font-semibold">{project.deployment.ci}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-[#161B22] border border-[#30363D]">
                    <span className="text-[#8B949E] block mb-1">Container Status</span>
                    <span className="text-[#58A6FF] font-semibold">
                      {project.deployment.containerized ? 'Multi-Stage Docker Image' : 'Native Node Process'}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#8B949E] uppercase tracking-wider block">
                    // Deployment & Helm Execution Logs
                  </span>
                  <div className="p-4 rounded-lg bg-[#000000] border border-[#30363D] font-mono text-xs space-y-2 text-[#3FB950]">
                    {project.deployment.commands.map((cmd, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <span className="text-[#58A6FF]">$</span>
                        <span className="text-[#E6EDF3]">{cmd}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: API */}
          {activeTab === 'api' && (
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-[#0D1117] border border-[#30363D] space-y-4">
                <h3 className="text-base font-bold font-mono text-[#58A6FF] flex items-center gap-2">
                  <Server className="w-5 h-5 text-[#326CE5]" />
                  REST API Endpoints Specification
                </h3>

                <div className="overflow-x-auto border border-[#30363D] rounded-lg">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#161B22] text-[#8B949E] border-b border-[#30363D]">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Method</th>
                        <th className="px-4 py-3 font-semibold">Endpoint Path</th>
                        <th className="px-4 py-3 font-semibold">Specification & Functionality</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#30363D] bg-[#0D1117]">
                      {project.apiEndpoints.map((ep, idx) => (
                        <tr key={idx} className="hover:bg-[#161B22]/50 transition-colors">
                          <td className="px-4 py-3">
                            <span
                              className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                                ep.method === 'GET'
                                  ? 'bg-[#3FB950]/15 text-[#3FB950]'
                                  : ep.method === 'POST'
                                  ? 'bg-[#58A6FF]/15 text-[#58A6FF]'
                                  : ep.method === 'PUT'
                                  ? 'bg-[#D29922]/15 text-[#D29922]'
                                  : 'bg-[#F85149]/15 text-[#F85149]'
                              }`}
                            >
                              {ep.method}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-[#E6EDF3] font-semibold">{ep.path}</td>
                          <td className="px-4 py-3 text-[#8B949E] font-sans">{ep.description}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: TECH STACK */}
          {activeTab === 'tech' && (
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-[#0D1117] border border-[#30363D] space-y-4">
                <h3 className="text-base font-bold font-mono text-[#58A6FF] flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-[#58A6FF]" />
                  Technology Stack & Package Matrix
                </h3>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.topics.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-full text-xs font-mono bg-[#1F242C] text-[#58A6FF] border border-[#30363D]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-[#0D1117] border-t border-[#30363D] flex items-center justify-between text-xs font-mono text-[#8B949E]">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-[#D29922]" /> {project.stars} stars
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="w-3.5 h-3.5 text-[#58A6FF]" /> {project.forks} forks
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-1 rounded bg-[#30363D] hover:bg-[#8B949E]/20 text-[#E6EDF3] transition-colors"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};
