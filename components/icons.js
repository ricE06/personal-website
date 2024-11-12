// idk what i'm doing

import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';


const Icons = () => (
	<div className = {utilStyles.center}>
	<div className = {utilStyles.icon}>
	<Link href={'mailto:ezhan@mit.edu'}>
		<Image
		priority
		src={'/images/email-outline.svg'}
		alt="Let's talk!"
		height = {32}
		width = {32}
		/>
	</Link>
	</div>
	<div className = {utilStyles.icon}>
	<Link href={'https://github.com/ricE06'}>
		<Image
		priority
		src={'/images/github-outline.svg'}
		alt="Let's code!"
		height = {32}
		width = {32}
		/>
	</Link>
	</div>
	<div className = {utilStyles.icon}>
	<Link href={'https://www.linkedin.com/in/eric-zhan-816672316/'}>
		<Image
		priority
		src={'/images/linkedin-outline.svg'}
		alt="Let's connect!"
		height = {32}
		width = {32}
		/>
	</Link>
	</div>
	<div className = {utilStyles.icon}>
	<Link href={'https://www.discordapp.com/users/732415222706339840'}>
		<Image
		priority
		src={'/images/discord-outline.svg'}
		alt="Let's chat!"
		height = {32}
		width = {32}
		/>
	</Link>
	</div>
	</div>
);

export default Icons;
