import Image from "next/image";
import { ExternalLink } from "@/components/ExternalLink";
import { IconGitHub, IconLinkedIn, IconMail, IconX } from "@/components/Icons";
import { PinnedCard } from "@/components/PinnedCard";
import { TopNav } from "@/components/TopNav";
import { CommandPalette } from "@/components/CommandPalette";
import { portfolioConfig } from "@/lib/config";
import { fetchGitHubRepo, fetchGitHubRepos, fetchGitHubUser } from "@/lib/github";

export default async function Home() {
  const username = portfolioConfig.githubUsername;

  const user = await fetchGitHubUser(username).catch(() => null);
  const repos = await fetchGitHubRepos(username).catch(() => []);
  const avatarUrl = user?.avatar_url ?? `https://github.com/${username}.png`;
  const displayName = user?.name ?? "Aaditya Patil";
  const login = user?.login ?? "aaditya-patil";

  const normalize = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, " ")
      .trim();

  const tokensFrom = (s: string) =>
    normalize(s)
      .split(" ")
      .map((t) => t.trim())
      .filter((t) => t.length >= 3);

  const scoreRepo = (repo: { name: string; description: string | null; language: string | null }, tokens: string[]) => {
    const name = normalize(repo.name);
    const desc = normalize(repo.description ?? "");

    let score = 0;
    for (const t of tokens) {
      if (name.includes(t)) score += 3;
      else if (desc.includes(t)) score += 2;
    }
    if (repo.language) score += 1;
    return score;
  };

  const featured = await Promise.all(
    portfolioConfig.featured.map(async (f) => {
      // Default behavior: dummy link until we match a repo.
      let href = "#";
      let description = f.description;
      let tags = [...f.tags];

      if (!f.repo) {
        const tokens = [
          ...tokensFrom(f.title),
          ...tokensFrom(f.description),
          ...tokensFrom(f.tags.join(" "))
        ];

        const best = repos
          .slice(0, 100)
          .map((r) => ({
            repo: r,
            score: scoreRepo(
              r,
              tokens
            )
          }))
          .sort((a, b) => b.score - a.score)[0];

        // Only accept a match if we have some confidence.
        if (best && best.score >= 5) {
          href = best.repo.html_url;
          description = best.repo.description ?? f.description;
          tags = [
            ...(best.repo.language ? [best.repo.language] : []),
            ...f.tags
          ];
        }

        return { title: f.title, description, tags, href };
      }

      const repo = await fetchGitHubRepo(username, f.repo).catch(() => null);
      if (!repo) return { title: f.title, description, tags, href };
      return {
        title: f.title || repo.name,
        description: repo.description ?? description,
        tags: [
          ...(repo.language ? [repo.language] : []),
          ...(repo.topics?.slice(0, 3) ?? []),
          ...f.tags
        ],
        href: repo.html_url
      };
    })
  );
  return (
    <div className="min-h-screen">
      <TopNav
        avatarUrl={avatarUrl}
        displayName={displayName}
        username={login}
        repoCount={user?.public_repos}
      />
      <CommandPalette />

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-6">
        <div className="grid gap-8 md:grid-cols-[320px_1fr]">
          <aside className="md:sticky md:top-24 md:self-start">
            <div className="flex flex-col items-center text-center">
              <div className="relative h-28 w-28 overflow-hidden rounded-full border border-[#30363d] md:h-[230px] md:w-[230px]">
                <Image
                  src={user?.avatar_url ?? `https://github.com/${username}.png`}
                  alt={user?.name ?? "Aaditya Patil"}
                  fill
                  sizes="(max-width: 768px) 112px, 230px"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="min-w-0">
                <h1 className="mt-6 text-3xl font-semibold tracking-tight text-[#f0f6fc] md:text-4xl">
                  {user?.name ?? "Aaditya Patil"}
                </h1>
                <p className="mt-1 text-sm text-[#f0f6fc] md:text-base">
                  <span className="text-[#58a6ff]">
                    {user?.login ?? "aaditya-patil"}
                  </span>
                </p>
                <p className="mt-4 max-w-[26ch] whitespace-pre-line text-base leading-7 text-[#8b949e] md:text-[16px]">
                  {user?.bio
                    ? user.bio
                    : "DevOps Engineer | Full Stack Developer. I build reliable CI/CD pipelines, ship cloud-native apps, and like making systems boring (in the best way)."}
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <ExternalLink
                    href={portfolioConfig.links.x}
                    label="X"
                    icon={false}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#30363d] bg-[#161b22]/70 text-[#c9d1d9] hover:border-[#58a6ff] hover:text-[#f0f6fc]"
                  >
                    <IconX />
                  </ExternalLink>
                  <ExternalLink
                    href={portfolioConfig.links.github}
                    label="GitHub"
                    icon={false}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#30363d] bg-[#161b22]/70 text-[#c9d1d9] hover:border-[#58a6ff] hover:text-[#f0f6fc]"
                  >
                    <IconGitHub />
                  </ExternalLink>
                  <ExternalLink
                    href={portfolioConfig.links.linkedin}
                    label="LinkedIn"
                    icon={false}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#30363d] bg-[#161b22]/70 text-[#c9d1d9] hover:border-[#58a6ff] hover:text-[#f0f6fc]"
                  >
                    <IconLinkedIn />
                  </ExternalLink>
                  <ExternalLink
                    href={`mailto:${portfolioConfig.links.email}`}
                    label="Email"
                    icon={false}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#30363d] bg-[#161b22]/70 text-[#c9d1d9] hover:border-[#58a6ff] hover:text-[#f0f6fc]"
                  >
                    <IconMail />
                  </ExternalLink>
                </div>

                {user ? (
                  <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-xs text-[#8b949e]">
                    <div>
                      <span className="font-semibold text-[#c9d1d9]">
                        {user.followers}
                      </span>{" "}
                      followers
                    </div>
                    <div>
                      <span className="font-semibold text-[#c9d1d9]">
                        {user.public_repos}
                      </span>{" "}
                      repos
                    </div>
                    <div>
                      <span className="font-semibold text-[#c9d1d9]">
                        {user.following}
                      </span>{" "}
                      following
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

          </aside>

          <section className="space-y-6">
            <div className="rounded-lg border border-[#30363d] bg-[#0d1117] p-5">
              <div className="text-sm font-semibold text-[#f0f6fc]">YouTube</div>
              <div className="mt-2 text-sm text-[#8b949e]">
                <span className="text-[#f0f6fc]">Sponsors</span> can reach me at{" "}
                <a
                  className="text-[#58a6ff] hover:underline"
                  href={`mailto:${portfolioConfig.links.email}`}
                >
                  {portfolioConfig.links.email}
                </a>
              </div>
            </div>

            <div className="rounded-lg border border-[#30363d] bg-[#0d1117] p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-semibold text-[#f0f6fc]">Pinned</div>
                  <div className="mt-1 text-sm text-[#8b949e]">
                    A few things I’m proud of building.
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {featured.map((f) => (
                  <PinnedCard
                    key={f.title}
                    title={f.title}
                    description={f.description}
                    tags={f.tags}
                    href={f.href}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-[#30363d] bg-[#0d1117] p-5">
              <div className="text-sm font-semibold text-[#f0f6fc]">Platforms</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <ExternalLink
                  href={portfolioConfig.links.linkedin}
                  label="LinkedIn"
                  className="rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1.5 text-sm text-[#c9d1d9] hover:border-[#58a6ff]"
                >
                  LinkedIn
                </ExternalLink>
                <ExternalLink
                  href={portfolioConfig.links.github}
                  label="GitHub"
                  className="rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1.5 text-sm text-[#c9d1d9] hover:border-[#58a6ff]"
                >
                  GitHub
                </ExternalLink>
                <ExternalLink
                  href={portfolioConfig.links.x}
                  label="X"
                  className="rounded-full border border-[#30363d] bg-[#161b22] px-3 py-1.5 text-sm text-[#c9d1d9] hover:border-[#58a6ff]"
                >
                  X / Twitter
                </ExternalLink>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

