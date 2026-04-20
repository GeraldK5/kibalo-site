import Navbar from "@/components/landing_page/top_nav_bar";
import Footer from "@/components/landing_page/footer";
import TermsContent from "@/components/landing_page/tor/tor";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <TermsContent />
            <Footer />
        </main>
    );
}