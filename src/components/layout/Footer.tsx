export default function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t-2 border-dashed border-outline-variant py-12 mt-auto">
      <div className="px-margin-mobile md:px-margin-desktop w-full max-w-max-width mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          {/* Brand + tagline */}
          <div className="flex flex-col gap-2">
            <div className="font-label-chalk text-headline-md text-on-surface">GameBrew Corner</div>
            <p className="font-body-md text-on-surface-variant max-w-xs">Tempat nongkrong rakyat dengan hiburan konglomerat. Kopi nikmat, game lancar.</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-gutter gap-y-4">
            <a className="text-on-surface-variant hover:text-primary underline font-body-md" href="#">WhatsApp</a>
            <a className="text-on-surface-variant hover:text-primary underline font-body-md" href="#">Lokasi</a>
            <a className="text-on-surface-variant hover:text-primary underline font-body-md" href="#">Privasi</a>
            <a className="text-on-surface-variant hover:text-primary underline font-body-md" href="#">Syarat</a>
          </div>

          {/* Social buttons */}
          <div className="flex gap-4">
            <button className="w-12 h-12 rounded-full bg-on-surface/5 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined">share</span>
            </button>
            <button className="w-12 h-12 rounded-full bg-on-surface/5 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
              <span className="material-symbols-outlined">location_on</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-outline-variant/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-label-sm text-label-sm text-on-surface-variant text-center md:text-left">© 2024 GameBrew Corner - Kopi, Game, &amp; Kebersamaan</p>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">handyman</span>
            <span className="font-label-sm">Built with Passion in ID</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
