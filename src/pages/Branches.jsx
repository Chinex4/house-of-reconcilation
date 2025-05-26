import React from 'react';

const branches = [
    {
        name: 'Abraka Branch - Trinity Tabernacle',
        address: 'At the big field after the Army Barracks, Along Rivotel Road, Abraka, Delta State',
    },
    {
        name: 'Benin Branch - Ekewan Road',
        address: 'No. 38 Ekewan Road, Ehenkpen Junction, Opp Kilomijaro, Benin City, Edo State',
    },
    {
        name: 'Benin Branch - Ekosodin',
        address: 'Bethel Christian Academy, the top floor, Newton Street, Ekosodin, Benin City, Edo State',
    },
    {
        name: 'Warri Branch',
        address: '104, Okere Road, just before the Prison, Warri, Delta State',
    },
    {
        name: 'Benin Branch - Airport Road',
        address: 'Ulemon, Airport Road, Benin City, Edo State',
    },
];

const Branches = () => {
    return (
        <div className="bg-dark text-white pt-[10rem] pb-20 px-6">
            <div className="max-w-5xl mx-auto text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Church Branches</h2>
                <p className="text-white/80 max-w-2xl mx-auto">
                    House of Reconciliation is growing across Nigeria! Find your nearest branch and connect with us.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
                {branches.map((branch, index) => (
                    <div key={index} className="bg-white text-dark rounded-xl p-6 shadow-md">
                        <h4 className="text-xl font-semibold text-primary mb-2">{branch.name}</h4>
                        <p className="mb-1"><span className="font-medium">Address:</span> {branch.address}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Branches;
