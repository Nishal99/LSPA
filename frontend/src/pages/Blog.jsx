
import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FiCalendar, FiClock, FiFilter, FiChevronLeft, FiChevronRight, FiSearch, FiArrowUp, FiShare2, FiArrowLeft, FiHome, FiMenu } from 'react-icons/fi';
import { API_CONFIG, getApiUrl } from '../utils/apiConfig';

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [mediaIndices, setMediaIndices] = useState({});
  const [hoveredBlog, setHoveredBlog] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const blogRefs = useRef({});
  const carouselIntervals = useRef({});
  const { id } = useParams();
  const navigate = useNavigate();

  // Create refs for each blog section
  const blogSectionRefs = useRef({});

  // Fetch all blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
  setIsLoading(true);
  const response = await fetch(getApiUrl('/api/blog'));
        if (response.ok) {
          const data = await response.json();
          setBlogs(data);
          setFilteredBlogs(data);

          // Extract unique categories
          const uniqueCategories = ['All', ...new Set(data.map(blog => blog.category))];
          setCategories(uniqueCategories);

          // Initialize media indices and start carousels
          const indices = {};
          data.forEach(blog => {
            if (blog.media_paths && blog.media_paths.length > 0) {
              indices[blog.id] = 0;
              // Start carousel automatically for blogs with multiple images
              if (blog.media_paths.length > 1) {
                startCarousel(blog.id, blog.media_paths.length);
              }
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
      Object.values(carouselIntervals.current).forEach(interval => {
        clearInterval(interval);
      });
    };
  }, []);

  // Start carousel for a blog
  const startCarousel = (blogId, mediaLength) => {
    // Clear any existing interval for this blog
    if (carouselIntervals.current[blogId]) {
      clearInterval(carouselIntervals.current[blogId]);
    }

    // Set new interval
    carouselIntervals.current[blogId] = setInterval(() => {
      setMediaIndices(prev => ({
        ...prev,
        [blogId]: (prev[blogId] + 1) % mediaLength
      }));
    }, 4000); // Change image every 4 seconds
  };

  // Stop carousel for a blog
  const stopCarousel = (blogId) => {
    if (carouselIntervals.current[blogId]) {
      clearInterval(carouselIntervals.current[blogId]);
      delete carouselIntervals.current[blogId];
    }
  };

  // Scroll to specific blog if ID is in URL params
  useEffect(() => {
    if (id && blogs.length > 0) {
      const timer = setTimeout(() => {
        const element = blogRefs.current[id];
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Add highlight effect
          element.classList.add('ring-4', 'ring-[#D4AF37]', 'transition-all', 'duration-1000');
          setTimeout(() => {
            element.classList.remove('ring-4', 'ring-[#D4AF37]');
          }, 3000);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [id, blogs]);

  // Filter blogs based on category and search query
  useEffect(() => {
    let result = blogs;

    // Filter by category
    if (selectedCategory !== 'All') {
      result = result.filter(blog => blog.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(blog =>
        (blog.title || '').toLowerCase().includes(query) ||
        (blog.content || '').toLowerCase().includes(query) ||
        (blog.category || '').toLowerCase().includes(query)
      );
    }

    setFilteredBlogs(result);
  }, [blogs, selectedCategory, searchQuery]);

  // Function to get full URL for media files
  const getMediaUrl = (path) => {
    if (!path) return '';
    if (typeof path === 'string' && path.startsWith('http')) return path;
    return `${API_CONFIG.baseUrl}${path}`;
  };

  // Format date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Calculate reading time
  const getReadingTime = (text) => {
    if (!text || typeof text !== 'string') return '1 min read';
    const wordsPerMinute = 200;
    const words = text.trim() === '' ? 0 : text.split(/\s+/g).filter(Boolean).length;
    const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));
    return `${minutes} min read`;
  };

  // Navigate media for a specific blog
  const nextMedia = (blogId, mediaLength) => {
    setMediaIndices(prev => ({
      ...prev,
      [blogId]: (prev[blogId] + 1) % mediaLength
    }));
    // Restart carousel after manual navigation
    startCarousel(blogId, mediaLength);
  };

  const prevMedia = (blogId, mediaLength) => {
    setMediaIndices(prev => ({
      ...prev,
      [blogId]: (prev[blogId] - 1 + mediaLength) % mediaLength
    }));
    // Restart carousel after manual navigation
    startCarousel(blogId, mediaLength);
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Share blog function
  const shareBlog = (blogId) => {
    const blogUrl = `${window.location.origin}/media/${blogId}`;
    if (navigator.share) {
      navigator.share({
        title: 'Check out this blog post',
        url: blogUrl,
      })
        .catch(error => {
          console.log('Error sharing:', error);
          navigator.clipboard.writeText(blogUrl);
          Swal.fire({
            title: 'Copied!',
            text: 'Link copied to clipboard!',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
          });
        });
    } else {
      navigator.clipboard.writeText(blogUrl);
      Swal.fire({
        title: 'Copied!',
        text: 'Link copied to clipboard!',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
      });
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll to blog section
  const scrollToBlogSection = (blogId) => {
    if (blogRefs.current[blogId]) {
      blogRefs.current[blogId].scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    // Close mobile menu after scroll
    setIsMenuOpen(false);
  };

  // Media display component
  const MediaDisplay = ({ blog }) => {
    if (!blog.media_paths || blog.media_paths.length === 0) {
      return null;
    }

    const currentIndex = mediaIndices[blog.id] || 0;
    const currentMedia = blog.media_paths[currentIndex];
    const currentType = (blog.media_types && blog.media_types[currentIndex]) || 'image';
    const mediaLength = blog.media_paths.length;

    return (
      <div
        className="w-full relative mb-8 group"
        onMouseEnter={() => {
          setHoveredBlog(blog.id);
          stopCarousel(blog.id);
        }}
        onMouseLeave={() => {
          setHoveredBlog(null);
          if (mediaLength > 1) {
            startCarousel(blog.id, mediaLength);
          }
        }}
      >
        {(currentMedia && currentType === 'image') ? (
          <img
            src={getMediaUrl(currentMedia)}
            alt={`Media ${currentIndex + 1}`}
            className="w-full h-auto max-h-96 md:max-h-[400px] lg:max-h-[500px] object-cover mx-auto transition-opacity duration-500 rounded-xl shadow-lg"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        ) : (currentMedia && currentType === 'video') ? (
          <video
            src={getMediaUrl(currentMedia)}
            className="w-full h-auto max-h-96 md:max-h-[400px] lg:max-h-[500px] object-contain mx-auto rounded-xl shadow-lg"
            controls
            autoPlay
          />
        ) : (
          <div className="w-full h-64 md:h-80 flex items-center justify-center bg-gray-100 rounded-xl shadow-lg">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-800">Audio Content</p>
              <p className="text-gray-600 mt-1">Click play to listen</p>
            </div>
          </div>
        )}

        {mediaLength > 1 && (
          <>
            <button
              onClick={() => prevMedia(blog.id, mediaLength)}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 ${hoveredBlog === blog.id ? 'opacity-100' : 'opacity-0'} z-10`}
            >
              <FiChevronLeft size={24} />
            </button>
            <button
              onClick={() => nextMedia(blog.id, mediaLength)}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 ${hoveredBlog === blog.id ? 'opacity-100' : 'opacity-0'} z-10`}
            >
              <FiChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
              {blog.media_paths.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setMediaIndices({ ...mediaIndices, [blog.id]: index });
                    startCarousel(blog.id, mediaLength);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-white' : 'bg-white/50'}`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#0A1428] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-700 text-lg">Loading blog posts...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden bg-white">
      {/* Mobile Top Bar with Hamburger */}
      <div className="lg:hidden bg-gray-800 text-white p-4 flex items-center justify-between shadow-md z-50">
        <h2 className="text-lg font-bold text-yellow-400">Blog Navigation</h2>
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Fixed Left Panel - Hidden on mobile, full-width overlay when open */}
      <div
        className={`${
          isMenuOpen ? 'fixed inset-0 z-40 lg:static lg:translate-x-0' : 'hidden lg:block'
        } w-full lg:w-80 bg-gray-800 text-white overflow-y-auto flex-shrink-0 lg:flex lg:flex-col transition-transform duration-300 ease-in-out transform lg:translate-x-0 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 lg:p-6 sticky top-0 bg-gray-800 border-b border-gray-700 z-10">
          <h2 className="text-lg lg:text-xl font-bold text-yellow-400 mb-2">Blog Navigation</h2>
          <p className="text-gray-300 text-xs lg:text-sm">Quick access to blog posts</p>
        </div>
        
        <nav className="p-2 lg:p-4 space-y-1 lg:space-y-2 flex-1 overflow-y-auto">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <button 
                key={blog.id}
                onClick={() => scrollToBlogSection(blog.id)}
                className="w-full text-left px-3 lg:px-4 py-3 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors font-medium text-sm lg:text-base text-left"
              >
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-white text-sm">{blog.title.length > 40 ? `${blog.title.substring(0, 40)}...` : blog.title}</span>
                  <span className="text-gray-300 text-xs mt-1">{blog.category}</span>
                </div>
              </button>
            ))
          ) : (
            <div className="text-center py-8 text-gray-400">
              No blog posts available
            </div>
          )}
        </nav>
      </div>

      {/* Overlay backdrop for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Scrollable Main Content */}
      <div className="flex-1 overflow-y-auto lg:ml-0">
        {/* Hero Section - Responsive height */}
        <div className="relative h-64 sm:h-80 lg:h-96 w-full">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
          
          <div className="relative z-10 flex items-center justify-center h-full px-4">
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 lg:mb-4">
                Our Blogs
              </h1>
              <p className="text-lg sm:text-xl text-yellow-500 font-light">
                Stay updated with our latest news, projects, and community activities
              </p>
            </div>
          </div>
        </div>

        {/* Main Content - Responsive padding */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
          {/* Header with Search and Filter */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FiSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0A1428] focus:border-[#0A1428] w-full lg:w-64 outline-none text-sm"
                  />
                </div>
                
                <div className="flex items-center space-x-2">
                  <FiFilter className="text-gray-700" />
                  <span className="text-gray-700 whitespace-nowrap">Filter by:</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-4 py-2 rounded-full whitespace-nowrap transition-all text-sm ${
                          selectedCategory === category 
                            ? 'bg-[#0A1428] text-white font-medium' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => navigate('/')}
                  className="flex items-center text-[#0A1428] hover:text-[#D4AF37] transition-colors text-sm"
                >
                  <FiHome className="mr-1" />
                  Home
                </button>
                <button
                  onClick={() => navigate('/blogs')}
                  className="flex items-center text-[#0A1428] hover:text-[#D4AF37] transition-colors text-sm"
                >
                  <FiArrowLeft className="mr-1" />
                  All Posts
                </button>
              </div>
            </div>
          </div>

          {filteredBlogs.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No blog posts found</h3>
              <p className="text-gray-500 mb-6">
                {searchQuery
                  ? `No results found for "${searchQuery}". Try a different search term.`
                  : `No posts available in ${selectedCategory} category.`
                }
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-[#0A1428] text-white rounded-xl hover:bg-[#1E3A5F] transition-colors font-medium"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  ref={el => blogRefs.current[blog.id] = el}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className="p-6 lg:p-8">
                    <span className="inline-block px-4 py-2 bg-[#D4AF37] text-[#0A1428] rounded-full text-sm font-medium mb-4">
                      {blog.category}
                    </span>

                    <h2 className="text-2xl md:text-3xl font-bold text-[#0A1428] mb-6">
                      {blog.title}
                    </h2>

                    <div className="flex items-center text-gray-600 text-sm mb-8">
                      <FiCalendar className="mr-1.5" />
                      <span className="mr-6">{formatDate(blog.date)}</span>
                      <FiClock className="mr-1.5" />
                      <span>{getReadingTime(blog.content)}</span>
                    </div>

                    <MediaDisplay blog={blog} />

                    <div className="prose max-w-none text-gray-800 leading-relaxed mb-8">
                      {(blog.content || '').split('\n').map((paragraph, i) => (
                        <p key={i} className="mb-4 text-base leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-gray-200">
                      <button
                        onClick={() => shareBlog(blog.id)}
                        className="flex items-center px-6 py-3 bg-[#0A1428] text-white rounded-xl hover:bg-[#1E3A5F] transition-colors font-medium"
                      >
                        <FiShare2 className="mr-2" />
                        Share This Post
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-[#0A1428] text-white rounded-full shadow-lg hover:bg-[#1E3A5F] transition-all z-20"
        aria-label="Back to top"
      >
        <FiArrowUp size={20} />
      </button>

      {/* Footer */}
      
    </div>
  );
};

export default Blog;
