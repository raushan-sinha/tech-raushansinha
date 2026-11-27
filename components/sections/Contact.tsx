'use client'

import { SocialData } from "@/data/contact.data";

export default function Contact() {
    return (

        <section
            id="contact"
            className="flex w-full flex-col items-center justify-center bg-white px-6 py-16 text-slate-900 dark:bg-black dark:text-white sm:px-10 sm:py-20 md:px-16 lg:px-24"
        >
            <div className="flex w-full max-w-3xl flex-col items-center text-center">

                {/* Heading */}
                <h2 className="text-2xl font-bold tracking-tight underline decoration-gray-300 decoration-2 underline-offset-8 sm:text-3xl">
                    Get in Touch
                </h2>

                {/* Description */}
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base font-mono">
                    I'm always open to new opportunities, collaborations, and
                    interesting projects. Feel free to reach out!
                </p>

                {/* Social Links */}
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                    {SocialData.map((link, id) => {
                        const Icon = link.icon;

                        return (
                            <a
                                key={id}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-slate-400 ${link.color} dark:border-neutral-800 dark:bg-neutral-900 dark:text-slate-300 dark:hover:bg-white dark:hover:text-black font-mono`}
                            >
                                <Icon className="text-base" />
                                {link.name}
                            </a>
                        )
                    })}

                </div>

            </div>

            {/* Footer */}
            <div className="mt-16 w-full max-w-3xl border-t border-slate-200 pt-6 text-center dark:border-neutral-800">
                <p className="text-xs text-slate-500 dark:text-slate-500">
                    © 2026 All rights reserved.
                </p>
            </div>
        </section>

    );
}
