'use client'
import {
    FaXTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaEnvelope,
} from "react-icons/fa6";

const socialLinks = [
    {
        name: "Twitter / X",
        icon: FaXTwitter,
        href: "https://x.com/YOUR_USERNAME",
        color: "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        href: "https://instagram.com/YOUR_USERNAME",
        color: "hover:bg-pink-600 hover:text-white",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedinIn,
        href: "https://linkedin.com/in/YOUR_USERNAME",
        color: "hover:bg-blue-600 hover:text-white",
    },
    {
        name: "Email",
        icon: FaEnvelope,
        href: "mailto:YOUR_EMAIL@gmail.com",
        color: "hover:bg-indigo-600 hover:text-white",
    },
];

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

                    <a
                        href="https://x.com/YOUR_USERNAME"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-slate-400 hover:bg-black hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-slate-300 dark:hover:bg-white dark:hover:text-black"
                    >
                        <FaXTwitter className="text-base" />
                        Twitter
                    </a>

                    <a
                        href="https://instagram.com/YOUR_USERNAME"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-pink-300 hover:bg-pink-600 hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-slate-300 dark:hover:bg-pink-600 dark:hover:text-white"
                    >
                        <FaInstagram className="text-base" />
                        Instagram
                    </a>

                    <a
                        href="https://linkedin.com/in/YOUR_USERNAME"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-blue-300 hover:bg-blue-600 hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-slate-300 dark:hover:bg-blue-600 dark:hover:text-white"
                    >
                        <FaLinkedinIn className="text-base" />
                        LinkedIn
                    </a>

                    <a
                        href="mailto:YOUR_EMAIL@gmail.com"
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700 transition-all duration-200 hover:-translate-y-1 hover:border-indigo-300 hover:bg-indigo-600 hover:text-white dark:border-neutral-800 dark:bg-neutral-900 dark:text-slate-300 dark:hover:bg-indigo-600 dark:hover:text-white"
                    >
                        <FaEnvelope className="text-base" />
                        Email
                    </a>

                </div>

                {/* Email CTA */}
                <a
                    href="mailto:YOUR_EMAIL@gmail.com"
                    className="mt-8 inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-1 hover:bg-indigo-700 hover:shadow-md"
                >
                    Let's Talk
                    <FaEnvelope className="text-sm" />
                </a>

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
