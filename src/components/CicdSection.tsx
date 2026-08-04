import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  GitPullRequest, 
  Zap, 
  CheckCircle2, 
  Boxes, 
  Database, 
  Server, 
  Cloud, 
  Activity, 
  Play, 
  Pause, 
  RotateCcw,
  Terminal,
  ShieldCheck
} from 'lucide-react';

const STAGES = [
  { id: 'git-push', label: 'Git Push', sub: 'trigger: main branch', icon: GitPullRequest, log: '[GIT] Push detected on origin/main (commit hash: a8f91bc)' },
  { id: 'github-actions', label: 'GitHub Actions', sub: 'runner: ubuntu-latest', icon: Zap, log: '[WORKFLOW] Initialized GitHub Actions runner #gh-actions-9821' },
  { id: 'lint', label: 'Linting', sub: 'ESLint & Prettier', icon: CheckCircle2, log: '[LINT] Checking 48 files... 0 errors, 0 warnings. Code format verified.' },
  { id: 'testing', label: 'Testing', sub: 'Jest Unit & Integration', icon: ShieldCheck, log: '[TEST] Running 32 unit tests... PASS (coverage: 94.2%)' },
  { id: 'docker-build', label: 'Docker Build', sub: 'Multi-stage Alpine', icon: Boxes, log: '[DOCKER] Building container image: novapay-backend:v2.1.0 (<85MB)' },
  { id: 'container-registry', label: 'Container Registry', sub: 'AWS ECR / Docker Hub', log: '[ECR] Pushing image tag to registry.ecr.us-east-1.amazonaws.com...', icon: Database },
  { id: 'kubernetes', label: 'Kubernetes', sub: 'Helm Rollout', icon: Server, log: '[K8S] kubectl apply -f k8s/deployment.yaml -> Rolling update 3/3 pods ready.' },
  { id: 'aws', label: 'AWS Infrastructure', sub: 'EKS & ALB Load Balancer', icon: Cloud, log: '[AWS] Target group health checks passing 200 OK across 2 AZs.' },
  { id: 'monitoring', label: 'Monitoring', sub: 'Prometheus & Grafana', icon: Activity, log: '[MONITORING] Prometheus scraping telemetry. Latency: 18ms. Availability: 99.99%' },
];

export const CicdSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % STAGES.length);
    }, 2200);

    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <section id="cicd" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-[#30363D] pb-4">
        <div>
          <h2 className="text-xl font-bold font-mono text-[#E6EDF3] flex items-center gap-2">
            <Zap className="w-5 h-5 text-[#3FB950]" />
            Automated CI/CD Pipeline Visualizer
          </h2>
          <p className="text-xs text-[#8B949E] mt-1 font-sans">
            Continuous Integration & Delivery lifecycle from Git commit to Kubernetes AWS deployment.
          </p>
        </div>

        {/* Pipeline Controls */}
        <div className="mt-4 sm:mt-0 flex items-center gap-2">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#161B22] border border-[#30363D] hover:border-[#58A6FF] text-[#E6EDF3] text-xs font-mono transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#D29922]" /> : <Play className="w-3.5 h-3.5 text-[#3FB950]" />}
            <span>{isPlaying ? 'Pause Simulator' : 'Play Simulator'}</span>
          </button>

          <button
            onClick={() => setActiveStage(0)}
            className="p-1.5 rounded-md bg-[#161B22] border border-[#30363D] hover:border-[#58A6FF] text-[#8B949E] hover:text-[#E6EDF3] transition-colors"
            title="Reset Pipeline"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Pipeline Steps Container */}
      <div className="p-6 rounded-xl bg-[#161B22] border border-[#30363D] shadow-2xl space-y-8 overflow-hidden">
        {/* Stages Grid / Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3 relative">
          {STAGES.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === idx;
            const isDone = activeStage > idx;

            return (
              <div
                key={stage.id}
                onClick={() => {
                  setActiveStage(idx);
                  setIsPlaying(false);
                }}
                className={`p-3 rounded-lg border flex flex-col items-center text-center justify-between cursor-pointer transition-all duration-300 relative ${
                  isActive
                    ? 'bg-[#161B22] border-[#58A6FF] shadow-lg shadow-[#58A6FF]/25 scale-105 z-10'
                    : isDone
                    ? 'bg-[#0D1117] border-[#3FB950]/60'
                    : 'bg-[#0D1117] border-[#30363D]'
                }`}
              >
                {/* Status Dot top right */}
                <div className="absolute top-2 right-2">
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#58A6FF] animate-ping"></span>
                  ) : isDone ? (
                    <span className="w-2 h-2 rounded-full bg-[#3FB950]"></span>
                  ) : (
                    <span className="w-2 h-2 rounded-full bg-[#30363D]"></span>
                  )}
                </div>

                <div
                  className={`p-2 rounded-md mb-2 border ${
                    isActive
                      ? 'bg-[#58A6FF]/10 border-[#58A6FF] text-[#58A6FF]'
                      : isDone
                      ? 'bg-[#3FB950]/10 border-[#3FB950] text-[#3FB950]'
                      : 'bg-[#161B22] border-[#30363D] text-[#8B949E]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="space-y-0.5">
                  <span className="font-mono text-xs font-bold text-[#E6EDF3] block line-clamp-1">
                    {stage.label}
                  </span>
                  <span className="text-[10px] text-[#8B949E] block line-clamp-1">
                    {stage.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Build Console Logs Stream */}
        <div className="rounded-lg border border-[#30363D] bg-[#0D1117] overflow-hidden">
          <div className="px-4 py-2 bg-[#161B22] border-b border-[#30363D] flex items-center justify-between text-xs font-mono text-[#8B949E]">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#3FB950]" />
              <span className="text-[#E6EDF3] font-semibold">Build Telemetry Output</span>
            </div>
            <span className="text-[#3FB950]">Stage {activeStage + 1} of 9 Active</span>
          </div>

          <div className="p-4 font-mono text-xs space-y-2 min-h-[100px]">
            {STAGES.slice(0, activeStage + 1).map((s, i) => (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={`flex items-start gap-2 ${
                  i === activeStage ? 'text-[#58A6FF] font-semibold' : 'text-[#8B949E]'
                }`}
              >
                <span className="text-[#30363D] font-mono">[{new Date().toLocaleTimeString()}]</span>
                <span>{s.log}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
