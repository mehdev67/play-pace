"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Shield, Globe, Award } from "lucide-react";
import NextImage from "next/image";

const values = [
    {
        title: "Innovation First",
        description: "We don't just follow trends, we build them.",
        icon: "/icons/innovation.png",
        gradient: "from-yellow-400 to-orange-500",
        isImage: true,
    },
    {
        title: "Security by Design",
        description: "Enterprise-grade security in everything we ship.",
        icon: "/icons/shield.png",
        gradient: "from-green-400 to-emerald-500",
        isImage: true,
    },
    {
        title: "Results Driven",
        description: "We focus on metrics that actually matter to your business.",
        icon: "/icons/target.png",
        gradient: "from-red-500 to-pink-500",
        isImage: true,
    },
    {
        title: "Speed & Quality",
        description: "Why choose? We deliver excellence, fast.",
        icon: "/icons/rocket.png",
        gradient: "from-purple-500 to-indigo-500",
        isImage: true,
    },
];

const techStack = [
    {
        title: "Modern Cloud Infrastructure",
        description: "Scalable, secure, and reliable infrastructure.",
        icon: "/icons/google-cloud.png",
        gradient: "from-blue-400 to-cyan-500",
        isImage: true,
    },
    {
        title: "Advanced AI Models",
        description: "State-of-the-art machine learning models.",
        icon: "/icons/vertex-ai.png",
        gradient: "from-purple-400 to-pink-500",
        isImage: true,
    },
    {
        title: "Global Edge Network",
        description: "Lightning fast performance worldwide.",
        icon: "/icons/globe.png",
        gradient: "from-green-400 to-cyan-500",
        isImage: true,
    },
];

const products = [
    {
        title: "ClientScreen",
        tagline: "Automatic Customer Acquisition",
        description:
            "AI-powered lead generation that works 24/7 to find and qualify potential customers for your business.",
        icon: "/icons/clientscreen.png",
        gradient: "from-purple-500 to-cyan-500",
        status: "Coming Soon",
    },
    {
        title: "Receptionista",
        tagline: "AI Voice Assistant",
        description:
            "ElevenLabs-powered voice assistant that handles your calls, appointments, and customer support automatically.",
        icon: "/icons/receptionista.png",
        gradient: "from-purple-500 to-pink-500",
        status: "Live",
    },
    {
        title: "Notario",
        tagline: "Automated Mail Flows",
        description:
            "Smart email automation that handles your entire mail workflow — from intelligent routing and responses to follow-ups and notifications.",
        icon: "/icons/notario.png",
        gradient: "from-blue-500 to-cyan-500",
        status: "Coming Soon",
    },
];

const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "15+", label: "AI Agents Built" },
    { value: "99%", label: "Client Satisfaction" },
    { value: "24h", label: "Response Time" },
];

export default function AboutPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="aurora-bg" />

            {/* Hero */}
            <div className="relative max-w-6xl mx-auto px-6 lg:px-8 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#8656ff]/5 border border-[#ff5145]/20 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(134,86,255,0.3)] mb-6 transition-all duration-300 hover:scale-105 hover:bg-[#8656ff]/10 hover:border-[#ff5145]/40 hover:shadow-[0_0_20px_-3px_rgba(134,86,255,0.5)]">
                        <Sparkles className="w-4 h-4 text-[#ff5145]" strokeWidth={1.5} />
                        <span className="text-sm font-medium text-[#d4bfff]">About PlayPace</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Building the Future with{" "}
                        <span className="gradient-text">AI & Automation</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        PlayPace is a creative AI and data studio based in Sweden. We build
                        innovative software, mobile apps, internal tools, automations and AI Agents.
                        Our mission is to help businesses leverage cutting-edge technology to achieve
                        extraordinary results.
                    </p>
                </motion.div>
            </div>

            {/* Stats */}
            <div className="relative max-w-6xl mx-auto px-6 lg:px-8 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-8"
                >
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <div key={stat.label} className="text-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.3 + i * 0.1 }}
                                >
                                    <p className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-zinc-400">{stat.label}</p>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Our Products */}
            <div className="relative max-w-6xl mx-auto px-6 lg:px-8 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Our <span className="gradient-text">Products</span>
                    </h2>
                    <p className="text-lg text-zinc-400">
                        AI-powered solutions we've built to transform businesses.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                            className="glass-card p-8 text-center group relative"
                        >
                            {/* Status Badge */}
                            <div className="absolute top-4 right-4">
                                <span
                                    className={`px-3 py-1 rounded-full text-xs font-medium ${product.status === "Live"
                                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                        : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                                        }`}
                                >
                                    {product.status}
                                </span>
                            </div>

                            <div className="inline-flex p-4 rounded-2xl mb-6 relative">
                                <NextImage
                                    src={product.icon}
                                    alt={product.title}
                                    width={80}
                                    height={80}
                                    className="w-20 h-20 drop-shadow-2xl group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {product.title}
                            </h3>
                            <p className="text-sm font-medium text-purple-400 mb-4">
                                {product.tagline}
                            </p>
                            <p className="text-zinc-400 leading-relaxed">
                                {product.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Our Tech */}
            <div className="relative max-w-6xl mx-auto px-6 lg:px-8 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Powered by World-Class Technology
                    </h2>
                    <p className="text-lg text-zinc-400">
                        We develop and leverage the latest groundbreaking technology to ensure
                        you always get the most advanced solutions.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {techStack.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                            className="glass-card p-8 text-center group"
                        >
                            <div className="inline-flex p-4 rounded-2xl mb-6 relative h-24 items-center justify-center">
                                {item.isImage ? (
                                    <NextImage
                                        src={item.icon as string}
                                        alt={item.title}
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                                    />
                                ) : (
                                    <div className={`p-4 rounded-full bg-gradient-to-br ${item.gradient} bg-opacity-20`}>
                                        {/* @ts-ignore */}
                                        <item.icon className="w-8 h-8 text-white" />
                                    </div>
                                )}
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">
                                {item.title}
                            </h3>
                            <p className="text-zinc-400">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Values */}
            <div ref={ref} className="relative max-w-6xl mx-auto px-6 lg:px-8 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                        Our Values
                    </h2>
                    <p className="text-lg text-zinc-400">
                        The principles that guide everything we build.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {values.map((value, i) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1 }}
                            className="glass-card p-8 flex items-start gap-5"
                        >
                            <div className="flex-shrink-0">
                                {value.isImage ? (
                                    <NextImage
                                        src={value.icon as string}
                                        alt={value.title}
                                        width={64}
                                        height={64}
                                        className="w-16 h-16 drop-shadow-lg"
                                    />
                                ) : (
                                    <div className="p-3 rounded-xl bg-purple-500/20">
                                        {/* @ts-ignore */}
                                        <value.icon className="w-8 h-8 text-purple-400" />
                                    </div>
                                )}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {value.title}
                                </h3>
                                <p className="text-zinc-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* EU Badge */}
            <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass-card p-8"
                >
                    <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
                        <div className="w-16 h-16 rounded-2xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                            <Award className="w-8 h-8 text-blue-400" />
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-2">
                                Recognized & Co-funded by the European Union
                            </h3>
                            <p className="text-zinc-400">
                                We are proud to be recognized and co-funded by the European Union,
                                pioneering sustainable solutions that empower people, businesses, and the planet.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
