import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Services | CORPRESC LEGAL",
  description:
    "Explore CORPRESC LEGAL's comprehensive legal advisory services across corporate structuring, regulatory strategy, dispute resolution, and more.",
};

const services = [
  {
    title: "Corporate Structuring & Governance",
    desc: "Company formation, structuring, governance, and entity management.",
    items: ["Entity formation and jurisdiction selection", "Shareholder and founder agreements", "Board governance and advisory structures", "Corporate reorganisation and restructuring", "Subsidiary and holding company design"],
  },
  {
    title: "Regulatory & Jurisdiction Advisory",
    desc: "Regulatory compliance, jurisdictional analysis, and legal support across operating markets.",
    items: ["Regulatory landscape analysis", "Licensing and permit strategy", "Jurisdiction selection and structuring", "Compliance framework design", "Regulatory change monitoring"],
  },
  {
    title: "Commercial & Strategic Legal Advisory",
    desc: "Commercial contracts, transaction support, and business-facing legal counsel.",
    items: ["Market entry and expansion strategy", "Partnership and joint venture structuring", "Investment and fundraising advisory", "Strategic negotiation support", "Commercial risk assessment"],
  },
  {
    title: "Contracts & Documentation",
    desc: "Drafting, review, negotiation, and management of legal and commercial documentation.",
    items: ["Commercial contract drafting and review", "Terms of service and privacy policies", "SaaS and platform agreements", "Employment and contractor agreements", "NDA and confidentiality frameworks"],
  },
  {
    title: "Intellectual Property & Brand Protection",
    desc: "IP protection, registrations, brand-related legal support, and rights management.",
    items: ["Trademark registration and portfolio management", "IP strategy and audit", "Brand protection and enforcement", "Licensing and technology transfer", "Trade secret and confidentiality frameworks"],
  },
  {
    title: "Internal Policies & Operational Controls",
    desc: "Internal policies, legal processes, and operational compliance controls.",
    items: ["Product compliance review", "Platform terms and governance", "Data protection and privacy strategy", "Content moderation frameworks", "API and integration legal review"],
  },
  {
    title: "Disputes, Arbitration & Litigation",
    desc: "Dispute resolution, arbitration support, litigation strategy, and matter management.",
    items: ["Pre-dispute strategy and negotiation", "Commercial litigation", "International arbitration", "Regulatory enforcement defence", "Dispute readiness frameworks"],
  },
  {
    title: "Government & Institutional Advisory",
    desc: "Advisory support for engagements with government bodies, public institutions, and regulatory authorities.",
    items: ["Government contract advisory", "Public sector compliance", "Institutional engagement strategy", "Regulatory submissions and advocacy", "Policy analysis and advisory"],
  },
  {
    title: "Cross-Border Advisory",
    desc: "Multi-jurisdictional legal strategy, cross-border transaction support, and global compliance coordination.",
    items: ["Multi-jurisdiction structuring", "Cross-border transaction support", "International regulatory coordination", "Foreign investment advisory", "Global compliance harmonisation"],
  },
];

export default function ServicesPage() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto">
      {/* Hero */}
      <section className="px-6 lg:px-[8%] pt-16 pb-24 relative z-10">
        <div className="w-12 h-px bg-navy mb-8 animate-hero" />
        <h1 className="font-heading text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] leading-[1.15] text-navy max-w-[850px] tracking-tight animate-hero-delay-1">
          <span className="italic font-normal">Comprehensive</span> Legal Services for Modern Businesses
        </h1>
        <p className="mt-12 lg:ml-[15%] text-[1.05rem] text-slate-600 max-w-[560px] leading-relaxed animate-hero-delay-2">
          Nine service areas covering the core legal needs of a business — from formation and
          contracts to compliance, disputes, and cross-border matters.
        </p>
      </section>

      {/* Services List */}
      <section className="px-6 lg:px-[8%] pb-24 relative z-10">
        {services.map((service, index) => (
          <ScrollReveal key={service.title} delay={index * 60}>
            <div
              id={service.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-t border-line hover:bg-navy/[0.02] hover:px-4 transition-all duration-300 scroll-mt-24"
            >
              <div className="lg:col-span-5">
                <span className="number-accent font-heading text-sm text-navy/25 font-bold">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="font-heading text-2xl md:text-[1.75rem] font-semibold text-navy mt-3 mb-4 leading-snug">
                  {service.title}
                </h2>
                <p className="text-slate-600 text-[15px] leading-relaxed">{service.desc}</p>
              </div>
              <div className="lg:col-span-5 lg:col-start-7">
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="w-px h-4 bg-navy/30 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-700 text-[13px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <ScrollReveal>
          <div className="max-w-[700px]">
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight mb-6">
              Need <span className="italic font-normal">Legal Support</span> for Your Business?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 max-w-[520px]">
              Discuss your legal requirements with CORPRESC LEGAL — from company setup and contracts
              to compliance, disputes, and ongoing legal support.
            </p>
            <Link
              href="/contact"
              className="btn-shine group bg-navy text-white px-8 py-3 text-[13px] font-medium inline-flex items-center gap-2 hover:bg-navy-dark transition-colors duration-300"
            >
              Book a Consultation
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
