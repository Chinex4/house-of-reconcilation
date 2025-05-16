import React from 'react';

const projects = [
    {
        title: 'Bus Project',
        image: '/bus-project.jpg', // Place this image in public/
        description:
            'Support our mission to reach more lives by contributing to the purchase of a church bus. This vehicle will help us transport members, reach communities, and spread the gospel more effectively.',
    },
    {
        title: 'Offering',
        image: '/offering.jpg',
        description:
            'Your offering is a seed that advances the work of God through House of Reconciliation Outreach. Give cheerfully and in faith, knowing it supports our weekly services, outreaches, and facilities.',
    },
    {
        title: 'Partnership',
        image: '/partnership.jpg',
        description:
            'Become a monthly partner with us as we fulfill our divine mandate to raise the next generation. Your partnership fuels ministry projects, youth development, and community impact.',
    },
];

const Give = () => {
    return (
        <div className="bg-dark text-white pt-[10rem] pb-16 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Give to Support the Vision</h2>
                <p className="text-white/80 max-w-2xl mx-auto">
                    Your giving makes a difference! Whether it's helping us get a church bus, supporting weekly services,
                    or partnering with our outreach mission, every contribution builds God's Kingdom.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white text-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-700 mb-4">{project.description}</p>
                            <div className="bg-gray-100 p-4 rounded">
                                <p className="font-medium">Bank Name: <span className="text-primary">First Bank</span></p>
                                <p className="font-medium">Account Number: <span className="text-primary">1234567890</span></p>
                                <p className="font-medium">Account Name: <span className="text-primary">House of Reconciliation Outreach</span></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 max-w-4xl mx-auto text-center">
                <h4 className="text-2xl text-primary font-semibold mb-4">Thank You for Your Generosity</h4>
                <p className="text-white/80">
                    Every seed you sow is a step toward transforming lives. Thank you for supporting the vision of House of Reconciliation Outreach.
                </p>
            </div>
        </div>
    );
};

export default Give;
