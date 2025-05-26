import React, { useState } from 'react';
import { FiCopy } from 'react-icons/fi';

const projects = [
    {
        title: 'Church Project',
        image: '/church-project.jpg',
        description:
            'Support our mission to reach more lives by contributing to church projects. Your gift helps with construction, equipment, and community outreach expansion.',
        accountDetails: {
            number: '1222269855',
            bank: 'Zenith Bank',
            name: 'House of Reconciliation Christian Outreach',
        },
    },
    {
        title: 'Offering and Tithes',
        image: '/offering-tithes.jpg',
        description:
            'Your offering is a seed that advances the work of God through House of Reconciliation Outreach. Give cheerfully and in faith, knowing it supports our weekly services, outreaches, and facilities.',
        accountDetails: {
            number: '0107323690',
            bank: 'Union Bank',
            name: 'House of Reconciliation Christian Outreach',
        },
    },
    {
        title: 'Partnership',
        image: '/partnership-new.jpg',
        description:
            'Become a monthly partner with us as we fulfill our divine mandate to raise the next generation. Your partnership fuels ministry projects, youth development, and community impact.',
        accountDetails: {
            number: '1221153502',
            bank: 'Zenith Bank',
            name: 'House of Reconciliation Christian Outreach',
        },
    },
];

const Give = () => {
    const [copiedText, setCopiedText] = useState('');

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text).then(() => {
            setCopiedText(text);
            setTimeout(() => setCopiedText(''), 2000);
        });
    };

    return (
        <div className="bg-dark text-white pt-[10rem] pb-16 px-6">
            <div className="max-w-6xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Give to Support the Vision</h2>
                <p className="text-white/80 max-w-2xl mx-auto">
                    Your giving makes a difference! Whether it's helping with church projects, supporting weekly services,
                    or partnering with our outreach mission, every contribution builds God's Kingdom.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white text-dark rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition"
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-56 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
                            <p className="text-sm text-gray-700 mb-4">{project.description}</p>
                            <div className="bg-gray-100 p-4 rounded text-sm space-y-2">
                                {['bank', 'number', 'name'].map((key) => (
                                    <div
                                        key={key}
                                        className="flex items-center justify-between gap-2"
                                    >
                                        <p className="font-medium">
                                            {key === 'number'
                                                ? 'Account Number'
                                                : key === 'bank'
                                                ? 'Bank Name'
                                                : 'Account Name'}
                                            :{' '}
                                            <span className="text-primary">
                                                {project.accountDetails[key]}
                                            </span>
                                        </p>
                                        <button
                                            onClick={() => handleCopy(project.accountDetails[key])}
                                            className="text-primary hover:text-blue-600"
                                            title="Copy"
                                        >
                                            <FiCopy />
                                        </button>
                                    </div>
                                ))}
                                {copiedText && (
                                    <p className="text-green-600 text-xs mt-2">
                                        Copied: {copiedText}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 max-w-4xl mx-auto text-center">
                <h4 className="text-2xl text-primary font-semibold mb-4">
                    Thank You for Your Generosity
                </h4>
                <p className="text-white/80 mb-4">
                    Every seed you sow is a step toward transforming lives. Thank you for
                    supporting the vision of House of Reconciliation Outreach.
                </p>
                <p className="text-white/70 text-sm">
                    For proof of payment, kindly send to Minister Sogie at{' '}
                    <span className="text-primary font-semibold">08135626879</span>.
                </p>
            </div>
        </div>
    );
};

export default Give;
