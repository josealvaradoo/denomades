import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { actions as CartActions, selector as CartSelector } from '@ducks/cart'
import ShoppingCard from './ShoppingCard'
import SearchCard from './SearchCard'
import DefaultCard from './DefaultCard'

const Card = ({
  type, activity, landscape, className,
}) => {
  const dispatch = useDispatch()
  const { cart } = useSelector(CartSelector)
  const [isOnCart, setIsOnCart] = useState(false)

  const addToCart = () => {
    dispatch(CartActions.add(activity))
    setIsOnCart(true)
  }

  const removeFromCart = () => {
    dispatch(CartActions.remove(activity))
    setIsOnCart(false)
  }

  useEffect(() => {
    if (cart?.items?.some((item) => item?.id === activity?.id)) {
      setIsOnCart(true)
    }
  }, [])

  switch (type) {
    case 'shopping':
      return (
	<ShoppingCard
		landscape={landscape}
		activity={activity}
		className={className}
		onRemove={removeFromCart}
	/>
      )
    case 'search':
      return (
	<SearchCard
		activity={activity}
		className={className}
	/>
      )
    default:
      return (
	<DefaultCard
		landscape={landscape}
		activity={activity}
		className={className}
		isOnCart={isOnCart}
		onAdd={addToCart}
		onRemove={removeFromCart}
	/>
      )
  }
}

Card.propTypes = {
  type: PropTypes.oneOf(['default', 'shopping, search']),
  landscape: PropTypes.bool,
  className: PropTypes.string,
  activity: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    currency: PropTypes.string,
    price: PropTypes.number,
  }),
}

Card.defaultProps = {
  type: 'default',
  landscape: false,
  className: '',
  activity: {
    id: 0,
    name: '',
    description: '',
    imageUrl: '',
    currency: 'CLP',
    price: 0,
  },
}

export default Card
