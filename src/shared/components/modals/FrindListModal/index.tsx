import * as React from 'react';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import { Box, Button, DialogActions, Divider, IconButton, List, ListItem, Tab, TableHead, Tabs } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { dialogStyles } from '../common/Dialog.styles';
import { FriendListModalProps, friendTabList } from './FriendListModal.types';
import { MiniProfile } from '../../MiniProfile';
import { MemberInfo } from '../../MiniProfile/MiniProfile.types';
import { CustomTab, CustomTabs, friendListModalStyles } from './friendListModal.styles';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const testDatas: any = {
  follower: [
    {
      memberId: 3,
      nickname: '김치찌개',
      bio: '재밌는 여행 좋아해요! 즐거운 여행 환영!',
    },
  ],
  following: [
    {
      memberId: 2,
      nickname: '김치찌개',
      bio: '재밌는 여행 좋아해요! 즐거운 여행 환영!',
      isFollow: true,
    },
  ],
  togetherFollow: [
    {
      memberId: 2,
      nickname: '김치찌개',
      bio: '재밌는 여행 좋아해요! 즐거운 여행 환영!',
      isFollow: true,
    },
    {
      memberId: 3,
      nickname: '김치찌개',
      bio: '재밌는 여행 좋아해요! 즐거운 여행 환영!',
    },
  ],
};

export const FriendListModal: React.FC<FriendListModalProps> = ({
  myMemberInfo,
  isOpen,
  isCloseBackgroundClick,
  tab,
  handleClose,
}) => {
  const [value, setValue] = React.useState(tab);
  const [listItems, setListItems] = React.useState<MemberInfo[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const follow = (memberId: number) => {
    console.log(memberId);
  };

  const unFollow = (memberId: number) => {
    console.log(memberId);
  };

  React.useEffect(() => {
    console.log(value);

    setListItems(testDatas[value]);
  }, [value]);

  return (
    <div>
      <Dialog
        open={isOpen}
        aria-labelledby="select-list-dialog-title"
        aria-describedby="select-list-dialog-description"
        onClose={isCloseBackgroundClick ? handleClose : () => {}}
        PaperProps={{
          sx: dialogStyles.layoutSmall,
        }}
      >
        <DialogTitle id="select-list-dialog-title" sx={dialogStyles.title}>
          <div style={dialogStyles.titleContainer}>
            <div>{myMemberInfo.nickname} 님의 친구 목록</div>
            <div>
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={dialogStyles.closeIconButton}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </div>
        </DialogTitle>

            <DialogContent dividers sx={{paddingTop: '0px', paddingBottom: '0px'}}>
              <CustomTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <CustomTab
                  disableRipple
                  label={friendTabList.togetherFollow.name}
                  value={friendTabList.togetherFollow.value}
                  {...a11yProps(0)}
                />
                <CustomTab
                disableRipple
                  label={friendTabList.follower.name}
                  value={friendTabList.follower.value}
                  {...a11yProps(1)}
                />
                <CustomTab
                disableRipple
                  label={friendTabList.following.name}
                  value={friendTabList.following.value}
                  {...a11yProps(2)}
                />
              </CustomTabs>
              </DialogContent>

            <DialogContent sx={{paddingTop: '0px', paddingBottom: '0px'}}>
            <List>
              {listItems?.map((item: MemberInfo) => {
                return (
                  <ListItem
                    key={`friend-list-item-${item.memberId}`}
                    secondaryAction={
                      item?.isFollow ? (
                        <Button
                          sx={friendListModalStyles.unFollowButton}
                          onClick={() => {
                            follow(item.memberId);
                          }}
                        >
                          팔로잉 중
                        </Button>
                      ) : (
                        <Button
                          sx={friendListModalStyles.followButton}
                          onClick={() => {
                            unFollow(item.memberId);
                          }}
                        >
                          팔로우하기
                        </Button>
                      )
                    }
                  >
                    <MiniProfile
                      member={{ memberId: item.memberId, nickname: item.nickname, bio: item?.bio }}
                      type='all'
                    />
                  </ListItem>
                );
              })}
            </List>
        </DialogContent>

        <Divider sx={{marginBottom: '20px'}}/>
        <DialogActions sx={dialogStyles.buttonContainer}></DialogActions>
      </Dialog>
    </div>
  );
};
