

function Image() {
	const [image, setImage] = useState(
		(),
	);

	const randomImage = (array) => {
		return array[
			Math.floor(Math.random() * array.length)
		];
	};


	return (
		<section className='compliment-image content-wrapper'>
            <img>{randomImage}</img>
		</section>
	);
}

export default Image;
