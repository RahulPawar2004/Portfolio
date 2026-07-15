import { motion } from "framer-motion";
import {
    FaArrowRight,
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";

const contactInfo = [
    {
        icon: <FaEnvelope />,
        title: "Email",
        value: "rp2752004@gmail.com",
        link: "mailto:rp2752004@gmail.com",
    },
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        value: "+91 8459713787",
        link: "tel:+918459713787",
    },
    {
        icon: <FaLinkedin />,
        title: "LinkedIn",
        value: "linkedin Rahul Pawar",
        link: "https://www.linkedin.com/in/rahul-pawar-b38415294",
    },
    {
        icon: <FaGithub />,
        title: "GitHub",
        value: "Rahul Pawar",
        link: "https://github.com/RahulPawar2004",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        value: "Maharashtra, India",
        link: "#",
    },
];

export default function Contact() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden py-12 sm:py-16 lg:py-24"
        >
            {/* Background Glow */}

            <div className="absolute inset-0 -z-10">
                <div className="absolute top-10 left-0 w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-blue-500/10 blur-[80px] lg:blur-[180px]" />

                <div className="absolute bottom-10 right-0 w-52 h-52 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full bg-purple-500/10 blur-[80px] lg:blur-[180px]" /> </div>

            <div className="mx-auto max-w-6xl px-4 sm:px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="text-center mb-12 sm:mb-16 lg:mb-20"
                >
                    <p className="uppercase tracking-[3px] sm:tracking-[5px] lg:tracking-[6px] text-blue-400 mb-3">
                        Contact
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                        Let's <span className="text-blue-400">Work Together</span>
                    </h2>

                    <p className="text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto leading-7 text-sm sm:text-base">
                        I'm currently looking for Java Backend Developer opportunities,
                        internships, freelance work, and exciting collaborations.
                        Feel free to reach out through any platform below.
                    </p>
                </motion.div>

                {/* Card */}

                <motion.div
                    initial={{ opacity: 0, y: 70 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .8 }}
                    className="rounded-2xl lg:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-8 lg:p-12"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                        {/* Left */}

                        <div>

                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
                                Get In Touch
                            </h3>

                            <p className="text-gray-400 text-sm sm:text-base leading-6 sm:leading-8 mb-6 sm:mb-10">
                                Whether you have an opportunity, project, or simply want to
                                connect, I'd love to hear from you.
                                Let's build something amazing together.
                            </p>

                            <div className="space-y-5">

                                {contactInfo.map((item, index) => (

                                    <motion.a
                                        key={index}
                                        href={item.link}
                                        target={
                                            item.link.startsWith("http")
                                                ? "_blank"
                                                : "_self"
                                        }
                                        rel="noreferrer"
                                        whileHover={{
                                            scale: 1.02,
                                            x: 6,
                                        }}
                                        className="flex items-center gap-3 sm:gap-5 rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-3 sm:p-5 hover:border-blue-500 transition duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,.25)]"                                    >

                                        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-base sm:text-lg lg:text-xl text-blue-400">
                                            {item.icon}
                                        </div>

                                        <div>
                                            <p className="text-xs sm:text-sm text-gray-400">
                                                {item.title}
                                            </p>

                                            <p className="font-semibold text-sm sm:text-base break-all">
                                                {item.value}
                                            </p>
                                        </div>

                                    </motion.a>

                                ))}

                            </div>

                        </div>

                        {/* Right */}

                        <div className="flex flex-col justify-center rounded-2xl lg:rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-5 sm:p-8 lg:p-10">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
                                Ready to Collaborate?
                            </h3>

                            <p className="text-gray-300 text-sm sm:text-base leading-6 sm:leading-8 mb-6 sm:mb-8">
                                I'm passionate about building scalable backend applications
                                using Java, Spring Boot, REST APIs, PostgreSQL, and modern web
                                technologies.
                            </p>

                            <div className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-300">

                                <p>✔ Java & Spring Boot</p>

                                <p>✔ REST APIs</p>

                                <p>✔ PostgreSQL</p>

                                <p>✔ React + Tailwind CSS</p>

                                <p>✔ Open to Full-Time & Internship Roles</p>

                            </div>

                            <a
                                href="mailto:rp2752004@gmail.com"
                                className="mt-8 inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold transition hover:scale-105"
                            >
                                Contact Me
                                <FaArrowRight />
                            </a>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}