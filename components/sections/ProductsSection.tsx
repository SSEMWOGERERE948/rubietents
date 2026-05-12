import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const products = [
  {
    name: "Korea Tarpaulin 6 Feet Roll",
    specs: ["Width: 6 feet", "Length: 50 metres", "High-strength fabric"],
    description:
      "Suitable for tent making, covers, shades, outdoor use, and general protection.",
  },
  {
    name: "Korea Tarpaulin 7 Feet Roll",
    specs: ["Width: 7 feet", "Length: 50 metres", "Heavy-duty quality"],
    description:
      "Suitable for large tents, truck covers, industrial covers, and event shelters.",
  },
  {
    name: "Tent Fabric Materials",
    specs: ["Different fabric types", "Weather-resistant", "Strong finishing"],
    description:
      "Fabric options for clients who need custom tent production and reinforcement.",
  },
  {
    name: "Custom-Made Tents",
    specs: ["Client-based sizing", "Event-ready", "Business and institutional use"],
    description:
      "Made for events, churches, schools, outdoor functions, and business operations.",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-brand-sand py-20">
      <div className="container-max">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand">
            Products
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-4xl">
            Materials and tents made for durability.
          </h2>
          <p className="mt-4 text-brand-muted">
            Core supply includes Korea tarpaulin in 6ft and 7ft rolls, both 50
            metres long.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <Card key={product.name}>
              <CardHeader>
                <CardTitle>{product.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-6 text-brand-muted">
                  {product.description}
                </p>

                <ul className="mt-5 grid gap-2">
                  {product.specs.map((spec) => (
                    <li key={spec} className="rounded-xl bg-brand-sand px-3 py-2 text-sm font-semibold text-brand-ink">
                      {spec}
                    </li>
                  ))}
                </ul>

                <Button asChild className="mt-6 w-full">
                  <a href="#contact">Request Price</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
