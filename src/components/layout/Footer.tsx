export default function Footer() {
  return (
    <footer className="bg-surface-container-highest border-t-2 border-dashed border-outline-variant py-12 mt-auto">
      <div className="px-4 md:px-10 w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
          {/* Brand + tagline */}
          <div className="flex flex-col gap-2">
            <div className="text-[24px] font-semibold text-on-surface" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"32px" }}>GameBrew Corner</div>
            <p className="text-base text-on-surface-variant max-w-xs leading-relaxed" style={{ fontFamily:"Montserrat", lineHeight:"24px" }}>Tempat nongkrong rakyat dengan hiburan konglomerat. Kopi nikmat, game lancar.</p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap gap-x-4 gap-y-4">
            <a className="text-on-surface-variant hover:text-primary underline text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }} href="#">WhatsApp</a>
            <a className="text-on-surface-variant hover:text-primary underline text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }} href="#">Lokasi</a>
            <a className="text-on-surface-variant hover:text-primary underline text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }} href="#">Privasi</a>
            <a className="text-on-surface-variant hover:text-primary underline text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }} href="#">Syarat</a>
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
          <p className="text-xs text-on-surface-variant text-center md:text-left" style={{ fontFamily:"Montserrat", lineHeight:"16px", fontWeight:"600" }}>© 2024 GameBrew Corner - Kopi, Game, &amp; Kebersamaan</p>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <span className="material-symbols-outlined text-sm">handyman</span>
            <span className="text-xs" style={{ fontFamily:"Montserrat", lineHeight:"16px", fontWeight:"600" }}>Built with Passion in ID</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
