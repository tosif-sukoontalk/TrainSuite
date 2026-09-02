import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PlayStoreButton } from "@/components/site/PlayStoreButton";
import { Button } from "@/components/ui/button";
import { PLAY_STORE_URL, SUPPORT_EMAIL, openPlayStore } from "@/lib/site";
import patternLattice from "@/assets/pattern-lattice.jpg";
import heroBanner from "@/assets/hero-banner.jpg";
import {
  BadgeCheck,
  Clock,
  Download,
  Heart,
  Lock,
  MessageCircle,
  Phone,
  Search,
  Sparkles,
  Wallet,
} from "lucide-react";

const title = "Sukoontalk — Private guidance calls & chats | Android app";
const description =
  "Sukoontalk connects you one-to-one with verified guides for calm, judgement-free conversations. Download the Android app free on Google Play.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  {
    icon: MessageCircle,
    title: "Private one-to-one chat",
    body: "Start a text conversation with a verified guide whenever something is weighing on you.",
  },
  {
    icon: Phone,
    title: "Voice calls on demand",
    body: "Prefer to talk it out? Connect over a secure in-app voice call in a couple of taps.",
  },
  {
    icon: BadgeCheck,
    title: "Verified guides",
    body: "Every guide on the platform is screened and onboarded before they can take a session.",
  },
  {
    icon: Lock,
    title: "Confidential by design",
    body: "Your conversations stay between you and your guide. Your number is never shared.",
  },
  {
    icon: Wallet,
    title: "Simple wallet pricing",
    body: "Top up your wallet, see the per-minute rate upfront, and only pay for the time you use.",
  },
  {
    icon: Clock,
    title: "Available around the clock",
    body: "Guides across time zones mean there is usually someone available when you need them.",
  },
];

const steps = [
  {
    icon: Download,
    title: "Install the app",
    body: "Download Sukoontalk free from Google Play and create your account with your mobile number.",
  },
  {
    icon: Search,
    title: "Pick your guide",
    body: "Browse profiles by language, experience and availability, and check the per-minute rate.",
  },
  {
    icon: Heart,
    title: "Start talking",
    body: "Add credits to your wallet and begin a chat or call. End the session any time you like.",
  },
];

const faqs = [
  {
    q: "What is Sukoontalk?",
    a: "Sukoontalk is an Android app that connects you with verified guides for private one-to-one chats and voice calls. It is a space to talk things through calmly, without judgement, whenever you need a listening ear.",
  },
  {
    q: "Is Sukoontalk free to download?",
    a: "Yes. The app is free to download and create an account. Individual sessions with guides are charged per minute, and the rate is always shown on the guide's profile before you connect.",
  },
  {
    q: "Which devices are supported?",
    a: "Sukoontalk is currently available for Android phones and tablets through Google Play. An iOS version is not available yet.",
  },
  {
    q: "How do payments work?",
    a: "You add credits to your in-app wallet using the payment methods offered at checkout. Session charges are deducted from the wallet balance per minute of chat or call time.",
  },
  {
    q: "Can I get a refund for unused wallet credits?",
    a: "Wallet credits are generally non-refundable and non-transferable. If you were charged because of a technical failure on our side, contact support and we will review the session and credit your wallet where appropriate.",
  },
  {
    q: "Are my conversations private?",
    a: "Yes. Sessions are confidential between you and your guide, and your phone number is never shared with them. We use industry-standard safeguards to protect your data, as described in our Privacy Policy.",
  },
  {
    q: "Who are the guides on the platform?",
    a: "Guides are independent professionals who are screened and verified before they are onboarded. Their profile shows their languages, areas of focus and experience so you can choose who fits you best.",
  },
  {
    q: "Is Sukoontalk a substitute for medical or legal advice?",
    a: "No. Conversations on Sukoontalk are for general guidance and personal support only. They are not medical, psychiatric, legal or financial advice. In an emergency, please contact a qualified professional or your local emergency services.",
  },
  {
    q: "What is the minimum age to use the app?",
    a: "You must be at least 18 years old to create an account and use Sukoontalk.",
  },
  {
    q: "How do I delete my account?",
    a: "You can delete your account from the app, or submit a request on our Delete Account page. Verified requests are completed within 3 business days.",
  },
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img
          src={patternLattice}
          alt=""
          aria-hidden="true"
          width={1536}
          height={1024}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />

        <div className="relative mx-auto max-w-3xl px-4 pt-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />
            Now live on Google Play
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
            Find your <span className="text-primary">Sukoon</span>, one conversation at a time.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Anonymous, private and verified lifestyle guidance — chat or call a trusted guide from
            anywhere, whenever the day feels heavier than usual.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <PlayStoreButton />
            <Button asChild variant="outline" size="lg">
              <a href="#how-it-works">See how it works</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-6xl px-4">
          <img
            src={heroBanner}
            alt="Women connecting with a verified Sukoontalk guide over a video call, shown across a world map"
            width={1376}
            height={763}
            className="w-full rounded-2xl"
          />
        </div>

        <dl className="relative mx-auto grid max-w-3xl grid-cols-3 gap-6 px-4 pb-16 pt-6 text-center">
          {[
            ["Free", "to download"],
            ["24/7", "guide availability"],
            ["100%", "confidential"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="text-2xl font-bold text-foreground">{k}</dt>
              <dd className="mt-1 text-xs text-muted-foreground">{v}</dd>
            </div>
          ))}
        </dl>
      </section>


      {/* Features */}
      <section className="border-y border-border bg-secondary/40 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Built for quiet, honest conversations
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Everything in the app is designed around one thing — making it easy to talk to someone
            who will actually listen.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold text-card-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-20 py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Three steps to your first session
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative rounded-2xl border border-border p-6">
                <span className="absolute -top-4 left-6 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {i + 1}
                </span>
                <s.icon className="mt-3 h-6 w-6 text-primary" />
                <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="relative overflow-hidden border-y border-border">
        <img
          src={patternLattice}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1536}
          height={1024}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.1]"
        />
        <div className="relative mx-auto flex max-w-4xl flex-col items-center px-4 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Download Sukoontalk for Android
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Free to install. Create your account in under a minute and talk to a verified guide
            today.
          </p>
          <div className="mt-8">
            <PlayStoreButton />
          </div>
          <p className="mt-4 break-all text-xs text-muted-foreground">
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
              play.google.com/store/apps/details?id=com.sukoontalks.app
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4">
          <h2 className="text-center text-3xl font-bold tracking-tight text-foreground">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-sm font-medium">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Still have a question? Write to us at{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-primary">
              {SUPPORT_EMAIL}
            </a>{" "}
            or read the{" "}
            <Link to="/terms" className="font-medium text-primary">
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
