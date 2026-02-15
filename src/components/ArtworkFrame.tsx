import { type ReactNode } from "react";

type ArtworkFrameProps = {
  children: ReactNode;
  title: string;
  metadata: string;
};

export default function ArtworkFrame({ children, title, metadata }: ArtworkFrameProps) {
  return (
    <div className="flex-1 flex flex-col gap-3">
      <div className="aspect-[3/4] rounded-3xl bg-zinc-50 border border-8 border-zinc-200 flex items-center justify-center overflow-hidden">
        {children}
      </div>
      <p className="text-[11px] leading-relaxed text-zinc-500 tracking-[0.18em] uppercase">
        {title}
        <br />
        {metadata}
      </p>
    </div>
  );
}
