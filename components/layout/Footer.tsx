import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-ink text-white">
      <div className="container-max section-padding grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr]">
        <div>
          <h2 className="text-2xl font-black">Rubie Tents Company Limited</h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/70">
            Durable Materials. Strong Tents. Reliable Cover.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/70">
            <a href="#products" className="hover:text-white">Products</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Contact</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <p className="flex gap-2"><Phone size={16} /> +256 XXX XXX XXX</p>
            <p className="flex gap-2"><Mail size={16} /> info@rubietents.com</p>
            <p className="flex gap-2"><MapPin size={16} /> Kampala, Uganda</p>
            <div className="flex gap-3 pt-2">
              <Facebook size={18} />
              <Instagram size={18} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Rubie Tents Company Limited. All rights reserved.
      </div>
    </footer>
  );
}
