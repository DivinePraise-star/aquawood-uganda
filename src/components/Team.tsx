
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-dark">Our Team</h2>
          <div className="w-24 h-1 bg-aqua-DEFAULT mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Meet the dedicated professionals working to make AQUAWOOD a reality for environmental conservation in Uganda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <TeamMember 
            image="/lovable-uploads/dbf08593-e08d-4e6e-828e-c85e640bef61.png"
            name="Edward Mukiibi"
            role="Project Lead"
            bio="Environmental policy expert with 8+ years of experience in conservation initiatives across East Africa."
          />
          <TeamMember 
            image="/lovable-uploads/96455984-5e26-4c18-9861-769250ed522f.png"
            name="James Kakooza"
            role="Technical Director"
            bio="Geospatial analyst specializing in satellite imagery processing and environmental monitoring systems."
          />
          <TeamMember 
            image="/lovable-uploads/0b47a49b-d5a4-4abf-b320-365eeb047b1a.png"
            name="Daniel Ssempala"
            role="Data Scientist"
            bio="AI and machine learning expert focused on environmental applications and predictive analytics."
          />
          <TeamMember 
            image="/lovable-uploads/8080c31e-52e3-449d-8c61-4e80d32cc7a3.png"
            name="Brenda Namugwanya"
            role="Community Liaison"
            bio="Specialist in community engagement with extensive experience in participatory environmental management."
          />
        </div>

        <div className="bg-forest-light/20 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-forest-dark">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <PartnerLogo name="Ministry of Water and Environment" />
            <PartnerLogo name="Uganda Wildlife Authority" />
            <PartnerLogo name="National Forest Authority" />
            <PartnerLogo name="Environmental Research Institute" />
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-4 text-forest-DEFAULT">Join Our Team</h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We're always looking for talented individuals passionate about environmental conservation and technology. If you're interested in contributing to AQUAWOOD, get in touch with us.
          </p>
          <a href="#contact" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-forest-DEFAULT text-white font-medium hover:bg-forest-dark transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  bio: string;
}

const TeamMember = ({ image, name, role, bio }: TeamMemberProps) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
    <div className="aspect-[3/4] relative overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover object-center"
      />
    </div>
    <div className="p-5">
      <h4 className="text-xl font-semibold text-forest-dark">{name}</h4>
      <p className="text-aqua-DEFAULT font-medium mb-2">{role}</p>
      <p className="text-gray-600 text-sm mb-4">{bio}</p>
      <div className="flex space-x-3">
        <SocialLink icon={<Linkedin size={16} />} />
        <SocialLink icon={<Twitter size={16} />} />
        <SocialLink icon={<Mail size={16} />} />
      </div>
    </div>
  </div>
);

interface SocialLinkProps {
  icon: React.ReactNode;
}

const SocialLink = ({ icon }: SocialLinkProps) => (
  <a href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-forest-light hover:text-forest-dark transition-colors">
    {icon}
  </a>
);

interface PartnerLogoProps {
  name: string;
}

const PartnerLogo = ({ name }: PartnerLogoProps) => (
  <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-24">
    <span className="text-gray-500 text-sm text-center font-medium">{name}</span>
  </div>
);

export default Team;
