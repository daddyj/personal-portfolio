import { Grid, GridItem } from "@/app/components/Grid";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { DocumentIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import { useNavigationContext } from "../lib/useNavigationContext";
import { useViewportIntersect } from "../lib/useViewportIntersect";
import { GlitchCanvas } from "../components/GlitchCanvas";

const itemMapping = {
  '0,0': 'Javascript',
  '0,1': 'Typescript',
  '0,2': 'HTML',
  '1,0': 'CSS / SCSS',
  '1,1': 'SASS / CSS-in-JS',
  '1,2': 'React-Native',
  '2,0': 'React',
  '2,1': 'NextJS',
  '2,2': 'Tamagui UI',
  '3,0': 'Material UI',
  '3,1': 'Tailwind CSS',
  '3,2': 'Firebase',
  '4,0': 'Git',
  '4,1': 'Github / GitLab',
  '4,2': 'Google Cloud',
}

export const Skills = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const [showAllTechSkills, setShowAllTechSkills] = useState(false)

  const gridWrapperTech = useRef<HTMLDivElement>(null)
  const gridWrapperSocial = useRef<HTMLDivElement>(null)
  const gridWrapperCv = useRef<HTMLDivElement>(null)
  const { isVisible: isVisibleTech, isFullyVisible: isFullyVisibleTech } = useViewportIntersect(gridWrapperTech)
  const { isVisible: isVisibleSocial, isFullyVisible: isFullyVisibleSocial } = useViewportIntersect(gridWrapperSocial)
  const { isVisible: isVisibleCv, isFullyVisible: isFullyVisibleCv } = useViewportIntersect(gridWrapperCv)

  useEffect(() => {
    if (isVisibleTech) setCurrentSection('skillsTech')
    if (isVisibleSocial) setCurrentSection('skillsSocial')
    if (isVisibleCv) setCurrentSection('skillsCv')
    if (isFullyVisibleTech) setFullyVisible('skillsTech')
    if (isFullyVisibleSocial) setFullyVisible('skillsSocial')
    if (isFullyVisibleCv) setFullyVisible('skillsCv')
  }, [isFullyVisibleCv, isFullyVisibleSocial, isFullyVisibleTech, isVisibleCv, isVisibleSocial, isVisibleTech, setCurrentSection, setFullyVisible])

  return (
    <>
      <Grid ref={gridWrapperTech} id="skillsTech" className="grid-rows-[auto_16px_1fr]">
        <GridItem colSpan={4}>
          <h2 className="text-6xl">Technologien</h2>
        </GridItem>
        <GridItem colSpan={6}>
          <p className="text-2xl">Ich habe über die Jahre eine Reihe von Technologien für die Web- und Appentwicklung genutzt und mich über die Zeit auf einen Techstack fokussiert um optimale Ergebnisse erzielen zu können. Dabei hat sich React als meine Kern-Bibliothek im Frontend herausgestellt um maximale Wiederverwendbarkeit auf unterschiedlichen Plattformen zu gewährleisten: Das Web, nativ auf iOS und nativ auf Android. Ich liebe es immer wieder neue Sachen auszuprobieren und mich immer wieder von Kolleg:innen inspirieren zu lassen!</p>
        </GridItem>

        <GridItem colSpan={10} />

        <GridItem colSpan={4} />
        <GridItem colSpan={6} className="flex flex-col gap-4">
          {!showAllTechSkills && (
            <>
              { /* @ts-expect-error type casting open */}
              <GlitchCanvas rows={5} cols={3} mode="skills" getLabel={(row, col) => itemMapping[`${row},${col}`]} />
              <div className="flex gap-4 text-xl items-center hover:text-blue-500 hover:cursor-pointer transition-all" onClick={() => setShowAllTechSkills(true)}>
                <EyeIcon className="size-12" />
                <p>Alle anzeigen</p>
              </div>
            </>
          )}
          {showAllTechSkills && (
            <>
              <div className="grid grid-cols-3 grid-rows-5 gap-[1px] h-full animate-fade">
                {
                  // @ts-expect-error type casting open
                  Object.keys(itemMapping).map((rowColString) => <GridItem key={rowColString} className="bg-blue-500 flex justify-center items-center font-bold">{itemMapping[rowColString]}</GridItem>)
                }
              </div>
              <div className="flex gap-4 text-xl items-center hover:text-blue-500 hover:cursor-pointer transition-all" onClick={() => setShowAllTechSkills(false)}>
                <EyeSlashIcon className="size-12" />
                <p>Zufällig anzeigen</p>
              </div>
            </>
          )}
        </GridItem>
      </Grid>
      <Grid ref={gridWrapperSocial} id="skillsSocial" rows={2} className="">
        <GridItem colSpan={4} className="flex flex-col gap-16">
          <h2 className="text-6xl ">Social Skills</h2>
          <div className="w-64 h-64 rounded-full bg-center bg-no-repeat bg-blue-500" style={{ backgroundImage: 'url(/skills-cv-section-me.png)', backgroundSize: "100%" }} />
        </GridItem>
        <GridItem colSpan={6}>
          <p className="text-2xl">Meine Leidenschaft für technologische Optimierung kombiniere ich mit einem starken methodischen und kommunikativen Ansatz. Als Softwareentwickler lege ich großen Wert darauf, eine verständliche Brücke zwischen Technik und gemeinsamer Projektentwicklung zu schaffen. Agile Arbeitsmethoden begeistern mich und prägen seit mehreren Jahren meinen Arbeitsstil. Gleichzeitig verfüge ich über fundierte Erfahrungen im klassischen Projektmanagement nach der Wasserfall-Methodik – Flexibilität und Anpassungsfähigkeit sind für mich selbstverständlich.<br />
            <br />
            Ansonsten findet man mich mit meinem best buddy stets in der Natur wieder, denn hier kann ich maximal abschalten und alle notwendige Energie sammeln die ich mir wünsche.</p>
        </GridItem>
        <GridItem colSpan={4} />
        <GridItem colSpan={6} className="flex flex-col text-xl gap-4 justify-end">
          <div className="flex gap-4 flex-wrap text-2xl">
            <p className="font-bold">Agile Methoden:</p>
            <p>SCRUM</p>
            <p>#</p>
            <p>Kanban</p>
            <p>#</p>
            <p>Google-OKRs</p>
            <p>#</p>
            <p>Lean</p>
            <p>#</p>
            <p>Design-Sprint</p>
          </div>
          <div className="flex gap-4 flex-wrap text-2xl">
            <p className="font-bold">Tools:</p>
            <p>Google-Meet</p>
            <p>#</p>
            <p>Slack</p>
            <p>#</p>
            <p>Teams</p>
            <p>#</p>
            <p>Miro / Trello / Atlassian Tools</p>
          </div>
        </GridItem>
      </Grid >
      <Grid ref={gridWrapperCv} id="skillsCv" className="grid-rows-[auto_1fr]">
        <GridItem colSpan={4} >
          <h2 className="text-6xl">Lebenslauf</h2>
        </GridItem>
        <GridItem colSpan={6} >
          <p className="text-2xl">Nachfolgend unterschiedliche Perspektiven um einen detaillierteren Einblick in meine bisherige Erfahrung zu bekommen. <br />
            Da ich viele Jahre auch in angestellten Verhältnissen gearbeitet habe, bietet sich durch folgende Perspektiven auch dazu ein besseres Verständnis.</p>
        </GridItem>
        <GridItem colSpan={4} />
        <GridItem colSpan={6} className="flex gap-16 items-center justify-around">
          <a href="#" target="_blank">
            <div className="flex flex-col items-center justify-end h-40 min-w-[180px] hover:font-bold hover:text-blue-500 hover:cursor-pointer gap-2 border-b-2 border-transparent hover:border-blue-500 hover:rotate-2 hover:scale-[121%] transition-all">
              <DocumentIcon className="size-32" />
              <p>PDF herunterladen</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/acun-g%C3%BCrsoy-83b8ab139/" target="_blank">
            <div className="flex flex-col items-center justify-end h-40 min-w-[180px] hover:font-bold hover:text-blue-500 hover:cursor-pointer gap-4 border-b-2 border-transparent hover:border-blue-500 hover:rotate-2 hover:scale-[121%] transition-all">
              <div className="bg-white p-4 rounded-sm">
                <Image width={128} height={128} src="/linkedin-logo.svg" alt="Link to Github account" />
              </div>
              <p>LinkedIn Profil</p>
            </div>
          </a>
          {/* <a href="https://github.com/daddyj" target="_blank">
            <div className="flex flex-col items-center justify-end h-40 min-w-[180px] hover:font-bold hover:text-blue-500 hover:cursor-pointer gap-4 border-b-2 border-transparent hover:border-blue-500 hover:rotate-2 hover:scale-[121%] transition-all">
              <Image width={128} height={128} src="/github-logo.svg" alt="Link to Github account" className="" />
              <p>Github Konto</p>
            </div>
          </a> */}
        </GridItem>
      </Grid >
    </>
  )
}