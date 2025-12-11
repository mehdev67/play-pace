"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import NextImage from "next/image";

const products = [
    {
        title: "ClientScreen",
        tagline: "AI-Driven Client Onboarding",
        description:
            "Automated onboarding system that handles leads, quotes, contracts, invoices and follow-ups – completely hands-off.",
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

    return (
        <div className="min-h-screen pt-32 pb-20">
            

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

                            <div className="relative mb-8 group/icon">
                                {/* Glow effect behind */}
                                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${product.gradient} blur-2xl opacity-30 group-hover/icon:opacity-60 transition-opacity duration-500 scale-75`} />

                                {/* Floating animation wrapper */}
                                <div className="relative animate-[float_3s_ease-in-out_infinite]">
                                    <NextImage
                                        src={product.icon}
                                        alt={product.title}
                                        width={160}
                                        height={160}
                                        className="w-28 h-28 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)] group-hover:scale-110 group-hover:drop-shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-500"
                                    />
                                </div>
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
        </div>
    );
}
