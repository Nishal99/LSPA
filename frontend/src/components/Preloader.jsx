import { useState, useEffect } from "react";
import assets from "../assets/images/images"; // Adjust path if needed

const Preloader = ({ onComplete }) => {
  
  const [isVisible, setIsVisible] = useState(true);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Auto-hide after 2.5 seconds (adjust as needed for your loading logic)
    const timer = setTimeout(() => {
      setIsFadingOut(true);
      // Fade out, then unmount and call onComplete
      setTimeout(() => {
        setIsVisible(false);
        onComplete?.();
      }, 600); // Match transition duration
    }, 1000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-[9999] bg-[#0c162c] transition-opacity duration-600 ease-out ${
      isFadingOut ? 'opacity-0' : 'opacity-100'
    }`}>
      <div className="flex flex-col items-center justify-center [animation:slideIn_0.8s_ease-out]">
        <img 
          src={assets.logo} 
          alt="LSA Logo" 
          className="w-30 h-auto mb-5 animate-pulse" // w-30 ≈ 120px; adjust as needed
        />
        <div className="w-12 h-12 border-4 border-[#D4AF37]/10 border-t-[#D4AF37] rounded-full animate-spin mb-5"></div>
        <p className="text-[#D4AF37] text-lg font-medium tracking-wide [animation:fadeInUp_1s_ease-out_0.5s_both]">
          Loading LSA...
        </p>
      </div>
    </div>
  );
};

export default Preloader;