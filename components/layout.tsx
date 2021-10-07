import Head from "next/head";
import { ReactNode } from "react";
import Footer from "./footer";
import Navbar from "./navbar";

interface LayoutProps {
    children: ReactNode;
    title: string;
    description: string;
    className?: string;
}

const Layout = ({ children, title, description, className }: LayoutProps) => {
    return (
        <div className="subpixel-antialiased text-gray-900">
            <Head>
                <title>{title} | Eduardo Gómez</title>
                <meta name="description" content={description} />
            </Head>
            <main className="bg-white">
                <Navbar className={className} />
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
