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
            className="relative py-32 overflow-hidden"
        >
            {/* Background Glow */}

            <div className="absolute inset-0 -z-10">

                <div className="absolute left-20 top-20 w-80 h-80 rounded-full bg-blue-500/10 blur-[150px]" />

                <div className="absolute right-20 bottom-20 w-80 h-80 rounded-full bg-purple-500/10 blur-[150px]" />

            </div>

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="text-center mb-20"
                >

                    <p className="uppercase tracking-[6px] text-blue-400 mb-4">
                        Technical Expertise
                    </p>

                    <h2 className="text-5xl font-bold">

                        My <span className="text-blue-400">Skills</span>

                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
                        Technologies I use to build scalable backend applications,
                        modern web interfaces, and production-ready software.
                    </p>

                </motion.div>

                {/* Cards */}

                <div className="grid lg:grid-cols-2 gap-8">

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
                            className="group rounded-3xl border border-white/10 bg-white/4 backdrop-blur-xl p-8 transition-all duration-500 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,.25)]"
                        >

                            {/* Header */}

                            <div className="flex justify-between items-center">

                                <div>

                                    <div className="text-5xl text-blue-400 group-hover:rotate-12 transition duration-500">
                                        {skill.icon}
                                    </div>

                                    <h3 className="text-2xl font-bold mt-5">
                                        {skill.title}
                                    </h3>

                                </div>

                                <div className="text-4xl font-bold text-blue-400">
                                    {skill.percentage}%
                                </div>

                            </div>

                            <p className="text-gray-400 mt-6 leading-7">
                                {skill.description}
                            </p>

                            {/* Progress */}

                            <div className="mt-8">

                                <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">

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
                                        className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-blue-500 hover:bg-blue-500/10 transition"
                                    >
                                        {item}
                                    </span>

                                ))}

                            </div>

                        </motion.div>

                    ))}

                </div>

                {/* Bottom Marquee */}

                <div className="relative mt-24 overflow-hidden border-y border-white/10 py-6">

                    <motion.div
                        animate={{
                            x: ["0%", "-50%"],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 18,
                            ease: "linear",
                        }}
                        className="flex whitespace-nowrap"
                    >

                        {[...marquee, ...marquee].map((item, index) => (

                            <div
                                key={index}
                                className="mx-8 flex items-center gap-3 text-gray-300 text-lg"
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