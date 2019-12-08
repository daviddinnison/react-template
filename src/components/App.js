import React from 'react';
import styled from 'styled-components';

import { MainPanel } from './core/Panels';

// TODO background min height and possible css reset
const Wrapper = styled.div`
    background: red;
    padding: 0;
    margin: 0;
`;

class App extends React.Component {
    multiply = (num, multipliedBy) => {
        return <span>{`The number ${num} times ${multipliedBy} is ${num * multipliedBy}`}</span>;
    }

    render() {
        return (
            <Wrapper>
                <MainPanel>
                    {this.multiply(10, 2)}
                </MainPanel>
            </Wrapper>
        );
    }
}

export default App;