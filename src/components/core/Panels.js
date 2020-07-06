import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPanel = styled.div` 
    background: lightpink;
    padding: 1rem 0;
    text-align: center;
`;

export const MainPanel = (props) => {
	return (
		<StyledPanel>
			{props.children}
		</StyledPanel>
	);
};

MainPanel.propTypes = {
	children: PropTypes.node
};
