"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    CheckCircle,
    ArrowRight,
    Sparkles,
    Bot,
    Workflow,
    Database,
    Cpu,
    Zap,
    Code,
    Network,
} from "lucide-react";
import NextImage from "next/image";

const services = [
    {
        id: "ai-agents",
        icon: "/icons/brain.png",
        title: "AI Agents",
        tagline: "Your digital workforce",
        description:
            "Stop wasting hours on manual tasks. We build intelligent AI agents that handle customer support, data entry, and scheduling automatically.",
        features: [
            "24/7 Customer Support",
            "Automated Data Entry",
            "Smart Scheduling",
            "Lead Qualification",
            "Inbox Management",
            "Custom Workflows",
        ],

        gradient: "from-purple-500 to-pink-500",
        popular: true,
        isImage: true,
    },
    {
        id: "ai-software",
        icon: "/icons/vertex-ai.png",
        title: "AI Software",
        tagline: "Systems that think",
        description:
            "Is your software dumb? We infuse it with intelligence. Capabilities from computer vision to natural language processing.",
        features: [
            "Predictive Analytics",
            "Content Generation",
            "Voice Synthesis",
            "Computer Vision",
            "Sentiment Analysis",
            "Custom Models",
        ],
        gradient: "from-blue-500 to-cyan-500",
        popular: false,
        isImage: true,
    },
    {
        id: "automation",
        icon: "/icons/automation.png",
        title: "Automation",
        tagline: "Workflows on autopilot",
        description:
            "Eliminate manual bottlenecks. We build robust automation pipelines that handle complex business logic without human intervention.",
        features: [
            "Process Automation",
            "Document Analysis",
            "Data Extraction",
            "Error Handling",
            "Scheduled Jobs",
            "Multi-step Workflows",
        ],
        gradient: "from-orange-500 to-red-500",
        popular: false,
        isImage: true,
    },
    {
        id: "api-bridges",
        icon: "/icons/google-cloud.png",
        title: "API Bridges & Integrations",
        tagline: "Connect everything",
        description:
            "Your tools shouldn't live in silos. We build robust API bridges that make your CRM, ERP, and custom apps talk to each other seamlessly.",
        features: [
            "CRM Integrations",
            "Payment Gateways",
            "Legacy System wrappers",
            "Real-time Data Sync",
            "Webhook Handlers",
            "Secure Auth Flows",
        ],

        gradient: "from-green-500 to-emerald-500",
        popular: false,
        isImage: true,
    },
];

const useCases = [
    {
        icon: Bot,
        title: "Customer Service",
        description: "Respond instantly, 24/7",
    },
    {
        icon: Workflow,
        title: "Operations",
        description: "Eliminate manual data entry",
    },
    {
        icon: Database,
        title: "Data Sync",
        description: "No more copy-pasting",
    },
    {
        icon: Cpu,
        title: "Processing",
        description: "Analyze thousands of docs",
    },
    {
        icon: Network,
        title: "Connectivity",
        description: "Unified tech ecosystem",
    },
    {
        icon: Code,
        title: "Development",
        description: "Faster time to market",
    },
];

export default function DevelopingPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="min-h-screen pt-32 pb-20">
            <div className="aurora-bg" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                        <Sparkles className="w-4 h-4 text-purple-400" />
                        <span className="text-sm text-purple-400 font-medium">
                            Build / Develop
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Stop Building.{" "}
                        <span className="gradient-text">Start Automating.</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
                        Your talented team is wasting time on robot work. We build the AI infrastructure that frees them to do what they do best.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <div ref={ref} className="grid lg:grid-cols-3 gap-8 mb-24">
                    {services.map((service, i) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className={`relative glass-card p-8 ${service.popular ? "ring-2 ring-purple-500/50" : ""}`}
                        >
                            {service.popular && (
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Icon */}
                            <div className="inline-flex p-4 rounded-2xl mb-6 relative">
                                <NextImage
                                    src={service.icon}
                                    alt={service.title}
                                    width={96}
                                    height={96}
                                    className="w-20 h-20 drop-shadow-2xl hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-white mb-2">
                                {service.title}
                            </h3>
                            <p className="text-purple-400 font-medium mb-4">{service.tagline}</p>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-zinc-300">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Price & CTA */}
                            <div className="mt-auto">

                                <Link
                                    href="/start-project"
                                    className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium transition-all ${service.popular
                                        ? "btn-gradient"
                                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10"
                                        }`}
                                >
                                    <span>Get Started</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Use Cases Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 }}
                    className="mb-24"
                >
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Powering the <span className="gradient-text">Future of Work</span>
                        </h2>
                        <p className="text-zinc-400 max-w-2xl mx-auto">
                            Scalable solutions for businesses ready to grow.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {useCases.map((useCase, i) => (
                            <motion.div
                                key={useCase.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.5 + i * 0.05 }}
                                className="glass-card p-4 text-center group hover:bg-white/10"
                            >
                                <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-3 group-hover:bg-purple-500/30 transition-colors">
                                    <useCase.icon className="w-6 h-6 text-purple-400" />
                                </div>
                                <h4 className="font-medium text-white mb-1">{useCase.title}</h4>
                                <p className="text-sm text-zinc-500">{useCase.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-16 text-center"
                >
                    <h2 className="text-2xl font-bold text-white mb-4">
                        Ready to Automate?
                    </h2>
                    <p className="text-zinc-400 mb-8">
                        Let's build the systems that build your business.
                    </p>
                    <Link href="/start-project" className="btn-gradient inline-flex">
                        <span className="flex items-center gap-2">
                            Start Your Project
                            <ArrowRight className="w-4 h-4" />
                        </span>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
