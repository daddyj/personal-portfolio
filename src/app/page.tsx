'use client'

import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Grid } from "./components/Grid";
import HeroEffect, { Hero, HeroEffectCanvas } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Testimonials } from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <HeroEffect /> */}
      {/* <HeroEffectCanvas /> */}
      <About />
    </>
  );
}
