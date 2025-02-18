'use client'

import { NextTamaguiProvider } from "@/components/TamaguiNextProvider/TamaguiNextProvider";
import { YStack } from "tamagui";
import { getImageProps } from 'next/image'
import { useState } from "react";

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
      <YStack height="100vh" width="100vw" >
        <img
          src="/hero.png"
          alt="Hero Banner"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'opacity 0.5s',
          }}
        />

        <video autoPlay muted loop playsInline aria-label="Hero Video by Ron Lach : https://www.pexels.com/video/back-view-of-a-boy-looking-a-screen-9783697/" style={{ width: '100%', height: '100vh', objectFit: 'cover', position: 'absolute' }}>
          <source src="/hero.mp4" type="video/mp4" />
        </video>
      </YStack>
    </NextTamaguiProvider >
  );
}
