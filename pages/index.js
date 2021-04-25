import React from 'react'
import { useSelector } from 'react-redux'
import { actions as CurrencyActions } from '@ducks/currencies'
import { actions as ActivityActions, selector as ActivitySelector } from '@ducks/activities'
import MainLayout from '@components/Layouts/MainLayout'
import Card from '@components/Card/Card'

const Home = () => {
  const { activities } = useSelector(ActivitySelector)

  return (
	<MainLayout>
		<div className="ed-grid s-grid-1 m-grid-2 l-grid-4">
			{
				activities?.map((activity) => (
					<Card key={activity?.id} activity={activity} />
				))
			}
		</div>
	</MainLayout>
  )
}

Home.getInitialProps = (ctx) => {
  ctx.store.dispatch(ActivityActions.fetch())
  ctx.store.dispatch(CurrencyActions.fetch())
}

export default Home
