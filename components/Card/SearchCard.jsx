import React from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import CurrencyHelper from '@helpers/currencies'
import { selector as CurrencySelector } from '@ducks/currencies'
import Card from './Card'
import CardHeader from './CardHeader'
import CardBody from './CardBody'
import CardFooter from './CardFooter'

const Search = ({ activity, className }) => {
  const { currencies } = useSelector(CurrencySelector)

  return (
	<Card className={`landscape ${className} no-shadow`}>
		<CardHeader image={activity?.imageUrl || ''} />
		<div className="card-content">
			<CardBody>
				<h4 className="h4">{activity?.name}</h4>
				<p>{activity?.description}</p>
			</CardBody>
			<CardFooter>
				<div className="ed-container">
					<div className="ed-item ed-container s-cross-center">
						<p>
							{ CurrencyHelper.setLocalCurrency(activity, currencies) }
						</p>
					</div>
				</div>
			</CardFooter>
		</div>
	</Card>
  )
}

Search.propTypes = {
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

Search.defaultProps = {
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

export default Search
