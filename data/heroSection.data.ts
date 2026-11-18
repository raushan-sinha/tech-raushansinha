import { HeroSectionProps } from "@/types/heroSection.types";
import { MdOutlineEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin, FaFile } from "react-icons/fa6";

export const HeroSectionData: HeroSectionProps = {
    name: "Raushan Kumar Sinha",
    title: "Frontend Developer",
    country: "India",
    image: "/profile.jpg",
    summary: "Hi, I'm Raushan Kumar Sinha👋. I build web apps end to end. I focused on building responsive and scalable web applications with strong emphasis on performance, usability and clean UI architecture. Experienced in developing reusable components, integrating APIs and delivering seamless user experiences across devices.",
    socials: [
        { label: "Email", href: "mailto:raushankrsinha2004@gmail.com", icon: MdOutlineEmail },
        { label: "GitHub", href: "https://github.com/raushan-sinha", icon: BsGithub },
        { label: "Resume", href: "https://drive.google.com/file/d/1rZBN9C8jcdJnnNHCbIuuubmw_OJC2ahe/view", icon: FaFile },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/raushan-sinha-4b94452a1/", icon: FaLinkedin },
    ],
}