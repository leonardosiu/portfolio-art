"use client";

import Link from "next/link";
import ArtSidebar from "@/components/ArtSidebar";
import ArtHeader from "@/components/ArtHeader";
import FoyerHero from "@/components/FoyerHero";
import FloorPlanMiniMap from "@/components/FloorPlanMiniMap";
import ArtworkFrame from "@/components/ArtworkFrame";
import ArtworkFrameSquare from "@/components/ArtworkFrameSquare";
import ArtFooter from "@/components/ArtFooter";

export default function PortfolioArtPage() {
  return (
    <div className="min-h-screen flex flex-col text-zinc-800">
      <div className="flex flex-1">
        <ArtSidebar />

        <main className="flex-1 flex flex-col">
          <ArtHeader />

          <section className="flex-1 flex flex-col px-6 md:px-10 pb-10">
            <div className="flex-1 rounded-3xl bg-white/85 border border-white/70 shadow-[0_30px_80px_rgba(15,23,42,0.18)] overflow-hidden flex flex-col">
              <div className="flex flex-1 flex-col lg:flex-row gap-10 lg:gap-16 px-8 md:px-12 pt-10 pb-12">
                <div className="flex-1 max-w-xl space-y-10">
                  <FoyerHero />
                  <FloorPlanMiniMap />
                  <Link
                    href="/notes"
                    className="inline-flex items-center justify-center border border-zinc-300 px-5 py-2 text-[11px] tracking-[0.24em] uppercase text-zinc-600 bg-white/80 hover:bg-zinc-50 transition-colors rounded-sm"
                  >
                    Opening notes
                  </Link>
                </div>

                <div className="flex-[0.9] flex flex-col justify-center gap-10">
                  <div className="flex flex-col sm:flex-row gap-8">
                    <ArtworkFrame
                      title="Untitled, 2026"
                      metadata="35mm DIGITAL SCAN // ARCHIVE 09"
                    >
                      <div className="w-[72%] h-[76%] rounded-2xl bg-gradient-to-tr from-zinc-300 to-zinc-50 shadow-[0_18px_40px_rgba(15,23,42,0.16)]" />
                    </ArtworkFrame>
                    <ArtworkFrameSquare
                      title="Process Study"
                      metadata="GLAZE INTERACTION NO. 4"
                    >
                      <div className="w-[64%] h-[64%] rounded-full bg-gradient-to-tr from-zinc-500 to-zinc-200 blur-[1px]" />
                    </ArtworkFrameSquare>
                  </div>
                </div>
              </div>

              <ArtFooter />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
