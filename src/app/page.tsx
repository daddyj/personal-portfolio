'use client'

import { NextTamaguiProvider } from "@/components/TamaguiNextProvider/TamaguiNextProvider";
import { YStack } from "tamagui";
import { getImageProps } from 'next/image'
import { useState } from "react";
import { Hero } from "./Hero";

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map((str) => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}

export default function Home() {

  return (
    <NextTamaguiProvider>
      <Hero />
      <YStack width="100vw" height="100vh" />
    </NextTamaguiProvider >
  );
}
