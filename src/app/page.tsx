import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import HomeSection from "@/components/sections/Home/Home";
import ServicesSection from "@/components/sections/Services/Services";
import ProjectsSection from "@/components/sections/Projects/Projects";
import AboutSection from "@/components/sections/About/About";
import ContactSection from "@/components/sections/Contact/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
