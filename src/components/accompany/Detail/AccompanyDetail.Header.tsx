import react, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

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
import { AlertDialog } from '../../../shared/components/modals/AlertDialog';
import { dialogButtonStyleCode } from '../../../shared/components/modals//common/DialogButton.types';
import { useNavigate } from 'react-router-dom';

import createAxios from 'src/Utils/axiosInstance';

const Header: FC<AccompanyDetailPropsType['HeaderType']> = ({
  accompany_id,
  title,
  category,
  recruit_status,
  view_count,
  progress_status,
}) => {
  const axiosInstance = createAxios();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, isDeleteModalOpen] = useState(false);
  const { id } = useParams();

  function handleDeletePost() {
    axiosInstance.delete('/api/v1/accompany/posts/' + id).then((res) => {
      console.log(res.data);
      if (res.data.result.code == 'SUCCESS') {
        isDeleteModalOpen(false);
        navigate('/accompany');
      }
    });
  }

  function handleRecruitStatus(recruitStatus) {
    axiosInstance
      .patch('/api/v1/' + { accompany_id } + 'recruit-status', recruitStatus)
      .then((res) => {
        console.log(res.data);
        if (res.data.result.code == 'SUCCESS') {
        }
      });
  }

  function handleProgressStatus(progressStatus) {
    axiosInstance
      .patch('/api/v1/' + { accompany_id } + 'progress-status', progressStatus)
      .then((res) => {
        console.log(res.data);
        if (res.data.result.code == 'SUCCESS') {
        }
      });
  }

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
              <Link to={`/accompany/${id}/modify`}>
                <li>수정</li>
              </Link>
              <a>
                <li onClick={() => isDeleteModalOpen(true)}>삭제</li>
              </a>
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
          status: progress_status,
          recruitStatus: recruit_status,
        }}
        isOpen={modalOpen}
        handleClose={() => {
          setModalOpen(false);
        }}
        handleConfirm={(updateStatusObject: UpdateStatusObject) => {
          handleRecruitStatus({ recruit_status: updateStatusObject.recruitStatus });
          handleProgressStatus({ progress_status: updateStatusObject.status });
          console.log('updateStatusObject', updateStatusObject);
        }}
      />
      <AlertDialog
        title="동행글 삭제"
        message="동행글을 삭제할까요?"
        isCloseBackgroundClick={true}
        isOpen={deleteModalOpen}
        handleClose={() => {
          isDeleteModalOpen(false);
        }}
        buttons={[
          {
            style: dialogButtonStyleCode.red,
            label: '삭제하기',
            handleClick: () => {
              handleDeletePost();
            },
          },
          {
            style: dialogButtonStyleCode.black,
            label: '취소',
            handleClick: () => {
              isDeleteModalOpen(false);
            },
          },
        ]}
      />
    </>
  );
};

export default Header;
