export type GitHubUser = {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
};

export type GitHubRepo = {
  name: string;
  full_name: string;
  html_url: string;
  description: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics?: string[];
  updated_at: string;
};

function ghHeaders() {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json"
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }
  return headers;
}

export async function fetchGitHubUser(username: string): Promise<GitHubUser> {
  const res = await fetch(`https://api.github.com/users/${username}`, {
    headers: ghHeaders(),
    // Cache for a bit; Vercel will revalidate.
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error(`GitHub user fetch failed: ${res.status}`);
  return (await res.json()) as GitHubUser;
}

export async function fetchGitHubRepo(
  owner: string,
  repo: string
): Promise<GitHubRepo> {
  const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
    headers: ghHeaders(),
    next: { revalidate: 3600 }
  });
  if (!res.ok) throw new Error(`GitHub repo fetch failed: ${res.status}`);
  return (await res.json()) as GitHubRepo;
}

export type GitHubRepoListItem = Pick<
  GitHubRepo,
  "name" | "html_url" | "description" | "language" | "updated_at"
> & {
  stargazers_count: number;
};

export async function fetchGitHubRepos(
  username: string
): Promise<GitHubRepoListItem[]> {
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?per_page=100&sort=updated&direction=desc`,
    {
      headers: ghHeaders(),
      next: { revalidate: 3600 }
    }
  );
  if (!res.ok) throw new Error(`GitHub repos fetch failed: ${res.status}`);
  return (await res.json()) as GitHubRepoListItem[];
}

