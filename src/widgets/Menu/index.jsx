import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

import Icon from '../../components/Icons';

const Menu = props => {

	return (
		<nav className={`menu ${props.menuActive ? 'active' : ''}`}>
			<ul>
				{props.children}
			</ul>

			<Link to='/'>
				<Icon
					removeLink={true}
					icon="cross"
					className="icon-close-menu"
					handleClick={props.closeClick}
				/>
			</Link>
		</nav>
	)
}

export default Menu;