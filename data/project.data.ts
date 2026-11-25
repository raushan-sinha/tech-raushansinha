import { ProjectProps } from "@/types/project.types";

export const ProjectsData = [
    {
        id: 1,
        name: "HireRadar",
        image:
            "https://placehold.co/600x400/e0e7ff/3730a3?text=Project+1",
        imageAlt: "HireRadar website screenshot",
        description:
            "Finds startups hiring for your profile every day and explains why each job is a match.",
        features: [
            "Resume-based skill detection",
            "Daily jobs from YC, job boards and funding news",
            "Match score with reasons",
            "Application tracker",
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        links: {
            live: "#",
            code: "#",
        },
    },
    {
        id: 2,
        name: "Project Name 2",
        image:
            "https://placehold.co/600x400/dcfce7/166534?text=Project+2",
        imageAlt: "Project 2 website screenshot",
        description:
            "One-line summary of what this project does for the user.",
        features: [
            "Key feature one",
            "Key feature two",
            "Key feature three",
            "Key feature four",
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        links: {
            live: "#",
            code: "#",
        },
    },
    {
        id: 3,
        name: "Project Name 3",
        image:
            "https://placehold.co/600x400/fef3c7/92400e?text=Project+3",
        imageAlt: "Project 3 website screenshot",
        description:
            "One-line summary of what this project does for the user.",
        features: [
            "Key feature one",
            "Key feature two",
            "Key feature three",
            "Key feature four",
        ],
        technologies: ["React", "TypeScript", "Tailwind CSS"],
        links: {
            live: "#",
            code: "#",
        },
    },
] satisfies ProjectProps[];