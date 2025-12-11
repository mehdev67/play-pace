"use client";

import { motion } from "framer-motion";
import { Bot, Code, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BentoGrid() {
    return (
        <section className="relative py-24 px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="mb-12 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl sm:text-4xl font-bold text-white mb-4"
                >
                    Designed for <span className="gradient-text">Hyper Growth</span>
                </motion.h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                    Everything you need to scale your operations with AI and intelligent software.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                {/* Large Card: AI Automation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="md:col-span-2 row-span-1 relative group overflow-hidden rounded-3xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8656ff]/10 to-[#1700f7]/10 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-between h-full transition-all duration-500 group-hover:border-[#8656ff]/30">
                        <div className="relative z-10">
                            <div className="w-12 h-12 rounded-xl bg-[#8656ff]/20 flex items-center justify-center mb-4 transition-transform group-hover:scale-110 duration-500">
                                <Bot className="w-6 h-6 text-[#8656ff]" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">AI Agents & Automation</h3>
                            <p className="text-zinc-400 max-w-md">
                                Deploy intelligent agents that work around the clock. From customer support to data processing, we automate the repetitive tasks so you can focus on building.
                            </p>
                        </div>

                        {/* Visual Effect */}
                        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 translate-x-12 opacity-50 group-hover:opacity-80 group-hover:translate-x-4 transition-all duration-700">
                            <div className="w-48 h-48 rounded-full border border-[#8656ff]/30 flex items-center justify-center animate-[spin_10s_linear_infinite]">
                                <div className="w-32 h-32 rounded-full border border-[#1700f7]/30 flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                                    <div className="w-16 h-16 rounded-full bg-[#8656ff]/20 blur-xl animate-pulse"></div>
                                </div>
                            </div>
                        </div>

                        <div className="relative z-10">
                            <Link href="/developing" className="inline-flex items-center gap-2 text-sm font-medium text-[#8656ff] hover:text-[#a17fff] transition-colors">
                                View Services <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Tall Card: Development */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="md:col-span-1 row-span-2 relative group overflow-hidden rounded-3xl"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#6effc5]/10 to-[#1700f7]/10 backdrop-blur-xl border border-white/10 p-8 flex flex-col h-full transition-all duration-500 group-hover:border-[#6effc5]/30">
                        <div className="w-12 h-12 rounded-xl bg-[#6effc5]/20 flex items-center justify-center mb-4 flex-shrink-0">
                            <Code className="w-6 h-6 text-[#6effc5]" />
                        </div>
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold text-white">Custom Software</h3>
                            <Link href="/developing" className="p-2 rounded-full bg-[#6effc5]/10 hover:bg-[#6effc5]/20 text-[#6effc5] transition-colors">
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </div>
                        <p className="text-zinc-400 mb-6">
                            Full-stack engineering tailored to your unique requirements.
                        </p>

                        {/* Code Snippet Visual */}
                        <div className="flex-grow bg-black/40 rounded-xl p-4 font-mono text-xs text-zinc-400 overflow-hidden border border-white/5 relative group-hover:border-cyan-500/20 transition-colors">
                            <div className="flex gap-1.5 mb-3 opacity-50">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            </div>
                            <div className="space-y-1">
                                <p><span className="text-pink-400">const</span> <span className="text-blue-400">scale</span> = <span className="text-pink-400">async</span> () <span className="text-pink-400">=&gt;</span> {"{"}</p>
                                <p className="pl-4"><span className="text-pink-400">await</span> ai.optimize({"{"}</p>
                                <p className="pl-8"><span className="text-cyan-400">efficiency</span>: <span className="text-green-400">"100%"</span>,</p>
                                <p className="pl-8"><span className="text-cyan-400">cost</span>: <span className="text-green-400">"minimized"</span></p>
                                <p className="pl-4">{"});"}</p>
                                <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-green-400">"growth"</span>;</p>
                                <p>{"}"}</p>
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
