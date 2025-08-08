import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)"/>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-bold text-white mb-6">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Let's collaborate to create something extraordinary. Whether you need a complete brand overhaul or a strategic digital solution, I'm here to help bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="bg-white text-primary px-8 py-4 rounded-md font-montserrat font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
            Start Your Project
          </Link>
          <Link to="/services" className="border-2 border-white text-white px-8 py-4 rounded-md font-montserrat font-semibold hover:bg-white hover:text-primary transition-all duration-300">
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;