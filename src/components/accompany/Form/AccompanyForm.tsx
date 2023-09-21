import Page from 'src/pages/layout';
import AccompanyBasicInfo from './AccompanyBasicInfo';
import AccompanyContent from './AccompanyContent';

const AccompanyForm = () => {
  return (
    <Page>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <AccompanyBasicInfo />
        <AccompanyContent />
      </div>
    </Page>
  );
};

export default AccompanyForm;
