'use client'
import { Contact, HeroSection, ProjectsSection, SkillSection } from "@/components/sections";
import { HeroSectionData } from "@/data/heroSection.data";
import { FallingLeaves } from "falling-leaves/react";
import { Snowfall } from "falling-snow/react";
import { useEffect, useState } from "react";

export default function Home() {
    const [isDark, setIsDark] = useState<boolean>(false);

    // Load saved theme
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');

        if (savedTheme === 'dark') {
            setIsDark(true)
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;

        setIsDark(newTheme);
        localStorage.setItem("theme", newTheme ? "dark" : "light");
    }

    return (
        <main className={`flex min-h-dvh flex-col gap-1 ${isDark ? 'dark' : ''} bg-background text-foreground transition-colors duration-300`}>
            <FallingLeaves fullScreen />
            <Snowfall fullScreen />
            <HeroSection {...HeroSectionData} isDark={isDark} toggleTheme={toggleTheme} />
            <SkillSection />
            <ProjectsSection />
            <Contact />
        </main>
    );
}