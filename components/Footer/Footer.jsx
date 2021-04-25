import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ className }) => (
	<footer className={`footer ${className}`}>
		<div className="ed-container full">
			<div className="ed-item s-main-center">
				denomades.com
			</div>
		</div>
	</footer>
)

Footer.propTypes = {
  className: PropTypes.string,
}

Footer.defaultProps = {
  className: '',
}

export default Footer
