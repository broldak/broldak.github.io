# Brutalist Gradient Style Pass Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restyle broldak.github.io with a bold, architectural "Brutalist Gradient" design using color-blocked sections, Anybody + Instrument Sans typography, and left-aligned layouts.

**Architecture:** Pure visual redesign — no new routes, data layer changes, or dependencies. Fonts loaded via Google Fonts CDN. Color system and typography defined in Tailwind config, applied through component-level class changes. Full-bleed section bands achieved with wrapper divs outside the max-width container.

**Tech Stack:** Next.js, Tailwind CSS, Google Fonts (Anybody, Instrument Sans)

**Spec:** `docs/superpowers/specs/2026-04-05-brutalist-gradient-style-pass-design.md`

---

## File Structure

No new files created. All changes are modifications to existing files:

| File | Responsibility |
|------|---------------|
| `tailwind.config.ts` | Custom colors, font families, letter-spacing tokens |
| `app/globals.css` | CSS variables, base styles, link styles |
| `app/layout.tsx` | Google Fonts loading, body font class, main container changes |
| `app/components/navigation.tsx` | Wordmark + right-aligned nav links |
| `app/components/footer.tsx` | Dark slate band, larger icons, left-aligned |
| `app/page.tsx` | Hero + color-blocked experience bands |
| `app/components/experience.tsx` | Updated role display styling |
| `app/blog/page.tsx` | Alternating color-banded rows |
| `app/experience/page.tsx` | Left-aligned rows with date on right |
| `app/blog/[slug]/page.tsx` | Narrow centered reading column |
| `app/experience/[slug]/page.tsx` | Narrow centered reading column |
| `app/components/markdown-styles.module.css` | Updated type scale for new fonts |

---

### Task 1: Foundation — Tailwind Config + CSS Variables + Fonts

**Files:**
- Modify: `tailwind.config.ts`
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Update Tailwind config with custom colors, fonts, and tracking**

Replace the entire contents of `tailwind.config.ts` with:

```ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          start: "#1a1033",
          end: "#0d0d0d",
        },
        band: {
          teal: "#0f2b2b",
          burgundy: "#2b0f1a",
          slate: "#1a1a2e",
        },
        accent: "#e87040",
        muted: "#d4d4d8",
      },
      fontFamily: {
        heading: ['"Anybody"', "sans-serif"],
        body: ['"Instrument Sans"', "sans-serif"],
      },
      letterSpacing: {
        "tight-heading": "-0.02em",
        "wide-label": "0.15em",
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 2: Update globals.css with new base styles**

Replace the entire contents of `app/globals.css` with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  color: #d4d4d8;
  background: linear-gradient(to bottom, #1a1033, #0d0d0d);
  min-height: 100vh;
}

a {
  color: #e87040;
  font-weight: 700;
}

a:hover {
  text-decoration: underline;
}
```

- [ ] **Step 3: Update layout.tsx with Google Fonts and new body classes**

Replace the entire contents of `app/layout.tsx` with:

```tsx
import Footer from "./components/footer";
import Navbar from "./components/navigation";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brian Oldak",
  description: "Brian Oldak's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anybody:wght@400;700;800&family=Instrument+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="flex flex-col min-h-screen font-body">
        <Navbar />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
```

Key changes: removed Inter font link, added Anybody + Instrument Sans, removed padding/centering from `<main>` (pages now control their own full-bleed layout), added `font-body` class.

- [ ] **Step 4: Verify the dev server starts without errors**

Run: `npm run dev`
Open http://localhost:3000 — the site should load (it will look broken since components haven't been updated yet, but no build errors).

- [ ] **Step 5: Commit**

```bash
git add tailwind.config.ts app/globals.css app/layout.tsx
git commit -m "style: add brutalist gradient foundation — tailwind config, css vars, fonts"
```

---

### Task 2: Navigation

**Files:**
- Modify: `app/components/navigation.tsx`

- [ ] **Step 1: Rewrite the navigation component**

Replace the entire contents of `app/components/navigation.tsx` with:

```tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function normalizeHref(path: string) {
  return path !== "/" ? path.replace(/\/+$/, "") : "/";
}

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname() || "/";
  const nPath = normalizeHref(pathname);
  const nHref = normalizeHref(href);

  const isExact = nPath === nHref;
  const isChild =
    nHref !== "/" && (nPath === nHref || nPath.startsWith(nHref + "/"));
  const isActive = isExact || isChild;

  return (
    <Link
      href={href}
      className={
        isActive
          ? "pointer-events-none text-white font-bold"
          : "text-muted hover:text-accent font-bold no-underline"
      }
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  return (
    <nav className="w-full px-8 lg:px-16 py-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-xl font-bold text-white no-underline hover:text-accent"
        >
          Brian Oldak
        </Link>
        <ul className="flex gap-8 font-body">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/experience">Experience</NavLink>
          </li>
          <li>
            <NavLink href="/blog">Blog</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
```

Key changes: wordmark "Brian Oldak" on left (Anybody font), nav links on right, active = white, inactive = muted zinc, hover = burnt orange, no underline on nav links.

- [ ] **Step 2: Verify nav renders correctly**

Run dev server, check that the nav shows the wordmark on the left and links on the right. Active link should be white.

- [ ] **Step 3: Commit**

```bash
git add app/components/navigation.tsx
git commit -m "style: rewrite nav with wordmark left, links right"
```

---

### Task 3: Footer

**Files:**
- Modify: `app/components/footer.tsx`

- [ ] **Step 1: Rewrite the footer component**

Replace the entire contents of `app/components/footer.tsx` with:

```tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-band-slate">
      <div className="max-w-5xl mx-auto px-8 lg:px-16 py-12 flex items-center justify-between">
        <ul className="flex gap-6">
          <li>
            <a
              className="block"
              href="https://github.com/broldak"
              target="_blank"
            >
              <Image
                src="/github-mark-white.png"
                alt="GitHub"
                width={32}
                height={32}
              />
            </a>
          </li>
          <li>
            <a
              className="block"
              href="https://www.linkedin.com/in/brianoldak"
              target="_blank"
            >
              <Image
                src="/InBug-White.png"
                alt="LinkedIn"
                width={32}
                height={32}
              />
            </a>
          </li>
        </ul>
        <p className="text-sm text-muted">Brian Oldak</p>
      </div>
    </footer>
  );
}
```

Key changes: full-bleed dark slate background, larger icons (32x32) with modern `width`/`height` props instead of deprecated `layout`/`objectFit`, left-aligned icons, right-aligned credit text.

- [ ] **Step 2: Verify footer renders**

Check that the footer spans full width with the dark slate background, icons on the left, text on the right.

- [ ] **Step 3: Commit**

```bash
git add app/components/footer.tsx
git commit -m "style: rewrite footer with dark slate band and larger icons"
```

---

### Task 4: Home Page

**Files:**
- Modify: `app/page.tsx`
- Modify: `app/components/experience.tsx`

- [ ] **Step 1: Rewrite the experience component for the new design**

Replace the entire contents of `app/components/experience.tsx` with:

```tsx
import Link from "next/link";

const Experience = ({
  experience,
}: {
  experience: { title: string; company: string; url: string };
}) => {
  return (
    <div>
      <h3 className="text-lg text-white">
        {experience.title} @{" "}
        <Link href={experience.url} target="_blank">
          {experience.company}
        </Link>
      </h3>
    </div>
  );
};

export default Experience;
```

Only change: added `text-white` to the title so it reads against the colored bands.

- [ ] **Step 2: Rewrite the home page with hero + color-blocked bands**

Replace the entire contents of `app/page.tsx` with:

```tsx
import Experience from "./components/experience";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="w-full px-8 lg:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading font-extrabold text-6xl tracking-tight-heading text-white">
            Hello, I'm Brian
          </h1>
          <p className="mt-4 text-lg text-muted">
            I'm a{" "}
            <Link href="https://github.com/broldak" target="_blank">
              software engineering manager
            </Link>
            ,{" "}
            <Link
              href="https://www.strava.com/athletes/11417793"
              target="_blank"
            >
              cyclist
            </Link>
            , and karaoke enthusiast
          </p>
        </div>
      </section>

      {/* Currently */}
      <section className="w-full bg-band-teal px-8 lg:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-body tracking-wide-label uppercase text-muted">
            Currently
          </p>
          <div className="mt-4">
            <Experience
              experience={{
                title: "Engineering Manager",
                company: "Confluent",
                url: "https://www.confluent.io",
              }}
            />
          </div>
        </div>
      </section>

      {/* Previously */}
      <section className="w-full bg-band-burgundy px-8 lg:px-16 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs font-body tracking-wide-label uppercase text-muted">
            Previously
          </p>
          <div className="mt-4">
            <Experience
              experience={{
                title: "Head of Engineering",
                company: "Swantide",
                url: "https://swantide.com",
              }}
            />
          </div>
          <div className="mt-4">
            <Experience
              experience={{
                title: "Engineering Manager",
                company: "LinkedIn",
                url: "https://www.linkedin.com",
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
```

Key changes: removed centering, hero with massive left-aligned heading, full-bleed teal band for "Currently", full-bleed burgundy band for "Previously", section labels are uppercase with wide tracking.

- [ ] **Step 3: Verify home page renders**

Check: hero with large left-aligned name, teal band with Confluent role, burgundy band with Swantide + LinkedIn roles. All full-bleed.

- [ ] **Step 4: Commit**

```bash
git add app/page.tsx app/components/experience.tsx
git commit -m "style: rewrite home page with hero and color-blocked experience bands"
```

---

### Task 5: Blog Listing Page

**Files:**
- Modify: `app/blog/page.tsx`

- [ ] **Step 1: Rewrite the blog listing with alternating row backgrounds**

Replace the entire contents of `app/blog/page.tsx` with:

```tsx
import { getAllPosts } from "@/lib/api";
import Link from "next/link";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="flex flex-col flex-1">
      <section className="w-full px-8 lg:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading font-extrabold text-5xl tracking-tight-heading text-white">
            Blog
          </h1>
        </div>
      </section>

      {posts.length === 0 ? (
        <section className="w-full px-8 lg:px-16 py-16">
          <div className="max-w-5xl mx-auto">
            <p className="text-lg text-muted">
              No posts found. Check back later!
            </p>
          </div>
        </section>
      ) : (
        posts.map((post, idx) => (
          <section
            key={post.slug}
            className={`w-full px-8 lg:px-16 py-12 ${
              idx % 2 === 1 ? "bg-band-slate" : ""
            }`}
          >
            <div className="max-w-5xl mx-auto flex items-baseline justify-between gap-8">
              <div className="flex-1">
                <h2 className="font-heading text-2xl font-bold text-white">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-2 text-muted">{post.excerpt}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-sm text-muted">{post.date}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm mt-1 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          </section>
        ))
      )}
    </div>
  );
}
```

Key changes: title section at top, each post is a full-bleed row, odd rows get dark slate background, title + excerpt on left, date + "Read More" on right.

- [ ] **Step 2: Verify blog page renders**

Check: "Blog" title left-aligned, posts alternate backgrounds, layout is title-left / meta-right.

- [ ] **Step 3: Commit**

```bash
git add app/blog/page.tsx
git commit -m "style: rewrite blog listing with alternating color-banded rows"
```

---

### Task 6: Experience Listing Page

**Files:**
- Modify: `app/experience/page.tsx`

- [ ] **Step 1: Rewrite the experience listing with left-aligned rows**

Replace the entire contents of `app/experience/page.tsx` with:

```tsx
import { getAllExperience } from "@/lib/api";
import Link from "next/link";
import dayjs from "dayjs";

export default function Experience() {
  const experiences = getAllExperience();

  return (
    <div className="flex flex-col flex-1">
      <section className="w-full px-8 lg:px-16 py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-heading font-extrabold text-5xl tracking-tight-heading text-white">
            Experience
          </h1>
        </div>
      </section>

      <section className="w-full px-8 lg:px-16 pb-16">
        <div className="max-w-5xl mx-auto">
          <ul>
            {experiences.map((experience, idx) => (
              <li
                key={experience.slug}
                className={`py-8 flex items-center justify-between ${
                  idx !== experiences.length - 1
                    ? "border-b border-white/10"
                    : ""
                }`}
              >
                <h2 className="font-heading text-2xl font-bold text-white">
                  <Link href={`/experience/${experience.slug}`}>
                    {experience.title}
                  </Link>
                </h2>
                <p className="text-sm text-muted shrink-0">
                  {dayjs(experience.start_date).format("MMM YYYY")} -{" "}
                  {experience.end_date
                    ? dayjs(experience.end_date).format("MMM YYYY")
                    : "Present"}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
```

Key changes: title at top in hero-style section, rows have title left / date right, subtle `border-white/10` divider instead of gray-400.

- [ ] **Step 2: Verify experience listing page renders**

Check: "Experience" title left-aligned, rows show title on left and date range on right, subtle borders between rows.

- [ ] **Step 3: Commit**

```bash
git add app/experience/page.tsx
git commit -m "style: rewrite experience listing with left-aligned rows"
```

---

### Task 7: Detail Pages (Blog Post + Experience)

**Files:**
- Modify: `app/blog/[slug]/page.tsx`
- Modify: `app/experience/[slug]/page.tsx`
- Modify: `app/components/markdown-styles.module.css`

- [ ] **Step 1: Update markdown styles for new type system**

Replace the entire contents of `app/components/markdown-styles.module.css` with:

```css
.markdown {
  @apply text-lg leading-relaxed text-muted;
}

.markdown p,
.markdown ul,
.markdown ol,
.markdown blockquote {
  @apply my-6;
}

.markdown ul {
  @apply list-disc pl-6;
}

.markdown ul li {
  @apply my-2;
}

.markdown h2 {
  @apply text-3xl mt-12 mb-4 leading-snug font-bold text-white;
}

.markdown h3 {
  @apply text-2xl mt-8 mb-4 leading-snug font-bold text-white;
}
```

Key changes: added `text-muted` base, added `text-white` and `font-bold` to headings.

- [ ] **Step 2: Rewrite blog post detail page**

Replace the entire contents of `app/blog/[slug]/page.tsx` with:

```tsx
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import markdownStyles from "@/app/components/markdown-styles.module.css";
import Link from "next/link";
import { Metadata } from "next";

const Post = async (props: Params) => {
  const params = await props.params;
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return (
    <div className="flex flex-col flex-1">
      <section className="w-full px-8 lg:px-16 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link href="/blog">&larr; Back to Blog</Link>
          </div>
          <article>
            <h1 className="font-heading font-extrabold text-5xl tracking-tight-heading text-white">
              {post.title}
            </h1>
            <div
              className={markdownStyles["markdown"]}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default Post;

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const title = `${post.title} | Brian's Blog`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
```

Key changes: narrow `max-w-2xl` centered reading column, 5xl Anybody title, back link uses arrow entity.

- [ ] **Step 3: Rewrite experience detail page**

Replace the entire contents of `app/experience/[slug]/page.tsx` with:

```tsx
import { getAllExperience, getExperienceBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import { notFound } from "next/navigation";
import markdownStyles from "@/app/components/markdown-styles.module.css";
import Link from "next/link";
import { Metadata } from "next";

const ExperiencePost = async (props: Params) => {
  const params = await props.params;
  const post = getExperienceBySlug(params.slug);
  const content = await markdownToHtml(post.content || "");

  return (
    <div className="flex flex-col flex-1">
      <section className="w-full px-8 lg:px-16 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <Link href="/experience">&larr; Back to Experience</Link>
          </div>
          <article>
            <h1 className="font-heading font-extrabold text-5xl tracking-tight-heading text-white">
              {post.title}
            </h1>
            <div
              className={markdownStyles["markdown"]}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </article>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePost;

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const experience = getExperienceBySlug(params.slug);

  if (!experience) {
    return notFound();
  }

  const title = `${experience.title} | Brian's Experience`;

  return {
    title,
    openGraph: {
      title,
    },
  };
}

export async function generateStaticParams() {
  const experiences = getAllExperience();

  return experiences.map((experience) => ({
    slug: experience.slug,
  }));
}
```

Key changes: same narrow reading column treatment as blog posts, renamed component to `ExperiencePost` to avoid conflict with the listing page export, removed unused `getAllPosts` and `getPostBySlug` imports.

- [ ] **Step 4: Verify both detail pages render**

Check `/blog/test` and `/experience/confluent` — both should show a narrow centered column with the back link, large title, and markdown content.

- [ ] **Step 5: Commit**

```bash
git add app/components/markdown-styles.module.css app/blog/\[slug\]/page.tsx app/experience/\[slug\]/page.tsx
git commit -m "style: rewrite detail pages with narrow reading column and updated markdown styles"
```

---

### Task 8: Final Verification

- [ ] **Step 1: Run the build to check for errors**

Run: `npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 2: Visual check all pages**

Run dev server and verify each page:
- `/` — hero with large left-aligned name, teal "Currently" band, burgundy "Previously" band
- `/experience` — left-aligned title, rows with title left / date right
- `/experience/confluent` — narrow centered reading column
- `/blog` — left-aligned title, alternating row backgrounds
- `/blog/test` — narrow centered reading column
- Nav on all pages: wordmark left, links right
- Footer on all pages: dark slate band, icons left, text right

- [ ] **Step 3: Commit any fixes if needed**
