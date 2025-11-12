
import React from 'react';
import { Link } from 'react-router-dom';
import { FiUserPlus, FiMail, FiBookOpen, FiArrowRight } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Spa Registration",
      description: "Register your spa with Lanka Spa Association to gain access to exclusive benefits, industry recognition, and professional resources.",
      icon: <FiUserPlus className="w-5 h-5" />,
      link: "/registration",
      buttonText: "Register Now",
      gradient: "from-[#D4AF37] to-[#e6c158]"
    },
    {
      id: 2,
      title: "Contact Us",
      description: "Get in touch with our team for inquiries, support, or partnership opportunities. We're here to help you grow your spa business.",
      icon: <FiMail className="w-5 h-5" />,
      link: "/contact",
      buttonText: "Contact Us",
      gradient: "from-[#0A1428] to-[#1a2a4e]"
    },
    {
      id: 3,
      title: "Instructions & Guidelines",
      description: "Access comprehensive guidelines, standards, and best practices for operating a spa in accordance with industry regulations.",
      icon: <FiBookOpen className="w-5 h-5" />,
      link: "/instructions",
      buttonText: "View Guidelines",
      gradient: "from-[#D4AF37] to-[#e6c158]"
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-[#0A1428] to-[#152340] text-white relative overflow-hidden">
      {/* Subtle Background decorative elements */}
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
            Spa <span className="gradient-text font-semibold">Resources</span> & Services
          </h2>
          <div className="w-20 md:w-24 lg:w-32 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Access essential resources and services to elevate your spa business with Lanka Spa Association
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service) => (
            <div key={service.id} className="group relative">
              {/* Main Card */}
              <div className="glass-effect rounded-2xl p-6 md:p-8 lg:p-10 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl border border-[#D4AF37]/20">
                {/* Icon */}
                <div className="mb-4 md:mb-6">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg md:text-xl font-medium mb-2 text-white">{service.title}</h3>
                <p className="text-gray-300 mb-4 md:mb-6 flex-grow text-sm md:text-base font-light">{service.description}</p>
                
                {/* Button */}
                <Link
                  to={service.link}
                  className="group/btn inline-flex items-center text-[#D4AF37] font-medium hover:text-[#BF9B30] transition-colors text-sm md:text-base"
                >
                  {service.buttonText}
                  <FiArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
                
                {/* Hover effect background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
                
                {/* Corner accents */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-6 h-6 bg-[#D4AF37] opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45 translate-x-3 -translate-y-3"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#D4AF37] opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45 -translate-x-3 translate-y-3"></div>
                </div>
              </div>
              
              {/* Floating gradient effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 -z-20`}></div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        
      </div>
    </section>
  );
};

export default Services;
