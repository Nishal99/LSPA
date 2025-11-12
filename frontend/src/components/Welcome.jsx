
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import assets from '../assets/images/images';

const Welcome = () => {
  const welcomeRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

    if (welcomeRef.current) {
      observer.observe(welcomeRef.current);
    }

    return () => {
      if (welcomeRef.current) {
        observer.unobserve(welcomeRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        if (logoRef.current) {
          logoRef.current.classList.add('animate-fade-in-up');
        }
      }, 200);

      const textTimer = setTimeout(() => {
        if (textRef.current) {
          textRef.current.classList.add('animate-fade-in-up');
        }
      }, 400);

      const buttonTimer = setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.classList.add('animate-fade-in-up');
        }
      }, 600);

      return () => {
        clearTimeout(timer);
        clearTimeout(textTimer);
        clearTimeout(buttonTimer);
      };
    }
  }, [isVisible]);

  return (
    <div ref={welcomeRef} className="w-full bg-white py-20 md:py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
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
        
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .animate-subtle-float {
          animation: subtleFloat 4s ease-in-out infinite;
        }
        
        .official-badge {
          position: relative;
          display: inline-block;
        }
        
        .official-badge::after {
          content: '';
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #D4AF37, transparent);
          border-radius: 1px;
        }
        
        .logo-glow {
          filter: drop-shadow(0 4px 12px rgba(212, 175, 55, 0.1));
        }
        
        .stat-card {
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.1);
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.1);
          border-color: rgba(212, 175, 55, 0.2);
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #0A1428 0%, #1a2a4e 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          {/* Refined Logo Section */}
          <div 
            ref={logoRef}
            className="logo-container flex-shrink-0 opacity-0 transition-all duration-700"
          >
            <div className="relative">
              <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-2xl bg-white/80 p-4 md:p-6 flex items-center justify-center shadow-lg logo-glow stat-card animate-subtle-float border border-gray-100/50">
                <img 
                  src={assets.logo_trans} 
                  alt="Lanka Spa Association Official Logo" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center">
                  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3/4 h-3/4">
                    <path d="M50 15L65 40H35L50 15Z" fill="#0A1428" />
                    <path d="M35 40L15 60H35V40Z" fill="#0A1428" />
                    <path d="M65 40V60H85L65 40Z" fill="#0A1428" />
                    <path d="M35 60V80H65V60H35Z" fill="#0A1428" />
                    <circle cx="50" cy="50" r="8" fill="#D4AF37" />
                    <circle cx="50" cy="50" r="4" fill="#0A1428" />
                  </svg>
                </div>
              </div>
              
              {/* Subtle corner accents - Reduced for cleanliness */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t border-l border-[#D4AF37]/50 rounded-tl"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t border-r border-[#D4AF37]/50 rounded-tr"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-[#D4AF37]/50 rounded-bl"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b border-r border-[#D4AF37]/50 rounded-br"></div>
            </div>
          </div>
          
          {/* Refined Content Section */}
          <div className="flex-1 text-center lg:text-left lg:w-2/3">
            <div ref={textRef} className="welcome-content opacity-0">
              {/* Clean Badge */}
              <div className="inline-flex items-center mb-6 px-4 py-2 bg-white/60 rounded-full border border-[#D4AF37]/20 shadow-sm">
                <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></div>
                <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">Official Regulatory Body</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-gray-900 mb-6 leading-tight">
                Welcome to the{' '}
                <span className="official-badge font-semibold gradient-text block lg:inline">
                  Lanka Spa Association
                </span>
              </h1>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto lg:mx-0">
                  Established on <span className="font-semibold text-[#0A1428]">12th November 2012</span>, Lanka Spa Association (LSA) is the premier regulatory body for spa establishments across Sri Lanka.
                </p>
                
                <div className="bg-white/70 p-6 rounded-xl border-l-4 border-[#D4AF37]/30 shadow-sm backdrop-blur-sm">
                  <p className="text-base text-gray-700 leading-relaxed">
                    We unite spa professionals under a unified framework to uphold the highest standards of quality, safety, and ethical practice while fostering sustainable growth in the wellness industry.
                  </p>
                </div>
                
                {/* Refined Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 max-w-lg">
                  <div className="stat-card p-5 rounded-xl text-center">
                    <div className="text-2xl font-semibold text-[#0A1428]">GA 2756</div>
                    <div className="text-sm text-gray-500 mt-1">Registration Number</div>
                  </div>
                  <div className="stat-card p-5 rounded-xl text-center">
                    <div className="text-2xl font-semibold text-[#0A1428]">2012</div>
                    <div className="text-sm text-gray-500 mt-1">Established</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div ref={buttonRef} className="welcome-button mt-10 opacity-0">
              <Link
                to="/about"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#e6c158] text-[#0A1428] font-semibold rounded-2xl hover:from-[#0A1428] hover:to-[#1a2a4e] hover:text-white transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-[#D4AF37] hover:border-[#0A1428]"
              >
                <span className="mr-3">About Our Organization</span>
                <FiArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              
              {/* Clean Feature Tags */}
              <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start">
                <div className="flex items-center text-sm text-gray-600 font-medium">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2 flex-shrink-0"></div>
                  Regulatory Excellence
                </div>
                <div className="flex items-center text-sm text-gray-600 font-medium">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2 flex-shrink-0"></div>
                  Professional Standards
                </div>
                <div className="flex items-center text-sm text-gray-600 font-medium">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2 flex-shrink-0"></div>
                  Industry Leadership
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
