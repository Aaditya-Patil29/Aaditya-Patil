import Link from "next/link";
import { IconExternalLink } from "@/components/Icons";

export function ExternalLink({
  href,
  label,
  children,
  className,
  icon = true
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  className?: string;
  icon?: boolean;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className={className ?? "inline-flex items-center gap-2 rounded-md px-2 py-1 text-[#c9d1d9] hover:bg-[#161b22] hover:text-[#f0f6fc]"}
    >
      {children}
      {icon ? <IconExternalLink /> : null}
    </Link>
  );
}

