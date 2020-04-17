import React, { useState } from 'react';
import './style.scss';

import thumbZanardo from './imgs/Zanardo.png';
import thumbConsul from './imgs/consul-bf.png';
import thumbDcarvalho from './imgs/dcarvalho.png';
import thumbMomesso from './imgs/momesso.png';
import thumbFedora from './imgs/fedora.png';

import thumbContteudo from './imgs/contteudo.png';
import thumbConsulFacilita from './imgs/consul-facilita.png';
import thumbConnection from './imgs/connection.png';
import thumbRafhapratesDev from './imgs/rafha-dev.png';

import thumbbethehero from './imgs/bethehero.png';
import thumbIllumind from './imgs/illumind.png';
import thumbDiscovery from './imgs/discovery.png';

import JobsShelf from '../../widgets/JobsShelf';
import JobThumbnail from '../../components/JobThumbnail';
// import ImageZoom from '../../components/ImageZoom';

const jobsList = {
	jussi: [
		{
			img: thumbZanardo,
			name: 'Zanardo Valvulas',
			stack: 'React.js, SCSS',
			plataform: 'Presta SJC',
			link: '//www.zanardo.com.br/'
		}, {
			img: thumbConsul,
			name: 'Consul Black Friday Landing',
			stack: 'HTML, SCSS, JS',
			plataform: 'Vtex',
			link: '//loja.consul.com.br/landing/blackfriday'
		}, {
			img: thumbDcarvalho,
			name: 'John Deere',
			stack: 'HTML, SCSS, JS',
			plataform: 'Vtex',
			link: '//dcarvalho.com.br'
		},  {
			img: thumbMomesso,
			name: 'Momesso',
			stack:'HTML, SCSS, JS, PHP',
			plataform: 'Wordpress',
			link: '//momesso.ind.br'
		}
	],
	freelance: [
		 {
			img: thumbConsulFacilita,
			name: 'Consul Simples assim infographics',
			stack: 'HTML, SCSS',
			plataform: 'Wordpress',
			link: '//www.consul.com.br/facilita-consul/simples-assim/como-limpar-ar-condicionado-split/'
		}, {
			img: thumbContteudo,
			name: 'Contteudo default layout',
			stack: 'HTML, SCSS, JS',
			plataform: null
		}, {
			img: thumbConnection,
			name: 'Connection-ai',
			stack:'HTML, SCSS, JS, PHP',
			plataform: 'Wordpress',
			link: '//connection-ai.com'
		}
	],
	individual: [
		{
			img: thumbRafhapratesDev,
			name: 'rafhaprates.dev',
			stack: 'React.js, SCSS',
			plataform: null,
			link: '//rafhaprates.dev'
		}, {
			img: thumbbethehero,
			name: 'Be The Hero',
			stack: 'HTML, CSS, JS, ReactJS, NodeJs, React Native',
			plataform: null,
			link: '//be-the-hero-eta.now.sh/'
		}, {
			img: thumbIllumind,
			name: 'Illumind',
			stack: 'HTML, SCSS, JS, PHP, Arduino',
			plataform: 'Arduino'
		}, {
			img: thumbDiscovery,
			name: 'Discovery',
			stack:'HTML, SCSS, JS, PHP',
			plataform: null
		}
	],
	community: [
		{
			
				img: thumbFedora,
				name: 'Contribuição ao Projeto Fedora ',
				stack: 'Shell, Script',
				plataform: null,
				link: '//getfedora.org/pt_BR/'
			
		}
	]
}

const Jobs= () => {
	const [, setZoomImage] = useState('');


	const createThumbnail = entity => {
		return jobsList[entity].map( item => {
			return (
				<JobThumbnail
					key={item.name}
					image={item.img}
					name={item.name}
					languages={!item.plataform ? `${item.stack}` : `${item.stack} , ${item.plataform}`}
					handleClick={() => {!item.link && setZoomImage(item.img)}}
					link={item.link}
				/>
			)
		});
	}

	return (
		<>
			<div className="jobs">
				<JobsShelf
					title='Companies'
				>
					{createThumbnail('jussi')}
				</JobsShelf>

				<JobsShelf
					title='Freelance'
				>
					{createThumbnail('freelance')}
				</JobsShelf>

				<JobsShelf
					title='Personal'
				>
					{createThumbnail('individual')}
				</JobsShelf>
				<JobsShelf
					title='Community (OpenSource) '
				>
					{createThumbnail('community')}
				</JobsShelf>

				<p className="disclaimer">
					*Some of the projects were developed as a team * Alguns dos projetos foram desenvolvidos em equipe
				</p>
			</div>
			{/* {
				state.zoomImage !== '' && window.innerWidth > 920 &&
				<ImageZoom
					image={state.zoomImage}
					close={() => {setState({zoomImage: ''})}}
				/>
			} */}
		</>
	)
}

export default Jobs;