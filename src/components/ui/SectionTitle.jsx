import React from 'react';

const SectionTitle = ({ title }) => {
	return (
		<>
			{/* Heading */}
			<h2 className='text-white text-2xl lg:text-4xl font-bold mb-4'>
				{title}
			</h2>

			{/* Underline */}
			<div className='flex justify-center mb-6'>
				<div className='w-20 h-1 bg-primary' />
			</div>
		</>
	);
};

export default SectionTitle;
