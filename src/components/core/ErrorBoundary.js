import React from 'react';
import PropTypes from 'prop-types';

export class ErrorBoundary extends React.Component {
	state = {
		error: false,
		errorMessage: false
	}

	static getDerivedStateFromError(error) {
		return { error: error.toString() };
	}

	componentDidCatch(error, errorInfo) {
		this.setState({ errorMessage: errorInfo.componentStack });
	}

	render() {
		const { error, errorMessage } = this.state;
		const { children, id } = this.props;

		if (error) {
			return (
				<div>
					<h1>Error id: {id}</h1>
					<h2>{error}</h2>
			    <h3>{errorMessage}</h3>
				</div>
			);
		}

		return children;
	}
}

ErrorBoundary.propTypes = {
	id: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired
};
