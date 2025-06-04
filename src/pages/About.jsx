import React from 'react';

const About = () => {
    return (
        <div className="text-dark font-mont bg-dark">
            {/* Hero Section */}
            <section
                className="relative pt-20 h-[60vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: "url('/about-hero.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-2">About Us</h1>
                    <p className="text-primary text-lg md:text-2xl">House of Reconciliation Outreach</p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="max-w-6xl mx-auto py-16 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Mission</h2>
                <p className="text-lg text-white leading-relaxed">
                    At House of Reconciliation Outreach, our mission is to bring healing, restoration, and reconciliation
                    to individuals and families through the unchanging Word of God. We are committed to nurturing spiritual
                    growth, fostering strong community relationships, and empowering believers to live purposefully.
                </p>
            </section>

            {/* Vision & Beliefs Section */}
            <section className="bg-dark/80 py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
                    <div>
                        <h3 className="text-2xl font-semibold text-primary mb-4">Our Vision</h3>
                        <p className="text-white leading-relaxed">
                            Our vision is to see lives transformed by the love of Jesus, and to build a generation grounded in faith,
                            walking in truth, and carrying the message of reconciliation to the world.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-primary mb-4">What We Believe</h3>
                        <ul className="text-white list-disc list-inside space-y-2">
                            <li>Jesus Christ is the foundation of our faith.</li>
                            <li>The Bible is the inspired Word of God.</li>
                            <li>Every person is loved, valued, and called by God.</li>
                            <li>Community, compassion, and discipleship are vital to spiritual growth.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Pastor's Welcome */}
                    {/* Pastor's Welcome */}
<section className="max-w-6xl mx-auto py-16 px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-primary">A Message from Our Pastor</h2>

    <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10">
        {/* Pastor Image */}
        <div className="w-full md:w-1/3 flex justify-center">
            <img
                src="/pstjoe.jpg" // Replace with your actual image path
                alt="Pastor Joseph Enobakhare"
                className="w-full max-w-xs h-[350px] object-cover border-4 border-primary shadow-xl rounded-xl"
            />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 flex items-center justify-center text-white">
            <div>
                <p className="text-lg leading-relaxed mb-4 text-center md:text-left">
                    Welcome to House of Reconciliation Outreach! We believe you’re here for a purpose. Whether you're new to the faith,
                    looking for a church home, or simply exploring, know that you're not just welcomed here — you're wanted.
                </p>
                <p className="text-lg leading-relaxed italic text-center md:text-left">— PST.(PHARM). JOSEPH ENOBAKHARE </p>
            </div>
        </div>
    </div>
</section>

        </div>
    );
};

export default About;
