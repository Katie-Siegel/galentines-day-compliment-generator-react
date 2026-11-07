import { useState } from 'react';
import images from '../data/images';

function Image() {
	const [randomImage, setRandomImage] = useState(

		images[ Math.floor(Math.random() * images.length)];
	);


	return (
		<section className='compliment-image content-wrapper'>
			<img src={randomImage} alt={randomImage}></img>
		</section>
	);
}

export default Image;
