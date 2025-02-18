'use client'

import { NextTamaguiProvider } from "@/components/TamaguiNextProvider/TamaguiNextProvider";
import { YStack } from "tamagui";

export default function Home() {
  return (
    <NextTamaguiProvider>
      <YStack height="100vh" width="100vw" style={{ backgroundImage: '/file.svg' }}>
      </YStack>
    </NextTamaguiProvider>
  );
}
