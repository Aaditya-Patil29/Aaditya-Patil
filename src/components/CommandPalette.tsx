"use client";

import { useEffect, useMemo, useState } from "react";
import { portfolioConfig } from "@/lib/config";

type PaletteItem = {
  label: string;
  href: string;
  hint?: string;
};

function openUrl(href: string) {
  window.open(href, "_blank", "noreferrer");
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const items: PaletteItem[] = useMemo(
    () => [
      { label: "GitHub", href: portfolioConfig.links.github, hint: "Profile" },
      {
        label: "LinkedIn",
        href: portfolioConfig.links.linkedin,
        hint: "Connect"
      },
      { label: "X / Twitter", href: portfolioConfig.links.x, hint: "Updates" },
      {
        label: "Email",
        href: `mailto:${portfolioConfig.links.email}`,
        hint: portfolioConfig.links.email
      }
    ],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) =>
        i.label.toLowerCase().includes(q) ||
        (i.hint ?? "").toLowerCase().includes(q) ||
        i.href.toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        const el = e.target as HTMLElement | null;
        const tag = el?.tagName?.toLowerCase();
        const isTyping =
          tag === "input" ||
          tag === "textarea" ||
          (el?.getAttribute?.("contenteditable") ?? "false") === "true";
        if (isTyping) return;
        e.preventDefault();
        setOpen(true);
      }

      if (e.key === "Escape") {
        setOpen(false);
      }

      if (e.key === "Enter" && open && filtered[0]) {
        openUrl(filtered[0].href);
        setOpen(false);
      }
    };

    const onOpenPalette = () => setOpen(true);

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("openPalette", onOpenPalette as EventListener);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("openPalette", onOpenPalette as EventListener);
    };
  }, [filtered, open]);

  useEffect(() => {
    if (open) setQuery("");
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/50 px-4 pt-20"
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-lg border border-[#30363d] bg-[#0d1117] shadow-xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b border-[#30363d] bg-[#0d1117] px-3 py-2">
          <div className="text-xs font-semibold text-[#8b949e]">/</div>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search links… (Enter opens first result)"
            className="w-full bg-transparent py-2 text-sm text-[#f0f6fc] outline-none placeholder:text-[#8b949e]"
          />
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded border border-[#30363d] bg-[#161b22] px-2 py-1 text-xs text-[#8b949e] hover:text-[#f0f6fc]"
          >
            Esc
          </button>
        </div>

        <div className="max-h-80 overflow-auto p-1">
          {filtered.length === 0 ? (
            <div className="px-3 py-8 text-center text-sm text-[#8b949e]">
              No matches
            </div>
          ) : (
            filtered.map((i) => (
              <button
                key={i.href}
                type="button"
                onClick={() => {
                  openUrl(i.href);
                  setOpen(false);
                }}
                className="flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left hover:bg-[#161b22]"
              >
                <div className="text-sm text-[#f0f6fc]">{i.label}</div>
                <div className="truncate text-xs text-[#8b949e]">
                  {i.hint ?? i.href}
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

