'use client'
import HeroSection from "@/components/sections/HeroSection";
import SkillSection from "@/components/sections/SkillSection";
import { HeroSectionData } from "@/data/heroSection.data";
import { FallingLeaves } from "falling-leaves/react";

export default function Home() {
    return (
        <main className="flex min-h-dvh flex-col gap-1 bg-dark">
            <FallingLeaves fullScreen />
            <HeroSection {...HeroSectionData} />
            <SkillSection />
        </main>
    );
}