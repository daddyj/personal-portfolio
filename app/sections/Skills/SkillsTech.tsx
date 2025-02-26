import { GlitchCanvas } from "@/app/components/GlitchCanvas";
import { Grid, GridItem } from "@/app/components/Grid";
import { useNavigationContext } from "@/app/lib/useNavigationContext";
import { useViewportIntersect } from "@/app/lib/useViewportIntersect";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useEffect, useRef, useState } from "react";

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

export const SkillsTech = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()

  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)


  const [showAllTechSkills, setShowAllTechSkills] = useState(true)


  useEffect(() => {
    if (isVisible) setCurrentSection('skillsTech')
    if (isFullyVisible) setFullyVisible('skillsTech')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <Grid ref={gridWrapper} id="skillsTech" className="grid-rows-[auto_auto_auto_auto_1fr] sm:grid-rows-[auto_16px_1fr]">
      <GridItem className="col-span-10 sm:col-span-4">
        <h2 className="text-4xl sm:text-6xl font-bold sm:font-normal">Technologien</h2>
      </GridItem>
      <GridItem className="col-span-10 sm:col-span-6">
        <p className="text-xl sm:text-2xl">Ich habe über die Jahre eine Reihe von Technologien für die Web- und Appentwicklung genutzt und mich über die Zeit auf einen Techstack fokussiert um optimale Ergebnisse erzielen zu können. Dabei hat sich React als meine Kern-Bibliothek im Frontend herausgestellt um maximale Wiederverwendbarkeit auf unterschiedlichen Plattformen zu gewährleisten: Das Web, nativ auf iOS und nativ auf Android. Ich liebe es immer wieder neue Sachen auszuprobieren und mich immer wieder von Kolleg:innen inspirieren zu lassen!</p>
      </GridItem>

      <GridItem className="col-span-10" />

      <GridItem className="col-span-10 sm:col-span-4" />
      <GridItem className="col-span-10 sm:col-span-6 flex flex-col gap-2 sm:gap-4">
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
                Object.keys(itemMapping).map((rowColString) => <GridItem key={rowColString} className="p-4 sm:p-0 bg-blue-500 flex justify-center items-center font-bold text-center text-xs sm:text-xl text-white">{itemMapping[rowColString]}</GridItem>)
              }
            </div>
            <div className="hidden sm:flex gap-4 text-xl items-center hover:text-blue-500 hover:cursor-pointer transition-all" onClick={() => setShowAllTechSkills(false)}>
              <EyeSlashIcon className="size-12" />
              <p>Zufällig anzeigen</p>
            </div>
          </>
        )}
      </GridItem>
    </Grid>
  )
}