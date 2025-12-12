"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    Sparkles,
} from "lucide-react";
import { GlassCard } from "react-glass-ui";
import { MetallicPillButton } from "@/components/ui/MetallicPillButton";
import { GlowBadge } from "@/components/ui/GlowBadge";
import { ProductCard3D } from "@/components/ProductCard3D";

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
                    <GlowBadge icon={<Sparkles className="w-4 h-4 text-blue-600" strokeWidth={1.5} />}>
                        <span className="text-blue-600">AI Products</span>
                    </GlowBadge>

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 mb-6">
                        Ready-to-use{" "}
                        <span className="gradient-text">AI Solutions</span>
                    </h1>
                    <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                        Our products are ready to deploy right away. Powerful AI tools
                        that automate and streamline your business operations.
                    </p>
                </motion.div>

                {/* Products Grid - 3D Interactive Cards */}
                <div ref={ref} className="grid lg:grid-cols-3 gap-10 mb-24 mt-16">
                    {products.map((product, i) => (
                        <ProductCard3D
                            key={product.id}
                            id={product.id}
                            icon={product.icon}
                            title={product.title}
                            tagline={product.tagline}
                            description={product.description}
                            features={product.features}
                            gradient={product.gradient}
                            textColor={product.textColor}
                            index={i}
                        />
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
                        Need a Custom AI Solution?
                    </h2>
                    <p className="text-lg text-zinc-600 mb-8">
                        Let's build something tailored to your needs. Our team specializes in creating bespoke AI solutions that scale with your business.
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
