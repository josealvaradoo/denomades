import React from 'react'
import PropTypes from 'prop-types'
import ShoppingCart from './ShoppingCart'

const Navbar = ({ className }) => (
	<div className={`navbar ${className}`}>
		<div className="ed-container full">
			<div className="ed-item s-50">
				<img src="https://d21jpge5pu54j7.cloudfront.net/logos/logo.svg" alt="denomades.com" />
			</div>
			<div className="ed-item s-50 s-main-end">
				<ShoppingCart />
			</div>
		</div>
	</div>
)

Navbar.propTypes = {
  className: PropTypes.string,
}

Navbar.defaultProps = {
  className: '',
}

export default Navbar
