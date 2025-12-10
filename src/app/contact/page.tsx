"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, ArrowRight, Loader2 } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="aurora-bg" />

            <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Let's Build{" "}
                        <span className="gradient-text">Something Great</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Have a project in mind? We'd love to hear from you.
                        Send us a message and we'll get back to you within 24 hours.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="lg:col-span-2 space-y-6"
                    >
                        <div className="glass-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-purple-500/20">
                                    <Mail className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Email</h3>
                                    <a
                                        href="mailto:contact@playpace.net"
                                        className="text-zinc-400 hover:text-white transition-colors"
                                    >
                                        contact@playpace.net
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-pink-500/20">
                                    <Phone className="w-6 h-6 text-pink-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Phone</h3>
                                    <a
                                        href="tel:+46852512799"
                                        className="text-zinc-400 hover:text-white transition-colors"
                                    >
                                        +46 8 525 127 99
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-cyan-500/20">
                                    <MapPin className="w-6 h-6 text-cyan-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Location</h3>
                                    <p className="text-zinc-400">Stockholm, Sweden</p>
                                </div>
                            </div>
                        </div>

                        <div className="glass-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl bg-green-500/20">
                                    <Clock className="w-6 h-6 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-white font-medium mb-1">Response Time</h3>
                                    <p className="text-zinc-400">Within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="lg:col-span-3"
                    >
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="glass-card p-12 text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-6">
                                    <MessageSquare className="w-10 h-10 text-green-400" />
                                </div>
                                <h2 className="text-2xl font-bold text-white mb-4">
                                    Message Sent!
                                </h2>
                                <p className="text-zinc-400">
                                    Thank you for reaching out. We'll get back to you within 24 hours.
                                </p>
                            </motion.div>
                        ) : (
                            <div className="glass-card p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-300 mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-zinc-300 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                placeholder="you@company.com"
                                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-zinc-300 mb-2">
                                            Subject
                                        </label>
                                        <select
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all appearance-none cursor-pointer"
                                            required
                                        >
                                            <option value="" className="bg-zinc-900">Select a topic...</option>
                                            <option value="project" className="bg-zinc-900">New Project Inquiry</option>
                                            <option value="ai" className="bg-zinc-900">AI / Automation Solution</option>
                                            <option value="consultation" className="bg-zinc-900">Consultation Request</option>
                                            <option value="partnership" className="bg-zinc-900">Partnership Opportunity</option>
                                            <option value="other" className="bg-zinc-900">Other</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-zinc-300 mb-2">
                                            Message
                                        </label>
                                        <textarea
                                            placeholder="Tell us about your project..."
                                            rows={6}
                                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                                            required
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-gradient w-full !py-4 disabled:opacity-50 group"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            {isSubmitting ? (
                                                <>
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                <>
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </span>
                                    </button>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
