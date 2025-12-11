"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Mail,
    Phone,
    User,
    MessageSquare,
    ArrowRight,
    Loader2,
    CheckCircle,
    Sparkles,
    Send,
} from "lucide-react";
import { GlassCard } from "react-glass-ui";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    projectType: `Contact: ${formData.subject}`,
                    description: formData.message,
                }),
            });

            if (!response.ok) throw new Error('Failed to send email');

            setIsSubmitting(false);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);

            // Fallback to mailto
            const subject = `Contact: ${formData.subject}`;
            const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
            window.location.href = `mailto:mehdi@playpace.dev?subject=${encodeURIComponent(subject)}&body=${body}`;

            setIsSubmitting(false);
            setIsSubmitted(true);
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20 flex items-center justify-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative max-w-2xl mx-auto px-6 text-center"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
                        className="w-24 h-24 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mx-auto mb-8"
                    >
                        <CheckCircle className="w-12 h-12 text-green-400" strokeWidth={1.5} />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl font-bold text-zinc-900 mb-4"
                    >
                        Message Sent! 📬
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-zinc-400 mb-8"
                    >
                        Thanks for reaching out! We'll get back to you within 24 hours at{" "}
                        <span className="text-zinc-900 font-medium">{formData.email}</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link href="/" className="btn-gradient inline-flex">
                            <span className="flex items-center gap-2">
                                Back to Home
                                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                            </span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20">


            <div className="relative max-w-4xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/5 border border-purple-600/10 backdrop-blur-md mb-6 transition-all duration-300 hover:scale-105 hover:bg-purple-600/10 hover:border-purple-600/40 hover:shadow-[0_0_20px_-3px_rgba(147,51,234,0.5)]">
                        <MessageSquare className="w-4 h-4 text-purple-600" strokeWidth={1.5} />
                        <span className="text-sm font-medium text-purple-600">
                            Contact Us
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6">
                        Let's{" "}
                        <span className="gradient-text">Talk</span>
                    </h1>
                    <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
                        Have a question, want to collaborate, or just say hello?
                        We'd love to hear from you.
                    </p>
                </motion.div>

                {/* Quick Contact Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <a
                        href="tel:+4685251279"
                        className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white border border-zinc-200 hover:border-green-500/30 transition-all group w-full sm:w-auto justify-center shadow-sm hover:shadow-md"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Phone className="w-5 h-5 text-green-600" strokeWidth={1.5} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-zinc-500">Call us</p>
                            <p className="text-zinc-900 font-medium">+46 8 525 127 99</p>
                        </div>
                    </a>

                    <a
                        href="mailto:hello@playpace.dev"
                        className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white border border-zinc-200 hover:border-purple-600/30 transition-all group w-full sm:w-auto justify-center shadow-sm hover:shadow-md"
                    >
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Mail className="w-5 h-5 text-purple-600" strokeWidth={1.5} />
                        </div>
                        <div className="text-left">
                            <p className="text-xs text-zinc-500">Email us</p>
                            <p className="text-zinc-900 font-medium">hello@playpace.dev</p>
                        </div>
                    </a>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="max-w-2xl mx-auto"
                >
                    <GlassCard
                        blur={12}
                        borderRadius={24}
                        borderOpacity={0.15}
                        backgroundColor="#ffffff"
                        backgroundOpacity={0.03}
                        className="p-8 lg:p-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Personal Info */}
                            <div className="space-y-6">
                                <h2 className="text-xl font-semibold text-zinc-900 flex items-center gap-2">
                                    <User className="w-5 h-5 text-purple-600" strokeWidth={1.5} />
                                    Your Information
                                </h2>

                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-zinc-700 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+46 70 123 4567"
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div className="space-y-6 pt-6 border-t border-zinc-200">
                                <h2 className="text-xl font-semibold text-zinc-900 flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-purple-600" strokeWidth={1.5} />
                                    Your Message
                                </h2>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                                        Subject *
                                    </label>
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="" className="bg-white">
                                            What's this about?
                                        </option>
                                        <option value="General Inquiry" className="bg-white">
                                            General Inquiry
                                        </option>
                                        <option value="Partnership" className="bg-white">
                                            Partnership Opportunity
                                        </option>
                                        <option value="Support" className="bg-white">
                                            Support Request
                                        </option>
                                        <option value="Feedback" className="bg-white">
                                            Feedback
                                        </option>
                                        <option value="Other" className="bg-white">
                                            Other
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell us what's on your mind..."
                                        rows={5}
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-gradient w-full !py-4 disabled:opacity-50 group"
                            >
                                <span className="flex items-center justify-center gap-2">
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" strokeWidth={1.5} />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" strokeWidth={1.5} />
                                            Send Message
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                                        </>
                                    )}
                                </span>
                            </button>

                            <p className="text-center text-sm text-zinc-500">
                                We typically respond within 24 hours
                            </p>
                        </form>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
