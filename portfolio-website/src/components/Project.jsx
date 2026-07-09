import { motion } from "framer-motion";
import {
    FaExternalLinkAlt,
    FaGithub,
} from "react-icons/fa";


const projects = [
    {
        title: "HireFlow – AI HR Assistant",
        image: "hireflow.png",
        description:
            "An AI-powered HR platform featuring resume parsing, job posting, candidate management, email automation, and an intelligent HR assistant.",

        tech: [
            "React",
            "Spring Boot",
            "PostgreSQL",
            "Spring AI",
        ],

        github: "https://github.com/RahulPawar2004/Hire-Flow",
        demo: "#",

        featured: true,
    },



    {
        title: "Developer Portfolio",
        image: "portfolio.png",
        description:
            "A premium animated portfolio showcasing projects, skills and experience using React and Tailwind CSS.",

        tech: [
            "React",
            "Tailwind",
            "Framer Motion",
        ],

        github: "https://github.com/RahulPawar2004/Portfolio",
        demo: "#",

        featured: false,
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="relative py-32 overflow-hidden"
        >
            {/* Background */}

            <div className="absolute inset-0 -z-10">

                <div className="absolute left-0 top-40 w-96 h-96 bg-blue-500/10 rounded-full blur-[150px]" />

                <div className="absolute right-0 bottom-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[150px]" />

            </div>

            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="text-center mb-20"
                >

                    <p className="uppercase tracking-[6px] text-blue-400 mb-4">
                        My Work
                    </p>

                    <h2 className="text-5xl font-bold">
                        Featured <span className="text-blue-400">Projects</span>
                    </h2>

                    <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-8">
                        A selection of projects demonstrating my expertise in Java,
                        Spring Boot, PostgreSQL and modern frontend development.
                    </p>

                </motion.div>

                {/* Cards */}

                <div className="grid lg:grid-cols-2 gap-20">

                    {projects.map((project, index) => (

                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 80 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: .7,
                                delay: index * .2,
                            }}
                            whileHover={{
                                y: -12,
                            }}
                            className="group rounded-3xl overflow-hidden bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-blue-500 transition-all duration-500 hover:shadow-[0_0_45px_rgba(59,130,246,.25)]"
                        >

                            {/* Image */}

                            <div className="relative overflow-hidden">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-transparent to-transparent" />

                                {project.featured && (

                                    <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-blue-500 text-sm font-semibold">
                                        Featured
                                    </div>

                                )}

                            </div>

                            {/* Content */}

                            <div className="p-7">

                                <h3 className="text-2xl font-bold">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 mt-4 leading-7">
                                    {project.description}
                                </p>

                                {/* Tech */}

                                <div className="flex flex-wrap gap-3 mt-6">

                                    {project.tech.map((item) => (

                                        <span
                                            key={item}
                                            className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm hover:border-blue-500 hover:bg-blue-500/10 transition"
                                        >
                                            {item}
                                        </span>

                                    ))}

                                </div>

                                {/* Buttons */}

                                <div className="flex gap-4 mt-8">

                                    <a
                                        href={project.github}
                                        className="flex-1 flex justify-center items-center gap-2 rounded-xl bg-blue-500 py-3 font-semibold hover:bg-blue-600 transition"
                                    >
                                        <FaGithub />
                                        GitHub
                                    </a>

                                    <a
                                        href={project.demo}
                                        className="flex-1 flex justify-center items-center gap-2 rounded-xl border border-white/20 py-3 hover:border-blue-500 hover:bg-blue-500/10 transition"
                                    >
                                        <FaExternalLinkAlt />
                                        Live Demo
                                    </a>

                                </div>

                            </div>

                        </motion.div>

                    ))}

                </div>

            </div>
        </section>
    );
}