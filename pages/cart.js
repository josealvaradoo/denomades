import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { actions as CurrencyActions, selector as CurrencySelector } from '@ducks/currencies'
import { actions as ActivityActions } from '@ducks/activities'
import { actions as CartActions, selector as CartSelector } from '@ducks/cart'
import MainLayout from '@components/Layouts/MainLayout'
import Card from '@components/Card'
import Checkout from '@components/Checkout/Checkout'
import CartHelper from '@helpers/cart'

const Cart = () => {
  const dispatch = useDispatch()
  const { cart } = useSelector(CartSelector)
  const { currencies } = useSelector(CurrencySelector)

  const clearCart = () => {
    dispatch(CartActions.clear())
  }

  return (
	<MainLayout>
		<div className="ed-container">
			<div className="ed-item ed-container s-70">
				<div className="ed-item s-mb-2">
					<h3>Articulos agregados</h3>
				</div>
				{
					cart?.items?.map((item) => (
						<div className="ed-iten" key={item?.id}>
							<Card type="shopping" landscape activity={item} />
						</div>
					))
				}
			</div>
			<div className="ed-item s-5" />
			<div className="ed-item ed-container s-25 s-cross-start">
				<div className="ed-item s-mb-2">
					<h3>Pagar</h3>
				</div>
				<div className="ed-item">
					<Checkout onRemove={clearCart}>
						<p className="s-center s-mb-1">Total a pagar</p>
						<h2 className="s-center s-mb-1 s-pt-0">
							{CartHelper?.getTotal(cart?.items, currencies)}
						</h2>
					</Checkout>
				</div>
			</div>
		</div>
	</MainLayout>
  )
}

Cart.getInitialProps = (ctx) => {
  ctx.store.dispatch(ActivityActions.fetch())
  ctx.store.dispatch(CurrencyActions.fetch())
}

export default Cart
