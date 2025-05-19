
import { CheckCircle, TrendingUp, Users, BarChart3 } from 'lucide-react';

const Outcomes = () => {
  return (
    <section id="outcomes" className="section-padding bg-white relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-dark">Expected Outcomes</h2>
          <div className="w-24 h-1 bg-aqua-DEFAULT mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            AQUAWOOD UGANDA is designed to deliver tangible results that contribute to environmental conservation and community resilience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-forest-light to-forest-DEFAULT/10 p-8 rounded-xl">
            <h3 className="text-2xl font-semibold mb-6 text-forest-dark">Impact Highlights</h3>
            <ul className="space-y-4">
              <ImpactItem icon={<CheckCircle className="text-forest-DEFAULT" />}>
                Enhanced monitoring capabilities for environmental authorities
              </ImpactItem>
              <ImpactItem icon={<CheckCircle className="text-forest-DEFAULT" />}>
                Data-driven decision making for conservation efforts
              </ImpactItem>
              <ImpactItem icon={<CheckCircle className="text-forest-DEFAULT" />}>
                Reduced response time to illegal deforestation activities
              </ImpactItem>
              <ImpactItem icon={<CheckCircle className="text-forest-DEFAULT" />}>
                Improved water quality in monitored water bodies
              </ImpactItem>
              <ImpactItem icon={<CheckCircle className="text-forest-DEFAULT" />}>
                Greater community participation in environmental protection
              </ImpactItem>
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg h-full">
            <img 
              src="/lovable-uploads/8c3a5e24-4118-48e7-be0c-7e8fc9faec9a.png" 
              alt="Healthy watershed in Uganda" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <OutcomeCard 
            icon={<BarChart3 size={36} className="text-forest-DEFAULT" />}
            title="Improved Monitoring"
            description="Enhanced monitoring and reporting of deforestation and water pollution, enabling proactive measures to mitigate drought and flood risks."
          />
          <OutcomeCard 
            icon={<TrendingUp size={36} className="text-aqua-DEFAULT" />}
            title="Sustainable Practices"
            description="Enhanced conservation efforts and sustainable land use practices, reducing soil erosion and increasing water retention."
          />
          <OutcomeCard 
            icon={<Users size={36} className="text-earth-gray" />}
            title="Community Engagement"
            description="Increased community awareness and involvement in environmental issues, promoting drought and flood resilient practices."
          />
          <OutcomeCard 
            icon={<CheckCircle size={36} className="text-forest-dark" />}
            title="Climate Resilience"
            description="Contribution to Uganda's climate change resilience and sustainable development goals through data-driven interventions."
          />
        </div>

        <div className="mt-16 p-8 bg-highlight/50 rounded-xl">
          <h3 className="text-2xl font-semibold mb-6 text-center text-forest-dark">Next Steps</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <NextStepCard number="1" title="Research & Development">
              Conduct further research and development to refine the application's features and capabilities.
            </NextStepCard>
            <NextStepCard number="2" title="Stakeholder Engagement">
              Engage stakeholders and secure partnerships with government agencies, NGOs, and tech companies.
            </NextStepCard>
            <NextStepCard number="3" title="Pilot Testing">
              Pilot test the application in select regions to validate its effectiveness and gather user feedback.
            </NextStepCard>
            <NextStepCard number="4" title="Nationwide Scaling">
              Scale up the application nationwide, integrating it with existing drought and flood management systems.
            </NextStepCard>
          </div>
        </div>
      </div>
    </section>
  );
};

interface ImpactItemProps {
  icon: React.ReactNode;
  children: React.ReactNode;
}

const ImpactItem = ({ icon, children }: ImpactItemProps) => (
  <li className="flex items-start">
    <div className="flex-shrink-0 mt-1 mr-3">{icon}</div>
    <span className="text-gray-700">{children}</span>
  </li>
);

interface OutcomeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const OutcomeCard = ({ icon, title, description }: OutcomeCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-full">
    <div className="mb-4">{icon}</div>
    <h4 className="text-xl font-semibold mb-3 text-gray-800">{title}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

interface NextStepCardProps {
  number: string;
  title: string;
  children: React.ReactNode;
}

const NextStepCard = ({ number, title, children }: NextStepCardProps) => (
  <div className="bg-white rounded-xl p-5 shadow-sm h-full">
    <div className="flex items-center mb-3">
      <div className="w-8 h-8 rounded-full bg-forest-DEFAULT text-white flex items-center justify-center font-bold mr-3">
        {number}
      </div>
      <h4 className="font-semibold text-forest-dark">{title}</h4>
    </div>
    <p className="text-gray-600 text-sm">{children}</p>
  </div>
);

export default Outcomes;
