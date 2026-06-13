import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Truck, Warehouse } from "lucide-react";

export function HeroSection() {
  return (
    <section className="section-padding overflow-hidden bg-brand-sand bg-fabric-grid bg-[length:32px_32px]">
      <div className="container-max grid min-h-[78vh] items-center gap-12 py-16 lg:grid-cols-2">
        <div>
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-3xl border border-brand/10 bg-white p-2 shadow-sm">
              <img
                src="/images/logo.jpeg"
                alt="Rubie Tents Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-brand">
                Rubie Tents
              </p>
              <p className="text-sm font-semibold text-brand-muted">
                Premium Tent Materials & Structures
              </p>
            </div>
          </div>

          <p className="mb-4 inline-flex rounded-full border border-brand/20 bg-white px-4 py-2 text-sm font-bold text-brand">
            Tarpaulin Distribution & Custom Tent Making
          </p>

          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-brand-ink sm:text-5xl lg:text-6xl">
            High-Quality Tarpaulin & Custom Tent Solutions
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
            We distribute durable Korea tarpaulin materials and manufacture
            strong, reliable tents for events, business, transport, storage,
            and outdoor protection.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="#contact">Request a Quote</Link>
            </Button>

            <Button asChild size="lg" variant="outline">
              <a
                href="https://wa.me/256774831231"
                target="_blank"
                rel="noreferrer"
              >
                Contact on WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, label: "High-strength fabric" },
              { icon: Warehouse, label: "6ft & 7ft rolls" },
              { icon: Truck, label: "Bulk supply ready" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm"
              >
                <item.icon className="h-5 w-5 text-brand" />
                <span className="text-sm font-bold text-brand-ink">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-full bg-brand-gold/30 blur-3xl" />
          <div className="absolute -bottom-8 -right-8 h-48 w-48 rounded-full bg-brand/25 blur-3xl" />

          <div className="relative rounded-[2rem] border border-brand/10 bg-white p-5 shadow-soft">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-brand to-brand-dark p-8 text-white">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl bg-white p-2">
                  <img
                    src="/images/logo.jpeg"
                    alt="Rubie Tents Logo"
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold">
                    Korea Tarpaulin
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white/70">
                    Durable rolls for serious work
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-black">
                6ft & 7ft Rolls, 50 Metres
              </h2>

              <p className="mt-4 text-white/80">
                Strong fabric for tents, truck covers, event shelters, shades,
                storage covers, and industrial protection.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-3xl font-black">6ft</p>
                  <p className="text-sm text-white/70">50m roll length</p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5">
                  <p className="text-3xl font-black">7ft</p>
                  <p className="text-sm text-white/70">50m roll length</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/10 p-4">
                <p className="text-sm font-semibold text-white/80">
                  Suitable for tents, lorry covers, pickup covers, car covers,
                  shade structures, and protective outdoor covers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}