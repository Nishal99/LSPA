import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiFileText,
  FiDownload,
  FiCheckCircle,
  FiBookOpen,
  FiBell,
  FiPhone,
  FiChevronLeft,
  FiChevronRight,
  FiArrowRight,
} from 'react-icons/fi';

const QuickLinksCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const quickLinks = [
    {
      icon: <FiFileText className="w-5 h-5" />,
      title: "Membership Registration",
      description:
        "Register your spa with the official regulatory body to gain access to exclusive benefits and industry recognition.",
      gradient: "from-[#D4AF37] to-[#e6c158]",
      action: "/registration",
    },
    {
      icon: <FiDownload className="w-5 h-5" />,
      title: "Download Application",
      description:
        "Get the official membership application forms and required documentation for spa registration.",
      gradient: "from-[#0A1428] to-[#1a2a4e]",
      action: "/registration",
    },
    {
      icon: <FiCheckCircle className="w-5 h-5" />,
      title: "Membership Verification",
      description:
        "Verify registered spa establishments and check the authenticity of membership status.",
      gradient: "from-[#D4AF37] to-[#e6c158]",
      action: "/verification",
    },
    {
      icon: <FiBookOpen className="w-5 h-5" />,
      title: "Legal Standards & Guidelines",
      description:
        "Access comprehensive industry regulations, compliance documents, and operational guidelines.",
      gradient: "from-[#0A1428] to-[#1a2a4e]",
      action: "/standards",
    },
    {
      icon: <FiBell className="w-5 h-5" />,
      title: "News & Updates",
      description:
        "Stay informed with the latest industry news, association updates, and important announcements.",
      gradient: "from-[#D4AF37] to-[#e6c158]",
      action: "/blog",
    },
    {
      icon: <FiPhone className="w-5 h-5" />,
      title: "Contact Hotline",
      description:
        "Get immediate assistance from our dedicated support team for inquiries and support.",
      gradient: "from-[#0A1428] to-[#1a2a4e]",
      action: "/contact",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % quickLinks.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + quickLinks.length) % quickLinks.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  const getVisibleSlides = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 768) return 2;
      if (window.innerWidth >= 640) return 2;
    }
    return 1;
  };

  const visibleSlides = getVisibleSlides();
  const totalSlides = quickLinks.length;

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#0A1428] to-[#152340] text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#D4AF37]/3 rounded-full -translate-x-1/2 -translate-y-1/2 blur-xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0A1428]/3 rounded-full translate-x-1/3 translate-y-1/3 blur-xl"></div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }

        .glass-effect:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212, 175, 55, 0.1);
          border-color: rgba(212, 175, 55, 0.2);
        }

        .gradient-text {
          background: linear-gradient(135deg, #D4AF37 0%, #e6c158 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            <span className="gradient-text font-semibold">Quick</span> Access Links
          </h2>
          <div className="w-20 md:w-24 lg:w-32 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Easy access to essential resources and services for spa establishments with Lanka Spa Association
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 glass-effect rounded-full shadow-lg flex items-center justify-center text-white hover:text-[#D4AF37] transition-all duration-300 group hover:scale-110"
          >
            <FiChevronLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 glass-effect rounded-full shadow-lg flex items-center justify-center text-white hover:text-[#D4AF37] transition-all duration-300 group hover:scale-110"
          >
            <FiChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
              }}
            >
              {quickLinks.map((link, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / visibleSlides}%` }}
                >
                  <div className="group relative h-full">
                    <div className="glass-effect rounded-2xl p-6 md:p-8 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl border border-[#D4AF37]/20">
                      {/* Icon */}
                      <div className="mb-4 md:mb-6">
                        <div
                          className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-lg`}
                        >
                          {link.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-lg md:text-xl font-medium mb-2 text-white">
                        {link.title}
                      </h3>
                      <p className="text-gray-300 mb-4 md:mb-6 flex-grow text-sm md:text-base font-light">
                        {link.description}
                      </p>

                      {/* Button */}
                      <Link
                        to={link.action}
                        className="group/btn inline-flex items-center text-[#D4AF37] font-medium hover:text-[#BF9B30] transition-colors text-sm md:text-base"
                      >
                        Access Now
                        <FiArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </Link>

                      {/* Hover Effects */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${link.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}
                      ></div>
                      <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                        <div className="absolute top-0 right-0 w-6 h-6 bg-[#D4AF37] opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45 translate-x-3 -translate-y-3"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden">
                        <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#D4AF37] opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45 -translate-x-3 translate-y-3"></div>
                      </div>
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${link.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 -z-20`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 lg:mt-12 space-x-3">
            {Array.from({ length: Math.ceil(totalSlides / visibleSlides) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index * visibleSlides)}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-500 ${
                  Math.floor(currentSlide / visibleSlides) === index
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#e6c158] scale-125 shadow-lg shadow-[#D4AF37]/50'
                    : 'bg-white/20 hover:bg-[#D4AF37]/50 hover:scale-110'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 lg:mt-16 pt-8 lg:pt-12 border-t border-white/10">
          <div className="text-center glass-effect rounded-xl p-4 md:p-6">
            <div className="text-2xl md:text-3xl font-semibold text-[#D4AF37]">200+</div>
            <div className="text-sm md:text-base text-gray-300 mt-1">Registered Spas</div>
          </div>
          <div className="text-center glass-effect rounded-xl p-4 md:p-6">
            <div className="text-2xl md:text-3xl font-semibold text-[#D4AF37]">12+</div>
            <div className="text-sm md:text-base text-gray-300 mt-1">Years Experience</div>
          </div>
          <div className="text-center glass-effect rounded-xl p-4 md:p-6">
            <div className="text-2xl md:text-3xl font-semibold text-[#D4AF37]">24/7</div>
            <div className="text-sm md:text-base text-gray-300 mt-1">Support</div>
          </div>
          <div className="text-center glass-effect rounded-xl p-4 md:p-6">
            <div className="text-2xl md:text-3xl font-semibold text-[#D4AF37]">100%</div>
            <div className="text-sm md:text-base text-gray-300 mt-1">Compliance</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuickLinksCarousel;
