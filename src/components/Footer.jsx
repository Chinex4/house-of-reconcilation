import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className='bg-dark text-white py-10 px-6'>
			<div className='max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0'>
				{/* Logo */}
				<div className='flex items-center space-x-4'>
					<img
						src='/hor-nav-logo.png'
						alt='Logo'
						className='w-[18rem]'
					/>
				</div>

				{/* Links */}
				<div className='flex space-x-6 text-white/60'>
					<a href='/'>Home</a>
					<a href='/sermons'>Sermons</a>
					<a href='/branches'>Branches</a>
					<a href='/about'>About Us</a>
					<a href='#'>Blog</a>
				</div>

				{/* Socials */}
				<div className='flex space-x-4'>
					<FaFacebookF className='hover:text-primary cursor-pointer' />
					<FaTwitter className='hover:text-primary cursor-pointer' />
					<FaInstagram className='hover:text-primary cursor-pointer' />
				</div>
			</div>

			{/* Bottom */}
			<div className='text-center text-white/40 text-xs mt-24'>
				&copy; 2025 HOUSE OF RECONCILIATION. | Privacy Policy | Cookie Policy
			</div>
		</footer>
	);
}
