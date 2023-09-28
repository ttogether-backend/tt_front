import { Avatar, Stack, Typography } from '@mui/material';
import { MiniProfileProps, miniProfileTypeCode } from './MiniProfile.types';
export const MiniProfile: React.FC<MiniProfileProps> = ({
  member,
  type,
}) => {
  const defaultImageUrl = '';

  return (
    <div
      key={`miniprofile-${member.nickname}-${member.memberId}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 20,
      }}
    >
      <Avatar src={member.imageUrl ? member.imageUrl : defaultImageUrl} onClick={()=>{ console.log(member.memberId);}} />

      {type == miniProfileTypeCode.all ? (
        <Stack key={`miniprofile-info-${member.nickname}-${member.memberId}`}>
          <Typography
            sx={{
              color: 'var(--grey-grey-900, #30332E)',
              fontFamily: 'Pretendard',
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '20px',
            }}
          >
            {member.nickname}
          </Typography>
          <Typography
            sx={{
              color: 'var(--grey-grey-600, #696E64)',
              fontFamily: 'Pretendard',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: '400',
              lineHeight: '16px',
            }}
          >
            {member.bio}
          </Typography>
        </Stack>
      ) : (
        <Typography
        key={`miniprofile-info-${member.nickname}-${member.memberId}`}
          sx={{
            color: 'var(--grey-grey-900, #30332E)',
            fontFamily: 'Pretendard',
            fontSize: '22px',
            fontStyle: 'normal',
            fontWeight: '600',
            lineHeight: '28px',
          }}
        >
          {member.nickname}
        </Typography>
      )}
    </div>
  );
};
