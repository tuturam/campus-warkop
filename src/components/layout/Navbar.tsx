"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Menu", href: "/warung-menu" },
  { label: "Bundles", href: "/paket-mabar" },
  { label: "Gaming Hub", href: "#" },
  { label: "Location", href: "#" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="bg-surface-bright border-b border-outline-variant z-50 sticky top-0">
      <nav className="flex justify-between items-center px-4 md:px-10 py-4 w-full max-w-[1200px] mx-auto">
        <Link href="/" className="text-primary font-bold text-lg" style={{ fontFamily: "Bricolage Grotesque" }}>
          GameBrew Corner
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {NAV.map((item) => (
            <Link key={item.label} href={item.href}
              className={`text-sm font-semibold transition-colors ${pathname === item.href ? "text-primary font-bold border-b-2 border-primary pb-1" : "text-on-surface-variant hover:text-primary"}`}
              style={{ fontFamily: "Bricolage Grotesque" }}>
              {item.label}
            </Link>
          ))}
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-semibold scale-95 active:scale-90 transition-transform border-b-4 border-primary-fixed-dim text-sm" style={{ fontFamily: "Bricolage Grotesque" }}>
          Pesan Sekarang
        </button>
      </nav>
    </header>
  );
}
