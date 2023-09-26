export type MyProps = {
  profileImage : string;
  nickName : string;
  accomCount : number;
  introduce : string;
  followerCount : string;
  followingCount : string;
  onClickFollower : () => void;
  onClickFollowing : () => void;
};

type Follower = {
  nickname: string;
  profileImage: string;
};

export type OthersProps = {
  profileImage : string;
  nickName : string;
  accomCount : number;
  introduce : string;
  followerCount : string;
  followingCount : string;
  isFollow : boolean; //isFollow : true면 팔로우, false면 팔로우 안한 상태
  isChat : boolean; //isChat : true면 채팅요청함, false면 채팅 안한 상태
  onClickFollower : () => void;
  onClickFollowing : () => void;
  follower: Follower[]; //[{"nickname", "profileImage"}, {"nickname", "profileImage"}, {"nickname", "profileImage"}]
};