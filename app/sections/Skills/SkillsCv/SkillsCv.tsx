import { DocumentIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import { Grid, GridItem } from '@/app/components/Grid'

import { CareerPhase } from './index'

export const SkillsCv = () => (
  <Grid id="skillsCv" className="rows-[auto_1fr_auto]">
    <GridItem className="col-span-10 sm:col-span-4">
      <h2 className="text-4xl font-bold sm:text-6xl sm:font-normal">
        Laufbahn
      </h2>
    </GridItem>
    <GridItem className="col-span-10 sm:col-span-6">
      <p className="mb-8 text-xl sm:text-2xl">
        Mein beruflicher Werdegang ist geprägt durch eine Mischung aus
        Freelance- und Angestelltenverhältnissen, was mir eine breite
        Perspektive und tiefes Verständnis für verschiedene Arbeitsumgebungen
        ermöglicht hat.
      </p>
    </GridItem>

    <GridItem className="relative col-span-10 flex min-h-120">
      {/* Timeline line */}
      <div className="absolute top-1/2 right-0 left-0 h-0.5 -translate-y-1/2 bg-gray-300" />

      {/* Timeline content */}
      <div className="relative flex w-full flex-wrap justify-between">
        <div className="relative mb-6 self-end">
          <CareerPhase
            title="Freelance-Phase während des Studiums"
            period="2008 - 2011"
            type="freelance"
            description="Beginn meiner Karriere als selbstständiger Entwickler mit Fokus auf Projektarbeit für Kunden inklusive Kundenbesuch, Beratung und Entwicklung vor Ort."
            technologies={[
              { name: 'Javascript', icon: '/logos/php.svg', level: 'advanced' },
              { name: 'PHP', icon: '/logos/php.svg', level: 'advanced' },
              { name: 'MySQL', icon: '/logos/mysql.svg', level: 'advanced' },
              {
                name: 'JavaScript',
                icon: '/logos/javascript.svg',
                level: 'advanced',
              },
            ]}
            achievements={[
              {
                title: 'Produktionsplanung',
                description:
                  'Entwicklung einer individuellen Produktionsplanung im Browser für einen Kunden',
                impact: 'Digitalisierung der Produktionsplanung für den Kunden',
              },
            ]}
            customerBenefits={[
              'Kundenbetreuung und -beratung',
              'Tiefes Verständnis für Produktionsplanung und Best Practices',
              'Fähigkeit, komplexe technische Lösungen verständlich zu kommunizieren',
            ]}
          />
        </div>

        <div className="relative self-start">
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
              { name: 'React', icon: '/logos/react.svg', level: 'expert' },
              {
                name: 'TypeScript',
                icon: '/logos/typescript.svg',
                level: 'expert',
              },
              {
                name: 'C#',
                icon: '/logos/csharp.svg',
                level: 'advanced',
              },
              {
                name: 'Node.js',
                icon: '/logos/nodejs.svg',
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

        <div className="self-end">
          <CareerPhase
            title="Aktuelle Freelance-Phase"
            period="2025 - heute"
            type="freelance"
            description="Selbstständigkeit wieder aktiviert um eigene Produkte zu entwickeln und für ausgewählte Projekte zu arbeiten und Impact zu erzielen."
            technologies={[
              { name: 'Next.js', icon: '/logos/nextjs.svg', level: 'expert' },
              { name: 'AWS', icon: '/logos/aws.svg', level: 'advanced' },
              {
                name: 'Docker',
                icon: '/logos/docker.svg',
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
        </div>
      </div>
    </GridItem>

    <GridItem className="col-span-10">
      <div className="flex flex-col justify-center gap-8 sm:flex-row">
        <a
          href="/docs/acun_guersoy_cv_2025.pdf"
          target="_blank"
          className="group flex items-center gap-4 rounded-lg border-2 border-gray-200 p-4 transition-all hover:border-blue-500"
        >
          <DocumentIcon className="size-8 text-blue-500 transition-transform group-hover:scale-110" />
          <div>
            <p className="font-bold group-hover:text-blue-500">
              Lebenslauf als PDF
            </p>
            <p className="text-sm text-gray-600">
              Detaillierte Version herunterladen
            </p>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/acun-g%C3%BCrsoy-83b8ab139/"
          target="_blank"
          className="group flex items-center gap-4 rounded-lg border-2 border-gray-200 p-4 transition-all hover:border-blue-500"
        >
          <div className="relative size-8">
            <Image
              fill
              src="/logos/linkedin.svg"
              alt="LinkedIn Logo"
              className="object-contain"
            />
          </div>
          <div>
            <p className="font-bold group-hover:text-blue-500">
              LinkedIn Profil
            </p>
            <p className="text-sm text-gray-600">Mein berufliches Netzwerk</p>
          </div>
        </a>
      </div>
    </GridItem>
  </Grid>
)
