import React from 'react';
import { MainPanel } from 'components/core';
import { Link } from 'react-router-dom';

export const Home = () => {
	const test = {
		first: {
			second: 'This is home'
		}
	};
	return (
		<MainPanel>
			<h1>{test?.first?.second}</h1>
			<Link to="/not-home">I dont wanna go home</Link>
		</MainPanel>
	);
};
