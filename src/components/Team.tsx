import { Linkedin, Twitter, Mail, Youtube } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
            image="/lovable-uploads/a4d1acf8-677d-4c8b-a5f5-cfdaca32aa56.png"
            name="Muhoozi Owen"
            role="CTO (IT Support Officer)"
            bio="Detail-oriented IT professional with teaching, data management, research, and cybersecurity expertise. Proficient in database development, Microsoft Office applications, and data quality assurance. Skilled in guiding people through innovation, research methodologies, and project development. Strong problem-solving abilities, with a passion for leveraging technology to enhance learning and community development."
            linkedin="https://ug.linkedin.com/in/muhoozi-owen-1041b5271"
            email="muhooziowen85@gmail.com"
          />
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-forest-dark">About Aquawood</h3>
          <div className="bg-forest-light/10 rounded-xl p-8">
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-3 text-forest-dark">Our Mission</h4>
              <p className="text-gray-700">
                Aquawood Group Uganda Ltd is dedicated to harnessing innovative technologies and collaborative approaches to monitor, protect, and conserve Uganda's natural resources. We empower local communities, inform policy decisions, and drive sustainable development through cutting-edge solutions and inclusive engagement.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-3 text-forest-dark">Our Vision</h4>
              <p className="text-gray-700">
                Aquawood Group Uganda Ltd envisions a Global where technology, community engagement, and collaborative conservation efforts converge to preserve the country's rich biodiversity, ensure sustainable land use, and promote a healthy environment for future generations.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-medium mb-3 text-forest-dark">Our Objectives</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>To monitor and report deforestation and water pollution in Uganda's key ecosystems using satellite imagery and machine learning algorithms.</li>
                <li>To engage local community members in environmental conservation efforts through training and awareness programs.</li>
                <li>To collaborate with government agencies, local communities and conservation groups to promote sustainable land use practices and environmental conservation.</li>
                <li>To develop and deliver ICT solutions and services that harness emerging technologies and innovations.</li>
                <li>To conduct comprehensive assessments and evaluation of environmental conservation impact, driving research and innovations for sustainable development.</li>
              </ul>
            </div>
            
            <div className="text-center mt-6">
              <p className="text-forest-dark font-medium italic">
                "Where Technology Meets Environmental Preservation"
              </p>
            </div>
            
            <div className="mt-6 flex justify-center space-x-4">
              <a 
                href="https://www.linkedin.com/company/aquawood-uganda/" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-forest-DEFAULT hover:text-forest-dark transition-colors"
              >
                <Linkedin size={18} className="mr-1" /> LinkedIn
              </a>
              <a 
                href="https://youtube.com/@aquawoodug?si=PQKX4rl1DHy9r_B6" 
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center text-forest-DEFAULT hover:text-forest-dark transition-colors"
              >
                <Youtube size={18} className="mr-1" /> YouTube
              </a>
            </div>
          </div>
        </div>

        <div className="bg-forest-light/20 rounded-xl p-8 mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center text-forest-dark">Our Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <PartnerLogo name="Ministry of Water and Environment" />
            <PartnerLogo name="Uganda Wildlife Authority" />
            <PartnerLogo name="National Forest Authority" />
            <PartnerLogo name="Environmental Research Institute" />
          </div>
        </div>
        
        <div className="py-10">
          <h3 className="text-2xl font-semibold mb-6 text-center text-forest-dark">Our Achievements</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/lovable-uploads/816e4a8a-02c0-4072-83bd-7b35facfc915.png" 
                  alt="Award winners during Inter-University hackathon competition" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-medium text-forest-dark">Award Winners</h4>
                <p className="text-gray-600 text-sm">Inter-University hackathon competition at Ministry of Water and Environment during Water and Environment Week 2023</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/lovable-uploads/874baa1b-2e14-44bc-b7f8-ee729d1dfd5d.png" 
                  alt="Aquawood investor pitch presentation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-medium text-forest-dark">Investor Pitch</h4>
                <p className="text-gray-600 text-sm">Aquawood investor pitch at National Water and Sewage Corporation during Water and Environment Week 2024</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src="/lovable-uploads/209cb8a5-a8b8-4361-9de1-0df19a63d48a.png" 
                  alt="WASH Hackathon and Majipreneurs Summit achievement" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-lg font-medium text-forest-dark">WASH Hackathon</h4>
                <p className="text-gray-600 text-sm">Achievement during WASH hackathon competitions and Majipreneurs Summit 2025</p>
              </div>
            </div>
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
