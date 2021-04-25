import React from 'react'
import PropTypes from 'prop-types'

const CardHeader = ({ image, className }) => (
	<div className={`card-header ${className}`}>
		<img src={image} alt="" />
	</div>
)

CardHeader.propTypes = {
  image: PropTypes.string,
  className: PropTypes.string,
}

CardHeader.defaultProps = {
  image: '',
  className: '',
}

export default CardHeader
