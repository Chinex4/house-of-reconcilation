import React from 'react';

const About = () => {
    return (
        <div className=" text-dark font-mont bg-dark">
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
            <section className="max-w-4xl mx-auto py-16 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">A Message from Our Pastor</h2>
                <p className="text-lg text-white leading-relaxed mb-4">
                    Welcome to House of Reconciliation Outreach! We believe you’re here for a purpose. Whether you're new to the faith,
                    looking for a church home, or simply exploring, know that you're not just welcomed here — you're wanted.
                </p>
                <p className="text-lg text-white leading-relaxed italic">— Pastor John Doe</p>
            </section>
        </div>
    );
};

export default About;
