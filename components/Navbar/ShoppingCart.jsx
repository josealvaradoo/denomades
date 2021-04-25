import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { ShoppingCart as ShoppingCartIcon } from 'react-feather'
import Badge from '@components/Badge/Badge'
import { selector as CartSelector } from '@ducks/cart'

const ShoppingCart = ({ className }) => {
  const { cart } = useSelector(CartSelector)

  return (
	<div className={`navbar-shopping_cart ${className}`}>
		{
			cart?.items?.length > 0 && (
				<Badge>
					{cart?.items?.length}
				</Badge>
			)
		}
		<ShoppingCartIcon className="cursor-pointer" />
	</div>
  )
}

ShoppingCart.propTypes = {
  className: PropTypes.string,
}

ShoppingCart.defaultProps = {
  className: '',
}

export default ShoppingCart
