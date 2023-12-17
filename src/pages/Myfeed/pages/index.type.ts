import { SideMenuItemType } from '../components/SideMenu';

export interface RequestListItemProps {
  postInfo: AccompanyPostType;
  requestInfo: AccompanyRequestType;
}

export interface AccompanyPostType {
  id: number;
  title: string;
}

export interface AccompanyRequestType {
  id: number;
  requester: AccompanyRequesterType;
  requestAt: Date;
  status: string;
}

export interface AccompanyRequesterType {
  id: string;
  nickname: string;
  profileImagePath: string;
}

export const myfeedMenuList: SideMenuItemType[] = [
  {
    id: 'menu_profile',
    label: '프로필',
    path: '/feed/my',
  },
  {
    id: 'menu_receive_request',
    label: '받은 동행 신청 목록',
    path: '/feed/my/receive-accompany-request',
  },
  {
    id: 'menu_send_request',
    label: '보낸 동행 신청 목록',
    path: '/feed/my/send-accompany-request',
  },
  {
    id: 'menu_accompany',
    label: '동행 진행 내역',
    path: '/feed/my/accompany',
  },
];

export const getUserFeedMenuList = (id: string): SideMenuItemType[] => {
  return [
    {
      id: 'menu_profile',
      label: '프로필',
      path: `/feed/${id}`,
    },
    {
      id: 'menu_accompany',
      label: '동행 진행 내역',
      path: `/feed/${id}/accompany`,
    },
  ];
};
