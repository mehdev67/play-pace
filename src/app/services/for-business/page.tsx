"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
    Sparkles,
} from "lucide-react";
import { MetallicPillButton } from "@/components/ui/MetallicPillButton";
import { GlowBadge } from "@/components/ui/GlowBadge";
import { ProductCard3D } from "@/components/ProductCard3D";

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
                <div ref={ref} className="grid lg:grid-cols-2 gap-12 mb-24">
                    {products.map((product, i) => (
                        <ProductCard3D
                            key={product.id}
                            id={product.id}
                            icon={product.icon}
                            title={product.title}
                            tagline={product.tagline}
                            description={product.description}
                            features={product.features.slice(0, 4)}
                            gradient={product.gradient}
                            textColor="text-zinc-700"
                            index={i}
                            href={`/products/${product.id}`}
                            buttonText={product.buttonText || "Get Started"}
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
