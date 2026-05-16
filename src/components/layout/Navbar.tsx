"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { label: "Menu", href: "/warung-menu" },
  { label: "Bundles", href: "/paket-mabar" },
  { label: "Gaming Hub", href: "/gaming-hub" },
  { label: "Location", href: "/lokasi" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <header className="bg-surface-bright border-b border-outline-variant z-50 sticky top-0">
      <nav className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 w-full max-w-max-width mx-auto">
        <Link href="/" className="font-label-chalk text-headline-md text-primary">
          GameBrew Corner
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`font-label-chalk text-label-chalk transition-colors ${
                pathname === item.href
                  ? "text-primary font-bold border-b-2 border-primary pb-1"
                  : "text-on-surface-variant hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-label-chalk text-label-chalk scale-95 active:scale-90 transition-transform">
          Pesan Sekarang
        </button>
      </nav>
    </header>
  );
}
