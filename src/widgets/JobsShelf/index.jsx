import React from 'react';

import './style.scss';

const JobsShelf= props => {

	return (
		<div className="shelf">
			<h2 className="shelf__title">
				{ props.title }
			</h2>

			{ props.children }
		</div>
	)
}

export default JobsShelf;