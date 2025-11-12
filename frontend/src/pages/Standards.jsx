import { useRef, useState } from 'react';

const Standards = () => {
  // Create refs for each section
  const legalScopeRef = useRef(null);
  const preambleRef = useRef(null);
  const part1Ref = useRef(null);
  const part2Ref = useRef(null);
  const part3Ref = useRef(null);
  const part4Ref = useRef(null);
  const standardsRef = useRef(null);
  const part5Ref = useRef(null);
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
        <h2 className="text-lg font-bold text-yellow-400">Regulations</h2>
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
          <h2 className="text-lg lg:text-xl font-bold text-yellow-400 mb-2">Regulations Navigation</h2>
          <p className="text-gray-300 text-xs lg:text-sm">Quick access to sections</p>
        </div>
        
        <nav className="p-2 lg:p-4 space-y-1 lg:space-y-2 flex-1">
          <button 
            onClick={() => scrollToSection(legalScopeRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            Legal Scope & Overview
          </button>
          <button 
            onClick={() => scrollToSection(preambleRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            Preamble
          </button>
          <button 
            onClick={() => scrollToSection(part1Ref)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            Part I - Registration
          </button>
          <button 
            onClick={() => scrollToSection(part2Ref)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            Part II - Licensing
          </button>
          <button 
            onClick={() => scrollToSection(part3Ref)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            Part III - General Provisions
          </button>
          <button 
            onClick={() => scrollToSection(part4Ref)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            Part IV - Legal & Penal Provisions
          </button>
          <button 
            onClick={() => scrollToSection(standardsRef)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            Minimum Standards
          </button>
          <button 
            onClick={() => scrollToSection(part5Ref)}
            className="w-full text-left px-3 lg:px-4 py-2 lg:py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base"
          >
            Part V - Interpretation
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
                Professional Regulations
              </h1>
              <p className="text-lg sm:text-xl text-yellow-500 font-light">
                Code of Ethics and Standards for Massage Therapy Services
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Responsive padding */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
          {/* Legal Scope Section */}
          <section ref={legalScopeRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              {/* Document Header - Responsive */}
              <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-12 border-l-4 border-yellow-500">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 sm:mb-6">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      Regulations for the Incorporation of Massage Therapy Services and Centers
                    </h2>
                    <h3 className="text-lg sm:text-xl text-gray-700 font-semibold">Code of Professional Ethics</h3>
                  </div>
                  <div className="mt-4 md:mt-0 text-right">
                    <p className="text-gray-600 font-medium text-sm sm:text-base">Drafted on: 07 October 2023</p>
                    <p className="text-gray-600 text-sm sm:text-base">Issued by: Lanka Spa Association</p>
                    <p className="text-gray-500 text-xs sm:text-sm">(Company duly incorporated under the Companies Act No.07 of 2007)</p>
                  </div>
                </div>
              </div>

              {/* Preamble Section */}
              <section ref={preambleRef} className="mb-8 sm:mb-12">
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                    Preamble
                  </h2>
                  <div className="space-y-3 sm:space-y-4 text-gray-700 leading-relaxed text-sm sm:text-base">
                    <p>
                      This document shall be cited as the Code of Ethics and Professional Conduct Regulations for Massage Therapy Services and Institutions.
                    </p>
                    <p>
                      These regulations are applicable to all professional massage therapy services and must be included in every registered massage therapy establishment.
                    </p>
                    <p>
                      Only those individuals or institutions duly registered under these regulations are entitled to engage in professional massage therapy services, and only to the extent necessary to perform such services properly and lawfully.
                    </p>
                  </div>
                </div>
              </section>
              
              <div className="space-y-6 sm:space-y-8">
                {/* General Overview */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">General Overview</h3>
                  <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                    <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                      SPAs in Sri Lanka sit at the intersection of tourism, health (including traditional medicine) and personal care. Regulation is fragmented: Ayurvedic treatments and practitioners are governed by the Ayurveda authorities and Ayurveda Act No.31 of 1961, tourist/ hotel-affiliated spas by the Sri Lanka Tourism Development Authority (SLTDA), and routine public-health, municipal and business licensing rules by local authorities and the Ministry of Health.
                    </p>
                    <p className="text-gray-700 text-sm sm:text-base">
                      Furthermore, the Department of the Registrar of Companies considers the operation of a spa conducted in the aforesaid manner to constitute an acceptable nature of business for incorporation as a company under the Companies Act No. 07 of 2007.
                    </p>
                  </div>
                </div>

                {/* How to register */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">How to register as a legally valid SPA</h3>
                  <div className="bg-green-50 rounded-xl p-4 sm:p-6 border-l-4 border-green-500">
                    <p className="text-gray-700 font-medium text-sm sm:text-base">
                      The registration process involves multiple regulatory bodies and compliance with various statutory requirements to ensure lawful operation.
                    </p>
                  </div>
                </div>

                {/* Legal Restrictions */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Legal Restrictions</h3>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">
                        At no instance shall the operation of a therapeutic spa business, conducted in the manner aforesaid manner, be deemed illegal or invalid under the laws of Sri Lanka. Such establishments are recognised as legitimate business enterprises when duly registered and operated in accordance with the applicable statutory and regulatory provisions.
                      </p>
                    </div>
                    
                    <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">
                        In the event that the Sri Lanka Police or any other law enforcement authority seeks to conduct a raid or inspection of a spa, such action shall not be constituted as a legally valid raid unless a search warrant is obtained through the Honorable Court and duly signed by a Honorable Magistrate. If such requirements are not met, the raid thus conducted is illegal.
                      </p>
                    </div>
                    
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">
                        Furthermore, even where a search warrant has been duly obtained, such an operation must be conducted in a lawful and reasonable manner. In cases involving therapeutic or wellness treatments, the inspection team should be accompanied by a qualified person possessing the requisite expertise in the relevant field such as a registered therapist or Ayurvedic practitioner capable of accurately assessing whether the treatments provided fall within the lawful scope of spa or wellness services.
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">
                        As a proposal under the national budget policy framework, the Lanka Spa Association has initiated the "Spa and Wellness Self-Regulation Project" in alignment with the government’s regulation process, with the aim of developing wellness tourism as a key component of Sri Lanka’s tourism industry.
This initiative contributes toward transforming it into a recognized professional service within the country.<br/><br/>

As the first phase of this project, local wellness centers across the island are being organized and regulated under a professional code of ethics, enabling the entire community to operate in a unified manner and move toward establishing a common legal framework.
                      </p>
                    </div>
                    
                    <div className="bg-gray-100 p-3 sm:p-4 rounded-lg border-l-4 border-gray-400">
                      <p className="text-gray-700 font-semibold text-sm sm:text-base">
                        The case of Abeykoon v Kulanthunga 52 NLR 47 lays out the background with regard to the aforesaid aspects.
                      </p>
                      <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">
                        PDF – [Reference documentation available through legal channels]
                      </p>
                    </div>
                  </div>
                </div>

                {/* Related Acts */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Related Acts and Ordinances</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                    
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">1. Ayurveda Act No.31 of 1961</p>
                    </div>
                    
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">2. Act of the Sri Lanka Tourism Development Authority</p>
                    </div>
                    <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">3. Brothels Ordinance No.05 of 1889</p>
                    </div>
                    <div className="bg-yellow-100 p-3 sm:p-4 rounded-lg">
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">
                        4. Quarantine and Prevention of Diseases Ordinance No.03 of 1897
                      </p>
                    </div>

                    <div className="bg-red-50 p-3 sm:p-4 rounded-lg">
                      <p className="font-semibold text-gray-800 text-sm sm:text-base">5. Vagrants Ordinance No.04 of 1841</p>
                    </div>
                  </div>
                </div>

                {/* LSA Overview */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Overview of LSA (mission and goals)</h3>
                  <div className="bg-purple-50 rounded-xl p-4 sm:p-6">
                    <p className="text-gray-700 text-sm sm:text-base">
                      The Lanka Spa Association (LSA) serves as the governing body for professional spa and massage therapy services in Sri Lanka, dedicated to maintaining high standards of practice, promoting ethical conduct, and ensuring regulatory compliance across the industry.
                    </p>
                  </div>
                </div>

                {/* How to register LSA */}
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">How to register with LSA</h3>
                  <div className="bg-green-50 rounded-xl p-4 sm:p-6">
                    <p className="text-gray-700 text-sm sm:text-base">
                      Registration with the Lanka Spa Association involves submitting the required documentation, meeting the established standards for spa operations, and undergoing the verification process as outlined in the following regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Part I - Registration */}
          <section ref={part1Ref} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                Part I – Registration of Massage Centers
              </h2>
              
              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">04. Application for Registration</h3>
                <div className="bg-gray-50 rounded-xl p-4 sm:p-6">
                  <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                    Any person intending to register a massage center as a professional massage service establishment shall:
                  </p>
                  <ul className="list-disc pl-4 sm:pl-6 space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
                    <li>Submit an application in the prescribed form as decided by the designated Committee, together with the required supporting documents.</li>
                    <li>Furnish any additional documents or information requested by the Committee for the purpose of evaluating the application.</li>
                    <li>Upon verification that all requirements are fulfilled, the relevant Authority/Committee shall/may obtain the recommendation of the Lanka Spa Association and register the institution as a recognized massage center.</li>
                    <li>A Certificate of Registration shall then be issued to the registered owner of the institution.</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Part II - Licensing */}
          <section ref={part2Ref} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                Part II – Granting and Refusal of Licenses
              </h2>
              
              <div className="space-y-6 sm:space-y-8">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">05. Granting of License</h3>
                  <p className="text-gray-700 bg-green-50 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
                    When the Committee is satisfied that the standards and requirements specified in the Schedule have been met by the applicant, and after obtaining the recommendation of the director board of the Association, the Committee shall issue a License to the establishment or its owner.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">06. Refusal of License</h3>
                  <p className="text-gray-700 bg-red-50 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
                    If the Committee refuses to issue a license, the reasons for such refusal shall be clearly stated in writing.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">07. Re-application</h3>
                  <p className="text-gray-700 bg-blue-50 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
                    An applicant whose license has been refused shall have the right to reapply or request/appeal re-registration, subject to the recommendation of the Association.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">08. Validity of License</h3>
                  <p className="text-gray-700 bg-yellow-50 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
                    A license shall remain valid for a period of one (01) year from the specified date of issue, unless it is revoked earlier by the Committee after considering the recommendations of the Association.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Part III - General Provisions */}
          <section ref={part3Ref} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                Part III – General Provisions
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">09. Renewal of License</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Licenses may be renewed annually upon payment of the prescribed fees, submission of the required form, and fulfillment of the specified conditions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">10. Right of Appeal</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Any person dissatisfied with a decision regarding registration, license issuance, renewal, refusal, or cancellation may, within 30 days of receiving written communication, submit an appeal to the Appellate Authority through the Committee, along with the recommendations of the Association.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">11. Consideration of Appeals</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    It shall be the duty of the Appellate Authority to review and decide upon such appeals in a fair and timely manner.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">12. Compliance with Standards</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Every registered and licensed establishment shall ensure continuous compliance with the minimum requirements set out in the Schedule annexed hereto.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Part IV - Legal and Penal Provisions */}
          <section ref={part4Ref} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                Part IV – Legal and Penal Provisions
              </h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">13. Illegal Acts</h3>
                  <p className="text-gray-700 bg-red-50 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
                    Any person or institution operating a massage therapy service without registration or in violation of these regulations shall be deemed to have committed an unlawful act.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">14. Penalties and Judicial Proceedings</h3>
                  <p className="text-gray-700 bg-red-50 p-3 sm:p-4 rounded-lg text-sm sm:text-base">
                    Penalties and related judicial actions shall be determined and enforced in accordance with applicable laws and upon the recommendation of the Association and the relevant Authority.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Schedule - Minimum Standards */}
          <section ref={standardsRef} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                Schedule – Minimum Standards for Massage Service Establishments
              </h2>
              
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Minimum Requirements and Standards:</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">The building shall have a minimum area of 1,200 square feet.</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">A Reception and Information Desk must be available.</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">Each Treatment Room shall be at least 10 ft × 6 ft in size and constructed of durable, strong materials.</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">Treatment Beds shall be a minimum of 6 ft × 2 ft and 2 ft in height.</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">Bathrooms must be maintained in a clean and hygienic condition.</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">Adequate water supply must be provided in treatment rooms.</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">Sanitary items, including bath towels and bed linen, must be clean and in good condition.</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">A clean storage area must be provided for cosmetics and toiletries.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">Toilet units must be well maintained and hygienic.</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">Staff must be friendly, courteous, and professionally trained.</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">Establishments must maintain valid Public Liability Insurance.</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">Only nameplates approved and authorized by the Association may be displayed.</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">Any form of advertising or promotional activity requires prior written approval from the Committee.</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">Only certified therapists recommended by the Association may be employed.</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">All therapists must hold a valid Preventive Medical Certificate issued by a government hospital or a hospital recognized by the Association.</p>
                    </div>
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                      <p className="text-gray-700 text-sm sm:text-base">Receipts must be issued for all payments made by clients.</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-6 bg-yellow-50 p-4 sm:p-6 rounded-lg border-l-4 border-yellow-500">
                  <p className="text-gray-700 font-semibold text-sm sm:text-base">
                    New establishments must maintain a minimum distance of 500 meters from any other registered massage establishment.
                  </p>
                  <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm">
                    (This distance rule shall not apply to massage establishments that commenced operations prior to the enactment of these regulations.)
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Part V - Interpretation */}
          <section ref={part5Ref} className="mb-8 sm:mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 pb-2 border-b border-gray-200">
                Part V – Interpretation
              </h2>
              
              <div className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
                <p>For the purpose of these regulations, unless the context otherwise requires:</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Committee</p>
                    <p className="text-gray-700 text-xs sm:text-sm mt-1">means a council comprising persons holding appointed public offices representing state or semi-state institutions, and members nominated and appointed by the Lanka Spa Association.</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Association</p>
                    <p className="text-gray-700 text-xs sm:text-sm mt-1">means the Lanka Spa Association Limited by Guarantee, established under the Companies Act No. 07 of 2007.</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Application</p>
                    <p className="text-gray-700 text-xs sm:text-sm mt-1">means a duly completed request submitted in the prescribed format.</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Fee</p>
                    <p className="text-gray-700 text-xs sm:text-sm mt-1">means the prescribed amount payable for registration, licensing, or renewal.</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Standards</p>
                    <p className="text-gray-700 text-xs sm:text-sm mt-1">refer to the minimum operational and structural requirements outlined in the Schedule.</p>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Appellate Authority</p>
                    <p className="text-gray-700 text-xs sm:text-sm mt-1">means the designated body responsible for reviewing appeals submitted under these regulations.</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Massage Establishment</p>
                    <p className="text-gray-700 text-xs sm:text-sm mt-1">refers to any entrepreneur or institution providing professional external massage services intended to promote the physical and mental well-being of clients in a healthy and lawful manner.</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Qualified Therapist</p>
                    <p className="text-gray-700 text-xs sm:text-sm mt-1">means a person holding a valid certificate issued by a government-recognized institution or one recommended by the Association.</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Assembly</p>
                    <p className="text-gray-700 text-xs sm:text-sm mt-1">means the General Assembly of the Lanka Spa Association.</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">Massage</p>
                    <p className="text-gray-700 text-xs sm:text-sm mt-1">means a professional therapeutic manipulation of the soft tissues of the body to promote relaxation, health, and well-being.</p>
                  </div>
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 text-sm sm:text-base">License</p>
                    <p className="text-gray-700 text-xs sm:text-sm mt-1">means the official authorization granted under these regulations, permitting an individual or establishment to operate a professional massage therapy service.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action - Responsive */}
          <div ref={contactRef} className="text-center mt-12 sm:mt-16 bg-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Need More Information?</h2>
            <p className="text-lg sm:text-xl text-yellow-500 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              Contact the Lanka Spa Association for detailed guidance on registration and compliance.
            </p>
            <button 
              onClick={() => window.open('/contact', '_self')} 
              className="bg-yellow-500 text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 text-sm sm:text-base"
            >
              Contact Association
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standards;