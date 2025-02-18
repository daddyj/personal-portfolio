import { YStack, XStack, H1, Paragraph } from "tamagui"

export const Skills = () => {
  return (
    <YStack width="100vw" height="100vh" borderWidth={2}>
      <YStack p={40} px={120} pr={80} gap={80} >
        <XStack gap={2}>
          <XStack flexBasis="40%">
            <H1 fontWeight="bold">Technologien</H1>
          </XStack>
          <XStack flexBasis="42%">
            <Paragraph>Diese Technologien nutze ich täglich in meiner Arbeit Software für das Web und nativer App-Entwicklung. Mein Ziel ist es ein Setup zu haben wobei ich maximale Wiederverwendbarkeit und Vereinheitlichung von Code optimiere. Die Verwendung von Tamagui als UI Kit und react-native bzw. react als UI Bibliothek habe ich die Möglichkeit Code einmal zu schreiben in für drei Plattformen anzubieten: Das Web, Nativ für iOS und Nativ für Android. </Paragraph>
          </XStack>
          <XStack flex={1} justify="flex-end">
            <YStack>
              <Paragraph text="right">Javascript</Paragraph>
              <Paragraph text="right">Typescript</Paragraph>
              <Paragraph text="right">HTML</Paragraph>
              <Paragraph text="right">CSS</Paragraph>
              <Paragraph text="right">React-Native</Paragraph>
              <Paragraph text="right">React</Paragraph>
              <Paragraph text="right">Tamagui</Paragraph>
              <Paragraph text="right">Material UI</Paragraph>
              <Paragraph text="right">Tailwind CSS</Paragraph>
              <Paragraph text="right">NextJS</Paragraph>
              <Paragraph text="right">Firebase</Paragraph>
              <Paragraph text="right">Git</Paragraph>
              <Paragraph text="right">Github/ GitLab</Paragraph>
              <Paragraph text="right">Google Cloud</Paragraph>
              <Paragraph text="right">Google Meet</Paragraph>
              <Paragraph text="right">Miro / Trello / Atlassian Tools</Paragraph>
              <Paragraph text="right"></Paragraph>
            </YStack>
          </XStack>
        </XStack>

        <XStack gap={2}>
          <XStack flexBasis="40%">
            <H1 fontWeight="bold">Social Skills</H1>
          </XStack>
          <XStack flexBasis="42%">
            <Paragraph>Neben der Liebe zur Optimierung im technologischen Bereich sehe ich es als essentiell an als Software Entwickler auch methodisch und kommunikativ eine verständliche Brücke zur gemeinsamen Entwicklung zu schaffen. Agile Arbeitsweisen begeistern mich und begleiten mich nun seit mehreren Jahren. Gleichzeitig ist mir ein klassisches Projektmanagement nach Wasserfall Methodik auch kein Fremdwort.</Paragraph>
          </XStack>
          <XStack flex={1} justify="flex-end">
            <YStack>
              <Paragraph text="right">SCRUM</Paragraph>
              <Paragraph text="right">Kanban</Paragraph>
              <Paragraph text="right">Google OKRs</Paragraph>
              <Paragraph text="right">Lean</Paragraph>
              <Paragraph text="right">Requirements Engineering</Paragraph>
            </YStack>
          </XStack>
        </XStack>
        <XStack gap={2}>
          <XStack flexBasis="40%">
            <H1 fontWeight="bold">Lebenslauf</H1>
          </XStack>
          <XStack flexBasis="42%">
            <Paragraph>Hier sind Verweise zu meinem Lebenslauf in unterschiedlichen Formaten. Dort sind gute Überblicke über meine bisherige Berufserfahrung aufgelistet. Schau gerne mal rein.</Paragraph>
          </XStack>
          <XStack flex={1} justify="flex-end">
            <Paragraph>TBD: Badges mit icons</Paragraph>
          </XStack>
        </XStack>
      </YStack>
    </YStack>
  )
}