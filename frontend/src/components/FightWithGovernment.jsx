
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FiAward, 
  FiUsers, 
  FiShield, 
  FiTrendingUp, 
  FiGlobe,
  FiArrowRight,
  FiFileText
} from 'react-icons/fi';

const FightWithGovernment = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const advocacyPoints = [
    {
      icon: <FiAward className="w-5 h-5" />,
      title: "Equal Professional Recognition",
      description: "Ensure equal professional recognition for all certified spa and wellness practitioners",
      gradient: "from-[#D4AF37] via-[#e6c158] to-[#f4d03f]"
    },
    {
      icon: <FiFileText className="w-5 h-5" />,
      title: "Standardized National/Internatinal Framework",
      description: "Establish a standardized national and international framework for skill certification and career progression",
      gradient: "from-[#0A1428] via-[#1a2a4e] to-[#2c3e50]"
    },
    {
      icon: <FiShield className="w-5 h-5" />,
      title: "Protect Workers' Rights",
      description: "Protect the rights and dignity of skilled workers within the spa and wellness industry",
      gradient: "from-[#D4AF37] via-[#e6c158] to-[#f4d03f]"
    },
    {
      icon: <FiGlobe className="w-5 h-5" />,
      title: "Global Standards Alignment",
      description: "Promote industry-wide professionalism that aligns with global spa and wellness standards",
      gradient: "from-[#0A1428] via-[#1a2a4e] to-[#2c3e50]"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-white text-[#0A1428] relative overflow-hidden">
      {/* Subtle Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/3 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0A1428]/3 rounded-full translate-x-1/3 translate-y-1/3 blur-xl"></div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.08);
          transition: all 0.3s ease;
        }
        
        .glass-effect:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          border-color: rgba(212, 175, 55, 0.15);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #0A1428 0%, #1a2a4e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center mb-6 px-4 py-2 bg-white/60 rounded-full border border-[#D4AF37]/20 shadow-sm">
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></div>
            <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">Industry Advocacy</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Advocating for <span className="gradient-text font-semibold">Skilled Professionals</span>
          </h2>
          <div className="w-20 md:w-24 lg:w-32 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            The Lanka Spa Association is actively engaged in addressing critical issues concerning the fair recognition 
            and professional rights of skilled spa therapists and wellness practitioners in Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
          {/* Main Content */}
          <div className="space-y-6">
            <div className="glass-effect rounded-2xl p-6 md:p-8 shadow-sm">
              <div className="flex items-start space-x-4 mb-6 md:mb-8">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0A1428] to-[#1a2a4e] rounded-xl flex items-center justify-center text-white shadow-lg">
                  <FiUsers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-medium mb-3 text-[#0A1428]">
                    The Professional Recognition Challenge
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base md:text-lg font-light">
                    Despite completing extensive professional training and earning nationally and internationally recognized 
                    certifications, many talented individuals within the spa and wellness industry are not being properly 
                    recognized for their skills and qualifications.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200/50 rounded-xl p-4 md:p-6 shadow-sm">
                <h4 className="font-medium text-yellow-800 mb-2 flex items-center text-sm md:text-base">
                  <FiTrendingUp className="w-4 h-4 mr-2" />
                  Impact on Professionals
                </h4>
                <p className="text-yellow-700 text-sm md:text-base font-light">
                  This lack of recognition has led to limited career growth opportunities, unjust treatment, 
                  and inequality in employment across various institutions and establishments.
                </p>
              </div>
            </div>

            {/* LSA Stand */}
            <div className="glass-effect rounded-2xl p-6 md:p-8 text-white shadow-sm" style={{background: 'linear-gradient(135deg, #0A1428 0%, #1a2a4e 100%)'}}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#D4AF37] to-[#e6c158] rounded-xl flex items-center justify-center shadow-lg">
                  <FiShield className="w-5 h-5 text-[#0A1428]" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-medium mb-3">
                    The LSA Stand
                  </h3>
                  <p className="text-gray-200 leading-relaxed text-base md:text-lg font-light">
                    The Lanka Spa Association, as the industry's regulatory body, has taken a firm stand to urge the 
                    Sri Lankan Government and relevant authorities to implement fair policies that acknowledge the 
                    professional status of qualified spa therapists.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Advocacy Points */}
          <div>
            <h3 className="text-2xl md:text-3xl font-medium mb-6 lg:mb-8 text-[#0A1428] text-center lg:text-left">
              Our Advocacy <span className="gradient-text">Objectives</span>
            </h3>
            
            <div className="space-y-6">
              {advocacyPoints.map((point, index) => (
                <div
                  key={index}
                  className={`group relative ${
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  }`}
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Main Card */}
                  <div className="glass-effect rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl border border-[#D4AF37]/20">
                    <div className="flex items-start space-x-4 mb-4">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${point.gradient} flex items-center justify-center shadow-lg`}>
                          <div className="text-white">
                            {point.icon}
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1">
                        <h4 className="text-lg md:text-xl font-medium mb-2 text-[#0A1428]">{point.title}</h4>
                        <p className="text-gray-600 text-sm md:text-base font-light">{point.description}</p>
                      </div>
                    </div>
                    
                    {/* Hover effect background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
                    
                    {/* Corner accents */}
                    <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                      <div className="absolute top-0 right-0 w-6 h-6 bg-[#D4AF37] opacity-20 group-hover:opacity-40 transition-opacity duration-500 transform rotate-45 translate-x-3 -translate-y-3"></div>
                    </div>
                    <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#D4AF37] opacity-20 group-hover:opacity-40 transition-opacity duration-500 transform rotate-45 -translate-x-3 translate-y-3"></div>
                    </div>
                  </div>
                  
                  {/* Floating gradient effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${point.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 -z-20`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 text-[#0A1428] shadow-sm relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0A1428 0%, #1a2a4e 100%)', color: 'white'}}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4AF37] rounded-full -translate-x-16 -translate-y-16 blur"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#D4AF37] rounded-full translate-x-24 translate-y-24 blur"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h3 className="text-2xl md:text-3xl font-medium mb-4">
                Stand With <span className="text-[#D4AF37]">Skilled Professionals</span>
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed font-light">
                The Lanka Spa Association remains committed to standing with the skilled workforce and ensuring that 
                their dedication, training, and contribution to Sri Lanka's growing wellness sector are properly valued and respected.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/about"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#e6c158] text-[#0A1428] font-semibold rounded-2xl hover:from-[#0A1428] hover:to-[#1a2a4e] hover:text-white transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-[#D4AF37] hover:border-[#0A1428] text-center"
              >
                <span className="mr-3">Support Our Cause</span>
                <FiArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                to="/standards"
                className="group inline-flex items-center px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-2xl hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#e6c158] hover:text-[#0A1428] transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                <span className="mr-3">Learn About Standards</span>
                <FiArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FightWithGovernment;
