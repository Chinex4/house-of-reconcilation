import React from 'react';

export default function PlaceForEveryoneSection() {
	return (
		<section className='py-16 px-6 bg-dark text-white'>
			<div className='max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-10 lg:justify-between'>
				<div className='mb-12'>
					<h2 className='text-2xl md:text-3xl font-bold mb-4'>
						THERE'S A PLACE <br /> FOR{' '}
						<span className='text-primary'>EVERYONE</span>
					</h2>
					<p className='text-white/70 max-w-sm'>
						Worship with us at House Of Reconcilation Christain Outreach Intl
					</p>
				</div>

				{/* Images */}
				<div className='grid grid-cols-3 gap-4'>
					{['/hor-we.png', '/hor-love.png', '/hor-you.png'].map((img, idx) => (
						<div
							key={idx}
							className='relative'>
							<img
								src={img}
								alt='People'
								className='w-full h-64 object-cover rounded-lg'
							/>
							{/* <span className='absolute inset-0 flex items-center justify-center text-4xl font-bold text-white uppercase'>
								{['We', 'Love', 'You'][idx]}
							</span> */}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
