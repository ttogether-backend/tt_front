import DialogUtils, { DIALOG_BUTTON_STYLE } from './DialogUtils';
import createAxios from './axiosInstance';

const axiosInstance = createAxios();

interface ApiUtilResult {
  success: boolean;
  data: any;
}

interface ApiResponse {
  success: boolean;
  result: ApiResult;
  errorList: ApiError[] | null;
}

interface ApiResult {
  code: string;
  message: string;
  data: any;
}

interface ApiError {
  code: string;
  message: string;
}

export const getData = async (path: string): Promise<ApiUtilResult> => {
  try {
    const response = await axiosInstance.get(path);

    return responseHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const patchData = async (path: string, requestBody: any): Promise<ApiUtilResult> => {
  try {
    const response = await axiosInstance.patch(path, requestBody);

    return responseHandler(response);
  } catch (error) {
    return errorHandler(error);
  }
};

export const responseHandler = (response) => {
  const { data, status } = response;

  if (status == 200 && data.success) {
    return { data: data.result, success: true };
  }

  if (status == 200) {
    DialogUtils.open({
      title: '요청 실패',
      message: data.result.message,
      buttons: [
        {
          label: '확인',
          style: DIALOG_BUTTON_STYLE.black,
        },
      ],
    });
  }

  return { data: null, success: false };
};

const errorHandler = (error) => {
  console.log(error);

  DialogUtils.open({
    title: '서비스 에러',
    message: '콘솔에서 에러 로그를 확인해주세요.',
    buttons: [
      {
        label: '확인',
        style: DIALOG_BUTTON_STYLE.black,
      },
    ],
  });

  return { data: null, success: false };
};
