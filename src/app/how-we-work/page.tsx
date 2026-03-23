import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "How We Work | CORPRESC LEGAL",
  description:
    "Understand CORPRESC LEGAL's advisory model, dedicated associate approach, and four-step engagement framework.",
};

const steps = [
  {
    num: "01",
    title: "Understand",
    subtitle: "Company Structure & Objectives",
    desc: "We begin every engagement by deeply understanding your business — its structure, industry, growth trajectory, and strategic objectives. This diagnostic phase ensures our legal strategy is built on a clear picture of where your company stands and where it's heading.",
  },
  {
    num: "02",
    title: "Map",
    subtitle: "Regulatory & Jurisdiction Exposure",
    desc: "We map your regulatory landscape across every relevant jurisdiction — identifying licensing requirements, compliance obligations, and potential exposure points. This analysis forms the foundation of a jurisdiction-aware legal strategy.",
  },
  {
    num: "03",
    title: "Build",
    subtitle: "Legal Architecture & Governance Systems",
    desc: "We design and implement the legal architecture your business needs — from corporate structure and governance frameworks to contracts, compliance systems, and IP protection. Every element is built to support long-term scalability.",
  },
  {
    num: "04",
    title: "Support",
    subtitle: "Long-Term Growth & Risk Management",
    desc: "We remain engaged as your business evolves — providing ongoing advisory support, monitoring regulatory changes, and proactively managing risk to ensure your legal infrastructure stays aligned with your growth.",
  },
];

export default function HowWeWorkPage() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto">
      {/* Hero */}
      <section className="px-6 lg:px-[8%] pt-16 pb-24 relative z-10">
        <div className="w-12 h-px bg-navy mb-8 animate-hero" />
        <h1 className="font-heading text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] leading-[1.15] text-navy max-w-[850px] tracking-tight animate-hero-delay-1">
          A <span className="italic font-normal">Structured Approach</span> to Strategic Legal Advisory
        </h1>
        <p className="mt-12 lg:ml-[15%] text-[1.05rem] text-slate-600 max-w-[560px] leading-relaxed animate-hero-delay-2">
          Our engagement model is designed for clarity, continuity, and strategic depth — ensuring
          every client receives consistent, high-quality legal counsel.
        </p>
      </section>

      {/* Integrated Approach */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <ScrollReveal className="lg:col-span-4" direction="left">
            <div className="w-12 h-px bg-navy mb-8" />
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight">
              An <span className="italic font-normal">Integrated</span> Approach<br />
              to Legal Strategy
            </h2>
          </ScrollReveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <ScrollReveal>
              <p className="text-slate-600 text-[1.05rem] leading-relaxed mb-12">
                CORPRESC LEGAL integrates corporate, regulatory, commercial, and dispute advisory into
                a unified legal strategy — giving modern businesses a single strategic legal partner
                across every dimension of legal risk and opportunity.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {[
                { title: "Corporate Structuring", desc: "Entity design, governance, and structural strategy for growth." },
                { title: "Regulatory Strategy", desc: "Jurisdiction analysis, licensing, and regulatory positioning." },
                { title: "Commercial Advisory", desc: "Strategic counsel for deals, partnerships, and market entry." },
                { title: "Dispute & Litigation", desc: "Proactive dispute management and resolution strategy." },
              ].map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 100}>
                  <div className="border-t border-line pt-6 hover:border-navy/40 transition-colors duration-300">
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-[15px] leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Associate Model */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <ScrollReveal direction="left" className="lg:col-span-5">
            <div className="w-12 h-px bg-navy mb-8" />
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight mb-6">
              The <span className="italic font-normal">Dedicated Associate</span> Model
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Every client is assigned a dedicated legal associate who serves as your primary point
              of contact throughout the engagement. Your associate is responsible for coordination,
              execution, and ensuring continuity across all workstreams.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This model eliminates the fragmentation common in traditional legal services —
              ensuring that someone who deeply understands your business is always managing your
              legal matters.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" className="lg:col-span-5 lg:col-start-7">
            <div className="border-t-2 border-navy pt-8">
              <h3 className="font-heading text-xl font-semibold text-navy mb-6">
                Your Dedicated Associate Provides
              </h3>
              <ul className="space-y-4">
                {[
                  "Single point of contact for all legal matters",
                  "Deep understanding of your business context",
                  "Coordination across advisory workstreams",
                  "Proactive risk identification and escalation",
                  "Regular strategic review sessions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-px h-4 bg-navy/30 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Advisory Framework */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <div className="mb-16">
          <div className="w-12 h-px bg-navy mb-8" />
          <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight max-w-[600px]">
            Four Steps to <span className="italic font-normal">Strategic Legal</span> Advisory
          </h2>
          <p className="text-slate-600 text-[1.05rem] mt-6 max-w-[580px]">
            Our structured advisory framework ensures comprehensive coverage from initial
            assessment through long-term support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
          {steps.map((step, index) => (
            <ScrollReveal key={step.num} delay={index * 100}>
              <div className="group py-10 border-t border-line hover:bg-navy/[0.02] hover:px-4 transition-all duration-300">
                <span className="font-heading text-3xl text-navy/40 font-bold number-accent">{step.num}</span>
                <h3 className="font-heading text-2xl font-semibold text-navy mt-4 mb-1">{step.title}</h3>
                <p className="text-gold text-[15px] font-medium mb-4 tracking-wide">{step.subtitle}</p>
                <p className="text-slate-500 text-[15px] leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Leadership Workshops */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <ScrollReveal direction="left" className="lg:col-span-5">
            <div className="w-12 h-px bg-navy mb-8" />
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight mb-6">
              Founder & Director <span className="italic font-normal">Risk Workshops</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We conduct structured workshops for founders and leadership teams designed to
              anticipate governance, regulatory, and dispute risks before they arise.
            </p>
            <p className="text-slate-600 leading-relaxed">
              These sessions are tailored to your company&apos;s stage, industry, and jurisdictional
              footprint — ensuring leadership teams are equipped to make informed decisions about
              legal risk.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right" className="lg:col-span-5 lg:col-start-7">
            <div className="border-t-2 border-navy pt-8">
              <h3 className="font-heading text-xl font-semibold text-navy mb-6">
                Workshop Topics Include
              </h3>
              <ul className="space-y-4">
                {[
                  "Governance risk for founders and directors",
                  "Regulatory exposure and compliance readiness",
                  "Dispute readiness and litigation preparedness",
                  "IP protection and enforcement strategy",
                  "Cross-border legal risk management",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-px h-4 bg-navy/30 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <ScrollReveal>
          <div className="max-w-[700px]">
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight mb-6">
              Ready to <span className="italic font-normal">Get Started</span>?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 max-w-[520px]">
              Schedule a strategy session to understand how CORPRESC LEGAL&apos;s advisory model can
              support your business.
            </p>
            <Link
              href="/contact"
              className="btn-shine group bg-navy text-white px-8 py-3 text-[15px] font-medium inline-flex items-center gap-2 hover:bg-navy-dark transition-colors duration-300"
            >
              Book a Legal Strategy Session
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
