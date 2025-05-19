
import { TreePine, Droplets, Gauge } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-dark">About AQUAWOOD</h2>
          <div className="w-24 h-1 bg-aqua-DEFAULT mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            AQUAWOOD UGANDA is a pioneering initiative addressing critical environmental challenges through innovative technology and community engagement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-forest-DEFAULT">Background</h3>
            <p className="text-gray-700 mb-6">
              Deforestation and water pollution are significant environmental concerns in Uganda, exacerbating the impacts of droughts and floods on communities and ecosystems. These issues threaten biodiversity, water security, and the livelihoods of millions of Ugandans who depend on these natural resources.
            </p>
            <p className="text-gray-700">
              AQUAWOOD UGANDA was developed to address these challenges by leveraging cutting-edge technology to monitor, track, and report environmental changes, empowering stakeholders to take informed action.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/8c3a5e24-4118-48e7-be0c-7e8fc9faec9a.png" 
              alt="Uganda landscape" 
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center text-forest-DEFAULT">Our Focus Areas</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <FocusCard 
              icon={<TreePine size={40} className="text-forest-DEFAULT" />}
              title="Deforestation Monitoring"
              description="Using satellite imagery and AI algorithms to detect and track forest cover loss across Uganda's diverse ecosystems."
            />
            <FocusCard 
              icon={<Droplets size={40} className="text-aqua-DEFAULT" />}
              title="Water Pollution Detection"
              description="Monitoring water bodies for contamination and pollution, protecting critical water resources for communities."
            />
            <FocusCard 
              icon={<Gauge size={40} className="text-highlight" />}
              title="Resilience Enhancement"
              description="Building drought and flood resilience through data-driven insights and community engagement strategies."
            />
          </div>
        </div>

        <div className="mt-20 bg-forest-light/10 rounded-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center text-forest-DEFAULT">Objective</h3>
          <p className="text-center text-gray-700 max-w-4xl mx-auto">
            To develop and deploy an innovative application, AQUAWOOD UGANDA, that utilizes satellite imagery and machine learning algorithms to monitor, track, and report deforestation and water pollution in Uganda, contributing to enhanced drought and flood resilience.
          </p>
        </div>
      </div>
    </section>
  );
};

interface FocusCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FocusCard = ({ icon, title, description }: FocusCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
    <div className="mb-4">{icon}</div>
    <h4 className="text-xl font-semibold mb-3 text-gray-800">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default About;
