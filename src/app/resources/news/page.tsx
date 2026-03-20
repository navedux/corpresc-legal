import Link from "next/link";
import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "News & Media | CORPRESC LEGAL",
  description: "Latest news, insights, and media coverage from CORPRESC LEGAL.",
};

const articles = [
  {
    date: "March 2026",
    category: "Firm News",
    title: "CORPRESC LEGAL Expands Operations to Dubai",
    excerpt: "The firm announces the opening of its Dubai advisory office, strengthening its cross-border capabilities across the Middle East and South Asia corridor.",
  },
  {
    date: "February 2026",
    category: "Insights",
    title: "Navigating Regulatory Complexity in AI — A Strategic Framework",
    excerpt: "An overview of our approach to helping AI companies navigate the evolving regulatory landscape across key jurisdictions.",
  },
  {
    date: "January 2026",
    category: "Firm News",
    title: "Launch of the Founder & Director Risk Workshop Programme",
    excerpt: "CORPRESC LEGAL introduces structured risk workshops designed for leadership teams of growth-stage companies.",
  },
  {
    date: "December 2025",
    category: "Media",
    title: "Why Modern Companies Need Integrated Legal Advisory",
    excerpt: "Our founding partner discusses the limitations of siloed legal services and the case for a unified advisory model.",
  },
  {
    date: "November 2025",
    category: "Insights",
    title: "Cross-Border Structuring for Technology Companies: Key Considerations",
    excerpt: "A practical guide to entity design, governance, and jurisdictional strategy for companies operating across borders.",
  },
  {
    date: "October 2025",
    category: "Firm News",
    title: "CORPRESC LEGAL Opens Bangalore Office",
    excerpt: "Expanding our presence in India's technology capital to better serve the growing startup and enterprise ecosystem.",
  },
];

export default function NewsPage() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto">
      {/* Hero */}
      <section className="px-6 lg:px-[8%] pt-16 pb-24 relative z-10">
        <div className="w-12 h-px bg-navy mb-8 animate-hero" />
        <h1 className="font-heading text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] leading-[1.15] text-navy max-w-[800px] tracking-tight animate-hero-delay-1">
          <span className="italic font-normal">News</span> & Media
        </h1>
        <p className="mt-12 lg:ml-[15%] text-[1.05rem] text-slate-600 max-w-[560px] leading-relaxed animate-hero-delay-2">
          Stay updated with the latest from CORPRESC LEGAL — firm announcements,
          thought leadership, and industry insights.
        </p>
      </section>

      {/* Articles */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <div className="space-y-0">
          {articles.map((article, i) => (
            <ScrollReveal key={article.title} delay={i * 60}>
              <article className="group py-10 border-t border-line first:border-t-0 hover:bg-navy/[0.02] hover:px-4 transition-all duration-300 cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
                  <div className="lg:col-span-3">
                    <div className="flex items-center gap-4 text-[12px] text-slate-500">
                      <span>{article.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="text-gold font-medium">{article.category}</span>
                    </div>
                  </div>
                  <div className="lg:col-span-9">
                    <h2 className="font-heading text-xl md:text-2xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors duration-300 leading-snug">
                      {article.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed max-w-[600px] mb-4">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-navy text-[13px] font-medium">
                      Read More
                      <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-[8%] py-24 border-t border-line relative z-10">
        <ScrollReveal>
          <div className="max-w-[700px]">
            <h2 className="font-heading text-3xl md:text-[2.5rem] leading-[1.2] text-navy tracking-tight mb-6">
              Stay <span className="italic font-normal">Informed</span>
            </h2>
            <p className="text-slate-600 leading-relaxed mb-10 max-w-[520px]">
              Have a media inquiry or want to stay updated? Get in touch with our team.
            </p>
            <Link
              href="/contact"
              className="btn-shine group bg-navy text-white px-8 py-3 text-[13px] font-medium inline-flex items-center gap-2 hover:bg-navy-dark transition-colors duration-300"
            >
              Contact Us
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
