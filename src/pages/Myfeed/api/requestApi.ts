import createAxios from 'src/Utils/axiosInstance';
import { RequestListItemProps } from '../requestList/index.type';

const ACCOMPANY_REQUEST_PATH = '/api/v1/accompany/requests';

const axiosInstance = createAxios();

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

  return await getData(path);
};

export const getReceiveRequestList = async (pageNo: number, pageSize: number) => {
  const path = ACCOMPANY_REQUEST_PATH + '/receive?' + `pageNo=${pageNo}` + `&pageSize=${pageSize}`;

  return await getData(path);
};

export const patchRequest = async (requestId: number, requestStatus: string) => {
  const path = ACCOMPANY_REQUEST_PATH + `/${requestId}`;
  const requestBody = {
    requestStatus: requestStatus,
  };

  try {
    const response = await axiosInstance.patch(path, requestBody);

    const { data, status } = response;

    if (status == 200 && data.success) {
      return true;
    }

    return false;
  } catch (error) {
    console.log(error);
  }
};

const getData = async (path: string) => {
  try {
    const response = await axiosInstance.get(path);
    const { data, status } = response;

    if (status == 200 && data.success) {
      return data.result;
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
