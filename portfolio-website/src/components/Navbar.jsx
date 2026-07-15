import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const viewResume = () => {
        window.open("/R_Resume.pdf", "_blank");
    };

    return (
        <nav className="fixed top-4 left-0 w-full z-50 px-4 sm:px-6 lg:px-8">

            <div className="max-w-7xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">

                <div className="flex items-center justify-between px-6 py-4">

                    {/* Logo */}

                    <h1 className="text-2xl md:text-3xl font-bold">
                        Rahul.
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Pawar
                        </span>
                    </h1>

                    {/* Desktop Menu */}

                    <ul className="hidden lg:flex gap-10 text-gray-300 font-medium">
                        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                        <li><a href="#about" className="hover:text-blue-400">About</a></li>
                        <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
                        <li><a href="#project" className="hover:text-blue-400">Projects</a></li>
                        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                    </ul>

                    {/* Desktop Resume Button */}

                    <button
                        onClick={viewResume}
                        className="hidden lg:block px-5 py-2 rounded-xl border border-purple-500 hover:bg-purple-500 transition"
                    >
                        Resume
                    </button>

                    {/* Mobile Menu Button */}

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="lg:hidden text-2xl"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                </div>

                {/* Mobile Menu */}

                {menuOpen && (

                    <div className="lg:hidden border-t border-white/10">

                        <ul className="flex flex-col text-center py-4 space-y-5">

                            <li>
                                <a
                                    href="#home"
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-blue-400"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#about"
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-blue-400"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#skills"
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-blue-400"
                                >
                                    Skills
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#project"
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-blue-400"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    onClick={() => setMenuOpen(false)}
                                    className="hover:text-blue-400"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <button
                                    onClick={() => {
                                        viewResume();
                                        setMenuOpen(false);
                                    }}
                                    className="px-5 py-2 rounded-xl border border-purple-500 hover:bg-purple-500 transition"
                                >
                                    Resume
                                </button>
                            </li>

                        </ul>

                    </div>

                )}

            </div>

        </nav>
    );
};

export default Navbar;