import Link from "next/link";

const CURRENT_YEAR = new Date().getFullYear();
const INSTAGRAM_URL = "https://www.instagram.com/artby.leos/";
const EMAIL = "leonardo.siu.dev@gmail.com";

export default function ArtFooter() {
  return (
    <div className="border-t border-border px-8 md:px-12 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] tracking-[0.22em] uppercase text-muted-light dark:text-muted-dark">
      <span>© {CURRENT_YEAR} Leonardo Siu — All rights reserved</span>
      <div className="flex gap-6">
        <Link
          href={INSTAGRAM_URL}
          className="hover:text-foreground transition-colors"
        >
          Instagram
        </Link>
        <Link
          href={`mailto:${EMAIL}`}
          className="hover:text-foreground transition-colors"
        >
          Email
        </Link>
      </div>
    </div>
  );
}
