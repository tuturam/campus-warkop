import Footer from "@/components/layout/Footer";

export default function LokasiPage() {
  return (
    <>
      <main className="flex-grow w-full max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12">
        {/* Hero Section */}
        <header className="mb-12">
          <h1 className="font-display text-display text-primary mb-2">Temukan Kami</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Tempat ternyaman untuk kopi tubruk, mabar tanpa lag, dan obrolan santai bareng kawan.
          </p>
        </header>

        {/* Main Layout: Bento Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
          {/* Map Card */}
          <div className="md:col-span-8 bg-surface-container border border-outline-variant p-2 overflow-hidden relative min-h-[400px]">
            <div className="absolute inset-0 z-0 bg-surface-dim">
              <img
                alt="Map"
                className="w-full h-full object-cover opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-JE6xx6e794nbfI-sbl349WSOSBdcbxjpUWtuxa7ZlHRejTyfMOmaCQ01oEEu-jzIVjwG-Leg2IO7V8zIa_wj1q_GGBqEB4fcWGqL2vzKR8JChtG_rUY0OeZidt-o4BxgZA3nyFjOzxltxJCHyxwll1f8eBCJhxNZJQXVLy_qADQd-puge-1kCmPhtgAhPdcx3R_EQyj4Ynhv1p4moxtDk2wZSiDTjLbpf8LURjohE-JTF_jOv5OiEoJGxHagWNuVHWfH7AOrXvQ"
              />
            </div>
            {/* Pin Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
              <div className="bg-primary text-on-primary p-3 rounded-full shadow-lg border-2 border-surface flex items-center justify-center">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              </div>
              <div className="mt-2 bg-surface px-4 py-2 border border-outline-variant shadow-sm font-label-chalk">
                GameBrew Corner
              </div>
            </div>
          </div>

          {/* Operating Hours & Contact */}
          <div className="md:col-span-4 flex flex-col gap-gutter">
            {/* Hours Card */}
            <div className="border border-outline-variant p-8 flex flex-col justify-center bg-white h-full">
              <div className="flex items-center gap-3 mb-6 text-primary">
                <span className="material-symbols-outlined text-3xl">schedule</span>
                <h2 className="font-headline-md text-headline-md text-primary">Jam Buka</h2>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-dashed border-outline-variant pb-3">
                  <span className="font-label-chalk text-on-surface">Setiap Hari</span>
                  <span className="font-label-chalk text-primary font-bold text-xl">10:00 - 22:00</span>
                </div>
                <p className="text-on-surface-variant font-body-md italic text-sm leading-relaxed">*Jam operasional dapat berubah saat hari libur nasional atau turnamen khusus.</p>
              </div>
            </div>

            {/* Contact/Address Card */}
            <div className="bg-surface-container-highest border border-outline-variant p-8 flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4 text-primary">
                <span className="material-symbols-outlined">pin_drop</span>
                <h2 className="font-headline-md text-headline-md">Alamat</h2>
              </div>
              <p className="font-body-md text-body-md mb-8 flex-grow">
                Jl. Kenangan Indah No. 42,<br />
                Kecamatan Kebersamaan, Jakarta Selatan<br />
                DKI Jakarta, 12345
              </p>
              <a
                href="#"
                className="w-full bg-tertiary text-on-tertiary py-4 flex items-center justify-center gap-2 font-label-chalk text-label-chalk hover:opacity-90 transition-opacity border-b-2 border-tertiary-container active:border-b-0 active:translate-y-[2px]"
              >
                <span className="material-symbols-outlined">chat</span>
                Hubungi via WhatsApp
              </a>
            </div>
          </div>

          {/* Interior Gallery Section */}
          <div className="md:col-span-12 mt-8">
            <div className="taplak-divider mb-12"></div>
            <h2 className="font-headline-lg text-headline-lg text-on-surface-variant mb-8 text-center">Suasana Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Photo 1 */}
              <div className="aspect-square bg-surface-container border border-outline-variant p-1">
                <img
                  alt="Interior 1"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6RL6MIFp5dfzLS-fQS5Z9at4guRgp2vc0UsjpfSCCZL4DhKxvYzblZ6nyllfN91RuSyawlh8-Nve7sKZuBjQZW81dXQAOcxBgA0LlpK9XWO57naK5mZvSmPGZ8ll7R16IcXE-NW_QryOkW8TOiTEaoJ3xVVqkx2aq3sy-cfFAbqvJAfxee9PZXyfzTSMzuvFhQI-MZGiyuHqAaCgK4Xh4Ssb7kdC_W7I_FvG4H5p3HA9BmiB3jMQiSmZ0JBbhuHa615XDiS1F2DE"
                />
              </div>
              {/* Photo 2 */}
              <div className="aspect-square bg-surface-container border border-outline-variant p-1">
                <img
                  alt="Interior 2"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAlOszROLvkLx63CM-0vUXFg6ffulzFAdu_Muubw3Yk8VcCkYwSAvsCUHU1HQ5mSZctVN8lyJ3OKCWmugdCErpv1VRbLg_qQ7PI4_m_fryhwg9tb0HPKX0WzUsXrQb-T4VluSU9_V_k2bAt6F67oYHwmgy4neAi__ueDbYyijl-yl6Dpa3G5qQpdh9A0qDGnjY97Zw2ZSG5w9vDPrP-genAP8rU_s5IfMlKzaJ-FF6E7x9gIjbs5LVe1lYs0OyZxZI8tn3XipSZXfs"
                />
              </div>
              {/* Photo 3 */}
              <div className="aspect-square bg-surface-container border border-outline-variant p-1">
                <img
                  alt="Interior 3"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBueBhGMuji4b0y_3u9dPVEQeZZHdt1TmF4Xbk8mo7ZvONcODHnNYM6lyOLsxND22XtUxZax02Ds7GXWUWrIXA2DW-PryCBww5kSHRJrphZ8BHEeR7n-TYNLFYKtofi-I7d8OQ83qNfyNkK03jJxjLpZ7PdTUwpYxpvnCVsYbHAwgdrcVs2J_lLtOACrFbDAU19rL-WRZPUBRYiQq-zWIXZJ7ijv5K37ldThx1CUVEFAt8WnXltwt4SoYlAtVoe9ZlX3pYP9em06EQ"
                />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
