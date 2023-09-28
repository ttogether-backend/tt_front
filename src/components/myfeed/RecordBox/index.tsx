import React from "react";
// import { CommentListBox } from "./CommentItem.style";
import CommentItem from "./CommentItem";
import BlockUserItem from "./BlockUserItem";
import styled from "@emotion/styled";

type CommentListProps = {
  id:number,
  comment:string,
  postTitle:string,
  date:string
}

const CommentListBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 0px;
  margin-top: 4px;
`;

export const CommentList: React.FC<{comments: CommentListProps[];}> = ({comments}) => {
  return (
    <CommentListBox>
      {comments.map((comment) => (
        <CommentItem id={comment.id} comment={comment.comment} postTitle={comment.postTitle} date={comment.date}/>
      ))}
    </CommentListBox>
  );
};

export const BlockUserList: React.FC<{blockUsers: {id:string, profileImage:string, nickname:string, intro:string}[];}> = ({blockUsers}) => {
  return (
    <CommentListBox>
      {blockUsers.map((blockUser) => (
        <BlockUserItem id={blockUser.id} profileImage={blockUser.profileImage} nickname={blockUser.nickname} intro={blockUser.intro}/>
      ))}
    </CommentListBox>
  );
}
