import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header className="w-full py-4 px-4 md:px-8 absolute top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <LogoIcon />
          <span className="text-xl font-medium ml-3 text-vr-blue">CANDID REALITY</span>
        </div>
        
        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <button className="btn-primary">Get a Free Demo</button>
        </nav>
        
        {/* Mobile nav toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile nav menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-vr-darker border-t border-vr-blue/20 py-4 px-6 shadow-lg">
          <nav className="flex flex-col space-y-4">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <button className="btn-primary w-full">Get a Free Demo</button>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="text-gray-200 hover:text-vr-blue transition-colors"
    >
      {children}
    </a>
  );
}

function LogoIcon() {
  return (
    <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="5" width="18" height="18" rx="4" stroke="#0088FF" strokeWidth="2" />
      <rect x="21" y="5" width="18" height="18" rx="4" stroke="#0088FF" strokeWidth="2" />
      <circle cx="10" cy="14" r="4" fill="#0088FF" />
      <circle cx="30" cy="14" r="4" fill="#0088FF" />
    </svg>
  );
}
