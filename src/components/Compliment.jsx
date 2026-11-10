import { useState } from 'react';
import '../css/App.css';

import noun from '../data/noun';
import adj from '../data/adj';
import ideaOne from '../data/idea-one';
import ideaTwo from '../data/idea-two';

function Compliment({ name }) {
	const [compliment, setCompliment] = useState(
		[],
	);

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

		const newCompliment = (
			<div>
				<h3>
					Hey <span>{name}</span>! You are a{' '}
					<span>{randomAdj}</span>{' '}
					<span>{randomNoun}</span> of{' '}
					<span>{randomIdeaOne}</span> and{' '}
					<span>{randomIdeaTwo}</span>!
				</h3>
			</div>
		);

		setCompliment((prevCompliments) => [
			...prevCompliments,
			newCompliment,
		]);
	};

	return (
		<section className='compliment-view content-wrapper'>
			<div className='compliment'>
				{compliment.map((item, index) => (
					<div key={index}>{item}</div>
				))}
			</div>
			<button
				className='compliment-button'
				onClick={genComp}>
				{compliment.length === 0
					? 'Get a Compliment!'
					: 'Compliment Again!'}
			</button>
		</section>
	);
}

export default Compliment;
