import { FlexContainer } from "../layout/FlexContainer";

interface TitleProps {
  maxWidth: number;
  ellipsisContent: string;
  subContent?: string;
  onClick?: () => void;
}

const containerStyle = {
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: 400,
  lineHeight: '24px',
};

const ellipsisStyle = {
  flex: 1,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
};


const EllipsisTitle = ({
  maxWidth,
  ellipsisContent,
  subContent,
  onClick,
}: TitleProps) => {

  return (
    <FlexContainer style={{ ...containerStyle, maxWidth, cursor: 'pointer'}} onClick={onClick}>
      <div style={{ ...ellipsisStyle }}>{ellipsisContent}</div>
      <div>{subContent}</div>
    </FlexContainer>
  );
};

export default EllipsisTitle;