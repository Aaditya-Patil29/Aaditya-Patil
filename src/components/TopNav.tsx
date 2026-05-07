"use client";

import Image from "next/image";

function IconGitHubMark() {
  return (
    <svg
      aria-hidden="true"
      width="32"
      height="32"
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
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

function IconGear() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.49.49 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 0 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94 0 .31.02.63.06.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z" />
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
          <span
            className="inline-flex h-9 w-9 items-center justify-center text-[#c9d1d9] hover:text-[#f0f6fc] cursor-default"
            aria-label="Menu"
          >
            <IconMenu />
          </span>

          <a
            href="https://github.com/Aaditya-Patil29"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center text-[#f0f6fc] hover:text-[#58a6ff] transition-colors"
            aria-label="GitHub Home"
          >
            <IconGitHubMark />
          </a>

          <div className="hidden select-none text-sm font-semibold text-[#f0f6fc] sm:block">
            {displayName ?? "Aaditya Patil"}
          </div>
        </div>

        {/* Dummy search bar */}
        <div className="hidden sm:flex flex-1 items-center justify-center px-2">
          <div className="flex w-full max-w-xl items-center gap-2 rounded-md border border-[#30363d] bg-[#0d1117] px-3 py-1.5 text-sm text-[#8b949e] cursor-default select-none">
            <span className="text-[#8b949e]">
              <IconSearch />
            </span>
            <span className="truncate">Type <span className="rounded border border-[#30363d] bg-[#161b22] px-1 py-0.5 text-[11px] text-[#8b949e] mx-0.5">/</span> to search</span>
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <span
            className="inline-flex h-9 w-9 items-center justify-center text-[#c9d1d9] hover:text-[#f0f6fc] cursor-default"
            aria-label="Settings"
          >
            <IconGear />
          </span>
          <span
            className="inline-flex h-9 w-9 items-center justify-center text-[#c9d1d9] hover:text-[#f0f6fc] cursor-default"
            aria-label="New"
          >
            <IconPlus />
          </span>
          <span
            className="inline-flex h-9 w-9 items-center justify-center text-[#c9d1d9] hover:text-[#f0f6fc] cursor-default"
            aria-label="Notifications"
          >
            <IconBell />
          </span>

          <a
            href="https://github.com/Aaditya-Patil29"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full overflow-hidden hover:opacity-90 transition-opacity"
            aria-label="Profile"
          >
            <span className="relative block h-8 w-8 overflow-hidden rounded-full">
              <Image
                src={
                  avatarUrl ??
                  "https://github.com/Aaditya-Patil29.png"
                }
                alt={username ?? "Aaditya Patil"}
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
          </a>
        </div>
      </div>

      <div className="border-t border-[#30363d] bg-[#0d1117]/90">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-2 px-4 py-2 text-sm overflow-x-auto whitespace-nowrap no-scrollbar">
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
    <span
      className={[
        "flex items-center gap-2 rounded px-2 py-2 cursor-default",
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
    </span>
  );
}
