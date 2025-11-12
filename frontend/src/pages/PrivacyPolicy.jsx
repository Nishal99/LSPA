import { useRef, useState } from 'react';

const PrivacyPolicy = () => {
  // Create refs for each section
  const introductionRef = useRef(null);
  const infoCollectRef = useRef(null);
  const useInfoRef = useRef(null);
  const dataProtectRef = useRef(null);
  const cookiesRef = useRef(null);
  const thirdPartyRef = useRef(null);
  const retentionRef = useRef(null);
  const rightsRef = useRef(null);
  const updatesRef = useRef(null);
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
        <h2 className="text-lg font-bold text-yellow-400">Privacy Policy</h2>
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
          <h2 className="text-lg lg:text-xl font-bold text-yellow-400 mb-2">Privacy Policy Navigation</h2>
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
            onClick={() => scrollToSection(infoCollectRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            2. Information We Collect
          </button>
          <button 
            onClick={() => scrollToSection(useInfoRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            3. How We Use Your Information
          </button>
          <button 
            onClick={() => scrollToSection(dataProtectRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            4. Data Protection and Security
          </button>
          <button 
            onClick={() => scrollToSection(cookiesRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            5. Cookies and Analytics
          </button>
          <button 
            onClick={() => scrollToSection(thirdPartyRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            6. Third-Party Links
          </button>
          <button 
            onClick={() => scrollToSection(retentionRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            7. Data Retention
          </button>
          <button 
            onClick={() => scrollToSection(rightsRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            8. Your Rights
          </button>
          <button 
            onClick={() => scrollToSection(updatesRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            9. Updates to this Privacy Policy
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
                🔒 Privacy Policy
              </h1>
              <p className="text-lg sm:text-xl text-yellow-500 font-light">
                Protecting your personal information and data privacy
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
                  🔒 Privacy Policy
                </h2>
                <h3 className="text-lg sm:text-xl text-gray-700 font-semibold">Lanka Spa Association</h3>
              </div>
              <div className="mt-4 md:mt-0 text-right">
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
                  The Lanka Spa Association (LSA) respects your privacy and is committed to protecting the personal information of all visitors, members, and applicants.
                </p>
                <p>
                  This Privacy Policy explains how we collect, use, store, and safeguard your data in compliance with the applicable laws of Sri Lanka.
                </p>
              </div>
            </div>
          </section>

          {/* Section 2 - Information We Collect */}
          <section ref={infoCollectRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                2. Information We Collect
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  We may collect personal and non-personal information through:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2">
                  <li>Membership or Registration Forms: Name, contact number, email address, business name, registration details, etc.</li>
                  <li>Contact Forms: Messages and inquiries sent via the website.</li>
                  <li>Cookies and Analytics: Information such as browser type, device, IP address, and user behavior for analytical purposes.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 - How We Use Your Information */}
          <section ref={useInfoRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                3. How We Use Your Information
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Your information may be used for the following purposes:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2">
                  <li>To process membership and registration applications;</li>
                  <li>To communicate with members and respond to inquiries;</li>
                  <li>To improve our website and services;</li>
                  <li>To send official announcements, updates, and notifications relevant to spa regulations and standards;</li>
                  <li>To maintain accurate records of registered members and licensed establishments.</li>
                </ul>
                <p>
                  We do not sell, rent, or share personal data with third parties for marketing purposes.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 - Data Protection and Security */}
          <section ref={dataProtectRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                4. Data Protection and Security
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  We implement appropriate technical and organizational measures to safeguard your data against unauthorized access, loss, misuse, or disclosure.
                </p>
                <p>
                  Only authorized personnel of the LSA have access to personal information for legitimate purposes.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 - Cookies and Analytics */}
          <section ref={cookiesRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                5. Cookies and Analytics
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Our website may use cookies and analytics tools to enhance user experience and monitor site performance.
                </p>
                <p>
                  You can choose to disable cookies in your browser settings, though this may limit some functionality of the site.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 - Third-Party Links */}
          <section ref={thirdPartyRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                6. Third-Party Links
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  This website may contain links to third-party websites.
                </p>
                <p>
                  The LSA is not responsible for the privacy practices or content of such external sites.
                </p>
                <p>
                  Users are encouraged to review the privacy policies of any linked websites before sharing personal information.
                </p>
              </div>
            </div>
          </section>

          {/* Section 7 - Data Retention */}
          <section ref={retentionRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                7. Data Retention
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  Personal information is retained only for as long as necessary to fulfill the purposes outlined above or to comply with legal obligations under Sri Lankan law.
                </p>
              </div>
            </div>
          </section>

          {/* Section 8 - Your Rights */}
          <section ref={rightsRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                8. Your Rights
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  You have the right to:
                </p>
                <ul className="list-disc pl-4 sm:pl-6 space-y-2">
                  <li>Request access to your personal data held by LSA;</li>
                  <li>Request correction or deletion of inaccurate data;</li>
                  <li>Withdraw consent for data use, where applicable.</li>
                </ul>
                <p>
                  Requests can be made via email to info@lankaspaassociation.lk.
                </p>
              </div>
            </div>
          </section>

          {/* Section 9 - Updates to this Privacy Policy */}
          <section ref={updatesRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                9. Updates to this Privacy Policy
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>
                  The LSA reserves the right to modify or update this Privacy Policy at any time.
                </p>
                <p>
                  Any changes will be published on this page, and the "Effective Date" will be updated accordingly.
                </p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div ref={contactRef} className="text-center mt-12 sm:mt-16 bg-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Questions About Privacy?</h2>
            <p className="text-lg sm:text-xl text-yellow-500 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Contact the Lanka Spa Association for any privacy-related inquiries or concerns.
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

export default PrivacyPolicy;