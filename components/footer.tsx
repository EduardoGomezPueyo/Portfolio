import { ReactNode } from "react";
import Link from "./link";

interface SocialItemProps {
    children: ReactNode;
    href: string;
    label: string;
}

const SocialItem = ({ children, href, label }: SocialItemProps) => {
    return (
        <li>
            <a href={href} aria-label={label}>
                <svg
                    className="w-8 sm:w-10 text-current hover:text-gray-600 transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    style={{ fill: "currentColor" }}
                >
                    {children}
                </svg>
            </a>
        </li>
    );
};

const Footer = () => {
    return (
        <footer className="mt-12 bg-gray-50 border-t-2 border-gray-100 text-gray-400 py-12">
            <ul className="flex px-12 sm:w-3/4 sm:max-w-xl mx-auto justify-center gap-3">
                <SocialItem href="mailto:eduardogomezpueyo@gmail.com" label="email">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
                    />
                </SocialItem>
                <SocialItem href="https://www.linkedin.com/in/eduardo-gomez-pueyo" label="linkedin">
                    <path d="M20,3H4C3.447,3,3,3.448,3,4v16c0,0.552,0.447,1,1,1h16c0.553,0,1-0.448,1-1V4C21,3.448,20.553,3,20,3z M8.339,18.337H5.667 v-8.59h2.672V18.337z M7.003,8.574c-0.856,0-1.548-0.694-1.548-1.548s0.691-1.548,1.548-1.548c0.854,0,1.548,0.693,1.548,1.548 S7.857,8.574,7.003,8.574z M18.338,18.337h-2.669V14.16c0-0.996-0.018-2.277-1.388-2.277c-1.39,0-1.601,1.086-1.601,2.207v4.248 h-2.667v-8.59h2.56v1.174h0.037c0.355-0.675,1.227-1.387,2.524-1.387c2.704,0,3.203,1.778,3.203,4.092V18.337z" />
                </SocialItem>
            </ul>
            <p className="text-center text-gray-500 mt-4">
                Eduardo Gómez &copy; 2021 <br />
            </p>
            <p className="text-center text-gray-500 mt-2">
                Built with <Link href="https://nextjs.org">Next JS</Link> and <Link href="https://tailwindcss.com">Tailwind CSS</Link>
            </p>
        </footer>
    );
};

export default Footer;
