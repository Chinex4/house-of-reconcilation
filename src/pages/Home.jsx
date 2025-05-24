import React, { useEffect, useState, Fragment } from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoriesSection from '../components/home/CategoriesSection';
import BenefitsSection from '../components/home/BenefitsSection';
import LeadPastorSection from '../components/home/LeadPastorSection';
import PlaceForEveryoneSection from '../components/home/PlaceForEveryoneSection';
import GiveToChurchSection from '../components/home/GiveToChurchSection';
import ContactFormSection from '../components/home/ContactFormSection';
import JoinUs from '../components/home/JoinUs';
import { Dialog, Transition } from '@headlessui/react';
import confetti from 'canvas-confetti';

const Home = () => {
	const [isBirthday, setIsBirthday] = useState(false);

	useEffect(() => {
		const today = new Date();
		if (today.getFullYear() === 2025 && today.getMonth() === 4 && today.getDate() === 17) {
			setIsBirthday(true);
			launchConfetti();
		}
	}, []);

	const launchConfetti = () => {
		confetti({
			particleCount: 200,
			spread: 120,
			origin: { y: 0.6 },
			colors: ['#DF9D44', '#ffffff', '#fcd34d'],
		});
	};

	const closeModal = () => {
		setIsBirthday(false);
	};

	return (
		<>
			<HeroSection />
			<CategoriesSection />
			<BenefitsSection />
			<JoinUs />
			<LeadPastorSection />
			<PlaceForEveryoneSection />
			<GiveToChurchSection />
			<ContactFormSection />

			<Transition appear show={isBirthday} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black/60" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95">
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-dark p-6 text-center align-middle shadow-xl transition-all">
									<img
										src="/pastor.jpeg"
										alt="Pastor"
										className="w-50 h-50 mx-auto rounded-full mb-4 object-cover"
									/>
									<Dialog.Title
										as="h3"
										className="text-2xl font-bold leading-6 text-primary mb-2">
										Happy Birthday, Pastor!
									</Dialog.Title>
									<p className="text-sm text-gray-700">
										We love you and celebrate the grace of God upon your life!
									</p>

									<div className="mt-6">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark transition"
											onClick={closeModal}>
											Close
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default Home;
