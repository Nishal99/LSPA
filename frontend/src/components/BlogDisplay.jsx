
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { API_CONFIG, getApiUrl } from '../utils/apiConfig';
import { 
  FiChevronLeft, 
  FiChevronRight, 
  FiCalendar, 
  FiArrowRight, 
  FiFolder, 
  FiActivity, 
  FiUsers, 
  FiBell, 
  FiAlertCircle 
} from 'react-icons/fi';

const BlogDisplay = () => {
  const [blogs, setBlogs] = useState([]);
  const [groupedBlogs, setGroupedBlogs] = useState({});
  const [mediaIndices, setMediaIndices] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hoveredBlogs, setHoveredBlogs] = useState({});
  const [visibleSections, setVisibleSections] = useState({});
  const sectionRefs = useRef({});
  const slideShowIntervals = useRef({});

  // Category titles and icons mapping
  const categoryData = {
    'Projects': { title: 'Our Projects', icon: <FiFolder className="w-5 h-5" />, gradient: "from-[#D4AF37] to-[#e6c158]" },
    'Activity': { title: 'Latest Activities', icon: <FiActivity className="w-5 h-5" />, gradient: "from-[#0A1428] to-[#1a2a4e]" },
    'Meetings': { title: 'Meeting Updates', icon: <FiUsers className="w-5 h-5" />, gradient: "from-[#D4AF37] to-[#e6c158]" },
    'News': { title: 'News & Announcements', icon: <FiBell className="w-5 h-5" />, gradient: "from-[#0A1428] to-[#1a2a4e]" },
    'Important Message': { title: 'Important Messages', icon: <FiAlertCircle className="w-5 h-5" />, gradient: "from-[#D4AF37] to-[#e6c158]" }
  };

  // Fetch blogs from API
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
  setIsLoading(true);
  const response = await fetch(getApiUrl('/api/blog'));
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
          
          // Group blogs by category
          const grouped = data.reduce((acc, blog) => {
            if (!acc[blog.category]) {
              acc[blog.category] = [];
            }
            acc[blog.category].push(blog);
            return acc;
          }, {});
          
          setGroupedBlogs(grouped);
          
          // Initialize media indices for each blog
          const indices = {};
          data.forEach(blog => {
            if (blog.media_paths && blog.media_paths.length > 0) {
              indices[blog.id] = 0;
            }
          });
          setMediaIndices(indices);
        } else {
          console.error('Failed to fetch blogs');
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBlogs();

    // Clean up intervals on component unmount
    return () => {
      Object.values(slideShowIntervals.current).forEach(interval => {
        clearInterval(interval);
      });
    };
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all section elements
    Object.values(sectionRefs.current).forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      Object.values(sectionRefs.current).forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [groupedBlogs]);

  // Function to get full URL for media files
  const getMediaUrl = (path) => {
    if (path.startsWith('http')) return path;
    return `${API_CONFIG.baseUrl}${path}`;
  };

  // Navigate media for a specific blog
  const nextMedia = (blogId) => {
    setMediaIndices(prev => {
      const blog = blogs.find(b => b.id === blogId);
      if (!blog || !blog.media_paths) return prev;
      
      return {
        ...prev,
        [blogId]: (prev[blogId] + 1) % blog.media_paths.length
      };
    });
  };

  const prevMedia = (blogId) => {
    setMediaIndices(prev => {
      const blog = blogs.find(b => b.id === blogId);
      if (!blog || !blog.media_paths) return prev;
      
      return {
        ...prev,
        [blogId]: (prev[blogId] - 1 + blog.media_paths.length) % blog.media_paths.length
      };
    });
  };

  // Start slideshow for a blog
  const startSlideshow = (blogId) => {
    if (slideShowIntervals.current[blogId]) {
      clearInterval(slideShowIntervals.current[blogId]);
    }
    
    slideShowIntervals.current[blogId] = setInterval(() => {
      nextMedia(blogId);
    }, 4000);
  };

  // Stop slideshow for a blog
  const stopSlideshow = (blogId) => {
    if (slideShowIntervals.current[blogId]) {
      clearInterval(slideShowIntervals.current[blogId]);
      delete slideShowIntervals.current[blogId];
    }
  };

  // Handle blog hover
  const handleBlogHover = (blogId, hasMultipleMedia) => {
    setHoveredBlogs(prev => ({ ...prev, [blogId]: true }));
    
    if (hasMultipleMedia) {
      startSlideshow(blogId);
    }
  };

  // Handle blog leave
  const handleBlogLeave = (blogId) => {
    setHoveredBlogs(prev => ({ ...prev, [blogId]: false }));
    stopSlideshow(blogId);
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Media display component
  const MediaDisplay = ({ blog }) => {
    if (!blog.media_paths || blog.media_paths.length === 0) {
      return (
        <div className="relative h-56 bg-gradient-to-br from-gray-50 to-gray-100 rounded-t-2xl flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#0A1428] to-[#1a2a4e] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
              <FiFolder className="w-8 h-8 text-white" />
            </div>
            <p className="text-gray-600 font-medium">No Media</p>
          </div>
        </div>
      );
    }

    const currentIndex = mediaIndices[blog.id] || 0;
    const currentMedia = blog.media_paths[currentIndex];
    const currentType = blog.media_types[currentIndex];
    const hasMultipleMedia = blog.media_paths.length > 1;
    const isHovered = hoveredBlogs[blog.id];
    const mediaRef = useRef(null);

    useEffect(() => {
      if (mediaRef.current) {
        if (isHovered) {
          mediaRef.current.style.transform = 'scale(1.05)';
        } else {
          mediaRef.current.style.transform = 'scale(1)';
        }
      }
    }, [isHovered]);

    return (
      <div 
        className="relative h-56 bg-gray-100 overflow-hidden rounded-t-2xl group"
        onMouseEnter={() => handleBlogHover(blog.id, hasMultipleMedia)}
        onMouseLeave={() => handleBlogLeave(blog.id)}
      > 
        {currentType === 'image' ? (
          <div className="w-full h-full overflow-hidden">
            <img
              ref={mediaRef}
              src={getMediaUrl(currentMedia)}
              alt={`Media ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{ transition: 'transform 0.7s ease-out' }}
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </div>
        ) : currentType === 'video' ? (
          <div className="w-full h-full overflow-hidden">
            <video
              ref={mediaRef}
              src={getMediaUrl(currentMedia)}
              className="w-full h-full object-cover transition-transform duration-700 ease-out"
              style={{ transition: 'transform 0.7s ease-out' }}
              controls
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-gradient-to-br from-[#0A1428] to-[#1a2a4e] rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <p className="text-gray-700 font-medium">Audio Content</p>
            </div>
          </div>
        )}
        
        {hasMultipleMedia && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevMedia(blog.id);
                stopSlideshow(blog.id);
              }}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#0A1428] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-md"
            >
              <FiChevronLeft size={16} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextMedia(blog.id);
                stopSlideshow(blog.id);
              }}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm text-[#0A1428] p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white shadow-md"
            >
              <FiChevronRight size={16} />
            </button>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
              {blog.media_paths.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setMediaIndices({...mediaIndices, [blog.id]: index});
                    stopSlideshow(blog.id);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#D4AF37] scale-125' : 'bg-white/50'}`}
                />
              ))}
            </div>
            
            {isHovered && (
              <div className="absolute bottom-0 left-0 w-full h-1 bg-white/30">
                <div 
                  className="h-full bg-[#D4AF37]/80 transition-all duration-100 linear"
                  style={{ 
                    width: `${(currentIndex / (blog.media_paths.length - 1)) * 100}%`,
                    animation: isHovered ? 'progressBar 4s linear' : 'none'
                  }}
                ></div>
              </div>
            )}
          </>
        )}
      </div>
    );
  };

  if (isLoading) {
    return (
      <section className="py-16 bg-white text-[#0A1428]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] rounded-full mx-auto mb-4 flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <p className="text-gray-600">Loading blog posts...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-20 bg-white text-[#0A1428] relative overflow-hidden">
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
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(212, 175, 55, 0.1);
          transition: all 0.3s ease;
        }
        
        .glass-effect:hover {
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
        
        @keyframes progressBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      
      <div className="max-w-8xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center mb-6 px-4 py-2 bg-white/60 rounded-full border border-[#D4AF37]/20 shadow-sm">
            <div className="w-2 h-2 bg-[#D4AF37] rounded-full mr-2"></div>
            <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">Latest Updates</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-6">
            <span className="gradient-text font-semibold">Blog</span> & Announcements
          </h2>
          <div className="w-20 md:w-24 lg:w-32 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed font-light">
            Stay informed with the latest activities, projects, and announcements from Lanka Spa Association
          </p>
        </div>

        {Object.keys(groupedBlogs).length === 0 ? (
          <div className="text-center py-12 animate-fade-in-up">
            <div className="w-24 h-24 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl md:text-2xl font-medium text-[#0A1428] mb-2">No blog posts yet</h3>
            <p className="text-gray-600">Check back later for updates and announcements.</p>
          </div>
        ) : (
          <>
            {Object.entries(groupedBlogs).map(([category, categoryBlogs], index) => (
              <section 
                key={category} 
                id={`section-${category}`}
                ref={el => sectionRefs.current[category] = el}
                className={`mb-16 last:mb-0 ${visibleSections[`section-${category}`] ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-8 lg:mb-10">
                  <h3 className="text-2xl md:text-3xl font-medium text-[#0A1428] flex items-center justify-center lg:justify-start">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${categoryData[category]?.gradient || 'from-gray-600 to-gray-800'} flex items-center justify-center mr-4 shadow-lg`}>
                      <div className="text-white">
                        {categoryData[category]?.icon || <FiFolder className="w-5 h-5" />}
                      </div>
                    </div>
                    {categoryData[category]?.title || category}
                  </h3>
                  <div className="h-0.5 w-24 bg-gradient-to-r from-[#D4AF37] to-[#BF9B30] mt-3 rounded-full lg:mx-16 mx-auto"></div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                  {categoryBlogs.map((blog, blogIndex) => (
                    <div 
                      key={blog.id} 
                      className="group relative"
                    >
                      {/* Main Card */}
                      <div className="glass-effect rounded-2xl h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl border border-[#D4AF37]/20 overflow-hidden">
                        <MediaDisplay blog={blog} />
                        
                        <div className="p-6 flex-grow">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <FiCalendar className="w-4 h-4 mr-1.5" />
                            <span>{formatDate(blog.date)}</span>
                          </div>
                          
                          <h4 className="text-lg md:text-xl font-medium text-[#0A1428] mb-3 line-clamp-2">
                            {blog.title}
                          </h4>
                          
                          <p className="text-gray-600 mb-4 line-clamp-3 flex-grow text-sm md:text-base font-light">
                            {blog.description}
                          </p>
                          
                          <Link
                            to={`/blogs/${blog.id}`}
                            className="group/btn inline-flex items-center text-[#D4AF37] font-medium hover:text-[#BF9B30] transition-colors text-sm md:text-base"
                          >
                            Read more
                            <FiArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </Link>
                        </div>
                        
                        {/* Hover effect background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${categoryData[category]?.gradient || 'from-gray-600 to-gray-800'} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
                        
                        {/* Corner accents */}
                        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                          <div className="absolute top-0 right-0 w-6 h-6 bg-[#D4AF37] opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45 translate-x-3 -translate-y-3"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-12 h-12 overflow-hidden">
                          <div className="absolute bottom-0 left-0 w-6 h-6 bg-[#D4AF37] opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform rotate-45 -translate-x-3 translate-y-3"></div>
                        </div>
                      </div>
                      
                      {/* Floating gradient effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${categoryData[category]?.gradient || 'from-gray-600 to-gray-800'} rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-all duration-700 -z-20`}></div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </>
        )}

        {/* CTA Section */}
        <div className="glass-effect rounded-2xl p-8 md:p-12 text-[#0A1428] shadow-sm relative overflow-hidden mt-16" style={{background: 'linear-gradient(135deg, #0A1428 0%, #1a2a4e 100%)', color: 'white'}}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 bg-[#D4AF37] rounded-full -translate-x-16 -translate-y-16 blur"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#D4AF37] rounded-full translate-x-24 translate-y-24 blur"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center justify-between relative z-10">
            <div className="lg:w-2/3 mb-8 lg:mb-0">
              <h3 className="text-2xl md:text-3xl font-medium mb-4">
                Stay <span className="text-[#D4AF37]">Updated</span>
              </h3>
              <p className="text-gray-200 text-lg leading-relaxed font-light">
                Never miss important updates, announcements, and industry news from Lanka Spa Association.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              
              <Link
                to="/blogs"
                className="group inline-flex items-center px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] font-semibold rounded-2xl hover:bg-gradient-to-r hover:from-[#D4AF37] hover:to-[#e6c158] hover:text-[#0A1428] transition-all duration-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
              >
                <span className="mr-3">View All Posts</span>
                <FiArrowRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDisplay;
