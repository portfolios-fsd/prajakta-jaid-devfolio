import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ArrowUpRight,
  Phone,
  Download,
  FileText,
  ExternalLink,
  CheckCircle2,
  Briefcase,
  Server,
  Code2,
  Cloud,
  BadgeCheck,
} from "lucide-react";
import { toast } from "sonner";

import { ThemeToggle } from "@/components/ThemeToggle";
import { CertificationBadge } from "@/components/CertificationBadge";
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
import projectJobRadar from "@/assets/project-jobradar.jpg";
import projectClinic from "@/assets/project-clinic.jpg";
import projectHabitTracker from "@/assets/project-habittracker.jpg";

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
          knowsAbout: [
            "Java",
            "Spring Boot",
            "React",
            "Node.js",
            "Apache Kafka",
            "Kubernetes",
            "AI integration",
          ],
        }),
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    name: "JobRadar — AI Job Scout",
    tag: "AI Automation · Next.js · Telegram Bot",
    urlDomain: "jobradar.co",
    image: projectJobRadar,
    blurb:
      "AI-powered job discovery scout that eliminates manual searching by scanning top career portals hourly, filtering matches with custom criteria, and delivering instant real-time alerts via Telegram.",
    features: ["Hourly Job Scraper", "Telegram Bot Alerts", "Filter Engine"],
    links: [{ label: "Visit live site", href: "https://jobradar.co/" }],
  },
  {
    name: "Shreeyash Speciality Clinic & Women Care",
    tag: "React · Cloudflare Pages · Healthcare Portal",
    urlDomain: "shreeyash-speciality-clinic-and-women-care.pages.dev",
    image: projectClinic,
    blurb:
      "Comprehensive healthcare portal for a medical clinic in Moshi, Pune. Offers patient care overviews, specialist doctor profiles, medical service directories, and instant appointment booking workflows.",
    features: ["Appointment Booking", "Doctor Schedules", "Healthcare Directory"],
    links: [
      {
        label: "Visit live site",
        href: "https://shreeyash-speciality-clinic-and-women-care.pages.dev/",
      },
    ],
  },
  {
    name: "Simple Habit Tracker",
    tag: "React · TypeScript · Vercel",
    urlDomain: "simplehabittracker.vercel.app",
    image: projectHabitTracker,
    blurb:
      "Minimalist habit tracking and productivity web application featuring interactive daily check-ins, monthly consistency heatmaps, custom categorization, and streak progress analytics.",
    features: ["Streak Heatmaps", "Daily Check-ins", "Consistency Analytics"],
    links: [{ label: "Visit live site", href: "https://simplehabittracker.vercel.app/" }],
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="group flex items-center gap-2.5 font-display text-sm font-semibold tracking-tight transition-opacity hover:opacity-90"
          >
            <span className="flex size-7 items-center justify-center rounded-lg bg-primary font-mono text-xs font-bold text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
              PJ
            </span>
            <span className="font-mono text-xs font-medium tracking-tight text-foreground sm:text-sm">
              Full Stack Developer
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="hidden rounded-full sm:inline-flex"
            >
              <a href="/Prajakta_Jaid_Resume.pdf" download="Prajakta_Jaid_Resume.pdf">
                <Download className="mr-1.5 size-3.5" /> Resume
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="mx-auto max-w-5xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.2fr_1fr]">
            <div className="rise">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1 text-xs text-muted-foreground mb-4">
                <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Senior Engineering Roles
              </div>
              <p className="eyebrow">{profile.title}</p>
              <h1 className="mt-4 text-4xl leading-[1.05] font-semibold sm:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                {profile.tagline}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild size="lg" className="rounded-full shadow-sm">
                  <a href="#projects">View projects</a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="rounded-full border border-border"
                >
                  <a href="/Prajakta_Jaid_Resume.pdf" download="Prajakta_Jaid_Resume.pdf">
                    <Download className="mr-2 size-4 text-primary" /> Download Resume
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full">
                  <a href="#contact">Get in touch</a>
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="size-4 text-primary" /> {profile.location}
                </span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground"
                >
                  <Linkedin className="size-4 text-primary" /> LinkedIn
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-foreground"
                >
                  <Github className="size-4 text-primary" /> GitHub
                </a>
              </div>
            </div>
            <div className="rise relative w-full">
              <div className="overflow-hidden rounded-2xl border border-border bg-card/90 shadow-soft backdrop-blur font-mono text-xs">
                <div className="flex items-center justify-between border-b border-border/80 bg-muted/50 px-4 py-2.5">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-red-500/80" />
                    <span className="size-2.5 rounded-full bg-yellow-500/80" />
                    <span className="size-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[11px] text-muted-foreground">engineer.config.ts</span>
                  <div className="size-4" />
                </div>
                <div className="p-5 text-muted-foreground leading-relaxed space-y-1">
                  <p>
                    <span className="text-primary font-semibold">const</span>{" "}
                    <span className="text-foreground">engineer</span> = &#123;
                  </p>
                  <p className="pl-4">
                    name: <span className="text-foreground font-medium">"{profile.name}"</span>,
                  </p>
                  <p className="pl-4">
                    role:{" "}
                    <span className="text-foreground font-medium">"Senior Software Engineer"</span>,
                  </p>
                  <p className="pl-4">
                    core: [<span className="text-primary">"Java 17+"</span>,{" "}
                    <span className="text-primary">"Spring Boot"</span>,{" "}
                    <span className="text-primary">"React"</span>,{" "}
                    <span className="text-primary">"Kafka"</span>],
                  </p>
                  <p className="pl-4">
                    cloud: [<span className="text-primary">"Azure AZ-204"</span>,{" "}
                    <span className="text-primary">"AWS"</span>,{" "}
                    <span className="text-primary">"Docker"</span>,{" "}
                    <span className="text-primary">"K8s"</span>],
                  </p>
                  <p className="pl-4">
                    aiFocus: <span className="text-primary">"MCP & Agentic Workflows"</span>,
                  </p>
                  <p className="pl-4">
                    status: <span className="text-emerald-500 font-medium">"Ready to build"</span>
                  </p>
                  <p>&#125;;</p>
                </div>
                <div className="border-t border-border/60 bg-muted/30 px-5 py-3 flex flex-wrap gap-2">
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                    Spring Boot 4
                  </span>
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                    Kafka
                  </span>
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                    React & TS
                  </span>
                  <span className="rounded-md bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                    Azure & AWS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CORE HIGHLIGHTS & SKILLS STRIP */}
          <div className="mt-16 border-t border-border pt-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Experience */}
              <div className="rounded-xl border border-border/80 bg-card/60 p-4 transition-all hover:border-primary/40 hover:bg-card">
                <div className="flex items-center gap-2 text-primary">
                  <Briefcase className="size-4" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                    Experience
                  </span>
                </div>
                <div className="mt-2 font-display text-base font-semibold">5+ Years</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Senior SE at Nitor Infotech, Volkswagen IT & Accenture
                </p>
              </div>

              {/* Backend */}
              <div className="rounded-xl border border-border/80 bg-card/60 p-4 transition-all hover:border-primary/40 hover:bg-card">
                <div className="flex items-center gap-2 text-primary">
                  <Server className="size-4" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                    Backend Core
                  </span>
                </div>
                <div className="mt-2 font-display text-base font-semibold">Java & Spring Boot</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Microservices, Kafka, RabbitMQ, REST APIs & TDD
                </p>
              </div>

              {/* Frontend */}
              <div className="rounded-xl border border-border/80 bg-card/60 p-4 transition-all hover:border-primary/40 hover:bg-card">
                <div className="flex items-center gap-2 text-primary">
                  <Code2 className="size-4" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                    Frontend
                  </span>
                </div>
                <div className="mt-2 font-display text-base font-semibold">React & TypeScript</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Interactive Web Apps, Tailwind CSS & State Management
                </p>
              </div>

              {/* Cloud & Certs */}
              <div className="rounded-xl border border-border/80 bg-card/60 p-4 transition-all hover:border-primary/40 hover:bg-card">
                <div className="flex items-center gap-2 text-primary">
                  <Cloud className="size-4" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                    Cloud & Certs
                  </span>
                </div>
                <div className="mt-2 font-display text-base font-semibold">Azure & GCP</div>
                <p className="mt-1 text-xs text-muted-foreground">
                  AZ-204, AZ-900, Docker, Kubernetes & CI/CD Pipelines
                </p>
              </div>
            </div>
          </div>
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
          {/* CERTIFICATIONS SHOWCASE */}
          <div className="mt-16 border-t border-border pt-12">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs font-medium uppercase tracking-wider text-primary">
                  Verified Accreditations
                </p>
                <h3 className="mt-2 text-2xl font-semibold sm:text-3xl">
                  Certifications & Credentials
                </h3>
              </div>
              <p className="max-w-md text-xs text-muted-foreground sm:text-sm">
                Industry-recognized credentials across Cloud Architecture (Azure, GCP), Kafka
                Streaming, DevOps, AI Platforms & Full-Stack Systems.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {certifications.map((c) => (
                <div
                  key={c.title}
                  className="group relative overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <CertificationBadge type={c.badgeType} className="h-12 w-20 shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] font-semibold text-primary">
                          {c.issuer}
                        </span>
                        {c.code && (
                          <span className="rounded bg-muted px-2 py-0.5 font-mono text-[10px] font-medium text-muted-foreground">
                            {c.code}
                          </span>
                        )}
                      </div>
                      <h4 className="mt-1.5 font-display text-sm font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-base">
                        {c.title}
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {c.skills.map((s) => (
                          <span
                            key={s}
                            className="rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] text-secondary-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">04 — Projects</p>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">Selected work</h2>
            </div>
            <p className="max-w-md text-sm text-muted-foreground">
              Production web applications, healthcare platforms, and AI automation tools built with
              modern full-stack architectures.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {projects.map((p, i) => (
              <article
                key={p.name}
                className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/50 hover:shadow-lg"
              >
                <div className="grid items-stretch gap-0 md:grid-cols-[1.3fr_1fr]">
                  {/* Browser Mockup Frame & Front Page View */}
                  <div className="relative overflow-hidden border-b border-border bg-muted/30 md:border-b-0 md:border-r">
                    {/* Browser Address Bar Header */}
                    <div className="flex items-center justify-between border-b border-border/80 bg-card/90 px-4 py-2 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="size-2.5 rounded-full bg-red-500/80" />
                        <span className="size-2.5 rounded-full bg-yellow-500/80" />
                        <span className="size-2.5 rounded-full bg-green-500/80" />
                      </div>
                      <span className="max-w-[200px] truncate rounded-full bg-muted px-3 py-0.5 font-mono text-[11px] text-muted-foreground">
                        {p.urlDomain}
                      </span>
                      <div className="size-4" />
                    </div>

                    <a
                      href={p.links[0]?.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block overflow-hidden"
                    >
                      <img
                        src={p.image}
                        alt={`${p.name} front page view`}
                        loading="lazy"
                        width={1280}
                        height={720}
                        className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      />
                    </a>
                  </div>

                  {/* Project Details */}
                  <div className="flex flex-col justify-between p-6 sm:p-8">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-primary">
                          {p.tag}
                        </span>
                        <span className="font-mono text-xs text-muted-foreground/60">0{i + 1}</span>
                      </div>

                      <h3 className="mt-3 font-display text-xl font-semibold sm:text-2xl">
                        {p.name}
                      </h3>

                      <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                        {p.blurb}
                      </p>

                      {p.features && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {p.features.map((f) => (
                            <span
                              key={f}
                              className="rounded-md bg-secondary/80 px-2.5 py-1 text-xs text-secondary-foreground"
                            >
                              {f}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-8 flex items-center gap-4 border-t border-border/60 pt-4">
                      {p.links.map((l) => (
                        <a
                          key={l.label}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline group-hover:text-primary/90"
                        >
                          {l.label}
                          <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* RESUME */}
        <section id="resume" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8">
            <p className="eyebrow">05 — Resume</p>
            <div className="mt-6 grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
              <div>
                <h2 className="text-3xl font-semibold sm:text-4xl">
                  Curriculum <span className="text-gradient">Vitae</span>
                </h2>
                <p className="mt-4 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">
                  Download my full resume for a detailed view of my engineering experience, backend
                  microservices work with Java & Spring Boot, Kafka streaming pipelines, cloud
                  certifications, and frontend systems.
                </p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button asChild size="lg" className="rounded-full shadow-md">
                    <a href="/Prajakta_Jaid_Resume.pdf" download="Prajakta_Jaid_Resume.pdf">
                      <Download className="mr-2 size-4" /> Download PDF Resume
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="rounded-full">
                    <a href="/Prajakta_Jaid_Resume.pdf" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 size-4" /> Preview in Browser
                    </a>
                  </Button>
                </div>
              </div>

              {/* Resume Card Preview */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <FileText className="size-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold">
                      Prajakta_Jaid_Resume.pdf
                    </h3>
                    <p className="text-xs text-muted-foreground">PDF Document · Updated 2026</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 border-t border-border/70 pt-4 text-xs text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                    <span>5+ Years Experience in Java, Spring Boot & React</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                    <span>Apache Kafka, RabbitMQ & Microservices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                    <span>Azure (AZ-204 & AZ-900) & GCP Cloud Certified</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                    <span>AI Agentic Systems & MCP Server Engineering</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <ContactSection />
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 py-8 text-xs text-muted-foreground sm:flex-row sm:px-8">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
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
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-b border-border pb-3 hover:text-primary"
              >
                <Linkedin className="size-4 text-primary" /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 border-b border-border pb-3 hover:text-primary"
              >
                <Github className="size-4 text-primary" /> GitHub
              </a>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-2xl border border-border bg-card p-6"
          >
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
