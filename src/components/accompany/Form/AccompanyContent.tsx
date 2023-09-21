import Editor from 'src/shared/components/Editor/Editor';
import {
  Badge,
  Label,
  SectionTitle,
  SubmitButton,
  TitleInput,
  TitleLength,
} from './AccompanyForm.styles';
import { useState } from 'react';

const AccompanyContent = () => {
  const [titleLength, setTitleLength] = useState<number>(0);

  const maxLength = 24;

  const onChangeTitle = (value: string) => {
    const titleLength = value.length;
    setTitleLength(titleLength);
  };

  return (
    <div
      style={{
        width: '816px',
        margin: '50px 0',
        position: 'relative',
      }}
    >
      <Badge>2</Badge>
      <SectionTitle>동행 구인글</SectionTitle>

      <Label>제목</Label>
      <div
        style={{
          position: 'relative',
        }}
      >
        <TitleInput
          placeholder="제목을 입력하세요."
          maxLength={maxLength}
          onChange={(e) => {
            if (titleLength === maxLength) {
              return;
            }
            onChangeTitle(e.target.value);
          }}
        />
        <TitleLength>{titleLength}/24</TitleLength>
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <Editor content={'테스트'} setContent={(value) => console.log(value)} />
        <SubmitButton>등록하기</SubmitButton>
      </div>
    </div>
  );
};
export default AccompanyContent;
