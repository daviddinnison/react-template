import React from 'react';
import { Link } from 'react-router-dom';

import { MainPanel } from 'components/core';


export const NotHome = () => {
	return (
		<MainPanel>
			<h1>THIS IS NOT HOME</h1>
			<Link to="/">Go Home</Link>
		</MainPanel>
	);
};
