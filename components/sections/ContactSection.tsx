"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Send } from "lucide-react";

const WHATSAPP_NUMBER = "256774831231";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Korea Tarpaulin 6ft Roll",
    quantity: "",
    message: "",
  });

  function updateField(
    field: keyof typeof formData,
    value: string
  ) {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  }

  function sendToWhatsApp() {
    const whatsappMessage = `
Hello Rubie Tents,

I would like to request a quote.

Name: ${formData.name}
Phone: ${formData.phone}
Product/Service: ${formData.service}
Quantity/Size: ${formData.quantity}

Message:
${formData.message}
    `.trim();

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`,
      "_blank"
    );
  }

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

          <p className="mt-5 text-base leading-7 text-brand-muted">
            Contact Rubie Tents directly through WhatsApp for faster quotation,
            product advice, and order discussion.
          </p>

          <div className="mt-8 grid gap-4">
            <a
              href="tel:+256709343238"
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Phone className="text-brand" />
              <span className="font-bold text-brand-ink">
                +256 709 343 238
              </span>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <Send className="text-brand" />
              <span className="font-bold text-brand-ink">
                WhatsApp: +256 774 831 231
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl bg-white p-5 shadow-sm">
              <MapPin className="text-brand" />
              <span className="font-bold text-brand-ink">
                Kisekka, Kampala, Uganda
              </span>
            </div>
          </div>
        </div>

        <form
          className="rounded-3xl bg-white p-6 shadow-soft"
          onSubmit={(event) => {
            event.preventDefault();
            sendToWhatsApp();
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-bold text-brand-ink">
              Full name
              <input
                value={formData.name}
                onChange={(event) => updateField("name", event.target.value)}
                className="rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand"
                placeholder="Your name"
                required
              />
            </label>

            <label className="grid gap-2 text-sm font-bold text-brand-ink">
              Phone number
              <input
                value={formData.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                className="rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand"
                placeholder="+256..."
                required
              />
            </label>
          </div>

          <label className="mt-5 grid gap-2 text-sm font-bold text-brand-ink">
            Product or service needed
            <select
              value={formData.service}
              onChange={(event) => updateField("service", event.target.value)}
              className="rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand"
            >
              <option>Korea Tarpaulin 6ft Roll</option>
              <option>Korea Tarpaulin 7ft Roll</option>
              <option>Custom Tent Making</option>
              <option>Tent Repair</option>
              <option>Truck Cover</option>
              <option>Pickup Cover</option>
              <option>Car Cover</option>
              <option>Bulk Supply</option>
            </select>
          </label>

          <label className="mt-5 grid gap-2 text-sm font-bold text-brand-ink">
            Quantity / size required
            <input
              value={formData.quantity}
              onChange={(event) => updateField("quantity", event.target.value)}
              className="rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand"
              placeholder="Example: 2 rolls, 20x30 tent..."
              required
            />
          </label>

          <label className="mt-5 grid gap-2 text-sm font-bold text-brand-ink">
            Message
            <textarea
              value={formData.message}
              onChange={(event) => updateField("message", event.target.value)}
              className="min-h-32 rounded-2xl border border-brand/15 px-4 py-3 outline-none focus:border-brand"
              placeholder="Write your request..."
            />
          </label>

          <div className="mt-6">
            <Button type="submit" className="w-full">
              <Send size={18} />
              Send Request on WhatsApp
            </Button>
          </div>

          <p className="mt-4 text-xs text-brand-muted">
            Your request will open in WhatsApp with all the details filled in.
          </p>
        </form>
      </div>
    </section>
  );
}