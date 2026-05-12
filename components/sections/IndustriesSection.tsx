const industries = [
  "Event companies",
  "Schools and universities",
  "Churches and ministries",
  "NGOs and community organizations",
  "Transport and logistics companies",
  "Market vendors and traders",
  "Construction sites",
  "Farms and outdoor businesses",
];

export function IndustriesSection() {
  return (
    <section id="industries" className="section-padding bg-brand-sand py-20">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand">
            Industries We Serve
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-4xl">
            Built for business, institutions, and outdoor operations.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry} className="rounded-2xl border border-brand/10 bg-white p-5 text-center font-bold text-brand-ink shadow-sm">
              {industry}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
