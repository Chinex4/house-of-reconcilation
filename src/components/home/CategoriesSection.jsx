import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../ui/SectionTitle';

export default function CategoriesSection() {
	const categories = [
		{
			title: 'AUDIO MESSAGE',
			image: '/hor-cat1.png', // Replace with your actual image paths
			link: 'https://t.me/PJHOR',
		},
		{
			title: 'VIDEO MESSAGE',
			image: '/hor-cat2.png',
			link: 'https://web.facebook.com/profile.php?id=100064342673269',
		},
		{
			title: 'OUR BLOG',
			image: '/hor-cat3.png',
			link: '/',
		},
	];

	return (
		<section className='bg-dark py-16 px-4'>
			<div className='max-w-7xl mx-auto text-center'>
				<SectionTitle title={'⁠IGNITE YOUR WORLD THROUGH OUR VARIOUS CHANNELS '} />

				{/* Subheading */}
				<p className='text-white/70 max-w-2xl mx-auto mb-12'>
				If you’re seeking encouragement, spiritual growth, or a deeper revelation of God's word
				</p>

				{/* Categories Grid */}
				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{categories.map((cat, index) => (
						<Link
							key={index}
							to={cat.link}
							className='group relative overflow-hidden rounded-lg shadow-lg'>
							<img
								src={cat.image}
								alt={cat.title}
								className='w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300'
							/>
							<div className='absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex flex-col justify-end p-6'>
								<div className='flex items-center justify-between'>
									<h3 className='text-white font-bold text-lg'>{cat.title}</h3>
									<div className=''>
										<img src="/hor-right-arrow.png" alt="arrow" />
									</div>
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
