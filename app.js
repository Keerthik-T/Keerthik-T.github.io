2const { useState, useEffect } = React;

const App = () => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDark]);

    const toggleTheme = () => setIsDark(!isDark);

    return (
        <div className="min-h-screen font-sans bg-slate-50 dark:bg-darker text-slate-900 dark:text-slate-300 transition-colors duration-500 relative overflow-hidden">
            {/* Background Blob Effects */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-secondary rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob animation-delay-4000"></div>

            {/* Navigation */}
            <nav className="fixed w-full z-50 glass">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="font-bold text-xl text-foreground">Home</a>
                    <div className="hidden md:flex gap-8 items-center">
                        <a href="#about" className="hover:text-primary transition-colors">About</a>
                        <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
                        <a href="#projects" className="hover:text-primary transition-colors">Experience</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                        <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center justify-center w-10 h-10 ml-4">
                            {isDark ? <i className="ph ph-sun text-xl text-yellow-400"></i> : <i className="ph ph-moon text-xl text-slate-700"></i>}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
            </main>

            {/* Footer */}
            <footer className="py-8 text-center text-slate-600 dark:text-slate-500 border-t border-slate-200 dark:border-slate-800 transition-colors duration-500">
                <p>&copy; {new Date().getFullYear()} Keerthik T. All rights reserved.</p>
            </footer>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
