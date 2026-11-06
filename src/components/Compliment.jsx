import { useState } from 'react';
import '../css/App.css';
import noun from '.data/noun.js';
import adj from '../data/adj.js';

function Compliment({ name }) {
	const [compliment, setCompliment] =
		useState('');
	const genComp = (e) => {
		e.preventDefault();

		setCompliment(
			`Hey ${name}! You are an amazing friend!`,
		);
	};

	return (
		<section className='compliment-view content-wrapper'>
			<p className='compliment'>{compliment}</p>
			<button
				className='compliment-button'
				onClick={genComp}>
				Get a Compliment!
			</button>
		</section>
	);
}

export default Compliment;
