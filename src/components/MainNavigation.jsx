import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const MainNavigation = () => {
	return (
		<div>
			<Navbar />

			{/* Page Content */}
			<main className='min-h-screen font-mont'>
				<Outlet />
			</main>

			{/* Footer */}
            <Footer />
		</div>
	);
};

export default MainNavigation;
