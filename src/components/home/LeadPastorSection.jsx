import React from 'react';

export default function LeadPastorSection() {
	return (
		<section className='bg-dark pb-12'>
			<div className='bg-white max-w-7xl mx-auto rounded-xl py-16 px-6 md:px-16'>
			    <div className=' flex flex-col lg:flex-row items-center lg:justify-between gap-12'>
    				{/* Pastor Image */}
    				<div className=''>
    					<div className=''>
    						<img
    							src='/hor-pastor.png' // <-- replace with your image path
    							alt='Pastor'
    							className='w-full lg:w-[458px] h-full lg:h-[458px] object-cover'
    						/>
    					</div>
    				</div>
    
    				{/* Text Content */}
    				<div className='basis-[50%] text-center lg:text-left'>
    					<h2 className='text-2xl md:text-3xl font-bold text-dark mb-4'>
    						MEET OUR <span className='text-primary'>LEAD</span> PASTOR
    					</h2>
    					<p className='text-dark/80 leading-relaxed text-sm md:text-base'>
    						<span className='font-bold'>~ PASTOR KELVIN ODIRI</span> has been
    						faithfully serving in ministry for over [x] years. Known for his/her
    						passion for [teaching the word, building families, youth mentorship,
    						etc.], pastor [name] is committed to seeing lives transformed
    						through the power of the gospel. With a heart for the community and
    						a vision for the next generation, pastor [name] leads [church name]
    						with wisdom, humility, and unwavering faith.
    					</p>
    				</div>
    			</div>
			</div>
		</section>
	);
}
