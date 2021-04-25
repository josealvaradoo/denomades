import React from 'react'
import PropTypes from 'prop-types'
import Card from '@components/Card/Card'
import Button from '@components/Button/Button'
import {
  Trash as TrashIcon,
  CreditCard as CreditCardIcon,
} from 'react-feather'

const Checkout = ({ children, className, onRemove }) => (
	<Card className={`${className} s-py-2`}>
		<div className="ed-container">
			<div className="ed-item s-mb-2">
				{children}
			</div>
			<div className="ed-item">
				<Button full className="s-mb-2">
					<CreditCardIcon className="icon" />
					Realizar pago
				</Button>
				<a onClick={onRemove} role="button" className="cursor-pointer text-undecoration">
					<p className="s-cross-center s-main-center s-mb-0 text-muted small">
						<TrashIcon className="icon s-mr-1" />
						{' '}
						Limpiar carrito
					</p>
				</a>
			</div>
		</div>
	</Card>
)

Checkout.propTypes = {
  onRemove: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string,
}

Checkout.defaultProps = {
  children: '',
  className: '',
  onRemove: () => null,
}

export default Checkout
