"use client";

import { GlassCard } from "@/components/GlassCard";

export default function GlassDemo() {
    return (
        <div className="min-h-screen flex items-center justify-center p-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <GlassCard
                    label="New Feature"
                    title="Analytics Dashboard"
                    description="Real-time metrics and insights to help you understand user behavior and optimize performance."
                    ctaText="Get Started"
                    onCtaClick={() => console.log('CTA clicked')}
                    metadata={{
                        left: 'Updated 2h ago',
                        right: 'v2.4.1',
                    }}
                />

                <GlassCard
                    label="AI Powered"
                    title="Smart Automation"
                    description="Let AI handle repetitive tasks while you focus on what matters. Intelligent workflows that learn and adapt."
                    ctaText="Explore"
                    metadata={{
                        left: '500+ integrations',
                        right: 'Enterprise',
                    }}
                />

                <GlassCard
                    label="Coming Soon"
                    title="Voice Assistant"
                    description="Control your entire workspace with natural language commands. Simply speak and watch the magic happen."
                    ctaText="Join Waitlist"
                    metadata={{
                        left: 'Beta Q1 2025',
                        right: 'Free tier',
                    }}
                />
            </div>
        </div>
    );
}
