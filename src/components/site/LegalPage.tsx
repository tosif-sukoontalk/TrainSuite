import type { LegalBlock } from "@/content/types";
import patternLattice from "@/assets/pattern-lattice.jpg";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function LegalPage({
  title,
  updated,
  blocks,
}: {
  title: string;
  updated: string;
  blocks: LegalBlock[];
}) {
  const headings = blocks.filter((b): b is { t: "h"; x: string } => b.t === "h");

  return (
    <div>
      <div className="relative overflow-hidden border-b border-border bg-secondary/50">
        <img
          src={patternLattice}
          alt=""
          aria-hidden="true"
          width={1536}
          height={1024}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-14">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-[16rem_1fr]">
        <aside className="hidden lg:block">
          <nav className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-2">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              On this page
            </p>
            <ul className="space-y-1.5 text-sm">
              {headings.map((h) => (
                <li key={h.x}>
                  <a
                    href={`#${slugify(h.x)}`}
                    className="block leading-snug text-muted-foreground transition-colors hover:text-primary"
                  >
                    {h.x}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <article className="max-w-3xl">
          {blocks.map((b, i) => {
            if (b.t === "h") {
              return (
                <h2
                  key={i}
                  id={slugify(b.x)}
                  className="mt-10 scroll-mt-24 border-l-4 border-primary pl-3 text-lg font-semibold text-foreground first:mt-0"
                >
                  {b.x}
                </h2>
              );
            }
            if (b.t === "li") {
              return (
                <p
                  key={i}
                  className="mt-2.5 flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  style={{ paddingLeft: `${b.l * 1.25}rem` }}
                >
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
                  <span>{b.x}</span>
                </p>
              );
            }
            return (
              <p key={i} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {b.x}
              </p>
            );
          })}
        </article>
      </div>
    </div>
  );
}
