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
    							src='/pstorpic.jpeg' // <-- replace with your image path
    							alt='Pastor'
    							className='w-full rounded-full lg:w-[450px] h-full lg:h-[450px] object-cover'
								
    						/>
    					</div>
    				</div>
    
    				{/* Text Content */}
    				<div className='basis-[50%] text-center lg:text-left'>
    					<h2 className='text-2xl md:text-3xl font-bold text-dark mb-4'>
    						MEET OUR <span className='text-primary'>LEAD</span> PASTOR
    					</h2>
    					<p className='text-dark/80 leading-relaxed text-sm md:text-base'>
    						<span className='font-bold'>~ PST.(PHARM). JOSEPH ENOBAKHARE</span> i is a devoted servant of God with a lasting impact of faith in God's word and revelation of the holy spirit, known for his passion for discipleship, mentorship, trainings and spiritual growth in the life of believers.
							Pastor (Pharm) Joseph Enobakhare is committed to the ministry of reconciling lives through the power of God's word and ministry of the holy spirit. With a burning desire for revival and transformation of lives and destinies. With divine wisdom, power and grace, Pastor (Pharm). Joseph Enobakhare continues to lead House Of Reconciliation Christian Outreach Int'l.

    					</p>
    				</div>
    			</div>
			</div>
		</section>
	);
}
