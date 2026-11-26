import { ProjectsData } from "@/data/project.data";
import Image from "next/image";

export default function ProjectsSection() {
    return (
        <section
            id="projects"
            className="flex w-full flex-col items-center justify-center gap-6 px-6 pt-12 pb-8 sm:px-10 sm:pt-16 sm:pb-10 md:px-16 md:pt-20 lg:px-24 bg-white dark:bg-black text-slate-900 dark:text-white"
        >
            <div className="flex w-full max-w-3xl flex-col gap-2">
                <h2 className="text-2xl font-bold leading-tight tracking-tight sm:text-3xl underline decoration-gray-300 decoration-2 underline-offset-8 text-slate-900 dark:text-white">
                    Projects
                </h2>
            </div>

            <div className="flex w-full max-w-3xl flex-col gap-4">
                {ProjectsData.map((project) => (
                    <div key={project.id} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                        <div className="flex flex-col gap-4 sm:flex-row">
                            <div className="w-full shrink-0 overflow-hidden rounded-xl sm:w-44">
                                <Image
                                    width={600}
                                    height={400}
                                    src={project.image}
                                    alt={project.imageAlt}
                                    unoptimized
                                    className="aspect-[3/2] h-auto w-full rounded-xl object-cover sm:aspect-auto sm:h-32 sm:w-full"
                                />
                            </div>

                            <div className="flex min-w-0 flex-col">
                                <div className="flex items-center gap-2">
                                    <h3 className="text-base font-semibold text-slate-900 dark:text-white font-mono">{project.name}</h3>
                                    <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">Completed</span>
                                </div>

                                <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 font-mono">{project.description}</p>

                                <ul className="mt-2 list-disc space-y-0.5 pl-4 text-xs text-slate-600 dark:text-slate-400 font-mono">
                                    {project.features.map((feature) => (
                                        <li key={feature}>{feature}</li>
                                    ))}
                                </ul>


                                <div className="mt-2 flex flex-wrap gap-1.5">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-neutral-800 dark:text-slate-300 font-mono">{tech}</span>
                                    ))}
                                </div>

                                <div className="mt-3 flex gap-2">
                                    <a href={project.links.live} className="rounded-md bg-indigo-600 px-3 py-1 text-xs font-medium text-white hover:bg-indigo-700">Live</a>

                                    <a href={project.links.code} className="rounded-md border border-slate-300 px-3 py-1 text-xs font-medium text-slate-800 hover:bg-slate-50 dark:border-neutral-700 dark:text-slate-200 dark:hover:bg-neutral-800">Code</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* Global Project Buttons */}
            <div className="flex w-full flex-wrap items-center gap-3 pt-2 sm:w-auto">
                <a
                    href="https://vercel.com/raushan620300s-projects"
                    target="_blank"
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:flex-none"
                >
                    View Projects
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                    >
                        <path d="M7 17 17 7M7 7h10v10" />
                    </svg>
                </a>

                <a
                    href="https://github.com/raushan-sinha?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-indigo-400 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:border-neutral-700 dark:bg-neutral-900 dark:text-slate-200 dark:hover:border-indigo-500 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300 sm:flex-none"
                >
                    View Code
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="h-4 w-4"
                    >
                        <path d="M9 18 3 12l6-6M15 6l6 6-6 6" />
                    </svg>
                </a>
            </div>
        </section>
    )
}