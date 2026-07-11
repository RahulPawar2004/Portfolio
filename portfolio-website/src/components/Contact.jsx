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
            className="relative overflow-hidden py-28"
        >
            {/* Background Glow */}

            <div className="absolute inset-0 -z-10">
                <div className="absolute top-20 left-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[180px]" />
                <div className="absolute bottom-10 right-0 h-96 w-96 rounded-full bg-purple-500/10 blur-[180px]" />
            </div>

            <div className="mx-auto max-w-6xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="text-center mb-20"
                >
                    <p className="uppercase tracking-[6px] text-blue-400 mb-3">
                        Contact
                    </p>

                    <h2 className="text-5xl font-bold">
                        Let's <span className="text-blue-400">Work Together</span>
                    </h2>

                    <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-8">
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
                    className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 md:p-12"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Left */}

                        <div>

                            <h3 className="text-4xl font-bold mb-6">
                                Get In Touch
                            </h3>

                            <p className="text-gray-400 leading-8 mb-10">
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
                                        className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-blue-500 transition duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,.25)]"
                                    >

                                        <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 text-xl">
                                            {item.icon}
                                        </div>

                                        <div>
                                            <p className="text-sm text-gray-400">
                                                {item.title}
                                            </p>

                                            <p className="font-semibold break-all">
                                                {item.value}
                                            </p>
                                        </div>

                                    </motion.a>

                                ))}

                            </div>

                        </div>

                        {/* Right */}

                        <div className="flex flex-col justify-center rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 p-10">

                            <h3 className="text-3xl font-bold mb-5">
                                Ready to Collaborate?
                            </h3>

                            <p className="text-gray-300 leading-8 mb-8">
                                I'm passionate about building scalable backend applications
                                using Java, Spring Boot, REST APIs, PostgreSQL, and modern web
                                technologies.
                            </p>

                            <div className="space-y-3 text-gray-300">

                                <p>✔ Java & Spring Boot</p>

                                <p>✔ REST APIs</p>

                                <p>✔ PostgreSQL</p>

                                <p>✔ React + Tailwind CSS</p>

                                <p>✔ Open to Full-Time & Internship Roles</p>

                            </div>

                            <a
                                href="mailto:rp2752004@gmail.com"
                                className="mt-10 inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-4 font-semibold transition hover:scale-105"
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