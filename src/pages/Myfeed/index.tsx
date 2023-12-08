import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NonNavbarPage } from '../layout';
import { SideMenuContainer } from './layout/SideMenuContainer';
import { SideMenuItemType } from './components/SideMenu';
import ReceiveRequestList from './requestList/ReceiveRequestList';
import SendRequestList from './requestList/SendRequestList';

const menuItemList: SideMenuItemType[] = [
  {
    id: 'menu_profile',
    label: '프로필',
  },
  {
    id: 'menu_receive_request',
    label: '받은 동행 신청 목록',
  },
  {
    id: 'menu_send_request',
    label: '보낸 동행 신청 목록',
  },
  {
    id: 'menu_comment',
    label: '내가 작성한 댓글',
  },
  {
    id: 'menu_accompany',
    label: '동행 진행 내역',
  },
];

const Myfeed: React.FC<{ children?: React.ReactNode }> = () => {
  const { id } = useParams();

  const validate = () => {
    // 로그인 x 시 팝업 + 메인 홈으로 리다이렉트 : 라우트에서 공통으로 처리할 수 잇지 않나?
    
    return true;
  }

  useEffect(() => {
    console.log(id);
    
  }, [id]);

  return (
    <NonNavbarPage>
      {id == null ? (
        <SideMenuContainer menuItemList={menuItemList}>
          <SideMenuContainer.SideMenuContent menuId={'menu_receive_request'}>
            <ReceiveRequestList />
          </SideMenuContainer.SideMenuContent>
          <SideMenuContainer.SideMenuContent menuId={'menu_send_request'}>
            <SendRequestList />
          </SideMenuContainer.SideMenuContent>
        </SideMenuContainer>
      ) : (
        <></>
      )}
    </NonNavbarPage>
  );
};

export default Myfeed;
