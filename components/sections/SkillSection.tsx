import { SkillsData } from "@/data/skillsSection.data";
import Image from "next/image";

export default function SkillSection() {
    return (
        <section id="skills" className="flex w-full flex-col items-center justify-center gap-8 px-6 pt-12 pb-16 text-slate-900 sm:px-10 sm:pt-16 sm:pb-20 md:px-16 md:pt-20 lg:px-24">
            {/* Section Heading */}
            <div className="flex w-full max-w-5xl flex-col gap-2">
                <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                    Skills<span className="text-blue-500">.</span>
                </h2>

                <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base sm:leading-7 dark:text-slate-400">
                    Technologies and tools I use to build modern, scalable web
                    applications.
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 lg:grid-cols-5">

                {SkillsData.map((skill) => (
                    <div
                        key={skill.id}
                        className="group flex min-w-0 items-center gap-3 rounded-xl border border-slate-200 bg-white p-3.5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-md sm:gap-3.5 sm:p-4 dark:border-slate-800 dark:bg-slate-900"
                    >
                        <Image
                            src={skill.icon}
                            alt={`${skill.name} icon`}
                            width={36}
                            height={36}
                            className="h-8 w-8 shrink-0 object-contain transition-transform duration-300 group-hover:scale-110 sm:h-9 sm:w-9"
                        />

                        <span className="min-w-0 text-sm font-medium text-slate-800 sm:text-base dark:text-slate-200">
                            {skill.name}
                        </span>
                    </div>
                ))}

            </div>
        </section>
    )
}