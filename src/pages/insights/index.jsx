import React, { useState, useEffect } from 'react';

const InsightsPage = () => {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // State for active filter
  const [activeFilter, setActiveFilter] = useState('all');
  
  // State for search term
  const [searchTerm, setSearchTerm] = useState('');
  
  // State for articles
  const [articles, setArticles] = useState([
    {
      id: 1,
      category: 'industry',
      date: '2025-07-22',
      views: '1850',
      title: "AI's Impact on Creative Workflows: Threat or Opportunity?",
      excerpt: "Examining how artificial intelligence is reshaping creative processes and what it means for designers, developers, and creative professionals in 2025.",
      readTime: '8 min read',
      image: 'https://images.pixabay.com/photo-2016/11/19/14/00/code-1839406_1280.jpg',
      comments: '24'
    },
    {
      id: 2,
      category: 'tutorials',
      date: '2025-07-20',
      views: '2100',
      title: "Advanced Figma Techniques: Auto-Layout Mastery",
      excerpt: "Master Figma's auto-layout feature with practical examples and downloadable templates. Perfect for creating responsive designs efficiently.",
      readTime: '15 min read',
      image: 'https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg',
      likes: '89',
      isFreeDownload: true,
      isVideo: true
    },
    {
      id: 3,
      category: 'case-studies',
      date: '2025-07-18',
      views: '1650',
      title: "E-commerce Redesign: 300% Conversion Increase",
      excerpt: "Deep dive into a complete e-commerce platform redesign that tripled conversion rates through strategic UX improvements and data-driven design decisions.",
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
      comments: '31'
    },
    {
      id: 4,
      category: 'process',
      date: '2025-07-15',
      views: '1420',
      title: "Behind the Scenes: My Design Process Revealed",
      excerpt: "An honest look at my creative process, from initial client brief to final delivery. Including the messy parts, iterations, and lessons learned.",
      readTime: '6 min read',
      image: 'https://images.pixabay.com/photo-2016/11/29/06/15/plans-1867745_1280.jpg',
      likes: '67'
    },
    {
      id: 5,
      category: 'industry',
      date: '2025-07-12',
      views: '1980',
      title: "The Evolution of Remote Design Teams",
      excerpt: "How distributed design teams are reshaping collaboration, creativity, and company culture in the post-pandemic world.",
      readTime: '7 min read',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      comments: '18'
    },
    {
      id: 6,
      category: 'tutorials',
      date: '2025-07-10',
      views: '2450',
      title: "CSS Grid Layouts: From Beginner to Pro",
      excerpt: "Master CSS Grid with practical examples and interactive demos. Includes downloadable code samples and video walkthrough.",
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop',
      likes: '112',
      isVideo: true
    }
  ]);

  // State for newsletter email
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [footerNewsletterEmail, setFooterNewsletterEmail] = useState('');

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Filter articles
  const filterArticles = (category) => {
    setActiveFilter(category);
  };

  // Search articles
  const searchArticles = (e) => {
    setSearchTerm(e.target.value);
  };

  // Sort articles
  const sortArticles = (sortBy) => {
    const sortedArticles = [...articles];
    
    switch(sortBy) {
      case 'newest':
        sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'oldest':
        sortedArticles.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case 'popular':
        sortedArticles.sort((a, b) => parseInt(b.views) - parseInt(a.views));
        break;
      case 'reading-time':
        sortedArticles.sort((a, b) => {
          const aTime = parseInt(a.readTime);
          const bTime = parseInt(b.readTime);
          return aTime - bTime;
        });
        break;
      default:
        break;
    }
    
    setArticles(sortedArticles);
  };

  // Subscribe to newsletter
  const subscribeNewsletter = () => {
    if (newsletterEmail && newsletterEmail.includes('@')) {
      alert('Thank you for subscribing! You\'ll receive our weekly insights soon.');
      setNewsletterEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  const subscribeFooterNewsletter = () => {
    if (footerNewsletterEmail && footerNewsletterEmail.includes('@')) {
      alert('Thank you for subscribing! You\'ll receive our weekly insights soon.');
      setFooterNewsletterEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  // Share article
  const shareArticle = (platform) => {
    const url = window.location.href;
    const title = 'The Future of Design Systems: Building for Scale and Consistency';
    
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
    }
  };

  // Read full article
  const readFullArticle = (articleId) => {
    alert(`Opening full article: ${articleId}. In a real implementation, this would navigate to the full article page.`);
  };

  // Bookmark article
  const bookmarkArticle = (articleId) => {
    alert(`Article bookmarked: ${articleId}. In a real implementation, this would save the article to user's bookmarks.`);
  };

  // Download resource
  const downloadResource = (resourceId) => {
    alert(`Downloading resource: ${resourceId}. In a real implementation, this would trigger the actual file download.`);
  };

  // Load more articles
  const loadMoreArticles = () => {
    alert('Loading more articles... In a real implementation, this would fetch additional articles from the server.');
  };

  // Filter articles based on active filter and search term
  const filteredArticles = articles.filter(article => {
    const matchesCategory = activeFilter === 'all' || article.category === activeFilter;
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesCategory && matchesSearch;
  });

  // Get category label and color
  const getCategoryInfo = (category) => {
    switch(category) {
      case 'industry':
        return { label: 'Industry Analysis', color: 'bg-primary' };
      case 'tutorials':
        return { label: 'Design Tutorial', color: 'bg-secondary' };
      case 'case-studies':
        return { label: 'Case Study', color: 'bg-accent-600' };
      case 'process':
        return { label: 'Creative Process', color: 'bg-primary' };
      default:
        return { label: 'Article', color: 'bg-gray-500' };
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 via-surface to-secondary-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="blog-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#blog-grid)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-text-primary mb-6">
              Insights & <span className="text-gradient">Thought Leadership</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Exploring the intersection of design, strategy, and innovation. Dive into industry trends, creative processes, and actionable insights that drive meaningful results.
            </p>
            {/* Newsletter Signup */}
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email for insights" 
                  className="input-field flex-1" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                />
                <button onClick={subscribeNewsletter} className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-text-secondary mt-2">Join 2,500+ creatives getting weekly insights</p>
            </div>
          </div>
          {/* Featured Article Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-montserrat font-bold text-primary">150+</div>
              <div className="text-sm text-text-secondary">Articles Published</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-montserrat font-bold text-secondary">50K+</div>
              <div className="text-sm text-text-secondary">Monthly Readers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-montserrat font-bold text-accent-600">25+</div>
              <div className="text-sm text-text-secondary">Speaking Events</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-montserrat font-bold text-primary">4.9</div>
              <div className="text-sm text-text-secondary">Reader Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories & Filters */}
      <section className="py-12 bg-surface border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              <button 
                className={`filter-btn px-4 py-2 rounded-full font-montserrat font-medium text-sm transition-all duration-300 ${activeFilter === 'all' ? 'bg-primary text-white' : 'bg-border-light text-text-primary hover:bg-primary hover:text-white'}`}
                onClick={() => filterArticles('all')}
              >
                All Articles
              </button>
              <button 
                className={`filter-btn px-4 py-2 rounded-full font-montserrat font-medium text-sm transition-all duration-300 ${activeFilter === 'industry' ? 'bg-primary text-white' : 'bg-border-light text-text-primary hover:bg-primary hover:text-white'}`}
                onClick={() => filterArticles('industry')}
              >
                Industry Analysis
              </button>
              <button 
                className={`filter-btn px-4 py-2 rounded-full font-montserrat font-medium text-sm transition-all duration-300 ${activeFilter === 'tutorials' ? 'bg-primary text-white' : 'bg-border-light text-text-primary hover:bg-primary hover:text-white'}`}
                onClick={() => filterArticles('tutorials')}
              >
                Design Tutorials
              </button>
              <button 
                className={`filter-btn px-4 py-2 rounded-full font-montserrat font-medium text-sm transition-all duration-300 ${activeFilter === 'case-studies' ? 'bg-primary text-white' : 'bg-border-light text-text-primary hover:bg-primary hover:text-white'}`}
                onClick={() => filterArticles('case-studies')}
              >
                Case Studies
              </button>
              <button 
                className={`filter-btn px-4 py-2 rounded-full font-montserrat font-medium text-sm transition-all duration-300 ${activeFilter === 'process' ? 'bg-primary text-white' : 'bg-border-light text-text-primary hover:bg-primary hover:text-white'}`}
                onClick={() => filterArticles('process')}
              >
                Creative Process
              </button>
            </div>
            {/* Search & Sort */}
            <div className="flex gap-3">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  className="input-field pl-10 pr-4 py-2 w-64" 
                  value={searchTerm}
                  onChange={searchArticles}
                />
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <select className="input-field py-2 px-3" onChange={(e) => sortArticles(e.target.value)}>
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="popular">Most Popular</option>
                <option value="reading-time">Reading Time</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Hero Article */}
      <section className="py-16 bg-gradient-to-br from-secondary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-montserrat font-medium mb-4">Featured Article</span>
            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-text-primary mb-4">Editor's Pick</h2>
          </div>
          <article className="card card-hover max-w-4xl mx-auto overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2340&auto=format&fit=crop" 
                  alt="The Future of Design Systems" 
                  className="w-full h-64 lg:h-full object-cover" 
                  loading="lazy" 
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-white text-xs font-montserrat font-medium px-3 py-1 rounded-full">Industry Analysis</span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="flex space-x-2">
                    <button 
                      className="bg-white/90 hover:bg-white text-text-primary p-2 rounded-full transition-colors duration-300" 
                      onClick={() => shareArticle('twitter')}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button 
                      className="bg-white/90 hover:bg-white text-text-primary p-2 rounded-full transition-colors duration-300" 
                      onClick={() => shareArticle('linkedin')}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="flex items-center text-text-secondary text-sm mb-4">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                  July 25, 2025
                  <span className="mx-2">•</span>
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  12 min read
                  <span className="mx-2">•</span>
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  2.3K views
                </div>
                <h3 className="text-2xl md:text-3xl font-montserrat font-bold text-text-primary mb-4">
                  The Future of Design Systems: Building for Scale and Consistency
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  Explore how modern design systems are evolving beyond component libraries to become comprehensive design languages that drive consistency, efficiency, and innovation across entire organizations. Learn the strategies that industry leaders use to build scalable design systems.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Author" 
                      className="w-10 h-10 rounded-full object-cover mr-3" 
                      loading="lazy" 
                    />
                    <div>
                      <p className="font-montserrat font-semibold text-sm text-text-primary">Alex Morgan</p>
                      <p className="text-xs text-text-secondary">Design Director</p>
                    </div>
                  </div>
                  <button 
                    className="btn-primary" 
                    onClick={() => readFullArticle('design-systems-future')}
                  >
                    Read Full Article
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8" id="articles-grid">
            {filteredArticles.map((article) => {
              const categoryInfo = getCategoryInfo(article.category);
              return (
                <article 
                  key={article.id} 
                  className="article-card card card-hover group"
                  data-category={article.category}
                  data-date={article.date}
                  data-views={article.views}
                >
                  <div className="relative overflow-hidden rounded-lg mb-6">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                      loading="lazy" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`${categoryInfo.color} text-white text-xs font-montserrat font-medium px-3 py-1 rounded-full`}>
                        {categoryInfo.label}
                      </span>
                    </div>
                    {article.isFreeDownload && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-accent text-text-primary text-xs font-montserrat font-medium px-2 py-1 rounded">Free Download</span>
                      </div>
                    )}
                    {article.isVideo && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-accent text-text-primary text-xs font-montserrat font-medium px-2 py-1 rounded">Video Tutorial</span>
                      </div>
                    )}
                    <div className="absolute bottom-4 right-4">
                      <button 
                        className="bg-white/90 hover:bg-white text-text-primary p-2 rounded-full transition-colors duration-300" 
                        onClick={() => bookmarkArticle(article.id)}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-text-secondary text-sm">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                      </svg>
                      {formatDate(article.date)}
                      <span className="mx-2">•</span>
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      {article.readTime}
                    </div>
                    <h3 className="font-montserrat font-semibold text-xl text-text-primary group-hover:text-primary transition-colors duration-300">
                      {article.title}
                    </h3>
                    <p className="text-text-secondary text-sm">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex items-center space-x-4 text-text-secondary text-sm">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                          </svg>
                          {article.views.replace('K', ',000')}
                        </span>
                        {article.comments && (
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                            </svg>
                            {article.comments}
                          </span>
                        )}
                        {article.likes && (
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                            </svg>
                            {article.likes}
                          </span>
                        )}
                      </div>
                      <button 
                        className="text-primary hover:text-primary-700 transition-colors duration-300 font-montserrat font-medium text-sm" 
                        onClick={() => readFullArticle(article.id)}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="btn-outline" onClick={loadMoreArticles}>
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Signup Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="newsletter-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#newsletter-grid)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-white mb-6">
            Stay Ahead of the Curve
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Get weekly insights, exclusive tutorials, and industry analysis delivered straight to your inbox. Join 2,500+ creative professionals who trust our content.
          </p>
          {/* Newsletter Form */}
          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="input-field flex-1 bg-white/10 border-white/20 text-white placeholder-white/70" 
                value={footerNewsletterEmail}
                onChange={(e) => setFooterNewsletterEmail(e.target.value)}
              />
              <button 
                onClick={subscribeFooterNewsletter} 
                className="bg-white text-primary px-6 py-3 rounded-md font-montserrat font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Subscribe Free
              </button>
            </div>
            <p className="text-sm text-white/70 mt-2">No spam. Unsubscribe anytime.</p>
          </div>
          {/* Content Preferences */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <label className="flex items-center text-white/90 text-sm">
              <input type="checkbox" className="mr-2 rounded" defaultChecked />
              Design Trends
            </label>
            <label className="flex items-center text-white/90 text-sm">
              <input type="checkbox" className="mr-2 rounded" defaultChecked />
              Tutorials
            </label>
            <label className="flex items-center text-white/90 text-sm">
              <input type="checkbox" className="mr-2 rounded" />
              Case Studies
            </label>
            <label className="flex items-center text-white/90 text-sm">
              <input type="checkbox" className="mr-2 rounded" />
              Industry News
            </label>
          </div>
          {/* Social Proof */}
          <div className="flex items-center justify-center space-x-8 text-white/80">
            <div className="text-center">
              <div className="text-2xl font-montserrat font-bold">2,500+</div>
              <div className="text-sm">Subscribers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-montserrat font-bold">4.9/5</div>
              <div className="text-sm">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-montserrat font-bold">Weekly</div>
              <div className="text-sm">Delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Free <span className="text-gradient">Resources</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Downloadable templates, checklists, and guides to accelerate your creative projects and professional growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="card card-hover group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-text-primary">Design System Checklist</h3>
                  <p className="text-sm text-text-secondary">PDF • 12 pages</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Complete checklist for building scalable design systems. Covers components, tokens, documentation, and governance.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">1,250+ downloads</span>
                <button 
                  className="btn-primary text-sm px-4 py-2" 
                  onClick={() => downloadResource('design-system-checklist')}
                >
                  Download Free
                </button>
              </div>
            </div>
            {/* Resource 2 */}
            <div className="card card-hover group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-text-primary">Figma UI Kit</h3>
                  <p className="text-sm text-text-secondary">Figma File • 50+ Components</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Professional UI kit with modern components, auto-layout, and design tokens. Perfect for rapid prototyping.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">890+ downloads</span>
                <button 
                  className="btn-secondary text-sm px-4 py-2" 
                  onClick={() => downloadResource('figma-ui-kit')}
                >
                  Download Free
                </button>
              </div>
            </div>
            {/* Resource 3 */}
            <div className="card card-hover group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-text-primary">UX Research Template</h3>
                  <p className="text-sm text-text-secondary">Google Sheets • 15 Templates</p>
                </div>
              </div>
              <p className="text-text-secondary text-sm mb-4">
                Research templates for user interviews, surveys, usability testing, and persona development.
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-text-secondary">2,100+ downloads</span>
                <button 
                  className="btn-outline text-sm px-4 py-2" 
                  onClick={() => downloadResource('ux-research-template')}
                >
                  Download Free
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="btn-primary">View All Resources</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InsightsPage;