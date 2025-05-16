import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const location = useLocation();

	const navLinks = [
		{ name: 'HOME', path: '/' },
		{ name: 'SERMONS', path: '/sermons' },
		{ name: 'GIVE', path: '/give' },
		{ name: 'ABOUT US', path: '/about' },
	];

	return (
		<>
			{/* Navbar */}
			<nav className='mt-0 lg:mt-10 mx-0 lg:max-w-7xl lg:mx-auto fixed inset-x-0 top-0 z-50 bg-dark/30 backdrop-blur-md shadow-lg text-white'>
				<div className='max-w-7xl mx-auto px-4 py-4 flex items-center justify-between'>
					{/* Logo */}
					<div className='flex items-center space-x-4'>
						<img
							src='/hor-nav-logo.png'
							alt='Logo'
							className='w-[14rem]'
						/>
					</div>

					{/* Desktop Menu */}
					<div className='hidden lg:flex space-x-12 items-center'>
						{navLinks.map((link) => (
							<Link
								key={link.name}
								to={link.path}
								className={`relative ${
									location.pathname === link.path
										? 'text-white font-bold'
										: 'text-white/50'
								} hover:text-white`}>
								{link.name}
							</Link>
						))}
					</div>

					{/* Desktop Button */}
					<a href='#contact-us' className='hidden lg:block bg-primary px-4 py-2 rounded hover:bg-primary'>
						Contact Us
					</a>

					{/* Mobile Menu Button */}
					<div className='lg:hidden'>
						<button onClick={() => setIsOpen(true)}>
							<FiMenu size={28} />
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile Drawer + Overlay */}
			{isOpen && (
				<>
					{/* Overlay */}
					<div
						className='fixed inset-0 bg-black/50 z-40'
						onClick={() => setIsOpen(false)}
					/>

					{/* Drawer */}
					<motion.div
						initial={{ x: '-100%' }}
						animate={{ x: 0 }}
						exit={{ x: '-100%' }}
						transition={{ type: 'tween' }}
						className='lg:hidden fixed top-0 left-0 w-64 h-full bg-dark z-50 shadow-lg p-6'>
						<div className='flex justify-between items-center mb-6'>
							<img
								src='/hor-nav-logo.png'
								alt='Logo'
								className='w-[10rem]'
							/>
							<button onClick={() => setIsOpen(false)}>
								<FaTimes
									size={20}
									className='text-white'
								/>
							</button>
						</div>
						<nav className='flex flex-col space-y-4'>
							{navLinks.map((link) => (
								<Link
									key={link.name}
									to={link.path}
									onClick={() => setIsOpen(false)}
									className={`${
										location.pathname === link.path
											? 'text-white font-bold'
											: 'text-white/50'
									} hover:text-white`}>
									{link.name}
								</Link>
							))}
							<a href='#contact-us' className='bg-primary px-4 py-2 rounded hover:bg-primary mt-4'>
								Contact Us
							</a>
						</nav>
					</motion.div>
				</>
			)}
		</>
	);
}
