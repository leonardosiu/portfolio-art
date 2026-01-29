import Link from "next/link";

const PORTFOLIO_URL = "https://leosiu.dev";

export default function ArtHeader() {
  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-6 text-[11px] tracking-[0.24em] uppercase text-zinc-500">
      <div className="flex items-center gap-4">
        <span className="font-semibold text-zinc-800 tracking-[0.28em]">
          art.leo.dev
        </span>
        <span className="h-px w-6 bg-zinc-300" />
        <span>WIP</span>
        <span className="text-zinc-400">•</span>
        <span>Foyer</span>
      </div>
      <Link
        href={PORTFOLIO_URL}
        className="flex items-center gap-2 text-[10px] tracking-[0.22em] text-zinc-400 hover:text-zinc-700 transition-colors cursor-pointer"
      >
        <span className="text-xs">←</span>
        <span>Return to portfolio</span>
      </Link>
    </header>
  );
}
