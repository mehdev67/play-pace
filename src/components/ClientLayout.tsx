"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "./LoadingScreen";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isLoading, setIsLoading] = useState(true);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        // Check if this is the first visit
        const hasVisited = sessionStorage.getItem("hasVisited");

        if (hasVisited) {
            // Skip loading screen on subsequent visits
            setIsLoading(false);
            setShowContent(true);
        }
    }, []);

    const handleLoadingComplete = () => {
        sessionStorage.setItem("hasVisited", "true");
        setIsLoading(false);
        // Small delay before showing content for smooth transition
        setTimeout(() => {
            setShowContent(true);
        }, 500);
    };

    return (
        <>
            {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
            <div style={{ opacity: showContent ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}>
                {children}
            </div>
        </>
    );
}
