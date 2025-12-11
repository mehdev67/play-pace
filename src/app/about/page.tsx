"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import NextImage from "next/image";
import { GlassCard } from "react-glass-ui";

const products = [
    {
        title: "ClientScreen",
        tagline: "Onboarding Platform",
        description:
            "Automated onboarding and background checks for seamless client intake.",
        icon: "/icons/ClientScreen.png",
        status: "Coming Soon",
        accentColor: "emerald",
    },
    {
        title: "Receptionista",
        tagline: "Digital Receptionist",
        description:
            "Voice AI that answers calls, schedules appointments, and manages leads.",
        icon: "/icons/receptionista.png",
        status: "Live",
        accentColor: "cyan",
    },
    {
        title: "Notario",
        tagline: "AI Email Assistant",
        description:
            "Intelligent email and SMS automation that handles communication 24/7.",
        icon: "/icons/Notario2.0.png",
        status: "Coming Soon",
        accentColor: "purple",
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
        <div className="min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20">


            {/* Hero */}
            <div className="relative max-w-6xl mx-auto px-6 lg:px-8 mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff5145]/5 border border-[#ff5145]/10 backdrop-blur-md mb-6 transition-all duration-300 hover:scale-105 hover:bg-[#ff5145]/10 hover:border-[#ff5145]/40 hover:shadow-[0_0_20px_-3px_rgba(255,81,69,0.5)]">
                        <Sparkles className="w-4 h-4 text-[#ff5145]" strokeWidth={1.5} />
                        <span className="text-sm font-medium text-[#ff5145]">About PlayPace</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6">
                        Building the Future with{" "}
                        <span className="gradient-text">AI & Automation</span>
                    </h1>
                    <p className="text-lg text-zinc-600 max-w-3xl mx-auto leading-relaxed">
                        PlayPace is a creative AI and data studio based in Sweden. We build
                        innovative software, mobile apps, internal tools, automations and AI Agents.
                        Our mission is to help businesses leverage cutting edge technology to achieve
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
                >
                    <GlassCard
                        blur={12}
                        borderRadius={24}
                        borderOpacity={0}
                        backgroundColor="#ffffff"
                        backgroundOpacity={0.4}
                        className="p-4 sm:p-8 border shadow-sm ring-1 ring-[#ff5145]/20 border-[#ff5145]/20 hover:ring-[#ff5145]/40 transition-all duration-300"
                    >
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
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
                                        <p className="text-zinc-500">{stat.label}</p>
                                    </motion.div>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
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
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
                        Our <span className="gradient-text">Products</span>
                    </h2>
                    <p className="text-lg text-zinc-600">
                        AI powered solutions we've built to transform businesses.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 + i * 0.1 }}
                        >
                            <GlassCard
                                blur={12}
                                borderRadius={24}
                                borderOpacity={0}
                                backgroundColor="#ffffff"
                                backgroundOpacity={0.4}
                                onHoverScale={1.02}
                                className={`p-6 sm:p-8 text-center relative h-full border shadow-sm ring-1 ring-${product.accentColor}-500/20 border-${product.accentColor}-200/50 hover:ring-${product.accentColor}-500/50 transition-all duration-300 flex flex-col items-center`}
                            >
                                {/* Status Badge */}
                                <div className="mb-6">
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium ${product.status === "Live"
                                            ? "bg-green-500/20 text-green-400 border border-green-500/30"
                                            : "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                                            }`}
                                    >
                                        {product.status}
                                    </span>
                                </div>

                                <div className="relative mb-6 flex justify-center w-full">
                                    <div className="relative animate-[float_3s_ease-in-out_infinite]">
                                        <NextImage
                                            src={product.icon}
                                            alt={product.title}
                                            width={160}
                                            height={160}
                                            className="w-28 h-28 mx-auto object-contain hover:scale-110 transition-all duration-500"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                                    {product.title}
                                </h3>
                                <p className={`text-sm font-medium text-${product.accentColor}-600 mb-4`}>
                                    {product.tagline}
                                </p>
                                <p className="text-zinc-500 leading-relaxed">
                                    {product.description}
                                </p>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
