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
import { GlassCard as LiquidGlassCard, GlassButton } from "react-glass-ui";

const products = [
    {
        id: "receptionista",
        icon: "/icons/receptionista.png",
        title: "Receptionista",
        tagline: "AI-powered receptionist",
        description:
            "Automate your customer service with our intelligent AI receptionist. Takes calls, books meetings and answers questions - around the clock.",
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
    },
    {
        id: "notario",
        icon: "/icons/notario.png",
        title: "Notario",
        tagline: "Smart document AI",
        description:
            "Automate document review, signing and archiving. Notario uses AI to understand and organize your documents intelligently.",
        features: [
            "Auto categorization",
            "OCR scanning",
            "Digital signing",
            "Secure archiving",
            "Searchable database",
            "Compliance support",
        ],

        gradient: "from-purple-500 to-pink-500",
        popular: false,
    },
    {
        id: "clientscreen",
        icon: "/icons/clientscreen.png",
        title: "ClientScreen",
        tagline: "AI-driven client onboarding",
        description:
            "Automated onboarding and client management system. From lead capture to signed contracts and invoices – completely hands-off.",
        features: [
            "Auto lead capture",
            "AI qualification",
            "Auto quotes & proposals",
            "E-sign integration",
            "Auto invoicing",
            "CRM integrations",
        ],

        gradient: "from-emerald-500 to-teal-500",
        popular: false,
    },
];

export default function ProductsPage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <div className="min-h-screen pt-32 pb-20">
            

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#1700f7]/5 border border-[#6effc5]/20 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(110,255,197,0.3)] mb-6 transition-all duration-300 hover:scale-105 hover:bg-[#1700f7]/10 hover:border-[#6effc5]/40 hover:shadow-[0_0_20px_-3px_rgba(110,255,197,0.5)]">
                        <Sparkles className="w-4 h-4 text-[#6effc5]" strokeWidth={1.5} />
                        <span className="text-sm font-medium text-[#6effc5]">
                            AI Products
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Ready-to-use{" "}
                        <span className="gradient-text">AI Solutions</span>
                    </h1>
                    <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
                        Our products are ready to deploy right away. Powerful AI tools
                        that automate and streamline your business operations.
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
                            className={`relative glass-card p-8 ${product.popular ? "ring-2 ring-cyan-500/50" : ""}`}
                        >
                            {product.popular && (
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            {/* Icon */}
                            <div className="relative mb-8 group/icon">
                                {/* Floating animation wrapper */}
                                <div className="relative animate-[float_3s_ease-in-out_infinite]">
                                    <NextImage
                                        src={product.icon}
                                        alt={product.title}
                                        width={160}
                                        height={160}
                                        className="w-32 h-32 hover:scale-110 transition-all duration-500"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                                {product.title}
                                {product.id === "receptionista" && (
                                    <span
                                        className="px-4 py-1.5 rounded-full bg-gradient-to-r from-[#ff5145]/20 to-[#8656ff]/20 border border-[#ff5145]/40 text-[#ff5145] text-2xl shadow-[0_0_20px_rgba(255,81,69,0.4)] animate-pulse"
                                        style={{ fontFamily: 'var(--font-great-vibes)' }}
                                    >
                                        G<span className="text-lg">ia</span>
                                    </span>
                                )}
                            </h3>
                            <p className="text-cyan-400 font-medium mb-4">{product.tagline}</p>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                {product.description}
                            </p>

                            {/* Features */}
                            <ul className="space-y-3 mb-8">
                                {product.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-zinc-300">
                                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            {/* Price & CTA */}
                            <div className="mt-auto">

                                <Link
                                    href={`/products/${product.id}`}
                                    className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium transition-all ${product.popular
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



                {/* CTA with LiquidGlassCard */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                    className="mt-16 flex flex-col items-center"
                >
                    <h2 className="text-2xl font-bold text-white mb-8 text-center">
                        Need a Custom AI Solution?
                    </h2>
                    <LiquidGlassCard
                        width={400}
                        blur={8}
                        distortion={15}
                        borderRadius={20}
                        borderOpacity={0.3}
                        backgroundColor="#8656ff"
                        backgroundOpacity={0.1}
                        innerLightBlur={20}
                        innerLightColor="#6effc5"
                        onHoverScale={1.02}
                        flexibility={0.5}
                        className="p-8 text-center"
                    >
                        <span className="text-sm text-[#6effc5] font-medium mb-2 block">Enterprise</span>
                        <h3 className="text-2xl font-bold text-white mb-4">Custom AI Development</h3>
                        <p className="text-zinc-400 mb-6">
                            Let's build something tailored to your needs. Our team specializes in creating bespoke AI solutions that scale with your business.
                        </p>
                        <Link href="/start-project" className="btn-gradient inline-flex items-center gap-2">
                            Start Your Project <ArrowRight className="w-4 h-4" />
                        </Link>
                    </LiquidGlassCard>
                </motion.div>
            </div>
        </div>
    );
}
