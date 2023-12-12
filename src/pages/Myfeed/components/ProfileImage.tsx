interface ProfileImagerops {
  size: number;
  src: string;
}

const boxStyle = {
  borderRadius: '70%',
  overflow: 'hidden',
};

const imgStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover' as 'cover',
};

const ProfileImage = ({ size, src }: ProfileImagerops) => {
  return (
    <div>
      <div style={{ ...boxStyle, width: size }}>
        <img
          style={imgStyle}
          src={src ? src : 'http://localhost:5173/images/common/img_user_profile_null.png'}
        />
      </div>
    </div>
  );
};

export default ProfileImage;
