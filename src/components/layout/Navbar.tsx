"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback } from "react";

const NAV = [
  { label: "Menu", href: "/warung-menu" },
  { label: "Bundles", href: "/paket-mabar" },
  { label: "Gaming Hub", href: "/gaming-hub" },
  { label: "Location", href: "/lokasi" },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll lock saat sheet terbuka
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Tutup sheet dengan tombol Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    },
    [],
  );

  useEffect(() => {
    if (menuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen, handleKeyDown]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
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

      {/* FAB — hanya di mobile */}
      <button
        onClick={() => setMenuOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-on-primary shadow-lg flex items-center justify-center active:scale-90 transition-transform"
        aria-label="Buka menu navigasi"
        aria-expanded={menuOpen}
      >
        <span className="material-symbols-outlined text-2xl">menu</span>
      </button>

      {/* Backdrop overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/40 transition-opacity"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Bottom sheet */}
      <div
        className={`md:hidden fixed left-0 right-0 bottom-0 z-50 bg-surface-bright rounded-t-2xl shadow-2xl transition-transform duration-300 ease-out ${
          menuOpen ? "translate-y-0" : "translate-y-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu navigasi"
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-12 h-1 rounded-full bg-outline-variant" />
        </div>

        {/* Nav links */}
        <div className="flex flex-col px-margin-mobile pb-8 pt-3 gap-2">
          {NAV.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={closeMenu}
              className={`font-label-chalk text-headline-md py-3 px-4 rounded-xl transition-colors ${
                pathname === item.href
                  ? "text-primary bg-primary-container/20 font-bold"
                  : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
