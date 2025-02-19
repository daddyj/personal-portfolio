import { H1, Paragraph, XStack, YStack } from "tamagui"
import Image from 'next/image'

export const Projects = () => {
  return (
    <YStack width="100vw" height="100vh" background="#000000">
      <YStack p={80} px={160} gap={120}>
        <H1 fontWeight="bold">Meine aktiven Projekte</H1>
        {/* Projekt: Myla */}
        <XStack gap={40}>
          <YStack width={660 / 1.25} justify="center" items="center">
            <XStack style={{ borderRadius: 16, overflow: 'hidden', borderWidth: 1 }}>
              <Image src="/myla-1.png" width={330 / 1.25} height={717 / 1.25} alt="Erstes Bild zu Myla App" />
              <Image src="/myla-2.png" width={330 / 1.25} height={717 / 1.25} alt="Erstes Bild zu Myla App" />
            </XStack>
          </YStack>
          <YStack flex={1} gap={32}>
            <Paragraph size="$8" text="justify">
              Die App Myla hat als Ziel eine individuelle Lernbegleitung für jedes Kind anzubieten. Es nutzt künstliche Intelligenz in einer geführten und interaktiven Erfahrung für die Kinder, so dass Sie spielerisch das selbstständige Lernen erhalten. <br />
              Die App habe ich vollständig entwickelt und im iOS AppStore für iPads und iPhones veröffentlicht. Android ist auch in Planung. Mehr Informationen findest Du hier: [TODO URL einfügen zu THE ANSWER Homepage]
            </Paragraph>
            <YStack gap={16}>
              <XStack>
                <Paragraph>Rollen</Paragraph>
              </XStack>
              <XStack>
                <Paragraph>TECH BADGES</Paragraph>
              </XStack>
            </YStack>
          </YStack>
        </XStack>
      </YStack>
    </YStack>
  )
}