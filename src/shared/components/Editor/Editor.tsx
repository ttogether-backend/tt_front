import { useRef } from 'react';
import 'react-quill/dist/quill.snow.css';
import { EditorPropsType } from './Editor.types';
import { SReactQuill } from './Editor.styles';

const Editor: React.FC<EditorPropsType> = (props: EditorPropsType) => {
  const { content, setContent } = props;
  const quillRef = useRef(null);

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, false] }],
        [{ size: ['small', false, 'large', 'huge'] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ color: [] }, { background: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        [{ align: [] }],
        ['link', 'image'],
        ['clean'],
      ],
    },
  };

  const formats = [
    'header',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'color',
    'background',
    'align',
    'list',
    'indent',
    'link',
    'image',
    'clean',
  ];

  //TODO:이미지 처리

  return (
    <SReactQuill
      ref={quillRef}
      placeholder={'내용을 입력해주세요.'}
      value={content || ''}
      modules={modules}
      formats={formats}
      onChange={(value) => setContent(value)}
    />
  );
};

export default Editor;
