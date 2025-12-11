"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, ArrowRight } from "lucide-react";
import { GlassCard } from "react-glass-ui";

export default function InkasseraPage() {
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Check password (you can change this)
        if (password === "demo2024") {
            setIsAuthenticated(true);
            setError("");
        } else {
            setError("Incorrect password");
            setPassword("");
        }
    };

    if (isAuthenticated) {
        return (
            <div className="min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20">
                <div className="relative max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-8"
                    >
                        <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
                            Inkassera Demo
                        </h1>
                        <p className="text-zinc-600 mb-8">
                            Interactive demo - Try it out below
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="w-full"
                    >
                        <iframe
                            src="https://codesandbox.io/p/devbox/code-sandbox-light-c3224?embed=1&file=%2Findex.html"
                            style={{
                                width: "100%",
                                height: "80vh",
                                border: "0",
                                borderRadius: "24px",
                                overflow: "hidden",
                                boxShadow: "0 20px 60px -15px rgba(0, 0, 0, 0.3)",
                            }}
                            title="Inkassera Demo"
                            allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                            sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                        />
                    </motion.div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen pt-16 sm:pt-24 pb-16 sm:pb-20 flex items-center justify-center">
            <div className="relative max-w-md mx-auto px-6 w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
                        <Lock className="w-4 h-4 text-emerald-500" />
                        <span className="text-sm text-emerald-600 font-medium">
                            Protected Demo
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 mb-4">
                        Inkassera Demo
                    </h1>
                    <p className="text-zinc-600">
                        Enter password to access the demo
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <GlassCard
                        blur={12}
                        borderRadius={24}
                        borderOpacity={0.3}
                        backgroundColor="#ffffff"
                        backgroundOpacity={0.6}
                        className="p-8 border border-zinc-200 shadow-lg"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 mb-2 text-center">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                        setError("");
                                    }}
                                    placeholder="Enter password"
                                    className="w-full px-4 py-3 bg-white/80 border border-zinc-300 rounded-xl text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all text-center"
                                    autoFocus
                                />
                                {error && (
                                    <p className="text-red-500 text-sm mt-2 text-center">
                                        {error}
                                    </p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-medium transition-all text-zinc-900 shadow-lg bg-white/20 backdrop-blur-md border border-emerald-500/30 hover:shadow-xl hover:scale-[1.02]"
                            >
                                <span>Access Demo</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </form>

                        <p className="text-xs text-zinc-500 text-center mt-6">
                            Don't have access? Contact us for a demo password.
                        </p>
                    </GlassCard>
                </motion.div>
            </div>
        </div>
    );
}
