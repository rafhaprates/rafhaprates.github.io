import React from 'react';
import profileImage from './img/profile.jpg';

import './style.scss';

const About = () => {
	return (
		<div className="about">
			<article className="content">
				<div className="resume">
					<div className="intro">
						<figure className="profile-picture">
							<img src={profileImage} alt="Rafhael Prates"/>
						</figure>
						<h1 className="text">
							Me,
						</h1>
						<p className="text">
							23 years old, Araçatuba - SP
						</p>
					</div>

					<ul className="resume__capacities">
						<li><span role='img' aria-label='computer emoji'>💻</span> Full Stack Dev and Student</li>
						<li><span role='img' aria-label='video-game emoji'>🎮</span> Counter-Strike player</li>
						<li><span role='img' aria-label='dog emoji'>🐶</span> Dogs and Cat lover</li>
						<li><span role='img' aria-label='hearth emoji'>❤️</span>️ Linkin Park</li>
					</ul>
				</div>

				<div className="history">
				<strong><p><b>About Me</b> </p></strong>
				<br></br>
					<p>
						Probably my first line of code was “shutdown -t 30 -s -f” in a .bat file, to send to my friends on MSN and see them go offline.
					</p>

					<p>
						After that, I found a PHP script that sent form data via email, so I developed an orkut phishing page that I saved as favorite on the school library computers.
					</p>

					<p>
						I graduated from the Faculty of Analysis and Systems Development at FATEC in Araçatuba in São Paulo, I am passionate about the best technologies for back-end, front-end and mobile development, maybe it was these stacks that made me have a vision of what I wanted to be when I grew up .
					</p>

					<p>
						In my first internship, I started to work with maintenance of Vtex stores, development of Wordpress blogs and creation of landing pages.
					</p>

					<p>
					I currently work as an IT Manager at Momesso, taking care of e-commerce with React.js.
					</p>

				</div>
			</article>
		</div>
	)
}

export default About;