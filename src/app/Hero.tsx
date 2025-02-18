import { H1, H2, XStack, YStack } from "tamagui"

export const Hero = () => {
  return (
    <YStack height="100vh" width="100vw" justify="flex-end" >
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

      <YStack width="62vw" height={200} background="tomato" p={32} gap={8} self="flex-end">
        <H1>Unterstützung gefällig?</H1>
        <XStack>
          <H2 hoverStyle={{ fontSize: 64, cursor: 'pointer', borderBottomColor: "#000000" }} animation="bouncy" borderBottomWidth={2}>Hier lang!</H2>
        </XStack>
      </YStack>
    </YStack >
  )
}