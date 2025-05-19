
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="container-custom flex items-center justify-between py-4">
        <a href="#" className="flex items-center space-x-2">
          <span className="text-xl font-display font-bold text-forest-dark">AQUAWOOD</span>
          <span className="text-sm font-medium text-aqua-DEFAULT">UGANDA</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink href="#about">About</NavLink>
          <NavLink href="#methodology">Methodology</NavLink>
          <NavLink href="#outcomes">Outcomes</NavLink>
          <NavLink href="#map">Map</NavLink>
          <NavLink href="#team">Team</NavLink>
          <NavLink href="#contact" className="bg-forest-DEFAULT hover:bg-forest-dark text-white px-4 py-2 rounded-md transition-colors duration-300">
            Contact Us
          </NavLink>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-forest-dark p-2"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-6">
          <MobileNavLink href="#about" onClick={toggleMenu}>About</MobileNavLink>
          <MobileNavLink href="#methodology" onClick={toggleMenu}>Methodology</MobileNavLink>
          <MobileNavLink href="#outcomes" onClick={toggleMenu}>Outcomes</MobileNavLink>
          <MobileNavLink href="#map" onClick={toggleMenu}>Map</MobileNavLink>
          <MobileNavLink href="#team" onClick={toggleMenu}>Team</MobileNavLink>
          <MobileNavLink href="#contact" onClick={toggleMenu} className="bg-forest-DEFAULT text-white px-4 py-3 rounded-md text-center">
            Contact Us
          </MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

interface NavLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, className, children }: NavLinkProps) => (
  <a 
    href={href} 
    className={cn(
      "text-gray-700 hover:text-forest-DEFAULT font-medium transition-colors duration-300",
      className
    )}
  >
    {children}
  </a>
);

const MobileNavLink = ({ href, className, children, onClick }: NavLinkProps) => (
  <a 
    href={href} 
    className={cn(
      "text-gray-800 text-lg font-medium py-2",
      className
    )} 
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
