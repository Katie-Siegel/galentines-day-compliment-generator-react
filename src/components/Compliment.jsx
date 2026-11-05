const Compliment = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='content-wrapper footer'>
			<p>
				&copy; {currentYear} Katherine Siegel |
				Random Stretch Generator. <br />
				All rights reserved.
			</p>
		</footer>
	);
};

export default Compliment;
