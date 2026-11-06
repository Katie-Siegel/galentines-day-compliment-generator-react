import { useState } from 'react';
import '../css/App.css';

import noun from '../data/noun';
import adj from '../data/adj';
import ideaOne from '../data/idea-one';
import ideaTwo from '../data/idea-two';

function Compliment({ name }) {
	const [compliment, setCompliment] =
		useState('');

	const randomItem = (array) => {
		return array[
			Math.floor(Math.random() * array.length)
		];
	};

	const genComp = () => {
		const randomAdj = randomItem(adj);
		const randomNoun = randomItem(noun);
		const randomIdeaOne = randomItem(ideaOne);
		const randomIdeaTwo = randomItem(ideaTwo);

		console.log(randomAdj);
		console.log(randomNoun);
		console.log(randomIdeaOne);
		console.log(randomIdeaTwo);

		setCompliment(
			<div>
				<h3>
					Hey <span>{name}</span>! You are a{' '}
					<span>{randomAdj}</span>{' '}
					<span>{randomNoun}</span> of{' '}
					<span>{randomIdeaOne}</span> and{' '}
					<span>{randomIdeaTwo}</span>!
				</h3>
			</div>,
		);
	};

	return (
		<section className='compliment-view content-wrapper'>
			<div className='compliment'>
				{compliment}
			</div>
			<button
				className='compliment-button'
				onClick={genComp}>
				Get a Compliment!
			</button>
		</section>
	);
}

export default Compliment;
