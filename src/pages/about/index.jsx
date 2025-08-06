// AboutPage.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DownloadResume from '../../components/downloadResume';

const AboutPage = () => {
  const [skillBarsAnimated, setSkillBarsAnimated] = useState(false);

  // Skills Animation on Scroll
  useEffect(() => {
    const animateSkills = () => {
      if (skillBarsAnimated) return;

      const skillBars = document.querySelectorAll('.skill-bar');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = width;
            setSkillBarsAnimated(true);
          }
        });
      }, { threshold: 0.5 });

      skillBars.forEach(bar => observer.observe(bar));
    };

    // Timeline Animation
    const animateTimeline = () => {
      const timelineItems = document.querySelectorAll('.timeline-item');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { threshold: 0.3 });

      timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease-out';
        observer.observe(item);
      });
    };

    // Add scroll-triggered animations for cards
    const cards = document.querySelectorAll('.card');
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.6s ease-out';
      cardObserver.observe(card);
    });

    // Initialize all animations
    animateSkills();
    animateTimeline();

    // Add parallax effect to hero section
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelector('.hero-section');
      if (parallax) {
        const speed = scrolled * 0.5;
        parallax.style.transform = `translateY(${speed}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [skillBarsAnimated]);

  return (
    <div className="bg-background text-text-primary">
      {/* <!-- Hero Section with Personal Introduction --> */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-50 via-surface to-secondary-50 overflow-hidden">
        {/* <!-- Background Pattern --> */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="hero-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#hero-grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* <!-- Left Content --> */}
            <div className="text-center lg:text-left">
              <div className="mb-6">
                <span className="text-sm font-montserrat font-medium text-primary bg-primary-50 px-4 py-2 rounded-full">About Me</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-text-primary mb-6">
                The Story Behind <span className="text-gradient">The Vision</span>
              </h1>
              <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl">
                Every great design starts with a story. Mine began with a simple belief: that exceptional digital experiences have the power to transform businesses and touch lives in meaningful ways.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <DownloadResume btnPrimary />
                <Link to="/contact" className="btn-outline">Let's Connect</Link>
              </div>
            </div>

            {/* <!-- Right Content - Professional Photo --> */}
            <div className="relative">
              <div className="relative z-10">


                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Professional portrait in creative workspace"
                  className="w-full max-w-md mx-auto rounded-lg shadow-primary"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop';
                    e.target.onError = null;
                  }}
                />

              </div>
              {/* <!-- Decorative Elements --> */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-secondary to-accent rounded-full opacity-15"></div>

              {/* <!-- Floating Quote --> */}
              <div className="absolute -right-4 top-1/2 transform translate-x-full -translate-y-1/2 hidden xl:block">
                <div className="bg-surface shadow-primary rounded-lg p-4 max-w-xs">
                  <p className="font-dancing-script text-lg text-primary italic">"Design is not just what it looks like - it's how it works"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Origin Story Section --> */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* <!-- Story Content --> */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-6">
                  Where It All <span className="text-gradient">Began</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8"></div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-text-secondary mb-6">
                  My journey into design began unexpectedly during my college years when I was studying business. I stumbled upon a poorly designed website for a local nonprofit and thought, "I could make this better." That simple observation sparked a passion that would reshape my entire career trajectory.
                </p>

                <p className="text-text-secondary mb-6">
                  What started as weekend volunteer work quickly evolved into freelance projects, then internships at design agencies, and eventually led me to work with some of the most innovative companies in the industry. Each project taught me something new about the delicate balance between aesthetics and functionality.
                </p>

                <blockquote className="border-l-4 border-primary pl-6 my-8">
                  <p className="font-dancing-script text-xl text-primary italic">
                    "I discovered that great design isn't about making things pretty—it's about making them work beautifully for the people who use them."
                  </p>
                </blockquote>

                <p className="text-text-secondary mb-6">
                  Over the past 8 years, I've had the privilege of working with startups that became unicorns, Fortune 500 companies undergoing digital transformation, and passionate entrepreneurs bringing their first ideas to life. Each collaboration has reinforced my belief that design is one of the most powerful tools for creating positive change in the world.
                </p>
              </div>
            </div>

            {/* <!-- Behind the Scenes Gallery --> */}
            <div className="space-y-6">
              <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-4">Behind the Scenes</h3>

              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg">

                  <img
                    src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2340&auto=format&fit=crop"
                    alt="Professional portrait in creative workspace"
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop';
                      e.target.onError = null;
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="relative overflow-hidden rounded-lg">

                  <img
                    src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Professional portrait in creative workspace"
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop';
                      e.target.onError = null;
                    }}
                  />
                  <div className="absolute inset-0 bg-secondary/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="relative overflow-hidden rounded-lg">

                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2340&auto=format&fit=crop"
                    alt="Professional portrait in creative workspace"
                    className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2340&auto=format&fit=crop';
                      e.target.onError = null;
                    }}
                  />
                  <div className="absolute inset-0 bg-accent/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Professional <span className="text-gradient">Evolution</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              A journey of continuous learning, meaningful collaborations, and impactful projects that have shaped my approach to design and strategy.
            </p>
          </div>
          {/* Interactive Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full hidden md:block"></div>
            {/* Timeline Items */}
            <div className="space-y-12">
              {/* 2025 - Present */}
              <div className="timeline-item flex items-center" data-year="2025">
                <div className="md:w-1/2 md:pr-8 text-right">
                  <div className="card card-hover">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-montserrat font-medium text-primary bg-primary-50 px-3 py-1 rounded-full">Present</span>
                      <span className="text-sm text-text-secondary">2025</span>
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-2">Senior Design Strategist</h3>
                    <p className="text-secondary font-montserrat font-medium mb-3">Portfolio Pro Studio</p>
                    <p className="text-text-secondary text-sm">Leading design strategy for Fortune 500 digital transformations. Developed design systems used by 10M+ users globally.</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-surface shadow-primary"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
              {/* 2022 - 2024 */}
              <div className="timeline-item flex items-center" data-year="2022">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-surface shadow-primary"></div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="card card-hover">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-montserrat font-medium text-secondary bg-secondary-50 px-3 py-1 rounded-full">Growth Phase</span>
                      <span className="text-sm text-text-secondary">2022-2024</span>
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-2">Lead UX Designer</h3>
                    <p className="text-secondary font-montserrat font-medium mb-3">TechFlow Innovations</p>
                    <p className="text-text-secondary text-sm">Spearheaded UX for SaaS platform serving 500K+ users. Achieved 40% increase in user engagement through strategic redesign.</p>
                  </div>
                </div>
              </div>
              {/* 2020 - 2022 */}
              <div className="timeline-item flex items-center" data-year="2020">
                <div className="md:w-1/2 md:pr-8 text-right">
                  <div className="card card-hover">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-montserrat font-medium text-accent-700 bg-accent-50 px-3 py-1 rounded-full">Breakthrough</span>
                      <span className="text-sm text-text-secondary">2020-2022</span>
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-2">Senior Product Designer</h3>
                    <p className="text-accent-700 font-montserrat font-medium mb-3">StartupHub Collective</p>
                    <p className="text-text-secondary text-sm">Designed digital products for 15+ startups. 3 companies achieved successful exits with 200%+ valuation increases.</p>
                  </div>
                </div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-surface shadow-primary"></div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
              {/* 2017 - 2020 */}
              <div className="timeline-item flex items-center" data-year="2017">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-surface shadow-primary"></div>
                <div className="md:w-1/2 md:pl-8">
                  <div className="card card-hover">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-montserrat font-medium text-primary bg-primary-50 px-3 py-1 rounded-full">Foundation</span>
                      <span className="text-sm text-text-secondary">2017-2020</span>
                    </div>
                    <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-2">UI/UX Designer</h3>
                    <p className="text-primary font-montserrat font-medium mb-3">Creative Digital Agency</p>
                    <p className="text-text-secondary text-sm">Developed design skills across web, mobile, and brand identity. Worked with 50+ clients from diverse industries.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Philosophy */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Values & <span className="text-gradient">Philosophy</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              The principles that guide every decision, every design, and every client relationship I build.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="card card-hover text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-4">Human-Centered Design</h3>
              <p className="text-text-secondary">Every design decision starts with understanding real human needs, behaviors, and emotions. Technology should serve people, not the other way around.</p>
            </div>
            {/* Value 2 */}
            <div className="card card-hover text-center group">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8 text-secondary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-4">Iterative Excellence</h3>
              <p className="text-text-secondary">Great design emerges through continuous refinement. I believe in rapid prototyping, user testing, and data-driven improvements.</p>
            </div>
            {/* Value 3 */}
            <div className="card card-hover text-center group">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8 text-accent-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-4">Collaborative Partnership</h3>
              <p className="text-text-secondary">The best solutions emerge from true collaboration. I work as an extension of your team, bringing expertise while respecting your vision.</p>
            </div>
            {/* Value 4 */}
            <div className="card card-hover text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8 text-primary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-4">Measurable Impact</h3>
              <p className="text-text-secondary">Beautiful design must drive business results. I focus on metrics that matter: conversion rates, user engagement, and ROI.</p>
            </div>
            {/* Value 5 */}
            <div className="card card-hover text-center group">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8 text-secondary group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-4">Sustainable Innovation</h3>
              <p className="text-text-secondary">I design for longevity, creating systems that can evolve and scale. Innovation should be purposeful, not just trendy.</p>
            </div>
            {/* Value 6 */}
            <div className="card card-hover text-center group">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8 text-accent-600 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-montserrat font-semibold text-text-primary mb-4">Continuous Learning</h3>
              <p className="text-text-secondary">The design field evolves rapidly. I stay current with emerging trends, tools, and methodologies to deliver cutting-edge solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              A comprehensive toolkit built through years of hands-on experience and continuous learning.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <div>
              <h3 className="text-2xl font-montserrat font-semibold text-text-primary mb-8">Technical Proficiencies</h3>

              <div className="space-y-6">
                {/* Skill 1 */}
                <div className="skill-item">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-montserrat font-medium text-text-primary">UI/UX Design</span>
                    <span className="text-sm text-text-secondary">95%</span>
                  </div>
                  <div className="w-full bg-border-light rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-1000 skill-bar" data-width="95%" style={{ width: '0%' }}></div>
                  </div>
                </div>
                {/* Skill 2 */}
                <div className="skill-item">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-montserrat font-medium text-text-primary">Prototyping & Wireframing</span>
                    <span className="text-sm text-text-secondary">92%</span>
                  </div>
                  <div className="w-full bg-border-light rounded-full h-3">
                    <div className="bg-gradient-to-r from-secondary to-accent h-3 rounded-full transition-all duration-1000 skill-bar" data-width="92%" style={{ width: '0%' }}></div>
                  </div>
                </div>
                {/* Skill 3 */}
                <div className="skill-item">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-montserrat font-medium text-text-primary">Brand Identity Design</span>
                    <span className="text-sm text-text-secondary">88%</span>
                  </div>
                  <div className="w-full bg-border-light rounded-full h-3">
                    <div className="bg-gradient-to-r from-accent to-primary h-3 rounded-full transition-all duration-1000 skill-bar" data-width="88%" style={{ width: '0%' }}></div>
                  </div>
                </div>
                {/* Skill 4 */}
                <div className="skill-item">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-montserrat font-medium text-text-primary">Front-end Development</span>
                    <span className="text-sm text-text-secondary">85%</span>
                  </div>
                  <div className="w-full bg-border-light rounded-full h-3">
                    <div className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-1000 skill-bar" data-width="85%" style={{ width: '0%' }}></div>
                  </div>
                </div>
                {/* Skill 5 */}
                <div className="skill-item">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-montserrat font-medium text-text-primary">User Research & Testing</span>
                    <span className="text-sm text-text-secondary">90%</span>
                  </div>
                  <div className="w-full bg-border-light rounded-full h-3">
                    <div className="bg-gradient-to-r from-secondary to-primary h-3 rounded-full transition-all duration-1000 skill-bar" data-width="90%" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Tools & Technologies */}
            <div>
              <h3 className="text-2xl font-montserrat font-semibold text-text-primary mb-8">Tools & Technologies</h3>

              <div className="grid grid-cols-2 gap-4">
                {/* Design Tools */}
                <div className="card text-center p-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h4 className="font-montserrat font-medium text-text-primary text-sm">Figma</h4>
                  <p className="text-xs text-text-secondary">Expert</p>
                </div>
                <div className="card text-center p-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h4 className="font-montserrat font-medium text-text-primary text-sm">Adobe CC</h4>
                  <p className="text-xs text-text-secondary">Advanced</p>
                </div>
                <div className="card text-center p-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h4 className="font-montserrat font-medium text-text-primary text-sm">Sketch</h4>
                  <p className="text-xs text-text-secondary">Proficient</p>
                </div>
                <div className="card text-center p-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h4 className="font-montserrat font-medium text-text-primary text-sm">Principle</h4>
                  <p className="text-xs text-text-secondary">Advanced</p>
                </div>
                <div className="card text-center p-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h4 className="font-montserrat font-medium text-text-primary text-sm">React</h4>
                  <p className="text-xs text-text-secondary">Intermediate</p>
                </div>
                <div className="card text-center p-4">
                  <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <h4 className="font-montserrat font-medium text-text-primary text-sm">Webflow</h4>
                  <p className="text-xs text-text-secondary">Expert</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition & Achievements */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Recognition & <span className="text-gradient">Achievements</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Industry recognition and milestones that reflect a commitment to excellence and innovation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Award 1 */}
            <div className="card card-hover text-center group">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8 text-accent-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-text-primary mb-2">Design Excellence Award</h3>
              <p className="text-sm text-text-secondary mb-2">UX Design Institute</p>
              <p className="text-xs text-text-secondary">2024</p>
            </div>
            {/* Award 2 */}
            <div className="card card-hover text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8 text-primary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-text-primary mb-2">Certified UX Professional</h3>
              <p className="text-sm text-text-secondary mb-2">Nielsen Norman Group</p>
              <p className="text-xs text-text-secondary">2023</p>
            </div>
            {/* Award 3 */}
            <div className="card card-hover text-center group">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8 text-secondary group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zM17 17H7v-3l-4 4 4 4v-3h12v-6h-2v4z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-text-primary mb-2">Speaker</h3>
              <p className="text-sm text-text-secondary mb-2">Design Conference 2024</p>
              <p className="text-xs text-text-secondary">Keynote</p>
            </div>
            {/* Award 4 */}
            <div className="card card-hover text-center group">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-600 group-hover:text-white transition-all duration-300">
                <svg className="w-8 h-8 text-accent-600 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 className="font-montserrat font-semibold text-text-primary mb-2">Top 1% Designer</h3>
              <p className="text-sm text-text-secondary mb-2">Dribbble</p>
              <p className="text-xs text-text-secondary">2023-2024</p>
            </div>
          </div>
          {/* Speaking Engagements */}
          <div className="mt-16">
            <h3 className="text-2xl font-montserrat font-semibold text-text-primary text-center mb-8">Recent Speaking Engagements</h3>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Speaking 1 */}
              <div className="card card-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-text-primary mb-2">"The Future of Design Systems"</h4>
                    <p className="text-sm text-secondary font-medium mb-2">Design Leadership Summit 2024</p>
                    <p className="text-sm text-text-secondary">Keynote presentation on scalable design systems for enterprise organizations.</p>
                  </div>
                </div>
              </div>
              {/* Speaking 2 */}
              <div className="card card-hover">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-secondary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-text-primary mb-2">"UX Research in Agile Teams"</h4>
                    <p className="text-sm text-secondary font-medium mb-2">UX Week 2023</p>
                    <p className="text-sm text-text-secondary">Workshop on integrating user research methodologies in fast-paced development cycles.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Beyond <span className="text-gradient">Design</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              The experiences and interests that fuel creativity and bring fresh perspectives to every project.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Interest 1 */}
            <div className="card card-hover text-center group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2340&auto=format&fit=crop" alt="Photography equipment and landscape" className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-montserrat font-semibold text-text-primary mb-3">Photography</h3>
              <p className="text-text-secondary text-sm">Capturing moments and compositions that inspire my design work. Street photography and landscapes are my favorites.</p>
            </div>
            {/* Interest 2 */}
            <div className="card card-hover text-center group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Mentoring session with young designers" className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-montserrat font-semibold text-text-primary mb-3">Mentoring</h3>
              <p className="text-text-secondary text-sm">Guiding the next generation of designers through workshops, one-on-one sessions, and design community involvement.</p>
            </div>
            {/* Interest 3 */}
            <div className="card card-hover text-center group">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=2340&auto=format&fit=crop" alt="Hiking trail with mountain views" className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" />
                <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="font-montserrat font-semibold text-text-primary mb-3">Hiking</h3>
              <p className="text-text-secondary text-sm">Finding clarity and inspiration in nature. Some of my best design ideas come during long hikes in the mountains.</p>
            </div>
          </div>
          {/* Personal Quote */}
          <div className="mt-16 text-center">
            <div className="max-w-4xl mx-auto">
              <blockquote className="text-2xl md:text-3xl font-dancing-script text-primary italic mb-6">
                "Design is not just my profession—it's my passion for making the world a little more beautiful, one pixel at a time."
              </blockquote>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Integration */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
              Stay <span className="text-gradient">Connected</span>
            </h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              Follow my journey, insights, and latest work across social platforms.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* LinkedIn Integration */}
            <div className="card card-hover">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-text-primary">LinkedIn Articles</h3>
                  <p className="text-sm text-text-secondary">Latest industry insights</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-montserrat font-medium text-text-primary text-sm mb-1">The Evolution of Design Systems in 2025</h4>
                  <p className="text-xs text-text-secondary">Published 3 days ago • 1,247 views</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <h4 className="font-montserrat font-medium text-text-primary text-sm mb-1">Why User Research Should Drive Every Design Decision</h4>
                  <p className="text-xs text-text-secondary">Published 1 week ago • 892 views</p>
                </div>
              </div>

              <div className="mt-6">
                <a href="javascript:void(0)" className="text-primary hover:text-primary-700 font-montserrat font-medium text-sm transition-colors duration-300">
                  View All Articles →
                </a>
              </div>
            </div>
            {/* Twitter Integration */}
            <div className="card card-hover">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-text-primary">Twitter Insights</h3>
                  <p className="text-sm text-text-secondary">Quick thoughts & tips</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-sm text-text-primary mb-1">"The best designs are invisible. Users should focus on their goals, not figuring out your interface. #UXDesign"</p>
                  <p className="text-xs text-text-secondary">2 hours ago • 47 likes</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="text-sm text-text-primary mb-1">"Just finished a fascinating user research session. The gap between what users say and do never ceases to amaze me. 🧠"</p>
                  <p className="text-xs text-text-secondary">1 day ago • 23 likes</p>
                </div>
              </div>

              <div className="mt-6">
                <a href="javascript:void(0)" className="text-secondary hover:text-secondary-600 font-montserrat font-medium text-sm transition-colors duration-300">
                  Follow on Twitter →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
            <defs>
              <pattern id="cta-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#cta-grid)" />
          </svg>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">
            Let's Create Something Amazing Together
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to bring your vision to life? I'd love to hear about your project and explore how we can work together to create exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-md font-montserrat font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
              Start a Conversation
            </Link>
            <Link to="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-md font-montserrat font-semibold hover:bg-white hover:text-primary transition-all duration-300">
              View My Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;