import { About } from "@/app/sections/About";
import { Contact } from "@/app/sections/Contact";
import { Hero } from "@/app/sections/Hero";
import { Projects } from "@/app/sections/Projects";
import { Skills } from "@/app/sections/Skills";
import { TopNavigation } from "@/app/components/TopNavigation";

export default function Home() {
  return (
    <div className="bg-blue-400">
      <TopNavigation />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}