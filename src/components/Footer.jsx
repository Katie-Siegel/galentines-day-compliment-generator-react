const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className='content-wrapper footer'>
			<h3>
				&copy; {currentYear} Katherine Siegel |
				All rights reserved.
			</h3>
		</footer>
	);
};

export default Footer;
