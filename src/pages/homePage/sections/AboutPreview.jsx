import { Link } from 'react-router-dom';
import DownloadResume from '../../../components/downloadResume';

const AboutPreview = () => {
  

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-text-primary mb-6">
              The Person Behind <span className="text-gradient">The Pixels</span>
            </h2>
            <p className="text-lg text-text-secondary mb-6">
              With over 8 years of experience in digital design and strategy, I've had the privilege of working with startups, Fortune 500 companies, and everything in between. My approach combines analytical thinking with creative intuition to deliver solutions that not only look exceptional but drive real business results.
            </p>
            <p className="text-text-secondary mb-8">
              When I'm not crafting digital experiences, you'll find me exploring new design trends, mentoring upcoming designers, or sharing insights through speaking engagements and workshops.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/about" className="btn-primary">Learn More About Me</Link>
              <DownloadResume />
            </div>
          </div>
          
          {/* Right Content - Professional Photo */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional headshot" 
                className="w-full max-w-md mx-auto rounded-lg shadow-primary" 
                loading="lazy" 
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-secondary to-accent rounded-full opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;