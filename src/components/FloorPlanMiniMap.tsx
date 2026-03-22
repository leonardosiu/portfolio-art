import Link from "next/link";
import { ROOMS, HOME_PREVIEW_ONLY } from "@/lib/constants";

export default function FloorPlanMiniMap() {
  return (
    <div className="space-y-4">
      <p className="text-[11px] font-mono tracking-[0.26em] uppercase text-muted-light opacity-80">
        Floor plan mini-map
      </p>
      <div className="border border-border rounded-xl overflow-hidden bg-surface-light/70 dark:bg-surface-dark/40">
        <div className="grid grid-cols-2 sm:grid-cols-5 divide-x divide-border">
          {ROOMS.map((room) =>
            HOME_PREVIEW_ONLY ? (
              <div
                key={room.id}
                className="px-4 py-4 sm:py-5 flex flex-col justify-between h-full opacity-70"
              >
                <span className="text-[10px] tracking-[0.25em] text-muted-light uppercase">
                  {room.id}
                </span>
                <span className="mt-6 text-[11px] tracking-[0.22em] uppercase text-text-light">
                  {room.label}
                </span>
              </div>
            ) : (
              <Link
                key={room.id}
                href={room.href}
                className="px-4 py-4 sm:py-5 flex flex-col justify-between h-full hover:bg-muted/60 transition-colors"
              >
                <span className="text-[10px] tracking-[0.25em] text-muted-light uppercase">
                  {room.id}
                </span>
                <span className="mt-6 text-[11px] tracking-[0.22em] uppercase text-text-light">
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
