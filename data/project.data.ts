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
            "Latest technology and developer news",
            "AI, web development and startup updates",
            "Cybersecurity and cloud computing insights",
            "Software engineering trends and resources",
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
            "Developer-focused courses and learning resources",
            "Structured programming and technology roadmaps",
            "Create and publish developer projects",
            "Share reusable components with the developer community",
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
            "Digital patient record management",
            "Centralized patient information storage",
            "Organized access to patient details",
            "Efficient patient data management",
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        links: {
            live: "https://jarurat-care-one.vercel.app/",
            code: "https://github.com/raushan-sinha/jarurat-care",
        },
    },
] satisfies ProjectProps[];