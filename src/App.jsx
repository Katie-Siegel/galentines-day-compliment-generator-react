import { useState } from 'react';
import Compliment from './components/Compliment';
import Image from './components/Image';
import Quote from './components/Quote';
import Footer from './components/Footer';
import './css/App.css';

function App() {
	const [name, setName] = useState('');
	const [nameMessage, setNameMessage] =
		useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (name) {
			setNameMessage(
				`${name} sounds amazing! Let's get a compliment for them!`,
			);
		} else {
			setNameMessage(
				"Please enter your best friend's name to receive a compliment!",
			);
		}
	};

	return (
		<section id='compliment-generator'>
			<section className='name-request content-wrapper'>
				<label htmlFor='name-input'>
					Enter your best friend's name below!
				</label>
				<input
					type='text'
					value={name}
					onChange={(e) =>
						setName(e.target.value)
					}
					id='name-input'
					name='name-input'
					placeholder="Enter your best friend's name"
				/>
				<button
					type='submit'
					id='submit-button'
					onClick={handleSubmit}>
					That's My Girl!
				</button>
				<p className='name-message'>
					{nameMessage}
				</p>
			</section>
			<Compliment name={name} />
			<Image />
			<Quote />
			{/* Add Share Functionality Here */}
			<div className='border'></div>
			<Footer />
		</section>
	);
}

export default App;
