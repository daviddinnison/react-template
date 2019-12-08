import React from 'react';
import styled from 'styled-components';

import { MainPanel } from './core/Panels';

const Wrapper = styled.div`
    background: red;
    height: 100vh;
    padding: 0;
    margin: 0;
    width: 100vw;
`;

class App extends React.Component {
    render() {
        return (
            <Wrapper>
                <MainPanel>
                    This is the main panel
                </MainPanel>
            </Wrapper>
        );
    }
}

export default App;