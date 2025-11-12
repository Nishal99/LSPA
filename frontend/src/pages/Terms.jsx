import { useRef, useState } from 'react';

const Terms = () => {
  // Create refs for each section
  const introductionRef = useRef(null);
  const purposeRef = useRef(null);
  const membershipRef = useRef(null);
  const complianceRef = useRef(null);
  const useWebsiteRef = useRef(null);
  const intellectualPropertyRef = useRef(null);
  const accuracyRef = useRef(null);
  const liabilityRef = useRef(null);
  const externalLinksRef = useRef(null);
  const amendmentsRef = useRef(null);
  const governingLawRef = useRef(null);
  const contactRef = useRef(null);

  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close mobile menu after scroll
    setIsMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-white">
      {/* Mobile Top Bar with Hamburger */}
      <div className="lg:hidden bg-gray-800 text-white p-4 flex items-center justify-between shadow-md z-50">
        <h2 className="text-lg font-bold text-yellow-400">Terms Navigation</h2>
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Fixed Left Panel - Hidden on mobile, full-width overlay when open */}
      <div
        className={`${
          isMenuOpen ? 'fixed inset-0 z-40 lg:static lg:translate-x-0' : 'hidden lg:block'
        } w-full lg:w-80 bg-gray-800 text-white overflow-y-auto flex-shrink-0 lg:flex lg:flex-col transition-transform duration-300 ease-in-out transform lg:translate-x-0 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 lg:p-6 sticky top-0 bg-gray-800 border-b border-gray-700 z-10">
          <h2 className="text-lg lg:text-xl font-bold text-yellow-400 mb-2">Terms Navigation</h2>
          <p className="text-gray-300 text-xs lg:text-sm">Quick access to sections</p>
        </div>
        
        <nav className="p-2 lg:p-4 space-y-1 lg:space-y-2 flex-1">
          <button 
            onClick={() => scrollToSection(introductionRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            1. Introduction
          </button>
          <button 
            onClick={() => scrollToSection(purposeRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            2. Purpose of the Website
          </button>
          <button 
            onClick={() => scrollToSection(membershipRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            3. Membership and Registration
          </button>
          <button 
            onClick={() => scrollToSection(complianceRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            4. Compliance with Standards
          </button>
          <button 
            onClick={() => scrollToSection(useWebsiteRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            5. Use of Website
          </button>
          <button 
            onClick={() => scrollToSection(intellectualPropertyRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            6. Intellectual Property Rights
          </button>
          <button 
            onClick={() => scrollToSection(accuracyRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            7. Accuracy and Disclaimer
          </button>
          <button 
            onClick={() => scrollToSection(liabilityRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            8. Limitation of Liability
          </button>
          <button 
            onClick={() => scrollToSection(externalLinksRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            9. External Links
          </button>
          <button 
            onClick={() => scrollToSection(amendmentsRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            10. Amendments to Terms
          </button>
          <button 
            onClick={() => scrollToSection(governingLawRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            11. Governing Law and Jurisdiction
          </button>
          <button 
            onClick={() => scrollToSection(contactRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-yellow-600 hover:bg-yellow-700 transition-colors font-medium text-sm lg:text-base mt-2 lg:mt-4"
          >
            Contact Association
          </button>
        </nav>
      </div>

      {/* Overlay backdrop for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Scrollable Main Content */}
      <div className="flex-1 overflow-y-auto lg:ml-0">
        {/* Hero Section - Responsive height */}
        <div className="relative h-64 sm:h-80 lg:h-96 w-full">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 lg:mb-4">
                Terms and Conditions
              </h1>
              <p className="text-lg sm:text-xl text-yellow-500 font-light">
                Governing the use of Lanka Spa Association website and services
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Responsive padding */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
          {/* Document Header - Responsive */}
          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-12 border-l-4 border-yellow-500">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 sm:mb-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  🧾 Terms and Conditions
                </h2>
                <h3 className="text-lg sm:text-xl text-gray-700 font-semibold">Lanka Spa Association</h3>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-gray-600 font-medium text-sm sm:text-base">Effective Date: [Insert Date]</p>
                <p className="text-gray-600 text-sm sm:text-base">Issued by: Lanka Spa Association (Private) Limited by Guarantee</p>
                <p className="text-gray-500 text-xs sm:text-sm">(Registered under the Companies Act No. 07 of 2007 – Sri Lanka)</p>
              </div>
            </div>
          </div>

          {/* Section 1 - Introduction */}
          <section ref={introductionRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                1. Introduction
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Welcome to the official website of the Lanka Spa Association (LSA).
                </p>
                <p>
                  By accessing or using this website, you agree to be bound by these Terms and Conditions, the Code of Professional Ethics, and all other applicable laws and regulations of Sri Lanka.
                </p>
                <p>
                  If you do not agree with these terms, you are advised not to use this website.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 - Purpose of the Website */}
          <section ref={purposeRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                2. Purpose of the Website
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  This website serves as an official information and resource platform of the Lanka Spa Association, which functions as the governing body for professional spa and massage therapy services in Sri Lanka.
                </p>
                <p>
                  It provides information about registration procedures, professional standards, ethical codes, and updates relevant to the wellness and massage therapy industry.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 - Membership and Registration */}
          <section ref={membershipRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                3. Membership and Registration
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Registration as a professional spa or therapist under LSA is governed by the Code of Ethics and Professional Conduct Regulations as published in the Standards section of this website.
                </p>
                <p>
                  Applicants must comply with all requirements, licensing conditions, and verification processes specified by the Association.
                </p>
                <p>
                  The LSA reserves the right to approve, reject, suspend, or revoke any membership or license based on compliance status and ethical conduct.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 - Compliance with Standards */}
          <section ref={complianceRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                4. Compliance with Standards
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  All registered establishments, practitioners, and users of this platform must adhere to the principles and rules outlined in the following documents:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>Regulations for the Incorporation of Massage Therapy Services and Centers</li>
                  <li>Code of Professional Ethics (Drafted on 07 October 2023)</li>
                  <li>Standards for Massage Service Establishments</li>
                </ul>
                <p>
                  Non-compliance with these standards may result in disciplinary actions, suspension, or permanent revocation of registration or licensing privileges.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 - Use of Website */}
          <section ref={useWebsiteRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                5. Use of Website
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  You agree to use this website only for lawful purposes and in a manner consistent with all applicable laws and ethical guidelines. You shall not:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>Post, upload, or distribute false or misleading information;</li>
                  <li>Attempt to gain unauthorized access to restricted sections of the site;</li>
                  <li>Misuse the name, emblem, or documents of the LSA for commercial purposes without written approval.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 - Intellectual Property Rights */}
          <section ref={intellectualPropertyRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                6. Intellectual Property Rights
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  All content on this website, including text, graphics, documents, logos, and images, are the intellectual property of the Lanka Spa Association unless otherwise stated.
                </p>
                <p>
                  No material may be reproduced, modified, distributed, or used for commercial purposes without prior written consent from the Association.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 - Accuracy and Disclaimer */}
          <section ref={accuracyRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                7. Accuracy and Disclaimer
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  The LSA strives to ensure that all information provided on this website is accurate and up to date. However:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>The Association makes no warranties or representations regarding completeness, accuracy, or reliability of the content.</li>
                  <li>The Association shall not be liable for any loss, damage, or inconvenience caused by reliance on the information provided.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8 - Limitation of Liability */}
          <section ref={liabilityRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                8. Limitation of Liability
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Under no circumstances shall the LSA, its directors, officers, or employees be held liable for any direct or indirect damages arising from:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2 text-sm sm:text-base">
                  <li>The use or inability to use this website;</li>
                  <li>Errors or omissions in its content;</li>
                  <li>Unauthorized access to user data;</li>
                  <li>Decisions made based on website information.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9 - External Links */}
          <section ref={externalLinksRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                9. External Links
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  This website may contain links to external websites for informational purposes.
                </p>
                <p>
                  LSA does not control or endorse the content, privacy practices, or accuracy of information on any external websites.
                </p>
              </div>
            </div>
          </section>

          {/* Section 10 - Amendments to Terms */}
          <section ref={amendmentsRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                10. Amendments to Terms
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  The Lanka Spa Association reserves the right to modify or update these Terms and Conditions at any time without prior notice.
                </p>
                <p>
                  Any such changes will be posted on this page, and continued use of the site constitutes acceptance of the updated terms.
                </p>
              </div>
            </div>
          </section>

          {/* Section 11 - Governing Law and Jurisdiction */}
          <section ref={governingLawRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                11. Governing Law and Jurisdiction
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of the Democratic Socialist Republic of Sri Lanka.
                </p>
                <p>
                  Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the courts of Sri Lanka.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div ref={contactRef} className="text-center mt-12 sm:mt-16 bg-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Need More Information?</h2>
            <p className="text-lg sm:text-xl text-yellow-500 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Contact the Lanka Spa Association for detailed guidance on terms and compliance.
            </p>
            <button onClick={() => window.open('/contact', '_self')} className="bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
              Contact Association
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;