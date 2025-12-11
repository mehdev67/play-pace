"use client";

import { motion } from "framer-motion";
import { Sparkles, Linkedin, Twitter, Mail } from "lucide-react";
import { GlassCard } from "react-glass-ui";

const team = [
    {
        name: "Mehdi",
        role: "Founder & CEO",
        bio: "Visionary leader with a passion for AI and automation. Building the future, one line of code at a time.",
        image: null, // Will use gradient placeholder
        gradient: "from-purple-500 to-pink-500",
        links: {
            linkedin: "#",
            twitter: "#",
            email: "mehdi@playpace.net",
        },
    },
    {
        name: "AI Team",
        role: "Machine Learning Engineers",
        bio: "Our world-class AI engineers build intelligent systems that learn, adapt, and deliver results.",
        image: null,
        gradient: "from-cyan-500 to-blue-500",
        links: {
            linkedin: "#",
            twitter: "#",
            email: "ai@playpace.net",
        },
    },
    {
        name: "Dev Team",
        role: "Full-Stack Developers",
        bio: "From React to Python, our developers craft beautiful, performant applications that scale.",
        image: null,
        gradient: "from-green-500 to-cyan-500",
        links: {
            linkedin: "#",
            twitter: "#",
            email: "dev@playpace.net",
        },
    },
    {
        name: "Design Team",
        role: "UX/UI Designers",
        bio: "Creating intuitive, stunning interfaces that users love and businesses trust.",
        image: null,
        gradient: "from-orange-500 to-pink-500",
        links: {
            linkedin: "#",
            twitter: "#",
            email: "design@playpace.net",
        },
    },
];

export default function TeamPage() {
    return (
        <div className="min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20">


            <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-purple-400" strokeWidth={1.5} />
                        <span className="text-sm text-purple-400 font-medium">Team PlayPace</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6">
                        Meet the{" "}
                        <span className="gradient-text">Humans</span> Behind the Magic
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
                        We're a team of engineers, designers, and AI enthusiasts
                        building the future of software in Sweden.
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-24">
                    {team.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <GlassCard
                                blur={12}
                                borderRadius={24}
                                borderOpacity={0.15}
                                backgroundColor="#ffffff"
                                backgroundOpacity={0.03}
                                onHoverScale={1.01}
                                className="p-8 h-full"
                            >
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                                    {/* Avatar */}
                                    <div className="relative flex-shrink-0">
                                        <div
                                            className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-3xl font-bold text-white`}
                                        >
                                            {member.name.charAt(0)}
                                        </div>
                                        <div
                                            className={`absolute -inset-2 rounded-3xl bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity`}
                                        />
                                    </div>

                                    {/* Info */}
                                    <div className="text-center sm:text-left">
                                        <h3 className="text-2xl font-bold text-zinc-900 mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-purple-400 font-medium mb-3">{member.role}</p>
                                        <p className="text-zinc-400 leading-relaxed mb-4">{member.bio}</p>

                                        {/* Social Links */}
                                        <div className="flex items-center justify-center sm:justify-start gap-3">
                                            <a
                                                href={member.links.linkedin}
                                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-blue-500/50 transition-all"
                                            >
                                                <Linkedin className="w-4 h-4" />
                                            </a>
                                            <a
                                                href={member.links.twitter}
                                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all"
                                            >
                                                <Twitter className="w-4 h-4" />
                                            </a>
                                            <a
                                                href={`mailto:${member.links.email}`}
                                                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 hover:border-purple-500/50 transition-all"
                                            >
                                                <Mail className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>

                {/* Join CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <GlassCard
                        blur={12}
                        borderRadius={24}
                        borderOpacity={0.15}
                        backgroundColor="#ffffff"
                        backgroundOpacity={0.03}
                        className="p-12 text-center"
                    >
                        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
                            Want to Join the Team?
                        </h2>
                        <p className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto">
                            We're always looking for talented engineers, designers, and AI enthusiasts.
                            If you're passionate about building the future, we want to hear from you.
                        </p>
                        <a
                            href="mailto:careers@playpace.net"
                            className="btn-gradient inline-flex"
                        >
                            <span>Get in Touch</span>
                        </a>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
