export default function WarungMenuPage() {
  return (
    <>
      <main className="flex-grow w-full max-w-[1200px] mx-auto px-4 md:px-10 py-10">
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 taplak -z-10 h-1/2 mt-auto" />
          <h1 className="text-[48px] font-extrabold text-primary mb-2" style={{ fontFamily:"Montserrat", lineHeight:"56px", letterSpacing:"-0.02em" }}>Warung Menu</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"20px", letterSpacing:"0.05em", fontWeight:"500" }}>
            Kelezatan merakyat, kenyamanan maksimal. Pilihan menu favorit untuk teman ngopi dan mabar Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
          <section className="relative group">
            <div className="absolute -top-4 -left-4 bg-tertiary text-on-tertiary px-6 py-2 -rotate-2 z-10 shadow-lg border-b-4 border-tertiary-container" style={{ fontFamily:"Bricolage Grotesque" }}>
              Kopi &amp; Minuman
            </div>
            <div className="chalkboard rounded-xl p-8 pt-12 shadow-2xl border-8 border-secondary-container transition-transform duration-300 group-hover:scale-[1.02]" style={{ minHeight:"400px", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
              <ul className="space-y-6 font-patrick text-2xl text-surface-bright tracking-wide">
                <li className="flex justify-between items-end border-b border-white/20 border-dashed pb-2"><span>Kopi Hitam</span><span className="text-tertiary-fixed">Rp 5rb</span></li>
                <li className="flex justify-between items-end border-b border-white/20 border-dashed pb-2"><span>Es Teh</span><span className="text-tertiary-fixed">Rp 5rb</span></li>
                <li className="flex justify-between items-end border-b border-white/20 border-dashed pb-2"><span>Kopi Susu</span><span className="text-tertiary-fixed">Rp 7rb</span></li>
              </ul>
              <div className="mt-8 flex justify-center">
                <span className="material-symbols-outlined text-surface-variant text-4xl opacity-50">coffee</span>
              </div>
            </div>
          </section>

          <section className="relative group">
            <div className="absolute -top-4 -right-4 bg-primary text-on-primary px-6 py-2 rotate-2 z-10 shadow-lg border-b-4 border-primary-container" style={{ fontFamily:"Bricolage Grotesque" }}>
              Camilan
            </div>
            <div className="bg-surface-container-low wood-grain rounded-xl p-8 pt-12 shadow-xl border-2 border-outline-variant transition-transform duration-300 group-hover:scale-[1.02] overflow-hidden relative" style={{ minHeight:"400px", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
              <div className="absolute inset-0 taplak pointer-events-none" style={{ opacity:0.05 }} />
              <ul className="space-y-6 font-patrick text-2xl text-on-surface-variant tracking-wide">
                <li className="flex items-center gap-4"><span className="material-symbols-outlined text-primary" style={{ fontVariationSettings:"'FILL' 1" }}>bakery_dining</span><span>Gorengan Hangat</span><span className="ml-auto text-primary font-bold">Panas!</span></li>
                <li className="flex items-center gap-4"><span className="material-symbols-outlined text-primary" style={{ fontVariationSettings:"'FILL' 1" }}>ramen_dining</span><span>Indomie Telur</span><span className="ml-auto text-primary font-bold">Populer</span></li>
                <li className="flex items-center gap-4"><span className="material-symbols-outlined text-primary" style={{ fontVariationSettings:"'FILL' 1" }}>restaurant</span><span>Pisang Goreng</span><span className="ml-auto text-primary font-bold">Manis</span></li>
              </ul>
              <div className="mt-12 border-t border-outline-variant pt-4 flex justify-between items-center opacity-70">
                <span className="text-sm" style={{ fontFamily:"Bricolage Grotesque" }}>DIOLAH DENGAN KASIH</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <div className="w-2 h-2 rounded-full bg-tertiary" />
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="mt-20">
          <div className="bg-surface-container-highest border-2 border-dashed border-outline-variant rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-4 md:items-stretch">
            <div className="flex-1">
              <h2 className="text-[32px] font-bold text-primary mb-4" style={{ fontFamily:"Montserrat", lineHeight:"40px" }}>Paket Mabar Rakyat</h2>
              <p className="text-lg text-on-surface-variant mb-6 leading-relaxed" style={{ fontFamily:"Montserrat", lineHeight:"28px" }}>Nikmati Kopi Susu + Indomie Telur + Sesi Gaming 2 Jam hanya seharga Rp 25rb. Kebersamaan tanpa batas, harga bersahabat.</p>
              <button className="bg-secondary text-on-secondary px-8 py-3 rounded-full shadow-lg hover:brightness-110 transition-all border-b-4 border-on-secondary-fixed-variant text-lg font-semibold" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"20px", letterSpacing:"0.05em" }}>Ambil Paket Ini</button>
            </div>
            <div className="w-full md:w-1/2 aspect-video bg-surface-dim rounded-lg overflow-hidden border-4 border-surface-container shadow-inner flex items-center justify-center">
              <span className="material-symbols-outlined text-outline text-6xl opacity-20">image</span>
            </div>
          </div>
        </section>

        <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 flex flex-col items-center gap-2 group z-50">
          <div className="bg-primary-container text-on-primary-container p-4 rounded-full shadow-2xl scale-100 hover:scale-110 active:scale-95 transition-transform cursor-pointer">
            <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings:"'FILL' 1" }}>shopping_basket</span>
          </div>
          <span className="bg-surface-bright border border-outline-variant px-3 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily:"Bricolage Grotesque" }}>Checkout</span>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-surface-container-highest border-t-2 border-dashed border-outline-variant mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-10 py-10 w-full max-w-[1200px] mx-auto">
          <div className="text-[24px] font-semibold text-on-surface" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"32px" }}>GameBrew Corner</div>
          <p className="text-base text-on-surface text-center md:text-left" style={{ fontFamily:"Montserrat", lineHeight:"24px" }}>© 2024 GameBrew Corner - Kopi, Game, &amp; Kebersamaan</p>
          <div className="flex flex-wrap gap-4 text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }}>
            <a className="text-on-surface-variant hover:text-primary underline transition-opacity" href="#">Hubungi via WhatsApp</a>
            <a className="text-on-surface-variant hover:text-primary underline transition-opacity" href="#">Alamat Kami</a>
            <a className="text-on-surface-variant hover:text-primary underline transition-opacity" href="#">Kebijakan Privasi</a>
          </div>
        </div>
      </footer>
    </>
  );
}
