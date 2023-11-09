import LoginItem from "./LoginItem";
import Page from 'src/pages/layout';
import { LoginWrap } from './LoginPage.style';

const LoginPage = () => {
	return (
	  <Page>
		  <div
		  style={{
			display: 'flex',
			justifyContent: 'center',
		  }}
		>
		<LoginWrap>
			<LoginItem />
		</LoginWrap>
		</div>
	  </Page>
	);
  };
  
  export default LoginPage;