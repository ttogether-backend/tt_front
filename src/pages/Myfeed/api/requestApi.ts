import { getData, patchData } from 'src/Utils/ApiUtils';
import { RequestListItemProps } from '../requestList/index.type';

const ACCOMPANY_REQUEST_PATH = '/api/v1/accompany/requests';


export const ACCOMPANY_REQUEST_STATUS = {
  REQUESTING: {
    code: 'REQUESTING',
    name: '요청중',
  },
  ACCEPT: {
    code: 'ACCEPT',
    name: '수락',
  },
  REFUSAL: {
    code: 'REFUSAL',
    name: '거절',
  },
  CANCEL: {
    code: 'CANCEL',
    name: '신청 취소',
  },
};

export const makeComponentProps = (apiResult: any): RequestListItemProps[] => {
  if (apiResult?.total_count == 0) {
    return null;
  }

  return apiResult?.data?.accompany_request_list?.map(
    ({ accompany_request_id, requester, accompany, status }) => {
      return {
        postInfo: {
          id: accompany?.accompany_post_id,
          title: accompany?.title,
        },
        requestInfo: {
          id: accompany_request_id,
          requester: {
            id: requester.member_id,
            nickname: requester.nickname,
            profileImagePath: requester.profile_image_path,
          },
          date: null,
          status: status,
        },
      };
    }
  );
};

export const getSendRequestList = async (pageNo: number, pageSize: number) => {
  const path = ACCOMPANY_REQUEST_PATH + '/send?' + `pageNo=${pageNo}` + `&pageSize=${pageSize}`;

  return (await getData(path)).data;
};

export const getReceiveRequestList = async (pageNo: number, pageSize: number) => {
  const path = ACCOMPANY_REQUEST_PATH + '/receive?' + `pageNo=${pageNo}` + `&pageSize=${pageSize}`;

  return (await getData(path)).data;
};

export const patchRequest = async (requestId: number, requestStatus: string) => {
  const path = ACCOMPANY_REQUEST_PATH + `/${requestId}`;
  const requestBody = {
    requestStatus: requestStatus,
  };

  return (await patchData(path, requestBody)).success;
};
