const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<footer>
			<p>
				&copy; {currentYear} Katherine Siegel |
				Random Stretch Generator. <br />
				All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
