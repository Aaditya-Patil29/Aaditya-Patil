import Link from "next/link";

export function PinnedCard({
  title,
  description,
  tags,
  href
}: {
  title: string;
  description: string;
  tags: string[];
  href: string;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group rounded-md border border-[#30363d] bg-[#0d1117] p-4 hover:border-[#58a6ff]"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-[#58a6ff] group-hover:underline">
            {title}
          </div>
          <div className="mt-1 max-h-10 overflow-hidden text-sm text-[#8b949e]">
            {description}
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[#30363d] bg-[#161b22] px-2 py-0.5 text-[11px] text-[#c9d1d9]"
          >
            {t}
          </span>
        ))}
      </div>
    </Link>
  );
}

