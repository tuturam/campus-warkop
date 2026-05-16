import Footer from "@/components/layout/Footer";

export default function LandingPage() {
  return (
    <>
      <main className="flex-grow">
        {/* ===== HERO ===== */}
        <section className="relative w-full flex flex-col items-center justify-center overflow-hidden min-h-[500px] md:h-[600px]">
          <div className="absolute inset-0 z-0">
            <img
              alt="Warkop Interior"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8qlZ1U3Meavv6_7TnEvFoYuvkvmeoDYp5Y6JE1aEEm3tgJrGaFtcjOj4HWSBQuqnsbSRWSLG2ko33FZV7W1ViuLQyiC6Q0sNqHc41Z6td0b1T6i-ejgUlKyTqSBSolKyh-b-X0mpRtusr9J8-wsPjf_9u4ygjbIpUnq1FrsQIMMcbmUhKiHNXkAracio39kFXJnsOLUzc7kC_eZz_FUdz9UH9-3Jc3FZ9hvmHnK6u09QrnGZ8LennghwtmYY4kiEorcqfDC5kVAM"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/20 to-black/50"></div>
          </div>
          <div className="relative z-10 w-full max-w-max-width px-margin-mobile md:px-margin-desktop py-12 text-center text-on-primary">
            <div className="mb-gutter inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-label-sm text-label-sm tracking-widest uppercase text-white">Cek Meja Kosong: 4 Meja Tersedia</span>
            </div>
            <h1 className="font-display text-[32px] md:text-display mb-6 leading-tight drop-shadow-lg text-white">
              Nongkrong Rakyat, <br />
              <span className="text-primary-fixed">Hiburan Konglomerat.</span>
            </h1>
            <p className="font-body-lg text-body-md md:text-body-lg max-w-2xl mx-auto mb-margin-desktop text-white/90 drop-shadow-sm">
              Warkop GameBrew Corner — Tempatnya ngopi santai sambil mabar PS di meja masing-masing. Tinggal pilih meja, buka koper, langsung main!
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-gutter">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-lg font-headline-md shadow-[0_4px_0_0_rgba(129,48,29,0.8)] active:shadow-none active:translate-y-1 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>confirmation_number</span>
                Pesan Tempat/Meja
              </button>
              <button className="w-full sm:w-auto bg-white/10 backdrop-blur-md border-2 border-white hover:bg-white hover:text-primary transition-colors text-white px-8 py-4 rounded-lg font-headline-md flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">sports_esports</span>
                Lihat Katalog Game
              </button>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full h-16 checkered-pattern opacity-40" />
        </section>

        {/* ===== BENTO GRID ===== */}
        <section className="py-16 md:py-24 px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">

            {/* Main Feature Card */}
            <div className="md:col-span-8 bg-surface-container-low rounded-xl border border-outline-variant p-8 md:p-10 relative overflow-hidden flex flex-col justify-end min-h-[300px] md:min-h-[400px]">
              <div className="absolute top-0 right-0 p-10 opacity-5 md:opacity-10 pointer-events-none">
                <span className="material-symbols-outlined text-[100px] md:text-[180px]">coffee</span>
              </div>
              <div className="relative z-10">
                <h3 className="font-headline-lg text-headline-md md:text-headline-lg text-primary mb-4">
                  Filosofi Kopi &amp; Kontroler
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Kami percaya kebahagiaan itu sederhana. Segelas kopi tubruk dan satu ronde FIFA bersama kawan adalah kemewahan yang bisa dinikmati siapa saja.
                </p>
              </div>
            </div>

            {/* Secondary Cards Stack */}
            <div className="md:col-span-4 grid grid-cols-1 gap-gutter">
              <div className="bg-secondary-container rounded-xl p-6 md:p-8 border border-outline-variant/30 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-4xl text-on-secondary-container mb-4">electric_bolt</span>
                <h4 className="font-headline-md text-headline-md text-on-secondary-container mb-2">Zero Lag</h4>
                <p className="font-label-sm text-label-sm text-on-secondary-fixed-variant">Internet kencang buat update game atau streaming lancar.</p>
              </div>
              <div className="bg-tertiary-fixed rounded-xl p-6 md:p-8 border border-outline-variant/30 flex flex-col items-center justify-center text-center">
                <span className="material-symbols-outlined text-4xl text-on-tertiary-fixed-variant mb-4">inventory_2</span>
                <h4 className="font-headline-md text-headline-md text-on-tertiary-fixed-variant mb-2">Game Box Portable</h4>
                <p className="font-label-sm text-label-sm text-on-tertiary-fixed-variant">Buka kopernya, layar monitor dan console sudah siap sedia.</p>
              </div>
            </div>

            {/* Three Columns Row */}
            <div className="md:col-span-4 bg-surface-bright border border-outline-variant p-8 rounded-xl inner-shadow-inset flex flex-col justify-between">
              <div>
                <h5 className="font-label-chalk text-label-chalk text-primary mb-2">PROMO HARI INI</h5>
                <div className="w-full h-[1px] bg-outline-variant my-4 checkered-pattern"></div>
                <p className="font-headline-md text-headline-md mb-2">Paket Mabar 3 Jam</p>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">Gratis 2 Kopi Susu &amp; 1 Porsi Pisang Goreng Keju.</p>
              </div>
              <span className="text-primary font-bold font-label-chalk text-2xl">Rp 45.000</span>
            </div>

            <div className="md:col-span-4 relative rounded-xl overflow-hidden group aspect-square md:aspect-auto min-h-[250px]">
              <img
                alt="Tradisional Coffee"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUBlet1z4bivnWnkIbDgYJPngvb3u3BUdpFAwdjasUD483izdR2MXajflCkkklGc1bwC5wrVfylpDGmWOi2jD-QQ6ECd-GCqx-I7_VnbwZ3U01dnQUbogDdDdSgaMR95cPelY1IwPA0Kcd8pdu6Oliwpqzkr7uw4OEfiloDdOKoyaM1oZbms_xgIuVg3mIASba8pQjfdSeJe0XD05lF5ggM_6xbfgZGIEhA19qHjyBBJh_d6KbBEwnNBv0N25Wutl9MPcHD7JtYj0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-8">
                <p className="text-white font-label-chalk">#VibeRakyat</p>
              </div>
            </div>

            <div className="md:col-span-4 bg-primary p-8 rounded-xl flex flex-col justify-between min-h-[250px]">
              <span className="material-symbols-outlined text-on-primary text-5xl opacity-50">groups</span>
              <div>
                <h5 className="text-on-primary font-headline-md mb-2">Komunitas Warkop</h5>
                <p className="text-on-primary/80 font-body-md">Gabung grup WhatsApp kami untuk info turnamen mingguan berhadiah kopi gratis sebulan!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Divider Line */}
        <div className="w-full h-4 bg-surface-container-low border-y border-outline-variant opacity-30 checkered-pattern"></div>
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
}
