import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Instructor from "@/components/Instructor";
import Programs from "@/components/Programs";
import ClientLogos from "@/components/ClientLogos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-primary/20 selection:text-brand-dark">
      <Header />
      <Hero />
      <Instructor />
      <Programs />
      <ClientLogos />
      <Contact />
      <Footer />
    </main>
  );
}
