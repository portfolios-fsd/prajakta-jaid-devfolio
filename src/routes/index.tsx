import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Mail, MapPin, ArrowUpRight, Phone } from "lucide-react";
import { toast } from "sonner";

import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  profile,
  stats,
  about,
  skillGroups,
  experience,
  education,
  certifications,
} from "@/lib/portfolio-data";
import portrait from "@/assets/portrait.jpg";
import projectData from "@/assets/project-data-platform.jpg";
import projectJobRadar from "@/assets/project-jobradar.jpg";
import projectPixelWeb from "@/assets/project-pixelweb.jpg";

const title = `${profile.name} — Full Stack Developer`;
const description =
  "Portfolio of Prajakta Jaid, Senior Software Engineer and Full Stack Developer specialising in Java, Spring Boot, React, Kafka, cloud-native delivery and AI integration.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Full Stack Developer",
          email: `mailto:${profile.email}`,
          address: profile.location,
          sameAs: [profile.linkedin, profile.github],
          knowsAbout: ["Java", "Spring Boot", "React", "Node.js", "Apache Kafka", "Kubernetes", "AI integration"],
        }),
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    name: "Data Integrity Platform",
    tag: "Java · Spring Boot · Kafka",
    image: projectData,
    blurb:
      "Multi-tenant data management platform organising millions of records, with Kafka and RabbitMQ pipelines for real-time flow across distributed services.",
    links: [{ label: "Case study", href: "#contact" }],
  },
  {
    name: "JobRadar",
    tag: "React · Node.js · PostgreSQL",
    image: projectJobRadar,
    blurb:
      "Job discovery and application tracker that aggregates postings, ranks matches against a candidate profile and keeps every stage of the search visible.",
    links: [
      { label: "GitHub", href: profile.github },
      { label: "Live demo", href: "#contact" },
    ],
  },
  {
    name: "PixelWebServices",
    tag: "React · Node.js · MongoDB",
    image: projectPixelWeb,
    blurb:
      "Web services studio site with a headless content layer, reusable component system and a lean deployment pipeline for fast client turnarounds.",
    links: [
      { label: "GitHub", href: profile.github },
      { label: "Live demo", href: "#contact" },
    ],
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="font-display text-base font-semibold tracking-tight">
            Prajakta<span className="text-primary">.</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.25fr_1fr]">
            <div className="rise">
              <p className="eyebrow">{profile.title}</p>
              <h1 className="mt-5 text-4xl leading-[1.05] font-semibold sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {profile.tagline}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="rounded-full">
                  <a href="#projects">View projects</a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href="#contact">Get in touch</a>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-primary" /> {profile.location}
                </span>
                <a href={profile.linkedin} className="inline-flex items-center gap-2 hover:text-foreground">
                  <Linkedin className="size-4 text-primary" /> LinkedIn
                </a>
                <a href={profile.github} className="inline-flex items-center gap-2 hover:text-foreground">
                  <Github className="size-4 text-primary" /> GitHub
                </a>
              </div>
            </div>
            <div className="rise relative mx-auto w-full max-w-xs">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
                <img
                  src={portrait}
                  alt={`${profile.name}, Full Stack Developer`}
                  width={768}
                  height={960}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-4 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl font-semibold sm:text-3xl">{s.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ABOUT */}
        <section id="about" className="border-y border-border bg-surface">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
            <p className="eyebrow">01 — About</p>
            <div className="mt-6 grid gap-10 md:grid-cols-[1fr_1.4fr]">
              <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
                Backend depth, <span className="text-gradient">frontend care</span>.
              </h2>
              <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
                {about.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
                <p className="pt-2 text-sm text-foreground">
                  {education.degree} · {education.school}
                  <span className="block text-muted-foreground">{education.detail}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <p className="eyebrow">02 — Skills</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Technical toolkit</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((g) => (
              <div key={g.label} className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-display text-sm font-semibold">{g.label}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-sm font-semibold">Certifications</h3>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
              {certifications.map((c) => (
                <li key={c} className="flex gap-2">
                  <span className="text-primary">—</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="border-y border-border bg-surface">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
            <p className="eyebrow">03 — Experience</p>
            <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Where I've built</h2>
            <ol className="mt-10 space-y-10 border-l border-border pl-6 sm:pl-8">
              {experience.map((job) => (
                <li key={job.company} className="relative">
                  <span className="absolute -left-[calc(1.5rem+4.5px)] top-2 size-2.5 rounded-full bg-primary sm:-left-[calc(2rem+4.5px)]" />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold">{job.company}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-primary">{job.role}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                    {job.points.map((p) => (
                      <li key={p.slice(0, 20)} className="flex gap-2">
                        <span className="text-primary">·</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
          <p className="eyebrow">04 — Projects</p>
          <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Selected work</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className={`group overflow-hidden rounded-2xl border border-border bg-card transition-transform duration-300 hover:-translate-y-1 ${
                  i === 0 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={p.image}
                  alt={`${p.name} interface preview`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="aspect-[16/10] w-full border-b border-border object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                    <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {p.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </p>
                  <div className="mt-5 flex items-center gap-5">
                    {p.links.map((l) => (
                      <a
                        key={l.label}
                        href={l.href}
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        {l.label}
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <ContactSection />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} {profile.name}</span>
          <span className="font-mono">Java · Spring Boot · React · Cloud</span>
        </div>
      </footer>
    </div>
  );
}

function ContactSection() {
  const [sending, setSending] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setSending(true);
    const subject = encodeURIComponent(`Portfolio enquiry from ${String(data.get("name") ?? "")}`);
    const body = encodeURIComponent(
      `${String(data.get("message") ?? "")}\n\n— ${String(data.get("name") ?? "")} (${String(data.get("email") ?? "")})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
    form.reset();
    setSending(false);
  }

  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
        <p className="eyebrow">05 — Contact</p>
        <div className="mt-6 grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
              Let's build something reliable.
            </h2>
            <p className="mt-4 max-w-sm text-muted-foreground">
              Open to senior full-stack and backend engineering roles, plus selected freelance work.
            </p>
            <div className="mt-8 space-y-3 text-sm">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 border-b border-border pb-3 hover:text-primary"
              >
                <Mail className="size-4 text-primary" /> {profile.email}
              </a>
              <a
                href={`tel:${profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-3 border-b border-border pb-3 hover:text-primary"
              >
                <Phone className="size-4 text-primary" /> {profile.phone}
              </a>
              <a
                href={profile.linkedin}
                className="flex items-center gap-3 border-b border-border pb-3 hover:text-primary"
              >
                <Linkedin className="size-4 text-primary" /> LinkedIn
              </a>
              <a
                href={profile.github}
                className="flex items-center gap-3 border-b border-border pb-3 hover:text-primary"
              >
                <Github className="size-4 text-primary" /> GitHub
              </a>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4 rounded-2xl border border-border bg-card p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="text-xs text-muted-foreground">
                  Name
                </label>
                <Input id="name" name="name" required className="mt-1.5" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-muted-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1.5"
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-xs text-muted-foreground">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1.5"
                placeholder="What would you like to build?"
              />
            </div>
            <Button type="submit" disabled={sending} className="w-full rounded-full">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
