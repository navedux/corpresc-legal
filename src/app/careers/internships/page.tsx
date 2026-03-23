import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Internships | CORPRESC LEGAL",
  description: "Apply for internship programmes at CORPRESC LEGAL and gain hands-on experience in strategic legal advisory.",
};

const programmes = [
  {
    title: "Corporate & Governance Internship",
    duration: "3–6 Months",
    desc: "Work alongside our corporate advisory team on entity structuring, governance design, and board advisory matters for technology and growth-stage companies.",
  },
  {
    title: "Regulatory Research Internship",
    duration: "3–6 Months",
    desc: "Support regulatory analysis across jurisdictions, contribute to compliance framework research, and assist with jurisdiction mapping projects.",
  },
  {
    title: "Dispute Resolution Internship",
    duration: "3–6 Months",
    desc: "Assist with dispute strategy, arbitration preparation, and cross-border enforcement research under the guidance of experienced dispute counsel.",
  },
];

const benefits = [
  "Mentorship from experienced legal professionals",
  "Exposure to cross-border legal matters",
  "Structured learning and development framework",
  "Opportunity for full-time conversion",
  "Certificate of completion and recommendation",
];

export default function InternshipsPage() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto">
      {/* Hero */}
      <section className="px-6 lg:px-[8%] pt-16 pb-24 relative z-10">
        <div className="w-12 h-px bg-navy mb-8 animate-hero" />
        <p className="animate-hero text-[11px] font-semibold tracking-[0.2em] uppercase text-gold mb-4">
          <Link href="/careers" className="hover:text-navy transition-colors">Careers</Link> / Internships
        </p>
        <h1 className="font-heading text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] leading-[1.15] text-navy max-w-[800px] tracking-tight animate-hero-delay-1">
          <span className="italic font-normal">Internship</span> Programmes
        </h1>
        <p className="mt-12 lg:ml-[15%] text-[1.05rem] text-slate-600 max-w-[560px] leading-relaxed animate-hero-delay-2">
          Structured internships for aspiring legal professionals who want to learn strategic
          legal advisory from the ground up.
        </p>
      </section>

      {/* Programmes */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <div className="mb-16">
          <ScrollReveal direction="left">
            <div className="w-12 h-px bg-navy mb-8" />
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight">
              Available <span className="italic font-normal">Programmes</span>
            </h2>
          </ScrollReveal>
        </div>
        <div className="space-y-0">
          {programmes.map((prog, i) => (
            <ScrollReveal key={prog.title} delay={i * 80}>
              <div className="group py-10 border-t border-line last:border-b hover:bg-navy/[0.02] hover:px-4 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <h3 className="font-heading text-xl font-semibold text-navy group-hover:text-gold transition-colors duration-300">
                    {prog.title}
                  </h3>
                  <span className="text-[12px] text-slate-500 shrink-0">{prog.duration}</span>
                </div>
                <p className="text-slate-500 text-[15px] leading-relaxed max-w-[640px] mb-6">{prog.desc}</p>
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

      {/* What You Get */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <ScrollReveal className="lg:col-span-4" direction="left">
            <div className="w-12 h-px bg-navy mb-8" />
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight">
              What You&apos;ll <span className="italic font-normal">Gain</span>
            </h2>
          </ScrollReveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t-2 border-navy pt-8">
              <ul className="space-y-4">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-px h-4 bg-navy/30 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 text-[15px]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <ScrollReveal>
          <div className="max-w-[700px]">
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight mb-6">
              Ready to <span className="italic font-normal">Start</span>?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 max-w-[520px]">
              Submit your application with your CV, a cover letter, and your preferred programme.
              Applications are reviewed on a rolling basis.
            </p>
            <Link
              href="/contact"
              className="btn-shine group bg-navy text-white px-8 py-3 text-[15px] font-medium inline-flex items-center gap-2 hover:bg-navy-dark transition-colors duration-300"
            >
              Apply for an Internship
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
