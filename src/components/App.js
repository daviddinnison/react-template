import React from 'react';
import styled from 'styled-components';

import { ErrorBoundary, MainPanel } from 'components/core';

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
				<ErrorBoundary>
					<MainPanel>
						{this.multiply(10, 2)}
					</MainPanel>
				</ErrorBoundary>
			</AppWrapper>
		);
	}
}

export default App;
