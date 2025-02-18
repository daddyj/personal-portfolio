/* eslint-disable @next/next/no-img-element */
import { H1, H2, H3, XStack, YStack } from "tamagui"

export const Hero = () => {
  return (
    <YStack height="100vh" width="100vw" justify="space-between" position="relative">
      <img
        src="/hero-2.png"
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

      {/* <video autoPlay muted loop playsInline aria-label="Hero Video by Ron Lach : https://www.pexels.com/video/back-view-of-a-boy-looking-a-screen-9783697/" style={{ width: '100%', height: '100vh', objectFit: 'cover', position: 'absolute' }}>
        <source src="/hero.mp4" type="video/mp4" />
      </video> */}
      <video autoPlay muted loop playsInline aria-label="Hero Video by Ron Lach : https://www.pexels.com/video/back-view-of-a-boy-looking-a-screen-9783697/" style={{ width: '100%', height: '100vh', objectFit: 'cover', position: 'absolute' }}>
        <source src="/hero-2.mp4" type="video/mp4" />
      </video>

      <YStack>
        <XStack>
          <H1 background="tomato" px={40} py={16}>Acun Gürsoy</H1>
        </XStack>
      </YStack>

      <YStack height={200} background="tomato" p={32} gap={16} self="flex-end">
        <H2>Softwareentwicklung Web / Native</H2>
        <XStack justify="center">
          <H3 hoverStyle={{ scale: 2, cursor: 'pointer', borderWidth: 2, transform: 'rotate(2deg)', p: 16 }} animation="bouncy" borderBottomWidth={2}>Hier lang</H3>
        </XStack>
      </YStack>
    </YStack >
  )
}