import PropTypes from 'prop-types';

export const ConditionalRender = (props) => {
	const { children, renderIf } = props;

	return renderIf ? children : null;
};

ConditionalRender.propTypes = {
	children: PropTypes.any,
	renderIf: PropTypes.bool
};
