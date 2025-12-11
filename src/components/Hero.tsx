"use client";


import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Bot } from "lucide-react";



export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">


                {/* Main Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tight mb-6"
                >
                    <span className="text-white">We make software</span>
                    <br />
                    <span className="gradient-text">that doesn't suck</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                >
                    We develop and leverage the latest groundbreaking technology to ensure you always get the most advanced solutions. Our software runs fast, scales smart, and gives you the kind of edge others can't copy.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                >
                    <Link href="/start-project" className="btn-gradient group">
                        <span className="flex items-center gap-2">
                            Start Your Project
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                    <Link href="/products" className="relative group px-6 py-3 font-semibold text-zinc-300 hover:text-white transition-colors">
                        <span className="flex items-center gap-2">
                            AI Products
                            <motion.span
                                animate={{
                                    boxShadow: [
                                        "0 0 8px rgba(255, 127, 80, 0.4), 0 0 16px rgba(255, 127, 80, 0.2)",
                                        "0 0 16px rgba(255, 127, 80, 0.6), 0 0 32px rgba(255, 127, 80, 0.4)",
                                        "0 0 8px rgba(255, 127, 80, 0.4), 0 0 16px rgba(255, 127, 80, 0.2)",
                                    ],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="ml-2 px-2 py-0.5 text-xs font-semibold rounded-full bg-gradient-to-r from-coral-500 to-orange-400 text-white border border-orange-400/50"
                                style={{
                                    background: "linear-gradient(135deg, #FF7F50 0%, #FF6347 50%, #FF4500 100%)",
                                }}
                            >
                                High demand
                            </motion.span>
                        </span>
                    </Link>
                </motion.div>

                {/* Feature Pills */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    {[
                        { icon: Zap, label: "AI-Powered" },
                        { icon: Bot, label: "Automation" },
                        { icon: Sparkles, label: "Custom Software" },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
                        >
                            <item.icon className="w-4 h-4 text-cyan-400" strokeWidth={1.5} />
                            <span className="text-sm text-zinc-300">{item.label}</span>
                        </div>
                    ))}

                </motion.div>


            </div>
        </section>
    );
}


