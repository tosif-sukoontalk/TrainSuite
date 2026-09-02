# Sukoontalk Landing Site

A four-page marketing site whose main job is driving Play Store installs, plus the legal and account-deletion pages the store listing requires.

## Design system (matched to sukootalk-connect)

- Teal primary (`hsl(166 65% 32%)`), white background, soft neutral greys, 0.5rem radius, subtle card shadows and gradient accents — ported into `src/styles.css` as oklch tokens.
- Poppins typeface, loaded via a `<link>` in the root route head.
- Visual identity stays culturally themed through graphics only: geometric star/arabesque lattice patterns, crescent-and-lantern silhouettes, arched frames, teal/gold palette. No readable religious words anywhere in copy, alt text, meta tags, filenames, or JSON-LD.

## Pages

**1. `/` — Landing page**
- Sticky header with logo and links (Home, FAQs, Privacy, Terms) plus a Play Store button.
- Hero: headline about calm, private guidance conversations; phone mockup with patterned backdrop; primary "Get it on Google Play" CTA linking to `https://play.google.com/store/apps/details?id=com.sukoontalks.app&hl=en_IN`.
- Download section: Android badge, QR-style block, rating/installs strip, 3-step "How it works".
- Why Sukoontalk: verified guides, private calls (number never shared), audio chat, wallet and refunds.
- FAQ accordion (8–10 general questions: what the app is, is it free, first free chat, privacy of phone number, payments and wallet, refunds, how to delete an account, support contact).
- Footer with company details, support@sukoontalk.in, and links to Terms, Privacy, Delete Account.

**2. `/terms` — Terms & Conditions**
- Full text of the attached PDF, published as-is (already vetted), rendered as readable sections with a sticky in-page section index on desktop.

**3. `/privacy` — Privacy Policy**
- Full text of the attached PDF with wording sanitized: religious role names replaced by neutral equivalents ("lifestyle scholars", "guidance practitioners"); all substantive meaning, rights, and legal references preserved.

**4. `/delete-account` — Account deletion request**
- Form: Name, Phone, Email, optional reason; client-side validation.
- No backend: on submit it composes a prefilled email to support@sukoontalk.in (mailto) and shows a confirmation state stating the account will be deleted within 3 business days.
- Explains what data is removed and what may be retained for legal reasons; links to Privacy Policy.

## Technical notes

- TanStack Start file routes: `src/routes/index.tsx` (replacing the placeholder), `terms.tsx`, `privacy.tsx`, `delete-account.tsx`; shared header/footer in `__root.tsx`.
- Legal copy stored as structured data in `src/content/terms.ts` and `src/content/privacy.ts`, rendered by one shared `LegalPage` component.
- Shadcn accordion, button, input, label, card, sonner toast; Lucide icons.
- Generated hero/pattern artwork saved under `src/assets/` with neutral filenames and neutral alt text.
- Per-route `head()` metadata: unique title, description, og/twitter tags; `noindex` on `/delete-account`; JSON-LD `SoftwareApplication` on the landing page; robots.txt and canonical tags kept crawler-friendly with neutral keywords.
