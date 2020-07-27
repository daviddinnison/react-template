import React from 'react';
import { MainPanel } from 'components/core';
import { Link } from 'react-router-dom';

export const Home = () => {
	return (
		<MainPanel>
			<h1>THIS IS HOME</h1>
			<Link to="/not-home">I dont wanna go home</Link>
		</MainPanel>
	);
};
