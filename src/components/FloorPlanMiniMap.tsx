import Link from "next/link";
import { ROOMS, HOME_PREVIEW_ONLY } from "@/lib/constants";

export default function FloorPlanMiniMap() {
  return (
    <div className="space-y-4">
      <p className="text-[11px] tracking-[0.26em] uppercase text-zinc-400">
        Floor plan mini-map
      </p>
      <div className="border border-zinc-200/80 rounded-xl overflow-hidden bg-zinc-50/70">
        <div className="grid grid-cols-2 sm:grid-cols-5 divide-x divide-zinc-200/80">
          {ROOMS.map((room) =>
            HOME_PREVIEW_ONLY ? (
              <div
                key={room.id}
                className="px-4 py-4 sm:py-5 flex flex-col justify-between h-full opacity-70"
              >
                <span className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase">
                  {room.id}
                </span>
                <span className="mt-6 text-[11px] tracking-[0.22em] uppercase text-zinc-700">
                  {room.label}
                </span>
              </div>
            ) : (
              <Link
                key={room.id}
                href={room.href}
                className="px-4 py-4 sm:py-5 flex flex-col justify-between h-full hover:bg-zinc-100/60 transition-colors"
              >
                <span className="text-[10px] tracking-[0.25em] text-zinc-400 uppercase">
                  {room.id}
                </span>
                <span className="mt-6 text-[11px] tracking-[0.22em] uppercase text-zinc-700">
                  {room.label}
                </span>
              </Link>
            )
          )}
        </div>
      </div>
    </div>
  );
}
