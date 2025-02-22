import Image from 'next/image'
import { Fragment, JSX, useEffect, useRef, useState } from 'react'
import { Grid, GridItem } from '../components/Grid'
import { useNavigationContext } from '../lib/useNavigationContext'
import { useViewportIntersect } from '../lib/useViewportIntersect'

const projects = ['myla', 'theanswer-hp', 'myla-portal', 'own-hp'] as const
type ProjectListItem = typeof projects[number]

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

const NavItem = ({ label, selected, onClick }: { label: string, selected: boolean; onClick: () => void }) => {
  const fontColor = selected ? 'text-blue-500' : 'text-gray-500'
  const borderColor = selected ? 'border-b-blue-500' : 'border-b-transparent'
  const hoverClasses = selected ? '' : 'hover:cursor-pointer hover:border-b-2 hover:border-white hover:text-white'

  return (
    <p onClick={onClick} className={`${fontColor} border-b-2 ${borderColor} ${hoverClasses} transition-all`}>{label}</p>
  )
}

const ItemPreview = ({
  role,
  techStack,
  images,
  description
}: {
  role: string;
  techStack: React.ReactNode[];
  images: JSX.Element[];
  description: React.ReactNode
}) => {
  return (
    <>

      <GridItem className='col-span-10 sm:col-span-3 flex flex-col gap-8 animate-fade'>
        <div className='text-md sm:text-2xl'>
          <p className='font-bold'>Rolle in dem Projekt:</p>
          <p>{role}</p>
        </div>
        <div className='text-md sm:text-2xl'>
          <p className='font-bold'>TechStack (TODO use icons with animation effect):</p>
          <div className='flex flex-wrap gap-2'>
            {techStack.map((tech: React.ReactNode, index) => (
              <Fragment key={tech?.toString()}>
                <p>{tech}</p>
                {index < techStack.length - 1 && <p>#</p>}
              </Fragment>
            ))}
          </div>
        </div>
      </GridItem>
      <GridItem className='col-span-10 sm:col-span-4 flex justify-start sm:justify-end items-start animate-fade'>
        {images.map((image, index) => (
          <div key={`${role}_image_${index}`} className="flex rounded-sm overflow-hidden">
            {image}
          </div>
        ))}
      </GridItem>
      <GridItem className='col-span-3' />
      <GridItem className='col-span-10 sm:col-span-7 flex items-end animate-fade' >
        <p className="text-md sm:text-2xl">{description}</p>
      </GridItem>
    </>
  )
}

const projectDetails = {
  myla: {
    navLabel: 'Myla',
    role: 'Fullstack Entwicklung App und Bereitstellung der Cloud Infrastruktur.',
    techStack: ['React-Native', 'Tamagui UI', 'Firebase', 'Google-Cloud'],
    images: [
      <div key="myla-1" className="flex rounded-sm overflow-hidden">
        <Image src="/myla-1.png" width={330 / 2.5} height={717 / 2.5} alt="Erstes Bild zu Myla App" />
        <Image src="/myla-2.png" width={330 / 2.5} height={717 / 2.5} alt="Erstes Bild zu Myla App" />
      </div>
    ],
    description: <>Die App Myla hat als Ziel eine individuelle Lernbegleitung für jedes Kind anzubieten. Es nutzt künstliche Intelligenz in einer geführten und interaktiven Erfahrung für die Kinder, so dass Sie spielerisch das selbstständige Lernen erhalten. <br />
      Die App habe ich vollständig entwickelt und im iOS AppStore für iPads und iPhones veröffentlicht. Android ist auch in Planung. Mehr Informationen findest Du hier: [TODO URL einfügen zu THE ANSWER Homepage]</>,
  },
  'theanswer-hp': {
    navLabel: 'THE ANSWER GmbH Homepage',
    role: 'Fullstack Entwicklung Homepage und UI Design',
    techStack: ['React', 'NextJS', 'Material UI'],
    images: [],
    description: 'TBD'
  },
  'myla-portal': {
    navLabel: 'Myla Schulportal',
    role: 'Fullstack Entwicklung Portal und UI Design',
    techStack: ['React', 'NextJS', 'Material UI', 'Firebase'],
    images: [],
    description: 'TBD'
  },
  'own-hp': {
    navLabel: 'Acun Gürsoy Homepage',
    role: 'Fullstack Entwicklung Homepage und UI Design',
    techStack: ['React', 'NextJS', 'Tailwind CSS', 'Canvas'],
    images: [],
    description: 'TBD'
  }
}