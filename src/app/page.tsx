'use client'

import { ArrowDownIcon } from "@heroicons/react/24/outline";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export default function Home() {
  return (
    <div className="bg-blue-400">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div className="fixed bottom-16 left-16">
        <ArrowDownIcon className="size-32 hover:cursor-pointer" />
      </div>
    </div>
  );
}
