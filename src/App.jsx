import { useState } from 'react';
import Footer from './components/Footer.jsx';
import './css/App.css';

function App() {
	return (
		<section id='compliment-generator'>
			<section className='name-request content-wrapper'>
				<label htmlFor='name-input'>
					Enter your best friend's name below!
				</label>
				<input
					type='text'
					id='name-input'
					name='name-input'
					placeholder="Enter your best friend's name"
				/>
				<button
					type='submit'
					id='submit-button'>
					That's My Girl!
				</button>
			</section>
			<Footer />
		</section>
	);
}

export default App;
