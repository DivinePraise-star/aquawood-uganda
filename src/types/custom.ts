
// Custom types that extend or work with the Supabase types
import type { Database } from '@/integrations/supabase/types';

// Example of how to extract and use types from the Supabase-generated types
export type MonitoredArea = Database['public']['Tables']['monitored_areas']['Row'];
export type DeforestationData = Database['public']['Tables']['deforestation_data']['Row'];
export type WaterQualityData = Database['public']['Tables']['water_quality_data']['Row'];
export type EnvironmentalAlert = Database['public']['Tables']['environmental_alerts']['Row'];
export type CommunityReport = Database['public']['Tables']['community_reports']['Row'];
export type ConservationProject = Database['public']['Tables']['conservation_projects']['Row'];
export type Profile = Database['public']['Tables']['profiles']['Row'];
