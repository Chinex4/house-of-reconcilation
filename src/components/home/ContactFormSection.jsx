import React, { useRef, useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

export default function ContactFormSection() {
	const formRef = useRef();
	const [loading, setLoading] = useState(false);
	const [messageSent, setMessageSent] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.sendForm(
				'service_y5elljh',    // Replace with your actual service ID (e.g., 'service_abc123')
				'template_qhcsx42',   // Replace with your actual template ID (e.g., 'template_xyz456')
				formRef.current,
				'0UXmVfa0H0qjvWC7d'     // Replace with your actual public key (e.g., 'F8xj4jJ3abcXYZ')
			)
			.then(
				() => {
					setLoading(false);
					setMessageSent(true);
					formRef.current.reset();
				},
				(error) => {
					console.error('FAILED...', error);
					setLoading(false);
					alert('An error occurred. Please try again.');
				}
			);
	};

	return (
		<section id='contact-us' className='py-16 px-6 bg-dark text-white'>
			<div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
				{/* Text Info */}
				<div>
					<h4 className='text-xl font-bold mb-4'>GET IN TOUCH</h4>
					<p className='text-white/70'>USE THIS FORM TO SUBMIT YOUR INQUIRY</p>
					<p>House Of Reconciliation Christian Outreach Intl</p>
					<div className='flex gap-3 mt-5'>
						<a
							href='https://web.facebook.com/profile.php?id=100064342673269'
							target='_blank'
							rel='noopener noreferrer'>
							<FaFacebook size={20} />
						</a>
						<a
							href='https://www.instagram.com/houseofreconciliationcoi/'
							target='_blank'
							rel='noopener noreferrer'>
							<FaInstagram size={20} />
						</a>
						<a
							href='https://www.tiktok.com/@Houseofreconciliationcoi'
							target='_blank'
							rel='noopener noreferrer'>
							<FaTiktok size={20} />
						</a>
					</div>
				</div>

				{/* Contact Form */}
				<form ref={formRef} onSubmit={sendEmail} className='flex flex-col space-y-4'>
					<input
						type='email'
						name='user_email'
						placeholder='Email address'
						required
						className='bg-white text-dark rounded p-3 outline-none'
					/>
					<input
						type='text'
						name='user_name'
						placeholder='Full name'
						required
						className='bg-white text-dark rounded p-3 outline-none'
					/>
					<textarea
						name='message'
						placeholder='Message'
						rows='4'
						required
						className='bg-white text-dark rounded p-3 outline-none resize-none'
					/>
					<button
						type='submit'
						className='bg-primary text-white py-3 rounded font-semibold hover:bg-primary-dark transition'>
						{loading ? 'Sending...' : 'Send Message'}
					</button>
					{messageSent && (
						<p className='text-green-400 mt-2'>Message sent successfully!</p>
					)}
				</form>
			</div>
		</section>
	);
}
