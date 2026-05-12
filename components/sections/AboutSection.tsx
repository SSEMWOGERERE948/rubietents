export function AboutSection() {
  return (
    <section className="section-padding bg-white py-20">
      <div className="container-max grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand">
            About Rubie Tents
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-ink sm:text-4xl">
            Built for customers who need serious cover, not weak material.
          </h2>
        </div>

        <p className="text-lg leading-8 text-brand-muted">
          Rubie Tents Company Limited supplies premium tarpaulin materials and
          provides professional tent-making services. We focus on durable fabrics,
          neat finishing, and practical solutions for customers who need long-lasting
          cover, shelter, and outdoor protection.
        </p>
      </div>
    </section>
  );
}
