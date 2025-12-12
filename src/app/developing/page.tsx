"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    CheckCircle,
    ArrowRight,
    Sparkles,
    Headphones,
    Cog,
    RefreshCw,
    FileSearch,
    Plug,
    Rocket,
} from "lucide-react";
import NextImage from "next/image";
import { GlassCard } from "react-glass-ui";
import { MetallicPillButton } from "@/components/ui/MetallicPillButton";
import { GlowBadge } from "@/components/ui/GlowBadge";

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
        exploreLink: "/developing/ai-agents",
        accentColor: "purple",
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
        accentColor: "cyan",
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
        accentColor: "orange",
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
        accentColor: "emerald",
    },
];

const useCases = [
    {
        icon: Headphones,
        title: "Customer Service",
        description: "Respond instantly, 24/7",
    },
    {
        icon: Cog,
        title: "Operations",
        description: "Eliminate manual data entry",
    },
    {
        icon: RefreshCw,
        title: "Data Sync",
        description: "No more copy-pasting",
    },
    {
        icon: FileSearch,
        title: "Processing",
        description: "Analyze thousands of docs",
    },
    {
        icon: Plug,
        title: "Connectivity",
        description: "Unified tech ecosystem",
    },
    {
        icon: Rocket,
        title: "Development",
        description: "Faster time to market",
    },
];

export default function DevelopingPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

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
                        <GlowBadge icon={<Sparkles className="w-4 h-4 text-purple-600" strokeWidth={1.5} />}>
                            <span className="text-purple-600">Build / Develop</span>
                        </GlowBadge>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6">
                        Build Smarter.{" "}
                        <span className="gradient-text">Develop Faster.</span>
                    </h1>
                    <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
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
                        >
                            <GlassCard
                                blur={12}
                                borderRadius={24}
                                borderOpacity={0}
                                backgroundColor="#ffffff"
                                backgroundOpacity={0.4}
                                onHoverScale={1.02}
                                className={`p-6 sm:p-8 flex flex-col items-center text-center h-full border shadow-sm ring-1 ring-${service.accentColor}-500/20 border-${service.accentColor}-200/50 hover:ring-${service.accentColor}-500/50 transition-all duration-300`}
                            >


                                {/* Icon / Image */}
                                <div className="mb-6 flex justify-center w-full">
                                    {service.isImage ? (
                                        <div className="relative animate-[float_3s_ease-in-out_infinite]">
                                            <NextImage
                                                src={service.icon as string}
                                                alt={service.title}
                                                width={120}
                                                height={120}
                                                className="w-24 h-24 object-contain mx-auto"
                                            />
                                        </div>
                                    ) : (
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${service.gradient} shadow-lg text-zinc-900 mx-auto`}>
                                            {/* @ts-ignore */}
                                            <service.icon className="w-7 h-7" />
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-2xl font-bold text-zinc-900 mb-2">
                                    {service.title}
                                </h3>
                                <p className="text-purple-600 font-medium mb-4">{service.tagline}</p>
                                <p className="text-zinc-600 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Features */}
                                <div className="w-full flex justify-center mb-8">
                                    <ul className="space-y-3 text-left inline-block max-w-full">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 text-zinc-500 text-sm sm:text-base">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="break-words">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Price & CTA */}
                                <div className="mt-auto space-y-3">
                                    {service.exploreLink ? (
                                        <Link href={service.exploreLink}>
                                            <MetallicPillButton size="sm">
                                                Explore
                                            </MetallicPillButton>
                                        </Link>
                                    ) : (
                                        <Link href="/start-project">
                                            <MetallicPillButton size="sm">
                                                Get Started
                                            </MetallicPillButton>
                                        </Link>
                                    )}
                                </div>
                            </GlassCard>
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
                        <h2 className="text-3xl font-bold text-zinc-900 mb-4">
                            Powering the <span className="gradient-text">Future of Work</span>
                        </h2>
                        <p className="text-zinc-600 max-w-2xl mx-auto">
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
                            >
                                <GlassCard
                                    blur={12}
                                    borderRadius={16}
                                    borderOpacity={0}
                                    backgroundColor="#ffffff"
                                    backgroundOpacity={0.4}
                                    onHoverScale={1.05}
                                    className="p-4 text-center h-full border border-zinc-200 shadow-sm"
                                >
                                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mx-auto mb-3">
                                        <useCase.icon className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h4 className="font-medium text-zinc-900 mb-1">{useCase.title}</h4>
                                    <p className="text-sm text-zinc-500">{useCase.description}</p>
                                </GlassCard>
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
                    <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                        Ready to Automate?
                    </h2>
                    <p className="text-zinc-600 mb-8">
                        Let's build the systems that build your business.
                    </p>
                    <Link href="/start-project">
                        <MetallicPillButton>
                            Start Your Project
                        </MetallicPillButton>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
