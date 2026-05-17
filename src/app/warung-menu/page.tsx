import Footer from "@/components/layout/Footer";

export default function WarungMenuPage() {
  return (
    <>
      <main className="flex-grow w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-margin-desktop">
        {/* Hero Section / Title */}
        <div className="text-center mb-12 relative">
          <div className="absolute inset-0 taplak-pattern -z-10 h-1/2 mt-auto"></div>
          <h1 className="font-display text-display text-primary mb-2">Warung Menu</h1>
          <p className="font-label-chalk text-label-chalk text-on-surface-variant max-w-2xl mx-auto">
            Kelezatan merakyat, kenyamanan maksimal. Pilihan menu favorit untuk teman ngopi dan mabar Anda.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

          {/* Category: Kopi & Minuman */}
          <section className="relative group">
            <div className="absolute -top-4 -left-4 bg-tertiary text-on-tertiary px-6 py-2 rotate-[-2deg] z-10 shadow-lg font-label-chalk border-b-4 border-tertiary-container">
              Kopi &amp; Minuman
            </div>
            {/* Chalkboard Card */}
            <div className="chalkboard rounded-xl p-8 pt-12 shadow-2xl border-8 border-secondary-container group-hover:scale-[1.02] transition-transform duration-300" style={{ minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <ul className="space-y-6 font-patrick text-2xl text-surface-bright tracking-wide">
                <li className="flex justify-between items-end border-b border-white/20 border-dashed pb-2">
                  <span>Kopi Hitam</span>
                  <span className="text-tertiary-fixed">Rp 5rb</span>
                </li>
                <li className="flex justify-between items-end border-b border-white/20 border-dashed pb-2">
                  <span>Es Teh</span>
                  <span className="text-tertiary-fixed">Rp 5rb</span>
                </li>
                <li className="flex justify-between items-end border-b border-white/20 border-dashed pb-2">
                  <span>Kopi Susu</span>
                  <span className="text-tertiary-fixed">Rp 7rb</span>
                </li>
              </ul>
              <div className="mt-8 flex justify-center">
                <span className="material-symbols-outlined text-surface-variant text-4xl opacity-50">coffee</span>
              </div>
            </div>
          </section>

          {/* Category: Camilan */}
          <section className="relative group">
            <div className="absolute -top-4 -right-4 bg-primary text-on-primary px-6 py-2 rotate-[2deg] z-10 shadow-lg font-label-chalk border-b-4 border-primary-container">
              Camilan
            </div>
            {/* Laminated Paper Style Card */}
            <div className="bg-surface-container-low wood-grain rounded-xl p-8 pt-12 shadow-xl border-2 border-outline-variant group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden relative" style={{ minHeight: "400px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div className="absolute inset-0 taplak-pattern opacity-5 pointer-events-none"></div>
              <ul className="space-y-6 font-patrick text-2xl text-on-surface-variant tracking-wide">
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bakery_dining</span>
                  <span>Gorengan Hangat</span>
                  <span className="ml-auto text-primary font-bold">Panas!</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>ramen_dining</span>
                  <span>Indomie Telur</span>
                  <span className="ml-auto text-primary font-bold">Populer</span>
                </li>
                <li className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>restaurant</span>
                  <span>Pisang Goreng</span>
                  <span className="ml-auto text-primary font-bold">Manis</span>
                </li>
              </ul>
              {/* Card Footer Decoration */}
              <div className="mt-12 border-t border-outline-variant pt-4 flex justify-between items-center opacity-70">
                <span className="text-sm font-label-chalk">DIOLAH DENGAN KASIH</span>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <div className="w-2 h-2 rounded-full bg-tertiary"></div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Featured Section: Promo/Bundle */}
        <section className="mt-20">
          <div className="bg-surface-container-highest border-2 border-dashed border-outline-variant rounded-xl p-8 md:p-12 flex flex-col md:flex-row gap-gutter md:items-stretch">
            <div className="flex-1">
              <h2 className="font-headline-lg text-primary mb-4">Paket Mabar Rakyat</h2>
              <p className="font-body-lg text-on-surface-variant mb-6">Nikmati Kopi Susu + Indomie Telur + Sesi Gaming 2 Jam hanya seharga Rp 25rb. Kebersamaan tanpa batas, harga bersahabat.</p>
              <button className="bg-secondary text-on-secondary px-8 py-3 rounded-full font-label-chalk text-label-chalk shadow-lg hover:brightness-110 transition-all border-b-4 border-on-secondary-fixed-variant">
                Ambil Paket Ini
              </button>
            </div>
            <div className="w-full md:w-1/2 aspect-video bg-surface-dim rounded-lg overflow-hidden border-4 border-surface-container shadow-inner">
              <img
                alt="Interior Warkop Rakyat yang hangat"
                className="w-full h-full object-cover opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpvNh3Q_kUHz3hikrKzOr1z6qX4sFxkp_tw6YuJP5EianiQ5vPYCy5COZKkScEkhi9LsQ6e92l0kRNPzg1Lk7kxWgb0-HeSUQ10e_qNqGKGcHuvwkvJKgQD4JJfd32X54venru7qpdUFOcrSThBGGtPTJMuZ6yzH70Cd33iJECbBa8Ail_x8jsGcuhZG5VnCI2K4wbS5WuW3s85FhTJquGiM1P0BZnX8CzeMpbX6nCd4TYzkB8G52bBK2w914SoQEHzM5GBCmUN1Y"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-highest border-t-2 border-dashed border-outline-variant mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-gutter px-margin-desktop py-margin-desktop w-full max-w-max-width mx-auto">
          <div className="font-label-chalk text-headline-md text-on-surface">GameBrew Corner</div>
          <p className="font-body-md text-body-md text-on-surface text-center md:text-left">© 2024 GameBrew Corner - Kopi, Game, &amp; Kebersamaan</p>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a className="font-body-md text-on-surface-variant hover:text-primary underline transition-opacity" href="#">Hubungi via WhatsApp</a>
            <a className="font-body-md text-on-surface-variant hover:text-primary underline transition-opacity" href="#">Alamat Kami</a>
            <a className="font-body-md text-on-surface-variant hover:text-primary underline transition-opacity" href="#">Kebijakan Privasi</a>
          </div>
        </div>
      </footer>

      {/* FAB for Quick Order */}
      {/*<div className="fixed bottom-margin-mobile right-margin-mobile md:bottom-margin-desktop md:right-margin-desktop flex flex-col items-center gap-2 group z-50">
        <div className="bg-primary-container text-on-primary-container p-4 rounded-full shadow-2xl scale-100 hover:scale-110 active:scale-95 transition-transform cursor-pointer">
          <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_basket</span>
        </div>
        <span className="bg-surface-bright border border-outline-variant px-3 py-1 rounded text-label-sm font-label-chalk opacity-0 group-hover:opacity-100 transition-opacity">Checkout</span>
      </div>*/}
    </>
  );
}
