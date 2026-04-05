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
