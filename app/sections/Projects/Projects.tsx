import { useEffect, useRef, useState } from 'react'

import { Grid, GridItem } from '@/app/components/Grid'
import {
  Firebase,
  GCloud,
  Nextjs,
  React,
  ReactNative,
  Tamagui,
} from '@/app/components/Icons'
import { MaterialUi } from '@/app/components/Icons/MaterialUi'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

import { ItemPreview } from './ItemPreview'
import { NavItem } from './NavItem'

const projects = ['myla', 'theanswer-hp', 'myla-portal'] as const
export type ProjectListItem = (typeof projects)[number]

const projectDetails = {
  myla: {
    navLabel: 'Myla',
    role: 'Fullstack Entwicklung App',
    techStack: [
      <ReactNative key="react-native" />,
      <Tamagui key="tamagui" />,
      <Firebase key="firebase" />,
      <GCloud key="google-cloud" />,
    ],
    images: ['/myla-3.png', '/myla-2.png', '/myla-1.png'],
    description: (
      <>
        Die App Myla hat als Ziel eine individuelle Lernbegleitung für jedes
        Kind anzubieten. Es nutzt künstliche Intelligenz in einer geführten und
        interaktiven Erfahrung für die Kinder, so dass Sie spielerisch das
        selbstständige Lernen erhalten. <br />
        Die App habe ich vollständig entwickelt und im iOS AppStore für iPads
        und iPhones veröffentlicht. Android ist auch in Planung. Mehr
        Informationen findest Du{' '}
        <a
          href="https://the-answer.org"
          target="_blank"
          className="border-b-2 hover:text-blue-500"
        >
          hier
        </a>
      </>
    ),
  },
  'theanswer-hp': {
    navLabel: 'THE ANSWER GmbH Homepage',
    role: 'Fullstack Entwicklung Homepage und UI Design',
    techStack: [
      <React key="react" />,
      <Nextjs key="nextjs" />,
      <MaterialUi key="material-ui" />,
    ],
    images: ['/the-answer-3.png', '/the-answer-2.png', '/the-answer-1.png'],
    description: (
      <>
        Im Rahmen meiner Firmengründung mit zwei Freunden, um die App Myla auch
        offiziell zu vertreiben, habe ich die Firmenseite entwickelt. Ich habe
        mich bewusst dazu entschieden es ohne Baukasten oder CRM zu machen um
        hier hauptsächlich ein Referenzprojekt als Grundlage zur Diskussion für
        Kombinationen von Technologien zu haben. <br />
        Ich finde es immer noch spannend und offen zu sagen, welche Kombination
        &quot;die Beste&quot; ist.
      </>
    ),
  },
  'myla-portal': {
    navLabel: 'Myla Schulportal',
    role: 'Fullstack Entwicklung Portal und UI Design',
    techStack: [
      <React key="react" />,
      <Nextjs key="nextjs" />,
      <MaterialUi key="material-ui" />,
      <Firebase key="firebase" />,
    ],
    images: ['/myla-portal-3.png', '/myla-portal-2.png', '/myla-portal-1.png'],
    description: (
      <>
        Die App Myla wird sowohl auf dem Privatmarkt vertrieben, als auch für
        Schulen auf geschäftlicher Ebene über eine jährliche Schullizenz pro
        Gerät. Hierfür habe ich eine minimale Form von Portal entwickelt um zum
        Einen den time-to-market nicht zu verzögern und zum Anderen dem Benutzer
        nur die Informationsmenge und Funktionsvielfalt mitzugeben die zu
        jeweiligem Entwickklungsstand am hilfreichsten ist.
      </>
    ),
  },
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
    <Grid
      ref={gridWrapper}
      id="projects"
      className="grid-rows-[auto] sm:grid-rows-[auto_80px_auto_80px_1fr]"
    >
      <GridItem className="col-span-10">
        <h1 className="text-4xl sm:text-6xl">Meine aktiven Projekte</h1>
      </GridItem>

      <GridItem className="col-span-10" />

      <GridItem className="text-md col-span-10 flex flex-col gap-4 pb-8 sm:col-span-3 sm:gap-8 sm:pb-0 sm:text-4xl">
        {projects.map((projectKey: ProjectListItem) => (
          <NavItem
            key={`nav_${projectKey}`}
            onClick={() => setCurrentProject(projectKey)}
            selected={currentProject === projectKey}
            label={projectDetails[projectKey].navLabel}
          />
        ))}
      </GridItem>
      <ItemPreview {...projectDetails[currentProject]} />
    </Grid>
  )
}
