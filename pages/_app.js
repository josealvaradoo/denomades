import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import { END } from 'redux-saga'
import store from '@redux/store'
import '../assets/scss/styles.scss'
import { actions as CurrencyActions } from '@ducks/currencies'
import { actions as ActivityActions } from '@ducks/activities'

const App = ({ Component, pageProps }) => (
	<div className="App">
		<Head>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Component {...pageProps} />
	</div>
)

/*
	* -------------------------------------------------------------------
	* Sync redux store into server side.
	*
	* You must to use `getInitialProps` method if you want to dispatch
	* redux actions and sync between server and client sides (on any
	* page)
	*
	* -------------------------------------------------------------------
*/
App.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = {
    ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
  }

  /*
	* -------------------------------------------------------------------
	* Request the main data (activities and currencies) on the first
	* load of the web
	*
	* -------------------------------------------------------------------
*/
  ctx.store.dispatch(ActivityActions.fetch())
  ctx.store.dispatch(CurrencyActions.fetch())

  if (ctx.store && ctx.req) {
    ctx.store.dispatch(END)
    await ctx.store.sagaTask.toPromise()
  }

  return {
    pageProps,
  }
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  pageProps: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
}

App.defaultProps = {
  Component: '',
  pageProps: {},
}

export default store.withRedux(App)
