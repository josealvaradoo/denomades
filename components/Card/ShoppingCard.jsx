import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Button from '@components/Button/Button'
import {
  Trash as TrashIcon,
} from 'react-feather'
import CurrencyHelper from '@helpers/currencies'
import { selector as CurrencySelector } from '@ducks/currencies'
import Card from './Card'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

const ShoppingCard = ({
  activity, landscape, className, onRemove,
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
						<Button color="danger" onClick={onRemove}>
							<TrashIcon className="icon" />
							{' '}
							Eliminar
						</Button>
					</div>
				</div>
			</CardFooter>
		</div>
	</Card>
  )
}

ShoppingCard.propTypes = {
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

ShoppingCard.defaultProps = {
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

export default ShoppingCard
