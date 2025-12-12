"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    CheckCircle,
    ArrowRight,
    Sparkles,
} from "lucide-react";
import NextImage from "next/image";
import { GlassCard } from "react-glass-ui";
import { MetallicPillButton } from "@/components/ui/MetallicPillButton";
import { GlowBadge } from "@/components/ui/GlowBadge";
import OceanBackground from "@/components/OceanBackground";

const products = [
    {
        id: "icp-reports",
        icon: "/icons/icp.png",
        title: "ICP Reports",
        tagline: "Know Your Ideal Customer",
        description:
            "Finally understand exactly who your ideal customer is and where to find them.",
        features: [
            "Customer profiling",
            "Market segmentation",
            "Behavioral insights",
            "Target audience mapping",
            "Data-driven personas",
            "Actionable recommendations",
        ],
        gradient: "from-blue-500 to-indigo-500",
        popular: true,
        accentColor: "blue",
        buttonText: "Get Started",
    },
    {
        id: "inkassera",
        icon: "/icons/INKASSERA.png",
        title: "Inkassera",
        tagline: "Get Paid Faster",
        description:
            "Automated invoice management and collections that actually get you paid.",
        features: [
            "Automated reminders",
            "Payment tracking",
            "Collections workflow",
            "Invoice generation",
            "Cash flow insights",
            "Integration ready",
        ],
        gradient: "from-emerald-500 to-teal-500",
        popular: false,
        accentColor: "emerald",
        buttonText: "Demo",
    },
    {
        id: "market-validation",
        icon: "/icons/MARKET VALIDATION.png",
        title: "Market Validation",
        tagline: "Test Before You Invest",
        description:
            "Test your ideas before investing time and money in the wrong direction.",
        features: [
            "Idea testing",
            "Customer feedback",
            "Market demand analysis",
            "Risk assessment",
            "Pivot recommendations",
            "Go/no-go insights",
        ],
        gradient: "from-red-500 to-rose-500",
        popular: false,
        accentColor: "red",
        buttonText: "Get Started",
    },
    {
        id: "competitive-intelligence",
        icon: "/icons/COMPETATIVE.png",
        title: "Competitive Intelligence",
        tagline: "Stay Ahead of Rivals",
        description:
            "Know what your competitors are doing before they capture your market.",
        features: [
            "Competitor tracking",
            "Market positioning",
            "Pricing analysis",
            "Strategy insights",
            "Trend monitoring",
            "Alert notifications",
        ],
        gradient: "from-purple-500 to-pink-500",
        popular: false,
        accentColor: "purple",
        buttonText: "Get Started",
    },
];

export default function ForBusinessPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20">
            {/* Smokey central overlay */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 bg-white/20 rounded-full filter blur-2xl"></div>
            </div>
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="mb-6">
                        <GlowBadge icon={<Sparkles className="w-4 h-4 text-zinc-700" strokeWidth={1.5} />}>
                            <span className="text-zinc-700">For Business</span>
                        </GlowBadge>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-4">
                        <span className="gradient-text">Business Services</span>
                    </h1>
                    <p className="text-xl sm:text-2xl font-medium text-zinc-700 mb-4">
                        Stop guessing. Start growing with data-driven decisions.
                    </p>
                    <p className="text-lg text-zinc-500 max-w-3xl mx-auto">
                        For when you need clarity, cash flow, and competitive edge.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div ref={ref} className="grid lg:grid-cols-3 gap-8 mb-24">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
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
                                className={`p-6 sm:p-8 flex flex-col items-center text-center h-full border shadow-sm ring-1 ring-${product.accentColor}-500/20 border-${product.accentColor}-200/50 hover:ring-${product.accentColor}-500/50 transition-all duration-300`}
                            >


                                {/* Icon */}
                                <div className="relative mb-6 group/icon flex justify-center w-full">
                                    <div className="relative animate-[float_3s_ease-in-out_infinite]">
                                        <NextImage
                                            src={product.icon}
                                            alt={product.title}
                                            width={160}
                                            height={160}
                                            className="w-32 h-32 object-contain mx-auto hover:scale-110 transition-all duration-500"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-zinc-900 mb-2 flex items-center justify-center gap-3">
                                    {product.title}
                                </h3>
                                <p className="text-zinc-700 font-medium mb-4">{product.tagline}</p>
                                <p className="text-zinc-600 mb-6 leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Features */}
                                <div className="w-full flex justify-center mb-8">
                                    <ul className="space-y-3 text-left inline-block max-w-full">
                                        {product.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 text-zinc-500 text-sm sm:text-base">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span className="break-words">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Price & CTA */}
                                <div className="mt-auto">
                                    <Link
                                        href={`/products/${product.id}`}
                                        className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium transition-all text-zinc-900 shadow-lg bg-white/20 backdrop-blur-md border border-${product.accentColor}-500/30 hover:shadow-xl hover:scale-[1.02]`}
                                    >
                                        <span>{product.buttonText || "Get Started"}</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>



                {/* Simple CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-24 text-center max-w-2xl mx-auto"
                >
                    <span className="text-sm text-purple-600 font-semibold uppercase tracking-wider mb-3 block">
                        Enterprise
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
                        Need a Custom Solution?
                    </h2>
                    <p className="text-lg text-zinc-600 mb-8">
                        Let's build something tailored to your needs. Our team specializes in creating bespoke solutions that scale with your business.
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
