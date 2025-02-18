import { YStack, XStack, H1, H2 } from "tamagui"

export const About = () => {
  return (
    <YStack width="100vw" height="100vh">
      <YStack p={80} px={160} pr={0} pb={0} height="100vh" gap={80}>
        <XStack width="70vw">
          <H1 fontWeight="bold">Software Entwickler / <br /> Team Lead</H1>
        </XStack>
        <XStack justify="flex-end" px={80}>
          <XStack style={{
            overflow: 'hidden',
            backgroundImage: `url("/about-me.png")`,
            backgroundAttachment: 'fixed',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '806px 605px',
            backgroundPositionY: '25%'

          }} width="70vw" height="42vh" />
        </XStack>
        <XStack flex={1} width="60vw" items="flex-end" self="flex-end">
          <H2 size="$8" text="justify" background="#000000" p={24} px={40}>
            Hi, ich bin Acun. Ich unterstütze Entwicklungsteams sowohl aktiv bei der Entwicklung im Web und App Bereich als auch organisatorisch als Team Lead.</H2>
        </XStack>
      </YStack>
    </YStack>
  )
}