import Footer from "@/components/layout/Footer";

export default function GamingHubPage() {
  return (
    <>
      <main className="pt-24 pb-12">
        {/* Hero Section: The PlayBox */}
        <section className="max-w-max-width mx-auto px-margin-desktop mb-16">
          <div className="relative overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant flex flex-col md:flex-row items-center gap-8 p-8 md:p-12">
            <div className="flex-1 space-y-6">
              <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container text-label-sm font-label-sm rounded-full">
                EDISI TERBATAS
              </span>
              <h1 className="font-display text-display text-primary leading-tight">PlayBox Portable Console</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Nikmati sensasi gaming konsol premium di tengah kehangatan warkop. PlayBox menghadirkan pengalaman PlayStation 5 dalam koper kayu estetik yang merakyat.</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <a href="#" className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg pressed-button flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">sports_esports</span>
                  Pesan Tempat
                </a>
                <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-container hover:text-on-primary-container transition-all">
                  Lihat Menu Kopi
                </button>
              </div>
            </div>
            <div className="flex-1 relative">
              <img
                alt="PlayBox Hardware"
                className="w-full h-auto rounded-xl shadow-lg border border-outline-variant"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs_TVyaqIz9a12jNyBmhBz5vLTWpd7Xj0vOEf_768SAzS_tLUCMxEfAlu6S8_wdEdNiTXQIlQsjrRV30LKkwKWh_TAglpD3v5wmaw0yUpLuQDv-wrNtiQVxl_3EwGL2r1DK1dz-KUiI_QZPiE3cztRFaQzVpZdQ0pl6J-ZrKsKkTwuIYcgobBobnwTvvgusycaBIt7LKxtoJtMzhceqw7TgvdSct4RIs7Z5E5QbW026PuGDR7DE_lcQxp2oCEd3SoAKACQTHWftmo"
              />
            </div>
          </div>
        </section>

        <div className="taplak-divider mb-16"></div>

        {/* PlayBox Anatomy: Bento Grid */}
        <section className="max-w-max-width mx-auto px-margin-desktop mb-16">
          <h2 className="font-headline-lg text-headline-lg text-center mb-12">PlayBox Anatomy</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter">
            {/* Feature 1: Monitor */}
            <div className="md:col-span-2 bg-surface-container-high p-8 rounded-xl border border-dashed border-outline-variant relative overflow-hidden group">
              <div className="relative z-10">
                <span className="material-symbols-outlined text-4xl text-primary mb-4">monitor</span>
                <h3 className="font-headline-md text-headline-md mb-2">24&quot; Full HD Display</h3>
                <p className="text-on-surface-variant">Layar IPS ultra-responsif dengan akurasi warna tinggi untuk pengalaman visual gaming yang jernih di setiap sudut warkop.</p>
              </div>
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-[160px]">aspect_ratio</span>
              </div>
            </div>
            {/* Feature 2: Performance */}
            <div className="bg-surface-container p-8 rounded-xl border border-outline-variant flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-3xl text-primary mb-4">memory</span>
                <h3 className="font-label-chalk text-label-chalk mb-2">PS5 Powered</h3>
              </div>
              <p className="text-label-sm font-label-sm">Performa generasi terbaru dengan loading cepat SSD.</p>
            </div>
            {/* Feature 3: Controllers */}
            <div className="bg-surface-container-lowest p-8 rounded-xl border-2 border-primary flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-3xl text-primary mb-4">videogame_asset</span>
                <h3 className="font-label-chalk text-label-chalk mb-2">Dual DualSense</h3>
              </div>
              <p className="text-label-sm font-label-sm">Dua kontroler haptic feedback untuk duel seru bersama teman.</p>
            </div>
            {/* Feature 4: Audio */}
            <div className="md:col-span-2 bg-surface-container-high p-8 rounded-xl border border-outline-variant flex items-center gap-6">
              <div className="p-6 bg-surface rounded-full border border-outline-variant letterpress-inset">
                <span className="material-symbols-outlined text-4xl text-primary">surround_sound</span>
              </div>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">Immersive Audio</h3>
                <p className="text-on-surface-variant">Speaker stereo terintegrasi dengan output headphone jack untuk fokus maksimal saat bertanding.</p>
              </div>
            </div>
            {/* Feature 5: Portability */}
            <div className="md:col-span-2 bg-tertiary-container text-on-tertiary-container p-8 rounded-xl border border-outline-variant flex flex-col justify-center">
              <h3 className="font-headline-md text-headline-md mb-2">All-in-One Suitcase</h3>
              <p className="font-body-md text-body-md opacity-90">Didesain dalam koper yang kokoh dan mudah dipindahkan. Cukup colok kabel power, dan 'Warkop Gaming' siap dimulai di meja mana saja.</p>
            </div>
          </div>
        </section>

        <div className="taplak-divider mb-16"></div>

        {/* Game Library Section */}
        <section className="max-w-max-width mx-auto px-margin-desktop mb-16">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-primary">Game Library</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Koleksi judul terpopuler yang siap kamu mainkan.</p>
            </div>
            <button className="text-primary font-bold hover:underline flex items-center gap-2">
              Lihat Semua
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Game 1 */}
            <div className="bg-surface-container-low rounded-xl border border-outline-variant overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  alt="FC 24"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmPVGC66lG9O0jAq1D6DnpOpUBEdcAz0PiP2vyRrjVSpjOrUBQ2ByFNL5DWy2CurcFKeEHzLue9SgmptWTnEwZLsQ5x3-JhC2SiVLzGd3j4JdIQ9hzL36n3awvSOlmQC5R3AD3lTGQIe2fDmjWOUQb_EmS62Bh1r8TNwerBx6kDg38nHCwNSvbhzS6D-DQXudY90VZ-I3459KxgssjItdH8NlH1z-Rpl2Z8mHJCMSJVbLnuPMAqi3PlF0LkKVtwHsQ444hqJyxu_Y"
                />
              </div>
              <div className="p-4 border-t border-dashed border-outline-variant">
                <h4 className="font-label-chalk text-label-chalk">FC 24</h4>
                <p className="text-label-sm font-label-sm text-on-surface-variant mb-4">Simulasi Sepakbola Terbaik</p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-secondary text-on-secondary text-[10px] rounded uppercase font-bold">Terlaris</span>
                </div>
              </div>
            </div>
            {/* Game 2 */}
            <div className="bg-surface-container-low rounded-xl border border-outline-variant overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  alt="Tekken 8"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwS6hecGwCgTTGCLJgp-OnkBJBu7mpwwgMGWvsNP0OXOsjEzhRz--4PBINJ_xtwWTYJfn8g_4gl7Uwl9oBBTomhG-a9u42dTKJyd-3rDmIcmne-XRG7oUVetyyWWqOMtFp9vttb8ODGtMM6lrqF0NNsUTwVDpcnOZ4Gl0emzvHa7f6bKtPxiXOVJSuiGnOCKYSZaVcrhXae6Sd2OiNCnx0mE1RIUhAy-WKzJA9Wirg5C0X-RBKbrjx26iCmBh-Q-C4bas1-pm5UbU"
                />
              </div>
              <div className="p-4 border-t border-dashed border-outline-variant">
                <h4 className="font-label-chalk text-label-chalk">Tekken 8</h4>
                <p className="text-label-sm font-label-sm text-on-surface-variant mb-4">Duel Beladiri Legendaris</p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-tertiary text-on-tertiary text-[10px] rounded uppercase font-bold">Baru</span>
                </div>
              </div>
            </div>
            {/* Game 3 */}
            <div className="bg-surface-container-low rounded-xl border border-outline-variant overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  alt="RPG Quest"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVMTcXzaO3PwXBcxbmnWHhBPt8DDJB7pE9ym33AEcPlu1i5i1w4SVi7rypBlPOtWSVnI2aZdTnLGjA6QGlzAvLlSSuARRPR7RpojizBu7EtTvxbjaCzWp2BcXXZqjEBSHo7H38scANtY35OfR3g_hDzOXePw9z811wu9_wxehhUOK4cz2QUoG6ICZyxe7KsjXB-UEUbywuf174nuq2FCcG-Tp0Cwb3x6xToSPa8nvxQai7tBlQTp8ITmpfPJgNL-EG7UWSAXwpZZ8"
                />
              </div>
              <div className="p-4 border-t border-dashed border-outline-variant">
                <h4 className="font-label-chalk text-label-chalk">Elden Ring</h4>
                <p className="text-label-sm font-label-sm text-on-surface-variant mb-4">Petualangan Epik</p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-outline text-on-surface text-[10px] rounded uppercase font-bold">Hardcore</span>
                </div>
              </div>
            </div>
            {/* Game 4 */}
            <div className="bg-surface-container-low rounded-xl border border-outline-variant overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img
                  alt="Racing Turbo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaErca5bKnTyG_yO-d15GjvYOROc9LB80V5SBsIqyRqfQh2w0yT5K3qYJbHkU7ephgtApiwJX39_PWkVQ9JiuZ6K9u_UeyAfKEYezKhN5rHjExJDKsj7--Nt18GVsK0UmsVjnejvOLLWO62viCn3F5BaPLmop3mSJIYqxvfcG2PdQ1AWV3v7X-m5wz1kXMsvyL57uZlhVfgPrV53AleYTFCLwiBAJ-C36OKYKQXWpCgSFIhExswpFYBKG8WEXAKdSztPApj2A7hVA"
                />
              </div>
              <div className="p-4 border-t border-dashed border-outline-variant">
                <h4 className="font-label-chalk text-label-chalk">Gran Turismo 7</h4>
                <p className="text-label-sm font-label-sm text-on-surface-variant mb-4">Balap Mobil Realistis</p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-primary text-on-primary text-[10px] rounded uppercase font-bold">Simulator</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Availability / CTA */}
        <section className="max-w-max-width mx-auto px-margin-desktop mb-16">
          <div className="bg-surface-container-highest rounded-2xl p-12 border-2 border-dashed border-outline text-center space-y-6 wood-texture">
            <h2 className="font-display text-headline-lg text-on-surface">Siap Bertanding Hari Ini?</h2>
            <p className="max-w-2xl mx-auto font-body-lg text-on-surface-variant">Reservasi PlayBox sekarang untuk memastikan tempatmu dan teman-teman tidak terisi. Tersedia paket khusus kopi + gaming mulai dari Rp 15.000/jam.</p>
            <div className="flex justify-center gap-4">
              <div className="letterpress-inset bg-surface rounded-xl p-4 border border-outline-variant">
                <span className="block text-label-sm text-on-surface-variant font-bold">STATUS SAAT INI</span>
                <div className="flex items-center justify-center gap-2 text-primary font-bold">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                  </span>
                  3 PlayBox Tersedia
                </div>
              </div>
            </div>
            <div className="pt-4">
              <a href="#" className="inline-block bg-primary text-on-primary px-12 py-5 rounded-xl font-bold text-xl pressed-button shadow-lg">
                Cek Ketersediaan &amp; Pesan
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
