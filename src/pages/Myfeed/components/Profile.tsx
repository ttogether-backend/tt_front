interface ProfileProps {
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

const Profile = ({ size, src }: ProfileProps) => {
  return (
    <div style={{ ...boxStyle, width: size, height: size }}>
      <img style={imgStyle} src={src} />
    </div>
  );
};

export default Profile;
