import { motion } from "framer-motion";
import CountUp from "react-countup";

import {
    FaCloud,
    FaDatabase,
    FaDownload,
    FaEnvelope,
    FaMapMarkerAlt,
    FaReact,
    FaServer
} from "react-icons/fa";

const expertise = [
    {
        icon: <FaServer />,
        title: "Backend Development",
        desc: "Building scalable, secure and maintainable backend applications using Java, Spring Boot and REST APIs."
    },
    {
        icon: <FaDatabase />,
        title: "Database Design",
        desc: "Designing efficient PostgreSQL and MySQL databases with optimized schema and performance."
    },
    {
        icon: <FaCloud />,
        title: "API Integration",
        desc: "Developing secure REST APIs, JWT Authentication and third-party integrations."
    },
    {
        icon: <FaReact />,
        title: "Frontend Development",
        desc: "Creating responsive and modern user interfaces using React and Tailwind CSS."
    }
];

const stats = [
    {
        number: 5,
        suffix: "+",
        title: "Projects"
    },
    {
        number: 10,
        suffix: "+",
        title: "Technologies"
    },
    {
        number: 1,
        suffix: "+",
        title: "Years Learning"
    },
    {
        number: 100,
        suffix: "%",
        title: "Dedication"
    }
];

const About = () => {

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/R_Resume.pdf";
        link.download = "Rahul_Pawar_Resume.pdf";
        link.click();
    };


    return (

        <section
            id="about"
            className="relative py-32 overflow-hidden"
        >

            {/* Background Glow */}

            <div className="absolute inset-0 -z-10">

                <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-blue-500/10 blur-[140px]" />

                <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-purple-500/10 blur-[160px]" />

            </div>

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div

                    initial={{ opacity: 0, y: 50 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .8 }}

                    className="text-center mb-24"

                >

                    <span className="uppercase tracking-[6px] text-blue-400">

                        WHO I AM

                    </span>

                    <h2 className="text-2xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl font-bold mt-4">

                        About <span className="text-blue-400">Me</span>

                    </h2>

                    <p className="text-gray-400 max-w-3xl mx-auto mt-8 leading-8 text-lg">

                        Passionate Java Backend Developer focused on designing
                        scalable backend systems, secure APIs and modern web
                        applications with clean architecture.

                    </p>

                </motion.div>

                {/* About Grid */}

                <div className="grid grid-cols-1
                lg:grid-cols-2
                gap-12
                lg:gap-20 items-center">

                    {/* Left Side */}

                    <motion.div

                        initial={{ opacity: 0, x: -80 }}

                        whileInView={{ opacity: 1, x: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: 1 }}

                        whileHover={{ y: -8 }}

                    >

                        <div
                            className="
                            relative
                            overflow-hidden
                            rounded-[36px]
                            border
                            border-white/10
                            bg-white/[0.04]
                            backdrop-blur-xl
                            p-6
                            sm:p-8
                            lg:p-10
                            shadow-[0_0_40px_rgba(59,130,246,.15)]
                            "
                        >

                            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
                            <div className="flex justify-center">

                                <div className="relative">

                                    <div className="absolute inset-0 rounded-full bg-blue-500 opacity-40 blur-3xl" />

                                    <motion.img

                                        whileHover={{ scale: 1.05 }}

                                        src="/image.png"

                                        alt="Rahul Pawar"

                                        className="
                                        relative
                                        w-40 h-40
                                        sm:w-52 sm:h-52
                                        md:w-60 md:h-60
                                        lg:w-64 lg:h-64
                                        object-contain
                                        rounded-full
                                        border-4
                                        border-blue-500
                                        shadow-[0_0_60px_rgba(59,130,246,.4)]
                                        "

                                    />

                                </div>

                            </div>

                            <h3 className="text-center text-2xl
                            sm:text-3xl
                            lg:text-4xl font-bold mt-8">

                                Rahul Pawar

                            </h3>

                            <p className="text-center text-blue-400 mt-2 text-lg">

                                Java Backend Developer

                            </p>

                            <div className="flex justify-center mt-5">

                                <span
                                    className="
                                    px-5
                                    py-2
                                    rounded-full
                                    bg-green-500/10
                                    border
                                    border-green-500/30
                                    text-green-400
                                    "
                                >

                                    Available for Opportunities

                                </span>

                            </div>

                            <div className="space-y-5 mt-10">

                                <div className="flex items-center gap-3 text-gray-400">

                                    <FaMapMarkerAlt className="text-blue-400" />

                                    Maharashtra, India

                                </div>

                                <div className="flex items-center gap-3 text-gray-400">

                                    <FaEnvelope className="text-blue-400" />

                                    rp2752004@gmail.com

                                </div>

                            </div>

                            <button

                                onClick={() => alert("Clicked")}
                                onClick={downloadResume}

                                className="
                                w-full
                                mt-10
                                py-4
                                rounded-xl
                                font-semibold
                                bg-gradient-to-r
                                from-blue-500
                                to-purple-500
                                hover:scale-105
                                cursor-pointer
                                transition
                                "

                            >

                                <FaDownload className="inline mr-2" />

                                Download Resume

                            </button>



                        </div>

                    </motion.div>
                    {/* ================= RIGHT SIDE ================= */}

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >

                        <p className="uppercase tracking-[4px] text-blue-400 mb-3">
                            MY INTRODUCTION
                        </p>

                        <h2 className="text-xl
sm:text-2xl
md:text-3xl
lg:text-4xl font-bold leading-tight">
                            Building Reliable &
                            <span className="text-blue-400"> Scalable Backend Solutions</span>
                        </h2>

                        <p className="text-gray-400 leading-8 mt-8 text-base
sm:text-lg">
                            I'm <span className="text-white font-semibold">Rahul Pawar</span>,
                            a passionate <span className="text-blue-400">Java Backend Developer</span>
                            focused on creating scalable, secure and high-performance web
                            applications using modern Java technologies.
                        </p>

                        <p className="text-gray-400 leading-8 mt-6 text-base
sm:text-lg">
                            My expertise includes Java, Spring Boot, Hibernate, JPA,
                            PostgreSQL and REST API development.
                            I enjoy solving real-world business problems through clean
                            architecture, optimized databases and maintainable backend systems.
                            Alongside backend development, I'm strengthening my frontend
                            knowledge with React and Tailwind CSS to become a Full Stack Developer.
                        </p>

                        {/* Stats */}

                        <div className="grid grid-cols-2 gap-6 mt-12">

                            {stats.map((item, index) => (

                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        scale: .8,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    viewport={{ once: true }}
                                    transition={{
                                        delay: index * .15,
                                        duration: .5,
                                    }}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.05,
                                    }}
                                    className="
                    bg-white/[0.04]
                    border
                    border-white/10
                    rounded-2xl
                    backdrop-blur-xl
                    p-3
sm:p-4
lg:p-5
                    text-center
                    hover:border-blue-500
                    hover:shadow-[0_0_35px_rgba(59,130,246,.25)]
                    transition-all
                    duration-300
                "
                                >

                                    <h3 className="text-4xl font-bold text-blue-400">

                                        <CountUp
                                            end={item.number}
                                            duration={3}
                                        />

                                        {item.suffix}

                                    </h3>

                                    <p className="text-gray-400 mt-3">
                                        {item.title}
                                    </p>

                                </motion.div>

                            ))}

                        </div>

                    </motion.div>

                </div>
                {/* ===================== EXPERTISE ===================== */}

                <motion.section
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-36"
                >

                    <div className="text-center mb-16">

                        <p className="uppercase tracking-[5px] text-blue-400">
                            MY EXPERTISE
                        </p>

                        <h2 className="text-5xl md:text-6xl font-bold mt-3">
                            What <span className="text-blue-400">I Do</span>
                        </h2>

                        <p className="text-gray-400 mt-6 max-w-3xl mx-auto leading-8">
                            I build scalable backend applications with clean architecture,
                            optimized databases, secure REST APIs and modern frontend
                            technologies for complete web solutions.
                        </p>

                    </div>

                    <div className="grid
                    grid-cols-1
                    sm:grid-cols-2
                    lg:grid-cols-4 gap-8">

                        {expertise.map((item, index) => (

                            <motion.div
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                    y: 60,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    delay: index * .2,
                                    duration: .8,
                                }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.03,
                                }}
                                className="
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                p-4
                sm:p-5
                lg:p-6
                group
                transition-all
                duration-500
                hover:border-blue-500
                hover:shadow-[0_0_45px_rgba(59,130,246,.35)]
                "
                            >

                                {/* Animated Background */}

                                <div
                                    className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    bg-gradient-to-br
                    from-blue-500/10
                    via-transparent
                    to-purple-500/10
                    "
                                />

                                {/* Floating Icon */}

                                <motion.div
                                    whileHover={{
                                        rotate: 12,
                                        scale: 1.15,
                                    }}
                                    transition={{ duration: .3 }}
                                    className="
                    relative
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-500
                    to-purple-500
                    flex
                    items-center
                    justify-center
                    text-3xl
                    mb-6
                    shadow-lg
                    "
                                >

                                    {item.icon}

                                </motion.div>

                                <h3 className="relative text-2xl font-bold mb-4">
                                    {item.title}
                                </h3>

                                <p className="relative text-gray-400 leading-7">
                                    {item.desc}
                                </p>

                                {/* Bottom Glow Line */}

                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "100%" }}
                                    transition={{
                                        delay: .3,
                                        duration: 1,
                                    }}
                                    className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    bg-gradient-to-r
                    from-blue-500
                    via-cyan-400
                    to-purple-500
                    "
                                />

                            </motion.div>

                        ))}

                    </div>

                </motion.section>
                {/* ===================== JOURNEY ===================== */}

                <motion.section
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="mt-40"
                >

                    <div className="text-center mb-20">

                        <p className="uppercase tracking-[5px] text-blue-400">
                            MY JOURNEY
                        </p>

                        <h2 className="text-5xl md:text-6xl font-bold mt-3">
                            Career <span className="text-blue-400">Timeline</span>
                        </h2>

                        <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
                            Every year has been a step toward becoming a professional Java Backend
                            Developer. Here's a glimpse of my learning journey.
                        </p>

                    </div>

                    <div className="relative max-w-6xl mx-auto">

                        {/* Vertical Timeline */}

                        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-cyan-400 to-purple-500 rounded-full"></div>

                        {[
                            {
                                year: "2022",
                                title: "Started Programming",
                                desc: "Started my programming journey by learning Java fundamentals, Object-Oriented Programming and Data Structures.",
                                icon: <FaServer />
                            },
                            {
                                year: "2023",
                                title: "Spring Ecosystem",
                                desc: "Learned Spring Boot, Hibernate, JPA and developed REST APIs connected with MySQL & PostgreSQL.",
                                icon: <FaDatabase />
                            },
                            {
                                year: "2024",
                                title: "Real World Projects",
                                desc: "Built scalable backend applications, integrated authentication, email services and database management.",
                                icon: <FaCloud />
                            },
                            {
                                year: "2025",
                                title: "Full Stack Developer",
                                desc: "Started building complete web applications using React, Tailwind CSS and Spring Boot while exploring AI integration.",
                                icon: <FaReact />
                            }

                        ].map((item, index) => (

                            <motion.div

                                key={item.year}

                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -120 : 120
                                }}

                                whileInView={{
                                    opacity: 1,
                                    x: 0
                                }}

                                viewport={{ once: true }}

                                transition={{
                                    duration: .8,
                                    delay: index * .25
                                }}

                                className={`relative flex items-center mb-24 ${index % 2 === 0
                                    ? "justify-start"
                                    : "justify-end"
                                    }`}

                            >

                                {/* Timeline Card */}

                                <motion.div

                                    whileHover={{
                                        y: -12,
                                        scale: 1.03
                                    }}

                                    className="
                    relative
                    w-full
                    md:w-[44%]
                    rounded-3xl
                    bg-white/[0.05]
                    backdrop-blur-xl
                    border
                    border-white/10
                    p-8
                    overflow-hidden
                    group
                    transition-all
                    duration-500
                    hover:border-blue-500
                    hover:shadow-[0_0_45px_rgba(59,130,246,.35)]
                    "

                                >

                                    {/* Hover Background */}

                                    <div className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    bg-gradient-to-br
                    from-blue-500/10
                    via-transparent
                    to-purple-500/10
                    "></div>

                                    {/* Icon */}

                                    <motion.div

                                        whileHover={{
                                            rotate: 15,
                                            scale: 1.15
                                        }}

                                        className="
                        relative
                        w-16
                        h-16
                        rounded-2xl
                        bg-gradient-to-r
                        from-blue-500
                        to-purple-500
                        flex
                        items-center
                        justify-center
                        text-3xl
                        mb-6
                        "

                                    >

                                        {item.icon}

                                    </motion.div>

                                    <span className="relative text-blue-400 font-semibold tracking-widest">

                                        {item.year}

                                    </span>

                                    <h3 className="relative text-3xl font-bold mt-3">

                                        {item.title}

                                    </h3>

                                    <p className="relative mt-5 text-gray-400 leading-8">

                                        {item.desc}

                                    </p>

                                </motion.div>

                                {/* Animated Timeline Circle */}

                                <motion.div

                                    animate={{
                                        scale: [1, 1.3, 1],
                                        boxShadow: [
                                            "0 0 10px rgba(59,130,246,.6)",
                                            "0 0 35px rgba(59,130,246,1)",
                                            "0 0 10px rgba(59,130,246,.6)"
                                        ]
                                    }}

                                    transition={{
                                        repeat: Infinity,
                                        duration: 2.5
                                    }}

                                    className="
                    absolute
                    left-1/2
                    -translate-x-1/2
                    w-8
                    h-8
                    rounded-full
                    bg-blue-500
                    border-4
                    border-[#020817]
                    "

                                />

                            </motion.div>

                        ))}

                    </div>

                </motion.section>

            </div>   {/* closes max-w-7xl */}

        </section>

    );
};

export default About;