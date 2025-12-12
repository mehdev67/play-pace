'use client';

import { MetallicPillButton } from '@/components/ui/MetallicPillButton';

export default function MetallicButtonDemo() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 py-20 px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
                    Metallic Pill Button
                </h1>
                <p className="text-center text-gray-600 mb-12">
                    Premium 3D button with metallic surface and depth effects
                </p>

                {/* Size Variants */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-8 text-gray-700 text-center">
                        Storlekar
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <MetallicPillButton size="sm">
                            Liten
                        </MetallicPillButton>

                        <MetallicPillButton size="md">
                            Medium
                        </MetallicPillButton>

                        <MetallicPillButton size="lg">
                            Stor
                        </MetallicPillButton>
                    </div>
                </section>

                {/* Different Texts */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-8 text-gray-700 text-center">
                        Exempel
                    </h2>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        <MetallicPillButton>
                            Start
                        </MetallicPillButton>

                        <MetallicPillButton>
                            Köp Nu
                        </MetallicPillButton>

                        <MetallicPillButton>
                            Kontakta Oss
                        </MetallicPillButton>

                        <MetallicPillButton>
                            Läs Mer
                        </MetallicPillButton>
                    </div>
                </section>

                {/* Full Width */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-8 text-gray-700 text-center">
                        Full Bredd
                    </h2>
                    <div className="max-w-md mx-auto">
                        <MetallicPillButton fullWidth>
                            Full Width Button
                        </MetallicPillButton>
                    </div>
                </section>

                {/* Disabled State */}
                <section className="mb-16">
                    <h2 className="text-2xl font-semibold mb-8 text-gray-700 text-center">
                        Inaktiverad
                    </h2>
                    <div className="flex justify-center">
                        <MetallicPillButton disabled>
                            Disabled
                        </MetallicPillButton>
                    </div>
                </section>

                {/* Interactive Demo */}
                <section>
                    <h2 className="text-2xl font-semibold mb-8 text-gray-700 text-center">
                        Interaktiv Demo
                    </h2>
                    <div className="flex justify-center">
                        <MetallicPillButton
                            onClick={() => alert('🚀 Knappen fungerar!')}
                            size="lg"
                        >
                            Klicka Mig!
                        </MetallicPillButton>
                    </div>
                </section>
            </div>
        </div>
    );
}
