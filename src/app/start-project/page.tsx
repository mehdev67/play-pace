"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    Rocket,
    Building2,
    Mail,
    Phone,
    User,
    Briefcase,
    DollarSign,
    Calendar,
    ArrowRight,
    Loader2,
    CheckCircle,
    Sparkles,
} from "lucide-react";

export default function StartProjectPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        timeline: "",
        description: "",
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
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send email');

            // Success
            setIsSubmitting(false);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);

            // Fallback to mailto
            const subject = `Project Inquiry: ${formData.projectType}`;
            const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AICompany: ${formData.company}%0D%0ADescription: ${formData.description}`;
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
            <div className="min-h-screen pt-32 pb-20 flex items-center justify-center">
                
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
                        <CheckCircle className="w-12 h-12 text-green-400" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl font-bold text-white mb-4"
                    >
                        Project Request Received! 🚀
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg text-zinc-400 mb-8"
                    >
                        Thank you for choosing PlayPace! We'll review your project details and get
                        back to you within 24 hours at{" "}
                        <span className="text-white font-medium">{formData.email}</span>
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <Link href="/" className="btn-gradient inline-flex">
                            <span className="flex items-center gap-2">
                                Back to Home
                                <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-32 pb-20">
            

            <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                        <Rocket className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-400 font-medium">
                            Start Your Project
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Let's Build Your{" "}
                        <span className="gradient-text">Next Big Thing</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        Fill out the form below and we'll get back to you within 24 hours with a
                        detailed proposal and timeline.
                    </p>
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="glass-card p-8 lg:p-12"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Info */}
                        <div className="space-y-6">
                            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                <User className="w-5 h-5 text-purple-400" />
                                Your Information
                            </h2>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@company.com"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+46 70 123 4567"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company AB"
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-6 pt-6 border-t border-white/10">
                            <h2 className="text-xl font-semibold text-white flex items-center gap-2">
                                <Briefcase className="w-5 h-5 text-purple-400" />
                                Project Details
                            </h2>

                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-2">
                                    What type of project? *
                                </label>
                                <select
                                    name="projectType"
                                    value={formData.projectType}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all appearance-none cursor-pointer"
                                    required
                                >
                                    <option value="" className="bg-zinc-900">
                                        Select project type...
                                    </option>
                                    <option value="ai-agent" className="bg-zinc-900">
                                        AI Agent / Automation
                                    </option>
                                    <option value="web-app" className="bg-zinc-900">
                                        Web Application
                                    </option>
                                    <option value="mobile-app" className="bg-zinc-900">
                                        Mobile App
                                    </option>
                                    <option value="styleguide" className="bg-zinc-900">
                                        Styleguide & Brand Design
                                    </option>
                                    <option value="illustration" className="bg-zinc-900">
                                        Illustration & Graphics
                                    </option>
                                    <option value="research" className="bg-zinc-900">
                                        Business Research
                                    </option>
                                    <option value="other" className="bg-zinc-900">
                                        Other / Not Sure
                                    </option>
                                </select>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                                        Budget Range *
                                    </label>
                                    <select
                                        name="budget"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="" className="bg-zinc-900">
                                            Select budget...
                                        </option>
                                        <option value="< 10k SEK" className="bg-zinc-900">
                                            &lt; 10,000 SEK
                                        </option>
                                        <option value="10k-50k SEK" className="bg-zinc-900">
                                            10,000 - 50,000 SEK
                                        </option>
                                        <option value="50k-100k SEK" className="bg-zinc-900">
                                            50,000 - 100,000 SEK
                                        </option>
                                        <option value="100k-250k SEK" className="bg-zinc-900">
                                            100,000 - 250,000 SEK
                                        </option>
                                        <option value="> 250k SEK" className="bg-zinc-900">
                                            &gt; 250,000 SEK
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-zinc-300 mb-2">
                                        Timeline *
                                    </label>
                                    <select
                                        name="timeline"
                                        value={formData.timeline}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="" className="bg-zinc-900">
                                            Select timeline...
                                        </option>
                                        <option value="urgent" className="bg-zinc-900">
                                            ASAP (1-2 weeks)
                                        </option>
                                        <option value="1-month" className="bg-zinc-900">
                                            1 Month
                                        </option>
                                        <option value="2-3-months" className="bg-zinc-900">
                                            2-3 Months
                                        </option>
                                        <option value="flexible" className="bg-zinc-900">
                                            Flexible
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-zinc-300 mb-2">
                                    Project Description *
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    placeholder="Tell us about your project goals, requirements, and any specific features you need..."
                                    rows={6}
                                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-zinc-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition-all resize-none"
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
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Rocket className="w-5 h-5" />
                                        Start Your Project
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </span>
                        </button>

                        <p className="text-center text-sm text-zinc-500">
                            We'll review your request and get back to you within 24 hours
                        </p>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
