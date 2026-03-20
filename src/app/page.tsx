import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  { title: "Entity Formation & Corporate Structuring", desc: "Designing corporate architecture for scalability, governance, and jurisdictional efficiency." },
  { title: "Regulatory & Jurisdiction Strategy", desc: "Navigating complex regulatory landscapes across multiple jurisdictions with precision." },
  { title: "Commercial & Strategic Legal Advisory", desc: "Strategic counsel for partnerships, market entry, and commercial growth decisions." },
  { title: "Contracts & Documentation", desc: "Robust legal documentation frameworks built for modern business operations." },
  { title: "Intellectual Property & Brand Protection", desc: "Comprehensive IP strategy from registration to enforcement across borders." },
  { title: "Product & Platform Legal Review", desc: "Legal review of product architecture, terms, compliance, and platform governance." },
  { title: "Disputes, Arbitration & Litigation", desc: "Strategic dispute resolution from negotiation through arbitration and litigation." },
  { title: "Cross-Border Advisory", desc: "Multi-jurisdictional legal strategy for companies operating across borders." },
];

const infrastructureLayers = [
  { label: "Corporate Architecture", desc: "Entity design, governance frameworks, and structural compliance" },
  { label: "Regulatory Positioning", desc: "Jurisdiction mapping, licensing, and regulatory alignment" },
  { label: "Commercial Structuring", desc: "Contracts, partnerships, and commercial governance" },
  { label: "Operational Governance", desc: "Internal policies, compliance systems, and operational controls" },
  { label: "Risk & Dispute Management", desc: "Proactive dispute readiness and risk mitigation frameworks" },
];

const industries = [
  "AI & Emerging Technology",
  "Technology Startups",
  "Global Businesses",
  "Digital Platforms",
  "Web3 Companies",
  "Growth-Stage Enterprises",
];

export default function Home() {
  return (
    <div className="relative w-full">
      {/* Hero Dark Banner */}
      <section className="relative w-full h-[55vh] min-h-[420px] md:min-h-[480px] overflow-hidden flex-shrink-0">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?q=80&w=2070&auto=format&fit=crop"
          alt="Legal library"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
        {/* Decorative SVG Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.25]" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <g stroke="#8B7355" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 20% -10% v 40% a 100 100 0 0 0 100 100 h 20% a 100 100 0 0 1 100 100 v 40%" />
            <path d="M 50% -10% v 60% a 50 50 0 0 0 50 50 h 40%" />
            <path d="M 80% 100% v -30% a 60 60 0 0 1 60 -60 h 20%" />
            <path d="M 100% 20% h -15% a 80 80 0 0 0 -80 80 v 10%" />
            <path d="M 70% 50% c -20% -10%, -10% 20%, -30% 10%" />
            <circle cx="35%" cy="65%" r="4" fill="#8B7355" />
            <circle cx="85%" cy="30%" r="3" fill="#8B7355" />
          </g>
        </svg>

        {/* Badge at bottom */}
        <div
          className="absolute bottom-0 left-0 h-[52px] bg-white z-20 flex items-center pl-6 lg:pl-12 pr-16 animate-hero"
          style={{ clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 100%, 0 100%)" }}
        >
          <div className="flex items-center gap-3 text-gold text-[12px] font-medium tracking-[0.12em] uppercase">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="9" />
            </svg>
            <span>Law, Strategy and Risk Intelligence</span>
          </div>
        </div>
      </section>

      {/* Hero Content — Two Column */}
      <section className="w-full bg-white">
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row">
          {/* Left — Heading */}
          <div className="lg:w-[60%] px-6 lg:pl-[8%] lg:pr-20 pt-16 md:pt-24 pb-12 lg:pb-24">
            <h1 className="animate-hero-delay-1 font-heading text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.5rem] leading-[0.95] text-navy tracking-[-0.02em]">
              <span className="italic font-normal">Trusted Legal</span>{" "}
              Advisory for Companies Building the Future.
            </h1>
          </div>
          {/* Right — Description + CTA */}
          <div className="lg:w-[40%] lg:border-l lg:border-line px-6 lg:pl-16 lg:pr-[8%] pt-8 lg:pt-24 pb-16 lg:pb-24 flex flex-col justify-center">
            <p className="animate-hero-delay-2 text-[1.05rem] text-slate-600 leading-[1.65] mb-10 max-w-[420px] font-medium">
              CORPRESC LEGAL provides <span className="font-semibold text-slate-700">Strategic Legal Counsel</span> to modern businesses across corporate structuring, regulatory strategy, commercial advisory, dispute management, and cross-border operations.
            </p>
            <div className="animate-hero-delay-3 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="btn-shine bg-navy text-white px-8 py-3 text-[13px] font-medium flex items-center gap-2 hover:bg-navy-dark transition-colors duration-300 w-fit"
              >
                Book a Legal Strategy Session
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="btn-shine-outline border border-slate-300 text-slate-700 px-8 py-3 text-[13px] font-medium hover:border-navy hover:text-navy transition-colors duration-300 w-fit"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Infrastructure Model */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <ScrollReveal className="lg:col-span-5" direction="left">
            <div className="w-12 h-px bg-navy mb-8" />
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight mb-6">
              The <span className="italic font-normal">Legal Infrastructure</span> Model
            </h2>
            <p className="text-slate-600 leading-relaxed mb-8">
              We help businesses design long-term legal architecture rather than reacting to
              issues. Our layered advisory model builds resilient legal foundations that scale with
              your business.
            </p>
            <Link
              href="/how-we-work"
              className="group inline-flex items-center gap-2 text-navy text-[13px] font-medium border-b border-navy pb-0.5 hover:opacity-70 transition-opacity"
            >
              Learn How We Work
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
          <div className="lg:col-span-6 lg:col-start-7 space-y-0">
            {infrastructureLayers.map((layer, i) => (
              <ScrollReveal key={layer.label} delay={i * 80}>
                <div className="group flex items-start gap-6 py-6 border-t border-line last:border-b hover:bg-navy/[0.02] hover:px-4 transition-all duration-300 cursor-default">
                  <span className="font-heading text-2xl text-navy/20 font-bold leading-none mt-0.5 number-accent transition-colors duration-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-navy">{layer.label}</h3>
                    <p className="text-slate-500 text-sm mt-1">{layer.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <ScrollReveal>
          <div className="mb-16">
            <div className="w-12 h-px bg-navy mb-8" />
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight max-w-[600px]">
              <span className="italic font-normal">Comprehensive</span> Legal Advisory
            </h2>
            <p className="text-slate-600 text-[1.05rem] mt-6 max-w-[580px]">
              Eight integrated service pillars designed to support every stage of your business lifecycle.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-0">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 60}>
              <Link
                href="/services"
                className="group block py-8 border-t border-line hover:border-navy/40 transition-colors duration-300"
              >
                <span className="font-heading text-sm text-navy/25 font-bold number-accent transition-colors duration-300">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-[1.05rem] font-semibold text-navy mt-3 mb-2 group-hover:text-gold transition-colors duration-300 leading-snug">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">{service.desc}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <ScrollReveal className="lg:col-span-4" direction="left">
            <div className="w-12 h-px bg-navy mb-8" />
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight">
              Built for <span className="italic font-normal">Forward-Thinking</span> Companies
            </h2>
          </ScrollReveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-0">
              {industries.map((name, i) => (
                <ScrollReveal key={name} delay={i * 80}>
                  <div className="py-6 border-t border-line hover:border-navy/40 transition-colors duration-300">
                    <p className="text-navy text-sm font-medium">{name}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <ScrollReveal>
          <div className="max-w-[700px]">
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight mb-6">
              Build the <span className="italic font-normal">Right Legal Framework</span> for Your Business from Day 0
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 max-w-[520px]">
              Schedule a strategy session with CORPRESC LEGAL to discuss your company&apos;s legal
              advisory needs.
            </p>
            <Link
              href="/contact"
              className="btn-shine group bg-navy text-white px-8 py-3 text-[13px] font-medium inline-flex items-center gap-2 hover:bg-navy-dark transition-colors duration-300"
            >
              Book a Legal Strategy Session
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
