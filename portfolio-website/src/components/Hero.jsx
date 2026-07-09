import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center px-6 pt-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="inline-block px-5 py-2 rounded-full border border-blue-500/30 bg-white/5 mb-8">
                        👋 Hello, I'm
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                        Rahul{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Pawar
                        </span>
                    </h1>

                    <h2 className="text-3xl md:text-5xl mt-6 text-gray-300">
                        <Typewriter
                            words={[
                                "Java Backend Developer",
                                "Spring Boot Developer",
                                "Full Stack Java Developer",
                                "Backend API Developer",
                            ]}
                            loop={0}
                            cursor
                            cursorStyle="|"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={2000}
                        />
                    </h2>

                    <p className="text-gray-400 mt-8 max-w-xl text-lg leading-relaxed">
                        I build scalable backend applications using Spring Boot,
                        Hibernate, PostgreSQL, and modern web technologies.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <a href="#project"><button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-semibold hover:scale-105 transition">
                            View Projects
                        </button> </a>

                        <a href="#contact"><button className="px-8 py-4 rounded-xl border border-white/20 hover:border-blue-400 transition">
                            Contact Me
                        </button></a>

                    </div>

                    <div className="flex gap-5 mt-10 text-2xl text-gray-400">
                        <a href="https://github.com/RahulPawar2004"><FaGithub className="hover:text-white cursor-pointer" /></a>

                        <a href="https://www.linkedin.com/in/rahul-pawar-b38415294"><FaLinkedin className="hover:text-blue-400 cursor-pointer" /></a>

                        <a href="rp2752004@gmail.com"><FaEnvelope className="hover:text-purple-400 cursor-pointer" /></a>

                        <a href="https://www.instagram.com/rahul_pawar_005"><FaInstagram className="hover:text-red-400 cursor-pointer" /></a>

                        <a href="https://leetcode.com/u/rahulpawqr"><SiLeetcode className="text-2xl hover:text-yellow-400 cursor-pointer" />
                        </a>
                    </div>

                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center items-center"
                >
                    {/* Background Glow */}
                    <div className="absolute w-[520px] h-[520px] rounded-full bg-blue-500/20 blur-[120px]"></div>

                    {/* Outer Rotating Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute w-[500px] h-[500px] rounded-full border-2 border-blue-500/70"
                    />

                    {/* Dashed Rotating Ring */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="absolute w-[470px] h-[470px] rounded-full border border-purple-500/40 border-dashed"
                    />

                    {/* Glass Circle */}
                    <div className="relative w-[380px] h-[380px] rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden shadow-[0_0_40px_rgba(59,130,246,0.35)]">

                        <motion.img
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            src="/image.png"
                            alt="Rahul Pawar"
                            className="w-[390px] h-[390px] object-contain"
                        />

                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;