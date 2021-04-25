import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  onClick, className, children, ...rest
}) => (
	<button onClick={onClick} className={`button ${className}`} {...rest}>
		{children}
	</button>
)

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  rest: PropTypes.shape({}),
}

Button.defaultProps = {
  className: '',
  children: '',
  onClick: () => null,
  rest: null,
}

export default Button
