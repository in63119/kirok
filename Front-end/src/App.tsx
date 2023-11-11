import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Main from './pages/Main';
import Callback from './pages/Callback';
import SelectIntro from './pages/SelectIntro';
import Login from './pages/Login';
import Parents from './pages/Parents';
import CheckKidsinfo from './pages/CheckKidsinfo';
import Institution from './pages/Institution';
import { PageUrls } from '@constants/page-urls';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={PageUrls.INTRO} element={<Main />} />
				<Route path="/callback" element={<Callback />} />
				<Route path={PageUrls.SELECT_INTRO} element={<SelectIntro />} />
				<Route path={PageUrls.LOGIN} element={<Login />} />
				<Route path={PageUrls.PARENTS} element={<Parents />} />
				<Route path={PageUrls.CHECK_KIDS_INFO} element={<CheckKidsinfo />} />
				<Route path={PageUrls.INSTITUTION} element={<Institution />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
