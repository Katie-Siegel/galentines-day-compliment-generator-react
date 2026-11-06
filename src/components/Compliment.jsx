import { useState } from 'react';
import '../css/App.css';
import noun from '../data/noun.jsx';
import adj from '../data/adj.js';
import ideaOne from '../data/idea-one.js';
import ideaTwo from '../data/idea-two.js';

function Compliment({ name }) {
	const [compliment, setCompliment] =
		useState('');
	const genComp = (e) => {
		e.preventDefault();

		setCompliment(
			`<h3>Hey ${name}! You are a <span>${adj} ${noun}</span> of <span>${ideaOne}</span> and <span>${ideaTwo}</span>!</h3>`,
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
