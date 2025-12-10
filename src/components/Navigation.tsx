"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, Package, MessageSquare } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Build / Develop", href: "/developing", icon: Code },
    { name: "AI Products", href: "/products", icon: Package },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact", icon: MessageSquare },
];

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative z-50 bg-transparent"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <Image
                                src="/logo.png"
                                alt="PlayPace"
                                width={40}
                                height={40}
                                className="w-10 h-10 drop-shadow-lg transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 blur-lg opacity-50 group-hover:opacity-80 transition-opacity">
                                <Image
                                    src="/logo.png"
                                    alt=""
                                    width={40}
                                    height={40}
                                    className="w-10 h-10"
                                />
                            </div>
                        </div>
                        <span className="text-xl font-light tracking-tight text-white" style={{ fontWeight: 300 }}>
                            PlayPace
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors group"
                            >
                                <span className="flex items-center gap-2">
                                    {item.icon && <item.icon className="w-4 h-4" />}
                                    {item.name}
                                </span>
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-white/80 group-hover:w-3/4 transition-all duration-300 shimmer-line" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link
                            href="/start-project"
                            className="btn-gradient text-sm !py-2.5 !px-5"
                        >
                            <span>Get Started</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative z-50 p-2 text-white"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="lg:hidden mt-4 mx-4 py-8 px-6 rounded-2xl bg-slate-950/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/50"
                    >
                        <div className="flex flex-col items-center">
                            {navItems.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="w-full"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full py-4 text-center hover:bg-white/5 transition-all duration-300 rounded-lg"
                                    >
                                        <span
                                            className="text-white/90 uppercase tracking-[0.2em] text-lg hover:text-white transition-colors"
                                            style={{
                                                fontFamily: "'Inter', sans-serif",
                                                fontWeight: 300,
                                            }}
                                        >
                                            {item.name}
                                        </span>
                                    </Link>
                                    {/* Subtle divider line */}
                                    {i < navItems.length - 1 && (
                                        <div className="w-16 h-px bg-white/10 mx-auto" />
                                    )}
                                </motion.div>
                            ))}

                            {/* Separator before CTAs */}
                            <div className="w-24 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-6" />

                            {/* Mobile CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navItems.length * 0.05 + 0.1 }}
                                className="w-full space-y-4"
                            >
                                <Link
                                    href="/services"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full py-4 text-center hover:bg-white/5 transition-all duration-300 rounded-lg"
                                >
                                    <span
                                        className="text-white/50 uppercase tracking-[0.2em] text-sm hover:text-white/70 transition-colors"
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 300,
                                        }}
                                    >
                                        View All Services
                                    </span>
                                </Link>
                                <Link
                                    href="/start-project"
                                    onClick={() => setIsOpen(false)}
                                    className="btn-gradient w-full text-center block !py-4 rounded-xl"
                                >
                                    <span
                                        className="uppercase tracking-[0.15em] text-base"
                                        style={{
                                            fontFamily: "'Inter', sans-serif",
                                            fontWeight: 400,
                                        }}
                                    >
                                        Get Started
                                    </span>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
