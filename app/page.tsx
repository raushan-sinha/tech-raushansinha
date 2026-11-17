'use client'
import HeroSection from "@/components/sections/HeroSection";
import SkillSection from "@/components/sections/SkillSection";
import { HeroSectionData } from "@/data/heroSection.data";
import { FallingLeaves } from "falling-leaves/react";

export default function Home() {
    return (
        <main className="min-h-dvh bg-white">
            <FallingLeaves fullScreen />
            <HeroSection {...HeroSectionData} />
            <SkillSection />
        </main>
    );
}