import React from 'react';
import './style.scss';
import Icons from '../../components/Icons';

const ContactShelf = () => {
	const constructShelf = () => {
		const iconsObj = [
			{
				icon: 'twitter',
				url: '//twitter.com/rafhaelprates'
			},{
				icon: 'github',
				url: '//github.com/rafhaprates'
			}, {
				icon: 'linkedin',
				url: '//www.linkedin.com/in/rafhaelprates/'
			}, {
				icon: 'instagram',
				url: '//www.instagram.com/rafhaprates.dev'
			}
		]

		return (
			iconsObj.map((icn, idx) => {
				return(
					<Icons icon={icn.icon} key={icn+idx} url={icn.url}/>
				)
			})
		);
	}

	return (
		<div className="ContactShelf">
			{ constructShelf() }
		</div>
	)
}

export default ContactShelf;
