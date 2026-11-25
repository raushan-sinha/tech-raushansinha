export interface ProjectProps {
    id: number;
    name: string;
    image: string;
    imageAlt: string;
    description: string;
    features: string[];
    technologies: string[];
    links: {
        live: string;
        code: string;
    };
}