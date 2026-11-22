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
                {/* ---------- Project 1 ---------- */}
                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="sm:w-44 sm:shrink-0">
                            <img
                                src="https://placehold.co/600x400/e0e7ff/3730a3?text=Project+1"
                                alt="HireRadar website screenshot"
                                className="h-28 w-full rounded-lg object-cover sm:h-full"
                            />
                        </div>

                        <div className="flex min-w-0 flex-col">
                            <div className="flex items-center gap-2">
                                <h3 className="text-base font-semibold text-slate-900 dark:text-white">HireRadar</h3>
                                <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">Learning</span>
                            </div>

                            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Finds startups hiring for your profile every day and explains why each job is a match.</p>

                            <ul className="mt-2 list-disc space-y-0.5 pl-4 text-xs text-slate-600 dark:text-slate-400">
                                <li>Resume-based skill detection</li>
                                <li>Daily jobs from YC, job boards and funding news</li>
                                <li>Match score with reasons</li>
                                <li>Application tracker</li>
                            </ul>

                            <div className="mt-2 flex flex-wrap gap-1.5">
                                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-neutral-800 dark:text-slate-300">React</span>
                                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-neutral-800 dark:text-slate-300">TypeScript</span>
                                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-neutral-800 dark:text-slate-300">Tailwind CSS</span>
                            </div>

                            <div className="mt-3 flex gap-2">
                                <a href="#" className="rounded-md bg-indigo-600 px-3 py-1 text-xs font-medium text-white hover:bg-indigo-700">Live</a>
                                <a href="#" className="rounded-md border border-slate-300 px-3 py-1 text-xs font-medium text-slate-800 hover:bg-slate-50 dark:border-neutral-700 dark:text-slate-200 dark:hover:bg-neutral-800">Code</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------- Project 2 ---------- */}
                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="sm:w-44 sm:shrink-0">
                            <img
                                src="https://placehold.co/600x400/dcfce7/166534?text=Project+2"
                                alt="Project 2 website screenshot"
                                className="h-28 w-full rounded-lg object-cover sm:h-full"
                            />
                        </div>

                        <div className="flex min-w-0 flex-col">
                            <div className="flex items-center gap-2">
                                <h3 className="text-base font-semibold text-slate-900 dark:text-white">Project Name 2</h3>
                                <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">Learning</span>
                            </div>

                            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">One-line summary of what this project does for the user.</p>

                            <ul className="mt-2 list-disc space-y-0.5 pl-4 text-xs text-slate-600 dark:text-slate-400">
                                <li>Key feature one</li>
                                <li>Key feature two</li>
                                <li>Key feature three</li>
                                <li>Key feature four</li>
                            </ul>

                            <div className="mt-2 flex flex-wrap gap-1.5">
                                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-neutral-800 dark:text-slate-300">React</span>
                                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-neutral-800 dark:text-slate-300">TypeScript</span>
                                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-neutral-800 dark:text-slate-300">Tailwind CSS</span>
                            </div>

                            <div className="mt-3 flex gap-2">
                                <a href="#" className="rounded-md bg-indigo-600 px-3 py-1 text-xs font-medium text-white hover:bg-indigo-700">Live</a>
                                <a href="#" className="rounded-md border border-slate-300 px-3 py-1 text-xs font-medium text-slate-800 hover:bg-slate-50 dark:border-neutral-700 dark:text-slate-200 dark:hover:bg-neutral-800">Code</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ---------- Project 3 ---------- */}
                <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <div className="sm:w-44 sm:shrink-0">
                            <img
                                src="https://placehold.co/600x400/fef3c7/92400e?text=Project+3"
                                alt="Project 3 website screenshot"
                                className="h-28 w-full rounded-lg object-cover sm:h-full"
                            />
                        </div>

                        <div className="flex min-w-0 flex-col">
                            <div className="flex items-center gap-2">
                                <h3 className="text-base font-semibold text-slate-900 dark:text-white">Project Name 3</h3>
                                <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">Learning</span>
                            </div>

                            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">One-line summary of what this project does for the user.</p>

                            <ul className="mt-2 list-disc space-y-0.5 pl-4 text-xs text-slate-600 dark:text-slate-400">
                                <li>Key feature one</li>
                                <li>Key feature two</li>
                                <li>Key feature three</li>
                                <li>Key feature four</li>
                            </ul>

                            <div className="mt-2 flex flex-wrap gap-1.5">
                                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-neutral-800 dark:text-slate-300">React</span>
                                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-neutral-800 dark:text-slate-300">TypeScript</span>
                                <span className="rounded bg-slate-100 px-2 py-0.5 text-xs text-slate-700 dark:bg-neutral-800 dark:text-slate-300">Tailwind CSS</span>
                            </div>

                            <div className="mt-3 flex gap-2">
                                <a href="#" className="rounded-md bg-indigo-600 px-3 py-1 text-xs font-medium text-white hover:bg-indigo-700">Live</a>
                                <a href="#" className="rounded-md border border-slate-300 px-3 py-1 text-xs font-medium text-slate-800 hover:bg-slate-50 dark:border-neutral-700 dark:text-slate-200 dark:hover:bg-neutral-800">Code</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}