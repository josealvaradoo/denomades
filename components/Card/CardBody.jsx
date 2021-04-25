import React from 'react'
import PropTypes from 'prop-types'

const CardBody = ({ children, className }) => (
	<div className={`card-body ${className}`}>
		<div className="ed-container">
			<div className="ed-item">
				{children}
			</div>
		</div>
	</div>
)

CardBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CardBody.defaultProps = {
  children: '',
  className: '',
}

export default CardBody
