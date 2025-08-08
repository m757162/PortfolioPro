import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Design Trends That Will Define 2025",
      excerpt: "Exploring the emerging design patterns, color palettes, and user experience principles that will shape digital products this year.",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Design Trends",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2340&auto=format&fit=crop",
      alt: "Design Trends 2025"
    },
    {
      id: 2,
      title: "Building User-Centric Digital Products",
      excerpt: "A comprehensive guide to creating digital experiences that truly resonate with users and drive business success.",
      date: "January 10, 2025",
      readTime: "8 min read",
      category: "UX Strategy",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop",
      alt: "UX Strategy Guide"
    },
    {
      id: 3,
      title: "The Psychology of Brand Colors",
      excerpt: "Understanding how color choices influence consumer behavior and brand perception in the digital age.",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Branding",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2340&auto=format&fit=crop",
      alt: "Brand Strategy"
    }
  ];

  const getCategoryStyle = (category) => {
    switch(category) {
      case 'Design Trends':
        return {
          bg: 'bg-primary',
          text: 'text-white',
          hover: 'group-hover:text-primary',
          link: 'text-primary hover:text-primary-700'
        };
      case 'UX Strategy':
        return {
          bg: 'bg-secondary',
          text: 'text-white',
          hover: 'group-hover:text-secondary',
          link: 'text-secondary hover:text-secondary-600'
        };
      case 'Branding':
        return {
          bg: 'bg-accent-600',
          text: 'text-white',
          hover: 'group-hover:text-accent-700',
          link: 'text-accent-700 hover:text-accent-800'
        };
      default:
        return {
          bg: 'bg-gray-600',
          text: 'text-white',
          hover: 'group-hover:text-gray-700',
          link: 'text-gray-700 hover:text-gray-800'
        };
    }
  };

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Thoughts on design, strategy, and the evolving digital landscape. Stay updated with industry trends and actionable insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const style = getCategoryStyle(post.category);
            return (
              <article key={post.id} className="card card-hover group">
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={post.image} 
                    alt={post.alt} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                    loading="lazy" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-xs font-montserrat font-medium px-3 py-1 rounded-full ${style.bg} ${style.text}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center text-text-secondary text-sm">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    {post.date}
                  </div>
                  <h3 className={`font-montserrat font-semibold text-xl ${style.hover} transition-colors duration-300`}>
                    <Link to="/insights">{post.title}</Link>
                  </h3>
                  <p className="text-text-secondary text-sm">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4">
                    <span className="text-text-secondary text-sm">{post.readTime}</span>
                    <Link 
                      to="/insights" 
                      className={`${style.link} font-montserrat font-medium text-sm transition-colors duration-300`}
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/insights" className="btn-primary">View All Articles</Link>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;