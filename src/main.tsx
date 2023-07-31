import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Main from './components/Main/Main.tsx';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Main />
		</BrowserRouter>
	</React.StrictMode>
);
