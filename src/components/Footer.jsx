import React from 'react';

const Footer = () => {
	const CurrentYear = new Date().getFullYear();
	return (
		<div className='mt-24'>
			<p className='dark:text-gray-200 text-gray-700 text-center m-20'>
				© {CurrentYear} All rights reserved by LazyCoderLee
			</p>
		</div>
	);
};

export default Footer;
