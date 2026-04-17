const About = () => {
    return (
        <section id="about" className="py-24 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-4 transition-colors">
                    <span className="text-primary text-2xl">01.</span> About Me
                    <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow ml-4 transition-colors"></div>
                </h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 text-slate-600 dark:text-slate-400 text-lg transition-colors">
                        <p>
                            Hello! My name is Keerthik, and my professional journey is defined by a deep fascination with how systems operate—both digital and human.
                        </p>
                        <p>
                            Currently pursuing a B.Tech in Information Technology, I have built a solid technical foundation in Computer Networking and Linux environments. My approach to technology is hands-on; whether I am configuring virtualized labs or mastering terminal-based workflows, I prioritize efficiency and security at the infrastructure level.
                        </p>
                        <p>
                            What sets my perspective apart is my interest in Analytical Psychology and Social Engineering. As an INTP, I utilize frameworks like MBTI to deconstruct cognitive patterns and behavioral systems. This allows me to approach Cybersecurity from a holistic angle—recognizing that the 'human operating system' is often the most critical component of any secure network.
                        </p>
                        <p>
                            I actively maintain my professional network and showcase my career milestones on LinkedIn. To stay at the forefront of the industry, I regularly pursue certifications in networking and security, which you can find verified on Credly.
                        </p>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-xl transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                        <img src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=600&auto=format&fit=crop" alt="Profile" className="relative rounded-xl w-full h-auto object-cover z-10 grayscale hover:grayscale-0 transition-all duration-500" />
                    </div>
                </div>
            </div>
        </section>
    );
};
