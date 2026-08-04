export interface Project {
  id: string;
  name: string;
  description: string;
  fullDescription: string;
  language: string;
  languageColor: string;
  topics: string[];
  stars: number;
  forks: number;
  updatedAt: string;
  githubUrl: string;
  liveUrl?: string;
  architectureDiagram?: string;
  readme: string;
  architecture: {
    components: string[];
    dataFlow: string;
    highlights: string[];
  };
  deployment: {
    environment: string;
    ci: string;
    hosting: string;
    containerized: boolean;
    commands: string[];
  };
  apiEndpoints: {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    path: string;
    description: string;
  }[];
}

export interface Metric {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  description: string;
  iconName: string;
  change?: string;
  status: 'optimal' | 'active' | 'synced';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl?: string;
  skills: string[];
  badgeColor: string;
  credentialId?: string;
}

export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface GitHubUserStats {
  login: string;
  name: string;
  avatarUrl: string;
  bio: string;
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
  totalCommits: number;
  totalPRs: number;
  contributionsThisYear: number;
  totalContributionsAllTime: number;
  contributionDays: ContributionDay[];
  topLanguages: { name: string; percentage: number; color: string }[];
  recentCommits: {
    repo: string;
    message: string;
    hash: string;
    date: string;
  }[];
}
