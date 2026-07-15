import { motion } from "framer-motion";
import {
    FaDatabase,
    FaGitAlt,
    FaJava,
    FaReact,
    FaTools,
} from "react-icons/fa";

const skills = [
    {
        title: "Backend Development",
        icon: <FaJava />,
        percentage: 95,
        color: "from-blue-500 to-cyan-400",
        description:
            "Building scalable backend applications with Java and Spring ecosystem.",
        tech: [
            "Java",
            "Spring Boot",
            "Hibernate",
            "JPA",
            "REST API",
            "JSP",
            "JDBC",
            "Spring Security",
        ],
    },

    {
        title: "Frontend Development",
        icon: <FaReact />,
        percentage: 80,
        color: "from-cyan-500 to-blue-500",
        description:
            "Creating responsive modern interfaces using React and Tailwind CSS.",
        tech: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "HTML5",
            "CSS3",
        ],
    },

    {
        title: "Database",
        icon: <FaDatabase />,
        percentage: 90,
        color: "from-purple-500 to-pink-500",
        description:
            "Designing efficient relational databases for enterprise applications.",
        tech: [
            "PostgreSQL",
            "MySQL",
            "SQL",
        ],
    },

    {
        title: "Developer Tools",
        icon: <FaTools />,
        percentage: 85,
        color: "from-orange-500 to-red-500",
        description:
            "Professional development workflow and version control.",
        tech: [
            "Git",
            "GitHub",
            "Postman",
            "VS Code",
            "Maven",
            "Eclipse",
        ],
    },
];

const marquee = [
    "Java",
    "Spring Boot",
    "Hibernate",
    "JPA",
    "REST API",
    "PostgreSQL",
    "React",
    "Tailwind CSS",
    "Git",
    "GitHub",
    "Postman",
    "Maven",
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden py-10 sm:py-16 lg:py-20"
        >
            {/* Background Glow */}

            <div className="absolute inset-0 -z-10">

                <div className="absolute left-0 top-10 w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-blue-500/10 blur-[80px] lg:blur-[150px]" />

                <div className="absolute right-0 bottom-10 w-52 h-52 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-purple-500/10 blur-[80px] lg:blur-[150px]" />
            </div>

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >

                    <p className="uppercase tracking-[3px] sm:tracking-[5px] lg:tracking-[6px] text-blue-400 mb-3">
                        Technical Expertise
                    </p>

                    <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold">

                        My <span className="text-blue-400">Skills</span>

                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8 text-sm sm:text-base">
                        Technologies I use to build scalable backend applications,
                        modern web interfaces, and production-ready software.
                    </p>

                </motion.div>

                {/* Cards */}

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

                    {skills.map((skill, index) => (

                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: .8,
                                delay: index * .15,
                            }}
                            whileHover={{
                                y: -10,
                            }}
                            className="
group
rounded-2xl
lg:rounded-3xl
border
border-white/10
bg-white/4
backdrop-blur-xl
p-5
sm:p-6
lg:p-8
transition-all
duration-500
hover:-translate-y-2
hover:scale-[1.02]
hover:border-blue-500
hover:shadow-[0_0_40px_rgba(59,130,246,.25)]
"                        >

                            {/* Header */}

                            <div className="flex justify-between items-start">

                                <div>

                                    <div className="text-2xl sm:text-4xl lg:text-5xl text-blue-400 group-hover:rotate-12 transition duration-500">
                                        {skill.icon}
                                    </div>

                                    <h3 className="text-lg sm:text-xl lg:text-2xl  font-bold mt-5">
                                        {skill.title}
                                    </h3>

                                </div>

                                <div className="text-xl sm:text-3xl lg:text-4xl font-bold text-blue-400 shrink-0">
                                    {skill.percentage}%
                                </div>

                            </div>

                            <p className="text-gray-400 mt-4 leading-6 text-sm sm:text-base">
                                {skill.description}
                            </p>

                            {/* Progress */}

                            <div className="mt-8">

                                <div className="w-full h-2 sm:h-3 rounded-full bg-white/10 overflow-hidden">

                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{
                                            width: `${skill.percentage}%`,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 1.5,
                                        }}
                                        className={`h-full rounded-full bg-linear-to-r ${skill.color}`}
                                    />

                                </div>

                            </div>

                            {/* Technologies */}

                            <div className="flex flex-wrap gap-3 mt-8">

                                {skill.tech.map((item) => (

                                    <span
                                        key={item}
                                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-white/10 bg-white/5 text-xs sm:text-sm hover:border-blue-500 hover:bg-blue-500/10 transition"
                                    >
                                        {item}
                                    </span>

                                ))}

                            </div>

                        </motion.div>

                    ))}

                </div>

                {/* Bottom Marquee */}

                <div className="relative mt-12 sm:mt-16 lg:mt-24 overflow-hidden border-y border-white/10 py-6">

                    <motion.div
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 25,
                            ease: "linear",
                        }}
                        className="flex whitespace-nowrap"
                    >

                        {[...marquee, ...marquee].map((item, index) => (

                            <div
                                key={index}
                                className="mx-4 sm:mx-6 lg:mx-8 flex items-center gap-2 sm:gap-3 text-gray-300 text-sm sm:text-base lg:text-lg"
                            >
                                <FaGitAlt className="text-blue-400" />
                                {item}
                            </div>

                        ))}

                    </motion.div>

                </div>

            </div>
        </section>
    );
}