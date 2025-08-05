import React, { useState, useEffect } from 'react';
import MainLayout from '../../components/layout';

const PortfolioGallery = () => {
    // State management
    const [currentFilters, setCurrentFilters] = useState({
        industry: 'all',
        type: 'all',
        year: 'all',
        search: ''
    });
    const [favorites, setFavorites] = useState([]);
    const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
    const [visibleProjects, setVisibleProjects] = useState(47);

    // Initialize favorites from localStorage
    useEffect(() => {
        const savedFavorites = JSON.parse(localStorage.getItem('portfolioFavorites') || '[]');
        setFavorites(savedFavorites);
    }, []);

    // Save favorites to localStorage when they change
    useEffect(() => {
        localStorage.setItem('portfolioFavorites', JSON.stringify(favorites));
    }, [favorites]);

    // Mobile menu toggle
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    // Search functionality
    const searchProjects = (e) => {
        setCurrentFilters({ ...currentFilters, search: e.target.value.toLowerCase() });
    };

    const clearSearch = () => {
        setCurrentFilters({ ...currentFilters, search: '' });
    };

    // Filter functions
    const filterByIndustry = (industry) => {
        setCurrentFilters({ ...currentFilters, industry });
    };

    const filterByType = (type) => {
        setCurrentFilters({ ...currentFilters, type });
    };

    const filterByYear = (year) => {
        setCurrentFilters({ ...currentFilters, year });
    };

    const clearAllFilters = () => {
        setCurrentFilters({
            industry: 'all',
            type: 'all',
            year: 'all',
            search: ''
        });
    };

    // Favorites functionality
    const toggleFavorite = (projectId) => {
        if (favorites.includes(projectId)) {
            setFavorites(favorites.filter(id => id !== projectId));
        } else {
            setFavorites([...favorites, projectId]);
        }
    };

    const toggleFavorites = () => {
        setIsFavoritesOpen(!isFavoritesOpen);
    };

    const closeFavorites = () => {
        setIsFavoritesOpen(false);
    };

    // Project interaction functions
    const viewCaseStudy = (projectId) => {
        alert(`Opening case study for ${projectId}. In a real implementation, this would navigate to a detailed case study page.`);
    };

    const playProjectVideo = (projectId) => {
        alert(`Playing video preview for ${projectId}. In a real implementation, this would open a video modal or player.`);
    };

    const openInteractiveDemo = (projectId) => {
        alert(`Opening interactive demo for ${projectId}. In a real implementation, this would launch an interactive prototype or demo.`);
    };

    const shareProject = (projectId) => {
        if (navigator.share) {
            navigator.share({
                title: 'Check out this project',
                text: `Amazing project by Portfolio Pro`,
                url: window.location.href
            });
        } else {
            navigator.clipboard.writeText(window.location.href).then(() => {
                alert('Project link copied to clipboard!');
            });
        }
    };

    const loadMoreProjects = () => {
        setVisibleProjects(prev => prev + 6);
        alert('Loading more projects... In a real implementation, this would fetch additional projects via API.');
    };

    // Project data
    const projects = [
        {
            id: 'techstart',
            title: 'TechStart Analytics Platform',
            client: 'TechStart Solutions',
            description: 'Complete UX overhaul of a SaaS analytics platform resulting in 300% increased user conversions and 40% improved user engagement metrics.',
            industry: 'tech',
            type: 'web-design',
            year: '2025',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
            metrics: [
                { value: '300%', label: 'Conversion Increase' },
                { value: '40%', label: 'Engagement Boost' },
                { value: '25%', label: 'Support Reduction' }
            ],
            technologies: ['React', 'TypeScript', 'D3.js', 'Figma'],
            featured: true
        },
        {
            id: 'healthtech',
            title: 'HealthTech Patient Portal',
            client: 'HealthTech Innovations',
            description: 'Comprehensive patient portal redesign with streamlined appointment booking, resulting in 60% faster booking times and 94% user satisfaction.',
            industry: 'healthcare',
            type: 'branding',
            year: '2024',
            image: 'https://images.pixabay.com/photo/2017/10/04/09/56/laboratory-2815641_1280.jpg',
            metrics: [
                { value: '60%', label: 'Faster Booking' },
                { value: '94%', label: 'User Satisfaction' },
                { value: '50%', label: 'Load Time Boost' }
            ],
            technologies: ['Vue.js', 'HIPAA Compliant', 'Mobile First', 'Accessibility'],
            featured: true
        },
        {
            id: 'shopify',
            title: 'ShopFlow Platform',
            client: 'ShopFlow Inc.',
            description: 'Complete e-commerce redesign with improved checkout flow and mobile optimization.',
            industry: 'ecommerce',
            type: 'web-design',
            year: '2025',
            image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            technologies: ['Shopify', 'React', 'UX Research']
        },
        {
            id: 'startup',
            title: 'InnovateLab Identity',
            client: 'InnovateLab',
            description: 'Comprehensive brand identity for tech startup including logo, guidelines, and digital assets.',
            industry: 'startup',
            type: 'branding',
            year: '2024',
            image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=2340&auto=format&fit=crop',
            technologies: ['Brand Strategy', 'Logo Design', 'Guidelines']
        },
        {
            id: 'fintech',
            title: 'InvestPro Trading App',
            client: 'InvestPro',
            description: 'Modern trading interface with real-time data visualization and intuitive user experience.',
            industry: 'tech',
            type: 'ux-ui',
            year: '2024',
            image: 'https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg',
            technologies: ['React Native', 'Charts', 'Real-time']
        },
        {
            id: 'medical',
            title: 'MedFlow Analytics',
            client: 'MedFlow Systems',
            description: 'Healthcare analytics dashboard with patient data visualization and workflow optimization.',
            industry: 'healthcare',
            type: 'strategy',
            year: '2023',
            image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            technologies: ['Angular', 'D3.js', 'HIPAA']
        }
    ];

    // Filter projects based on current filters
    const filteredProjects = projects.filter(project => {
        const matchesIndustry = currentFilters.industry === 'all' || project.industry === currentFilters.industry;
        const matchesType = currentFilters.type === 'all' || project.type === currentFilters.type;
        const matchesYear = currentFilters.year === 'all' || project.year === currentFilters.year;
        const matchesSearch = currentFilters.search === '' ||
            project.title.toLowerCase().includes(currentFilters.search) ||
            project.client.toLowerCase().includes(currentFilters.search) ||
            project.description.toLowerCase().includes(currentFilters.search) ||
            project.technologies.some(tech => tech.toLowerCase().includes(currentFilters.search));

        return matchesIndustry && matchesType && matchesYear && matchesSearch;
    });

    // Separate featured and regular projects
    const featuredProjects = filteredProjects.filter(project => project.featured);
    const regularProjects = filteredProjects.filter(project => !project.featured);

    return (

        <>
            {/* Hero Section with Portfolio Statistics */}
            <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 via-surface to-secondary-50 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                        <defs>
                            <pattern id="portfolio-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#portfolio-grid)" />
                    </svg>
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-text-primary mb-6">
                            Portfolio <span className="text-gradient">Showcase</span>
                        </h1>
                        <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                            Explore a curated collection of digital experiences that blend creativity with strategy. Each project tells a story of innovation, collaboration, and measurable impact.
                        </p>
                        {/* Portfolio Statistics */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-2">47+</div>
                                <div className="text-text-secondary font-montserrat">Projects Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-montserrat font-bold text-secondary mb-2">32</div>
                                <div className="text-text-secondary font-montserrat">Satisfied Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-montserrat font-bold text-accent-600 mb-2">8</div>
                                <div className="text-text-secondary font-montserrat">Industries Served</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Advanced Filtering System */}
            <section className="py-8 bg-surface border-b border-border sticky top-16 z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative max-w-md mx-auto">
                            <input
                                type="text"
                                id="portfolio-search"
                                placeholder="Search projects, clients, or technologies..."
                                className="input-field pl-10 pr-4"
                                value={currentFilters.search}
                                onChange={searchProjects}
                            />
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg className="h-5 w-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                            <button className="absolute inset-y-0 right-0 pr-3 flex items-center" onClick={clearSearch}>
                                <svg className="h-5 w-5 text-text-secondary hover:text-text-primary transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    {/* Filter Categories */}
                    <div className="space-y-4">
                        {/* Industry Filter */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-montserrat font-semibold text-text-primary mr-2">Industry:</span>
                            <button
                                className={`filter-btn ${currentFilters.industry === 'all' ? 'active' : ''}`}
                                onClick={() => filterByIndustry('all')}
                            >
                                All Industries
                            </button>
                            <button
                                className={`filter-btn ${currentFilters.industry === 'tech' ? 'active' : ''}`}
                                onClick={() => filterByIndustry('tech')}
                            >
                                Technology
                            </button>
                            <button
                                className={`filter-btn ${currentFilters.industry === 'healthcare' ? 'active' : ''}`}
                                onClick={() => filterByIndustry('healthcare')}
                            >
                                Healthcare
                            </button>
                            <button
                                className={`filter-btn ${currentFilters.industry === 'ecommerce' ? 'active' : ''}`}
                                onClick={() => filterByIndustry('ecommerce')}
                            >
                                E-commerce
                            </button>
                            <button
                                className={`filter-btn ${currentFilters.industry === 'startup' ? 'active' : ''}`}
                                onClick={() => filterByIndustry('startup')}
                            >
                                Startups
                            </button>
                        </div>
                        {/* Project Type Filter */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-montserrat font-semibold text-text-primary mr-2">Type:</span>
                            <button
                                className={`filter-btn ${currentFilters.type === 'all' ? 'active' : ''}`}
                                onClick={() => filterByType('all')}
                            >
                                All Types
                            </button>
                            <button
                                className={`filter-btn ${currentFilters.type === 'web-design' ? 'active' : ''}`}
                                onClick={() => filterByType('web-design')}
                            >
                                Web Design
                            </button>
                            <button
                                className={`filter-btn ${currentFilters.type === 'branding' ? 'active' : ''}`}
                                onClick={() => filterByType('branding')}
                            >
                                Branding
                            </button>
                            <button
                                className={`filter-btn ${currentFilters.type === 'ux-ui' ? 'active' : ''}`}
                                onClick={() => filterByType('ux-ui')}
                            >
                                UX/UI
                            </button>
                            <button
                                className={`filter-btn ${currentFilters.type === 'strategy' ? 'active' : ''}`}
                                onClick={() => filterByType('strategy')}
                            >
                                Strategy
                            </button>
                        </div>
                        {/* Year Filter */}
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-sm font-montserrat font-semibold text-text-primary mr-2">Year:</span>
                            <button
                                className={`filter-btn ${currentFilters.year === 'all' ? 'active' : ''}`}
                                onClick={() => filterByYear('all')}
                            >
                                All Years
                            </button>
                            <button
                                className={`filter-btn ${currentFilters.year === '2025' ? 'active' : ''}`}
                                onClick={() => filterByYear('2025')}
                            >
                                2025
                            </button>
                            <button
                                className={`filter-btn ${currentFilters.year === '2024' ? 'active' : ''}`}
                                onClick={() => filterByYear('2024')}
                            >
                                2024
                            </button>
                            <button
                                className={`filter-btn ${currentFilters.year === '2023' ? 'active' : ''}`}
                                onClick={() => filterByYear('2023')}
                            >
                                2023
                            </button>
                        </div>
                        {/* Clear Filters & Results Count */}
                        <div className="flex justify-between items-center pt-4 border-t border-border">
                            <button
                                className="text-sm text-secondary hover:text-secondary-600 font-montserrat font-medium transition-colors duration-300"
                                onClick={clearAllFilters}
                            >
                                Clear All Filters
                            </button>
                            <div className="text-sm text-text-secondary">
                                Showing <span id="results-count">{filteredProjects.length}</span> projects
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Portfolio Grid */}
            <section className="py-16 bg-background">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Featured Projects Section */}
                    {featuredProjects.length > 0 && (
                        <div className="mb-16">
                            <h2 className="text-2xl md:text-3xl font-montserrat font-bold text-text-primary mb-8 text-center">
                                Featured <span className="text-gradient">Projects</span>
                            </h2>

                            <div className="grid lg:grid-cols-2 gap-8 mb-12">
                                {featuredProjects.map(project => (
                                    <div key={project.id} className="project-card featured-project group relative overflow-hidden rounded-lg shadow-primary bg-surface">
                                        <div className="relative h-80 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />

                                            {/* Video Play Button Overlay */}
                                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                                <button className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors duration-300" onClick={() => playProjectVideo(project.id)}>
                                                    <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                                    </svg>
                                                </button>
                                            </div>
                                            {/* Featured Badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="bg-accent text-primary text-xs font-montserrat font-bold px-3 py-1 rounded-full shadow-sm">
                                                    FEATURED
                                                </span>
                                            </div>
                                            {/* Favorite & Share Actions */}
                                            <div className="absolute top-4 right-4 flex space-x-2">
                                                <button
                                                    className="favorite-btn bg-white/90 rounded-full p-2 hover:bg-white transition-colors duration-300"
                                                    onClick={() => toggleFavorite(project.id)}
                                                >
                                                    <svg
                                                        className={`w-5 h-5 ${favorites.includes(project.id) ? 'text-secondary fill-current' : 'text-text-secondary'}`}
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                    </svg>
                                                </button>
                                                <button className="bg-white/90 rounded-full p-2 hover:bg-white transition-colors duration-300" onClick={() => shareProject(project.id)}>
                                                    <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-3">
                                                <span className={`text-xs font-montserrat font-medium ${project.industry === 'tech' ? 'text-primary bg-primary-50' :
                                                    project.industry === 'healthcare' ? 'text-secondary bg-secondary-50' :
                                                        'text-accent-700 bg-accent-50'
                                                    } px-3 py-1 rounded-full`}>
                                                    {project.industry === 'tech' ? 'Technology' :
                                                        project.industry === 'healthcare' ? 'Healthcare' :
                                                            project.industry === 'ecommerce' ? 'E-commerce' : 'Startup'}
                                                </span>
                                                <span className="text-xs text-text-secondary">{project.year}</span>
                                            </div>

                                            <h3 className="font-montserrat font-bold text-xl text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                                                {project.title}
                                            </h3>

                                            <p className="text-text-secondary text-sm mb-4">
                                                {project.description}
                                            </p>
                                            {/* Key Metrics */}
                                            <div className="grid grid-cols-3 gap-4 mb-4 p-3 bg-border-light rounded-lg">
                                                {project.metrics.map((metric, index) => (
                                                    <div key={index} className="text-center">
                                                        <div className={`text-lg font-montserrat font-bold ${index === 0 ? 'text-primary' :
                                                            index === 1 ? 'text-secondary' : 'text-accent-600'
                                                            }`}>
                                                            {metric.value}
                                                        </div>
                                                        <div className="text-xs text-text-secondary">{metric.label}</div>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Technologies Used */}
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {project.technologies.map((tech, index) => (
                                                    <span key={index} className="text-xs bg-border text-text-secondary px-2 py-1 rounded">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm text-text-secondary">
                                                    <span className="font-montserrat font-semibold">Client:</span> {project.client}
                                                </div>
                                                <button
                                                    className="btn-primary text-sm px-4 py-2"
                                                    onClick={() => viewCaseStudy(project.id)}
                                                >
                                                    View Case Study
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Regular Portfolio Grid */}
                    <div className="masonry-grid">
                        {regularProjects.slice(0, visibleProjects).map(project => (
                            <div key={project.id} className="project-card masonry-item group">
                                <div className="card card-hover bg-surface">
                                    <div className="relative overflow-hidden rounded-lg mb-4">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                        />

                                        {/* Hover Overlay */}
                                        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                            <div className="text-center text-white p-4">
                                                <h4 className="font-montserrat font-semibold text-lg mb-2">{project.title}</h4>
                                                <p className="text-sm mb-3">{project.description}</p>
                                            </div>
                                        </div>
                                        {/* Favorite Button */}
                                        <button
                                            className="favorite-btn absolute top-3 right-3 bg-white/90 rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            onClick={() => toggleFavorite(project.id)}
                                        >
                                            <svg
                                                className={`w-4 h-4 ${favorites.includes(project.id) ? 'text-secondary fill-current' : 'text-text-secondary'}`}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className={`text-xs font-montserrat font-medium ${project.industry === 'tech' ? 'text-primary bg-primary-50' :
                                                project.industry === 'healthcare' ? 'text-secondary bg-secondary-50' :
                                                    project.industry === 'ecommerce' ? 'text-accent-700 bg-accent-50' :
                                                        'text-accent-700 bg-accent-50'
                                                } px-2 py-1 rounded-full`}>
                                                {project.industry === 'tech' ? 'Technology' :
                                                    project.industry === 'healthcare' ? 'Healthcare' :
                                                        project.industry === 'ecommerce' ? 'E-commerce' : 'Startup'}
                                            </span>
                                            <span className="text-xs text-text-secondary">{project.year}</span>
                                        </div>

                                        <h3 className="font-montserrat font-semibold text-lg text-text-primary group-hover:text-primary transition-colors duration-300">
                                            {project.title}
                                        </h3>

                                        <p className="text-text-secondary text-sm">
                                            {project.description}
                                        </p>
                                        <div className="flex flex-wrap gap-1">
                                            {project.technologies.map((tech, index) => (
                                                <span key={index} className="text-xs bg-border text-text-secondary px-2 py-1 rounded">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex items-center justify-between pt-2">
                                            <span className="text-xs text-text-secondary">{project.client}</span>
                                            <button
                                                className="text-primary hover:text-primary-700 transition-colors duration-300"
                                                onClick={() => viewCaseStudy(project.id)}
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* Load More Button */}
                    {regularProjects.length > visibleProjects && (
                        <div className="text-center mt-12">
                            <button className="btn-outline" onClick={loadMoreProjects}>
                                Load More Projects
                                <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Favorites Sidebar */}
            <div
                id="favorites-sidebar"
                className={`fixed right-0 top-0 h-full w-80 bg-surface shadow-primary transform transition-transform duration-300 z-50 overflow-y-auto ${isFavoritesOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="font-montserrat font-bold text-xl text-text-primary">Saved Projects</h3>
                        <button onClick={closeFavorites} className="text-text-secondary hover:text-text-primary transition-colors duration-300">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div id="favorites-list" className="space-y-4">
                        {favorites.length === 0 ? (
                            <div className="text-center text-text-secondary py-8">
                                <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                                <p>No saved projects yet</p>
                                <p className="text-sm">Click the heart icon on projects to save them here</p>
                            </div>
                        ) : (
                            favorites.map(projectId => {
                                const project = projects.find(p => p.id === projectId);
                                return project ? (
                                    <div key={projectId} className="flex items-center justify-between p-3 bg-border-light rounded-lg">
                                        <div>
                                            <h4 className="font-montserrat font-semibold text-sm text-text-primary">{project.title}</h4>
                                            <p className="text-xs text-text-secondary">Saved project</p>
                                        </div>
                                        <div className="flex space-x-2">
                                            <button
                                                onClick={() => viewCaseStudy(projectId)}
                                                className="text-primary hover:text-primary-700 transition-colors duration-300"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => toggleFavorite(projectId)}
                                                className="text-secondary hover:text-secondary-600 transition-colors duration-300"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ) : null;
                            })
                        )}
                    </div>
                </div>
            </div>

            {/* Favorites Toggle Button */}
            <button
                id="favorites-toggle"
                className="fixed right-6 bottom-6 bg-secondary text-white rounded-full p-4 shadow-lg hover:bg-secondary-600 transition-all duration-300 z-40"
                onClick={toggleFavorites}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {favorites.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-primary text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                        {favorites.length}
                    </span>
                )}
            </button>

            <style jsx>{`
        .filter-btn {
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 0.875rem;
          transition: all 300ms ease-out;
          background-color: var(--color-border-light);
          color: var(--color-text-primary);
          border: none;
          cursor: pointer;
        }
        
        .filter-btn:hover {
          background-color: var(--color-primary);
          color: white;
        }
        
        .filter-btn.active {
          background-color: var(--color-primary) !important;
          color: white !important;
        }
        
        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 2rem;
          align-items: start;
        }
        
        @media (min-width: 768px) {
          .masonry-grid {
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          }
        }
        
        @media (min-width: 1024px) {
          .masonry-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }
      `}</style>
        </>

    );
};

export default PortfolioGallery;