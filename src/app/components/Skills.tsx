export const Skills = () => {
  return (
    <div className="w-screen bg-black">
      <div className="flex flex-col p-[80px]">
        <div className="grid grid-cols-[400px_1fr_400px] grid-rows-[auto_auto_auto] gap-12">
          <h2 className="text-5xl font-bold">Technologien</h2>
          <p className="text-xl">Ich habe über die Jahre eine Reihe von Technologien für die Web- und Appentwicklung genutzt und mich über die Zeit auf einen Techstack fokussiert um optimale Ergebnisse erzielen zu können. Dabei hat sich React als meine Kern-Bibliothek herausgestellt um maximale Wiederverwendbarkeit von auf unterschiedlichen Plattformen zu gewährleisten: Das Web, native auf iOS und nativ auf Android. Ich liebe es immer wieder neue Sachen auszuprobieren und mich immer wieder von Kolleg:innen inspirieren zu lassen!</p>
          <div className="flex flex-col gap-1 text-end">
            <p className="font-bold">Programmiersprachen:</p>
            <p>Javascript</p>
            <p>Typescript</p>
            <p>HTML</p>
            <p>CSS</p>
            <p>SCSS / SASS / CSS-in-JS</p>
            <p className="font-bold">UI-Bibliotheken/-Frameworks:</p>
            <p>React-Native</p>
            <p>React</p>
            <p>NextJS</p>
            <p className="font-bold">UI-Style/-Component KITs:</p>
            <p>Tamagui</p>
            <p>Material UI</p>
            <p>Tailwind CSS</p>
            <p className="font-bold">Cloud:</p>
            <p>Firebase</p>
            <p>Git</p>
            <p>Github/ GitLab</p>
            <p>Google Cloud</p>
          </div>

          <h2 className="text-5xl font-bold">Social Skills</h2>
          <p className="text-xl">Neben der Liebe zur Optimierung im technologischen Bereich sehe ich es als essentiell an als Software Entwickler auch methodisch und kommunikativ eine verständliche Brücke zur gemeinsamen Entwicklung zu schaffen. Agile Arbeitsweisen begeistern mich und begleiten mich nun seit mehreren Jahren. Gleichzeitig ist mir ein klassisches Projektmanagement nach Wasserfall Methodik auch kein Fremdwort.</p>
          <div className="flex flex-col gap-1 text-end">
            <p className="font-bold">Agile Methoden:</p>
            <p>SCRUM</p>
            <p>Kanban</p>
            <p>Google OKRs</p>
            <p>Lean</p>
            <p>Requirements Engineering</p>
            <p className="font-bold">Tools:</p>
            <p>Google Meet</p>
            <p>Miro / Trello / Atlassian Tools</p>
          </div>

          <h2 className="text-5xl font-bold">Lebenslauf</h2>
          <p className="text-xl">Hier sind Verweise zu meinem Lebenslauf in unterschiedlichen Formaten. Dort sind gute Überblicke über meine bisherige Berufserfahrung aufgelistet. Schau gerne mal rein.</p>
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