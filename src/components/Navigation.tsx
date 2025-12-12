"use client";

import { useState, useEffect, useMemo, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code, Package, MessageSquare, Briefcase } from "lucide-react";
import { MetallicPillButton } from "@/components/ui/MetallicPillButton";
import type { LucideIcon } from "lucide-react";

interface NavItem {
    name: string;
    href: string;
    icon?: LucideIcon;
}

const navItems: NavItem[] = [
    { name: "Home", href: "/" },
    { name: "Build / Develop", href: "/developing", icon: Code },
    { name: "AI Products", href: "/products", icon: Package },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact", icon: MessageSquare },
];

// Memoized nav link component for better performance
const NavLink = memo(function NavLink({ item }: { item: NavItem }) {
    const Icon = item.icon;
    return (
        <Link
            href={item.href}
            className="relative px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors group"
        >
            <span className="flex items-center gap-2">
                {Icon && <Icon className="w-4 h-4" strokeWidth={1.5} />}
                {item.name}
            </span>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-zinc-800 group-hover:w-3/4 transition-all duration-300" />
        </Link>
    );
});

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`relative z-50 transition-colors duration-300 ${scrolled ? "bg-white/5 backdrop-blur-md border-b border-black/5" : "bg-transparent"}`}
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
                                className="w-10 h-10 drop-shadow-md transition-transform group-hover:scale-105"
                            />
                        </div>
                        <span className="text-xl font-light tracking-tight text-zinc-800" style={{ fontWeight: 300 }}>
                            PlayPace
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navItems.map((item) => (
                            <NavLink key={item.name} item={item} />
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center gap-4">
                        <Link href="/start-project">
                            <MetallicPillButton size="sm">
                                Get Started
                            </MetallicPillButton>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden relative z-50 p-2 text-zinc-800"
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
                        className="lg:hidden mt-4 mx-4 py-8 px-6 rounded-2xl bg-white/90 backdrop-blur-xl border border-black/5 shadow-2xl shadow-black/10"
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
                                        className="block w-full py-4 text-center hover:bg-black/5 transition-all duration-300 rounded-lg"
                                    >
                                        <span
                                            className="text-zinc-800 uppercase tracking-[0.2em] text-lg hover:text-black transition-colors"
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
                                        <div className="w-16 h-px bg-black/5 mx-auto" />
                                    )}
                                </motion.div>
                            ))}

                            {/* Separator before CTAs */}
                            <div className="w-24 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent my-6" />

                            {/* Mobile CTA Buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: navItems.length * 0.05 + 0.1 }}
                                className="w-full space-y-4"
                            >
                                <Link href="/start-project" onClick={() => setIsOpen(false)}>
                                    <MetallicPillButton fullWidth>
                                        Get Started
                                    </MetallicPillButton>
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
