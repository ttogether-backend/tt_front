export type PostInfo = {
  category: AccompanyType; 
  title: string;
  content: string;
  expected_start_at: string; // Date string, e.g., "2023-09-20"
  expected_end_at: string; // Date string, e.g., "2023-09-20"
  recruit_number: number;
  is_age_free: boolean;
  min_recruit_age: number;
  max_recruit_age: number;
  location_info: LocationInfo[];
  add_content: string;
};

export enum AccompanyType {
  culture = 'CULTURE',
  food = 'FOOD',
  travel = 'TRAVEL',
}
export type LocationInfo = {
  location_id: number;
  country: string;
  city: string;
  latitude: string;
  longitude: string;
  name: string;
  address: string;
};
