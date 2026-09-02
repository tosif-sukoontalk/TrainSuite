import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";
import { privacyBlocks } from "@/content/privacy";

const title = "Privacy Policy | Sukoontalk";
const description =
  "How Sukoontalk collects, uses, stores and protects your personal information, and how you can access, correct or delete your data.";

export const Route = createFileRoute("/privacy")({
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
  component: PrivacyPage,
});

function PrivacyPage() {
  return <LegalPage title="Privacy Policy" updated="2 September 2026" blocks={privacyBlocks} />;
}
