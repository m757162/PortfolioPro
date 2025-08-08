import { Link } from 'react-router-dom';

const StickyContactCTA = () => {
  return (
    <div className="fixed bottom-4 right-4 md:hidden z-50">
      <Link to="/contact" className="btn-secondary shadow-lg flex items-center">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
        Contact
      </Link>
    </div>
  );
};

export default StickyContactCTA;