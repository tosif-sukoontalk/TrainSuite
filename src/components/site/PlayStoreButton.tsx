import { PLAY_STORE_URL, openPlayStore } from "@/lib/site";
import { cn } from "@/lib/utils";

export function PlayStoreButton({ className }: { className?: string }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        openPlayStore();
      }}
      className={cn(
        "inline-flex items-center gap-3 rounded-xl bg-foreground px-5 py-3 text-background shadow-lg shadow-foreground/15 transition-transform hover:scale-[1.02]",
        className,
      )}
    >
      <svg viewBox="0 0 512 512" className="h-7 w-7" aria-hidden="true">
        <path fill="#34A853" d="M79 34l243 222-60 60L61 60c2-11 9-21 18-26z" />
        <path fill="#4285F4" d="M61 60l201 256L61 452c-4-6-6-13-6-21V81c0-8 2-15 6-21z" />
        <path fill="#FBBC04" d="M262 316l60-60 96 55c17 10 17 34 0 44l-96 55-60-94z" />
        <path fill="#EA4335" d="M61 452l201-196 60 60L79 478c-9-5-16-15-18-26z" />
      </svg>
      <span className="text-left leading-tight">
        <span className="block text-[0.65rem] uppercase tracking-widest opacity-80">
          Get it on
        </span>
        <span className="block text-base font-semibold">Google Play</span>
      </span>
    </a>
  );
}
