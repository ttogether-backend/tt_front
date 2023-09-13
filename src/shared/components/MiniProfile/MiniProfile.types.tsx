export const miniProfileTypeCode = {
  all: 'all',
  nickname: 'nickname'
}

export type MiniProfileTypeCodeType = typeof miniProfileTypeCode[keyof typeof miniProfileTypeCode];

export type MemberInfo = {
  memberId: number;
  nickname: string; 
  imageUrl?: string;
  bio?:string;
  isFollow?:boolean;
}

export type MiniProfileProps = {
    member: MemberInfo;
    type?: MiniProfileTypeCodeType;
  };