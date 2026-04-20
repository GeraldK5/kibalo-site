import Navbar from "@/components/landing_page/top_nav_bar";
import ContactForm from "@/components/landing_page/contact/contact_us";
import Footer from "@/components/landing_page/footer";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />
            <ContactForm />
            <Footer />
        </main>
    );
}