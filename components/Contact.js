const Contact = () => {
    return (
        <section id="contact" className="py-32 px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-primary font-mono mb-4 text-lg"><span className="text-sm text-primary">04.</span> What's Next?</h2>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 transition-colors">Get In Touch</h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg mb-12 transition-colors">
                    My inbox is always open. Whether you have a question, an opportunity, or just want to say hi, feel free to reach out through any of these platforms!
                </p>
                
                <div className="flex flex-col md:flex-row justify-center gap-6">
                    <a href="https://www.linkedin.com/in/keerthik-t-0b73bb36a/" target="_blank" className="px-8 py-4 bg-[#0A66C2] text-white rounded-lg font-medium hover:bg-[#004182] transition-colors shadow-lg shadow-blue-500/20 flex items-center justify-center gap-3">
                        <i className="ph ph-linkedin-logo text-2xl"></i> LinkedIn
                    </a>
                    
                    <a href="mailto:blackfilemd@gmail.com" className="px-8 py-4 bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white rounded-lg font-medium hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors shadow-lg flex items-center justify-center gap-3">
                        <i className="ph ph-envelope-simple text-2xl text-[#EA4335]"></i> Email Me
                    </a>
                    
                    <a href="https://www.instagram.com/keerthik.exe" target="_blank" className="px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white rounded-lg font-medium hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20 flex items-center justify-center gap-3">
                        <i className="ph ph-instagram-logo text-2xl"></i> Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};
