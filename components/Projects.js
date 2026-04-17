const Projects = () => {
    const achievements = [
        {
            title: "Professional Certifications & Badges",
            description: "All my technical skills, accomplishments, and verified certifications are centralized on Credly. View my active badges to see my verified competencies.",
            tech: ["Verified Credentials", "Continuous Learning", "Industry Standards"],
            link: "https://www.credly.com/users/keerthik-t/badges#credly",
            icon: "ph-certificate",
            image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
            linkText: "View on Credly"
        },
        {
            title: "Professional Experience & Projects",
            description: "My career timeline, professional recommendations, and detailed case studies of my work are exclusively maintained on my LinkedIn profile.",
            tech: ["Professional History", "Recommendations", "Project Case Studies"],
            link: "https://www.linkedin.com/in/keerthik-t-0b73bb36a/",
            icon: "ph-linkedin-logo",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
            linkText: "View on LinkedIn"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-4 transition-colors">
                    <span className="text-primary text-2xl">03.</span> Experience & Credentials
                    <div className="h-px bg-slate-300 dark:bg-slate-700 flex-grow ml-4 transition-colors"></div>
                </h2>

                <div className="space-y-24">
                    {achievements.map((item, index) => (
                        <div key={index} className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                            <div className="w-full md:w-3/5 relative group cursor-pointer">
                                <a href={item.link} target="_blank">
                                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 rounded-xl z-10"></div>
                                    <img src={item.image} alt={item.title} className="rounded-xl w-full h-80 object-cover shadow-2xl" />
                                </a>
                            </div>
                            
                            <div className={`w-full md:w-2/5 flex flex-col ${index % 2 !== 0 ? 'md:items-start text-left' : 'md:items-end text-right'}`}>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">{item.title}</h3>
                                <div className="glass p-6 rounded-xl mb-6 relative z-20 text-slate-700 dark:text-slate-300 shadow-xl transition-colors">
                                    <p>{item.description}</p>
                                </div>
                                <ul className={`flex flex-wrap gap-4 text-slate-600 dark:text-slate-400 font-mono text-sm mb-6 ${index % 2 !== 0 ? 'justify-start' : 'justify-end'} transition-colors`}>
                                    {item.tech.map((tech, i) => (
                                        <li key={i}>{tech}</li>
                                    ))}
                                </ul>
                                <div className="flex gap-4 text-slate-300">
                                    <a href={item.link} target="_blank" className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg transition-colors flex items-center gap-2">
                                        <i className={`ph ${item.icon} text-2xl`}></i>
                                        <span className="font-medium text-lg">{item.linkText}</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
