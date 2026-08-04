import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Star, 
  GitCommitHorizontal, 
  GitPullRequest, 
  Users, 
  FolderGit2, 
  PieChart as PieIcon, 
  TrendingUp, 
  RefreshCw,
  Clock,
  GitBranch
} from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis } from 'recharts';
import { fetchGitHubStats, fallbackGitHubStats } from '../services/githubApi';
import { GitHubUserStats } from '../types';

export const GitHubSection: React.FC = () => {
  const [stats, setStats] = useState<GitHubUserStats>(fallbackGitHubStats);
  const [loading, setLoading] = useState(false);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const loadData = async () => {
    setLoading(true);
    const data = await fetchGitHubStats();
    setStats(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Group contributionDays into weekly columns of 7 days
  const weeks = React.useMemo(() => {
    if (!stats.contributionDays || stats.contributionDays.length === 0) return [];
    const result: typeof stats.contributionDays[] = [];
    let currentWeek: typeof stats.contributionDays = [];

    stats.contributionDays.forEach((day) => {
      currentWeek.push(day);
      if (currentWeek.length === 7) {
        result.push(currentWeek);
        currentWeek = [];
      }
    });
    if (currentWeek.length > 0) {
      result.push(currentWeek);
    }
    return result;
  }, [stats.contributionDays]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [weeks]);

  const getHeatColor = (level: number, count: number) => {
    if (level === 1 || (count >= 1 && count < 3)) return '#0E4429';
    if (level === 2 || (count >= 3 && count < 5)) return '#006D32';
    if (level === 3 || (count >= 5 && count < 7)) return '#26A641';
    if (level === 4 || count >= 7) return '#39D353';
    return '#161B22';
  };

  return (
    <section id="github" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 border-b border-[#30363D] pb-4">
        <div>
          <h2 className="text-xl font-bold font-mono text-[#E6EDF3] flex items-center gap-2">
            <Github className="w-5 h-5 text-[#58A6FF]" />
            GitHub Dashboard & Telemetry
          </h2>
          <p className="text-xs text-[#8B949E] mt-1 font-sans">
            Real-time GitHub activity, top programming languages, contribution calendar, and commit stream.
          </p>
        </div>

        <div className="mt-3 sm:mt-0 flex items-center gap-3 font-mono text-xs text-[#8B949E]">
          <a
            href={`https://github.com/${stats.login}`}
            target="_blank"
            rel="noreferrer"
            className="text-[#58A6FF] hover:underline"
          >
            @{stats.login}
          </a>
          <button
            onClick={loadData}
            disabled={loading}
            className="p-1.5 rounded-md bg-[#161B22] border border-[#30363D] hover:border-[#58A6FF] text-[#8B949E] hover:text-[#E6EDF3] transition-colors"
            title="Refresh GitHub API Data"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-[#58A6FF]' : ''}`} />
          </button>
        </div>
      </div>

      {/* GitHub Top Stats Summary Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 font-mono">
        <div className="p-4 rounded-xl bg-[#161B22] border border-[#30363D] space-y-1">
          <span className="text-xs text-[#8B949E] block flex items-center gap-1.5">
            <FolderGit2 className="w-3.5 h-3.5 text-[#58A6FF]" /> Repositories
          </span>
          <span className="text-2xl font-bold text-[#E6EDF3]">{stats.publicRepos}</span>
        </div>

        <div className="p-4 rounded-xl bg-[#161B22] border border-[#30363D] space-y-1">
          <span className="text-xs text-[#8B949E] block flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-[#D29922]" /> Stars Earned
          </span>
          <span className="text-2xl font-bold text-[#E6EDF3]">{stats.totalStars}</span>
        </div>

        <div className="p-4 rounded-xl bg-[#161B22] border border-[#30363D] space-y-1">
          <span className="text-xs text-[#8B949E] block flex items-center gap-1.5">
            <GitCommitHorizontal className="w-3.5 h-3.5 text-[#3FB950]" /> Commits
          </span>
          <span className="text-2xl font-bold text-[#E6EDF3]">&gt;{stats.totalCommits}</span>
        </div>

        <div className="p-4 rounded-xl bg-[#161B22] border border-[#30363D] space-y-1">
          <span className="text-xs text-[#8B949E] block flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-[#A100FF]" /> Followers
          </span>
          <span className="text-2xl font-bold text-[#E6EDF3]">{stats.followers}</span>
        </div>
      </div>

      {/* Contribution Calendar Graph */}
      <div className="p-6 rounded-xl bg-[#161B22] border border-[#30363D] shadow-xl mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#30363D] pb-3 text-xs font-mono gap-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-[#3FB950]" />
            <span className="text-[#E6EDF3] font-bold">
              {stats.totalContributionsAllTime || stats.contributionsThisYear} total GitHub contributions ({stats.contributionsThisYear} in the last year)
            </span>
          </div>
          <div className="flex items-center gap-1 text-[11px] text-[#8B949E]">
            <span>Less</span>
            <span className="w-2.5 h-2.5 rounded-sm bg-[#161B22] border border-[#30363D]"></span>
            <span className="w-2.5 h-2.5 rounded-sm bg-[#0E4429]"></span>
            <span className="w-2.5 h-2.5 rounded-sm bg-[#006D32]"></span>
            <span className="w-2.5 h-2.5 rounded-sm bg-[#26A641]"></span>
            <span className="w-2.5 h-2.5 rounded-sm bg-[#39D353]"></span>
            <span>More</span>
          </div>
        </div>

        {/* Heat Grid */}
        <div ref={scrollRef} className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#30363D]">
          <div className="flex gap-1 min-w-[700px]">
            {weeks.map((week, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {week.map((day, dIdx) => (
                  <div
                    key={day.date || dIdx}
                    className="w-3 h-3 rounded-sm border border-[#30363D]/40 transition-colors hover:scale-125 hover:border-[#58A6FF]"
                    style={{ backgroundColor: getHeatColor(day.level, day.count) }}
                    title={`${day.date}: ${day.count} contribution${day.count === 1 ? '' : 's'}`}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Languages Chart & Recent Commits Stream Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recharts Top Languages Pie/Bar Breakdown */}
        <div className="lg:col-span-5 p-5 rounded-xl bg-[#161B22] border border-[#30363D] shadow-xl space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#30363D]">
            <PieIcon className="w-4 h-4 text-[#58A6FF]" />
            <h3 className="text-sm font-bold font-mono text-[#E6EDF3]">
              Top Languages Breakdown
            </h3>
          </div>

          <div className="h-[200px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={stats.topLanguages}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={75}
                  paddingAngle={4}
                  dataKey="percentage"
                >
                  {stats.topLanguages.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#0D1117', borderColor: '#30363D', borderRadius: '8px', fontSize: '12px', fontFamily: 'monospace' }}
                  itemStyle={{ color: '#E6EDF3' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Languages Legend */}
          <div className="space-y-1.5 font-mono text-xs border-t border-[#30363D] pt-3">
            {stats.topLanguages.map((lang) => (
              <div key={lang.name} className="flex items-center justify-between text-[#8B949E]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: lang.color }}></span>
                  <span className="text-[#E6EDF3]">{lang.name}</span>
                </div>
                <span>{lang.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Commits Timeline Stream */}
        <div className="lg:col-span-7 p-5 rounded-xl bg-[#161B22] border border-[#30363D] shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-[#30363D]">
            <div className="flex items-center gap-2">
              <GitCommitHorizontal className="w-4 h-4 text-[#3FB950]" />
              <h3 className="text-sm font-bold font-mono text-[#E6EDF3]">
                Recent GitHub Commit Activity
              </h3>
            </div>
            <span className="text-[11px] font-mono text-[#8B949E]">main branch</span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {stats.recentCommits.map((commit) => (
              <div
                key={commit.hash}
                className="p-3 rounded-lg bg-[#0D1117] border border-[#30363D] hover:border-[#58A6FF] transition-colors space-y-1.5"
              >
                <div className="flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#161B22] border border-[#30363D] text-[#58A6FF] font-bold">
                      {commit.repo}
                    </span>
                    <span className="text-[#8B949E]">{commit.hash}</span>
                  </div>
                  <span className="text-[#8B949E] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#8B949E]" />
                    {commit.date}
                  </span>
                </div>
                <p className="text-[#E6EDF3] font-sans text-xs">{commit.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
