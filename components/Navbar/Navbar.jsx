import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import FlagSelector from '@components/Selector/FlagSelector'
import ShoppingCart from './ShoppingCart'

const Navbar = ({ className }) => (
	<div className={`navbar ${className}`}>
		<div className="ed-container full">
			<div className="ed-item s-50">
				<Link href="/">
					<a>
						<img src="https://d21jpge5pu54j7.cloudfront.net/logos/logo.svg" alt="denomades.com" />
					</a>
				</Link>
			</div>
			<div className="ed-item s-50 s-main-end">
				<FlagSelector />
				<Link href="/cart">
					<a>
						<ShoppingCart />
					</a>
				</Link>
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
