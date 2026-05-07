"use client";

import Image from "next/image";

function IconMenu() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg
      aria-hidden="true"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12 6 6 0 010-12z" />
    </svg>
  );
}

function IconBell() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 22a2.5 2.5 0 0 0 2.45-2h-4.9A2.5 2.5 0 0 0 12 22zm6-6V11a6 6 0 0 0-5-5.91V4a1 1 0 0 0-2 0v1.09A6 6 0 0 0 6 11v5l-2 2v1h16v-1l-2-2z" />
    </svg>
  );
}

function IconPlus() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19 11H13V5h-2v6H5v2h6v6h2v-6h6v-2z" />
    </svg>
  );
}

export function TopNav({
  avatarUrl,
  displayName,
  username,
  repoCount
}: {
  avatarUrl?: string;
  displayName?: string;
  username?: string;
  repoCount?: number;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#30363d] bg-[#0d1117]/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#30363d] bg-[#161b22]/60 text-[#c9d1d9] hover:text-[#f0f6fc] hover:border-[#58a6ff]"
            aria-label="Menu"
            onClick={() => window.dispatchEvent(new Event("openPalette"))}
          >
            <IconMenu />
          </button>

          <div className="hidden select-none text-sm font-semibold text-[#f0f6fc] sm:block">
            {displayName ?? "Aaditya Patil"}
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center px-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new Event("openPalette"))}
            className="flex w-full max-w-xl items-center gap-2 rounded-md border border-[#30363d] bg-[#0d1117] px-3 py-2 text-sm text-[#8b949e] hover:border-[#58a6ff]"
          >
            <span className="text-[#8b949e]">
              <IconSearch />
            </span>
            <span className="truncate">Type / to search</span>
            <span className="ml-auto flex items-center gap-2">
              <span className="hidden rounded border border-[#30363d] bg-[#161b22] px-1.5 py-0.5 text-[11px] text-[#8b949e] sm:inline">
                /
              </span>
            </span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="hidden h-9 w-9 items-center justify-center rounded-md border border-[#30363d] bg-[#161b22]/60 text-[#c9d1d9] hover:text-[#f0f6fc] hover:border-[#58a6ff] sm:inline-flex"
            aria-label="Notifications"
            onClick={() => window.dispatchEvent(new Event("openPalette"))}
          >
            <IconBell />
          </button>
          <button
            type="button"
            className="hidden h-9 w-9 items-center justify-center rounded-md border border-[#30363d] bg-[#161b22]/60 text-[#c9d1d9] hover:text-[#f0f6fc] hover:border-[#58a6ff] sm:inline-flex"
            aria-label="New"
            onClick={() => window.dispatchEvent(new Event("openPalette"))}
          >
            <IconPlus />
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded-md border border-[#30363d] bg-[#161b22]/60 px-2 py-1.5 hover:border-[#58a6ff]"
            aria-label="Profile"
            onClick={() => window.dispatchEvent(new Event("openPalette"))}
          >
            <span className="relative block h-7 w-7 overflow-hidden rounded-full">
              <Image
                src={
                  avatarUrl ??
                  "https://github.com/Aaditya-Patil29.png"
                }
                alt={username ?? "Aaditya Patil"}
                fill
                sizes="28px"
                className="object-cover"
              />
            </span>
            <span className="hidden text-sm font-semibold text-[#c9d1d9] sm:block">
              {username ?? "aaditya-patil"}
            </span>
          </button>
        </div>
      </div>

      <div className="border-t border-[#30363d] bg-[#0d1117]/90">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 px-4 py-2 text-sm">
          <TabBarItem label="Overview" active icon="overview" />
          <TabBarItem
            label="Repositories"
            count={repoCount}
            icon="repo"
          />
          <TabBarItem label="Projects" icon="projects" />
          <TabBarItem label="Packages" icon="packages" />
          <TabBarItem label="Stars" count={2} icon="stars" />
        </div>
      </div>
    </header>
  );
}

function TabBarItem({
  label,
  icon,
  count,
  active
}: {
  label: string;
  icon: "overview" | "repo" | "projects" | "packages" | "stars";
  count?: number;
  active?: boolean;
}) {
  const iconEl = (() => {
    switch (icon) {
      case "overview":
        return (
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M10 3H14V5H10V3ZM4 6H20V21H4V6ZM6 8V19H18V8H6Z" />
          </svg>
        );
      case "repo":
        return (
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 4h18v4H3V4Zm0 6h18v10H3V10Zm4 2v6h10v-6H7Z" />
          </svg>
        );
      case "projects":
        return (
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M4 6h6v6H4V6Zm10 0h6v6h-6V6ZM4 14h6v6H4v-6Zm10 0h6v6h-6v-6Z" />
          </svg>
        );
      case "packages":
        return (
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 8l-9-5-9 5 9 5 9-5Zm-9 7l-9-5v10l9 5 9-5V10l-9 5Z" />
          </svg>
        );
      case "stars":
        return (
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27Z" />
          </svg>
        );
    }
  })();

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("openPalette"))}
      className={[
        "flex items-center gap-2 rounded px-2 py-2",
        active
          ? "text-[#f0f6fc] border-b-2 border-[#58a6ff]"
          : "text-[#8b949e] hover:text-[#f0f6fc]"
      ].join(" ")}
    >
      <span className="text-[#8b949e]">{iconEl}</span>
      <span className="whitespace-nowrap">{label}</span>
      {typeof count === "number" ? (
        <span className="rounded border border-[#30363d] bg-[#161b22]/60 px-2 py-0.5 text-[11px] text-[#8b949e]">
          {count}
        </span>
      ) : null}
    </button>
  );
}

