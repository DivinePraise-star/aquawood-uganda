
import { supabase } from "@/integrations/supabase/client";
import type { 
  MonitoredArea, 
  DeforestationData, 
  WaterQualityData, 
  EnvironmentalAlert,
  CommunityReport,
  ConservationProject,
  Profile
} from '@/types/custom';

// Fetch monitored areas
export async function fetchMonitoredAreas() {
  const { data, error } = await supabase
    .from('monitored_areas')
    .select('*');
  
  if (error) throw error;
  return data as MonitoredArea[];
}

// Fetch deforestation data
export async function fetchDeforestationData(limit = 10) {
  const { data, error } = await supabase
    .from('deforestation_data')
    .select('*')
    .order('observation_date', { ascending: false })
    .limit(limit);
  
  if (error) throw error;
  return data as DeforestationData[];
}

// Fetch water quality data
export async function fetchWaterQualityData(limit = 10) {
  const { data, error } = await supabase
    .from('water_quality_data')
    .select('*')
    .order('observation_date', { ascending: false })
    .limit(limit);
  
  if (error) throw error;
  return data as WaterQualityData[];
}

// Fetch environmental alerts
export async function fetchEnvironmentalAlerts(limit = 10) {
  const { data, error } = await supabase
    .from('environmental_alerts')
    .select('*')
    .order('reported_date', { ascending: false })
    .limit(limit);
  
  if (error) throw error;
  return data as EnvironmentalAlert[];
}

// Fetch community reports
export async function fetchCommunityReports(limit = 10) {
  const { data, error } = await supabase
    .from('community_reports')
    .select('*')
    .order('submission_date', { ascending: false })
    .limit(limit);
  
  if (error) throw error;
  return data as CommunityReport[];
}

// Fetch conservation projects
export async function fetchConservationProjects(limit = 10) {
  const { data, error } = await supabase
    .from('conservation_projects')
    .select('*')
    .order('start_date', { ascending: false })
    .limit(limit);
  
  if (error) throw error;
  return data as ConservationProject[];
}

// Fetch user profile
export async function fetchUserProfile(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', userId)
    .single();
  
  if (error) throw error;
  return data as Profile;
}
