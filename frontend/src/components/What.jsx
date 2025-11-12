
import React, { useState, useEffect, useRef } from 'react';
import { FiChevronLeft, FiChevronRight, FiAward } from 'react-icons/fi';
import assets from '../assets/images/images';

const What = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const directorsContainerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleDirectors, setVisibleDirectors] = useState(3); // Default for large screens

  // Sample data - replace with actual data
  const ceoData = {
    name: "Mr. Prasanna Munasinghe",
    title: "Chief Executive Officer/Chairman",
    message: "At Lanka Spa Association, we are dedicated to promoting the highest standards of wellness and relaxation across Sri Lanka. Our mission is to elevate the spa industry through education, innovation, and collaboration. With our team of dedicated professionals, we strive to create transformative experiences that honor both traditional Ayurvedic practices and modern wellness techniques.",
    image: assets.ayura_owner,
  };

  const directorsData = [
    {
      id: 1,
      name: "Mr. Nishantha Punchihewa",
      title: "Vice Precident",
      image: assets.D_nishanthaP,
    },
    {
      id: 2,
      name: "Mr. W.A. Nishantha Ruwan",
      title: "Director (Operaon)",
      image: assets.nishantha_ruwan
    },
    {
      id: 3,
      name: "Mr. A.M.A.D Nalin Kumara",
      title: "Director/ National Organizer",
      image: assets.D_nalin,
    },
    {
      id: 4,
      name: "Ms. Nayomi Sanjula",
      title: "Deputy Secretary",
      image: assets.nayomi_sanjula,
    },
  ];

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleDirectors(1); // Mobile: show 1 director
      } else if (window.innerWidth < 1024) {
        setVisibleDirectors(2); // Tablet: show 2 directors
      } else {
        setVisibleDirectors(3); // Desktop: show 3 directors
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll the directors
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % directorsData.length);
    }, 3000); // Increased to 4s for better UX
    
    return () => clearInterval(interval);
  }, [isPaused, directorsData.length]);

  const nextDirector = () => {
    setCurrentIndex((prev) => (prev + 1) % directorsData.length);
  };

  const prevDirector = () => {
    setCurrentIndex((prev) => (prev - 1 + directorsData.length) % directorsData.length);
  };

  // Calculate transform value based on visible directors
  const getTransformValue = () => {
    return `translateX(-${currentIndex * (100 / visibleDirectors)}%)`;
  };

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#0A1428] to-[#152340] text-white overflow-hidden relative">
      {/* Subtle background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D4AF37]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        .bg-grid-pattern {
          background-image: 
            linear-gradient(rgba(212, 175, 55, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        @keyframes subtleGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(212, 175, 55, 0.1); }
          50% { box-shadow: 0 0 30px rgba(212, 175, 55, 0.2); }
        }
        
        .animate-subtle-glow {
          animation: subtleGlow 4s ease-in-out infinite;
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* CEO Section - Full Width */}
        <div className="mb-20 lg:mb-28">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">Our Leadership</h2>
            <div className="w-24 md:w-32 lg:w-40 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-2xl mx-auto text-sm md:text-base font-light">
              Guiding Lanka Spa Association with vision, expertise, and unwavering commitment to excellence
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            <div className="lg:w-2/5 relative">
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto overflow-hidden rounded-3xl shadow-2xl glass-effect animate-subtle-glow">
                <img 
                  src={ceoData.image} 
                  alt={ceoData.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428]/80 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-3 -right-3 md:-bottom-4 md:-right-4 lg:-bottom-5 lg:-right-5 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] text-[#0A1428] px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4 rounded-xl md:rounded-2xl font-semibold text-base md:text-lg lg:text-xl shadow-xl flex items-center gap-2">
                <FiAward className="text-base md:text-lg lg:text-xl" />
                <span>Chief Executive Officer/Chairman</span>
              </div>
              <div className="absolute -top-3 -left-3 md:-top-4 md:-left-4 lg:-top-5 lg:-left-5 w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] rounded-full flex items-center justify-center text-[#0A1428] text-lg md:text-xl lg:text-2xl font-bold shadow-lg">
                LSA
              </div>
            </div>
            
            <div className="lg:w-3/5 text-center lg:text-left">
              <div className="mb-6 md:mb-8">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light mb-3">{ceoData.name}</h3>
                <div className="w-20 md:w-24 lg:w-28 h-1 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] mb-4 mx-auto lg:mx-0"></div>
                <p className="text-[#D4AF37] font-medium text-lg md:text-xl italic">Chief Executive Officer</p>
              </div>
              
              <div className="relative glass-effect p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-[#D4AF37]/20">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] rounded-t-2xl md:rounded-t-3xl"></div>
                <div className="absolute top-4 md:top-6 -left-4 md:-left-6 text-5xl md:text-6xl lg:text-7xl text-[#D4AF37] opacity-10">"</div>
                <p className="text-gray-200 leading-relaxed text-base md:text-lg lg:text-xl font-light italic relative z-10">
                  {ceoData.message}
                </p>
                <div className="absolute bottom-4 md:bottom-6 -right-4 md:-right-6 text-5xl md:text-6xl lg:text-7xl text-[#D4AF37] opacity-10">"</div>
                
                {/* Elegant corner accents */}
                <div className="absolute top-2 md:top-3 left-2 md:left-3 w-2 h-2 md:w-3 md:h-3 border-t-2 border-l-2 border-[#D4AF37]/50"></div>
                <div className="absolute top-2 md:top-3 right-2 md:right-3 w-2 h-2 md:w-3 md:h-3 border-t-2 border-r-2 border-[#D4AF37]/50"></div>
                <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 w-2 h-2 md:w-3 md:h-3 border-b-2 border-l-2 border-[#D4AF37]/50"></div>
                <div className="absolute bottom-2 md:bottom-3 right-2 md:right-3 w-2 h-2 md:w-3 md:h-3 border-b-2 border-r-2 border-[#D4AF37]/50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Directors Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-light mb-4">Board of Directors</h3>
          <div className="w-24 md:w-32 lg:w-40 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base font-light">
            Our distinguished board of visionaries steering Lanka Spa Association toward unparalleled excellence in wellness
          </p>
        </div>

        <div 
          className="relative px-4 md:px-8 lg:px-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden py-8 md:py-10">
            <div 
              ref={directorsContainerRef}
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: getTransformValue() }}
            >
              {directorsData.map((director, index) => (
                <div key={director.id} className={`flex-shrink-0 px-4 md:px-6 lg:px-8 ${visibleDirectors === 1 ? 'w-full' : visibleDirectors === 2 ? 'w-1/2' : 'w-1/3'}`}>
                  <div className="flex flex-col items-center group cursor-pointer">
                    <div className="relative mb-6 md:mb-8 lg:mb-10">
                      <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-transparent shadow-2xl glass-effect group-hover:border-[#D4AF37]/50 transition-all duration-700 group-hover:shadow-[#D4AF37]/20">
                        <img
                          src={director.image}
                          alt={director.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1428]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>
                      <div className="absolute -inset-2 md:-inset-3 lg:-inset-4 border-2 border-[#D4AF37]/30 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-90 group-hover:scale-100"></div>
                      <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 lg:-bottom-4 lg:-right-4 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] rounded-full flex items-center justify-center text-[#0A1428] font-bold text-sm md:text-base lg:text-lg shadow-lg">
                        {director.id}
                      </div>
                    </div>
                    <div className="text-center">
                      <h4 className="font-light text-xl md:text-2xl lg:text-3xl mb-2 md:mb-3 group-hover:text-[#D4AF37] transition-colors duration-500">{director.name}</h4>
                      <p className="text-[#D4AF37] font-medium text-sm md:text-base border-t border-[#2a3b5f]/50 pt-2 md:pt-3 inline-block tracking-wide">{director.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation arrows - refined styling */}
          <button
            onClick={prevDirector}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-xl p-3 md:p-4 lg:p-5 rounded-full hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-all duration-300 shadow-xl border border-white/20 hidden sm:block hover:scale-110"
          >
            <FiChevronLeft className="text-lg md:text-xl lg:text-2xl" />
          </button>
          <button
            onClick={nextDirector}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-xl p-3 md:p-4 lg:p-5 rounded-full hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-all duration-300 shadow-xl border border-white/20 hidden sm:block hover:scale-110"
          >
            <FiChevronRight className="text-lg md:text-xl lg:text-2xl" />
          </button>
        </div>

        {/* Mobile navigation buttons - refined */}
        <div className="flex justify-center mt-8 sm:hidden gap-4">
          <button
            onClick={prevDirector}
            className="bg-white/10 backdrop-blur-xl p-3 rounded-full hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-all duration-300 shadow-lg border border-white/20"
          >
            <FiChevronLeft className="text-xl" />
          </button>
          <button
            onClick={nextDirector}
            className="bg-white/10 backdrop-blur-xl p-3 rounded-full hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] transition-all duration-300 shadow-lg border border-white/20"
          >
            <FiChevronRight className="text-xl" />
          </button>
        </div>

        {/* Indicator dots - premium styling */}
        <div className="flex justify-center mt-10 md:mt-12 lg:mt-16 space-x-3 md:space-x-4">
          {directorsData.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5 rounded-full transition-all duration-500 ${
                i === currentIndex 
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] scale-125 shadow-lg shadow-[#D4AF37]/50' 
                  : 'bg-white/20 hover:bg-[#D4AF37]/50 hover:scale-110'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default What;
