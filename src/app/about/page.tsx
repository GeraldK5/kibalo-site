import Navbar from "@/components/landing_page/top_nav_bar";
import AboutHero from "@/components/landing_page/about/hero";
import HowKibaloHelps from "@/components/landing_page/about/how_kibalo_helps";
import OurValues from "@/components/landing_page/about/values";
import Footer from "@/components/landing_page/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'About',
    description: 'Learn more about Kibalo and how it can help you.',
}

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <AboutHero />
            <HowKibaloHelps />
            <OurValues />
            <Footer />
        </main>
    );
}