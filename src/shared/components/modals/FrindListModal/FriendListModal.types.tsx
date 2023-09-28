import { MemberInfo } from "../../MiniProfile/MiniProfile.types";

export const friendTabList = {
  follower: {
    value: 'follower',
    name: '팔로워',
    url: '',
  },
  following: {
    value: 'following',
    name: '팔로잉',
    url: '',
  },
  togetherFollow: {
    value: 'togetherFollow',
    name: '함께 팔로우 하는 사람',
    url: '',
  },
};

export const friendTabListCode = {
  follower :'follower',
  following : 'following',
  togetherFollow : 'togetherFollow'
}

export type friendTabListCodeType = typeof friendTabListCode[keyof typeof friendTabListCode];

export type FriendListModalProps = {
    myMemberInfo: MemberInfo;
    isOpen: boolean;
    isCloseBackgroundClick?: boolean;
    tab: friendTabListCodeType;
    handleClose: () => void;
  };