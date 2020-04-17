import React from 'react';
import './style.scss';

const Icons = props => {
	if (props.removeLink) {
		return (
			<span
				className={`icon-${props.icon} ${props.className}`} 
				target={props.target === undefined ? 'blank' : props.target} 
				title={props.icon}
				onClick={props.handleClick}
			>
				{props.childrean}
			</span>
		)
	} else {
		return (
			<a
				href={props.url}
				className={`icon-${props.icon} ${props.className}`}
				target={props.target === undefined ? 'blank' : props.target}
				title={props.icon}
				onClick={props.handleClick}
			>
				{props.childrean}
			</a>
		)
	}
}

export default Icons;
