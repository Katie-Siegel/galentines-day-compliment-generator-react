import { useState } from 'react';
import images from '../data/images';

function Image() {
	const [randomImage, setRandomImage] = useState(
		images[
			Math.floor(Math.random() * images.length)
		],
	);

	console.log(randomImage);

	return (
		<section className='compliment-image content-wrapper'>
			<img
				src={randomImage.img}
				alt={randomImage.alt}
				key={randomImage.id}></img>
		</section>
	);
}

export default Image;
