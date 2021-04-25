import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  onClick, className, color, full, children, ...rest
}) => (
	<button
		onClick={onClick}
		className={`button button-${color} ${full ? 'full' : ''} ${className}`}
		{...rest}
	>
		{children}
	</button>
)

Button.propTypes = {
  full: PropTypes.bool,
  color: PropTypes.oneOf(['primary', 'danger']),
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  rest: PropTypes.shape({}),
}

Button.defaultProps = {
  full: false,
  color: 'primary',
  className: '',
  children: '',
  onClick: () => null,
  rest: null,
}

export default Button
