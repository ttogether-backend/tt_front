import { getData } from 'src/Utils/ApiUtils';

const MEMBER_PATH = '/api/v1/members';

export const getProfile = async (memberId: string) => {
  const path = MEMBER_PATH + `/${memberId}/profile`;

  return (await getData(path)).data;
};
