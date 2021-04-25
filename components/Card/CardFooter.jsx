import React from 'react'
import PropTypes from 'prop-types'

const CardFooter = ({ children, className }) => (
	<div className={`card-footer ${className}`}>
		<div className="ed-container">
			<div className="ed-item">
				{children}
			</div>
		</div>
	</div>
)

CardFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

CardFooter.defaultProps = {
  children: '',
  className: '',
}

export default CardFooter
