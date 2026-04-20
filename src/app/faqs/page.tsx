import Navbar from "@/components/landing_page/top_nav_bar";
import FAQSection from "@/components/landing_page/faqs/faqs";
import Footer from "@/components/landing_page/footer";

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <FAQSection />
            <Footer />
        </main>
    );
}