
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

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <TeamMember 
            image="/lovable-uploads/09951c87-fd73-4969-857c-5c8f3e06288b.png"
            name="Senjiyunva Mesarch"
            role="Director / Project Manager"
            bio="Mesarch is a seasoned project manager and youth leader with a passion for environmental conservation and social impact. Bachelor's degree in Information Systems and Technology from Makerere University. With experience in managing community-based projects, Mesarch brings strategic leadership and community engagement expertise to our team."
            linkedin="https://ug.linkedin.com/in/ntale-mesarch-748304234"
            twitter="https://x.com/ntale_mesarch"
            email="ntalemesarch812@gmail.com"
          />
          <TeamMember 
            image="/lovable-uploads/8080c31e-52e3-449d-8c61-4e80d32cc7a3.png"
            name="Team Member 2"
            role="Role to be updated"
            bio="Information about the second team member will be updated soon."
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
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const TeamMember = ({ image, name, role, bio, linkedin, twitter, email }: TeamMemberProps) => (
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
        {linkedin && (
          <SocialLink icon={<Linkedin size={16} />} href={linkedin} ariaLabel="LinkedIn" />
        )}
        {twitter && (
          <SocialLink icon={<Twitter size={16} />} href={twitter} ariaLabel="Twitter" />
        )}
        {email && (
          <SocialLink icon={<Mail size={16} />} href={`mailto:${email}`} ariaLabel="Email" />
        )}
      </div>
    </div>
  </div>
);

interface SocialLinkProps {
  icon: React.ReactNode;
  href?: string;
  ariaLabel: string;
}

const SocialLink = ({ icon, href = "#", ariaLabel }: SocialLinkProps) => (
  <a 
    href={href} 
    className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-forest-light hover:text-forest-dark transition-colors"
    aria-label={ariaLabel}
    target="_blank"
    rel="noopener noreferrer"
  >
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
