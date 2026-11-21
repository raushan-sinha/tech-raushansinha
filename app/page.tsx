'use client'
import HeroSection from "@/components/sections/HeroSection";
import SkillSection from "@/components/sections/SkillSection";
import { HeroSectionData } from "@/data/heroSection.data";
import { FallingLeaves } from "falling-leaves/react";
import { useState } from "react";

export default function Home() {
    const [isDark, setIsDark] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDark((prev) => !prev);
    }

    return (
        <main className={`flex min-h-dvh flex-col gap-1 ${isDark ? 'dark' : ''} bg-background text-foreground transition-colors duration-300`}>
            <FallingLeaves fullScreen />
            <HeroSection {...HeroSectionData} isDark={isDark} toggleTheme={toggleTheme} />
            <SkillSection />
        </main>
    );
}