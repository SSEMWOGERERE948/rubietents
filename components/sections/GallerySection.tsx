const gallery = [
  "Tarpaulin rolls",
  "Completed tents",
  "Fabric cutting and stitching",
  "Outdoor event tents",
  "Truck covers",
  "Protective covers",
];

export function GallerySection() {
  return (
    <section id="gallery" className="section-padding bg-white py-20">
      <div className="container-max">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand">
            Gallery
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-4xl">
            Replace these placeholders with real Rubie Tents photos.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              key={item}
              className="group relative min-h-56 overflow-hidden rounded-3xl bg-gradient-to-br from-brand/90 via-brand-dark to-brand-ink p-6 text-white shadow-soft"
            >
              <div className="absolute inset-0 bg-fabric-grid bg-[length:24px_24px] opacity-20" />
              <div className="relative flex h-full flex-col justify-between">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">
                  Photo {index + 1}
                </p>
                <h3 className="mt-24 text-2xl font-black">{item}</h3>
                <p className="mt-2 text-sm text-white/70">
                  Add real image in this block later.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
