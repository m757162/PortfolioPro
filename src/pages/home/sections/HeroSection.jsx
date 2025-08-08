import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentShowcaseItem, setCurrentShowcaseItem] = useState(0);

  const showShowcaseItem = (index) => {
    setCurrentShowcaseItem(index);
  };

  // Auto-rotate showcase
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentShowcaseItem((prev) => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const showcaseItems = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      alt: "E-commerce Platform Design",
      title: "E-commerce Revolution",
      subtitle: "300% conversion increase",
      gradient: "from-primary-900/80"
    },
    {
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Brand Identity Design",
      title: "Brand Transformation",
      subtitle: "Complete visual identity overhaul",
      gradient: "from-secondary-900/80"
    },
    {
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Mobile App Interface",
      title: "Mobile Innovation",
      subtitle: "50% faster load times",
      gradient: "from-accent-900/80"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-surface to-secondary-50"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-bold text-text-primary mb-6">
              Transforming <span className="text-gradient">ideas</span> into
              <span className="text-gradient"> impactful experiences</span>
            </h1>
            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl">
              Where creativity meets strategy. I craft digital experiences that don't just look beautiful—they drive results and create lasting connections with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/portfolio" className="btn-primary">View My Work</Link>
              <Link to="/contact" className="btn-outline">Let's Collaborate</Link>
            </div>
          </div>
          
          {/* Right Content - Project Showcase */}
          <div className="relative">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-primary">
              {showcaseItems.map((item, index) => (
                <div 
                  key={index}
                  className={`showcase-item absolute inset-0 transition-opacity duration-1000 ${currentShowcaseItem === index ? 'opacity-100' : 'opacity-0'}`}
                >
                  <img 
                    src={item.image} 
                    alt={item.alt} 
                    className="w-full h-full object-cover" 
                    loading="lazy" 
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} to-transparent`}></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-xl font-montserrat font-semibold mb-2 text-white">{item.title}</h3>
                    <p className="text-sm opacity-90">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Showcase Navigation Dots */}
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2].map((index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentShowcaseItem === index ? 'bg-primary' : 'bg-border'}`}
                  onClick={() => showShowcaseItem(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;