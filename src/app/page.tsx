'use client'

import { NextTamaguiProvider } from "@/components/TamaguiNextProvider/TamaguiNextProvider";
import { YStack } from "tamagui";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Testimonials } from "./components/Testimonials";
import { montserrat } from "../../tamagui.config";
import { Projects } from "./components/Projects";

export default function Home() {
  return (
    <NextTamaguiProvider>
      <YStack background="tomato" style={montserrat.style}>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </YStack>
    </NextTamaguiProvider >
  );
}
