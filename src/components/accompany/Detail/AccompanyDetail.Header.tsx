import react, { FC, useState } from 'react';
import { MoreIcon } from 'src/assets/icon/MoreIcon';
import {
  CreatedAt,
  InfoBox,
  MoreOptions,
  Tag,
  TagBox,
  Title,
  ViewCount,
} from './AccompanyDetail.styles';
import {
  AccompanyDetailPropsType,
  Category,
  RecruitStatus,
  AccompanyStatus,
} from './AccompanyDetail.types';
import { UpdateStatusDialog } from '../../../shared/components/modals/UpdateStatusDialog';
import { UpdateStatusObject } from '../../../shared/components/modals/UpdateStatusDialog/UpdateStatusDialog.types';

const Header: FC<AccompanyDetailPropsType['HeaderType']> = ({
  title,
  category,
  recruit_status,
  view_count,
  progess_status,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        style={{
          marginBottom: '40px',
        }}
      >
        <div>
          <TagBox>
            <Tag background="#5bb13d" color="#fff">
              {Category[category]}
            </Tag>
            <Tag background="#f0f9ec" color="#376b25">
              {RecruitStatus[recruit_status]}
            </Tag>
          </TagBox>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'relative',
            }}
          >
            <Title> {title} </Title>
            <MoreIcon />
            <MoreOptions top={'56px'}>
              <li style={{ cursor: 'pointer' }} onClick={() => setModalOpen(true)}>
                동행 모집 상태 변경
              </li>
              <li>수정</li>
              <li>삭제</li>
            </MoreOptions>
          </div>

          <InfoBox>
            <CreatedAt>2023.05.17</CreatedAt>
            <ViewCount>조회수 {view_count}</ViewCount>
          </InfoBox>
        </div>
      </div>
      <UpdateStatusDialog
        currentStatus={{
          accompanyId: 1,
          status: AccompanyStatus[progess_status],
          recruitStatus: RecruitStatus[recruit_status],
        }}
        isOpen={modalOpen}
        handleClose={() => {
          setModalOpen(false);
        }}
        handleConfirm={(updateStatusObject: UpdateStatusObject) => {
          console.log(updateStatusObject);
        }}
      />
    </>
  );
};

export default Header;
