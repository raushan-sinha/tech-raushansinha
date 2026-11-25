import { ProjectProps } from "@/types/project.types";

export const ProjectsData = [
    {
        id: 1,
        name: "DevDigest",
        image:
            "/devdigest.png",
        imageAlt: "HireRadar website screenshot",
        description:
            "DevDigest is a modern developer-focused news platform that helps users stay updated with the latest trends in technology, AI, web development, startups, cybersecurity, cloud computing, and software engineering.",
        features: [
            "Resume-based skill detection",
            "Daily jobs from YC, job boards and funding news",
            "Match score with reasons",
            "Application tracker",
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        links: {
            live: "https://devdigest-pi.vercel.app/",
            code: "https://github.com/raushan-sinha/devdigest",
        },
    },
    {
        id: 2,
        name: "DevForage",
        image:
            "/devforage.png",
        imageAlt: "DevForage website screenshot",
        description:
            "This is Learning Management System website where Developers can find their Dev courses, Roadmaps and Create and Post their Projects & Components.",
        features: [
            "Key feature one",
            "Key feature two",
            "Key feature three",
            "Key feature four",
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        links: {
            live: "https://dev-forage.vercel.app/",
            code: "https://github.com/raushan-sinha/dev-forage",
        },
    },
    {
        id: 3,
        name: "Jarurat Care",
        image:
            "/jaruratcare.png",
        imageAlt: "Jarurat Care website screenshot",
        description:
            "Jarurat Care is a Web application where stored the details of the Patient Records.",
        features: [
            "Key feature one",
            "Key feature two",
            "Key feature three",
            "Key feature four",
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        links: {
            live: "https://jarurat-care-one.vercel.app/",
            code: "https://github.com/raushan-sinha/jarurat-care",
        },
    },
] satisfies ProjectProps[];