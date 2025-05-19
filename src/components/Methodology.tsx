
import { Satellite, BrainCircuit, UsersRound, Server } from 'lucide-react';

const Methodology = () => {
  return (
    <section id="methodology" className="section-padding bg-earth-light relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-dark">Our Methodology</h2>
          <div className="w-24 h-1 bg-aqua-DEFAULT mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            AQUAWOOD employs a comprehensive approach combining cutting-edge technology with community engagement to monitor and address environmental challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left side: Steps timeline */}
          <div>
            <Timeline />
          </div>

          {/* Right side: Image and description */}
          <div>
            <div className="rounded-xl overflow-hidden shadow-lg mb-8">
              <img 
                src="/lovable-uploads/51f341c7-10c0-4589-ad9b-86e241fb615a.png" 
                alt="AQUAWOOD methodology visualization" 
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-forest-DEFAULT">Data-Driven Approach</h3>
              <p className="text-gray-700">
                Our methodology integrates multi-spectral satellite imagery analysis with ground-truth data collection, processed through advanced machine learning algorithms to deliver actionable insights. This approach allows for near real-time monitoring of deforestation activities and water quality changes across Uganda.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center text-forest-DEFAULT">Key Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              icon={<Satellite className="text-aqua-DEFAULT" size={32} />}
              title="Satellite Monitoring"
              description="Utilizes high-resolution satellite imagery to detect changes in forest cover and water bodies."
            />
            <FeatureCard 
              icon={<BrainCircuit className="text-forest-DEFAULT" size={32} />}
              title="AI Analysis"
              description="Machine learning algorithms analyze patterns and identify trends in environmental data."
            />
            <FeatureCard 
              icon={<UsersRound className="text-earth-gray" size={32} />}
              title="Community Engagement"
              description="Involves local communities in reporting and verification of environmental changes."
            />
            <FeatureCard 
              icon={<Server className="text-aqua-dark" size={32} />}
              title="Data Integration"
              description="Combines multiple data sources for comprehensive environmental analysis."
            />
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-forest-light/20 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-aqua-DEFAULT/10 rounded-full translate-y-1/3 -translate-x-1/4 blur-3xl"></div>
    </section>
  );
};

const Timeline = () => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-0 md:left-6 top-0 bottom-0 w-1 bg-forest-DEFAULT/30 rounded ml-4 md:ml-0"></div>

      <div className="space-y-12">
        <TimelineItem number="1" title="Satellite Imagery">
          Utilize high-resolution satellite imagery to detect forest cover loss and water contamination across Uganda's diverse ecosystems.
        </TimelineItem>
        <TimelineItem number="2" title="Machine Learning Analysis">
          Employ sophisticated machine learning algorithms to analyze data and identify trends, patterns, and anomalies in environmental changes.
        </TimelineItem>
        <TimelineItem number="3" title="Application Development">
          Develop a user-friendly application for reporting and monitoring deforestation and water pollution with real-time alerts and visualization tools.
        </TimelineItem>
        <TimelineItem number="4" title="Stakeholder Engagement">
          Engage key stakeholders, including government agencies, conservation groups, and local communities in collaborative environmental monitoring.
        </TimelineItem>
      </div>
    </div>
  );
};

interface TimelineItemProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

const TimelineItem = ({ number, title, children }: TimelineItemProps) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-forest-DEFAULT text-white font-bold mr-4 md:mr-8 relative z-10">
      {number}
    </div>
    <div className="bg-white rounded-lg shadow-md p-5 ml-2 border-l-4 border-forest-DEFAULT flex-grow">
      <h4 className="text-lg font-semibold mb-2 text-forest-dark">{title}</h4>
      <p className="text-gray-700">{children}</p>
    </div>
  </div>
);

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col items-center text-center">
    <div className="mb-4 p-3 bg-gray-50 rounded-full">{icon}</div>
    <h4 className="text-lg font-semibold mb-2 text-gray-800">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default Methodology;
