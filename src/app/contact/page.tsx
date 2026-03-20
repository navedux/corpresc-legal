"use client";

import { useState, type FormEvent } from "react";

const stageOptions = [
  "Pre-Seed / Idea Stage",
  "Seed / Early Stage",
  "Series A / Growth Stage",
  "Established / Scaling",
  "Enterprise / Global",
];

const serviceOptions = [
  "Corporate Structuring & Governance",
  "Regulatory & Jurisdiction Advisory",
  "Commercial & Strategic Legal Advisory",
  "Contracts & Documentation",
  "Intellectual Property & Brand Protection",
  "Product & Platform Legal Review",
  "Disputes, Arbitration & Litigation",
  "Government & Institutional Advisory",
  "Cross-Border Advisory",
  "General Inquiry",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="relative w-full max-w-[1440px] mx-auto">
      {/* Hero */}
      <section className="px-6 lg:px-[8%] pt-16 pb-24 relative z-10 text-center">
        <div className="w-12 h-px bg-navy mb-8 mx-auto animate-hero" />
        <h1 className="font-heading text-[2rem] sm:text-[2.75rem] md:text-[3.5rem] lg:text-[4.25rem] leading-[1.15] text-navy max-w-[800px] tracking-tight mx-auto animate-hero-delay-1">
          Book a <span className="italic font-normal">Legal Strategy</span> Session
        </h1>
        <p className="mt-12 text-[1.05rem] text-slate-600 max-w-[560px] leading-relaxed mx-auto animate-hero-delay-2">
          Tell us about your business and legal needs. Our team will review your inquiry and
          schedule a strategy session to discuss how<br className="hidden sm:block" /> CORPRESC LEGAL can support you.
        </p>
      </section>

      {/* Form */}
      <section className="px-6 lg:px-[8%] pb-32 relative z-10">
        <div className="max-w-[720px] mx-auto">
          {submitted ? (
            <div className="py-20 border-t border-line text-center animate-hero">
              <div className="w-12 h-px bg-navy mb-8 mx-auto" />
              <h2 className="font-heading text-3xl text-navy mb-4">Thank you</h2>
              <p className="text-slate-600 leading-relaxed max-w-[480px] mx-auto">
                Your inquiry has been received. Our team will be in touch within one business day to
                schedule your strategy session.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border-t border-line pt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="name" className="block text-[13px] font-medium text-slate-800 mb-2">
                    Name <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-0 py-3 border-0 border-b border-line text-slate-800 text-sm bg-transparent focus:outline-none focus:border-navy transition-colors placeholder:text-slate-400"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-[13px] font-medium text-slate-800 mb-2">
                    Company <span className="text-gold">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    className="w-full px-0 py-3 border-0 border-b border-line text-slate-800 text-sm bg-transparent focus:outline-none focus:border-navy transition-colors placeholder:text-slate-400"
                    placeholder="Company name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[13px] font-medium text-slate-800 mb-2">
                    Email <span className="text-gold">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-0 py-3 border-0 border-b border-line text-slate-800 text-sm bg-transparent focus:outline-none focus:border-navy transition-colors placeholder:text-slate-400"
                    placeholder="you@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="jurisdiction" className="block text-[13px] font-medium text-slate-800 mb-2">
                    Jurisdiction
                  </label>
                  <input
                    type="text"
                    id="jurisdiction"
                    name="jurisdiction"
                    className="w-full px-0 py-3 border-0 border-b border-line text-slate-800 text-sm bg-transparent focus:outline-none focus:border-navy transition-colors placeholder:text-slate-400"
                    placeholder="e.g. United Kingdom, India, UAE"
                  />
                </div>

                <div>
                  <label htmlFor="stage" className="block text-[13px] font-medium text-slate-800 mb-2">
                    Stage of Company
                  </label>
                  <select
                    id="stage"
                    name="stage"
                    className="w-full px-0 py-3 border-0 border-b border-line text-slate-800 text-sm bg-transparent focus:outline-none focus:border-navy transition-colors"
                  >
                    <option value="">Select stage</option>
                    {stageOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="service" className="block text-[13px] font-medium text-slate-800 mb-2">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-0 py-3 border-0 border-b border-line text-slate-800 text-sm bg-transparent focus:outline-none focus:border-navy transition-colors"
                  >
                    <option value="">Select service</option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="mt-8">
                <label htmlFor="message" className="block text-[13px] font-medium text-slate-800 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-0 py-3 border-0 border-b border-line text-slate-800 text-sm bg-transparent focus:outline-none focus:border-navy transition-colors resize-none placeholder:text-slate-400"
                  placeholder="Tell us about your business and how we can help..."
                />
              </div>

              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                <button
                  type="submit"
                  className="bg-navy text-white px-8 py-3 text-[13px] font-medium inline-flex items-center gap-2 hover:bg-navy-dark hover:scale-[1.02] transition-all duration-300"
                >
                  Submit Inquiry
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <p className="text-slate-400 text-[12px] max-w-[340px] leading-relaxed">
                  By submitting this form you agree to be contacted by CORPRESC LEGAL regarding your
                  inquiry. Your information will be handled confidentially.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
