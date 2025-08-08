import { useEffect, useRef } from 'react';

const SkillsSection = () => {
  const skillBarsRef = useRef([]);

  // Skills animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = width;
          }
        });
      },
      { threshold: 0.5 }
    );
    
    skillBarsRef.current.forEach((bar) => {
      if (bar) observer.observe(bar);
    });
    
    return () => {
      skillBarsRef.current.forEach((bar) => {
        if (bar) observer.unobserve(bar);
      });
    };
  }, []);

  const showSkillPreview = (skill) => {
    const previews = {
      'ui-ux': 'Specialized in creating intuitive user interfaces with 95% user satisfaction rates across 50+ projects.',
      'branding': 'Developed comprehensive brand identities that increased brand recognition by an average of 200%.',
      'development': 'Built responsive, performant websites with 50% faster load times and 99.9% uptime.'
    };
    
    alert(previews[skill] || 'Skill preview coming soon!');
  };

  const skills = [
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      proficiency: '95% Proficiency',
      width: '95%',
      icon: (
        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
        </svg>
      ),
      iconBg: 'bg-primary-100',
      iconColor: 'text-primary',
      gradient: 'from-primary to-secondary',
      description: 'Creating intuitive interfaces that users love and businesses profit from.'
    },
    {
      id: 'branding',
      title: 'Brand Strategy',
      proficiency: '90% Proficiency',
      width: '90%',
      icon: (
        <svg className="w-6 h-6 text-secondary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
        </svg>
      ),
      iconBg: 'bg-secondary-100',
      iconColor: 'text-secondary',
      gradient: 'from-secondary to-accent',
      description: 'Building memorable brands that resonate with audiences and drive loyalty.'
    },
    {
      id: 'development',
      title: 'Development',
      proficiency: '85% Proficiency',
      width: '85%',
      icon: (
        <svg className="w-6 h-6 text-accent-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
        </svg>
      ),
      iconBg: 'bg-accent-100',
      iconColor: 'text-accent-600',
      gradient: 'from-accent to-primary',
      description: 'Bringing designs to life with clean, efficient, and scalable code.'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
            Expertise That <span className="text-gradient">Delivers Results</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Years of experience across multiple disciplines, combined with a strategic mindset that turns creative vision into measurable business outcomes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.id}
              className="skill-card card card-hover group cursor-pointer" 
              onClick={() => showSkillPreview(skill.id)}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${skill.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className="font-montserrat font-semibold text-lg text-text-primary">{skill.title}</h3>
                  <p className="text-sm text-text-secondary">{skill.proficiency}</p>
                </div>
              </div>
              <div className="w-full bg-border-light rounded-full h-2 mb-4">
                <div 
                  ref={el => skillBarsRef.current[index] = el}
                  className={`bg-gradient-to-r ${skill.gradient} h-2 rounded-full transition-all duration-1000 skill-bar`} 
                  data-width={skill.width} 
                  style={{ width: '0%' }}
                />
              </div>
              <p className="text-text-secondary text-sm group-hover:text-text-primary transition-colors duration-300">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;