import React from 'react';
import GlobalStyle from 'GlobalStyle';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PageUrls } from './constants/page-urls';

// Components
import Main from './pages/Main';
import Callback from './pages/Callback';
import Login from './pages/Login';
import Institution from './pages/institution/Institution';
import ParentWelcomePage from './pages/parent/welcome';
import ParentKidRegisterPage from 'pages/parent/kid-register';
import InstitutionMain from 'pages/institution/InstitutionMain';
import RegistrationRequest from 'pages/institution/RegistrationRequest';

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path={PageUrls.INTRO} element={<Main />} />
					<Route path="/callback" element={<Callback />} />
					<Route path={PageUrls.PARENT.KAKAO_LOGIN} element={<Login />} />
					<Route path={PageUrls.INSTITUTION.LOGIN} element={<Institution />} />
					<Route path={PageUrls.PARENT.WELCOME} element={<ParentWelcomePage />} />
					<Route path={PageUrls.PARENT.KID_REGISTER} element={<ParentKidRegisterPage />} />
					<Route path={PageUrls.INSTITUTION.MAIN} element={<InstitutionMain />} />
					<Route path={PageUrls.INSTITUTION.REGISTRATION_REQUEST} element={<RegistrationRequest />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
