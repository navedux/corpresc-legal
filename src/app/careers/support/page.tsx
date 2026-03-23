import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Support Services Careers | CORPRESC LEGAL",
  description: "Explore support services career opportunities at CORPRESC LEGAL.",
};

const openings = [
  {
    title: "Client Relations Manager",
    location: "New Delhi",
    type: "Full-Time",
    desc: "Manage client relationships, coordinate engagement logistics, and ensure seamless communication between clients and the advisory team.",
  },
  {
    title: "Legal Research Analyst",
    location: "Mumbai / Remote",
    type: "Full-Time",
    desc: "Conduct in-depth legal research across jurisdictions, prepare regulatory analysis reports, and support the advisory team with structured intelligence.",
  },
];

export default function SupportCareersPage() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto">
      {/* Hero */}
      <section className="px-6 lg:px-[8%] pt-16 pb-24 relative z-10">
        <div className="w-12 h-px bg-navy mb-8 animate-hero" />
        <p className="animate-hero text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-4">
          <Link href="/careers" className="hover:text-navy transition-colors">Careers</Link> / Support Services
        </p>
        <h1 className="font-heading text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] leading-[1.15] text-navy max-w-[800px] tracking-tight animate-hero-delay-1">
          <span className="italic font-normal">Support Services</span> Careers
        </h1>
        <p className="mt-12 lg:ml-[15%] text-[1.05rem] text-slate-600 max-w-[560px] leading-relaxed animate-hero-delay-2">
          Our support team is the backbone of every engagement. Join us in delivering
          operational excellence across every client interaction.
        </p>
      </section>

      {/* Openings */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <div className="mb-16">
          <ScrollReveal direction="left">
            <div className="w-12 h-px bg-navy mb-8" />
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight">
              Open <span className="italic font-normal">Positions</span>
            </h2>
          </ScrollReveal>
        </div>
        <div className="space-y-0">
          {openings.map((role, i) => (
            <ScrollReveal key={role.title} delay={i * 80}>
              <div className="group py-10 border-t border-line last:border-b hover:bg-navy/[0.02] hover:px-4 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <h3 className="font-heading text-xl font-semibold text-navy group-hover:text-gold transition-colors duration-300">
                    {role.title}
                  </h3>
                  <div className="flex items-center gap-4 text-[12px] text-slate-500 shrink-0">
                    <span>{role.location}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>{role.type}</span>
                  </div>
                </div>
                <p className="text-slate-500 text-[15px] leading-relaxed max-w-[640px] mb-6">{role.desc}</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-navy text-[15px] font-medium border-b border-navy pb-0.5 hover:opacity-70 transition-opacity"
                >
                  Apply Now
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <ScrollReveal>
          <div className="max-w-[700px]">
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight mb-6">
              Ready to <span className="italic font-normal">Make an Impact</span>?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 max-w-[520px]">
              We value operational excellence and attention to detail. Send us your CV today.
            </p>
            <Link
              href="/contact"
              className="btn-shine group bg-navy text-white px-8 py-3 text-[15px] font-medium inline-flex items-center gap-2 hover:bg-navy-dark transition-colors duration-300"
            >
              Submit Your Application
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
