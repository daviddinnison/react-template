import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { ErrorBoundary } from 'components/core';
import './styles/reset.css';

ReactDOM.render(<ErrorBoundary id="App index"><App /></ErrorBoundary>, document.getElementById('app'));
