import { YStack, H1, XStack, Paragraph } from "tamagui"

export const Testimonials = () => {
  return (
    <YStack width="100vw" height="100vh" borderWidth={2} gap={40}>
      <YStack p={24} px={120}>
        <H1 fontWeight="bold">Meinungen aus bisheriger Zusammenarbeit</H1>
        <XStack justify="center">
          <XStack borderWidth={1} maxW="50%">
            <Paragraph size="$10" text="center">
              Hier ein erster Text von Testimonial von jemandem über mich
            </Paragraph>
          </XStack>
        </XStack>
      </YStack>
    </YStack>
  )
}