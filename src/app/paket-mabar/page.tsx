import Footer from "@/components/layout/Footer";

export default function PaketMabarPage() {
  return (
    <>
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12 text-center">
          <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full mb-6 font-label-chalk text-sm tracking-widest uppercase">
            Harga Teman
          </div>
          <h1 className="font-display text-headline-lg-mobile md:text-display mb-4 text-primary">
            Pilihan Paket Mabar
          </h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Kenyamanan nongkrong khas warkop dengan fasilitas gaming modern. Pilih paket yang pas di kantong, main sepuasnya bareng kawan.
          </p>
        </section>

        {/* Taplak Divider */}
        <div className="h-4 taplak-pattern w-full opacity-50"></div>

        {/* Pricing Grid */}
        <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">

            {/* Paket Tanggal Tua */}
            <div className="flex flex-col bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden hover:border-primary transition-all group">
              <div className="h-48 relative overflow-hidden">
                <img
                  alt="Kopi Hitam"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFhXc-oF0VPbQS--fQqBX3NH2gjtYQuf4l5wGRjqBrKtTYGH8MJh0SnSwa-K-qwfpPE2L41FLbJXjfcwdC36BYe0MaSCBXTdY2YsR-MRpdAU54cPyOflU8AKMIlq1dzqeIcKYW_nhfgszEK7kPg53v7_KKXCJ0WZIpvfrmMy2n65tO4eRSjNZm0MyRpAVzS_KSA4qI5J9dow16wk6NIIJA1tcX9ab_OwBcP4nsCHhasIszBMCV2W1XBsAYaYc1Iwap7lu91YcRNKE"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-label-chalk text-headline-md text-primary mb-2">Paket Tanggal Tua</h3>
                <div className="font-label-chalk text-headline-lg text-on-surface mb-6">Rp 10.000</div>
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">coffee</span>
                    <span className="font-body-md">1 Kopi Hitam</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">videogame_asset</span>
                    <span className="font-body-md">1 Jam Main PS</span>
                  </div>
                </div>
                <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-colors letterpress">
                  Pilih Paket
                </button>
              </div>
            </div>

            {/* Paket Bos Muda (Featured) */}
            <div className="flex flex-col bg-surface-bright border-2 border-primary rounded-xl overflow-hidden relative transform md:-translate-y-4 shadow-xl z-10">
              <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-20">
                Terlaris
              </div>
              <div className="h-56 relative overflow-hidden">
                <img
                  alt="Indomie and Coffee"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuARCPOduwOFFjCJFAj8pSafhhRX9cdayb7_DJu5jmWYApm1UbZ84OzJS6sAp8SkGeSBz-5By5KxeTELQc9-QHKtV-M5T1W00HM41DMRVakthi0BKfgSD7bx3IJ6lYSVcg5WIYKGNcc96C7NRhX_6ik1jcUYzTPF5JESQm_bIJS8TEHQ_djbdz5DHlXB46ekKKLo000CuXlbvEUBehfOaWNcv0Oqpoqx9PKyQjWW2FkvskKj3xkFeBzp05zXjv70lgM3GgzsPRC0Iys"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-bright to-transparent opacity-40"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-label-chalk text-headline-md text-primary mb-2">Paket Bos Muda</h3>
                <div className="font-label-chalk text-headline-lg text-on-surface mb-6">Rp 35.000</div>
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">coffee</span>
                    <span className="font-body-md">2 Kopi Susu Mantap</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">lunch_dining</span>
                    <span className="font-body-md">1 Indomie Double Spesial</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">sports_esports</span>
                    <span className="font-body-md">2 Jam Main PS Premium</span>
                  </div>
                </div>
                <button className="w-full py-4 bg-primary text-on-primary font-bold rounded-lg hover:bg-primary-container transition-colors shadow-lg border-b-4 border-primary-fixed-dim active:border-b-0 active:translate-y-1">
                  Ambil Paket Sultan
                </button>
              </div>
            </div>

            {/* Sewa Console Doang */}
            <div className="flex flex-col bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden hover:border-primary transition-all group">
              <div className="h-48 relative overflow-hidden">
                <img
                  alt="Game Console"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfFCtNQ19Xh50HC8PlJnYbGY4Do-o__9lDKiTAbDdiADJ7BY0JeRh3sfTHWQJWeDv9SsJuE6tcu4gxchE7Njf29uOaILgDV5M4PFhBM2_HM2PneZbYZDIDlLZpRPunmgWkViPCKoHPoWCwt4n5w4QUQQpFKuU8gTEy50_KtJdvTYuguNsDWKBm9jU3mcv_akqF-XwC_TfrklS5GsSTbMga-Rhzzbg8vBPjSIW5m2cz-xy0w9wEF8QzQ0RHrFXahvYkGoZle_5a3t0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-60"></div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-label-chalk text-headline-md text-primary mb-2">Sewa Console Doang</h3>
                <div className="font-label-chalk text-headline-lg text-on-surface mb-6">
                  Rp 5.000 <span className="text-body-md font-body-md text-on-surface-variant">/ jam</span>
                </div>
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">joystick</span>
                    <span className="font-body-md">Akses Console Pilihan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">groups</span>
                    <span className="font-body-md">Bisa Mabar s/d 4 Orang</span>
                  </div>
                </div>
                <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-colors letterpress">
                  Pesan Jam
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* Terms & Info Section */}
        <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12">
          <div className="bg-tertiary-container text-on-tertiary-container p-8 rounded-xl chalk-border border-tertiary-fixed">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h4 className="font-label-chalk text-headline-md mb-4">Catatan Penting buat Sedulur:</h4>
                <ul className="space-y-2 list-disc list-inside font-body-md">
                  <li>Paket Mabar berlaku setiap hari jam 10.00 - 22.00.</li>
                  <li>Wajib menjaga kebersihan stick dan meja (ojo kemproh).</li>
                  <li>Update game terbaru tersedia di semua console.</li>
                  <li>Bisa pesan snack tambahan langsung di tempat.</li>
                </ul>
              </div>
              <div className="md:w-1/3 text-center md:text-right">
                <p className="font-label-chalk text-label-chalk mb-4 italic">&quot;Main tenang, kopi kenceng, dompet seneng.&quot;</p>
                <span className="material-symbols-outlined text-display opacity-20">coffee_maker</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
