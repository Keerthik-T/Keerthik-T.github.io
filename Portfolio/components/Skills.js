const Skills = () => {
    const skillCategories = [
        {
            title: "Cybersecurity & Systems",
            icon: "ph-shield-check",
            skills: ["Cybersecurity", "Linux Administration", "Computer Networking", "Computer Hardware", "System Design"]
        },
        {
            title: "Software Engineering",
            icon: "ph-terminal-window",
            skills: ["Python", "C & C++", "Java", "JavaScript", "HTML & CSS", "MySQL", "Data Structures & Algorithms (DSA)"]
        },
        {
            title: "Strategy & Analytical",
            icon: "ph-brain",
            skills: ["MBTI Profiling", "Trading & Market Analysis", "Hackathons & Problem Solving", "Version Control (GitHub)"]
        }
    ];

    return (
        <section id="skills" className="py-24 px-6 relative z-10">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">
                        <span className="text-primary text-2xl mr-4">02.</span> 
                        Polymath Expertise
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg mt-6 transition-colors">
                        A multidisciplinary approach to technology, blending deep technical knowledge in cybersecurity and programming with strategic analytical skills.
                    </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="glass p-8 rounded-2xl glass-hover border-t-4 border-t-primary/50 relative overflow-hidden group">
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-all duration-500"></div>
                            <i className={`ph ${category.icon} text-5xl text-primary mb-6`}></i>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">{category.title}</h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-medium transition-colors">
                                        <i className="ph ph-caret-right text-primary text-sm"></i>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
