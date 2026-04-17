const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-primary font-medium tracking-wide mb-4 text-lg md:text-xl">Hi, my name is</h2>
                <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">Keerthik T.</h1>
                <h3 className="text-4xl md:text-6xl font-bold text-slate-600 dark:text-slate-400 mb-8 transition-colors">I build experiences for the web.</h3>
                <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 transition-colors">
                    </p> With a core foundation in Linux environments and Computer Networking, I specialize in developing secure, scalable digital solutions.
                <div className="flex justify-center gap-6 flex-wrap">
                    <a href="https://www.linkedin.com/in/keerthik-t-0b73bb36a/" target="_blank" className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-indigo-600 transition-colors shadow-lg shadow-indigo-500/30 flex items-center gap-2">
                        <i className="ph ph-linkedin-logo text-2xl"></i> Connect on LinkedIn
                    </a>
                    <a href="https://www.credly.com/users/keerthik-t/badges#credly" target="_blank" className="px-8 py-4 glass text-slate-900 dark:text-white rounded-lg font-medium glass-hover flex items-center gap-2 transition-colors">
                        <i className="ph ph-certificate text-2xl"></i> View Credly Certs
                    </a>
                </div>
            </div>
        </section>
    );
};
