import Editor from 'src/shared/components/Editor/Editor';
import {
  Badge,
  Label,
  SectionTitle,
  SubmitButton,
  TitleInput,
  TitleLength,
} from './AccompanyForm.styles';
import { useEffect, useState, useCallback } from 'react';

const AccompanyContent = ({ setContentInfo }) => {
  const [titleLength, setTitleLength] = useState<number>(0);
  const [titleContent, setTitleContent] = useState<string>('');
  const [content, setContent] = useState<string>('테스트');
  const maxLength = 24;

  const onChangeTitle = (value: string) => {
    const titleLength = value.length;
    setTitleLength(titleLength);
    setContentInfo({
      title: value,
    });
  };

  const handleEditorChange = (newContent) => {
    console.log('New Editor Content:', newContent);
    setContent(newContent);
    setContentInfo({
      content: content,
    });
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
        <Editor content={content} setContent={handleEditorChange} />
      </div>
    </div>
  );
};
export default AccompanyContent;
