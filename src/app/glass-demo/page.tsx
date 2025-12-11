"use client";

import { GlassCard, GlassButton } from "react-glass-ui";
import { ArrowRight } from "lucide-react";

export default function GlassDemo() {
    return (
        <div className="min-h-screen flex items-center justify-center p-8 pt-32">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
                <GlassCard
                    width={350}
                    blur={8}
                    distortion={15}
                    borderRadius={24}
                    borderOpacity={0.3}
                    backgroundColor="#8656ff"
                    backgroundOpacity={0.1}
                    innerLightBlur={20}
                    innerLightColor="#6effc5"
                    onHoverScale={1.02}
                    flexibility={0.5}
                    className="p-8"
                >
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#8656ff]/20 text-[#8656ff] text-xs font-semibold mb-4">
                        New Feature
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">Analytics Dashboard</h3>
                    <p className="text-zinc-400 mb-6">Real-time metrics and insights to help you understand user behavior and optimize performance.</p>
                    <GlassButton className="flex items-center gap-2">
                        Get Started <ArrowRight className="w-4 h-4" />
                    </GlassButton>
                    <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs text-zinc-500">
                        <span>Updated 2h ago</span>
                        <span>v2.4.1</span>
                    </div>
                </GlassCard>

                <GlassCard
                    width={350}
                    blur={8}
                    distortion={15}
                    borderRadius={24}
                    borderOpacity={0.3}
                    backgroundColor="#6effc5"
                    backgroundOpacity={0.1}
                    innerLightBlur={20}
                    innerLightColor="#8656ff"
                    onHoverScale={1.02}
                    flexibility={0.5}
                    className="p-8"
                >
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#6effc5]/20 text-[#6effc5] text-xs font-semibold mb-4">
                        AI Powered
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">Smart Automation</h3>
                    <p className="text-zinc-400 mb-6">Let AI handle repetitive tasks while you focus on what matters. Intelligent workflows that learn and adapt.</p>
                    <GlassButton className="flex items-center gap-2">
                        Explore <ArrowRight className="w-4 h-4" />
                    </GlassButton>
                    <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs text-zinc-500">
                        <span>500+ integrations</span>
                        <span>Enterprise</span>
                    </div>
                </GlassCard>

                <GlassCard
                    width={350}
                    blur={8}
                    distortion={15}
                    borderRadius={24}
                    borderOpacity={0.3}
                    backgroundColor="#ff5145"
                    backgroundOpacity={0.1}
                    innerLightBlur={20}
                    innerLightColor="#ff5145"
                    onHoverScale={1.02}
                    flexibility={0.5}
                    className="p-8"
                >
                    <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#ff5145]/20 text-[#ff5145] text-xs font-semibold mb-4">
                        Coming Soon
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3">Voice Assistant</h3>
                    <p className="text-zinc-400 mb-6">Control your entire workspace with natural language commands. Simply speak and watch the magic happen.</p>
                    <GlassButton className="flex items-center gap-2">
                        Join Waitlist <ArrowRight className="w-4 h-4" />
                    </GlassButton>
                    <div className="mt-4 pt-4 border-t border-white/10 flex justify-between text-xs text-zinc-500">
                        <span>Beta Q1 2025</span>
                        <span>Free tier</span>
                    </div>
                </GlassCard>
            </div>
        </div>
    );
}
