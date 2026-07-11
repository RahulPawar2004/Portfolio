const Navbar = () => {
    const viewResume = () => {
        window.open(import.meta.env.VITE_API_URL + "/resume/view", "_blank");
    };
    return (
        <nav className="fixed top-5 left-0 w-full z-50 px-6">
            <div className="max-w-7xl mx-auto px-8 py-5 rounded-2xl bg-white/3 backdrop-blur-xl border border-white/10">
                <div className="flex justify-between items-center">

                    <h1 className="text-3xl font-bold">
                        Rahul.
                        <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Pawar
                        </span>
                    </h1>

                    <ul className="hidden md:flex gap-10 text-gray-300 font-medium">
                        <a href="#home"><li className="hover:text-blue-400 cursor-pointer">Home</li></a>
                        <a href="#about"><li className="hover:text-blue-400 cursor-pointer">About</li></a>
                        <a href="#skills"><li className="hover:text-blue-400 cursor-pointer">Skills</li></a>
                        <a href="#project"><li className="hover:text-blue-400 cursor-pointer">Projects</li></a>
                        <a href="#contact"><li className="hover:text-blue-400 cursor-pointer">Contact</li></a>

                    </ul>

                    <button
                        onClick={viewResume}
                        className="px-5 py-2 rounded-xl border border-purple-500 text-white hover:scale-105 transition cursor-pointer">
                        Resume
                    </button>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;