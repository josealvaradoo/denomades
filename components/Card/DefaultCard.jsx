import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Button from '@components/Button/Button'
import {
  ShoppingBag as ShoppingBagIcon,
  Check as CheckIcon,
} from 'react-feather'
import CurrencyHelper from '@helpers/currencies'
import { selector as CurrencySelector } from '@ducks/currencies'
import Card from './Card'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

const DefaultCard = ({
  activity, landscape, className, isOnCart, onAdd, onRemove,
}) => {
  const { currencies } = useSelector(CurrencySelector)
  return (
	<Card className={`${landscape ? 'landscape' : ''} ${className}`}>
		<CardHeader image={activity?.imageUrl || ''} />
		<div className="card-content">
			<CardBody>
				<h4 className="h4">{activity?.name}</h4>
				<p>{activity?.description}</p>
			</CardBody>
			<CardFooter>
				<div className="ed-container">
					<div className="ed-item ed-container s-main-justify s-cross-center">
						<p>
							{ CurrencyHelper.setLocalCurrency(activity, currencies) }
						</p>
						<Button onClick={isOnCart ? onRemove : onAdd}>
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
	</Card>
  )
}

DefaultCard.propTypes = {
  isOnCart: PropTypes.bool,
  onAdd: PropTypes.func,
  onRemove: PropTypes.func,
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

DefaultCard.defaultProps = {
  isOnCart: false,
  onAdd: () => null,
  onRemove: () => null,
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

export default DefaultCard
