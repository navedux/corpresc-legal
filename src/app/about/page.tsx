import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "About | CORPRESC LEGAL",
  description:
    "Learn about CORPRESC LEGAL's integrated advisory model, vision, and strategic legal architecture framework.",
};

export default function AboutPage() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto">
      {/* Hero */}
      <section className="px-6 lg:px-[8%] pt-16 pb-24 relative z-10">
        <div className="w-12 h-px bg-navy mb-8 animate-hero" />
        <h1 className="font-heading text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] leading-[1.15] text-navy max-w-[800px] tracking-tight animate-hero-delay-1">
          Redefining <span className="italic font-normal">legal advisory</span> through strategic thinking
        </h1>
        <p className="mt-12 lg:ml-[15%] text-[1.05rem] text-slate-600 max-w-[560px] leading-relaxed animate-hero-delay-2">
          CORPRESC LEGAL operates at the intersection of law, strategy, and global business —
          delivering integrated legal counsel that builds lasting infrastructure for
          forward-thinking companies.
        </p>
      </section>

      {/* Firm Overview */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line hover:border-navy/40 transition-colors duration-300 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <ScrollReveal direction="left">
              <div className="w-12 h-px bg-navy mb-8" />
              <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight">
                An <span className="italic font-normal">integrated</span> advisory practice
              </h2>
            </ScrollReveal>
          </div>
          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-slate-600 leading-relaxed">
            <ScrollReveal delay={0}>
              <p>
                CORPRESC LEGAL is a strategic legal advisory practice that integrates corporate
                structuring, regulatory strategy, commercial advisory, and dispute management into
                a unified service model.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <p>
                Unlike traditional law firms that operate in siloed practice areas, we deliver
                holistic legal counsel — ensuring that every dimension of your company&apos;s legal
                landscape is addressed through a single strategic lens.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p>
                Our clients are companies building the future — technology startups, AI companies,
                digital platforms, and growth-stage enterprises navigating complex regulatory
                environments and global markets.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line hover:border-navy/40 transition-colors duration-300 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <ScrollReveal delay={0}>
            <div className="border-t-2 border-navy pt-8 hover-lift">
              <h3 className="font-heading text-2xl font-semibold text-navy mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To redefine legal advisory by embedding strategic thinking at every level of
                counsel — transforming legal services from reactive problem-solving into proactive
                business architecture.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <div className="border-t-2 border-gold pt-8 hover-lift">
              <h3 className="font-heading text-2xl font-semibold text-navy mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To provide structured legal counsel that supports global scalability, operational
                resilience, and strategic growth — empowering companies to build with confidence
                across borders and industries.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Strategic Legal Architecture */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line hover:border-navy/40 transition-colors duration-300 relative z-10">
        <div className="mb-16">
          <ScrollReveal direction="left">
            <div className="w-12 h-px bg-navy mb-8" />
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight max-w-[600px]">
              <span className="italic font-normal">Strategic</span> legal architecture
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-slate-600 text-[1.05rem] mt-6 max-w-[580px] leading-relaxed">
              Our advisory framework is built on five integrated layers — each designed to reinforce
              the others, creating a comprehensive legal infrastructure that grows with your business.
            </p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          {[
            { num: "01", title: "Foundation", desc: "Corporate entity design and governance structure" },
            { num: "02", title: "Compliance", desc: "Regulatory mapping and jurisdictional positioning" },
            { num: "03", title: "Commercial", desc: "Contract frameworks and commercial governance" },
            { num: "04", title: "Operations", desc: "Internal policies and operational controls" },
            { num: "05", title: "Protection", desc: "Risk mitigation and dispute readiness" },
          ].map((layer, i) => (
            <ScrollReveal key={layer.num} delay={i * 80}>
              <div className="py-8 md:px-6 first:md:pl-0 last:md:pr-0 border-t border-line md:border-t-0 md:border-l md:first:border-l-0">
                <span className="font-heading text-2xl text-navy/20 font-bold">{layer.num}</span>
                <h3 className="font-heading text-lg font-semibold text-navy mt-3 mb-2">{layer.title}</h3>
                <p className="text-slate-500 text-[13px] leading-relaxed">{layer.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line hover:border-navy/40 transition-colors duration-300 relative z-10">
        <div className="max-w-[700px]">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight mb-6">
              Ready to build your <span className="italic font-normal">legal infrastructure</span>?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-slate-600 leading-relaxed mb-10 max-w-[520px]">
              Speak with our team about how CORPRESC LEGAL can support your company&apos;s growth.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <Link
              href="/contact"
              className="group bg-navy text-white px-8 py-3 text-[13px] font-medium inline-flex items-center gap-2 hover:bg-navy-dark hover:scale-[1.02] transition-all duration-300"
            >
              Book a Legal Strategy Session
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
