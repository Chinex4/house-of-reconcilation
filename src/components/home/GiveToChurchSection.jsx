import React from 'react';
import { FaHandHoldingHeart } from 'react-icons/fa';

export default function GiveToChurchSection() {
	return (
		<section className='py-16 px-6 lg:px-20 bg-dark flex justify-center'>
			<div className='bg-[#FFF0DB] flex flex-col lg:flex-row lg:justify-between gap-10 items-center rounded-lg p-10 text-center lg:text-left max-w-7xl mx-auto w-full'>
				<div>
				    <h3 className='text-primary text-[2rem] lg:text-[3.5rem] font-bold mb-2'>
    					GIVE TO THE CHURCH
    				</h3>
    				<p className='text-dark font-semibold text-2xl mb-6'>
    					Your generosity is blessing lives, <br /> thank you for giving
    				</p>
    				<button className='bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary-dark transition'>
    					GIVE NOW
    				</button>
				</div>

				<div className='mt-8 flex justify-center'>
                    <img src="/hor-giving-love.png" alt="giving" />               
				</div>
			</div>
		</section>
	);
}
