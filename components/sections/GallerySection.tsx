const gallery = [
  {
    title: "Tarpaulin Rolls",
    description: "Heavy-duty rolls for tents, covers, and industrial use.",
    image: "/images/tarpaulin.jpeg",
  },
  {
    title: "Completed Tents",
    description: "Finished tent projects ready for customer delivery.",
    image: "/images/tentstandard.png",
  },
  {
    title: "Fabric Cutting & Stitching",
    description: "In-house fabrication, cutting, stitching, and finishing.",
    image: "/images/stitch.png",
  },
  {
    title: "Outdoor Event Tents",
    description: "Strong tents for functions, exhibitions, and outdoor events.",
    image: "/images/flyer.jpeg",
  },
  {
    title: "Truck Covers",
    description: "Durable covers for trucks, cargo, and transport protection.",
    image: "/images/lorrycover.jpg",
  },
  {
    title: "Protective Covers",
    description: "Custom covers for equipment, goods, and outdoor storage.",
    image: "/images/pickupcover.jpg",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-white py-20">
      <div className="container-max section-padding">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand">
            Gallery
          </p>

          <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-4xl">
            Rubie Tents Work Gallery
          </h2>

          <p className="mt-4 text-base leading-7 text-brand-muted">
            A preview of our tent materials, fabrication process, completed
            tents, truck covers, and protective cover solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((item, index) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-3xl border border-brand/10 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-brand-sand">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/10 to-transparent" />

                <div className="absolute right-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-brand-ink">
                  Photo {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-5 left-5 right-5">
                  <h3 className="text-2xl font-black text-white">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="p-5">
                <p className="text-sm leading-6 text-brand-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}