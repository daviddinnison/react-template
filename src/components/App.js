import React from 'react';
import styled from 'styled-components';

import { MainPanel } from 'components/core/Panels';

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
                <MainPanel>
                    {this.multiply(10, 2)}
                </MainPanel>
            </AppWrapper>
        );
    }
}

export default App;
