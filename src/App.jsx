import { useState } from 'react';
import './App.css';

function App() {
	return (
		<>
			<section id='compliment-generator'>
				<section className='name-request'>
					<h1>Compliment Generator</h1>
					<p>
						Click the button to generate a
						compliment!
					</p>
					<button id='compliment-button'>
						Generate Compliment
					</button>
					<p id='compliment'></p>
				</section>
				<section className='compliment-view'>
					<h2>Your Compliment</h2>
					<p id='compliment-output'></p>
				</section>
				<footer>
					<Footer />
				</footer>
			</section>
		</>
	);
}

export default App;
