// BenefitSection.jsx
import SectionTitle from '../ui/SectionTitle';
import BenefitItem from './BenefitItem';

export default function BenefitSection() {
	const benefits = [
		{
			number: 1,
			title: 'ENGAGE WITH SERMONS & DEVOTIONALS',
			description:
				'Immerse yourself in our weekly sermons and daily devotionals, available to you anytime and anywhere, helping you to deepen your faith, expand your biblical understanding, and spiritually connect better, anytime.',
			image: '/hor-bene1.png', // replace with your actual image
		},
		{
			number: 2,
			title: 'ENGAGE WITH SERMONS & DEVOTIONALS',
			description:
				'Immerse yourself in our weekly sermons and daily devotionals, available to you anytime and anywhere, helping you to deepen your faith, expand your biblical understanding, and spiritually connect better, anytime.',
			image: '/hor-bene2.png',
		},
		{
			number: 3,
			title: 'ENGAGE WITH SERMONS & DEVOTIONALS',
			description:
				'Immerse yourself in our weekly sermons and daily devotionals, available to you anytime and anywhere, helping you to deepen your faith, expand your biblical understanding, and spiritually connect better, anytime.',
			image: '/hor-bene3.png',
		},
		{
			number: 4,
			title: 'ENGAGE WITH SERMONS & DEVOTIONALS',
			description:
				'Immerse yourself in our weekly sermons and daily devotionals, available to you anytime and anywhere, helping you to deepen your faith, expand your biblical understanding, and spiritually connect better, anytime.',
			image: '/hor-bene4.png',
		},
	];

	return (
		<section className='bg-[#1A1A1A] py-20 px-4'>
			<div className='max-w-7xl mx-auto text-center mb-20'>
				<SectionTitle title={'BE PART OF SOMETHING GREATER'} />
				<p className='text-white/70 max-w-2xl mx-auto'>
					Discover the benefits of our platform for spiritual growth and
					community engagement
				</p>
			</div>

			{/* Benefits List */}
			<div className='space-y-20'>
				{benefits.map((benefit) => (
					<BenefitItem
						key={benefit.number}
						title={benefit.title}
						description={benefit.description}
						image={benefit.image}
						number={benefit.number}
					/>
				))}
			</div>
		</section>
	);
}
