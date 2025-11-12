
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiUsers, FiAward, FiBriefcase, FiHeart, FiArrowRight } from 'react-icons/fi';

const PurposeMission = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const missions = [
    {
      icon: <FiShield className="w-5 h-5" />,
      title: "Regulate & Monitor",
      description: "Regulate and monitor all spas operating in Sri Lanka to ensure industry standards",
      gradient: "from-[#D4AF37] via-[#e6c158] to-[#f4d03f]"
    },
    {
      icon: <FiUsers className="w-5 h-5" />,
      title: "Industry Representation",
      description: "Represent the spa industry in legal, governmental, and social forums",
      gradient: "from-[#0A1428] via-[#1a2a4e] to-[#2c3e50]"
    },
    {
      icon: <FiAward className="w-5 h-5" />,
      title: "Compliance & Standards",
      description: "Ensure compliance with national laws, health standards, and ethical practices",
      gradient: "from-[#D4AF37] via-[#e6c158] to-[#f4d03f]"
    },
    {
      icon: <FiBriefcase className="w-5 h-5" />,
      title: "Legal Support",
      description: "Provide legal defense and mediation for member spas facing official or legal issues",
      gradient: "from-[#0A1428] via-[#1a2a4e] to-[#2c3e50]"
    },
    {
      icon: <FiHeart className="w-5 h-5" />,
      title: "Professional Network",
      description: "Establish a professional network for growth and collaboration in the spa and wellness sector",
      gradient: "from-[#D4AF37] via-[#e6c158] to-[#f4d03f]"
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
        <div className="text-center mb-0 lg:mb-16">
          <div className="inline-flex items-center mb-6 px-4 py-2 bg-white/60 rounded-full border border-[#D4AF37]/20 shadow-sm">
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></div>
            <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">Regulatory Framework</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            Our Purpose & <span className="gradient-text font-semibold">Mission</span>
          </h2>
          <div className="w-20 md:w-24 lg:w-32 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            The Lanka Spa Association serves as the authoritative regulatory body committed to 
            excellence, integrity, and professional development within Sri Lanka's spa industry.
          </p>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Left Column */}
          <div className="space-y-6">
            {missions.slice(0, 3).map((mission, index) => (
              <div key={index} className={`group relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: `${index * 200}ms`}}>
                {/* Main Card */}
                <div className="glass-effect rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl border border-[#D4AF37]/20">
                  <div className="flex items-start space-x-4 md:space-x-6 mb-4 md:mb-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${mission.gradient} flex items-center justify-center shadow-lg`}>
                        <div className="text-white">
                          {mission.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-medium mb-2 text-[#0A1428]">{mission.title}</h3>
                      <p className="text-gray-600 mb-4 md:mb-6 flex-grow text-sm md:text-base font-light">{mission.description}</p>
                      
                      {/* Button */}
                      <Link
                        to="/standards"
                        className="group/btn inline-flex items-center text-[#D4AF37] font-medium hover:text-[#BF9B30] transition-colors text-sm md:text-base"
                      >
                        Learn More
                        <FiArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Hover effect background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${mission.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                    <div className="absolute top-0 right-0 w-6 h-6 bg-[#D4AF37] opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45 translate-x-3 -translate-y-3"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#D4AF37] opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45 -translate-x-3 translate-y-3"></div>
                  </div>
                </div>
                
                {/* Floating gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${mission.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 -z-20`}></div>
              </div>
            ))}
          </div>
          
          {/* Right Column */}
          <div className="space-y-6">
            {missions.slice(3).map((mission, index) => (
              <div key={index + 3} className={`group relative ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{animationDelay: `${(index + 3) * 200}ms`}}>
                {/* Main Card */}
                <div className="glass-effect rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl border border-[#D4AF37]/20">
                  <div className="flex items-start space-x-4 md:space-x-6 mb-4 md:mb-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${mission.gradient} flex items-center justify-center shadow-lg`}>
                        <div className="text-white">
                          {mission.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-medium mb-2 text-[#0A1428]">{mission.title}</h3>
                      <p className="text-gray-600 mb-4 md:mb-6 flex-grow text-sm md:text-base font-light">{mission.description}</p>
                      
                      {/* Button */}
                      <Link
                        to="/learn-more"
                        className="group/btn inline-flex items-center text-[#D4AF37] font-medium hover:text-[#BF9B30] transition-colors text-sm md:text-base"
                      >
                        Learn More
                        <FiArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                  
                  {/* Hover effect background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${mission.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                    <div className="absolute top-0 right-0 w-6 h-6 bg-[#D4AF37] opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45 translate-x-3 -translate-y-3"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden">
                    <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#D4AF37] opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45 -translate-x-3 translate-y-3"></div>
                  </div>
                </div>
                
                {/* Floating gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${mission.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 -z-20`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 text-[#0A1428] shadow-sm relative overflow-hidden" style={{background: 'linear-gradient(135deg, #0A1428 0%, #1a2a4e 100%)', color: 'white'}}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4AF37] rounded-full -translate-x-16 -translate-y-16 blur"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#D4AF37] rounded-full translate-x-24 translate-y-24 blur"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h3 className="text-2xl md:text-3xl font-medium mb-4">
                Join the Official <span className="text-[#D4AF37]">Network</span>
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed font-light">
                Connect with Lanka Spa Association to access regulatory support, legal representation, 
                and professional development opportunities for your spa establishment.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/registration"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#e6c158] text-[#0A1428] font-semibold rounded-2xl hover:from-[#0A1428] hover:to-[#1a2a4e] hover:text-white transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-[#D4AF37] hover:border-[#0A1428] text-center"
              >
                <span className="mr-3">Register Your Spa</span>
                <FiArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-2xl hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#e6c158] hover:text-[#0A1428] transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                <span className="mr-3">Contact us</span>
                <FiArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeMission;
