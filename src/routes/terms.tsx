import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { termsBlocks } from "@/content/terms";

const title = "Terms & Conditions | Sukoontalk";
const description =
  "Read the Sukoontalk terms of usage covering registration, consultations, wallet credits, refunds and acceptable use of the app.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalPage title="Terms & Conditions of Usage" updated="2 September 2026" blocks={termsBlocks} />
  );
}
