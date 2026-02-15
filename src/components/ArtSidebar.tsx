import Link from "next/link";
import { HOME_PREVIEW_ONLY } from "@/lib/constants";

const navItems = [
  { href: "/", label: "Foyer", icon: "home" },
  { href: "/rooms", label: "Rooms", icon: "grid" },
  { href: "/about", label: "Info", icon: "info" },
] as const;

const visibleNavItems = HOME_PREVIEW_ONLY
  ? navItems.filter((item) => item.href === "/")
  : navItems;

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 9.75L12 3l8.25 6.75M5.25 10.5V19.5A1.5 1.5 0 006.75 21h10.5a1.5 1.5 0 001.5-1.5V10.5"
      />
    </svg>
  );
}

function GridIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="4" y="4" width="6" height="6" rx="1" />
      <rect x="14" y="4" width="6" height="6" rx="1" />
      <rect x="4" y="14" width="6" height="6" rx="1" />
      <rect x="14" y="14" width="6" height="6" rx="1" />
    </svg>
  );
}

function InfoIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="9" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.25 10.5H12v5.25m-.75-7.5a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"
      />
    </svg>
  );
}

const iconMap = {
  home: HomeIcon,
  grid: GridIcon,
  info: InfoIcon,
};

export default function ArtSidebar() {
  return (
    <aside className="hidden md:flex flex-col justify-between items-center w-20 bg-background backdrop-blur-md">
      {/* Vertical divider */}
      <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-300" />

      <div className="pt-10">
        <div className="writing-vertical-rl text-sm font-bold uppercase tracking-wider text-foreground">
          Art Portfolio // Foyer
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 pb-8 text-zinc-400">
        {visibleNavItems.map(({ href, label, icon }) => {
          const Icon = iconMap[icon];
          return (
            <Link
              key={href}
              href={href}
              className="hover:text-zinc-900 transition-colors"
              aria-label={label}
            >
              <Icon className="h-5 w-5" />
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
