import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactsSection from "./components/ContactsSection"

export default function Home() {
  return (
    <main className="flex w-full flex-col bg-[#121212]  ">
      <Navbar/>
      <div className="container mt-32 mx-auto md:px-20 lg:px-20 xl:px-20 lg:px-12 md:px-8 sm:px-4">
          <HeroSection id="" />
          <AboutSection />
          <ProjectsSection />
          <ContactsSection id="contacts"/>
      </div>
    </main>
      
  );
}
