import React, { useState, useEffect } from 'react'
import './app.scss'

import Header from './widgets/Header'
import Presentation from './widgets/Presentation'
import ContactShelf from './widgets/ContactShelf'
import PageContent from './widgets/PageContent'

const isMobileDevide = () => {
	return window.innerWidth >= 920 ? true : false
}

const App = () => {
	const [activeMenu, setActiveMenu] = useState(isMobileDevide())
	const [activePage, setActivePage] = useState(false)

	useEffect(() => {
		if (window.location.pathname !== '/') {
			setActiveMenu(true)
			setActivePage(true)
		}
	}, [])

	return(
		<div className="app">
			<section className="content">
				<Presentation
					name="Rafhael Prates"
				/>

				<ContactShelf />
			</section>

			<Header
				showLogo={ activePage }
				activeMenu={ activeMenu }
				activePage={ (activePage = true) => { setActivePage(activePage)} }
				toggleMenu={ () => setActiveMenu(!activeMenu) }
			/>
			{
				activePage &&
				<PageContent
					active={ activePage }
					back={() => {setActivePage(false)}}
					menuOpened={ activeMenu }
				/>
			}
		</div>
	)
}

export default App