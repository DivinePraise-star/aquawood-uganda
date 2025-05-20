import { ChevronUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-forest-dark text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-white p-1 mr-3 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/ab4d50d3-c4c4-41ad-8d79-77c5a42e9833.png" 
                    alt="AQUAWOOD Logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl">Aquawood Group</h3>
                <p className="text-aqua-DEFAULT text-sm">UGANDA LTD</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 pr-4">
              An innovative application for deforestation and water pollution monitoring to enhance drought and flood resilience across Uganda.
            </p>
            <div className="flex space-x-4">
              <SocialLink label="Twitter" />
              <SocialLink label="LinkedIn" />
              <SocialLink label="Facebook" />
              <SocialLink label="Instagram" />
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#methodology">Our Approach</FooterLink>
              <FooterLink href="#outcomes">Expected Outcomes</FooterLink>
              <FooterLink href="#map">Interactive Map</FooterLink>
              <FooterLink href="#team">Our Team</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              <FooterLink href="#">Reports & Publications</FooterLink>
              <FooterLink href="#">News & Updates</FooterLink>
              <FooterLink href="#">Environmental Policies</FooterLink>
              <FooterLink href="#">Partner With Us</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Aquawood Group Uganda Ltd. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="bg-forest-DEFAULT hover:bg-forest-light text-white hover:text-forest-dark rounded-full p-2 transition-colors"
            aria-label="Scroll to top"
          >
            <ChevronUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  label: string;
}

const SocialLink = ({ label }: SocialLinkProps) => (
  <a
    href="#"
    className="w-8 h-8 rounded-full bg-forest-light/30 flex items-center justify-center text-white hover:bg-aqua-DEFAULT transition-colors"
    aria-label={label}
  >
    {label[0]}
  </a>
);

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => (
  <li>
    <a 
      href={href} 
      className="text-gray-300 hover:text-aqua-DEFAULT transition-colors"
    >
      {children}
    </a>
  </li>
);

export default Footer;
