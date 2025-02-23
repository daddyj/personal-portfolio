import { Grid, GridItem } from '@/app/components/Grid'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'
import { useEffect, useRef, useState } from 'react'
import { ItemPreview } from './ItemPreview'
import { NavItem } from './NavItem'

const projects = ['myla', 'theanswer-hp', 'myla-portal', 'own-hp'] as const
export type ProjectListItem = typeof projects[number]

const projectDetails = {
  myla: {
    navLabel: 'Myla',
    role: 'Fullstack Entwicklung App und Bereitstellung der Cloud Infrastruktur.',
    techStack: ['React-Native', 'Tamagui UI', 'Firebase', 'Google-Cloud'],
    images: ["/myla-3.png", "/myla-2.png", "/myla-1.png"],
    description: <>Die App Myla hat als Ziel eine individuelle Lernbegleitung für jedes Kind anzubieten. Es nutzt künstliche Intelligenz in einer geführten und interaktiven Erfahrung für die Kinder, so dass Sie spielerisch das selbstständige Lernen erhalten. <br />
      Die App habe ich vollständig entwickelt und im iOS AppStore für iPads und iPhones veröffentlicht. Android ist auch in Planung. Mehr Informationen findest Du <a href="https://the-answer.org" target="_blank">hier</a>:</>
  },
  'theanswer-hp': {
    navLabel: 'THE ANSWER GmbH Homepage',
    role: 'Fullstack Entwicklung Homepage und UI Design',
    techStack: ['React', 'NextJS', 'Material UI'],
    images: ["/the-answer-3.png", "/the-answer-2.png", "/the-answer-1.png"],
    description: <>Im Rahmen meiner Firmengründung mit zwei Freunden, um die App Myla auch offiziell zu vertreiben, habe ich die Firmenseite entwickelt. Ich habe mich bewusst dazu entschieden es ohne Baukasten oder CRM zu machen um hier hauptsächlich ein Referenzprojekt als Grundlage zur Diskussion für Kombinationen von Technologien zu haben. <br />
      Ich finde es immer noch spannend und offen zu sagen, welche Kombination &quot;die Beste&quot; ist.</>
  },
  'myla-portal': {
    navLabel: 'Myla Schulportal',
    role: 'Fullstack Entwicklung Portal und UI Design',
    techStack: ['React', 'NextJS', 'Material UI', 'Firebase'],
    images: ["/myla-portal-3.png", "/myla-portal-2.png", "/myla-portal-1.png"],
    description: <>Die App Myla wird sowohl auf dem Privatmarkt vertrieben, als auch für Schulen auf geschäftlicher Ebene über eine jährliche Schullizenz pro Gerät. Hierfür habe ich eine minimale Form von Portal entwickelt um zum Einen den time-to-market nicht zu verzögern und zum Anderen dem Benutzer nur die Informationsmenge und Funktionsvielfalt mitzugeben die zu jeweiligem Entwickklungsstand am hilfreichsten ist.</>
  },
  'own-hp': {
    navLabel: 'Acun Gürsoy Homepage',
    role: 'Fullstack Entwicklung Homepage und UI Design',
    techStack: ['React', 'NextJS', 'Tailwind CSS', 'Canvas'],
    images: ["/own-hp-3.png", "/own-hp-2.png", "/own-hp-1.png"],
    description: <>Für eine weitere technologische Fallstudie und um auch eine produktive, technische &quot;Spielwiese&quot; zu haben, habe ich auch meine eigene Homepage entwickelt. Hier waren meine Ziele möglichst zeiteffizient eine flexible und wartbare Lösung zu schaffen.</>
  }
}

export const Projects = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)
  const [currentProject, setCurrentProject] = useState<ProjectListItem>('myla')

  useEffect(() => {
    if (isVisible) setCurrentSection('projects')
    if (isFullyVisible) setFullyVisible('projects')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <Grid ref={gridWrapper} id="projects" className="grid-rows-[auto] sm:grid-rows-[auto_80px_auto_auto] h-auto">
      <GridItem className='col-span-10'>
        <h1 className="text-4xl sm:text-6xl">Meine aktiven Projekte</h1>
      </GridItem>
      <GridItem className='col-span-10' />
      <GridItem className='col-span-10 sm:col-span-3 text-md sm:text-4xl flex flex-col gap-4 sm:gap-8 pb-8 sm:pb-0'>
        {projects.map((projectKey: ProjectListItem) => (
          <NavItem
            key={`nav_${projectKey}`}
            onClick={() => setCurrentProject(projectKey)}
            selected={currentProject === projectKey}
            label={projectDetails[projectKey].navLabel}
          />
        ))}
      </GridItem>
      <ItemPreview
        {...projectDetails[currentProject]}
      />
    </Grid >
  )
}