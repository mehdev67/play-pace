"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="relative pt-24 pb-12 overflow-hidden border-t border-black/5">
            {/* Top Border Gradient - Adjusted for Light Mode */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6">
                            <Image
                                src="/logo.png"
                                alt="PlayPace"
                                width={40}
                                height={40}
                                className="w-10 h-10 drop-shadow-sm"
                            />
                            <span className="text-xl font-bold text-zinc-900">PlayPace</span>
                        </Link>
                        <p className="text-zinc-500 mb-6 leading-relaxed">
                            A creative AI and data studio based in Sweden. We build innovative software,
                            mobile apps, automations and AI Agents.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Github].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-400 hover:text-purple-600 hover:border-purple-200 hover:shadow-md transition-all"
                                >
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-zinc-900 font-semibold mb-6">Company</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "About", href: "/about" },
                                { name: "Team", href: "/team" },
                                { name: "Products", href: "/products" },
                                { name: "Contact", href: "/contact" },
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-zinc-500 hover:text-zinc-900 transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-zinc-900 font-semibold mb-6">Get in Touch</h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:contact@playpace.net"
                                    className="flex items-center gap-3 text-zinc-500 hover:text-zinc-900 transition-colors"
                                >
                                    <Mail className="w-5 h-5 text-purple-600" />
                                    contact@playpace.net
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+4685251279"
                                    className="flex items-center gap-3 text-zinc-500 hover:text-zinc-900 transition-colors"
                                >
                                    <Phone className="w-5 h-5 text-purple-600" />
                                    +46 8 525 127 99
                                </a>
                            </li>
                            <li className="flex items-start gap-3 text-zinc-500">
                                <MapPin className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                <span className="text-zinc-500">Stockholm, Sweden</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* EU Funding Badge - Adjusted for Light Mode */}
                <div className="relative rounded-2xl overflow-hidden mb-12 bg-gradient-to-r from-[#003399] to-[#0044cc] shadow-lg">
                    {/* Stars decoration */}
                    <div className="absolute top-3 left-4 text-yellow-400/80 text-sm tracking-[0.5em]">★ ★ ★ ★ ★ ★</div>
                    <div className="absolute bottom-3 right-4 text-yellow-400/80 text-sm tracking-[0.5em]">★ ★ ★ ★ ★ ★</div>

                    <div className="relative p-8 text-center">
                        <p className="text-white font-semibold text-lg mb-2">Recognized & Co-funded by the European Union</p>
                        <p className="text-blue-100/90 text-sm max-w-xl mx-auto">
                            Pioneering sustainable solutions that empower people, businesses and the planet.
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-black/5">
                    <p className="text-zinc-500 text-sm">
                        © 2025 Playpace Brand & Business Services AB. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
