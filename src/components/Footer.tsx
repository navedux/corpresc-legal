import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[8%] py-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/">
              <Image src="/Logo.webp" alt="CORPRESC LEGAL" width={140} height={35} className="h-8 w-auto object-contain" />
            </Link>
            <p className="text-slate-700 text-[13px] font-semibold leading-relaxed mt-4 max-w-[240px]">
              Trusted legal advisory for companies building the future.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.12em] uppercase text-navy/60 mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Services" },
                { href: "/how-we-work", label: "How We Work" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-slate-600 text-[13px] hover:text-navy transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.12em] uppercase text-navy/60 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Corporate Structuring", anchor: "corporate-structuring-governance" },
                { label: "Regulatory Strategy", anchor: "regulatory-jurisdiction-advisory" },
                { label: "Commercial Advisory", anchor: "commercial-strategic-legal-advisory" },
                { label: "Dispute & Litigation", anchor: "disputes-arbitration-litigation" },
                { label: "Cross-Border Advisory", anchor: "cross-border-advisory" },
              ].map((service) => (
                <li key={service.label}>
                  <Link href={`/services#${service.anchor}`} className="text-slate-600 text-[13px] hover:text-navy transition-colors">
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.12em] uppercase text-navy/60 mb-5">
              Connect
            </h4>
            <ul className="space-y-3">
              {[
                { label: "X (Twitter)", href: "#" },
                { label: "LinkedIn", href: "#" },
                { label: "Email", href: "mailto:hello@corpresc.com" },
                { label: "WhatsApp", href: "#" },
                { label: "Instagram", href: "#" },
              ].map((social) => (
                <li key={social.label}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer" className="text-slate-600 text-[13px] hover:text-navy transition-colors">
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[12px] font-bold tracking-[0.12em] uppercase text-navy/60 mb-5">
              Get in Touch
            </h4>
            <p className="text-slate-500 text-[13px] leading-relaxed mb-6">
              Ready to build the right legal framework for your business?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-navy text-white px-6 py-2.5 text-[13px] font-medium hover:bg-navy-dark transition-colors"
            >
              Book a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Offices */}
        <div className="border-t border-line mt-16 pt-8">
          <h4 className="text-[11px] font-bold tracking-[0.15em] uppercase text-navy/40 mb-4">Offices</h4>
          <div className="flex flex-wrap items-center gap-x-8 gap-y-2">
            {["New Delhi", "Mumbai", "Bangalore", "London", "Dubai"].map((city, i) => (
              <span key={city} className="flex items-center gap-3 text-slate-600 text-[13px]">
                {city}
                {i < 4 && <span className="hidden sm:inline text-slate-300">|</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-line mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-[12px]">
            &copy; {new Date().getFullYear()} CORPRESC LEGAL. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-slate-400 text-[12px] hover:text-navy transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-slate-400 text-[12px] hover:text-navy transition-colors">Cookie Policy</Link>
            <Link href="#" className="text-slate-400 text-[12px] hover:text-navy transition-colors">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
