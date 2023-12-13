import { FlexContainer } from 'src/pages/Myfeed/layout/FlexContainer';

export const isPageLoding = (pageData: any) => {
  if (pageData) {
    return false;
  }

  return true;
};

export const LoadingPage = () => {
  return (
    <FlexContainer justifyContent="center" alignItems="center" width="1048px" height="1000px" />
  );
};
