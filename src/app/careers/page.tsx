import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Careers | CORPRESC LEGAL",
  description:
    "Join CORPRESC LEGAL — explore opportunities in legal advisory, support services, and internship programmes.",
};

const departments = [
  {
    title: "Legal",
    desc: "Join our legal advisory team and work on complex corporate structuring, regulatory strategy, and cross-border matters for forward-thinking companies.",
    href: "/careers/legal",
    roles: "3 Open Positions",
  },
  {
    title: "Support Services",
    desc: "Power our operations with expertise in client management, research, compliance support, and business development.",
    href: "/careers/support",
    roles: "2 Open Positions",
  },
  {
    title: "Internships",
    desc: "Gain hands-on experience in strategic legal advisory through structured internship programmes designed for aspiring legal professionals.",
    href: "/careers/internships",
    roles: "Applications Open",
  },
];

const values = [
  { title: "Strategic Thinking", desc: "We approach every challenge with a long-term, structured perspective." },
  { title: "Client-First Mindset", desc: "Our clients' success is the measure of our own." },
  { title: "Continuous Growth", desc: "We invest in the professional development of every team member." },
  { title: "Global Perspective", desc: "We operate across borders and encourage international thinking." },
];

export default function CareersPage() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto">
      {/* Hero */}
      <section className="px-6 lg:px-[8%] pt-16 pb-24 relative z-10">
        <div className="w-12 h-px bg-navy mb-8 animate-hero" />
        <h1 className="font-heading text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] leading-[1.15] text-navy max-w-[800px] tracking-tight animate-hero-delay-1">
          Build Your <span className="italic font-normal">Career</span> with CORPRESC LEGAL
        </h1>
        <p className="mt-12 lg:ml-[15%] text-[1.05rem] text-slate-600 max-w-[560px] leading-relaxed animate-hero-delay-2">
          We&apos;re looking for exceptional people who want to redefine legal advisory.
          Join a team where strategic thinking meets real-world impact.
        </p>
      </section>

      {/* Departments */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <div className="mb-16">
          <ScrollReveal direction="left">
            <div className="w-12 h-px bg-navy mb-8" />
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight max-w-[600px]">
              Explore <span className="italic font-normal">Opportunities</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="text-slate-600 text-[1.05rem] mt-6 max-w-[580px] leading-relaxed">
              Whether you&apos;re an experienced legal professional or just starting your career,
              we have opportunities across multiple disciplines.
            </p>
          </ScrollReveal>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {departments.map((dept, i) => (
            <ScrollReveal key={dept.title} delay={i * 100}>
              <Link href={dept.href} className="group block py-10 md:px-8 first:md:pl-0 last:md:pr-0 border-t border-line md:border-t-0 md:border-l md:first:border-l-0 hover:bg-navy/[0.02] transition-all duration-300">
                <span className="text-gold text-[12px] font-medium tracking-wide">{dept.roles}</span>
                <h3 className="font-heading text-2xl font-semibold text-navy mt-3 mb-4 group-hover:text-gold transition-colors duration-300">
                  {dept.title}
                </h3>
                <p className="text-slate-500 text-[15px] leading-relaxed mb-6">{dept.desc}</p>
                <span className="inline-flex items-center gap-2 text-navy text-[15px] font-medium">
                  View Openings
                  <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <ScrollReveal className="lg:col-span-4" direction="left">
            <div className="w-12 h-px bg-navy mb-8" />
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight">
              Why <span className="italic font-normal">Join Us</span>
            </h2>
          </ScrollReveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
              {values.map((value, i) => (
                <ScrollReveal key={value.title} delay={i * 100}>
                  <div className="border-t border-line pt-6 hover:border-navy/40 transition-colors duration-300">
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">{value.title}</h3>
                    <p className="text-slate-500 text-[15px] leading-relaxed">{value.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <ScrollReveal>
          <div className="max-w-[700px]">
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight mb-6">
              Don&apos;t See the <span className="italic font-normal">Right Role</span>?
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 max-w-[520px]">
              We&apos;re always interested in hearing from talented individuals. Send us your CV
              and we&apos;ll reach out when a suitable opportunity arises.
            </p>
            <Link
              href="/contact"
              className="btn-shine group bg-navy text-white px-8 py-3 text-[15px] font-medium inline-flex items-center gap-2 hover:bg-navy-dark transition-colors duration-300"
            >
              Get in Touch
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
