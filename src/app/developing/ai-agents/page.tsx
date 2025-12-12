"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Bot,
    Sparkles,
    ArrowRight,
    Headphones,
    FileSearch,
    Calendar,
    Mail,
    TrendingUp,
    ShieldCheck,
} from "lucide-react";
import { MetallicPillButton } from "@/components/ui/MetallicPillButton";
import { GlowBadge } from "@/components/ui/GlowBadge";

const agents = [
    {
        id: "support-agent",
        name: "Support Agent",
        tagline: "24/7 customer service, zero wait time",
        description:
            "An AI agent that handles customer inquiries, resolves issues, and escalates complex cases to the right person. Continuously learns from every interaction.",
        painPoint: "Customers wait too long for responses",
        solution: "Responds within seconds, around the clock",
        color: "#6effc5",
        icon: Headphones,
        features: [
            "Multilingual support",
            "Automatic ticket handling",
            "Seamless escalation",
            "Sentiment analysis",
        ],
    },
    {
        id: "document-agent",
        name: "Document Agent",
        tagline: "Automatic document processing",
        description:
            "Analyzes, categorizes, and extracts data from documents. Perfect for invoices, contracts, and reports.",
        painPoint: "Manual document handling takes too much time",
        solution: "Processes 100+ documents per minute",
        color: "#8656ff",
        icon: FileSearch,
        features: [
            "OCR & text extraction",
            "Auto-categorization",
            "Data extraction",
            "System integration",
        ],
    },
    {
        id: "scheduling-agent",
        name: "Scheduling Agent",
        tagline: "Smart calendar management",
        description:
            "Books meetings, handles rescheduling, and optimizes team schedules automatically based on priorities.",
        painPoint: "Booking and scheduling is chaos",
        solution: "Automatic optimization of all calendars",
        color: "#ff5145",
        icon: Calendar,
        features: [
            "Auto-booking",
            "Timezone handling",
            "Conflict resolution",
            "Reminders",
        ],
    },
    {
        id: "email-agent",
        name: "Email Agent",
        tagline: "Never miss an important email again",
        description:
            "Sorts, prioritizes, and responds to emails. Can handle routine inquiries autonomously and flags important messages.",
        painPoint: "Inbox is overflowing",
        solution: "90% of emails handled automatically",
        color: "#1700f7",
        icon: Mail,
        features: [
            "Smart prioritization",
            "Auto-responses",
            "Spam filtering",
            "Summaries",
        ],
    },
    {
        id: "sales-agent",
        name: "Sales Agent",
        tagline: "Qualify leads while you sleep",
        description:
            "Engages potential customers, qualifies leads, and books meetings with the sales team. Works around the clock.",
        painPoint: "Leads fall through the cracks",
        solution: "Follows up on every lead within minutes",
        color: "#6effc5",
        icon: TrendingUp,
        features: [
            "Lead qualification",
            "Automatic follow-up",
            "CRM integration",
            "Conversion analytics",
        ],
    },
    {
        id: "compliance-agent",
        name: "Compliance Agent",
        tagline: "Regulatory compliance on autopilot",
        description:
            "Monitors processes, flags risks, and ensures you follow industry regulations and internal policies.",
        painPoint: "Hard to keep track of compliance",
        solution: "Continuous monitoring and reporting",
        color: "#8656ff",
        icon: ShieldCheck,
        features: [
            "Risk identification",
            "Policy verification",
            "Automated reports",
            "Audit trails",
        ],
    },
];

export default function AIAgentsPage() {
    return (
        <div className="min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20">


            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="mb-6">
                        <GlowBadge icon={<Bot className="w-4 h-4 text-[#6effc5]" />}>
                            <span className="text-[#6effc5]">AI Agents</span>
                        </GlowBadge>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6">
                        Intelligent agents that{" "}
                        <span className="gradient-text">work for you</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        Our AI agents solve real business problems. They work around the
                        clock, learn continuously, and integrate seamlessly with your existing systems.
                    </p>
                </motion.div>

                {/* Agents Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {agents.map((agent, index) => (
                        <motion.div
                            key={agent.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div
                                className="h-full rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
                                style={{
                                    boxShadow: `0 0 40px -20px ${agent.color}20`,
                                }}
                            >
                                {/* Icon */}
                                <div className="relative mb-6 group/icon">
                                    {/* Floating animation wrapper */}
                                    <div
                                        className="relative w-16 h-16 rounded-2xl flex items-center justify-center animate-[float_3s_ease-in-out_infinite] transition-transform duration-300 group-hover:scale-110"
                                        style={{ backgroundColor: `${agent.color}20` }}
                                    >
                                        <agent.icon
                                            className="w-8 h-8"
                                            style={{ color: agent.color }}
                                            strokeWidth={1.5}
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-zinc-900 mb-1">
                                    {agent.name}
                                </h3>
                                <p
                                    className="text-sm font-medium mb-3"
                                    style={{ color: agent.color }}
                                >
                                    {agent.tagline}
                                </p>
                                <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
                                    {agent.description}
                                </p>

                                {/* Pain Point & Solution */}
                                <div className="space-y-2 mb-4">
                                    <div className="flex items-start gap-2">
                                        <span className="text-red-400 text-xs mt-0.5">✕</span>
                                        <span className="text-xs text-zinc-500">
                                            {agent.painPoint}
                                        </span>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <span className="text-green-400 text-xs mt-0.5">✓</span>
                                        <span className="text-xs text-zinc-400">
                                            {agent.solution}
                                        </span>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="flex flex-wrap gap-2">
                                    {agent.features.map((feature, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs rounded-full bg-white/5 text-zinc-400 border border-white/5"
                                        >
                                            {feature}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-block p-8 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                        <Sparkles className="w-8 h-8 text-[#8656ff] mx-auto mb-4" strokeWidth={1.5} />
                        <h2 className="text-2xl font-bold text-zinc-900 mb-2">
                            Ready to automate?
                        </h2>
                        <p className="text-zinc-400 mb-6 max-w-md">
                            Tell us about your challenges and we&apos;ll design a custom AI agent
                            to solve them.
                        </p>
                        <Link href="/start-project">
                            <MetallicPillButton>
                                Start Project
                            </MetallicPillButton>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
