export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-zinc-800">
      <div className="flex flex-1">
        {/* Left rail */}
        <aside className="hidden md:flex flex-col justify-between items-center w-16 border-r border-zinc-200/70 bg-white/70 backdrop-blur-md">
          <div className="pt-10">
            <div className="writing-vertical-rl text-[10px] uppercase tracking-[0.25em] text-zinc-400">
              Art Portfolio // Foyer
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 pb-8 text-zinc-400">
            {/* Home icon */}
            <button
              type="button"
              className="hover:text-zinc-900 transition-colors"
              aria-label="Foyer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
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
            </button>
            {/* Grid icon */}
            <button
              type="button"
              className="hover:text-zinc-900 transition-colors"
              aria-label="Rooms"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="4" y="4" width="6" height="6" rx="1" />
                <rect x="14" y="4" width="6" height="6" rx="1" />
                <rect x="4" y="14" width="6" height="6" rx="1" />
                <rect x="14" y="14" width="6" height="6" rx="1" />
              </svg>
            </button>
            {/* Info icon */}
            <button
              type="button"
              className="hover:text-zinc-900 transition-colors"
              aria-label="Info"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5"
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
            </button>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 flex flex-col">
          {/* Top navigation / breadcrumb */}
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
            <button
              type="button"
              className="flex items-center gap-2 text-[10px] tracking-[0.22em] text-zinc-400 hover:text-zinc-700 transition-colors"
            >
              <span className="text-xs">←</span>
              <span>Return to portfolio</span>
            </button>
          </header>

          {/* Foyer panel */}
          <section className="flex-1 flex flex-col px-6 md:px-10 pb-10">
            <div className="flex-1 rounded-3xl bg-white/85 border border-white/70 shadow-[0_30px_80px_rgba(15,23,42,0.18)] overflow-hidden flex flex-col">
              <div className="flex flex-1 flex-col lg:flex-row gap-10 lg:gap-16 px-8 md:px-12 pt-10 pb-12">
                {/* Left column: intro + floor plan */}
                <div className="flex-1 max-w-xl space-y-10">
                  <div className="space-y-4">
                    <p className="text-[11px] tracking-[0.26em] uppercase text-zinc-400">
                      Art Portfolio // Foyer
                    </p>
                    <h1 className="text-4xl md:text-5xl lg:text-[52px] leading-tight font-light">
                      <span className="font-medium">Art,</span>{" "}
                      <span className="italic text-zinc-500">in progress.</span>
                    </h1>
                    <p className="text-sm md:text-base text-zinc-500 max-w-md leading-relaxed">
                      A small, intentional museum of photography and ceramics—
                      opening soon.
                    </p>
                  </div>

                  {/* Floor plan mini-map */}
                  <div className="space-y-4">
                    <p className="text-[11px] tracking-[0.26em] uppercase text-zinc-400">
                      Floor plan mini-map
                    </p>
                    <div className="border border-zinc-200/80 rounded-xl overflow-hidden bg-zinc-50/70">
                      <div className="grid grid-cols-2 sm:grid-cols-5 divide-x divide-zinc-200/80">
                        {[
                          { id: "01", label: "Street" },
                          { id: "02", label: "Objects" },
                          { id: "03", label: "Light" },
                          { id: "04", label: "Ceramics" },
                          { id: "05", label: "Cats" },
                        ].map((room) => (
                          <div
                            key={room.id}
                            className="px-4 py-4 sm:py-5 flex flex-col justify-between h-full"
                          >
                            <span className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase">
                              {room.id}
                            </span>
                            <span className="mt-6 text-[11px] tracking-[0.22em] uppercase text-zinc-700">
                              {room.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Opening notes button */}
                  <button
                    type="button"
                    className="inline-flex items-center justify-center border border-zinc-300 px-5 py-2 text-[11px] tracking-[0.24em] uppercase text-zinc-600 bg-white/80 hover:bg-zinc-50 transition-colors rounded-sm"
                  >
                    Opening notes
                  </button>
                </div>

                {/* Right column: artwork previews */}
                <div className="flex-[0.9] flex flex-col justify-center gap-10">
                  <div className="flex flex-col sm:flex-row gap-8">
                    {/* Primary frame */}
                    <div className="flex-1 flex flex-col gap-3">
                      <div className="aspect-[3/4] rounded-3xl bg-zinc-50 border border-zinc-200 flex items-center justify-center">
                        <div className="w-[72%] h-[76%] rounded-2xl bg-gradient-to-tr from-zinc-300 to-zinc-50 shadow-[0_18px_40px_rgba(15,23,42,0.16)]" />
                      </div>
                      <p className="text-[11px] leading-relaxed text-zinc-500 tracking-[0.18em] uppercase">
                        Untitled, 2026
                        <br />
                        35mm DIGITAL SCAN // ARCHIVE 09
                      </p>
                    </div>

                    {/* Secondary frame */}
                    <div className="flex-1 flex flex-col gap-3">
                      <div className="aspect-square rounded-3xl bg-zinc-50 border border-zinc-200 flex items-center justify-center">
                        <div className="w-[64%] h-[64%] rounded-full bg-gradient-to-tr from-zinc-500 to-zinc-200 blur-[1px]" />
                      </div>
                      <p className="text-[11px] leading-relaxed text-zinc-500 tracking-[0.18em] uppercase">
                        Process Study
                        <br />
                        GLAZE INTERACTION NO. 4
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card footer */}
              <div className="border-t border-zinc-200/80 px-8 md:px-12 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] tracking-[0.22em] uppercase text-zinc-400">
                <span>© {new Date().getFullYear()} Leo Chen — All rights reserved</span>
                <div className="flex gap-6">
                  <button
                    type="button"
                    className="hover:text-zinc-700 transition-colors"
                  >
                    Instagram
                  </button>
                  <button
                    type="button"
                    className="hover:text-zinc-700 transition-colors"
                  >
                    Email
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* Bottom-right circular control */}
      <button
        type="button"
        aria-label="Toggle ambiance"
        className="fixed right-6 bottom-6 h-10 w-10 rounded-full border border-white/80 bg-white/90 shadow-[0_12px_30px_rgba(15,23,42,0.18)] flex items-center justify-center text-xs text-zinc-400 hover:text-zinc-700 hover:bg-slate-50 transition-colors"
      >
        ◑
      </button>
    </div>
  );
}
