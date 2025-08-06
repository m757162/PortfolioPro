import { useState } from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterProjects = (category) => {
    setActiveFilter(category);
  };

  const projects = [
    {
      id: 1,
      title: 'Analytics Dashboard',
      description: 'Complete UX overhaul resulting in 40% increased user engagement and 25% reduction in support tickets.',
      category: 'tech',
      tags: ['UI/UX', 'React'],
      year: '2025',
      image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2340&auto=format&fit=crop',
      alt: 'SaaS Dashboard Design',
      categoryLabel: 'SaaS Platform'
    },
    {
      id: 2,
      title: 'Patient Portal',
      description: 'Streamlined patient experience with 60% faster appointment booking and 90% user satisfaction rate.',
      category: 'healthcare',
      tags: ['Mobile', 'HIPAA'],
      year: '2024',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      alt: 'Healthcare App Design',
      categoryLabel: 'Healthcare'
    },
    {
      id: 3,
      title: 'Investment Platform',
      description: 'Modern trading interface with real-time data visualization and 50% improved user retention.',
      category: 'finance',
      tags: ['Trading', 'Charts'],
      year: '2024',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2340&auto=format&fit=crop',
      alt: 'Fintech App Design',
      categoryLabel: 'FinTech'
    }
  ];

  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryStyle = (category) => {
    switch(category) {
      case 'tech':
        return {
          bg: 'bg-primary-50',
          text: 'text-primary',
          hover: 'group-hover:text-primary',
          link: 'text-primary hover:text-primary-700'
        };
      case 'healthcare':
        return {
          bg: 'bg-secondary-50',
          text: 'text-secondary',
          hover: 'group-hover:text-secondary',
          link: 'text-secondary hover:text-secondary-600'
        };
      case 'finance':
        return {
          bg: 'bg-accent-50',
          text: 'text-accent-700',
          hover: 'group-hover:text-accent-700',
          link: 'text-accent-700 hover:text-accent-800'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-700',
          hover: 'group-hover:text-gray-700',
          link: 'text-gray-700 hover:text-gray-800'
        };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-8">
            A curated selection of work that showcases the intersection of creativity, strategy, and measurable results.
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'tech', 'healthcare', 'finance'].map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full font-montserrat font-medium transition-all duration-300 ${
                  activeFilter === category 
                    ? 'bg-primary text-white' 
                    : 'bg-surface text-text-primary hover:bg-primary hover:text-white'
                }`}
                onClick={() => filterProjects(category)}
              >
                {category === 'all' ? 'All Projects' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const style = getCategoryStyle(project.category);
            return (
              <div 
                key={project.id} 
                className={`project-card ${project.category} card card-hover group`}
                data-category={project.category}
              >
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img 
                    src={project.image} 
                    alt={project.alt} 
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-montserrat font-medium px-3 py-1 rounded-full ${style.bg} ${style.text}`}>
                      {project.categoryLabel}
                    </span>
                    <span className="text-xs text-text-secondary">{project.year}</span>
                  </div>
                  <h3 className={`font-montserrat font-semibold text-xl ${style.hover} transition-colors duration-300`}>
                    {project.title}
                  </h3>
                  <p className="text-text-secondary text-sm">{project.description}</p>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex space-x-2">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="text-xs bg-border-light text-text-secondary px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link 
                      to="/portfolio" 
                      className={`${style.link} transition-colors duration-300`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/portfolio" className="btn-primary">View All Projects</Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;