import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import Button from '@components/Button/Button'
import { actions as CartActions, selector as CartSelector } from '@ducks/cart'
import {
  ShoppingBag as ShoppingBagIcon,
  Check as CheckIcon,
} from 'react-feather'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

const Card = ({ activity, className }) => {
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

  return (
	<div className={`card ${className}`}>
		<CardHeader image={activity?.imageUrl || ''} />
		<CardBody>
			<h4 className="h4">{activity?.name}</h4>
			<p>{activity?.description}</p>
		</CardBody>
		<CardFooter>
			<div className="ed-container">
				<div className="ed-item ed-container s-main-justify s-cross-center">
					<p>
						{activity?.currency}
						{' '}
						{`$${activity?.price}`}
					</p>
					<Button onClick={isOnCart ? removeFromCart : addToCart}>
						{
							isOnCart
							  ? (
								<>
									<CheckIcon className="icon" />
									{' '}
									Agregado
								</>
							  ) : (
								<>
									<ShoppingBagIcon className="icon" />
									{' '}
									Agregar
								</>
							  )
						}
					</Button>
				</div>
			</div>
		</CardFooter>
	</div>
  )
}

Card.propTypes = {
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
