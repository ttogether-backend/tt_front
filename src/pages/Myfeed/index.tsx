import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NonNavbarPage } from '../layout';
import { SideMenuContainer } from './layout/SideMenuContainer';
import { SideMenuItemType } from './components/SideMenu';
import ReceiveRequestList from './requestList/ReceiveRequestList';
import SendRequestList from './requestList/SendRequestList';
import Feed from './feed/Feed';
import { FlexContainer } from './layout/FlexContainer';

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
    id: 'menu_accompany',
    label: '동행 진행 내역',
  },
];

const Myfeed: React.FC<{ children?: React.ReactNode }> = () => {
  const { id } = useParams();
  
  return (
    <NonNavbarPage>
      {!id ? (
        <SideMenuContainer menuItemList={menuItemList}>
          <SideMenuContainer.SideMenuContent menuId={'menu_profile'}>
            <Feed />
          </SideMenuContainer.SideMenuContent>
          <SideMenuContainer.SideMenuContent menuId={'menu_receive_request'}>
            <ReceiveRequestList />
          </SideMenuContainer.SideMenuContent>
          <SideMenuContainer.SideMenuContent menuId={'menu_send_request'}>
            <SendRequestList />
          </SideMenuContainer.SideMenuContent>
          <SideMenuContainer.SideMenuContent menuId={'menu_accompany'}>
            <></>
          </SideMenuContainer.SideMenuContent>
        </SideMenuContainer>
      ) : (
        <FlexContainer direction="row" justifyContent="center" gap={32} width={'1408px'}>
          <Feed userId={id} />
        </FlexContainer>
      )}
    </NonNavbarPage>
  );
};

export default Myfeed;
