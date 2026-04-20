import Navbar from "@/components/landing_page/top_nav_bar";
import PrivacyContent from "@/components/landing_page/privacy_policy/privacy_policy";
import Footer from "@/components/landing_page/footer";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <PrivacyContent />
            <Footer />
        </main>
    );
}