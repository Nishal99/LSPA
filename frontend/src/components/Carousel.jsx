
import React, { useState, useEffect } from 'react';
import assets from '../assets/images/images';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState('next');
  
  const slides = [
    {
      title: "Luxury Spa Experiences",
      description: "Discover premium wellness treatments from Sri Lanka's finest spa professionals, curated for your ultimate relaxation and rejuvenation.",
      buttonText: "Explore Services",
      link: "/services",
      image: assets.c1,
    },
    {
      title: "Certified Spa Professionals",
      description: "Connect with highly trained and certified therapists who bring authentic Sri Lankan wellness traditions to modern spa experiences.",
      buttonText: "Meet Our Therapists",
      link: "/verified-spas",
      image: assets.c2,
    },
    {
      title: "Award-Winning Wellness",
      description: "Experience our internationally recognized spa treatments that have earned numerous accolades in the global wellness industry.",
      buttonText: "View Awards",
      link: "/about",
      image: assets.c3,
    },
    {
      title: "Exclusive Membership",
      description: "Join our prestigious association to access exclusive benefits, training programs, and networking opportunities in the spa industry.",
      buttonText: "Become a Member",
      link: "/registration",
      image: assets.c4,
    }
  ];

  // Auto-advance slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextSlide();
    }, 3000);
    
    return () => clearInterval(timer);
  }, []);

  const handleNextSlide = () => {
    if (isTransitioning) return;
    setDirection('next');
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const handlePrevSlide = () => {
    if (isTransitioning) return;
    setDirection('prev');
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const goToSlide = (index) => {
    if (index !== currentSlide && !isTransitioning) {
      setDirection(index > currentSlide ? 'next' : 'prev');
      setIsTransitioning(true);
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 600);
    }
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative w-full h-screen max-h-[800px] overflow-hidden bg-gray-900 font-poppins">
      {/* Custom Styles - Simplified for Clean, Professional Look */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        @keyframes slideInFromRight {
          from { 
            opacity: 0;
            transform: translateX(40px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInFromLeft {
          from { 
            opacity: 0;
            transform: translateX(-40px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes subtleFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-slide-right {
          animation: slideInFromRight 0.6s ease-out both;
        }
        
        .animate-slide-left {
          animation: slideInFromLeft 0.6s ease-out both;
        }
        
        .animate-subtle-float {
          animation: subtleFloat 4s ease-in-out infinite;
        }
        
        .text-gold-gradient {
          background: linear-gradient(135deg, #D4AF37 0%, #e6c158 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .premium-gold {
          background: linear-gradient(135deg, #D4AF37 0%, #e6c158 100%);
        }
      `}</style>

      {/* Main Slides Container - Cleaner Overlays */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-600 ease-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Background Image with Subtle Parallax Float */}
            <div 
              className={`absolute inset-0 bg-cover bg-center ${
                index === currentSlide ? 'animate-subtle-float' : ''
              }`}
              style={{ 
                backgroundImage: `url(${slide.image})`,
              }}
            />
            
            {/* Simplified Gradient Overlays for Professional Depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/95 to-transparent z-10" />
            
            {/* Minimal Geometric Accent - Reduced for Cleanliness */}
            <div className="absolute inset-0 z-10 opacity-5">
              <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-white/10 rounded-full" />
              <div className="absolute bottom-1/3 right-1/3 w-16 h-16 border border-white/5 rotate-45" />
            </div>
          </div>
        ))}
      </div>

      {/* Content Container - Cleaner Layout - Render only current slide */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="max-w-3xl">
            <div
              key={currentSlide}
              className={`${direction === 'next' ? 'animate-slide-right' : 'animate-slide-left'}`}
            >
              {/* Simplified Premium Badge */}
              <div className="flex items-center mb-8">
                <div className="w-20 h-0.5 premium-gold mr-4" />
                <div className="glass-morphism px-3 py-1.5 rounded-full">
                  <span className="text-gold-gradient text-xs font-semibold tracking-widest uppercase">
                    Elite Wellness
                  </span>
                </div>
              </div>

              {/* Clean Title Typography */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight">
                <span className="block opacity-95">
                  {currentSlideData.title}
                </span>
              </h1>

              {/* Refined Description */}
              <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 font-light max-w-2xl tracking-wide">
                {currentSlideData.description}
              </p>

              {/* Updated Button Stylings - Matching the Provided Example */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <a
  href={currentSlideData.link}
  className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#e6c158] text-[#0A1428] font-bold rounded-2xl 
             hover:from-[#0A1428] hover:to-[#1a2a4e] hover:text-white 
             transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 
             border-2 border-[#D4AF37] hover:border-[#D4AF37] overflow-hidden"
>
  <span className="mr-3">{currentSlideData.buttonText}</span>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
</a>

                
                <button className="group inline-flex items-center px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-bold rounded-2xl hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#e6c158] hover:text-[#0A1428] transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  <span className="mr-3">Learn More</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-2 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Refined Navigation Panel - Cleaner and More Professional */}
      <div className="absolute bottom-8 left-0 right-0 z-30">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between">
            {/* Simplified Dots */}
            <div className="flex space-x-4 items-center">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="group relative flex flex-col items-center transition-all duration-300"
                >
                  <div
                    className={`h-1 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? 'w-12 bg-[#D4AF37] shadow-md'
                        : 'w-6 bg-white/30 group-hover:bg-[#D4AF37]/70 group-hover:w-8'
                    }`}
                  />
                  <div className={`text-xs font-medium tracking-widest mt-1 transition-opacity duration-300 ${
                    currentSlide === index 
                      ? 'text-[#D4AF37] opacity-100' 
                      : 'text-white/50 opacity-0 group-hover:opacity-100'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </button>
              ))}
            </div>

            {/* Clean Navigation Arrows */}
            <div className="flex space-x-3">
              <button
                onClick={handlePrevSlide}
                disabled={isTransitioning}
                className="p-3 glass-morphism text-white rounded-xl transition-all duration-300 hover:bg-white/10 hover:scale-110 disabled:opacity-40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={handleNextSlide}
                disabled={isTransitioning}
                className="p-3 glass-morphism text-white rounded-xl transition-all duration-300 hover:bg-white/10 hover:scale-110 disabled:opacity-40"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal Slide Counter */}
      <div className="absolute top-8 right-8 z-30">
        <div className="glass-morphism rounded-xl px-4 py-3">
          <div className="text-white/70 text-xs font-medium tracking-widest uppercase mb-1">
            Slide
          </div>
          <div className="text-white text-lg font-light">
            <span className="text-[#D4AF37] font-semibold">{String(currentSlide + 1).padStart(2, '0')}</span>
            <span className="mx-2 text-white/40">/</span>
            {String(slides.length).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Reduced Floating Elements for Cleanliness */}
      <div className="absolute top-16 left-16 z-15 opacity-10">
        <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse" />
      </div>
      <div className="absolute bottom-48 right-24 z-15 opacity-10">
        <div className="w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse" />
      </div>
    </div>
  );
};

export default Carousel;
