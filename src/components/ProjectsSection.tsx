import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  Star, 
  GitFork, 
  FileText, 
  Layers, 
  ExternalLink, 
  Github, 
  Pin,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [initialTab, setInitialTab] = useState<'readme' | 'architecture' | 'deployment' | 'api' | 'tech'>('readme');

  const openProjectModal = (project: Project, tab: 'readme' | 'architecture' | 'deployment' | 'api' | 'tech' = 'readme') => {
    setSelectedProject(project);
    setInitialTab(tab);
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-[#30363D] pb-4">
        <div>
          <h2 className="text-xl font-bold font-mono text-[#E6EDF3] flex items-center gap-2">
            <FolderGit2 className="w-5 h-5 text-[#58A6FF]" />
            Pinned GitHub Repositories & Systems
          </h2>
          <p className="text-xs text-[#8B949E] mt-1 font-sans">
            Production-grade backend services, cloud-native deployments, and containerized microservice architectures.
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex items-center gap-2 text-xs font-mono text-[#8B949E]">
          <Pin className="w-3.5 h-3.5 text-[#D29922]" />
          <span>4 Repositories Pinned</span>
        </div>
      </div>

      {/* Grid of GitHub Repository Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PROJECTS_DATA.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className="p-5 rounded-xl bg-[#161B22] border border-[#30363D] shadow-xl hover:border-[#58A6FF]/60 hover:shadow-2xl transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Top Bar: Repo Name & Public Tag */}
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <FolderGit2 className="w-4 h-4 text-[#8B949E] group-hover:text-[#58A6FF] transition-colors" />
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-sm font-bold text-[#58A6FF] hover:underline flex items-center gap-1"
                  >
                    <span>{project.name}</span>
                  </a>
                </div>
                <span className="px-2 py-0.5 text-[10px] font-mono rounded-full bg-[#21262D] text-[#8B949E] border border-[#30363D]">
                  Public
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-[#8B949E] font-sans leading-relaxed mb-4 min-h-[40px]">
                {project.description}
              </p>

              {/* GitHub Topics */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-[#1F242C] text-[#58A6FF] hover:bg-[#58A6FF]/20 border border-[#30363D]/60 transition-colors cursor-pointer"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Bar: Stats + Action Buttons */}
            <div className="space-y-3 pt-3 border-t border-[#30363D]/60">
              {/* Language & Stats */}
              <div className="flex items-center justify-between text-xs font-mono text-[#8B949E]">
                <div className="flex items-center gap-4">
                  {/* Language Dot */}
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-3 h-3 rounded-full inline-block"
                      style={{ backgroundColor: project.languageColor }}
                    ></span>
                    <span className="text-[#E6EDF3] font-medium">{project.language}</span>
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-[#D29922]" />
                    <span>{project.stars}</span>
                  </div>

                  {/* Forks */}
                  <div className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5 text-[#58A6FF]" />
                    <span>{project.forks}</span>
                  </div>
                </div>

                {/* Updated At */}
                <div className="flex items-center gap-1 text-[11px]">
                  <Clock className="w-3 h-3 text-[#8B949E]" />
                  <span>{project.updatedAt}</span>
                </div>
              </div>

              {/* 4 Action Buttons Required by Prompt */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 font-mono text-xs">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-md bg-[#238636] hover:bg-[#2ea043] text-white font-medium transition-colors text-[11px]"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Live Demo</span>
                  </a>
                ) : (
                  <span className="flex items-center justify-center px-2.5 py-1.5 rounded-md bg-[#21262D] text-[#8B949E] text-[11px] cursor-not-allowed">
                    Live Demo
                  </span>
                )}

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-md bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#E6EDF3] transition-colors text-[11px]"
                >
                  <Github className="w-3 h-3 text-[#58A6FF]" />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={() => openProjectModal(project, 'readme')}
                  className="flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-md bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#E6EDF3] transition-colors text-[11px]"
                >
                  <FileText className="w-3 h-3 text-[#3FB950]" />
                  <span>README</span>
                </button>

                <button
                  onClick={() => openProjectModal(project, 'architecture')}
                  className="flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-md bg-[#21262D] hover:bg-[#30363D] border border-[#30363D] text-[#58A6FF] hover:text-[#58A6FF] transition-colors text-[11px]"
                >
                  <Layers className="w-3 h-3 text-[#D29922]" />
                  <span>Arch</span>
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Inspection Modal */}
      <ProjectModal
        project={selectedProject}
        initialTab={initialTab}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
