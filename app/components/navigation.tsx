"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function normalizeHref(path: string) {
  // strip trailing slash except root
  return path !== "/" ? path.replace(/\/+$/, "") : "/";
}


const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
  const pathname = usePathname() || "/";
  const nPath = normalizeHref(pathname);
  const nHref = normalizeHref(href);
  
  const isExact = nPath === nHref;
  const isChild = nHref !== "/" && (nPath === nHref || nPath.startsWith(nHref + "/"));
  const isActive = isExact || isChild;

  debugger;
  
  return (
    <Link href={href} className={isActive ? "pointer-events-none text-white" : "inherit"}>{children}</Link>
  );
};

export default function Navbar() {
  return (
    <nav className="px-16 flex justify-center items-center">
      <ul className="py-8 h-100% w-full flex justify-center gap-8">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/blog">Blog</NavLink>
        </li>
      </ul>
    </nav>
  );
}
