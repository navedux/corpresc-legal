import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[8%] py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-heading text-xl font-bold text-navy tracking-wide flex items-center gap-1.5">
              CORPRESC <span className="font-light">LEGAL</span>
            </Link>
            <p className="text-slate-500 text-[13px] leading-relaxed mt-4 max-w-[240px]">
              Legal infrastructure for companies building the future.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-5">
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
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {[
                "Corporate Structuring",
                "Regulatory Strategy",
                "Commercial Advisory",
                "Dispute & Litigation",
                "Cross-Border Advisory",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-slate-600 text-[13px] hover:text-navy transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-semibold tracking-[0.15em] uppercase text-slate-400 mb-5">
              Get in Touch
            </h4>
            <p className="text-slate-500 text-[13px] leading-relaxed mb-6">
              Ready to build the right legal architecture for your business?
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

        <div className="border-t border-line mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-[12px]">
            &copy; {new Date().getFullYear()} CORPRESC LEGAL. All rights reserved.
          </p>
          <p className="text-slate-400 text-[12px] italic font-heading">
            Law, Strategy and Risk Intelligence
          </p>
        </div>
      </div>
    </footer>
  );
}
