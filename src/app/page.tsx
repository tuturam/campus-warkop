export default function LandingPage() {
  return (
    <>
      <main className="flex-grow">
        {/* ===== HERO ===== */}
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden min-h-[500px] md:h-[600px]">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#3d2215] via-[#2a1a10] to-background" />
          <div className="absolute inset-0 z-0 opacity-10 taplak" />

          <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-10 py-12 text-center">
            <div className="mb-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs tracking-widest uppercase text-white font-semibold">Cek Meja Kosong: 4 Meja Tersedia</span>
            </div>

            <h1 className="text-[32px] md:text-[48px] font-extrabold mb-6 leading-tight drop-shadow-lg text-white" style={{ fontFamily:"Montserrat", lineHeight:"56px", letterSpacing:"-0.02em" }}>
              Nongkrong Rakyat, <br />
              <span className="text-primary-fixed">Hiburan Konglomerat.</span>
            </h1>

            <p className="text-sm md:text-lg max-w-2xl mx-auto mb-10 text-white/90 drop-shadow-sm leading-relaxed" style={{ fontFamily:"Montserrat" }}>
              Warkop GameBrew Corner — Tempatnya ngopi santai sambil mabar PS di meja masing-masing. Tinggal pilih meja, buka koper, langsung main!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-lg font-bold shadow-[0_4px_0_0_rgba(129,48,29,0.8)] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2" style={{ fontFamily:"Montserrat", fontSize:"24px", lineHeight:"32px", fontWeight:"600" }}>
                <span className="material-symbols-outlined" style={{ fontVariationSettings:"'FILL' 1" }}>confirmation_number</span>
                Pesan Tempat/Meja
              </button>
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white hover:text-primary transition-colors text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2" style={{ fontFamily:"Montserrat", fontSize:"24px", lineHeight:"32px", fontWeight:"600" }}>
                <span className="material-symbols-outlined">sports_esports</span>
                Lihat Katalog Game
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-16 checkered opacity-40" />
        </section>

        {/* ===== BENTO GRID ===== */}
        <section className="py-16 md:py-24 px-4 md:px-10 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

            <div className="md:col-span-8 bg-surface-container-low rounded-xl border border-outline-variant p-8 md:p-10 relative overflow-hidden flex flex-col justify-end min-h-[300px] md:min-h-[400px]">
              <div className="absolute top-0 right-0 p-10 opacity-5 md:opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[100px] md:text-[180px]">coffee</span>
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-[32px] font-bold text-primary mb-4" style={{ fontFamily:"Montserrat", lineHeight:"40px" }}>Filosofi Kopi & Kontroler</h3>
                <p className="text-base text-on-surface-variant max-w-md leading-relaxed" style={{ fontFamily:"Montserrat", lineHeight:"24px" }}>
                  Kami percaya kebahagiaan itu sederhana. Segelas kopi tubruk dan satu ronde FIFA bersama kawan adalah kemewahan yang bisa dinikmati siapa saja.
                </p>
              </div>
            </div>

            <div className="md:col-span-4 grid grid-cols-1 gap-4">
              <div className="bg-secondary-container rounded-xl p-6 md:p-8 border border-outline-variant/30 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-4xl text-on-secondary-container mb-4">electric_bolt</span>
                <h4 className="text-[24px] font-semibold text-on-secondary-container mb-2" style={{ fontFamily:"Montserrat", lineHeight:"32px" }}>Zero Lag</h4>
                <p className="text-xs text-on-secondary-fixed-variant leading-relaxed" style={{ fontFamily:"Montserrat", lineHeight:"16px", fontWeight:"600" }}>Internet kencang buat update game atau streaming lancar.</p>
              </div>
              <div className="bg-tertiary-fixed rounded-xl p-6 md:p-8 border border-outline-variant/30 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-4xl text-on-tertiary-fixed-variant mb-4">inventory_2</span>
                <h4 className="text-[24px] font-semibold text-on-tertiary-fixed-variant mb-2" style={{ fontFamily:"Montserrat", lineHeight:"32px" }}>Game Box Portable</h4>
                <p className="text-xs text-on-tertiary-fixed-variant leading-relaxed" style={{ fontFamily:"Montserrat", lineHeight:"16px", fontWeight:"600" }}>Buka kopernya, layar monitor dan console sudah siap sedia.</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-surface-bright border border-outline-variant p-8 rounded-xl inner-shadow flex flex-col justify-between">
              <div>
                <h5 className="text-primary mb-2 font-semibold uppercase tracking-wider text-lg" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"20px", letterSpacing:"0.05em" }}>PROMO HARI INI</h5>
                <div className="w-full h-px bg-outline-variant my-4 checkered" />
                <p className="text-[24px] font-semibold mb-2" style={{ fontFamily:"Montserrat", lineHeight:"32px" }}>Paket Mabar 3 Jam</p>
                <p className="text-base text-on-surface-variant mb-6 leading-relaxed" style={{ fontFamily:"Montserrat", lineHeight:"24px" }}>Gratis 2 Kopi Susu & 1 Porsi Pisang Goreng Keju.</p>
              </div>
              <span className="text-primary font-bold text-2xl" style={{ fontFamily:"Bricolage Grotesque" }}>Rp 45.000</span>
            </div>

            <div className="md:col-span-4 relative rounded-xl overflow-hidden group aspect-square md:aspect-auto min-h-[250px] bg-surface-dim">
              <div className="absolute inset-0 flex items-center justify-center text-outline/20">
                <span className="material-symbols-outlined text-[120px] opacity-20">image</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white text-lg font-semibold" style={{ fontFamily:"Bricolage Grotesque" }}>#VibeRakyat</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-primary p-8 rounded-xl flex flex-col justify-between min-h-[250px]">
              <span className="material-symbols-outlined text-on-primary text-5xl opacity-50">groups</span>
              <div>
                <h5 className="text-on-primary font-semibold text-[24px] mb-2" style={{ fontFamily:"Montserrat", lineHeight:"32px" }}>Komunitas Warkop</h5>
                <p className="text-on-primary/80 text-base leading-relaxed" style={{ fontFamily:"Montserrat", lineHeight:"24px" }}>Gabung grup WhatsApp kami untuk info turnamen mingguan berhadiah kopi gratis sebulan!</p>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-4 bg-surface-container-low border-y border-outline-variant opacity-30 checkered" />
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-surface-container-highest border-t-2 border-dashed border-outline-variant py-12 mt-auto">
        <div className="px-4 md:px-10 w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-10">
            <div className="flex flex-col gap-2">
              <div className="text-[24px] font-semibold text-on-surface" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"32px" }}>GameBrew Corner</div>
              <p className="text-base text-on-surface-variant max-w-xs leading-relaxed" style={{ fontFamily:"Montserrat", lineHeight:"24px" }}>Tempat nongkrong rakyat dengan hiburan konglomerat. Kopi nikmat, game lancar.</p>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-4">
              <a className="text-on-surface-variant hover:text-primary underline text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }} href="#">WhatsApp</a>
              <a className="text-on-surface-variant hover:text-primary underline text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }} href="#">Lokasi</a>
              <a className="text-on-surface-variant hover:text-primary underline text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }} href="#">Privasi</a>
              <a className="text-on-surface-variant hover:text-primary underline text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }} href="#">Syarat</a>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full bg-on-surface/5 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">share</span>
              </button>
              <button className="w-12 h-12 rounded-full bg-on-surface/5 flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">location_on</span>
              </button>
            </div>
          </div>
          <div className="border-t border-outline-variant/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-on-surface-variant text-center md:text-left" style={{ fontFamily:"Montserrat", lineHeight:"16px", fontWeight:"600" }}>© 2024 GameBrew Corner - Kopi, Game, & Kebersamaan</p>
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-sm">handyman</span>
              <span className="text-xs" style={{ fontFamily:"Montserrat", lineHeight:"16px", fontWeight:"600" }}>Built with Passion in ID</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
