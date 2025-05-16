import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';

export default function HeroSection() {
	const [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<section
				className='relative min-h-screen bg-cover bg-center flex items-center justify-center'
				style={{ backgroundImage: "url('/hor-hero-bg.jpg')" }}>
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
						<button
							onClick={openModal}
							className='border-2 border-primary px-6 py-3 rounded hover:bg-primary hover:border-transparent'>
							Join Us Today
						</button>
					</div>
				</div>
			</section>

			{/* Modal */}
			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-50" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0">
						<div className="fixed inset-0 bg-black/50" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95">
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title className="text-lg font-medium text-gray-900 mb-4">
										Join Us Today
									</Dialog.Title>
									<form className="space-y-4">
										<div>
											<label className="block text-sm font-medium text-gray-700">
												Name
											</label>
											<input
												type="text"
												className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-primary"
												placeholder="Enter your name"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700">
												Email
											</label>
											<input
												type="email"
												className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-primary"
												placeholder="Enter your email"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700">
												Phone Number
											</label>
											<input
												type="tel"
												className="w-full mt-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:ring-primary"
												placeholder="Enter your phone number"
											/>
										</div>
										<div className="flex justify-end pt-4">
											<button
												type="button"
												onClick={closeModal}
												className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80">
												Submit
											</button>
										</div>
									</form>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
