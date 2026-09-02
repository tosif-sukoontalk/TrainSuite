# Rebuild the landing page on the "Sukoontalk new flow" home layout

Adopt the reference app's home page structure and visual language for the marketing site, while keeping the site's purpose (Play Store download) and the no-religious-keywords rule intact.

## Design system changes

Pull the reference tokens into `src/styles.css`:

- Primary teal `166 65% 32%` (already close, retune exactly), ring/sidebar-primary to match, radius `0.5rem`.
- Typography switch from Poppins to the reference pairing: **Merriweather** for headings, **Roboto** for body text.
- Add the reference's signature section furniture as reusable pieces:
  - Section heading block: gradient-clipped title + 24-unit gradient underline bar + muted subtitle.
  - Soft blurred decorative circles with staggered `pulse-subtle` animation.
  - Geometric section separator strip between sections.
  - Card treatment: `rounded-2xl`, soft border, white-to-accent gradient fill, corner accent blob, hover lift.

## New home page section order

Mirrors the reference home (logged-out view), with the app-download intent replacing the in-app chat CTAs:

1. **Hero** — split layout: text column (left ~40%) over the decorative circle field, image column (right ~60%) with the phone/lifestyle visual. Headline in the reference's voice ("Guidance at your fingertips, peace in your heart"), subline "Consult verified guides confidentially", primary CTA = **Get it on Google Play**, secondary text link = "See how it works".
2. **How Sukoontalk works** — 3 numbered cards: Choose a guide → Start a free 2-minute chat → Continue if satisfied (add wallet minutes).
3. **Browse by category** — 8 category cards in a 2/4-column grid, using neutral life-area names (Family & Marriage, Emotional Wellbeing, Career & Work, Youth & Studies, Money & Ethics, Daily Habits, Relationships, Personal Growth). Cards are informational only, no links out.
4. **Meet the guides** — 3-4 illustrative guide cards (avatar, languages, focus areas, rating, per-minute rate) presented as examples of who you'll find in the app.
5. **What our users say** — 3 testimonial cards with static, neutral quotes.
6. **Why people choose Sukoontalk** — 6 benefit cards (Complete privacy, Available 24/7, Compassionate care, Verified guides, Top rated, Instant connection).
7. **FAQ** — keep the existing 10-question accordion, restyled to the new card language.
8. **Download CTA band** — full-width primary-teal band with the Play Store button, replacing the reference's "Start your free chat" band.

## Other pages

- Header/footer keep their current links but pick up the new fonts, radius and teal accents so the whole site matches.
- Terms, Privacy and Delete Account pages are untouched in content; only the shared typography/token changes flow through.

## Content and compliance

- No religious vocabulary anywhere in the new copy: guides, not scholars-by-title; life categories, not doctrinal categories; "guidance" and "calm" instead of spiritual/faith terms.
- Decorative geometry stays abstract (existing lattice asset), which carries the visual mood without readable cues.
- Testimonials, guide profiles and ratings are illustrative placeholder content, not real user data — flagged so you can swap in real copy later.

## Technical notes

- New components under `src/components/home/`: `HeroSection`, `HowItWorksSection`, `CategoriesSection`, `GuidesSection`, `TestimonialsSection`, `BenefitsSection`, `FaqSection`, `DownloadCtaSection`, plus shared `SectionHeading` and `SectionSeparator` in `src/components/site/`.
- `src/routes/index.tsx` becomes a thin composition of those sections; head metadata stays as-is.
- Fonts loaded via `<link>` in `src/routes/__root.tsx` (Merriweather + Roboto), `--font-sans`/`--font-serif` registered in the `@theme` block.
- One new hero image generated for the split hero; existing lattice and phone mockup assets are reused.
