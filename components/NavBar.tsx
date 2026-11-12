"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Skills", href: "/skills" },
  { label: "Certifications", href: "/certifications" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return(
    <nav className="flex flex-wrap gap-3">
      {navItems.map((item) => {
        // trailingSlash: true makes pathname "/about/", so compare without it
        const isActive =
          pathname.replace(/\/$/, "") === item.href.replace(/\/$/, "");

        return(
          <Link
            key={item.href}
            href={item.href}
            className={`nav-button rounded-full px-4 py-2 font-medium ${
              isActive ? "nav-button-active" : ""
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}