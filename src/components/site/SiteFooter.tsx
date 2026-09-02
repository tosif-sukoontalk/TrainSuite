import { Link } from "@tanstack/react-router";
import { Mail, MapPin } from "lucide-react";
import { COMPANY_ADDRESS, COMPANY_NAME, PLAY_STORE_URL, SUPPORT_EMAIL, openPlayStore } from "@/lib/site";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Logo className="h-8 w-8" />
            <span className="text-lg font-bold text-primary">Sukoontalk</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Private one-to-one conversations with verified guides, for calm and clarity in
            everyday life.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Quick links</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-primary">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/delete-account" className="hover:text-primary">
                Delete your account
              </Link>
            </li>
            <li>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  openPlayStore();
                }}
                className="hover:text-primary"
              >
                Download on Google Play
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-foreground">Contact</h2>
          <ul className="mt-3 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${SUPPORT_EMAIL}`} className="hover:text-primary">
                {SUPPORT_EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>
                {COMPANY_NAME}
                <br />
                {COMPANY_ADDRESS}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <p className="mx-auto max-w-6xl px-4 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved. Google Play and the
          Google Play logo are trademarks of Google LLC.
        </p>
      </div>
    </footer>
  );
}
