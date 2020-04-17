import React from 'react'

import './style.scss'

const NotFound = () => {
	return (
		<div className="not-found">
			<div className="content">
				<h2 className="not-found__highlight">
					404
				</h2>

				<p className="not-found__text">
					Page not found!
				</p>
			</div>
		</div>
	)
}

export default NotFound