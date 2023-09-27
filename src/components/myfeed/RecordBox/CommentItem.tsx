import React, {useState} from "react";
import ButtonsIcon from "src/shared/components/ButtonsIcon";
import {ItemContainer, CommentContainer, Comment, OtherText, moreIconButtonStyle, DeleteButton} from "./CommentItem.style";

const CommentItem: React.FC<{id:number, comment:string, postTitle:string, date:string}> = ({id, comment, postTitle, date}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  return (
    <ItemContainer>
      <CommentContainer>
        <Comment>{comment}</Comment>
        <OtherText>{postTitle}</OtherText>
        <OtherText>{date}</OtherText>
      </CommentContainer>
      <ButtonsIcon icon="moreIcon" styleType={moreIconButtonStyle} onClick={() => {setIsDeleteModalOpen(!isDeleteModalOpen)}}/>
      {isDeleteModalOpen &&
        <DeleteButton onClick={() => {setIsDeleteModalOpen(false); setIsModalOpen(true);}}>삭제하기</DeleteButton>
      }
    </ItemContainer>
  )
};

export default CommentItem;