// BenefitSection.jsx
import SectionTitle from '../ui/SectionTitle';
import BenefitItem from './BenefitItem';

export default function BenefitSection() {
	const benefits = [
		{
			number: 1,
			title: 'GET IN TOUCH WITH TEACHINGS AND MESSAGES',
			description:
				'Ignite your world with our weekly messages and daily teachings, available to you at all times, helping you with deeper insight of Gods Word and spiritual encounters.',
			image: 'IM1.png', // replace with your actual image
		},
		{
			number: 2,
			title: 'INSPIRE YOUR WORLD THROUGH FELLOWSHIP WITH GODS WORD',
			description:
				'hours delivery of spirit inspired sermons, tapes, prophetic declarations and anointed teachings designed to help you grow and sustain relevance in your journey with Christ.',
			image: '/im2.png',
		},
		{
			number: 3,
			title: 'EXPERIENCE ENCOUNTERS WITH GODS SPIRIT VIA OUR MINISTRY',
			description:
				'Divine encounters with the holy spirit awaits you as you take advantage of our ministry programs and materials designed to bring you into deeper intimacy with the father and his son.',
			image: '/im4.png',
		},
		{
			number: 4,
			title: 'LIFE CHANGING WORDS AND PROPHETIC SERMONS',
			description:
				'Journey into deeper revelations and enlightenment of Gods word, readily available to you for spiritual encounters and life of victory',
			image: '/im5.png',
		},
	];

	return (
		<section className='bg-[#1A1A1A] py-20 px-4'>
			<div className='max-w-7xl mx-auto text-center mb-20'>
				<SectionTitle title={' ⁠BECOME PART OF A PURPOSEFUL JOURNEY'} />
				<p className='text-white/70 max-w-2xl mx-auto'>
				EXPERIENCE HOW OUR PLATFORM CAN INSPIRE YOUR WALK WITH GOD AND CHRISTIAN FELLOWSHIP 
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
