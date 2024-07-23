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
      <div className="container mt-32 mx-auto px-8 ">
          <HeroSection id="" />
          <AboutSection id="about"/>
          <ProjectsSection id="projects"/>
          <ContactsSection id="contacts"/>
      </div>
    </main>
  );
}
