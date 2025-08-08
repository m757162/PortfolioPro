import React, { useState } from 'react';


const ContactPage = () => {
  // FAQ state
  const [openFAQ, setOpenFAQ] = useState(null);
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    industry: '',
    projectDescription: '',
    inspiration: '',
    hasExistingBrand: false,
    needsHosting: false,
    needsMaintenance: false,
    needsTraining: false,
    hearAboutUs: ''
  });
  
  // Cost estimator state
  const [estimatorData, setEstimatorData] = useState({
    type: '',
    complexity: '',
    seo: false,
    cms: false,
    maintenance: false,
    training: false
  });
  
  const [estimate, setEstimate] = useState({
    amount: '$0 - $0',
    base: '$0',
    multiplier: '1x',
    addons: '$0'
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle estimator changes
  const handleEstimatorChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEstimatorData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Update estimate when values change
    updateEstimate({
      ...estimatorData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Update cost estimate
  const updateEstimate = (data) => {
    let baseMin = 0, baseMax = 0;
    let multiplier = 1;
    let addons = 0;
    
    // Base project costs
    switch(data.type) {
      case 'website':
        baseMin = 5000;
        baseMax = 15000;
        break;
      case 'branding':
        baseMin = 3000;
        baseMax = 10000;
        break;
      case 'app':
        baseMin = 15000;
        baseMax = 50000;
        break;
      case 'ecommerce':
        baseMin = 10000;
        baseMax = 30000;
        break;
    }
    
    // Complexity multiplier
    switch(data.complexity) {
      case 'basic':
        multiplier = 1;
        break;
      case 'standard':
        multiplier = 1.5;
        break;
      case 'advanced':
        multiplier = 2;
        break;
      case 'enterprise':
        multiplier = 3;
        break;
    }
    
    // Additional services
    if (data.seo) addons += 2000;
    if (data.cms) addons += 3000;
    if (data.maintenance) addons += 1500;
    if (data.training) addons += 1000;
    
    // Calculate totals
    const totalMin = Math.round((baseMin * multiplier) + addons);
    const totalMax = Math.round((baseMax * multiplier) + addons);
    
    // Update display
    setEstimate({
      amount: `$${totalMin.toLocaleString()} - $${totalMax.toLocaleString()}`,
      base: `$${baseMin.toLocaleString()} - $${baseMax.toLocaleString()}`,
      multiplier: `${multiplier}x`,
      addons: `$${addons.toLocaleString()}`
    });
  };

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show success message
    alert('Thank you for your inquiry! We\'ll respond within 24 hours with a detailed proposal.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      timeline: '',
      industry: '',
      projectDescription: '',
      inspiration: '',
      hasExistingBrand: false,
      needsHosting: false,
      needsMaintenance: false,
      needsTraining: false,
      hearAboutUs: ''
    });
  };

  // Request detailed quote
  const requestDetailedQuote = () => {
    alert('Redirecting to detailed quote form. In a real implementation, this would open a more comprehensive form or schedule a consultation.');
  };

  // Download resource
  const downloadResource = (type) => {
    const resources = {
      'project-brief': 'Project_Brief_Template.pdf',
      'design-checklist': 'Design_Checklist.pdf',
      'brand-guide': 'Brand_Guidelines_Template.pdf'
    };
    
    alert(`Downloading ${resources[type]}. In a real implementation, this would download the actual PDF file.`);
  };

  // Open calendar booking
  const openCalendarBooking = () => {
    alert('Opening calendar booking system. In a real implementation, this would integrate with a scheduling service like Calendly.');
  };

  return (
    < >
    
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 via-surface to-secondary-50 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="contact-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#contact-grid)"/>
          </svg>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-text-primary mb-6">
              Let's Create Something <span className="text-gradient">Extraordinary</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Ready to transform your vision into reality? Choose your preferred way to connect and let's start building something amazing together.
            </p>
            {/* Quick Contact Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-2">24h</div>
                <div className="text-sm text-text-secondary">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-montserrat font-bold text-secondary mb-2">150+</div>
                <div className="text-sm text-text-secondary">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-montserrat font-bold text-accent-600 mb-2">98%</div>
                <div className="text-sm text-text-secondary">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-montserrat font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-text-secondary">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Choose Your <span className="text-gradient">Preferred Channel</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Multiple ways to connect based on your communication style and project needs.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Email Contact */}
            <div className="card card-hover text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-3">Email</h3>
              <p className="text-text-secondary text-sm mb-4">Perfect for detailed project discussions and file sharing</p>
              <a href="mailto:hello@portfoliopro.com" className="text-primary hover:text-primary-700 font-montserrat font-medium transition-colors duration-300">
                hello@portfoliopro.com
              </a>
              <div className="mt-4 text-xs text-text-secondary">Response within 4 hours</div>
            </div>
            {/* Phone Contact */}
            <div className="card card-hover text-center group">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-3">Phone</h3>
              <p className="text-text-secondary text-sm mb-4">Quick discussions and urgent project needs</p>
              <a href="tel:+15551234567" className="text-secondary hover:text-secondary-600 font-montserrat font-medium transition-colors duration-300">
                +1 (555) 123-4567
              </a>
              <div className="mt-4 text-xs text-text-secondary">Mon-Fri, 9AM-6PM PST</div>
            </div>
            {/* LinkedIn Contact */}
            <div className="card card-hover text-center group">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-3">LinkedIn</h3>
              <p className="text-text-secondary text-sm mb-4">Professional networking and collaboration opportunities</p>
              <a href="javascript:void(0)" className="text-accent-600 hover:text-accent-700 font-montserrat font-medium transition-colors duration-300">
                Connect on LinkedIn
              </a>
              <div className="mt-4 text-xs text-text-secondary">Professional inquiries</div>
            </div>
            {/* Calendar Booking */}
            <div className="card card-hover text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-3">Schedule Call</h3>
              <p className="text-text-secondary text-sm mb-4">Book a consultation to discuss your project in detail</p>
              <button onClick={openCalendarBooking} className="text-primary hover:text-primary-700 font-montserrat font-medium transition-colors duration-300">
                Book Consultation
              </button>
              <div className="mt-4 text-xs text-text-secondary">30-60 min sessions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Inquiry Form */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-accent-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Start Your <span className="text-gradient">Project Journey</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Tell us about your vision and we'll craft a tailored solution that exceeds your expectations.
            </p>
          </div>
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-montserrat font-medium text-text-primary mb-2">First Name *</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name="firstName" 
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required 
                    className="input-field" 
                    placeholder="John" 
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-montserrat font-medium text-text-primary mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    name="lastName" 
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required 
                    className="input-field" 
                    placeholder="Doe" 
                  />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-montserrat font-medium text-text-primary mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                    className="input-field" 
                    placeholder="john@company.com" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-montserrat font-medium text-text-primary mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="input-field" 
                    placeholder="+1 (555) 123-4567" 
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-montserrat font-medium text-text-primary mb-2">Company/Organization</label>
                <input 
                  type="text" 
                  id="company" 
                  name="company" 
                  value={formData.company}
                  onChange={handleInputChange}
                  className="input-field" 
                  placeholder="Your Company Name" 
                />
              </div>
              {/* Project Details */}
              <div className="border-t border-border pt-8">
                <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-6">Project Details</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-montserrat font-medium text-text-primary mb-2">Project Type *</label>
                    <select 
                      id="projectType" 
                      name="projectType" 
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required 
                      className="input-field"
                    >
                      <option value="">Select project type</option>
                      <option value="website-design">Website Design</option>
                      <option value="brand-identity">Brand Identity</option>
                      <option value="ui-ux-design">UI/UX Design</option>
                      <option value="mobile-app">Mobile App</option>
                      <option value="e-commerce">E-commerce</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-montserrat font-medium text-text-primary mb-2">Budget Range *</label>
                    <select 
                      id="budget" 
                      name="budget" 
                      value={formData.budget}
                      onChange={handleInputChange}
                      required 
                      className="input-field"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-10k">$5,000 - $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                      <option value="discuss">Let's Discuss</option>
                    </select>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-montserrat font-medium text-text-primary mb-2">Timeline *</label>
                    <select 
                      id="timeline" 
                      name="timeline" 
                      value={formData.timeline}
                      onChange={handleInputChange}
                      required 
                      className="input-field"
                    >
                      <option value="">Select timeline</option>
                      <option value="asap">ASAP (Rush project)</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="2-3-months">2-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-months+">6+ months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="industry" className="block text-sm font-montserrat font-medium text-text-primary mb-2">Industry</label>
                    <select 
                      id="industry" 
                      name="industry" 
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="">Select industry</option>
                      <option value="technology">Technology</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="finance">Finance</option>
                      <option value="education">Education</option>
                      <option value="retail">Retail/E-commerce</option>
                      <option value="nonprofit">Non-profit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-montserrat font-medium text-text-primary mb-2">Project Description *</label>
                  <textarea 
                    id="projectDescription" 
                    name="projectDescription" 
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows="6" 
                    required 
                    className="input-field" 
                    placeholder="Tell us about your project goals, target audience, specific requirements, and any challenges you're facing..."
                  ></textarea>
                </div>
                <div>
                  <label htmlFor="inspiration" className="block text-sm font-montserrat font-medium text-text-primary mb-2">Inspiration & References</label>
                  <textarea 
                    id="inspiration" 
                    name="inspiration" 
                    value={formData.inspiration}
                    onChange={handleInputChange}
                    rows="3" 
                    className="input-field" 
                    placeholder="Share any websites, designs, or references that inspire you for this project..."
                  ></textarea>
                </div>
              </div>
              {/* Additional Information */}
              <div className="border-t border-border pt-8">
                <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-6">Additional Information</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="hasExistingBrand" 
                      name="hasExistingBrand" 
                      checked={formData.hasExistingBrand}
                      onChange={handleInputChange}
                      className="mt-1 mr-3" 
                    />
                    <label htmlFor="hasExistingBrand" className="text-sm text-text-primary">I have existing brand guidelines/assets</label>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="needsHosting" 
                      name="needsHosting" 
                      checked={formData.needsHosting}
                      onChange={handleInputChange}
                      className="mt-1 mr-3" 
                    />
                    <label htmlFor="needsHosting" className="text-sm text-text-primary">I need hosting and domain setup</label>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="needsMaintenance" 
                      name="needsMaintenance" 
                      checked={formData.needsMaintenance}
                      onChange={handleInputChange}
                      className="mt-1 mr-3" 
                    />
                    <label htmlFor="needsMaintenance" className="text-sm text-text-primary">I'm interested in ongoing maintenance</label>
                  </div>
                  <div className="flex items-start">
                    <input 
                      type="checkbox" 
                      id="needsTraining" 
                      name="needsTraining" 
                      checked={formData.needsTraining}
                      onChange={handleInputChange}
                      className="mt-1 mr-3" 
                    />
                    <label htmlFor="needsTraining" className="text-sm text-text-primary">I need training on how to manage the final product</label>
                  </div>
                </div>
                <div>
                  <label htmlFor="hearAboutUs" className="block text-sm font-montserrat font-medium text-text-primary mb-2">How did you hear about us?</label>
                  <select 
                    id="hearAboutUs" 
                    name="hearAboutUs" 
                    value={formData.hearAboutUs}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="">Select source</option>
                    <option value="google-search">Google Search</option>
                    <option value="social-media">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="portfolio-site">Portfolio Website</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              {/* Submit Button */}
              <div className="text-center pt-8">
                <button type="submit" className="btn-primary text-lg px-12 py-4">
                  Send Project Inquiry
                </button>
                <p className="text-sm text-text-secondary mt-4">
                  We'll respond within 24 hours with next steps and a detailed project proposal.
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Project Cost Estimator */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Project <span className="text-gradient">Cost Estimator</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Get an instant estimate for your project based on your specific requirements.
            </p>
          </div>
          <div className="card">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Estimator Form */}
              <div>
                <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-6">Project Requirements</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-montserrat font-medium text-text-primary mb-3">Project Type</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="type" 
                          value="website" 
                          checked={estimatorData.type === 'website'}
                          onChange={handleEstimatorChange}
                          className="mr-3" 
                        />
                        <span className="text-sm">Website Design ($5,000 - $15,000)</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="type" 
                          value="branding" 
                          checked={estimatorData.type === 'branding'}
                          onChange={handleEstimatorChange}
                          className="mr-3" 
                        />
                        <span className="text-sm">Brand Identity ($3,000 - $10,000)</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="type" 
                          value="app" 
                          checked={estimatorData.type === 'app'}
                          onChange={handleEstimatorChange}
                          className="mr-3" 
                        />
                        <span className="text-sm">Mobile App ($15,000 - $50,000)</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="radio" 
                          name="type" 
                          value="ecommerce" 
                          checked={estimatorData.type === 'ecommerce'}
                          onChange={handleEstimatorChange}
                          className="mr-3" 
                        />
                        <span className="text-sm">E-commerce ($10,000 - $30,000)</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-montserrat font-medium text-text-primary mb-3">Complexity Level</label>
                    <select 
                      id="complexity" 
                      name="complexity" 
                      value={estimatorData.complexity}
                      onChange={handleEstimatorChange}
                      className="input-field"
                    >
                      <option value="">Select complexity</option>
                      <option value="basic">Basic (1x multiplier)</option>
                      <option value="standard">Standard (1.5x multiplier)</option>
                      <option value="advanced">Advanced (2x multiplier)</option>
                      <option value="enterprise">Enterprise (3x multiplier)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-montserrat font-medium text-text-primary mb-3">Additional Services</label>
                    <div className="space-y-2">
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="seo" 
                          name="seo" 
                          checked={estimatorData.seo}
                          onChange={handleEstimatorChange}
                          className="mr-3" 
                        />
                        <span className="text-sm">SEO Optimization (+$2,000)</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="cms" 
                          name="cms" 
                          checked={estimatorData.cms}
                          onChange={handleEstimatorChange}
                          className="mr-3" 
                        />
                        <span className="text-sm">CMS Integration (+$3,000)</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="maintenance" 
                          name="maintenance" 
                          checked={estimatorData.maintenance}
                          onChange={handleEstimatorChange}
                          className="mr-3" 
                        />
                        <span className="text-sm">6-month Maintenance (+$1,500)</span>
                      </label>
                      <label className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="training" 
                          name="training" 
                          checked={estimatorData.training}
                          onChange={handleEstimatorChange}
                          className="mr-3" 
                        />
                        <span className="text-sm">Training Sessions (+$1,000)</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              {/* Estimate Display */}
              <div>
                <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-6">Estimated Investment</h3>
                
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-montserrat font-bold text-primary mb-2" id="estimateAmount">
                      {estimate.amount}
                    </div>
                    <div className="text-sm text-text-secondary">Estimated Project Range</div>
                  </div>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-border-light">
                    <span className="text-sm text-text-secondary">Base Project</span>
                    <span className="text-sm font-montserrat font-medium" id="baseAmount">{estimate.base}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-light">
                    <span className="text-sm text-text-secondary">Complexity Multiplier</span>
                    <span className="text-sm font-montserrat font-medium" id="complexityAmount">{estimate.multiplier}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border-light">
                    <span className="text-sm text-text-secondary">Additional Services</span>
                    <span className="text-sm font-montserrat font-medium" id="addonsAmount">{estimate.addons}</span>
                  </div>
                </div>
                <div className="text-xs text-text-secondary mb-6">
                  * This is an estimate based on typical project requirements. Final pricing may vary based on specific needs and scope.
                </div>
                <button onClick={requestDetailedQuote} className="btn-primary w-full">
                  Request Detailed Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Quick answers to common questions about our process, pricing, and services.
            </p>
          </div>
          <div className="space-y-4">
            {/* FAQ Item 1 */}
            <div className="card">
              <button className="w-full text-left flex justify-between items-center" onClick={() => toggleFAQ(1)}>
                <h3 className="font-montserrat font-semibold text-lg text-text-primary">What's your typical project timeline?</h3>
                <svg 
                  className={`w-6 h-6 text-text-secondary transition-transform duration-300 ${openFAQ === 1 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {openFAQ === 1 && (
                <div className="mt-4 text-text-secondary">
                  <p>Project timelines vary based on scope and complexity. Typical ranges are:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Brand Identity: 2-4 weeks</li>
                    <li>Website Design: 4-8 weeks</li>
                    <li>E-commerce Platform: 6-12 weeks</li>
                    <li>Mobile App: 12-20 weeks</li>
                  </ul>
                  <p className="mt-2">Rush projects can be accommodated with adjusted pricing and resource allocation.</p>
                </div>
              )}
            </div>
            {/* FAQ Item 2 */}
            <div className="card">
              <button className="w-full text-left flex justify-between items-center" onClick={() => toggleFAQ(2)}>
                <h3 className="font-montserrat font-semibold text-lg text-text-primary">What's included in your design process?</h3>
                <svg 
                  className={`w-6 h-6 text-text-secondary transition-transform duration-300 ${openFAQ === 2 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {openFAQ === 2 && (
                <div className="mt-4 text-text-secondary">
                  <p>Our comprehensive design process includes:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Discovery & Strategy Session</li>
                    <li>User Research & Competitive Analysis</li>
                    <li>Wireframing & Information Architecture</li>
                    <li>Visual Design & Prototyping</li>
                    <li>User Testing & Iteration</li>
                    <li>Development Handoff & Support</li>
                    <li>Launch Support & Training</li>
                  </ul>
                </div>
              )}
            </div>
            {/* FAQ Item 3 */}
            <div className="card">
              <button className="w-full text-left flex justify-between items-center" onClick={() => toggleFAQ(3)}>
                <h3 className="font-montserrat font-semibold text-lg text-text-primary">Do you offer payment plans?</h3>
                <svg 
                  className={`w-6 h-6 text-text-secondary transition-transform duration-300 ${openFAQ === 3 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {openFAQ === 3 && (
                <div className="mt-4 text-text-secondary">
                  <p>Yes, we offer flexible payment options:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>50% upfront, 50% on completion (standard)</li>
                    <li>33% upfront, 33% at midpoint, 34% on completion</li>
                    <li>Monthly payment plans for larger projects</li>
                    <li>Custom payment schedules for enterprise clients</li>
                  </ul>
                  <p className="mt-2">All payments are secured through professional invoicing systems with multiple payment methods accepted.</p>
                </div>
              )}
            </div>
            {/* FAQ Item 4 */}
            <div className="card">
              <button className="w-full text-left flex justify-between items-center" onClick={() => toggleFAQ(4)}>
                <h3 className="font-montserrat font-semibold text-lg text-text-primary">What if I need revisions?</h3>
                <svg 
                  className={`w-6 h-6 text-text-secondary transition-transform duration-300 ${openFAQ === 4 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {openFAQ === 4 && (
                <div className="mt-4 text-text-secondary">
                  <p>Revisions are a natural part of the design process:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>3 rounds of revisions included in all packages</li>
                    <li>Unlimited minor tweaks during development</li>
                    <li>Additional major revisions at $150/hour</li>
                    <li>Scope changes require project amendment</li>
                  </ul>
                  <p className="mt-2">We encourage feedback at each milestone to ensure the final product exceeds expectations.</p>
                </div>
              )}
            </div>
            {/* FAQ Item 5 */}
            <div className="card">
              <button className="w-full text-left flex justify-between items-center" onClick={() => toggleFAQ(5)}>
                <h3 className="font-montserrat font-semibold text-lg text-text-primary">Do you provide ongoing support?</h3>
                <svg 
                  className={`w-6 h-6 text-text-secondary transition-transform duration-300 ${openFAQ === 5 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              {openFAQ === 5 && (
                <div className="mt-4 text-text-secondary">
                  <p>Yes, we offer comprehensive post-launch support:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>30 days free support after launch</li>
                    <li>Monthly maintenance packages available</li>
                    <li>Content updates and technical support</li>
                    <li>Performance monitoring and optimization</li>
                    <li>Security updates and backups</li>
                    <li>Training and documentation provided</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Helpful <span className="text-gradient">Resources</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Download our free templates and guides to help prepare for your project.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Resource 1 */}
            <div className="card card-hover text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-3">Project Brief Template</h3>
              <p className="text-text-secondary text-sm mb-6">A comprehensive template to help you organize your project requirements and goals before our consultation.</p>
              <button onClick={() => downloadResource('project-brief')} className="btn-outline">
                Download PDF
              </button>
            </div>
            {/* Resource 2 */}
            <div className="card card-hover text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-3">Design Checklist</h3>
              <p className="text-text-secondary text-sm mb-6">Essential items to prepare before starting your design project, including content, assets, and technical requirements.</p>
              <button onClick={() => downloadResource('design-checklist')} className="btn-outline">
                Download PDF
              </button>
            </div>
            {/* Resource 3 */}
            <div className="card card-hover text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-xl text-text-primary mb-3">Brand Guidelines</h3>
              <p className="text-text-secondary text-sm mb-6">Learn how to prepare your existing brand materials or understand what goes into creating a new brand identity.</p>
              <button onClick={() => downloadResource('brand-guide')} className="btn-outline">
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              What Clients <span className="text-gradient">Say</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Hear from satisfied clients about their experience working with us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="card">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Sarah Johnson" 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                  loading="lazy" 
                />
                <div>
                  <div className="font-montserrat font-semibold text-text-primary">Sarah Johnson</div>
                  <div className="text-sm text-text-secondary">CEO, TechStart</div>
                </div>
              </div>
              <p className="text-text-secondary text-sm italic mb-4">
                "The communication was exceptional throughout the entire process. Every question was answered promptly, and the final result exceeded our expectations."
              </p>
              <div className="flex text-accent-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="card">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg" 
                  alt="Michael Chen" 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                  loading="lazy" 
                />
                <div>
                  <div className="font-montserrat font-semibold text-text-primary">Michael Chen</div>
                  <div className="text-sm text-text-secondary">CTO, HealthTech</div>
                </div>
              </div>
              <p className="text-text-secondary text-sm italic mb-4">
                "Professional, responsive, and delivered exactly what we needed. The project was completed on time and within budget."
              </p>
              <div className="flex text-accent-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
            {/* Testimonial 3 */}
            <div className="card">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b612b786?q=80&w=2340&auto=format&fit=crop" 
                  alt="Emily Rodriguez" 
                  className="w-12 h-12 rounded-full object-cover mr-4" 
                  loading="lazy" 
                />
                <div>
                  <div className="font-montserrat font-semibold text-text-primary">Emily Rodriguez</div>
                  <div className="text-sm text-text-secondary">Marketing Director</div>
                </div>
              </div>
              <p className="text-text-secondary text-sm italic mb-4">
                "Outstanding attention to detail and creative solutions. The team understood our vision perfectly and brought it to life beautifully."
              </p>
              <div className="flex text-accent-500">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default ContactPage;