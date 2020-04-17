import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Icon from '../../components/Icons';

import About from '../../pages/About';
import Jobs from '../../pages/Jobs';
import NotFound from '../../pages/NotFound';

import './style.scss';

const PageContent = props => {
	return (
		<section className={`page-content ${ props.active ? 'active' : ''}`}>
			<Switch>
				<Route path='/about' component={About}/>
				<Route path='/jobs' component={Jobs}/>
				{ props.menuOpened && <Route exact component={NotFound}/> }
			</Switch>

			{
				window.innerWidth <= 920 &&
				<Icon 
					icon='arrow-left2'
					handleClick={props.back}
					className='close-button'
				/>
			}
		</section>
	)
}

export default PageContent;