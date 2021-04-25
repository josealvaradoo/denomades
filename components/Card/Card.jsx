import React from 'react'
import PropTypes from 'prop-types'

const Card = ({ children, className }) => (
	<div className={`card ${className}`}>
		{children}
	</div>
)

Card.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

Card.defaultProps = {
  children: '',
  className: '',
}

export default Card
