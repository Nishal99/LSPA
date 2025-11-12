
import React from 'react';
import { FiAward, FiTarget, FiUsers, FiBook, FiShield } from 'react-icons/fi';

const About = () => {
  const timelineItems = [
    {
      year: "2012",
      title: "Our Beginning – 2012",
      description: "The Lanka Spa Association (LSA) began its journey in 2012, marking the foundation of Sri Lanka’s organized spa and wellness industry. During this period, the association gained legal recognition and officially joined with the Department of Indigenous Medicine to strengthen and regulate the growing spa sector.",
      details: [
        "The Department introduced a certification system under which two types of licenses were issued:",
        "Doctor-Supervised Spa Certificate – allowing massage centers to operate under the direct supervision of a registered doctor.",
        "Ayurveda Massage Center Owner Certificate – granting qualified owners the right to manage Ayurveda-based massage centers.",
        "Through these two categories, spas across the country were legally regulated and operated under recognized health and safety standards."
      ],
      icon: FiAward,
      image: "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      year: "2012 – 2019",
      title: "Development and Certification (2012 – 2019)",
      description: "Subsequently, the Departments of Education and Hospitals were authorized to issue therapist certificates, ensuring that only trained and certified professionals could practice. This structured certification process continued effectively until 2019.",
      details: [
        "During this period, Mr. Prasanna Munasinghe (CEO), with the support of the Sri Lanka Foundation Institute, made significant efforts to obtain regional licenses to protect practitioners’ rights and recognition within the spa industry.",
        "Furthermore, Municipal Councils, Urban Councils, and Pradeshiya Sabhas issued commercial licenses to spas island-wide.",
        "A special circular (chakralekhana) was later introduced to support tourism promotion, allowing spas to operate during night hours.",
        "This initiative was designed not only to encourage wellness tourism but also to permit approved Poorwa Karma(Massage) treatments under government authorization."
      ],
      icon: FiBook,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      year: "After 2019",
      title: "Industry Challenges and Transition (After 2019)",
      description: "After 2019, due to changes in ministerial structures, the previous certification and regulatory systems were discontinued without reason, creating uncertainty and operational challenges for many spas.",
      details: [
        "To maintain legitimacy, many establishments began registering under the Department of company Registration, obtaining certificates and licenses aligned with their mission and vision statements.",
        "Local authorities—including Municipal Councils, Urban Councils, and Pradeshiya Sabhas—continued issuing certificates; however, this process lacked uniformity and long-term success."
      ],
      icon: FiShield,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      year: "2023 – Present",
      title: "LSA Reorganization and Legal Empowerment (2023 – Present)",
      description: "In 2023, the Lanka Spa Association (LSA) took a major step forward. An officer representing the Director Genaral (Precidant) (Janadhipathi Lekham Karyalaya) was appointed to collaborate with LSA, granting the association the authority to present proposals and requests through the Ministry of Health.",
      details: [
        "Later, through a formal petition to the Attorney General’s Department (Neethipathi Departhamenthuwa) and further review by the Human Rights Commission of Sri Lanka, LSA obtained official recognition and power to regulate the spa industry.",
        "The association also received approval under RIT authorization, solidifying its legal and operational standing."
      ],
      icon: FiUsers,
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const vision = "To establish a standardized, professional, and legally recognized spa and wellness industry in Sri Lanka that upholds national health values and promotes global wellness tourism.";

  const missionItems = [
    "To protect the rights and recognition of spa owners, therapists, and professionals.",
    "To collaborate with government authorities to maintain fair and transparent licensing systems.",
    "To uplift the standards of Sri Lanka’s spa and wellness sector through education, certification, and ethical practice.",
    "To promote Sri Lanka as a leading destination for Ayurveda, wellness, and traditional healing."
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A1428] via-[#152340] to-[#0A1428] relative overflow-hidden font-light">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-[#D4AF37]/3 rounded-full blur-2xl"></div>
      <div className="absolute top-1/2 left-0 w-24 h-24 bg-gradient-to-r from-[#D4AF37]/10 to-transparent rounded-full blur-xl transform -translate-y-1/2"></div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/80"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-6 tracking-tight leading-tight">
            About
          </h1>
          <div className="w-32 md:w-40 lg:w-48 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-gray-200 max-w-4xl mx-auto leading-relaxed text-lg md:text-xl font-light">
            Pioneering Excellence in Sri Lanka's Spa and Wellness Industry Since 2012
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {timelineItems.map((item, index) => (
              <div 
                key={item.year} 
                className="group relative flex flex-col lg:flex-row items-center gap-8 lg:gap-12 transition-all duration-700 ease-out hover:scale-[1.01]"
              >
                {/* Vertical timeline connector */}
                {index < timelineItems.length - 1 && (
                  <div className="hidden lg:block absolute left-16 top-full w-px h-24 bg-gradient-to-b from-[#D4AF37]/20 to-transparent transform -translate-x-1/2"></div>
                )}
                
                {/* Year and Icon */}
                <div className="flex flex-col items-center lg:items-start lg:w-32 flex-shrink-0 z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#BF9B30]/20 flex items-center justify-center mb-4 border-2 border-[#D4AF37]/30 group-hover:border-[#D4AF37]/50 transition-all duration-500">
                    <item.icon className="w-6 h-6 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="text-center lg:text-left">
                    <span className="text-[#D4AF37] font-medium text-lg">{item.year}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-slate-700/40 shadow-2xl group-hover:border-[#D4AF37]/20 transition-all duration-500 hover:shadow-[#D4AF37]/10">
                  <h2 className="text-2xl font-light text-white mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 mb-6 leading-relaxed text-base lg:text-lg">
                    {item.description}
                  </p>
                  <ul className="space-y-3">
                    {item.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-gray-400 text-sm lg:text-base group-hover:text-gray-300 transition-colors duration-300">
                        <span className="text-[#D4AF37] mr-3 mt-1 w-4 flex-shrink-0">→</span>
                        <span className="leading-relaxed">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Subtle image accent */}
                <div className="hidden lg:block absolute right-0 top-1/2 transform -translate-y-1/2 w-48 h-32 bg-cover bg-center rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" 
                     style={{ backgroundImage: `url(${item.image})` }}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="relative py-24 bg-gradient-to-b from-slate-900/50 to-transparent">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Vision */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent rounded-3xl -z-10"></div>
              <div className="bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-slate-700/40 shadow-2xl group-hover:border-[#D4AF37]/20 transition-all duration-500 hover:shadow-[#D4AF37]/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#BF9B30] flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FiTarget className="w-5 h-5 text-[#0A1428]" />
                  </div>
                  <h2 className="text-2xl font-light text-white">Our Vision</h2>
                </div>
                <p className="text-gray-300 leading-relaxed text-base lg:text-lg italic border-l-4 border-[#D4AF37]/30 pl-4">
                  {vision}
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 to-transparent rounded-3xl -z-10"></div>
              <div className="bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/80 backdrop-blur-xl rounded-3xl p-8 lg:p-10 border border-slate-700/40 shadow-2xl group-hover:border-[#D4AF37]/20 transition-all duration-500 hover:shadow-[#D4AF37]/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#BF9B30] flex items-center justify-center mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <FiUsers className="w-5 h-5 text-[#0A1428]" />
                  </div>
                  <h2 className="text-2xl font-light text-white">Our Mission</h2>
                </div>
                <ul className="space-y-4">
                  {missionItems.map((mission, index) => (
                    <li key={index} className="flex items-start text-gray-300 text-base lg:text-lg group-hover:text-gray-200 transition-colors duration-300">
                      <span className="text-[#D4AF37] mr-4 mt-1 w-5 flex-shrink-0 font-medium">•</span>
                      <span className="leading-relaxed">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(212, 175, 55, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.02) 1px, transparent 1px);
          background-size: 80px 80px;
        }
        
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .float-subtle {
          animation: subtleFloat 6s ease-in-out infinite;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.06);
        }
      `}</style>
    </div>
  );
};

export default About;
