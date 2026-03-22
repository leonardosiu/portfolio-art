import Link from "next/link";

const PORTFOLIO_URL = "https://leosiu.dev";

export default function ArtHeader() {
  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-6 text-[11px] tracking-[0.24em] uppercase text-muted-light dark:text-muted-dark">
      <div className="flex items-center gap-4">
        <span className="font-semibold lowercase text-text-light tracking-[0.28em]">
          art.leosiu.dev
        </span>
        <span className="h-px w-6 bg-gray-300" />
        <span>WIP</span>
        <span className="text-muted-light opacity-70">•</span>
        <span>Foyer</span>
      </div>
      <Link
        href={PORTFOLIO_URL}
        className="flex items-center gap-2 text-[10px] tracking-[0.22em] text-muted-light hover:text-foreground transition-colors cursor-pointer"
      >
        <span className="text-xs">←</span>
        <span>Return to portfolio</span>
      </Link>
    </header>
  );
}
