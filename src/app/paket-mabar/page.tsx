export default function PaketMabarPage() {
  return (
    <>
      <main className="pt-6 pb-20">
        {/* Hero */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-10 py-12 text-center">
          <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full mb-6 text-sm tracking-widest uppercase font-semibold" style={{ fontFamily:"Bricolage Grotesque" }}>
            Harga Teman
          </div>
          <h1 className="text-[28px] md:text-[48px] font-extrabold mb-4 text-primary" style={{ fontFamily:"Montserrat", lineHeight:"56px", letterSpacing:"-0.02em" }}>Pilihan Paket Mabar</h1>
          <p className="text-lg max-w-2xl mx-auto text-on-surface-variant leading-relaxed" style={{ fontFamily:"Montserrat", lineHeight:"28px" }}>
            Kenyamanan nongkrong khas warkop dengan fasilitas gaming modern. Pilih paket yang pas di kantong, main sepuasnya bareng kawan.
          </p>
        </section>

        {/* Taplak divider */}
        <div className="h-4 taplak w-full opacity-50" />

        {/* Pricing Grid */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-10 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Paket Tanggal Tua */}
            <div className="flex flex-col bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden hover:border-primary transition-all group">
              <div className="h-48 relative overflow-hidden bg-surface-dim flex items-center justify-center">
                <span className="material-symbols-outlined text-outline text-6xl opacity-20">coffee</span>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-60" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-[24px] font-semibold text-primary mb-2" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"32px" }}>Paket Tanggal Tua</h3>
                <div className="text-[32px] font-bold text-on-surface mb-6" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"40px" }}>Rp 10.000</div>
                <div className="space-y-4 mb-8 flex-grow">
                  <div className="flex items-center gap-3 text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }}><span className="material-symbols-outlined text-primary">coffee</span>1 Kopi Hitam</div>
                  <div className="flex items-center gap-3 text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }}><span className="material-symbols-outlined text-primary">videogame_asset</span>1 Jam Main PS</div>
                </div>
                <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-colors letterpress">Pilih Paket</button>
              </div>
            </div>

            {/* Paket Bos Muda — Featured */}
            <div className="flex flex-col bg-surface-bright border-2 border-primary rounded-xl overflow-hidden relative transform md:-translate-y-4 shadow-xl z-10">
              <div className="absolute top-4 right-4 bg-primary text-on-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider z-20">Terlaris</div>
              <div className="h-56 relative overflow-hidden bg-surface-dim flex items-center justify-center">
                <span className="material-symbols-outlined text-outline text-6xl opacity-20">lunch_dining</span>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-bright to-transparent opacity-40" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-[24px] font-semibold text-primary mb-2" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"32px" }}>Paket Bos Muda</h3>
                <div className="text-[32px] font-bold text-on-surface mb-6" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"40px" }}>Rp 35.000</div>
                <div className="space-y-4 mb-8 flex-grow text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }}>
                  <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">coffee</span>2 Kopi Susu Mantap</div>
                  <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">lunch_dining</span>1 Indomie Double Spesial</div>
                  <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">sports_esports</span>2 Jam Main PS Premium</div>
                </div>
                <button className="w-full py-4 bg-primary text-on-primary font-bold rounded-lg hover:bg-primary-container transition-colors shadow-lg border-b-4 border-primary-fixed-dim active:border-b-0 active:translate-y-1">Ambil Paket Sultan</button>
              </div>
            </div>

            {/* Sewa Console */}
            <div className="flex flex-col bg-surface-container-low border border-outline-variant rounded-xl overflow-hidden hover:border-primary transition-all group">
              <div className="h-48 relative overflow-hidden bg-surface-dim flex items-center justify-center">
                <span className="material-symbols-outlined text-outline text-6xl opacity-20">joystick</span>
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent opacity-60" />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-[24px] font-semibold text-primary mb-2" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"32px" }}>Sewa Console Doang</h3>
                <div className="text-[32px] font-bold text-on-surface mb-6" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"40px" }}>Rp 5.000 <span className="text-base font-normal text-on-surface-variant" style={{ fontFamily:"Montserrat" }}>/ jam</span></div>
                <div className="space-y-4 mb-8 flex-grow text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }}>
                  <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">joystick</span>Akses Console Pilihan</div>
                  <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary">groups</span>Bisa Mabar s/d 4 Orang</div>
                </div>
                <button className="w-full py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-on-primary transition-colors letterpress">Pesan Jam</button>
              </div>
            </div>
          </div>
        </section>

        {/* Terms */}
        <section className="max-w-[1200px] mx-auto px-4 md:px-10 py-12">
          <div className="bg-tertiary-container text-on-tertiary-container p-8 rounded-xl border-2 border-dashed border-tertiary-fixed">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h4 className="text-[24px] font-semibold mb-4" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"32px" }}>Catatan Penting buat Sedulur:</h4>
                <ul className="space-y-2 list-disc list-inside text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }}>
                  <li>Paket Mabar berlaku setiap hari jam 10.00 - 22.00.</li>
                  <li>Wajib menjaga kebersihan stick dan meja (ojo kemproh).</li>
                  <li>Update game terbaru tersedia di semua console.</li>
                  <li>Bisa pesan snack tambahan langsung di tempat.</li>
                </ul>
              </div>
              <div className="md:w-1/3 text-center md:text-right">
                <p className="text-lg italic mb-4" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"20px", letterSpacing:"0.05em" }}>&quot;Main tenang, kopi kenceng, dompet seneng.&quot;</p>
                <span className="material-symbols-outlined text-5xl opacity-20">coffee_maker</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-surface-container-highest border-t-2 border-dashed border-outline-variant py-12 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-10 py-10 w-full max-w-[1200px] mx-auto">
          <div className="text-[24px] font-semibold text-on-surface" style={{ fontFamily:"Bricolage Grotesque", lineHeight:"32px" }}>GameBrew Corner</div>
          <p className="text-base text-on-surface-variant text-center md:text-left" style={{ fontFamily:"Montserrat", lineHeight:"24px" }}>© 2024 Warkop Rakyat - Kopi, Game, &amp; Kebersamaan</p>
          <div className="flex flex-wrap gap-6 text-base" style={{ fontFamily:"Montserrat", lineHeight:"24px" }}>
            <a className="text-on-surface-variant hover:text-primary underline transition-opacity opacity-80 hover:opacity-100" href="#">Hubungi via WhatsApp</a>
            <a className="text-on-surface-variant hover:text-primary underline transition-opacity opacity-80 hover:opacity-100" href="#">Alamat Kami</a>
            <a className="text-on-surface-variant hover:text-primary underline transition-opacity opacity-80 hover:opacity-100" href="#">Kebijakan Privasi</a>
          </div>
        </div>
      </footer>
    </>
  );
}
