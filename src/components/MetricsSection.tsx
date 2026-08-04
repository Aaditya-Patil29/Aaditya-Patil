import React from 'react';
import { motion } from 'framer-motion';
import { 
  FolderGit2, 
  GitMerge, 
  Container, 
  Cloud, 
  GitBranch, 
  GitCommitHorizontal, 
  Activity, 
  Cpu,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { METRICS_DATA } from '../data/portfolioData';

const iconMap: Record<string, any> = {
  FolderGit2,
  GitMerge,
  Container,
  Cloud,
  GitBranch,
  GitCommitHorizontal,
  Activity,
  Cpu,
};

export const MetricsSection: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-[#30363D] pb-4">
        <div>
          <h2 className="text-xl font-bold font-mono text-[#E6EDF3] flex items-center gap-2">
            <Activity className="w-5 h-5 text-[#3FB950]" />
            DevOps & Infrastructure Telemetry
          </h2>
          <p className="text-xs text-[#8B949E] mt-1 font-sans">
            Real-time metrics and system indicators across projects, clusters, and source repositories.
          </p>
        </div>
        <div className="mt-3 sm:mt-0 flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#3FB950]/10 border border-[#3FB950]/30 text-[11px] font-mono text-[#3FB950]">
            <span className="w-2 h-2 rounded-full bg-[#3FB950] animate-pulse"></span>
            Prometheus Polling (10s)
          </span>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {METRICS_DATA.map((metric, index) => {
          const IconComponent = iconMap[metric.iconName] || Cpu;

          return (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="p-5 rounded-xl bg-[#161B22] border border-[#30363D] shadow-xl hover:border-[#58A6FF]/60 hover:shadow-[#58A6FF]/5 transition-all group relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#58A6FF]/40 to-transparent group-hover:via-[#58A6FF] transition-all"></div>

              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-lg bg-[#0D1117] border border-[#30363D] text-[#58A6FF] group-hover:border-[#58A6FF] group-hover:text-[#3FB950] transition-colors">
                  <IconComponent className="w-5 h-5" />
                </div>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${
                    metric.status === 'optimal'
                      ? 'bg-[#3FB950]/10 text-[#3FB950] border-[#3FB950]/30'
                      : metric.status === 'active'
                      ? 'bg-[#58A6FF]/10 text-[#58A6FF] border-[#58A6FF]/30'
                      : 'bg-[#D29922]/10 text-[#D29922] border-[#D29922]/30'
                  }`}
                >
                  ● {metric.status.toUpperCase()}
                </span>
              </div>

              {/* Metric Value */}
              <div className="space-y-1">
                <div className="text-3xl font-bold font-mono tracking-tight text-[#E6EDF3] flex items-baseline gap-0.5">
                  {metric.prefix && <span className="text-[#8B949E] text-2xl">{metric.prefix}</span>}
                  <span>{metric.value}</span>
                  {metric.suffix && <span className="text-[#58A6FF] text-xl font-medium">{metric.suffix}</span>}
                </div>
                <div className="text-xs font-mono font-medium text-[#E6EDF3]">{metric.label}</div>
              </div>

              {/* Description */}
              <p className="text-[11px] text-[#8B949E] mt-2 border-t border-[#30363D]/60 pt-2 font-sans">
                {metric.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
