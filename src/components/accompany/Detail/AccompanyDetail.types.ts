export interface AccompanyDetailPropsType {
  HeaderType: HeaderType;
  BasicInfoType: BasicInfoType;
  ContentDataType: ContentType;
}

export interface HeaderType {
  accompany_id: number;
  title: string;
  category: Category;
  recruit_status: RecruitStatus;
  view_count: number;
  progress_status: AccompanyStatus;
  setProgressStatus: (obj: Object) => void;
}
export enum Category {
  TRAVEL = '여행',
  CULTURE = '문화',
  FOOD = '맛집'
}
export enum RecruitStatus {
  RECRUITING = '모집 중',
  COMPLETE = '모집 완료'
}

export interface BasicInfoType {
  progressStatus?: string,
  location_info_list: LocationInfoList[],
  period: Period,
  recruit_number: number,
  recruit_age_range: RecruitAgeRange;
}
export enum AccompanyStatus {
  READY = '동행준비',
  CONFIRM = '동행확정',
  COMPLETE = '동행완료',
  CANCEL = '동행취소'
}
export interface LocationInfoList {
  location_id: number;
  latitude: string;
  longitude: string;
  name: string;
  address: string;
}
export interface Period {
  start_at?: string,
  end_at?: number
}
export interface RecruitAgeRange {
  min_recruit_age?: number,
  max_recruit_age?: number
}

export interface ContentType {
  content: string;
  image_list: string[];
  document_list: string[]
}