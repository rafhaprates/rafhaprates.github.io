import React from 'react';

import './style.scss';

const JobThumbnail = props => {
	return (
		<div className={`thumbnail ${props.link ? '' : 'disabled'}`} onClick={props.handleClick}>
			<a href={ props.link && props.link + '?utm_campaign=brunodev' } target='_blank' rel="noopener noreferrer">
				<figure>
					<img src={props.image} alt=""/>
				</figure>
			</a>
			<p className='thumbnail__title'><strong>Project: </strong>{props.name}</p>
			<div className="thumbnail__technologies">
				<p className="languages"><strong>technologies: </strong>{props.languages}</p>
			</div>
		</div>
	)
}

export default JobThumbnail;