import { H2, Paragraph, XStack, YStack } from "tamagui"

export const Skills = () => {
  return (
    <YStack width="100vw" height="100vh" borderWidth={2}>
      <YStack p={40} px={120} pr={80} gap={80} >
        <XStack gap={2}>
          <XStack flexBasis="30%">
            <H2 fontWeight="bold">Technologien</H2>
          </XStack>
          <XStack flexBasis="42%">
            <Paragraph>Diese Technologien nutze ich täglich in meiner Arbeit Software für das Web und nativer App-Entwicklung. Mein Ziel ist es ein Setup zu haben wobei ich maximale Wiederverwendbarkeit und Vereinheitlichung von Code optimiere. Die Verwendung von Tamagui als UI Kit und react-native bzw. react als UI Bibliothek habe ich die Möglichkeit Code einmal zu schreiben in für drei Plattformen anzubieten: Das Web, Nativ für iOS und Nativ für Android. </Paragraph>
          </XStack>
          <XStack flex={1} justify="flex-end">
            <YStack>
              <Paragraph text="right" fontWeight="bold">Javascript</Paragraph>
              <Paragraph text="right" fontWeight="bold">Typescript</Paragraph>
              <Paragraph text="right" fontWeight="bold">HTML</Paragraph>
              <Paragraph text="right" fontWeight="bold">CSS</Paragraph>
              <Paragraph text="right" fontWeight="bold">React-Native</Paragraph>
              <Paragraph text="right" fontWeight="bold">React</Paragraph>
              <Paragraph text="right" fontWeight="bold">Tamagui</Paragraph>
              <Paragraph text="right" fontWeight="bold">Material UI</Paragraph>
              <Paragraph text="right" fontWeight="bold">Tailwind CSS</Paragraph>
              <Paragraph text="right" fontWeight="bold">NextJS</Paragraph>
              <Paragraph text="right" fontWeight="bold">Firebase</Paragraph>
              <Paragraph text="right" fontWeight="bold">Git</Paragraph>
              <Paragraph text="right" fontWeight="bold">Github/ GitLab</Paragraph>
              <Paragraph text="right" fontWeight="bold">Google Cloud</Paragraph>
              <Paragraph text="right" fontWeight="bold">Google Meet</Paragraph>
              <Paragraph text="right" fontWeight="bold">Miro / Trello / Atlassian Tools</Paragraph>
              <Paragraph text="right" fontWeight="bold"></Paragraph>
            </YStack>
          </XStack>
        </XStack>

        <XStack gap={2}>
          <XStack flexBasis="30%">
            <H2 fontWeight="bold">Social Skills</H2>
          </XStack>
          <XStack flexBasis="42%">
            <Paragraph>Neben der Liebe zur Optimierung im technologischen Bereich sehe ich es als essentiell an als Software Entwickler auch methodisch und kommunikativ eine verständliche Brücke zur gemeinsamen Entwicklung zu schaffen. Agile Arbeitsweisen begeistern mich und begleiten mich nun seit mehreren Jahren. Gleichzeitig ist mir ein klassisches Projektmanagement nach Wasserfall Methodik auch kein Fremdwort.</Paragraph>
          </XStack>
          <XStack flex={1} justify="flex-end">
            <YStack>
              <Paragraph text="right" fontWeight="bold">SCRUM</Paragraph>
              <Paragraph text="right" fontWeight="bold">Kanban</Paragraph>
              <Paragraph text="right" fontWeight="bold">Google OKRs</Paragraph>
              <Paragraph text="right" fontWeight="bold">Lean</Paragraph>
              <Paragraph text="right" fontWeight="bold">Requirements Engineering</Paragraph>
            </YStack>
          </XStack>
        </XStack>
        <XStack gap={2}>
          <XStack flexBasis="30%">
            <H2 fontWeight="bold">Lebenslauf</H2>
          </XStack>
          <XStack flexBasis="42%">
            <Paragraph>Hier sind Verweise zu meinem Lebenslauf in unterschiedlichen Formaten. Dort sind gute Überblicke über meine bisherige Berufserfahrung aufgelistet. Schau gerne mal rein.</Paragraph>
          </XStack>
          <XStack flex={1} justify="flex-end">
            <YStack>
              <Paragraph text="right" fontWeight="bold">PDF herunterladen</Paragraph>
              <Paragraph text="right" fontWeight="bold">LinkedIn Profil</Paragraph>
              <Paragraph text="right" fontWeight="bold">Github Profil</Paragraph>
            </YStack>
          </XStack>
        </XStack>
      </YStack>
    </YStack>
  )
}