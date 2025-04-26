import React from 'react';

export default function ContactFormSection() {
	return (
		<section className='py-16 px-6 bg-dark text-white'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
				{/* Text */}
				<div>
					<h4 className='text-xl font-bold mb-4'>GET IN TOUCH</h4>
					<p className='text-white/70'>USE THIS FORM TO SUBMIT YOUR INQUIRY</p>
				</div>

				{/* Form */}
				<form className='flex flex-col space-y-4'>
					<input
						type='email'
						placeholder='Email address'
						className='bg-white text-dark rounded p-3 outline-none'
					/>
					<input
						type='text'
						placeholder='Full name'
						className='bg-white text-dark rounded p-3 outline-none'
					/>
					<textarea
						placeholder='Message'
						rows='4'
						className='bg-white text-dark rounded p-3 outline-none resize-none'
					/>
					<button
						type='submit'
						className='bg-primary text-white py-3 rounded font-semibold hover:bg-primary-dark transition'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}
