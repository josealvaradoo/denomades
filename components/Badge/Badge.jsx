import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ children, className }) => (
	<div className={`badge ${className}`}>
		{children}
	</div>
)

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Badge.defaultProps = {
  children: '',
  className: '',
}

export default Badge
