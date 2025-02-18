import { YStack, XStack, H1, H2 } from "tamagui"

export const About = () => {
  return (
    <YStack width="100vw" height="100vh">
      <YStack p={24} px={160} height="100vh" justify="space-between">
        <XStack width="70vw">
          <H1 fontWeight="bold">Software Entwickler / <br /> Team Lead</H1>
        </XStack>
        {/* <XStack>
              <XStack style={{
                borderRadius: 24, overflow: 'hidden'
              }} width={aboutMePicture.width / 1.5} height={aboutMePicture.height / 1.5} borderColor="$backgroundHover">
                <Image src='/about-me-2.png' width={aboutMePicture.width / 1.5} height={aboutMePicture.height / 1.5} alt="Picture of me with my dog" />
              </XStack>
            </XStack> */}
        <XStack flex={1} width="50vw" items="flex-end" self="flex-end">
          <H2 size="$8" text="justify">
            Hi, ich bin Acun. Ich unterstütze Entwicklungsteams sowohl aktiv bei der Entwicklung im Web und App Bereich als auch organisatorisch als Team Lead.</H2>
        </XStack>
      </YStack>
    </YStack>
  )
}