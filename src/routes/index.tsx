import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import authorAsset from "@/assets/daniel-carter-author.jpg.asset.json";
import coverAsset from "@/assets/lead-with-purpose-cover.png.asset.json";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lead with Purpose — A Book by Daniel Carter" },
      {
        name: "description",
        content:
          "Discover Lead with Purpose, Daniel Carter’s practical guide to intentional growth, meaningful leadership, and lasting impact.",
      },
      { property: "og:title", content: "Lead with Purpose — A Book by Daniel Carter" },
      {
        property: "og:description",
        content: "A practical guide to building a life of purpose, growth, and impact.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookLandingPage,
});

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About the Book", href: "#about-book" },
  { label: "Inside the Book", href: "#inside-book" },
  { label: "About Daniel", href: "#about-daniel" },
];

const pillars = [
  { number: "01", title: "Purpose", copy: "Clarify what matters and align your decisions with it." },
  {
    number: "02",
    title: "Growth",
    copy: "Develop the mindset, habits, and discipline needed to keep moving forward.",
  },
  {
    number: "03",
    title: "Impact",
    copy: "Use what you learn and who you become to positively influence the people and world around you.",
  },
];

const chapters = [
  "Define what purpose means in your own life",
  "Build habits that support meaningful growth",
  "Lead yourself before leading others",
  "Make decisions with greater intention",
  "Turn personal progress into positive impact",
];

const audiences = [
  "You are successful on paper but still searching for deeper meaning.",
  "You want your work and personal life to feel more intentional.",
  "You are entering a new season of leadership or personal growth.",
  "You want to leave a positive impact beyond your achievements.",
];

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`eyebrow ${light ? "text-gold-soft" : "text-gold"}`}>
      <span aria-hidden="true" className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

function BookLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const reveal = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((item) => reveal.observe(item));
    return () => reveal.disconnect();
  }, []);

  return (
    <div className="overflow-x-hidden bg-background font-sans text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ivory/10 bg-charcoal/95 backdrop-blur-sm">
        <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center px-5 sm:px-8 lg:px-12">
          <a href="#home" className="min-w-0 font-display text-lg font-semibold uppercase text-ivory">
            Daniel <span className="text-gold">Carter</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
            <Button asChild variant="outline" className="h-10 rounded-none border-gold bg-transparent px-5 text-xs uppercase text-gold hover:bg-gold hover:text-charcoal">
              <a href="#get-the-book">Get the Book</a>
            </Button>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="text-ivory hover:bg-ivory/10 hover:text-gold lg:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="border-t border-ivory/10 bg-charcoal px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="border-b border-ivory/10 py-4 text-sm text-ivory" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
              <Button asChild className="mt-5 h-12 rounded-none bg-gold text-charcoal hover:bg-gold-soft">
                <a href="#get-the-book" onClick={() => setMenuOpen(false)}>Get the Book</a>
              </Button>
            </div>
          </nav>
        )}
      </header>

      <main>
        <section id="home" className="hero-texture relative flex min-h-[880px] scroll-mt-20 items-center bg-charcoal pb-24 pt-32 text-ivory lg:min-h-[900px] lg:pt-28">
          <div className="hero-glow" aria-hidden="true" />
          <div className="mountain-lines" aria-hidden="true" />
          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[1.04fr_.96fr] lg:px-12">
            <div className="reveal max-w-2xl">
              <Eyebrow light>Lead with Purpose</Eyebrow>
              <h1 className="mt-7 font-display text-6xl font-medium leading-[0.9] text-ivory sm:text-7xl lg:text-[6.2rem]">
                Build a Life of <em className="font-normal text-gold">Purpose,</em> Growth and Impact.
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-ivory-muted sm:text-lg">
                <cite className="font-medium not-italic text-ivory">Lead with Purpose</cite> is a practical guide for anyone ready to move beyond simply achieving goals and begin living, leading, and growing with intention.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="h-13 rounded-none bg-gold px-7 text-xs uppercase text-charcoal shadow-none hover:bg-gold-soft">
                  <a href="#get-the-book">Get the Book <ArrowRight /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="h-13 rounded-none border-ivory/30 bg-transparent px-7 text-xs uppercase text-ivory shadow-none hover:border-gold hover:bg-transparent hover:text-gold">
                  <a href="#about-book">Discover the Message <ArrowDown /></a>
                </Button>
              </div>
              <p className="mt-7 text-xs uppercase text-ivory-dim">A practical guide by Daniel Carter</p>
            </div>

            <div className="reveal relative mx-auto w-full max-w-[470px] lg:mr-4" style={{ transitionDelay: "120ms" }}>
              <div className="book-halo" aria-hidden="true" />
              <div className="book-display relative mx-auto w-[78%] sm:w-[72%]">
                <img src={coverAsset.url} alt="Lead with Purpose book cover by Daniel Carter" className="relative z-10 block h-auto w-full" />
              </div>
              <p className="mt-7 text-center text-[0.68rem] uppercase text-ivory-dim">A practical guide to purpose, growth, and impact</p>
            </div>
          </div>
        </section>

        <section id="about-book" className="paper-texture scroll-mt-20 bg-ivory py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="reveal mx-auto max-w-3xl text-center">
              <Eyebrow>More than success</Eyebrow>
              <h2 className="section-title mt-7 text-charcoal">Success means more when<br className="hidden sm:block" /> it is connected to <em>purpose.</em></h2>
              <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-muted">
                Lead with Purpose explores how intentional growth, meaningful leadership, and personal responsibility can help create a life that makes a lasting impact.
              </p>
            </div>
            <div className="mt-20 grid md:grid-cols-3">
              {pillars.map((pillar, index) => (
                <article key={pillar.title} className="reveal border-t border-gold/45 py-8 md:border-l md:border-t-0 md:px-10 md:py-2 first:md:border-l-0" style={{ transitionDelay: `${index * 80}ms` }}>
                  <span className="font-display text-2xl italic text-gold">{pillar.number}</span>
                  <h3 className="mt-8 font-display text-3xl font-semibold text-charcoal">{pillar.title}</h3>
                  <p className="mt-3 max-w-sm leading-7 text-slate-muted">{pillar.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="inside-book" className="scroll-mt-20 bg-slate py-24 text-ivory sm:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-24 lg:px-12">
            <div className="reveal relative mx-auto w-full max-w-[410px]">
              <div className="thin-frame absolute -inset-5 hidden sm:block" aria-hidden="true" />
              <img src={coverAsset.url} alt="Lead with Purpose by Daniel Carter" className="relative block h-auto w-full shadow-book" />
            </div>
            <div className="reveal" style={{ transitionDelay: "100ms" }}>
              <Eyebrow light>Inside the book</Eyebrow>
              <h2 className="section-title mt-7 text-ivory">A Practical Guide for <em>Intentional Living.</em></h2>
              <p className="mt-7 max-w-xl leading-8 text-ivory-muted">
                This book is designed to help readers think more deeply about the way they live, work, grow, and lead. Daniel Carter combines practical reflection with purpose-driven principles that can be applied to everyday life.
              </p>
              <ul className="mt-9 space-y-4">
                {chapters.map((chapter) => (
                  <li key={chapter} className="flex items-start gap-4 border-b border-ivory/10 pb-4 text-sm text-ivory">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.5} />
                    {chapter}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="mt-10 h-13 rounded-none bg-gold px-7 text-xs uppercase text-charcoal hover:bg-gold-soft">
                <a href="#get-the-book">Read Lead with Purpose <ArrowRight /></a>
              </Button>
            </div>
          </div>
        </section>

        <section className="paper-texture bg-ivory py-28 sm:py-40">
          <blockquote className="reveal mx-auto max-w-5xl px-5 text-center sm:px-8">
            <span className="block font-display text-8xl leading-8 text-gold/45" aria-hidden="true">“</span>
            <p className="mt-9 font-display text-4xl font-medium leading-tight text-charcoal sm:text-6xl">
              Purpose is not only about where you are going. <em className="text-gold">It is about who you become</em> along the way.
            </p>
            <div className="mx-auto mt-10 h-px w-16 bg-gold" />
            <footer className="mt-5 text-xs uppercase text-slate-muted">Daniel Carter</footer>
          </blockquote>
        </section>

        <section id="about-daniel" className="scroll-mt-20 bg-warm-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[.96fr_1.04fr] lg:gap-24 lg:px-12">
            <figure className="reveal relative mx-auto w-full max-w-[530px] overflow-hidden bg-forest">
              <img src={authorAsset.url} alt="Daniel Carter holding Lead with Purpose" className="aspect-[4/5] h-full w-full object-cover object-[50%_38%]" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-forest/90 px-6 py-4 text-xs uppercase text-ivory">Author · Speaker · Purpose Advocate</figcaption>
            </figure>
            <div className="reveal" style={{ transitionDelay: "100ms" }}>
              <Eyebrow>Meet the author</Eyebrow>
              <h2 className="mt-7 font-display text-6xl font-medium text-charcoal sm:text-7xl">Daniel Carter</h2>
              <div className="mt-7 max-w-xl space-y-5 leading-8 text-slate-muted">
                <p>Daniel Carter is the author of <cite className="font-medium not-italic text-charcoal">Lead with Purpose</cite>, a practical guide focused on helping people pursue meaningful growth, intentional leadership, and a life of positive impact.</p>
                <p>His message encourages readers to move beyond external definitions of success and build a life grounded in clarity, responsibility, purpose, and continuous development.</p>
              </div>
              <p className="mt-9 font-display text-4xl italic text-gold">Lead with Purpose.</p>
              <Button asChild variant="outline" size="lg" className="mt-9 h-13 rounded-none border-charcoal bg-transparent px-7 text-xs uppercase text-charcoal hover:border-gold hover:bg-gold hover:text-charcoal">
                <a href="https://alpacaauthors.com" target="_blank" rel="noreferrer">Learn more about Daniel <ArrowRight /></a>
              </Button>
            </div>
          </div>
        </section>

        <section className="bg-charcoal py-24 text-ivory sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="reveal text-center">
              <Eyebrow light>Who this book is for</Eyebrow>
              <h2 className="section-title mt-7 text-ivory">This Book Is for You If...</h2>
            </div>
            <div className="mt-16 grid border-t border-gold/50 md:grid-cols-2">
              {audiences.map((text, index) => (
                <article key={text} className={`reveal grid grid-cols-[auto_minmax(0,1fr)] gap-6 border-b border-gold/25 py-9 md:px-10 ${index % 2 === 1 ? "md:border-l" : ""}`}>
                  <span className="font-display text-2xl italic text-gold">0{index + 1}</span>
                  <p className="max-w-md font-display text-2xl leading-snug text-ivory">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="get-the-book" className="final-horizon relative scroll-mt-20 overflow-hidden bg-slate py-28 text-center text-ivory sm:py-40">
          <div className="sun-mark" aria-hidden="true" />
          <div className="final-mountains" aria-hidden="true" />
          <div className="reveal relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
            <Eyebrow light>Your next chapter</Eyebrow>
            <h2 className="mt-8 font-display text-6xl font-medium leading-[0.95] text-ivory sm:text-8xl">Lead Your Life<br />with <em className="text-gold">Purpose.</em></h2>
            <p className="mt-7 text-lg text-ivory-muted">Growth begins when intention becomes action.</p>
            <Button asChild size="lg" className="mt-10 h-14 rounded-none bg-gold px-9 text-xs uppercase text-charcoal hover:bg-gold-soft">
              <a href="https://alpacaauthors.com" target="_blank" rel="noreferrer">Get the Book <ArrowRight /></a>
            </Button>
            <a href="#about-daniel" className="mx-auto mt-7 block w-fit border-b border-ivory/40 pb-1 text-xs uppercase text-ivory hover:border-gold hover:text-gold">Discover Daniel Carter</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-ivory/10 bg-charcoal px-5 py-10 text-ivory sm:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 text-center md:grid-cols-3 md:items-end md:text-left">
          <div><p className="font-display text-2xl">Daniel Carter</p><p className="mt-1 text-xs text-ivory-dim">Author of Lead with Purpose</p></div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-ivory-muted" aria-label="Footer navigation">
            <a href="#home">Home</a><a href="#about-book">About the Book</a><a href="#about-daniel">About Daniel</a>
          </nav>
          <div className="text-xs text-ivory-dim md:text-right"><a href="https://alpacaauthors.com" target="_blank" rel="noreferrer" className="text-gold">alpacaauthors.com</a><p className="mt-1">© 2026 Daniel Carter. All Rights Reserved.</p></div>
        </div>
      </footer>
    </div>
  );
}