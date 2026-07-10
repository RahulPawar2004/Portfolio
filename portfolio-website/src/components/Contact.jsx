import { motion } from "framer-motion";
import { useState } from "react";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaPhoneAlt,
} from "react-icons/fa";
import { sendEmail } from "../service/emailService";

const contactInfo = [
    {
        icon: <FaEnvelope />,
        title: "Email",
        value: "rp2752004@gmail.com",
    },
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        value: "+91 8459713787",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Location",
        value: "Maharashtra, India",
    },
    {
        icon: <FaLinkedin />,
        title: "LinkedIn",
        value: "https://www.linkedin.com/in/rahul-pawar-b38415294",
    },
    {
        icon: <FaGithub />,
        title: "GitHub",
        value: "https://github.com/RahulPawar2004",
    },
];

export default function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.subject ||
            !formData.message
        ) {
            setStatus("Please fill all fields.");
            return;
        }

        try {
            setLoading(true);

            const response = await sendEmail(formData);

            setStatus(response.data);

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {

            console.log(error);

            console.log(error.response);

            console.log(error.response?.data);

            setStatus(
                error.response?.data || error.message
            );
        } finally {
            setLoading(false);
        }
    };
    return (

        <section
            id="contact"
            className="relative overflow-hidden py-32"
        >
            {/* Background Glow */}

            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[160px]" />

                <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-purple-500/10 blur-[160px]" />
            </div>

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <motion.div

                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-20 text-center"
                >
                    <p className="mb-4 uppercase tracking-[6px] text-blue-400">
                        Get In Touch
                    </p>

                    <h2 className="text-5xl font-bold">
                        Contact <span className="text-blue-400">Me</span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl leading-8 text-gray-400">
                        I'm currently open to internships, full-time opportunities,
                        freelance projects, and collaborations. Feel free to reach out.
                    </p>
                </motion.div>

                {/* Main Grid */}

                <div className="grid gap-12 lg:grid-cols-2">

                    {/* Contact Information */}

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl border border-white/10 bg-white/4 p-8 backdrop-blur-xl"
                    >
                        <h3 className="mb-10 text-3xl font-bold">
                            Let's Connect
                        </h3>

                        <div className="space-y-6">
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{
                                        x: 8,
                                        scale: 1.02,
                                    }}
                                    className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,.25)]"
                                >
                                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-500/20 text-xl text-blue-400">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <p className="text-sm text-gray-400">
                                            {item.title}
                                        </p>
                                        <a href={item.value}><p className="font-semibold text-white">
                                            {item.value}
                                        </p></a>

                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="rounded-3xl border border-white/10 bg-white/4 p-8 backdrop-blur-xl"
                    >

                        <div className="grid gap-6 md:grid-cols-2">

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-blue-500"
                            />

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                className="rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-blue-500"
                            />

                        </div>

                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Subject"
                            className="mt-6 w-full rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-blue-500"
                        />

                        <textarea
                            rows={6}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                            className="mt-6 w-full resize-none rounded-xl border border-white/10 bg-white/5 p-4 outline-none focus:border-blue-500"
                        />

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            disabled={loading}
                            className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-blue-500 to-purple-500 py-4 font-semibold disabled:opacity-50"
                        >
                            <FaPaperPlane />

                            {loading ? "Sending..." : "Send Message"}
                        </motion.button>
                        {status && (
                            <p className="mt-4 text-center text-green-400">
                                {status}
                            </p>
                        )}

                    </motion.form>

                </div>
            </div>
        </section>
    );
}