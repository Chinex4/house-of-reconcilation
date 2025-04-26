import { Link } from 'react-router-dom';

export default function HeroSection() {
	return (
		<section
			className='relative min-h-screen bg-cover bg-center flex items-center justify-center'
			style={{ backgroundImage: `url('/hor-hero-bg.jpg')` }}>
			<div className='absolute inset-0 bg-black/60'></div>

			<div className='relative text-center text-white z-10 px-4'>
				<h1 className='text-4xl md:text-6xl font-bold mb-4'>
					Raising The Next Generation
				</h1>
				<p className='text-lg md:text-2xl mb-8'>
					Guiding children and youth to grow in Christ and character
				</p>
				<div className='flex flex-col md:flex-row gap-4 justify-center'>
					<Link
						to='/livestream'
						className='bg-primary px-6 py-3 rounded hover:bg-primary'>
						Livestream
					</Link>
					<Link
						to='/join'
						className='border-2 border-primary px-6 py-3 rounded hover:bg-primary hover:border-transparent'>
						Join Us Today
					</Link>
				</div>
			</div>
		</section>
	);
}
