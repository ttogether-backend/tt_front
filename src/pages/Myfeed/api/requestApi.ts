import axios from 'axios';
import { ApiResponse } from 'src/common/types/api.type';
import { SERVER_HOST } from 'src/common/utils/api.util';

//: 
export const getSendRequestList = async (pageNo: number, pageSize: number) => {
  try {
    // const response = await axios.get(
    //   `${SERVER_HOST}/accompany/members/my/accompany/requests/send?pageNo=${pageNo}&pageSize=${pageSize}`
    // );

   
      const response = await axios.get(
        `http://localhost:8000/api/v1/accompany/posts/1`,
        {
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNTEzYWM2OC1hMjE4LTRmMWEtYTIyNS05NTVlYzVkNTU2N2MiLCJpYXQiOjE3MDIwMjYwOTIsImV4cCI6MTcwMjAyOTY5Mn0.ta3hojpKOxbWFwHSHtU7wiAth4zHjoQrVKfi5L5w9PU',
          },
        }
      );

      
      const { data, status } = response;
      const {success, result, errorList} = data;

      if (success) {
        return data;
      } else {
        
      }

  } catch (error) {
    console.log(error);
  }
};