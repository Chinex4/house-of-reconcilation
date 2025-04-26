// BenefitItem.jsx
import React from 'react';

export default function BenefitItem({ title, description, image, number }) {
	const isEven = number % 2 === 0;
	// console.log(isEven)

	return (
		<div
			className={`flex flex-col ${
				isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'
			} items-center lg:justify-between gap-8 mb-16 max-w-7xl mx-auto`}>
			{/* Text Content */}
			<div className='flex-1 relative'>
				{/* <div className='text-white/70 uppercase mb-4'>{title}</div> */}
				<div className='mb-4 flex text-left gap-2'>
                    <div className='h-10 w-1 bg-primary rounded' />
					<h3 className='text-white text-2xl font-bold'>{title}</h3>
				</div>
				<p className='text-white/60 text-sm'>{description}</p>

				{/* Number in background */}
				<div
					className={`absolute top-10 ${
						isEven ? 'right-8' : '-left-8'
					} text-[8rem] font-bold text-white/5 z-0`}>
					<img
						className='w-16'
						src={`/hor-${number}.png`}
						alt='number'
					/>
				</div>
			</div>

			{/* Image */}
			<div className='flex-1 relative'>
				<img
					src={image}
					alt={title}
					className='rounded-lg w-full object-cover h-64 lg:h-80'
				/>

				{/* Dotted Pattern - bottom right */}
				{/* <div className="absolute bottom-0 right-0 w-20 h-20 bg-[url('/dots-pattern.png')] bg-no-repeat bg-contain" /> */}
			</div>
		</div>
	);
}
