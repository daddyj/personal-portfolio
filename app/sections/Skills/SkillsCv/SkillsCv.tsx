import { useEffect, useRef } from 'react'

import { GridItem } from '@/app/components/Grid'
import { NextJsSvg, ReactSvg } from '@/app/components/Icons'
import { JavascriptSvg } from '@/app/components/Icons/Javascript'
import { TypescriptSvg } from '@/app/components/Icons/Typescript'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

import { SkillsWrapper } from '../SkillsWrapper'
import { CareerPhase } from './index'

export const SkillsCv = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    if (isVisible) setCurrentSection('skillsCv')
    if (isFullyVisible) setFullyVisible('skillsCv')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <SkillsWrapper
      skillsKey="skillsCv"
      className="px-4 lg:grid-rows-[120px_60px]"
    >
      <GridItem className="col-span-10 px-8 lg:col-span-4">
        <h2 className="text-4xl font-bold lg:text-8xl lg:font-normal">
          Laufbahn
        </h2>
      </GridItem>
      <GridItem className="col-span-10 px-8 lg:col-span-6">
        <p className="mb-8 text-xl lg:text-2xl">
          Mein beruflicher Werdegang ist geprägt durch eine Mischung aus
          Freelance- und Angestelltenverhältnissen, was mir eine breite
          Perspektive und tiefes Verständnis für verschiedene Arbeitsumgebungen
          ermöglicht hat.
        </p>
      </GridItem>

      <GridItem className="relative col-span-10 flex flex-wrap">
        <div className="flex basis-[100%] items-end justify-between gap-8">
          <div className="relative">
            <CareerPhase
              title="Freelance Teil 1"
              period="2008 - 2011"
              type="freelance"
              description="Beginn meiner Karriere als selbstständiger Entwickler mit Fokus auf Projektarbeit für Kunden inklusive Kundenbesuch, Beratung und Entwicklung vor Ort."
              technologies={[
                {
                  name: 'Javascript',
                  icon: <JavascriptSvg />,
                  level: 'advanced',
                },
                { name: 'PHP', icon: undefined, level: 'advanced' },
                { name: 'MySQL', icon: undefined, level: 'advanced' },
                {
                  name: 'JavaScript',
                  icon: undefined,
                  level: 'advanced',
                },
              ]}
              achievements={[
                {
                  title: 'Produktionsplanung',
                  description:
                    'Entwicklung einer individuellen Produktionsplanung im Browser für einen Kunden',
                  impact:
                    'Digitalisierung der Produktionsplanung für den Kunden',
                },
              ]}
              customerBenefits={[
                'Kundenbetreuung und -beratung',
                'Tiefes Verständnis für Produktionsplanung und Best Practices',
                'Fähigkeit, komplexe technische Lösungen verständlich zu kommunizieren',
              ]}
            />
            <div className="absolute left-1/2 flex w-6 -translate-x-3 flex-col items-center">
              <div className="h-6 w-0.5 bg-indigo-100" />
              <div className="h-6 w-6 rounded-full bg-indigo-100" />
            </div>
          </div>

          <div className="relative">
            <CareerPhase
              title="Freelance Teil 2"
              period="2025 - heute"
              type="freelance"
              description="Selbstständigkeit wieder aktiviert um eigene Produkte zu entwickeln und für ausgewählte Projekte zu arbeiten und Impact zu erzielen."
              technologies={[
                { name: 'Next.js', icon: <NextJsSvg />, level: 'expert' },
                { name: 'AWS', icon: undefined, level: 'advanced' },
                {
                  name: 'Docker',
                  icon: undefined,
                  level: 'advanced',
                },
              ]}
              achievements={[
                {
                  title: 'Moderne Web-Architekturen',
                  description:
                    'Entwicklung und Implementierung von skalierbaren Web-Anwendungen mit Fokus auf Performance und Benutzerfreundlichkeit',
                  impact:
                    'Reduzierung der Ladezeiten um 60% und Verbesserung der Conversion-Rate um 25%',
                },
              ]}
              customerBenefits={[
                'Kombination aus jahrelanger Unternehmenserfahrung und modernster Technologie-Expertise',
                'Agile Entwicklung mit Fokus auf schnelle Time-to-Market',
                'Individuelle Beratung und maßgeschneiderte Lösungen für Ihr Unternehmen',
              ]}
            />
            <div className="absolute left-1/2 flex w-6 -translate-x-3 flex-col items-center">
              <div className="h-6 w-0.5 bg-indigo-100" />
              <div className="h-6 w-6 rounded-full bg-indigo-100" />
            </div>
          </div>
        </div>

        <div className="flex min-h-18 basis-[100%] items-center">
          <div className="mx-8 h-0.5 w-full bg-gray-300" />
        </div>

        <div className="flex flex-1 justify-center">
          <div className="relative">
            <div className="absolute -top-12 left-1/2 flex w-6 -translate-x-3 flex-col items-center">
              <div className="h-6 w-6 rounded-full bg-indigo-100" />
              <div className="h-6 w-0.5 bg-indigo-100" />
            </div>
            <CareerPhase
              title="Angestelltenverhältnisse"
              period="2011 - 2025"
              type="employed"
              description={
                <span>
                  14 Jahre Erfahrung in verschiedenen Unternehmen, wo ich tiefe
                  Einblicke in Unternehmensstrukturen und Teamarbeit gewonnen
                  habe.
                </span>
              }
              moreInformation={
                <span>
                  Siehe hier für mehr Details:{' '}
                  <a
                    href="https://www.linkedin.com/in/acun-g%C3%BCrsoy-83b8ab139/details/experience/"
                    target="_blank"
                    className="text-blue-500"
                  >
                    Beruflicher Werdegang
                  </a>
                </span>
              }
              technologies={[
                { name: 'React', icon: <ReactSvg />, level: 'expert' },
                {
                  name: 'TypeScript',
                  icon: <TypescriptSvg />,
                  level: 'expert',
                },
                {
                  name: 'C#',
                  icon: undefined,
                  level: 'advanced',
                },
                {
                  name: 'Node.js',
                  icon: undefined,
                  level: 'advanced',
                },
              ]}
              achievements={[
                {
                  title: 'Leitung von Entwicklerteams',
                  description:
                    'Verantwortlich für die technische Leitung und Mentoring von Entwicklerteams',
                  impact:
                    'Erfolgreiches globales Ausrollen einer neuen Benutzeroberfläche von 0 auf 100%',
                },
              ]}
              customerBenefits={[
                'Umfassende Erfahrung in der Zusammenarbeit mit großen Unternehmen',
                'Weiterbildung zur Teamführung',
                'Expertise in der Integration von modernen Technologien in bestehende Systeme',
              ]}
            />
          </div>
        </div>
      </GridItem>

      {/* <GridItem className="col-span-10">
      <div className="flex flex-col justify-center gap-8 lg:flex-row">
        <a
          href="/docs/acun_guersoy_cv_2025.pdf"
          target="_blank"
          className="group flex items-center gap-4 transition-all hover:border-blue-500"
        >
          <DocumentIcon className="size-8 text-blue-500 transition-transform group-hover:scale-110" />
          <div>
            <p className="font-bold text-white">Lebenslauf als PDF</p>
            <p className="text-sm text-gray-300">
              Detaillierte Version herunterladen
            </p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/acun-g%C3%BCrsoy-83b8ab139/"
          target="_blank"
          className="group flex items-center gap-4 transition-all hover:border-blue-500"
        >
          <div className="relative size-24">
            <Image
              fill
              src="/logos/linkedin.svg"
              alt="LinkedIn Logo"
              className="object-contain"
            />
          </div>
          <div>
            <p className="font-bold text-white">LinkedIn Profil</p>
            <p className="text-sm text-gray-300">Mein berufliches Netzwerk</p>
          </div>
        </a>
      </div>
    </GridItem> */}
    </SkillsWrapper>
  )
}
