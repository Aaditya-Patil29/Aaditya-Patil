import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cpu, Tag, Layers, Server, Database, Cloud, Activity, GitBranch } from 'lucide-react';
import { TECH_STACK_CATEGORIES } from '../data/portfolioData';

const categoryIcons: Record<string, any> = {
  "Cloud & DevOps": Cloud,
  "Backend & Systems": Server,
  "Databases": Database,
  "Frontend": Layers,
  "Monitoring & Observability": Activity,
  "Version Control": GitBranch,
};

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categoriesToDisplay = selectedCategory
    ? TECH_STACK_CATEGORIES.filter((c) => c.category === selectedCategory)
    : TECH_STACK_CATEGORIES;

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-[#30363D] pb-4">
        <div>
          <h2 className="text-xl font-bold font-mono text-[#E6EDF3] flex items-center gap-2">
            <Tag className="w-5 h-5 text-[#58A6FF]" />
            GitHub Topic Tech Stack
          </h2>
          <p className="text-xs text-[#8B949E] mt-1 font-sans">
            Categorized production tools, frameworks, databases, and DevOps infrastructure technologies.
          </p>
        </div>

        {/* Category Filter Chips */}
        <div className="mt-4 sm:mt-0 flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-3 py-1 rounded-md text-xs font-mono transition-colors ${
              selectedCategory === null
                ? 'bg-[#58A6FF] text-[#0D1117] font-semibold'
                : 'bg-[#161B22] border border-[#30363D] text-[#8B949E] hover:text-[#E6EDF3]'
            }`}
          >
            All Topics
          </button>
          {TECH_STACK_CATEGORIES.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                selectedCategory === cat.category
                  ? 'bg-[#58A6FF] text-[#0D1117] font-semibold'
                  : 'bg-[#161B22] border border-[#30363D] text-[#8B949E] hover:text-[#E6EDF3]'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoriesToDisplay.map((catGroup, idx) => {
          const CategoryIcon = categoryIcons[catGroup.category] || Cpu;

          return (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-5 rounded-xl bg-[#161B22] border border-[#30363D] shadow-xl hover:border-[#58A6FF]/50 transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center gap-2 pb-3 border-b border-[#30363D]">
                  <div className="p-1.5 rounded bg-[#0D1117] border border-[#30363D] text-[#58A6FF]">
                    <CategoryIcon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold font-mono text-[#E6EDF3]">
                    {catGroup.category}
                  </h3>
                  <span className="ml-auto text-[11px] font-mono text-[#8B949E]">
                    {catGroup.topics.length} topics
                  </span>
                </div>

                {/* Topic Badges Container */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {catGroup.topics.map((topic) => (
                    <motion.a
                      key={topic.name}
                      href={`https://github.com/topics/${topic.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium bg-[#1F242C] text-[#58A6FF] border border-[#30363D] hover:bg-[#58A6FF]/15 hover:border-[#58A6FF] transition-all cursor-pointer shadow-sm"
                    >
                      <span
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: topic.color }}
                      ></span>
                      <span>{topic.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="text-[11px] font-mono text-[#8B949E] pt-2 border-t border-[#30363D]/60 flex items-center justify-between">
                <span>topic-tag Matrix</span>
                <span className="text-[#3FB950]">Verified Stack</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
