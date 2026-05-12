import { CheckCircle2 } from "lucide-react";

const benefits = [
  "High-quality Korea tarpaulin materials",
  "Durable fabrics for long-term use",
  "6ft and 7ft rolls available",
  "50-metre roll lengths",
  "Professional tent-making workmanship",
  "Suitable for events, transport, business, and outdoor protection",
  "Fair pricing for bulk and retail customers",
  "Reliable customer support",
];

export function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-brand-ink py-20 text-white">
      <div className="container-max grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand-gold">
            Why Choose Us
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            We focus on material strength, finishing, and reliable supply.
          </h2>
          <p className="mt-5 text-white/70">
            Weak fabric costs customers more later. Rubie Tents positions itself
            around durable material, practical workmanship, and dependable service.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex gap-3 rounded-2xl bg-white/8 p-4">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold" />
              <p className="text-sm font-semibold text-white/90">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
