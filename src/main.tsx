import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Main from './components/Main/Main.tsx';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Route path="/" element={<Main />} />
		</BrowserRouter>
	</React.StrictMode>
);
