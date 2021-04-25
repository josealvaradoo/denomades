import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'

const MainLayout = ({ title, description, children }) => (
	<>
		<Head>
			<title>
				{process.env.APP_TITLE}
				{' '}
				{title?.length > 0 ? `| ${title}` : ''}
			</title>
			<meta name="description" content={description} />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<section className="layout">
			<Navbar />
			<main className="main">
				{children}
			</main>
			<Footer />
		</section>
	</>
)

MainLayout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
}

MainLayout.defaultProps = {
  title: '',
  description: '',
  children: '',
}

export default MainLayout
