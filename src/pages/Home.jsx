import React from 'react';
import HeroSection from '../components/home/HeroSection';
import CategoriesSection from '../components/home/CategoriesSection';
import BenefitsSection from '../components/home/BenefitsSection';
import LeadPastorSection from '../components/home/LeadPastorSection';
import PlaceForEveryoneSection from '../components/home/PlaceForEveryoneSection';
import GiveToChurchSection from '../components/home/GiveToChurchSection';
import ContactFormSection from '../components/home/ContactFormSection';

const Home = () => {
	return (
		<>
			<HeroSection />
			<CategoriesSection />
			<BenefitsSection />
			<LeadPastorSection />
			<PlaceForEveryoneSection />
			<GiveToChurchSection />
			<ContactFormSection />
		</>
	);
};

export default Home;
