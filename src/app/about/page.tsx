import Navbar from "@/components/landing_page/top_nav_bar";
import AboutHero from "@/components/landing_page/about/hero";
import HowKibaloHelps from "@/components/landing_page/about/how_kibalo_helps";
import OurValues from "@/components/landing_page/about/values";
import Footer from "@/components/landing_page/footer";

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