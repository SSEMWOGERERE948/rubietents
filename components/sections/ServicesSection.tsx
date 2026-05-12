import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PackageCheck, Scissors, ShieldPlus, Boxes } from "lucide-react";

const services = [
  {
    icon: PackageCheck,
    title: "Tarpaulin Distribution",
    text: "Supply of Korea tarpaulin rolls in 6ft and 7ft sizes.",
  },
  {
    icon: Scissors,
    title: "Custom Tent Making",
    text: "Production of tents according to client requirements and use case.",
  },
  {
    icon: ShieldPlus,
    title: "Tent Repairs & Reinforcement",
    text: "Repairing damaged tents, stitching, strengthening, and replacing worn sections.",
  },
  {
    icon: Boxes,
    title: "Bulk Supply",
    text: "Supply for traders, institutions, event companies, transporters, and organizations.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-white py-20">
      <div className="container-max">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-4xl">
            Distribution, production, repair, and bulk supply.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="shadow-none">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white">
                  <service.icon size={24} />
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-brand-muted">{service.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
