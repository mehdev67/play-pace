"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import NextImage from "next/image";
import { GlassCard } from "react-glass-ui";



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
            <div className="relative max-w-4xl mx-auto px-6 mb-24">
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
            <div className="relative max-w-4xl mx-auto px-6 mb-24">
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


        </div>
    );
}
