import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';


import { ErrorBoundary } from 'components/core';
import { Home } from 'components/logic/Home';
import { NotHome } from 'components/logic/NotHome';

const AppWrapper = styled.div`
    background: lightblue;
    min-height: 100%;
`;

class App extends React.Component {
	multiply = (num, multipliedBy) => {
		return <span>{`The number ${num} times ${multipliedBy} is ${num * multipliedBy}`}</span>;
	}

	render() {
		return (
			<AppWrapper>
				<ErrorBoundary id="App">
					<Switch>
						<Route path="/" render={Home} exact />
						<Route path="/not-home" render={NotHome} />
					</Switch>
				</ErrorBoundary>
			</AppWrapper>
		);
	}
}

export default App;
