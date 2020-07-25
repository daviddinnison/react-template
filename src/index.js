import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { ErrorBoundary } from 'components/core';
import './styles/reset.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
	<ErrorBoundary id="App index">
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ErrorBoundary>
	, document.getElementById('app')
);
