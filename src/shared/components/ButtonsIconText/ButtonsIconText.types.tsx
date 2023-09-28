
export type ButtonProps = {
  label: string; //버튼 안에 들어갈 텍스트
  icon: string; //버튼 안에 들어갈 아이콘
  styleType: string; //버튼 스타일
  onClick?: () => void; //버튼 클릭시 실행할 함수
};