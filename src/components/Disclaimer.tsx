"use client";

import { useState, useEffect } from "react";

export default function Disclaimer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("disclaimer_accepted");
    if (!dismissed) setShow(true);
  }, []);

  const accept = () => {
    sessionStorage.setItem("disclaimer_accepted", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div className="bg-white max-w-[640px] w-full max-h-[85vh] flex flex-col shadow-2xl">
        <div className="overflow-y-auto p-8 md:p-10 pb-4">
          <h2 className="font-heading text-2xl font-semibold text-navy mb-6">Disclaimer</h2>

          <div className="text-slate-600 text-[14px] leading-[1.75] space-y-4">
            <p>
              Under the rules of the Bar Council of India, law firms are prohibited from soliciting
              work or advertising in any form or manner. By accessing this website, you acknowledge
              that you are seeking information about Corpresc Legal voluntarily and that there has
              been no solicitation, advertisement, or inducement by the firm or its members.
            </p>
            <p>
              The content on this website is for general informational purposes only and does not
              constitute legal advice or create a lawyer-client relationship. Corpresc Legal is not
              liable for any reliance placed on the information provided herein. Users should seek
              independent legal advice before acting on any information available on this website.
            </p>
            <p>
              Any third-party links are provided for convenience only and do not imply endorsement.
              Please do not share confidential or sensitive information through this website. By
              proceeding, you confirm that you have read and understood this disclaimer.
            </p>
          </div>
        </div>

        <div className="shrink-0 px-8 md:px-10 pb-8 md:pb-10 pt-8 md:pt-10 border-t border-line">
          <button
            onClick={accept}
            className="btn-shine bg-navy text-white px-8 py-3 text-[15px] font-medium hover:bg-navy-dark transition-colors duration-300 w-full"
          >
            I Understand &amp; Accept
          </button>
        </div>
      </div>
    </div>
  );
}
