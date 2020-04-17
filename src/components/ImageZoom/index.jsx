import React from 'react';

import Icons from '../../components/Icons';

import './style.scss';

const ImageZoom = props => {
	return(
		<div className="image-zoom">
			<Icons
				icon='cross'
				handleClick={props.close}
				className='close-image'
			/>
			<img src={props.image} alt=''/>
		</div>
	)
}

export default ImageZoom;