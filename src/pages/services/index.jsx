import React, { useState, useEffect } from 'react';

const ServicesPage = () => {
  // State for mobile menu
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // State for service quiz
  const [quizAnswers, setQuizAnswers] = useState({});
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [showQuizResults, setShowQuizResults] = useState(false);
  
  // State for project calculator
  const [calculatorData, setCalculatorData] = useState({
    service: '',
    scope: '',
    timeline: '',
    additionalFeatures: []
  });
  
  const [calculatorResults, setCalculatorResults] = useState({
    baseCost: 0,
    scopeCost: 0,
    timelineCost: 0,
    featuresCost: 0,
    totalCost: 0,
    estimatedTimeline: ''
  });
  
  const [showCalculatorResults, setShowCalculatorResults] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Handle quiz option selection
  const handleQuizOptionSelect = (question, value) => {
    const newAnswers = { ...quizAnswers, [question]: value };
    setQuizAnswers(newAnswers);
    
    // Visual feedback - handled by CSS classes
    setTimeout(() => {
      if (currentQuestion === 1) {
        setCurrentQuestion(2);
      } else {
        setShowQuizResults(true);
      }
    }, 500);
  };

  // Restart quiz
  const restartQuiz = () => {
    setQuizAnswers({});
    setCurrentQuestion(1);
    setShowQuizResults(false);
  };

  // Calculate project
  const calculateProject = () => {
    const { service, scope, timeline, additionalFeatures } = calculatorData;
    
    if (!service) return;
    
    // Base prices
    const basePrices = {
      'brand': 8500,
      'web': 12500,
      'ux': 6500,
      'marketing': 4500
    };
    
    // Scope multipliers
    const scopeMultipliers = {
      'basic': 0.7,
      'standard': 1.0,
      'premium': 1.5
    };
    
    // Timeline adjustments
    const timelineAdjustments = {
      'rush': 1.5,
      'standard': 1.0,
      'extended': 0.9
    };
    
    // Timeline descriptions
    const timelineDescriptions = {
      'brand': { 'rush': '3-4 weeks', 'standard': '6-8 weeks', 'extended': '10-12 weeks' },
      'web': { 'rush': '4-6 weeks', 'standard': '8-12 weeks', 'extended': '14-16 weeks' },
      'ux': { 'rush': '2-3 weeks', 'standard': '4-6 weeks', 'extended': '8-10 weeks' },
      'marketing': { 'rush': '2-3 months', 'standard': '3-6 months', 'extended': '6-12 months' }
    };
    
    let basePrice = basePrices[service];
    let scopeMultiplier = scopeMultipliers[scope] || 1.0;
    let timelineMultiplier = timelineAdjustments[timeline] || 1.0;
    
    let baseCost = basePrice;
    let scopeCost = basePrice * (scopeMultiplier - 1);
    let timelineCost = basePrice * scopeMultiplier * (timelineMultiplier - 1);
    let featuresCost = additionalFeatures.reduce((sum, feature) => sum + feature.cost, 0);
    
    let totalCost = (basePrice * scopeMultiplier * timelineMultiplier) + featuresCost;
    
    // Update results
    setCalculatorResults({
      baseCost,
      scopeCost,
      timelineCost,
      featuresCost,
      totalCost,
      estimatedTimeline: timelineDescriptions[service]?.[timeline] || timelineDescriptions[service]?.['standard'] || 'Contact for timeline'
    });
    
    setShowCalculatorResults(true);
  };

  // Handle calculator input changes
  const handleCalculatorChange = (field, value) => {
    if (field === 'additionalFeatures') {
      const featureCosts = {
        'E-commerce Integration': 1500,
        'Multi-language Support': 800,
        'Advanced Analytics': 1200,
        'Priority Support': 600
      };
      
      const cost = featureCosts[value] || 0;
      
      setCalculatorData(prev => {
        const existingFeatures = prev.additionalFeatures || [];
        const featureExists = existingFeatures.some(f => f.name === value);
        
        if (featureExists) {
          return {
            ...prev,
            additionalFeatures: existingFeatures.filter(f => f.name !== value)
          };
        } else {
          return {
            ...prev,
            additionalFeatures: [...existingFeatures, { name: value, cost }]
          };
        }
      });
    } else {
      setCalculatorData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We\'ll contact you within 2 hours to schedule your consultation.');
  };

  // Show service details
  const showServiceDetails = (service) => {
    const details = {
      'brand': 'Comprehensive brand strategy including market research, competitive analysis, brand positioning, visual identity design, and brand guidelines.',
      'web': 'Custom website design and development with responsive design, CMS integration, SEO optimization, and performance optimization.',
      'ux': 'User experience optimization through research, wireframing, prototyping, usability testing, and implementation guidelines.',
      'marketing': 'Digital marketing strategy including content marketing, SEO/SEM, social media management, and analytics reporting.'
    };
    
    alert(details[service] || 'Service details coming soon!');
  };

  // Get quiz recommendation
  const getQuizRecommendation = () => {
    const service = quizAnswers.goal || 'brand';
    const recommendations = {
      'brand': {
        title: 'Brand Strategy & Identity',
        description: 'Perfect for building a strong, memorable brand that stands out in your market.',
        price: 'Starting from $8,500',
        timeline: '6-8 weeks'
      },
      'website': {
        title: 'Web Design & Development',
        description: 'Ideal for creating a powerful online presence that converts visitors into customers.',
        price: 'Starting from $12,500',
        timeline: '8-12 weeks'
      },
      'ux': {
        title: 'User Experience Design',
        description: 'Great for optimizing user satisfaction and improving conversion rates.',
        price: 'Starting from $6,500',
        timeline: '4-6 weeks'
      },
      'marketing': {
        title: 'Digital Marketing Strategy',
        description: 'Perfect for boosting online visibility and generating qualified leads.',
        price: 'Starting from $4,500/month',
        timeline: '3-6 months'
      }
    };
    
    return recommendations[service] || recommendations['brand'];
  };

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background text-text-primary">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 via-surface to-secondary-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="services-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#services-grid)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-text-primary mb-6">
              Strategic <span className="text-gradient">Services</span> That Drive Results
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Transform your business with data-driven design solutions. From brand strategy to digital experiences, every service is crafted to deliver measurable impact and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => scrollToSection('service-quiz')} className="btn-primary">Find Your Perfect Service</button>
              <button onClick={() => scrollToSection('consultation')} className="btn-outline">Book Free Consultation</button>
            </div>
          </div>
          {/* Service Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="card">
              <div className="text-3xl font-montserrat font-bold text-primary mb-2">150+</div>
              <div className="text-text-secondary text-sm">Projects Delivered</div>
            </div>
            <div className="card">
              <div className="text-3xl font-montserrat font-bold text-secondary mb-2">98%</div>
              <div className="text-text-secondary text-sm">Client Satisfaction</div>
            </div>
            <div className="card">
              <div className="text-3xl font-montserrat font-bold text-accent-600 mb-2">300%</div>
              <div className="text-text-secondary text-sm">Avg. ROI Increase</div>
            </div>
            <div className="card">
              <div className="text-3xl font-montserrat font-bold text-primary mb-2">8+</div>
              <div className="text-text-secondary text-sm">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Selection Quiz */}
      <section id="service-quiz" className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Find Your <span className="text-gradient">Perfect Service</span>
            </h2>
            <p className="text-lg text-text-secondary">
              Answer a few questions to get personalized service recommendations tailored to your business needs.
            </p>
          </div>
          <div className="card max-w-2xl mx-auto">
            <div id="quiz-container">
              {/* Question 1 */}
              {!showQuizResults && currentQuestion === 1 && (
                <div className="quiz-question active" data-question="1">
                  <h3 className="text-xl font-montserrat font-semibold mb-6">What's your primary business goal?</h3>
                  <div className="space-y-3">
                    <button 
                      className="quiz-option w-full text-left p-4 border border-border rounded-lg hover:border-primary hover:bg-primary-50 transition-all duration-300" 
                      data-value="brand"
                      onClick={() => handleQuizOptionSelect('goal', 'brand')}
                    >
                      <div className="font-montserrat font-medium">Build or refresh my brand identity</div>
                      <div className="text-sm text-text-secondary mt-1">Create a memorable brand that stands out</div>
                    </button>
                    <button 
                      className="quiz-option w-full text-left p-4 border border-border rounded-lg hover:border-primary hover:bg-primary-50 transition-all duration-300" 
                      data-value="website"
                      onClick={() => handleQuizOptionSelect('goal', 'website')}
                    >
                      <div className="font-montserrat font-medium">Launch or redesign my website</div>
                      <div className="text-sm text-text-secondary mt-1">Create a powerful online presence</div>
                    </button>
                    <button 
                      className="quiz-option w-full text-left p-4 border border-border rounded-lg hover:border-primary hover:bg-primary-50 transition-all duration-300" 
                      data-value="ux"
                      onClick={() => handleQuizOptionSelect('goal', 'ux')}
                    >
                      <div className="font-montserrat font-medium">Improve user experience</div>
                      <div className="text-sm text-text-secondary mt-1">Optimize conversions and user satisfaction</div>
                    </button>
                    <button 
                      className="quiz-option w-full text-left p-4 border border-border rounded-lg hover:border-primary hover:bg-primary-50 transition-all duration-300" 
                      data-value="marketing"
                      onClick={() => handleQuizOptionSelect('goal', 'marketing')}
                    >
                      <div className="font-montserrat font-medium">Boost digital marketing results</div>
                      <div className="text-sm text-text-secondary mt-1">Increase leads and online visibility</div>
                    </button>
                  </div>
                </div>
              )}
              
              {/* Question 2 */}
              {!showQuizResults && currentQuestion === 2 && (
                <div className="quiz-question active" data-question="2">
                  <h3 className="text-xl font-montserrat font-semibold mb-6">What's your project timeline?</h3>
                  <div className="space-y-3">
                    <button 
                      className="quiz-option w-full text-left p-4 border border-border rounded-lg hover:border-primary hover:bg-primary-50 transition-all duration-300" 
                      data-value="urgent"
                      onClick={() => handleQuizOptionSelect('timeline', 'urgent')}
                    >
                      <div className="font-montserrat font-medium">ASAP (2-4 weeks)</div>
                      <div className="text-sm text-text-secondary mt-1">Rush project with premium support</div>
                    </button>
                    <button 
                      className="quiz-option w-full text-left p-4 border border-border rounded-lg hover:border-primary hover:bg-primary-50 transition-all duration-300" 
                      data-value="standard"
                      onClick={() => handleQuizOptionSelect('timeline', 'standard')}
                    >
                      <div className="font-montserrat font-medium">Standard (6-8 weeks)</div>
                      <div className="text-sm text-text-secondary mt-1">Balanced timeline for quality results</div>
                    </button>
                    <button 
                      className="quiz-option w-full text-left p-4 border border-border rounded-lg hover:border-primary hover:bg-primary-50 transition-all duration-300" 
                      data-value="flexible"
                      onClick={() => handleQuizOptionSelect('timeline', 'flexible')}
                    >
                      <div className="font-montserrat font-medium">Flexible (3+ months)</div>
                      <div className="text-sm text-text-secondary mt-1">Comprehensive strategy and execution</div>
                    </button>
                  </div>
                </div>
              )}
              
              {/* Quiz Results */}
              {showQuizResults && (
                <div id="quiz-results" className="text-center">
                  <div className="mb-6">
                    <svg className="w-16 h-16 text-success mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                    <h3 className="text-2xl font-montserrat font-bold text-text-primary mb-2">Perfect Match Found!</h3>
                    <p className="text-text-secondary">Based on your answers, here's our recommendation:</p>
                  </div>
                  <div id="recommended-service" className="card bg-primary-50 border-primary">
                    <h4 className="text-xl font-montserrat font-semibold text-primary mb-2">{getQuizRecommendation().title}</h4>
                    <p className="text-text-secondary mb-4">{getQuizRecommendation().description}</p>
                    <div className="flex justify-between items-center">
                      <div className="text-lg font-montserrat font-semibold text-primary">{getQuizRecommendation().price}</div>
                      <div className="text-sm text-text-secondary">{getQuizRecommendation().timeline}</div>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
                    <button onClick={() => scrollToSection('consultation')} className="btn-primary">Book Consultation</button>
                    <button onClick={restartQuiz} className="btn-outline">Retake Quiz</button>
                  </div>
                </div>
              )}
            </div>
            {/* Quiz Progress */}
            <div className="mt-8">
              <div className="flex justify-between text-sm text-text-secondary mb-2">
                <span>Progress</span>
                <span id="quiz-progress">{showQuizResults ? 'Complete' : `${currentQuestion} of 2`}</span>
              </div>
              <div className="w-full bg-border-light rounded-full h-2">
                <div 
                  id="progress-bar" 
                  className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-300" 
                  style={{ width: showQuizResults ? '100%' : `${(currentQuestion / 2) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Strategic <span className="text-gradient">Service Offerings</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Each service is designed as a comprehensive business solution, combining creative excellence with strategic thinking to deliver measurable results.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Brand Strategy & Identity */}
            <div className="service-card card card-hover group">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-montserrat font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                    Brand Strategy & Identity
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Comprehensive brand development that positions your business for long-term success through strategic positioning, visual identity, and brand guidelines.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-text-secondary mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      6-8 weeks
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                      </svg>
                      From $8,500
                    </div>
                  </div>
                </div>
              </div>
              {/* Service Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-montserrat font-semibold text-text-primary mb-2">What's Included:</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>Brand strategy & positioning</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>Logo design & variations</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>Color palette & typography</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>Brand guidelines document</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>Business card & letterhead designs</li>
                  </ul>
                </div>
              </div>
              {/* Client Success Story */}
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-3">
                  <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Sarah Chen, TechStart CEO" className="w-10 h-10 rounded-full object-cover mr-3" loading="lazy" />
                  <div>
                    <div className="font-montserrat font-semibold text-sm">Sarah Chen</div>
                    <div className="text-xs text-text-secondary">CEO, TechStart Solutions</div>
                  </div>
                </div>
                <p className="text-sm text-text-secondary italic">
                  "The brand strategy transformed our market position. We saw a 200% increase in brand recognition and 150% growth in qualified leads within 6 months."
                </p>
                <div className="flex items-center mt-3 text-xs text-success">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  200% brand recognition increase
                </div>
              </div>
              <div className="flex space-x-3">
                <button onClick={() => scrollToSection('consultation')} className="btn-primary flex-1 text-center">Get Started</button>
                <button onClick={() => showServiceDetails('brand')} className="btn-outline">Learn More</button>
              </div>
            </div>

            {/* Web Design & Development */}
            <div className="service-card card card-hover group">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-montserrat font-bold text-text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                    Web Design & Development
                  </h3>
                  <p className="text-text-secondary mb-4">
                    High-performance websites that convert visitors into customers through strategic design, seamless user experience, and robust development.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-text-secondary mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      8-12 weeks
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                      </svg>
                      From $12,500
                    </div>
                  </div>
                </div>
              </div>
              {/* Service Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-montserrat font-semibold text-text-primary mb-2">What's Included:</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>Custom responsive design</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>CMS integration & training</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>SEO optimization</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>Performance optimization</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>3 months support & maintenance</li>
                  </ul>
                </div>
              </div>
              {/* Client Success Story */}
              <div className="bg-secondary-50 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-3">
                  <img src="https://images.pixabay.com/photo-2016/11/21/12/42/beard-1845166_1280.jpg" alt="Michael Rodriguez, E-commerce Director" className="w-10 h-10 rounded-full object-cover mr-3" loading="lazy" />
                  <div>
                    <div className="font-montserrat font-semibold text-sm">Michael Rodriguez</div>
                    <div className="text-xs text-text-secondary">Director, RetailFlow</div>
                  </div>
                </div>
                <p className="text-sm text-text-secondary italic">
                  "Our new website increased conversions by 300% and reduced bounce rate by 45%. The investment paid for itself within the first quarter."
                </p>
                <div className="flex items-center mt-3 text-xs text-success">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  300% conversion increase
                </div>
              </div>
              <div className="flex space-x-3">
                <button onClick={() => scrollToSection('consultation')} className="btn-primary flex-1 text-center">Get Started</button>
                <button onClick={() => showServiceDetails('web')} className="btn-outline">Learn More</button>
              </div>
            </div>

            {/* User Experience Design */}
            <div className="service-card card card-hover group">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-montserrat font-bold text-text-primary mb-2 group-hover:text-accent-600 transition-colors duration-300">
                    User Experience Design
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Data-driven UX optimization that transforms user behavior into business results through research, testing, and strategic design improvements.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-text-secondary mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      4-6 weeks
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                      </svg>
                      From $6,500
                    </div>
                  </div>
                </div>
              </div>
              {/* Service Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-montserrat font-semibold text-text-primary mb-2">What's Included:</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>UX audit & analysis</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>User research & personas</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>Wireframes & prototypes</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>Usability testing</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>Implementation guidelines</li>
                  </ul>
                </div>
              </div>
              {/* Client Success Story */}
              <div className="bg-accent-50 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-3">
                  <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2340&auto=format&fit=crop" alt="Lisa Park, Product Manager" className="w-10 h-10 rounded-full object-cover mr-3" loading="lazy" />
                  <div>
                    <div className="font-montserrat font-semibold text-sm">Lisa Park</div>
                    <div className="text-xs text-text-secondary">Product Manager, AppFlow</div>
                  </div>
                </div>
                <p className="text-sm text-text-secondary italic">
                  "The UX redesign reduced user drop-off by 60% and increased feature adoption by 180%. Our user satisfaction scores hit an all-time high."
                </p>
                <div className="flex items-center mt-3 text-xs text-success">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  60% reduction in drop-off
                </div>
              </div>
              <div className="flex space-x-3">
                <button onClick={() => scrollToSection('consultation')} className="btn-primary flex-1 text-center">Get Started</button>
                <button onClick={() => showServiceDetails('ux')} className="btn-outline">Learn More</button>
              </div>
            </div>

            {/* Digital Marketing Strategy */}
            <div className="service-card card card-hover group">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-montserrat font-bold text-text-primary mb-2 group-hover:text-primary transition-colors duration-300">
                    Digital Marketing Strategy
                  </h3>
                  <p className="text-text-secondary mb-4">
                    Comprehensive digital marketing strategies that drive qualified leads and sustainable growth through multi-channel campaigns and data analysis.
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-text-secondary mb-4">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      3-6 months
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                      </svg>
                      From $4,500/mo
                    </div>
                  </div>
                </div>
              </div>
              {/* Service Details */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-montserrat font-semibold text-text-primary mb-2">What's Included:</h4>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>Marketing strategy & planning</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>Content marketing campaigns</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>SEO & SEM optimization</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>Social media management</li>
                    <li className="flex items-center"><svg className="w-4 h-4 text-success mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>Analytics & reporting</li>
                  </ul>
                </div>
              </div>
              {/* Client Success Story */}
              <div className="bg-primary-50 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-3">
                  <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="David Kim, Marketing Director" className="w-10 h-10 rounded-full object-cover mr-3" loading="lazy" />
                  <div>
                    <div className="font-montserrat font-semibold text-sm">David Kim</div>
                    <div className="text-xs text-text-secondary">Marketing Director, GrowthCo</div>
                  </div>
                </div>
                <p className="text-sm text-text-secondary italic">
                  "Our lead generation increased by 400% and cost per acquisition dropped by 50%. The ROI exceeded all expectations within the first quarter."
                </p>
                <div className="flex items-center mt-3 text-xs text-success">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  400% lead generation increase
                </div>
              </div>
              <div className="flex space-x-3">
                <button onClick={() => scrollToSection('consultation')} className="btn-primary flex-1 text-center">Get Started</button>
                <button onClick={() => showServiceDetails('marketing')} className="btn-outline">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Project Calculator */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Project <span className="text-gradient">Calculator</span>
            </h2>
            <p className="text-lg text-text-secondary">
              Get an instant estimate for your project based on your specific requirements and scope.
            </p>
          </div>
          <div className="card">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Calculator Form */}
              <div>
                <h3 className="text-xl font-montserrat font-semibold mb-6">Project Details</h3>
                
                {/* Service Type */}
                <div className="mb-6">
                  <label className="block text-sm font-montserrat font-medium text-text-primary mb-3">Service Type</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="service" 
                        value="brand" 
                        className="mr-3" 
                        checked={calculatorData.service === 'brand'}
                        onChange={() => handleCalculatorChange('service', 'brand')}
                      />
                      <span>Brand Strategy & Identity</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="service" 
                        value="web" 
                        className="mr-3" 
                        checked={calculatorData.service === 'web'}
                        onChange={() => handleCalculatorChange('service', 'web')}
                      />
                      <span>Web Design & Development</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="service" 
                        value="ux" 
                        className="mr-3" 
                        checked={calculatorData.service === 'ux'}
                        onChange={() => handleCalculatorChange('service', 'ux')}
                      />
                      <span>User Experience Design</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="radio" 
                        name="service" 
                        value="marketing" 
                        className="mr-3" 
                        checked={calculatorData.service === 'marketing'}
                        onChange={() => handleCalculatorChange('service', 'marketing')}
                      />
                      <span>Digital Marketing Strategy</span>
                    </label>
                  </div>
                </div>
                
                {/* Project Scope */}
                <div className="mb-6">
                  <label className="block text-sm font-montserrat font-medium text-text-primary mb-3">Project Scope</label>
                  <select 
                    className="input-field" 
                    value={calculatorData.scope}
                    onChange={(e) => handleCalculatorChange('scope', e.target.value)}
                  >
                    <option value="">Select scope...</option>
                    <option value="basic">Basic - Essential features</option>
                    <option value="standard">Standard - Comprehensive solution</option>
                    <option value="premium">Premium - Full-service package</option>
                  </select>
                </div>
                
                {/* Timeline */}
                <div className="mb-6">
                  <label className="block text-sm font-montserrat font-medium text-text-primary mb-3">Timeline</label>
                  <select 
                    className="input-field" 
                    value={calculatorData.timeline}
                    onChange={(e) => handleCalculatorChange('timeline', e.target.value)}
                  >
                    <option value="">Select timeline...</option>
                    <option value="rush">Rush (2-4 weeks) - +50%</option>
                    <option value="standard">Standard (6-8 weeks)</option>
                    <option value="extended">Extended (3+ months) - 10% discount</option>
                  </select>
                </div>
                
                {/* Additional Features */}
                <div className="mb-6">
                  <label className="block text-sm font-montserrat font-medium text-text-primary mb-3">Additional Features</label>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-3" 
                        checked={calculatorData.additionalFeatures.some(f => f.name === 'E-commerce Integration')}
                        onChange={() => handleCalculatorChange('additionalFeatures', 'E-commerce Integration')}
                      />
                      <span>E-commerce Integration (+$1,500)</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-3" 
                        checked={calculatorData.additionalFeatures.some(f => f.name === 'Multi-language Support')}
                        onChange={() => handleCalculatorChange('additionalFeatures', 'Multi-language Support')}
                      />
                      <span>Multi-language Support (+$800)</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-3" 
                        checked={calculatorData.additionalFeatures.some(f => f.name === 'Advanced Analytics')}
                        onChange={() => handleCalculatorChange('additionalFeatures', 'Advanced Analytics')}
                      />
                      <span>Advanced Analytics (+$1,200)</span>
                    </label>
                    <label className="flex items-center">
                      <input 
                        type="checkbox" 
                        className="mr-3" 
                        checked={calculatorData.additionalFeatures.some(f => f.name === 'Priority Support')}
                        onChange={() => handleCalculatorChange('additionalFeatures', 'Priority Support')}
                      />
                      <span>Priority Support (+$600)</span>
                    </label>
                  </div>
                </div>
                
                <button onClick={calculateProject} className="btn-primary w-full">Calculate Project</button>
              </div>
              
              {/* Calculator Results */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-6">
                <h3 className="text-xl font-montserrat font-semibold mb-6">Project Estimate</h3>
                
                {!showCalculatorResults ? (
                  <div id="calculator-results" className="space-y-4">
                    <div className="text-center py-8">
                      <svg className="w-16 h-16 text-border mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
                      </svg>
                      <p className="text-text-secondary">Select your project details to see an estimate</p>
                    </div>
                  </div>
                ) : (
                  <div id="estimate-breakdown" className="space-y-4">
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span>Base Service:</span>
                        <span>${calculatorResults.baseCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Scope Adjustment:</span>
                        <span>${calculatorResults.scopeCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Timeline Adjustment:</span>
                        <span>${calculatorResults.timelineCost.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Additional Features:</span>
                        <span>${calculatorResults.featuresCost.toLocaleString()}</span>
                      </div>
                      <div className="border-t border-border pt-3">
                        <div className="flex justify-between text-lg font-montserrat font-semibold">
                          <span>Total Estimate:</span>
                          <span className="text-primary">${calculatorResults.totalCost.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-surface rounded-lg p-4 mb-6">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-accent-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                        </svg>
                        <span className="font-montserrat font-medium text-sm">Estimated Timeline:</span>
                      </div>
                      <p className="text-sm text-text-secondary">{calculatorResults.estimatedTimeline}</p>
                    </div>
                    <button onClick={() => scrollToSection('consultation')} className="btn-primary w-full text-center">Get Detailed Quote</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Packages Comparison */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Service <span className="text-gradient">Packages</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Choose the perfect package for your business needs. All packages include our signature strategic approach and premium support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter Package */}
            <div className="card card-hover relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-montserrat font-bold text-text-primary mb-2">Starter</h3>
                <p className="text-text-secondary mb-4">Perfect for small businesses and startups</p>
                <div className="text-4xl font-montserrat font-bold text-primary mb-2">$5,500</div>
                <div className="text-sm text-text-secondary">Starting from</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Brand identity essentials</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">5-page website</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Mobile responsive design</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Basic SEO optimization</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">30 days support</span>
                </div>
                <div className="flex items-center opacity-50">
                  <svg className="w-5 h-5 text-border mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Advanced analytics</span>
                </div>
                <div className="flex items-center opacity-50">
                  <svg className="w-5 h-5 text-border mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Priority support</span>
                </div>
              </div>
              <button onClick={() => scrollToSection('consultation')} className="btn-outline w-full text-center">Get Started</button>
            </div>
            
            {/* Professional Package */}
            <div className="card card-hover relative border-2 border-primary">
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-montserrat font-semibold">Most Popular</span>
              </div>
              <div className="text-center mb-6 pt-4">
                <h3 className="text-2xl font-montserrat font-bold text-text-primary mb-2">Professional</h3>
                <p className="text-text-secondary mb-4">Ideal for growing businesses</p>
                <div className="text-4xl font-montserrat font-bold text-primary mb-2">$12,500</div>
                <div className="text-sm text-text-secondary">Starting from</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Complete brand strategy</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">10-page custom website</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">CMS integration & training</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Advanced SEO optimization</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">90 days support</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Advanced analytics</span>
                </div>
                <div className="flex items-center opacity-50">
                  <svg className="w-5 h-5 text-border mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Priority support</span>
                </div>
              </div>
              <button onClick={() => scrollToSection('consultation')} className="btn-primary w-full text-center">Get Started</button>
            </div>
            
            {/* Enterprise Package */}
            <div className="card card-hover relative">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-montserrat font-bold text-text-primary mb-2">Enterprise</h3>
                <p className="text-text-secondary mb-4">For established businesses and corporations</p>
                <div className="text-4xl font-montserrat font-bold text-primary mb-2">$25,000+</div>
                <div className="text-sm text-text-secondary">Custom pricing</div>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Comprehensive brand ecosystem</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Custom web application</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Multi-platform integration</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Enterprise SEO strategy</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">12 months support</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Advanced analytics & reporting</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-success mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-sm">Dedicated account manager</span>
                </div>
              </div>
              <button onClick={() => scrollToSection('consultation')} className="btn-outline w-full text-center">Contact Sales</button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-text-secondary mb-4">All packages include our 100% satisfaction guarantee</p>
            <div className="flex justify-center space-x-8 text-sm text-text-secondary">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Money-back guarantee
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Unlimited revisions
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-success mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                Flexible payment plans
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Documentation */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Our Strategic <span className="text-gradient">Process</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Transparency is key to successful partnerships. Here's exactly how we work together to achieve your goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1: Discovery */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-montserrat font-bold text-primary">1</span>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-4">Discovery</h3>
              <p className="text-text-secondary text-sm mb-4">
                Deep dive into your business, goals, and challenges through comprehensive research and stakeholder interviews.
              </p>
              <div className="text-xs text-text-secondary">
                <div className="flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  1-2 weeks
                </div>
                <div>Strategy sessions, competitor analysis, user research</div>
              </div>
            </div>
            
            {/* Step 2: Strategy */}
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-montserrat font-bold text-secondary">2</span>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-4">Strategy</h3>
              <p className="text-text-secondary text-sm mb-4">
                Develop comprehensive strategic framework with clear objectives, target personas, and success metrics.
              </p>
              <div className="text-xs text-text-secondary">
                <div className="flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  1-2 weeks
                </div>
                <div>Strategic planning, wireframes, content strategy</div>
              </div>
            </div>
            
            {/* Step 3: Design */}
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-montserrat font-bold text-accent-600">3</span>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-4">Design</h3>
              <p className="text-text-secondary text-sm mb-4">
                Create stunning visual designs that align with strategy and resonate with your target audience.
              </p>
              <div className="text-xs text-text-secondary">
                <div className="flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  3-4 weeks
                </div>
                <div>Visual design, prototyping, user testing</div>
              </div>
            </div>
            
            {/* Step 4: Launch */}
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-montserrat font-bold text-primary">4</span>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-4">Launch</h3>
              <p className="text-text-secondary text-sm mb-4">
                Execute flawless launch with comprehensive testing, training, and ongoing optimization support.
              </p>
              <div className="text-xs text-text-secondary">
                <div className="flex items-center justify-center mb-1">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  1-2 weeks
                </div>
                <div>Development, testing, training, launch</div>
              </div>
            </div>
          </div>
          
          {/* Process Flow */}
          <div className="mt-16">
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg p-8">
              <h3 className="text-2xl font-montserrat font-semibold text-center text-text-primary mb-8">
                What Makes Our Process Different
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414 1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13V12a1 1 0 011-1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="font-montserrat font-semibold text-text-primary mb-2">Data-Driven Decisions</h4>
                  <p className="text-sm text-text-secondary">Every decision backed by research, analytics, and user feedback</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="font-montserrat font-semibold text-text-primary mb-2">Transparent Communication</h4>
                  <p className="text-sm text-text-secondary">Regular updates, clear timelines, and open collaboration</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h4 className="font-montserrat font-semibold text-text-primary mb-2">Results Guarantee</h4>
                  <p className="text-sm text-text-secondary">We don't just deliver projects, we deliver measurable results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Booking */}
      <section id="consultation" className="py-20 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Book a free 30-minute strategy consultation to discuss your project and discover how we can help you achieve your goals.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Consultation Form */}
            <div className="card">
              <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-6">Book Your Free Consultation</h3>
              
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-montserrat font-medium text-text-primary mb-2">First Name</label>
                    <input type="text" className="input-field" placeholder="John" required />
                  </div>
                  <div>
                    <label className="block text-sm font-montserrat font-medium text-text-primary mb-2">Last Name</label>
                    <input type="text" className="input-field" placeholder="Doe" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-montserrat font-medium text-text-primary mb-2">Email</label>
                  <input type="email" className="input-field" placeholder="john@company.com" required />
                </div>
                <div>
                  <label className="block text-sm font-montserrat font-medium text-text-primary mb-2">Company</label>
                  <input type="text" className="input-field" placeholder="Your Company Name" />
                </div>
                <div>
                  <label className="block text-sm font-montserrat font-medium text-text-primary mb-2">Service Interest</label>
                  <select className="input-field" required>
                    <option value="">Select a service...</option>
                    <option value="brand">Brand Strategy & Identity</option>
                    <option value="web">Web Design & Development</option>
                    <option value="ux">User Experience Design</option>
                    <option value="marketing">Digital Marketing Strategy</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="not-sure">Not Sure Yet</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-montserrat font-medium text-text-primary mb-2">Project Budget</label>
                  <select className="input-field">
                    <option value="">Select budget range...</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="50k+">$50,000+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-montserrat font-medium text-text-primary mb-2">Project Timeline</label>
                  <select className="input-field">
                    <option value="">Select timeline...</option>
                    <option value="asap">ASAP (Rush project)</option>
                    <option value="1-2months">1-2 months</option>
                    <option value="3-6months">3-6 months</option>
                    <option value="6months+">6+ months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-montserrat font-medium text-text-primary mb-2">Tell us about your project</label>
                  <textarea className="input-field" rows="4" placeholder="Describe your project goals, challenges, and what success looks like to you..."></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">Book Free Consultation</button>
              </form>
            </div>
            
            {/* Consultation Benefits */}
            <div className="space-y-6">
              <div className="card bg-white/10 backdrop-blur-sm border-white/20">
                <h4 className="font-montserrat font-semibold text-white mb-4">What to Expect</h4>
                <ul className="space-y-3 text-white/90 text-sm">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>30-minute strategic discussion about your goals and challenges</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Personalized recommendations and strategic insights</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>Detailed project proposal with timeline and investment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    <span>No obligation - valuable insights even if we don't work together</span>
                  </li>
                </ul>
              </div>
              
              <div className="card bg-white/10 backdrop-blur-sm border-white/20">
                <h4 className="font-montserrat font-semibold text-white mb-4">Available Time Slots</h4>
                <div className="space-y-2 text-white/90 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Time:</span>
                    <span>Within 2 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consultation Length:</span>
                    <span>30 minutes</span>
                  </div>
                </div>
              </div>
              
              <div className="card bg-white/10 backdrop-blur-sm border-white/20">
                <h4 className="font-montserrat font-semibold text-white mb-4">Alternative Contact</h4>
                <div className="space-y-3 text-white/90 text-sm">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <a href="mailto:hello@portfoliopro.com" className="hover:text-accent transition-colors duration-300">hello@portfoliopro.com</a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <a href="tel:+15551234567" className="hover:text-accent transition-colors duration-300">+1 (555) 123-4567</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;