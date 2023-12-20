import { getData } from 'src/Utils/ApiUtils';
import { AccompanyCardProps } from 'src/shared/components/AccompanyCard/AccompanyCard.types';

const MEMBER_PATH = '/api/v1/members';
const ACCOMPANY_PATH = 'api/v1/accompany';

interface GetAccompanyParam {
  memberId: string;
  role?: RoleType[];
  progressStatus?: ProgressStatusType[];
  recruitStatus?: RecruitStatusType[];
}

type RoleType = 'HOST' | 'GUEST';
type ProgressStatusType = 'READY' | 'CONFIRM' | 'CANCEL' | 'COMPLETE';
type RecruitStatusType = 'RECRUITING' | 'COMPLETE';

export const getProfile = async (memberId: string) => {
  const path = MEMBER_PATH + `/${memberId}/profile`;

  return (await getData(path)).data;
};

export const getAccompany = async (param: GetAccompanyParam, pageNo: number, pageSize: number) => {
  let path = ACCOMPANY_PATH + `?memberId=${param.memberId}`;

  if (param?.role || param?.role instanceof Array) {
    param.role.forEach((value: RoleType) => {
      path += `&role=${value}`;
    });
  }

  if (param?.progressStatus || param?.progressStatus instanceof Array) {
    param.progressStatus.forEach((value: ProgressStatusType) => {
      path += `&progressStatus=${value}`;
    });
  }

  if (param?.recruitStatus || param?.recruitStatus instanceof Array) {
    param.recruitStatus.forEach((value: RecruitStatusType) => {
      path += `&recruitStatus=${value}`;
    });
  }

  path += `&pageNo=${pageNo}` + `&pageSize=${pageSize}`;

  return (await getData(path)).data;
};

export const makeComponentProps = (datas: any[]): AccompanyCardProps[] => {
  return datas?.map((value) => {
    return {
      isAccomList: true,
      profileImgSrc: value.host.profile_image_path,
      username: value.host.nickname,
      age: `${value.recruit_age_range.min_recruit_age}대 ~ ${value.recruit_age_range.max_recruit_age}대`,
      accomId: value.accompany_id,
      memberId: value.host.member_id,
      thumbSrc: value.thumbnail_url,
      category: value.category,
      status: value.progress_status,
      date: `${value.period.start_at} ~ ${value.period.end_at}`,
      cnt: value.join_member_count,
      personnel: value.recruit_number,
      title: value.title,
      location: value?.location_info_list?.[0].name,
      tags: [],
    };
  });
};
