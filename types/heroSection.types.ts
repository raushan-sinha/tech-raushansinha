import { IconType } from "react-icons";

export interface HeroSocialLink {
    label: string;
    href: string;
    icon: IconType;
}

export interface HeroSectionProps {
    name?: string,
    title?: string,
    country?: string,
    image: string, 
    summary: string;
    socials: HeroSocialLink[];
}