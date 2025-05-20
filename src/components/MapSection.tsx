
import { useState, useEffect } from 'react';
import { Map, FileWarning, TreePine, Droplets } from 'lucide-react';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import type { MonitoredArea, DeforestationData, WaterQualityData, EnvironmentalAlert } from '@/types/custom';

const MapSection = () => {
  const [activeTab, setActiveTab] = useState('deforestation');
  const [monitoredAreas, setMonitoredAreas] = useState<MonitoredArea[]>([]);
  const [deforestationData, setDeforestationData] = useState<DeforestationData[]>([]);
  const [waterQualityData, setWaterQualityData] = useState<WaterQualityData[]>([]);
  const [alerts, setAlerts] = useState<EnvironmentalAlert[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch monitored areas
        const { data: areasData, error: areasError } = await supabase
          .from('monitored_areas')
          .select('*');

        if (areasError) throw areasError;
        setMonitoredAreas(areasData || []);
        
        // Fetch data based on active tab
        if (activeTab === 'deforestation') {
          const { data, error } = await supabase
            .from('deforestation_data')
            .select('*')
            .order('observation_date', { ascending: false })
            .limit(10);
          
          if (error) throw error;
          setDeforestationData(data || []);
        } 
        else if (activeTab === 'water') {
          const { data, error } = await supabase
            .from('water_quality_data')
            .select('*')
            .order('observation_date', { ascending: false })
            .limit(10);
          
          if (error) throw error;
          setWaterQualityData(data || []);
        } 
        else if (activeTab === 'alerts') {
          const { data, error } = await supabase
            .from('environmental_alerts')
            .select('*')
            .order('reported_date', { ascending: false })
            .limit(10);
          
          if (error) throw error;
          setAlerts(data || []);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        toast({
          title: "Error fetching data",
          description: "Could not load environmental data. Please try again later.",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [activeTab, toast]);

  // Function to handle tab changes
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setLoading(true);
  };

  return (
    <section id="map" className="section-padding bg-gradient-to-b from-white to-earth-light/30 relative">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-forest-dark">Interactive Monitoring</h2>
          <div className="w-24 h-1 bg-aqua-DEFAULT mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            The AQUAWOOD application provides interactive maps and visualizations to track environmental changes over time.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b">
            <TabButton 
              active={activeTab === 'deforestation'} 
              onClick={() => handleTabChange('deforestation')}
              icon={<TreePine size={18} />}
              label="Deforestation Monitoring"
            />
            <TabButton 
              active={activeTab === 'water'} 
              onClick={() => handleTabChange('water')}
              icon={<Droplets size={18} />}
              label="Water Quality"
            />
            <TabButton 
              active={activeTab === 'alerts'} 
              onClick={() => handleTabChange('alerts')}
              icon={<FileWarning size={18} />}
              label="Alert System"
            />
          </div>

          {/* Map Placeholder */}
          <div className="p-6">
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden relative">
              {loading ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-DEFAULT"></div>
                </div>
              ) : activeTab === 'deforestation' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                  <Map size={48} className="mb-4 text-forest-DEFAULT opacity-50" />
                  <p className="text-center max-w-md">
                    Interactive deforestation monitoring map displaying forest cover changes from 2020-2025 across Uganda.
                    {deforestationData.length > 0 && ` Showing ${deforestationData.length} recent records.`}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-forest-DEFAULT/20 to-transparent"></div>
                </div>
              )}
              {!loading && activeTab === 'water' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                  <Map size={48} className="mb-4 text-aqua-DEFAULT opacity-50" />
                  <p className="text-center max-w-md">
                    Water quality monitoring visualization tracking pollution levels in major water bodies.
                    {waterQualityData.length > 0 && ` Showing ${waterQualityData.length} recent records.`}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-aqua-DEFAULT/20 to-transparent"></div>
                </div>
              )}
              {!loading && activeTab === 'alerts' && (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
                  <Map size={48} className="mb-4 text-earth-gray opacity-50" />
                  <p className="text-center max-w-md">
                    Environmental alert system highlighting areas of concern requiring immediate attention.
                    {alerts.length > 0 && ` Showing ${alerts.length} active alerts.`}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-earth-gray/20 to-transparent"></div>
                </div>
              )}
            </div>
          </div>

          {/* Info Section */}
          <div className="p-6 bg-gray-50 border-t">
            <h3 className="text-xl font-semibold mb-3 text-forest-dark">
              {activeTab === 'deforestation' && 'Deforestation Monitoring'}
              {activeTab === 'water' && 'Water Quality Monitoring'}
              {activeTab === 'alerts' && 'Environmental Alert System'}
            </h3>
            <p className="text-gray-700">
              {activeTab === 'deforestation' && 'Our deforestation monitoring system uses multi-spectral satellite imagery to detect forest cover changes. The system can identify illegal logging, agricultural expansion, and other activities that contribute to deforestation.'}
              {activeTab === 'water' && 'The water quality monitoring feature tracks changes in water bodies using specialized algorithms that detect turbidity, algal blooms, and other indicators of pollution or contamination.'}
              {activeTab === 'alerts' && 'AQUAWOOD\'s alert system provides timely notifications about potential environmental threats, allowing for rapid response and intervention by relevant authorities and communities.'}
            </p>
            
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-forest-light text-forest-dark">
                Satellite Data
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-aqua-DEFAULT/20 text-aqua-dark">
                AI Processing
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-highlight text-gray-700">
                Real-time Updates
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-earth-gray/20 text-earth-gray">
                Community Reports
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <StatCard 
            value="85%" 
            label="Monitoring Accuracy" 
            description="Detection accuracy for forest cover changes validated against ground truth data"
          />
          <StatCard 
            value="2.5M" 
            label="Hectares Monitored" 
            description="Total forest area under continuous satellite monitoring across Uganda"
          />
          <StatCard 
            value="24/7" 
            label="Alert System" 
            description="Continuous monitoring with near real-time alerts for environmental threats"
          />
        </div>
      </div>
    </section>
  );
};

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const TabButton = ({ active, onClick, icon, label }: TabButtonProps) => (
  <button
    onClick={onClick}
    className={`flex items-center py-4 px-6 transition-colors font-medium ${
      active 
        ? 'text-forest-DEFAULT border-b-2 border-forest-DEFAULT' 
        : 'text-gray-500 hover:text-gray-700'
    }`}
  >
    <span className="mr-2">{icon}</span>
    <span className="hidden sm:inline">{label}</span>
  </button>
);

interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

const StatCard = ({ value, label, description }: StatCardProps) => (
  <div className="bg-white rounded-xl p-6 shadow-md text-center">
    <div className="text-3xl font-bold text-forest-DEFAULT mb-2">{value}</div>
    <h4 className="text-lg font-semibold mb-3 text-gray-800">{label}</h4>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default MapSection;
