export const Skills = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex flex-col p-[80px]">
        <div className="grid grid-cols-[minmax(200px,1fr)_2fr_200px] grid-rows-[auto_auto_auto] gap-16">
          <h2 className="text-4xl font-bold">Technologien</h2>
          <p>Diese Technologien nutze ich täglich in meiner Arbeit Software für das Web und nativer App-Entwicklung. Mein Ziel ist es ein Setup zu haben wobei ich maximale Wiederverwendbarkeit und Vereinheitlichung von Code optimiere. Die Verwendung von Tamagui als UI Kit und react-native bzw. react als UI Bibliothek habe ich die Möglichkeit Code einmal zu schreiben in für drei Plattformen anzubieten: Das Web, Nativ für iOS und Nativ für Android. </p>
          <div className="flex flex-col gap-1 text-end font-bold">
            <p>Javascript</p>
            <p>Typescript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>React-Native</p>
            <p>React</p>
            <p>Tamagui</p>
            <p>Material UI</p>
            <p>Tailwind CSS</p>
            <p>NextJS</p>
            <p>Firebase</p>
            <p>Git</p>
            <p>Github/ GitLab</p>
            <p>Google Cloud</p>
            <p>Google Meet</p>
            <p>Miro / Trello / Atlassian Tools</p>
          </div>

          <h2 className="text-4xl font-bold">Social Skills</h2>
          <p>Neben der Liebe zur Optimierung im technologischen Bereich sehe ich es als essentiell an als Software Entwickler auch methodisch und kommunikativ eine verständliche Brücke zur gemeinsamen Entwicklung zu schaffen. Agile Arbeitsweisen begeistern mich und begleiten mich nun seit mehreren Jahren. Gleichzeitig ist mir ein klassisches Projektmanagement nach Wasserfall Methodik auch kein Fremdwort.</p>
          <div className="flex flex-col gap-1 text-end font-bold">
            <p>SCRUM</p>
            <p>Kanban</p>
            <p>Google OKRs</p>
            <p>Lean</p>
            <p>Requirements Engineering</p>
          </div>

          <h2 className="text-4xl font-bold">Lebenslauf</h2>
          <p>Hier sind Verweise zu meinem Lebenslauf in unterschiedlichen Formaten. Dort sind gute Überblicke über meine bisherige Berufserfahrung aufgelistet. Schau gerne mal rein.</p>
          <div className="flex flex-col gap-2 text-end font-bold">
            <p>PDF herunterladen</p>
            <p>LinkedIn Profil ansehen</p>
            <p>Github Profil ansehen</p>
          </div>
        </div>
      </div>
    </div>
  )
}