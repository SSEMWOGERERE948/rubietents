import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-brand-sand py-20">
      <div className="container-max grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-brand">
            Request a Quote
          </p>
          <h2 className="mt-3 text-3xl font-black text-brand-ink sm:text-4xl">
            Tell us what you need and we will advise on material, size, and cost.
          </h2>

          <div className="mt-8 grid gap-4">
            <a href="tel:+256XXXXXXXXX" className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <Phone className="text-brand" />
              <span className="font-bold text-brand-ink">+256 XXX XXX XXX</span>
            </a>
            <a href="mailto:info@rubietents.com" className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <Mail className="text-brand" />
              <span className="font-bold text-brand-ink">info@rubietents.com</span>
            </a>
            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <MapPin className="text-brand" />
              <span className="font-bold text-brand-ink">Kampala, Uganda</span>
            </div>
          </div>
        </div>

        <form className="rounded-3xl bg-white p-6 shadow-soft">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-brand-ink">
              Full name
              <input className="rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-bold text-brand-ink">
              Phone number
              <input className="rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand" placeholder="+256..." />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-bold text-brand-ink">
            Product or service needed
            <select className="rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand">
              <option>Korea Tarpaulin 6ft Roll</option>
              <option>Korea Tarpaulin 7ft Roll</option>
              <option>Custom Tent Making</option>
              <option>Tent Repair</option>
              <option>Bulk Supply</option>
            </select>
          </label>

          <label className="mt-5 grid gap-2 text-sm font-bold text-brand-ink">
            Quantity / size required
            <input className="rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand" placeholder="Example: 2 rolls, 20x30 tent..." />
          </label>

          <label className="mt-5 grid gap-2 text-sm font-bold text-brand-ink">
            Message
            <textarea className="min-h-32 rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand" placeholder="Write your request..." />
          </label>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button type="button" className="w-full">
              <Send size={18} /> Submit Request
            </Button>
            <Button asChild type="button" variant="outline" className="w-full">
              <a href="https://wa.me/256XXXXXXXXX" target="_blank">
                WhatsApp Us
              </a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-brand-muted">
            Developer note: connect this form to Formspree, Resend, EmailJS,
            WhatsApp API, or your backend route when ready.
          </p>
        </form>
      </div>
    </section>
  );
}
