import { useRef, useState } from 'react';

const Instructions = () => {
  // Create refs for each section
  const prerequisitesRef = useRef(null);
  const personalInfoRef = useRef(null);
  const spaInfoRef = useRef(null);
  const registrationFeeRef = useRef(null);
  const verificationRef = useRef(null);
  const membershipPlansRef = useRef(null);
  const therapistPolicyRef = useRef(null);
  const terminationRef = useRef(null);
  const importantNotesRef = useRef(null);

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
        <h2 className="text-lg font-bold text-yellow-400">Registration Guide</h2>
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
          <h2 className="text-lg lg:text-xl font-bold text-yellow-400 mb-2">Registration Guide</h2>
          <p className="text-gray-300 text-xs lg:text-sm">Step-by-step instructions</p>
        </div>
        
        <nav className="p-2 lg:p-4 space-y-1 lg:space-y-2 flex-1">
          <button 
            onClick={() => scrollToSection(prerequisitesRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            1. Prerequisites
          </button>
          <button 
            onClick={() => scrollToSection(personalInfoRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            2. Personal Information
          </button>
          <button 
            onClick={() => scrollToSection(spaInfoRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            3. Spa Information
          </button>
          <button 
            onClick={() => scrollToSection(registrationFeeRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            4. Registration Fee
          </button>
          <button 
            onClick={() => scrollToSection(verificationRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            5. Verification & Approval
          </button>
          <button 
            onClick={() => scrollToSection(membershipPlansRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            6. Membership Plans
          </button>
          <button 
            onClick={() => scrollToSection(therapistPolicyRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            7. Therapist Policy
          </button>
          <button 
            onClick={() => scrollToSection(terminationRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            8. Termination & Appeal
          </button>
          <button 
            onClick={() => scrollToSection(importantNotesRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            9. Important Notes
          </button>
          <button 
            onClick={() => window.open('/register', '_self')} // Assuming a register route
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-yellow-600 hover:bg-yellow-700 transition-colors font-medium text-sm lg:text-base mt-2 lg:mt-4"
          >
            Start Registration
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
              backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 lg:mb-4">
                🧾 Registration Instructions
              </h1>
              <p className="text-lg sm:text-xl text-yellow-500 font-light">
                Step-by-step guide to registering your spa with the Lanka Spa Association
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Responsive padding */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
          {/* Prerequisites Section */}
          <section ref={prerequisitesRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                1. Registration Prerequisites
              </h2>
              <div className="space-y-4 sm:space-y-6">
                <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                  Before starting your registration, please ensure that you have all the required documents ready. All listed items are compulsory unless marked as optional. You must also agree to the <a href="#" className="text-yellow-600 hover:underline">Terms & Conditions</a> and <a href="#" className="text-yellow-600 hover:underline">Privacy Policy</a> before proceeding.
                </p>
                
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Required Documents</h3>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li className="flex items-start"><span className="font-medium mr-2">•</span> National Identity Card (NIC)</li>
                    <li className="flex items-start"><span className="font-medium mr-2">•</span> Business Registration Certificate (BR/Form 1)</li>
                    <li className="flex items-start"><span className="font-medium mr-2">•</span> Spa Banner Image</li>
                    <li className="flex items-start"><span className="font-medium mr-2">•</span> Spa Facility Photos</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Personal Information Section */}
          <section ref={personalInfoRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                2. Personal Information
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>You will be required to provide the following personal details during registration:</p>
                <ul className="space-y-2 pl-4 sm:pl-6 list-disc">
                  <li><strong>First Name</strong> – Your given name</li>
                  <li><strong>Last Name</strong> – Your family or surname</li>
                  <li><strong>Email Address</strong> – Must be a valid and active email</li>
                  <li><strong>NIC Number</strong> – Use a valid NIC format (Old: 9 digits + V/X | New: 12 digits)<br />Example: 902541234V or 200254123456</li>
                  <li><strong>Telephone</strong> – Must contain 10 digits and start with 0<br />Example: 0112345678</li>
                  <li><strong>Mobile Number</strong> – Must contain 10 digits and start with 07<br />Example: 0771234567</li>
                </ul>
                
                <div className="bg-blue-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 sm:mb-4">NIC Attachments</h3>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li>NIC Front Photo – JPG or PNG format (Maximum size: 5MB)</li>
                    <li>NIC Back Photo – JPG or PNG format (Maximum size: 5MB)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Spa Information Section */}
          <section ref={spaInfoRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                3. Spa Information
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>You must provide accurate and verifiable information about your spa.</p>
                <ul className="space-y-2 pl-4 sm:pl-6 list-disc">
                  <li><strong>Spa Name</strong> – The official registered name of your spa</li>
                  <li><strong>Spa Address</strong> – Include Address Line 1 and optionally Address Line 2</li>
                  <li><strong>Province / State</strong> – Select from the available list</li>
                  <li><strong>Postal Code</strong> – 5-digit postal code (e.g., 10100)</li>
                  <li><strong>Police Division</strong> – Example: Colombo, Kandy, Galle</li>
                  <li><strong>Spa Telephone Number</strong> – Valid landline number</li>
                  <li><strong>Spa BR Number</strong> – Business Registration Number (e.g., PV12345)</li>
                </ul>
                
                <div className="bg-green-50 rounded-xl p-4 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 sm:mb-4">Document Uploads</h3>
                  <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                    <li>Business Registration Certificate (BR) – PDF or DOC (Max 10MB)</li>
                    <li>Form 1 Certificate – PDF or DOC (Max 10MB)<br /><em>Required for private entities (Pvt or Thanipudgala Wiyapara)</em></li>
                    <li>Spa Banner Image – JPG or PNG (Max 10MB)<br />This image will be used for promotional purposes.</li>
                    <li>Spa Facility Photos – JPG or PNG (Max 10MB each)</li>
                    <li>Additional Documents (Optional) – PDF, DOC, or JPG (Max 10MB)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Registration Fee Section */}
          <section ref={registrationFeeRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                4. Registration Fee
              </h2>
              <div className="bg-yellow-50 rounded-xl p-4 sm:p-6 border-l-4 border-yellow-500">
                <p className="text-gray-700 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                  A registration fee of LKR 10,000 must be paid before submitting your application.
                </p>
                <div className="bg-amber-100 p-3 sm:p-4 rounded-lg">
                  <p className="text-gray-700 text-xs sm:text-sm">
                    💡 <strong>Important:</strong> Use your Business Registration Number (BR No.) as the payment reference number when making the payment.
                  </p>
                </div>
                <p className="text-gray-700 mt-3 sm:mt-4 text-sm sm:text-base">
                  After submitting your payment and application, your request will be sent to the LSA Administration for review.
                </p>
              </div>
            </div>
          </section>

          {/* Verification Section */}
          <section ref={verificationRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                5. Verification and Approval
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>Once you submit your registration:</p>
                <ul className="space-y-2 pl-4 sm:pl-6 list-disc">
                  <li>The LSA Admin team will verify all submitted details and documents.</li>
                  <li>Upon successful verification, your registration will be approved.</li>
                  <li>You will receive an email notification to proceed to the membership plan selection stage.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Membership Plans Section */}
          <section ref={membershipPlansRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                6. Membership Payment Plans
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <p>After your registration is approved, you must select a suitable Membership Payment Plan. The available payment cycles are:</p>
                <ul className="grid grid-cols-2 gap-2 sm:gap-4 text-center bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <li className="font-medium text-sm sm:text-base">Monthly</li>
                  <li className="font-medium text-sm sm:text-base">Quarterly</li>
                  <li className="font-medium text-sm sm:text-base">Half-Yearly</li>
                  <li className="font-medium text-sm sm:text-base">Yearly</li>
                </ul>
                <p>After you make the payment and submit your plan, it will be reviewed by the admin. Once approved, you will gain full system access to manage your spa profile and related operations.</p>
              </div>
            </div>
          </section>

          {/* Therapist Policy Section */}
          <section ref={therapistPolicyRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                7. Therapist Registration Policy
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <ul className="space-y-2 pl-4 sm:pl-6 list-disc">
                  <li>Each therapist can register under only one spa at a time.</li>
                  <li>The system will not allow duplicate therapist registrations under multiple spas.</li>
                  <li>If a therapist wishes to join another spa, they must first resign from the current one.</li>
                  <li>Spa owners are responsible for processing therapist resignations or terminations through the system.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Termination Section */}
          <section ref={terminationRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                8. Termination and Appeal Process
              </h2>
              <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                <ul className="space-y-2 pl-4 sm:pl-6 list-disc">
                  <li>A therapist may be terminated due to misconduct, criminal involvement, or other valid reasons.</li>
                  <li>The spa owner must attach a police report or relevant case document before proceeding with the termination in the system.</li>
                  <li>Once terminated, the therapist cannot register under another spa.</li>
                  <li>However, therapists may appeal to remove their terminated status by contacting the LSA Administration with valid supporting documents.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Important Notes Section */}
          <section ref={importantNotesRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                9. Important Notes
              </h2>
              <div className="bg-red-50 rounded-xl p-4 sm:p-6 border-l-4 border-red-500">
                <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                  <li>Ensure all provided information and documents are accurate and verifiable.</li>
                  <li>False or misleading submissions may lead to registration rejection or suspension.</li>
                  <li>All official communications will be sent to the registered email address only.</li>
                  <li>The LSA reserves the right to verify, suspend, or terminate accounts that do not comply with regulations.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Call to Action - Responsive */}
          <div className="text-center mt-12 sm:mt-16 bg-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Get Started?</h2>
            <p className="text-lg sm:text-xl text-yellow-500 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Follow these instructions to register your spa today and join the Lanka Spa Association.
            </p>
            <button 
              onClick={() => window.open('/registration', '_self')} // Assuming a register route
              className="bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Start Registration Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructions;