export interface ApiResponse {
  success: boolean;
  result: ApiResult;
  errorList: ApiError[];
}

export interface ApiResult {
  code: string;
  message: string;
  data: any;
}

export interface ApiError {
  code: string;
  message: string;
}
