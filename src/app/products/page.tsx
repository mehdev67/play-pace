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

const products = [
    {
        id: "receptionista",
        icon: "/icons/receptionista.png",
        title: "Receptionista",
        tagline: "AI-Powered Receptionist",
        description:
            "Your always on AI receptionist that revolutionizes how you handle customer interactions. Gia answers calls, schedules appointments, and responds to inquiries with human like precision day or night.",
        features: [
            "24/7 availability",
            "Natural conversation",
            "Calendar integration",
            "Multilingual support",
            "Customizable voice",
            "Detailed analytics",
        ],

        gradient: "from-cyan-500 to-blue-500",
        popular: true,
        textColor: "text-cyan-600",
        borderColor: "border-cyan-200/50",
        ringColor: "ring-cyan-500/20 hover:ring-cyan-500/50",
        btnBorder: "border-cyan-500/30",
    },
    {
        id: "notario",
        icon: "/icons/Notario2.0.png",
        title: "Notario",
        tagline: "AI for Email & SMS",
        description:
            "Your dedicated AI assistant that handles email and SMS communication around the clock. Notario automates responses, manages customer inquiries, and keeps conversations flowing any time of day or night.",
        features: [
            "24/7 email management",
            "Smart auto replies",
            "SMS integration add on",
            "Natural conversation flow",
            "Multilingual support",
            "Detailed analytics",
        ],

        gradient: "from-purple-500 to-pink-500",
        popular: false,
        textColor: "text-purple-600",
        borderColor: "border-purple-200/50",
        ringColor: "ring-purple-500/20 hover:ring-purple-500/50",
        btnBorder: "border-purple-500/30",
    },
    {
        id: "clientscreen",
        icon: "/icons/ClientScreen.png",
        title: "ClientScreen",
        tagline: "AI Driven Client Onboarding",
        description:
            "A complete end to end system that transforms how you bring clients onboard. ClientScreen manages the entire journey from lead arrival to signed contract and invoice all running seamlessly in the background.",
        features: [
            "Automatic lead capture",
            "AI powered qualification",
            "Auto generated quotes",
            "E signature integration",
            "Automated invoicing",
            "Native CRM integrations",
        ],

        gradient: "from-emerald-500 to-teal-500",
        popular: false,
        textColor: "text-emerald-600",
        borderColor: "border-emerald-200/50",
        ringColor: "ring-emerald-500/20 hover:ring-emerald-500/50",
        btnBorder: "border-emerald-500/30",
    },
];

export default function ProductsPage() {
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/5 border border-blue-600/10 backdrop-blur-md mb-6 transition-all duration-300 hover:scale-105 hover:bg-blue-600/10 hover:border-blue-600/40 hover:shadow-[0_0_20px_-3px_rgba(37,99,235,0.5)]">
                        <Sparkles className="w-4 h-4 text-blue-600" strokeWidth={1.5} />
                        <span className="text-sm font-medium text-blue-600">
                            AI Products
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6">
                        Ready-to-use{" "}
                        <span className="gradient-text">AI Solutions</span>
                    </h1>
                    <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                        Our products are ready to deploy right away. Powerful AI tools
                        that automate and streamline your business operations.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <div ref={ref} className="grid lg:grid-cols-3 gap-8 mb-24 mt-16">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            className="relative pt-16"
                        >
                            {/* Floating Icon - Outside the card */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                                <div className="animate-[float_3s_ease-in-out_infinite] -translate-y-16 hover:-translate-y-20 hover:scale-110 transition-all duration-500 ease-out">
                                    <NextImage
                                        src={product.icon}
                                        alt={product.title}
                                        width={160}
                                        height={160}
                                        className="w-32 h-32 object-contain hover:scale-125 transition-all duration-500 drop-shadow-2xl"
                                    />
                                </div>
                            </div>

                            <GlassCard
                                blur={12}
                                borderRadius={24}
                                borderOpacity={0}
                                backgroundColor="#ffffff"
                                backgroundOpacity={0.4}
                                onHoverScale={1.02}
                                className={`p-6 sm:p-8 pt-20 flex flex-col items-center text-center h-full border shadow-sm ring-1 ${product.ringColor} ${product.borderColor} transition-all duration-300`}
                            >

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-zinc-900 mb-2 flex items-center justify-center gap-3">
                                    {product.title}
                                </h3>
                                <p className={`${product.textColor} font-medium mb-4`}>{product.tagline}</p>
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
                                        className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium transition-all text-zinc-900 shadow-lg bg-white/20 backdrop-blur-md border ${product.btnBorder} hover:shadow-xl hover:scale-[1.02]`}
                                    >
                                        <span>Get Started</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>



                {/* CTA with LiquidGlassCard */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-16 flex flex-col items-center"
                >
                    <h2 className="text-2xl font-bold text-zinc-900 mb-8 text-center">
                        Need a Custom AI Solution?
                    </h2>
                    <GlassCard
                        width={400}
                        blur={8}
                        distortion={15}
                        borderRadius={20}
                        borderOpacity={0}
                        backgroundColor="#ffffff"
                        backgroundOpacity={0.4}
                        innerLightBlur={20}
                        innerLightColor="#6effc5"
                        onHoverScale={1.02}
                        flexibility={0.5}
                        className="p-8 text-center border shadow-sm ring-1 ring-purple-500/20 border-purple-200/50 hover:ring-purple-500/50 transition-all duration-300"
                    >
                        <span className="text-sm text-purple-600 font-medium mb-2 block">Enterprise</span>
                        <h3 className="text-2xl font-bold text-zinc-900 mb-4">Custom AI Development</h3>
                        <p className="text-zinc-600 mb-6">
                            Let's build something tailored to your needs. Our team specializes in creating bespoke AI solutions that scale with your business.
                        </p>
                        <Link href="/start-project" className="btn-gradient inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all">
                            Start Your Project <ArrowRight className="w-4 h-4" />
                        </Link>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
