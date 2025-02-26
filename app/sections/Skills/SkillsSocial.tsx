import { Grid, GridItem } from "@/app/components/Grid";
import { useNavigationContext } from "@/app/lib/useNavigationContext";
import { useViewportIntersect } from "@/app/lib/useViewportIntersect";
import { useEffect, useRef } from "react";

export const SkillsSocial = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()

  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)


  useEffect(() => {
    if (isVisible) setCurrentSection('skillsSocial')
    if (isFullyVisible) setFullyVisible('skillsSocial')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <Grid ref={gridWrapper} id="skillsSocial" rows={2} className="">
      <GridItem className="col-span-10 sm:col-span-4 flex flex-col sm:gap-16">
        <h2 className="text-4xl sm:text-6xl font-bold sm:font-normal">Social Skills</h2>
        <div className="my-16 sm:my-0 w-56 h-56 sm:w-64 sm:h-64 rounded-full bg-center bg-no-repeat bg-blue-500" style={{ backgroundImage: 'url(/skills-cv-section-me.jpeg)', backgroundSize: "100%" }} />
      </GridItem>
      <GridItem className="sm:pt-0 col-span-10 sm:col-span-6">
        <p className="text-xl sm:text-2xl">Meine Leidenschaft für technologische Optimierung kombiniere ich mit einem starken methodischen und kommunikativen Ansatz. Als Softwareentwickler lege ich großen Wert darauf, eine verständliche Brücke zwischen Technik und gemeinsamer Projektentwicklung zu schaffen. Agile Arbeitsmethoden begeistern mich und prägen seit mehreren Jahren meinen Arbeitsstil. Gleichzeitig verfüge ich über fundierte Erfahrungen im klassischen Projektmanagement nach der Wasserfall-Methodik – Flexibilität und Anpassungsfähigkeit sind für mich selbstverständlich.<br />
          <br />
          Ansonsten findet man mich mit meinem best buddy stets in der Natur wieder, denn hier kann ich maximal abschalten und alle notwendige Energie sammeln die ich mir wünsche.</p>
      </GridItem>
      <GridItem className="col-span-10 sm:col-span-4" />
      <GridItem className="col-span-10 sm:col-span-6 flex flex-col gap-4 justify-end">
        <div className="flex gap-2 sm:gap-4 flex-wrap text-md sm:text-2xl">
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
        <div className="flex gap-2 sm:gap-4 flex-wrap text-md sm:text-2xl">
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
    </Grid>
  )
}