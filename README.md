# Prajakta Jaid — Full Stack Developer Portfolio Showcase

A modern, high-performance personal portfolio website built with **React 19, TypeScript, Tailwind CSS, TanStack Router**, and configured for automated static deployment to **GitHub Pages**.

🔗 **Live URL (GitHub Pages)**: `https://portfolios-fsd.github.io/prajakta-jaid-devfolio/`

---

## ✨ Features

- ⚡ **Hero & Dynamic Code Window**: Interactive developer config overview showcasing core stack (Java, Spring Boot, React, Kafka, Azure, GCP).
- 🔍 **Interactive Skills Explorer**: Filterable skills toolkit with instant keyword search and category tags.
- 📜 **Verified Certifications Matrix**: Badges and credentials for Microsoft (AZ-204, AZ-900), Google Cloud (ACE), KodeKloud (Kafka, Docker, Kubernetes), New Relic Observability, and Coursera.
- 💼 **Experience Timeline**: Career history at Nitor Infotech, Volkswagen IT Services, Accenture, and DXC Technology with quantified impact metrics.
- 🚀 **Projects Showcase**: Interactive cards featuring browser mockup headers, live demo links, architecture tags, and feature summaries.
- 📄 **Resume Hub**: One-click download of `Prajakta_Jaid_Resume.pdf` and in-browser preview.
- 📬 **Interactive Contact & Quick-Copy**: Email quick-copy button with toast notifications, direct contact mailto form, and social links.
- 🌓 **Dark / Light Mode**: System auto-detection with persistent local storage theme toggle.
- 📱 **Fully Responsive**: Mobile hamburger drawer navigation, fluid typography, and sticky header.
- 🚀 **Automated GitHub Pages CI/CD**: Seamless deployment on push via GitHub Actions.

---

## 🚀 GitHub Pages Deployment Setup

This repository includes an automated GitHub Actions deployment workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

### One-Time Setup in GitHub Repository:

1. In your GitHub repository (`portfolios-fsd/prajakta-jaid-devfolio`), click on **Settings**.
2. In the left sidebar, select **Pages** (under _Code and automation_).
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Push any changes to the `main` branch. GitHub Actions will automatically build the static SPA and publish it to GitHub Pages.

---

## 💻 Local Development

### Prerequisites

- Node.js 20+
- npm

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/portfolios-fsd/prajakta-jaid-devfolio.git
cd prajakta-jaid-devfolio

# Install dependencies
npm install

# Start local development server
npm run dev

# Build production static bundle for GitHub Pages
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Tech Stack

- **Framework**: React 19, TypeScript, TanStack Router
- **Styling**: Tailwind CSS v4, tw-animate-css, Lucide React icons
- **Components & Feedback**: Radix UI primitives, Sonner toasts
- **Build Tool**: Vite 8 with `@vitejs/plugin-react` & `@tanstack/router-plugin`
- **Hosting**: GitHub Pages with GitHub Actions CI/CD
