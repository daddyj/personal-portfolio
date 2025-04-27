import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Auto-transition between images
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentImageIndex(
          (prev) => (prev + 1) % projectDetails[currentProject].images.length
        )
        setIsTransitioning(false)
      }, 500) // Half of the transition duration
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [currentProject])

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0)
  }, [currentProject])

  useEffect(() => {
    if (isVisible) setCurrentSection('projects')
    if (isFullyVisible) setFullyVisible('projects')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Fullscreen Image Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src={projectDetails[currentProject].images[currentImageIndex]}
          alt={projectDetails[currentProject].navLabel}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full w-full flex-col overflow-y-auto">
        <div className="w-full">
          {/* Header with gradient background */}
          <div className="bg-gradient-to-b from-black/80 to-transparent p-8">
            <h1 className="text-4xl font-bold text-white sm:text-6xl">
              {projectDetails[currentProject].navLabel}
            </h1>
          </div>

          {/* Project Navigation with semi-transparent background */}
          <div className="">
            <div className="flex gap-4">
              {projects.map((projectKey: ProjectListItem) => (
                <NavItem
                  key={`nav_${projectKey}`}
                  onClick={() => setCurrentProject(projectKey)}
                  selected={currentProject === projectKey}
                  label={projectDetails[projectKey].navLabel}
                />
              ))}
            </div>
          </div>

          {/* Project Details with semi-transparent background */}
          <div className="bg-black/40 p-8 backdrop-blur-sm">
            <div className="mx-auto max-w-4xl">
              <div className="flex flex-col gap-8">
                {/* Role Section */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-white">
                    Rolle in dem Projekt:
                  </h2>
                  <p className="text-xl text-white">
                    {projectDetails[currentProject].role}
                  </p>
                </div>

                {/* Tech Stack Section */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-white">
                    Technologien:
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {projectDetails[currentProject].techStack}
                  </div>
                </div>

                {/* Description Section */}
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-white">
                    Beschreibung:
                  </h2>
                  <div className="text-xl text-white">
                    {projectDetails[currentProject].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
