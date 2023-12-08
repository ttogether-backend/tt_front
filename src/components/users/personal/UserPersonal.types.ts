export interface AccompanyDetailPropsType {
    InfoType: InfoType;
    AuthType: AuthType;
    ContentDataType: ContentType;
  }
  
  export interface InfoType {
    nickname: string;
    bio: string;
    profile_image_url: string;
  }
  
  export interface AuthType {
    status: AccompanyStatus;
    location_info_list: LocationInfoList[];
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
    startAt?: string,
    endAt?: number
  }
  export interface RecruitAgeRange {
    minRecruitAge?: number,
    maxRecruitAge?: number
  }
  
  export interface ContentType {
    content: string;
    image_list: string[];
    document_list: string[]
  }