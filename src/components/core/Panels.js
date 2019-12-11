import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';

const StyledPanel = styled.div`
    background: lightpink;
    padding: 1rem 0;
    text-align: center;
`;

export class MainPanel extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <StyledPanel>
                {children}
            </StyledPanel>
        );
    }
}

MainPanel.propTypes = {
    children: PropTypes.node.isRequired
};
