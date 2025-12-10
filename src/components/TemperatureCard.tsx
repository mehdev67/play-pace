"use client";

import { useState } from "react";
import { GlassCard } from "./GlassCard"; // Assuming GlassCard is in the same directory or accessible
import { ThermometerSnowflake, ThermometerSun } from "lucide-react";

interface TemperatureCardProps {
    initialTemperatureCelsius: number;
}

export function TemperatureCard({ initialTemperatureCelsius }: TemperatureCardProps) {
    const [isFahrenheit, setIsFahrenheit] = useState(false);

    const celsiusToFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;
    const fahrenheitToCelsius = (fahrenheit: number) => ((fahrenheit - 32) * 5) / 9;

    const currentTemperature = isFahrenheit
        ? celsiusToFahrenheit(initialTemperatureCelsius)
        : initialTemperatureCelsius;
    const unit = isFahrenheit ? "°F" : "°C";

    const toggleUnit = () => {
        setIsFahrenheit(!isFahrenheit);
    };

    return (
        <GlassCard
            label="Weather"
            title={`${currentTemperature.toFixed(1)}${unit}`}
            description={isFahrenheit ? `Equivalent to ${fahrenheitToCelsius(currentTemperature).toFixed(1)}°C` : `Equivalent to ${celsiusToFahrenheit(currentTemperature).toFixed(1)}°F`}
            ctaText={isFahrenheit ? "Switch to Celsius" : "Switch to Fahrenheit"}
            onCtaClick={toggleUnit}
            metadata={{
                left: "Local Temperature",
                right: isFahrenheit ? <ThermometerSun size={16} /> : <ThermometerSnowflake size={16} />,
            }}
            className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
        />
    );
}
