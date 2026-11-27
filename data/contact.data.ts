import { SocialProps } from "@/types/contact.types";

import {
    FaXTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaEnvelope,
} from "react-icons/fa6";

export const SocialData: SocialProps[] = [
    {
        name: "X",
        icon: FaXTwitter,
        href: "https://x.com/84Raushan",
        color: "hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black",
    },
    {
        name: "Instagram",
        icon: FaInstagram,
        href: "https://www.instagram.com/rohanthropic_/?hl=en",
        color: "hover:bg-pink-600 hover:text-white",
    },
    {
        name: "LinkedIn",
        icon: FaLinkedinIn,
        href: "https://www.linkedin.com/in/raushan-sinha-4b94452a1/",
        color: "hover:bg-blue-600 hover:text-white",
    },
    {
        name: "Email",
        icon: FaEnvelope,
        href: "mailto:raushankrsinha2004@gmail.com",
        color: "hover:bg-indigo-600 hover:text-white",
    },
]