import { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const showTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % 3);
  };

  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 2) % 3);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);
    
    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      id: 1,
      quote: "The redesign of our platform resulted in a 300% increase in user conversions. The attention to detail and strategic thinking exceeded all expectations.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Solutions",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=2126&auto=format&fit=crop"
    },
    {
      id: 2,
      quote: "Working with this team transformed our user experience. Load times improved by 50% and user satisfaction reached an all-time high of 94%.",
      author: "Michael Chen",
      position: "CTO, HealthTech Innovations",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2340&auto=format&fit=crop"
    },
    {
      id: 3,
      quote: "The brand identity work was exceptional. Our brand recognition increased by 200% and customer engagement doubled within three months.",
      author: "Emily Rodriguez",
      position: "Marketing Director, FinanceFlow",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary-50 to-accent-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-4">
            What Clients <span className="text-gradient">Say</span>
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Don't just take my word for it. Here's what industry leaders and satisfied clients have to say about our collaborations.
          </p>
        </div>
        
        {/* Testimonials Slider */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0">
                  <div className="max-w-4xl mx-auto text-center">
                    <div className="card p-8 md:p-12">
                      <div className="flex justify-center mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-16 h-16 rounded-full object-cover" 
                          loading="lazy" 
                        />
                      </div>
                      <blockquote className="text-xl md:text-2xl font-montserrat text-text-primary mb-6 italic">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="text-text-secondary">
                        <p className="font-montserrat font-semibold">{testimonial.author}</p>
                        <p className="text-sm">{testimonial.position}</p>
                      </div>
                      <div className="flex justify-center mt-4">
                        <img 
                          src={testimonial.logo} 
                          alt="Company Logo" 
                          className="h-8 opacity-60" 
                          loading="lazy" 
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-surface shadow-light rounded-full p-3 hover:shadow-primary transition-all duration-300" 
            onClick={previousTestimonial}
          >
            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-surface shadow-light rounded-full p-3 hover:shadow-primary transition-all duration-300" 
            onClick={nextTestimonial}
          >
            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {[0, 1, 2].map((index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-primary' : 'bg-border'
                }`}
                onClick={() => showTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;