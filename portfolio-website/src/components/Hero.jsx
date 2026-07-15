import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center px-5 sm:px-6 pt-24
md:pt-28
lg:pt-32">
            <div className="max-w-7xl
mx-auto
px-4
sm:px-6
lg:px-8 grid
grid-cols-1
lg:grid-cols-2 gap-10 items-center">

                {/* Left */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="inline-block px-5 py-2 rounded-full border border-blue-500/30 bg-white/5 mb-8">
                        👋 Hello, I'm
                    </div>

                    <h1 className="text-4xl
sm:text-5xl
md:text-6xl
lg:text-7xl font-bold leading-tight">
                        Rahul{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            Pawar
                        </span>
                    </h1>

                    <h2 className="text-xl
                    sm:text-2xl
                    md:text-3xl
                    lg:text-4xl
                    xl:text-4xl mt-6 text-gray-300">
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

                    <p className="text-gray-400 mt-8 max-w-xl 
                    text-base
                    sm:text-lg
                    lg:text-xl
                    leading-relaxed">
                        I build scalable backend applications using Spring Boot,
                        Hibernate, PostgreSQL, and modern web technologies.
                    </p>

                    <div className="mt-8
                    flex
                    flex-col
                    sm:flex-row
                    gap-4">
                        <a href="#project"><button className="px-6
                        sm:px-7
                        lg:px-8
                        py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 font-semibold hover:scale-105 transition">
                            View Projects
                        </button> </a>

                        <a href="#contact"><button className="px-6
                        sm:px-7
                        lg:px-8 py-3 rounded-xl border border-white/20 hover:border-blue-400 transition">
                            Contact Me
                        </button></a>

                    </div>

                    <div className="flex
                    justify-center
                    lg:justify-start
                    gap-6
                    
                    mt-10 text-xl xl:text-2xl  text-gray-400">
                        <a href="https://github.com/RahulPawar2004"
                            target="_blank"
                            rel="noopener noreferrer"><FaGithub className="hover:text-white cursor-pointer" /></a>

                        <a href="https://www.linkedin.com/in/rahul-pawar-b38415294"
                            target="_blank"
                            rel="noopener noreferrer"><FaLinkedin className="hover:text-blue-400 cursor-pointer" /></a>

                        <a href="mailto:rp2752004@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"><FaEnvelope className="hover:text-purple-400 cursor-pointer" /></a>

                        <a href="https://www.instagram.com/rahul_pawar_005"
                            target="_blank"
                            rel="noopener noreferrer"><FaInstagram className="hover:text-red-400 cursor-pointer" /></a>

                        <a href="https://leetcode.com/u/rahulpawqr"
                            target="_blank"
                            rel="noopener noreferrer"><SiLeetcode className="text-2xl hover:text-yellow-400 cursor-pointer" />
                        </a>
                    </div>

                </motion.div>

                {/* Right */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="relative flex justify-center items-center mt-12 lg:mt-0"
                >
                    {/* Background Glow */}
                    <div
                        className="
        absolute
        w-[320px] h-[320px]
        sm:w-[380px] sm:h-[380px]
        md:w-[450px] md:h-[450px]
        lg:w-[450px] lg:h-[450px]
        rounded-full
        bg-blue-500/20
        blur-[80px]
        lg:blur-[120px]
    "
                    />

                    {/* Outer Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="
        absolute
        w-[280px] h-[280px]
        sm:w-[340px] sm:h-[340px]
        md:w-[420px] md:h-[420px]
        lg:w-[420px] lg:h-[420px]
        rounded-full
        border-2
        border-blue-500/70
    "
                    />

                    {/* Dashed Ring */}
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{
                            duration: 15,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                        className="
        absolute
        w-[250px] h-[250px]
        sm:w-[310px] sm:h-[310px]
        md:w-[390px] md:h-[390px]
        lg:w-[390px] lg:h-[390px]
        rounded-full
        border
        border-purple-500/40
        border-dashed
    "
                    />

                    {/* Glass Circle */}
                    <div
                        className="
        relative
        w-[220px] h-[220px]
        sm:w-[270px] sm:h-[270px]
        md:w-[330px] md:h-[330px]
        lg:w-[330px] lg:h-[330px]
        rounded-full
        bg-white/[0.05]
        backdrop-blur-xl
        border
        border-white/10
        flex
        items-center
        justify-center
        overflow-hidden
        shadow-[0_0_40px_rgba(59,130,246,0.35)]
    "
                    >
                        <motion.img
                            animate={{ y: [0, -12, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            src="/image.png"
                            alt="Rahul Pawar"
                            className="
            w-[220px] h-[220px]
            sm:w-[280px] sm:h-[280px]
            md:w-[340px] md:h-[340px]
            lg:w-[340px] lg:h-[340px]
            object-contain
        "
                        />
                    </div>
                </motion.div>
            </div>
        </section >
    );
};

export default Hero;