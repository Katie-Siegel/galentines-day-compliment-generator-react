const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='content-wrapper footer'>
			<p>
				&copy; {currentYear} Katherine Siegel{' '}
				<br />
				All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
