import { SkillsData } from "@/data/skillsSection.data";
import Image from "next/image";

export default function SkillSection() {
    return (
        <section id="skills" className="flex w-full flex-col items-center justify-center gap-8 px-6 pt-12 pb-8 sm:px-10 sm:pt-16 sm:pb-10 md:px-16 md:pt-20 lg:px-24">
            {/* Section Heading */}
            <div className="flex w-full max-w-5xl flex-col gap-2">
                <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-3xl text-black underline decoration-gray-300 decoration-2 underline-offset-4">
                    Skills
                </h2>
            </div>

            {/* Skills Grid */}
            <div className="grid w-full max-w-5xl grid-cols-2 gap-2 px-1 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 md:gap-3 lg:grid-cols-5">

                {SkillsData.map((skill) => (
                    <div
                        key={skill.id}
                        className="group flex min-w-0 items-center gap-2 rounded-lg border border-slate-200 bg-white p-2 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md sm:gap-2.5 sm:rounded-xl sm:p-3 md:gap-3 md:p-3.5 dark:border-slate-800"
                    >
                        <Image
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            width={36}
                            height={36}
                            className="h-6 w-6 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-7 sm:w-7 md:h-8 md:w-8"
                        />

                        <span className="min-w-0 text-xs font-mono font-bold sm:text-sm md:text-base dark:text-slate-700">
                            {skill.name}
                        </span>
                    </div>
                ))}

            </div>

        </section>
    )
}