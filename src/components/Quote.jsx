import { useState } from 'react';
import quotes from '../data/quotes-data';

function Quote() {
	const [randomQuote, setRandomQuote] = useState(
		quotes[
			Math.floor(Math.random() * quotes.length)
		],
	);

	return (
		<section className='compliment-quote content-wrapper'>
			<h3>{randomQuote}</h3>
		</section>
	);
}

export default Quote;
