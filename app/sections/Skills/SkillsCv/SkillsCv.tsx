import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'

import { useEffect, useRef } from 'react'

import { GridItem } from '@/app/components/Grid'
import { Firebase, Tamagui } from '@/app/components/Icons'
import { Aws } from '@/app/components/Icons/Aws'
import { Cypress } from '@/app/components/Icons/Cypress'
import { GCloud } from '@/app/components/Icons/GCloud'
import { Javascript } from '@/app/components/Icons/Javascript'
import { MaterialUi } from '@/app/components/Icons/MaterialUi'
import { NextJs } from '@/app/components/Icons/Nextjs'
import { Php } from '@/app/components/Icons/Php'
import { React } from '@/app/components/Icons/React'
import { ReactNative } from '@/app/components/Icons/ReactNative'
import { Typescript } from '@/app/components/Icons/Typescript'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

import { SkillsWrapper } from '../SkillsWrapper'

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
      className="gap-8 px-2 pl-32 lg:grid-rows-[1fr]"
    >
      <GridItem className="col-span-10 sm:px-0">
        <h2 className="text-4xl font-bold lg:text-6xl lg:font-normal">
          Laufbahn
        </h2>
        <div className="mt-8 flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Freelancer</h3>
              <span className="text-gray-500">Sept. 2024–Heute</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Nordrhein-Westfalen, Deutschland</span>
              <span>•</span>
              <span>Hybrid</span>
            </div>
            <p className="text-gray-300">
              Freiberuflicher Fullstack-Entwickler für Web und Mobile.
              Unterstützung von Entwicklungsteams sowohl in der aktiven
              Entwicklung als auch als Team Lead. DevOps Awareness vorhanden :)
              .
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                <Javascript key="javascript" />,
                <Typescript key="typescript" />,
                <React key="react" />,
                <NextJs key="nextjs" />,
                <ReactNative key="reactnative" />,
                <Aws key="aws" />,
                <GCloud key="gcloud" />,
                <Firebase key="firebase" />,
                <Cypress key="cypress" />,
                <Php key="php" />,
                <Tamagui key="tamagui" />,
                <MaterialUi key="materialui" />,
              ].map((technology) => (
                <div key={technology.key}>{technology}</div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                Mitgründer - THE ANSWER GmbH
              </h3>
              <span className="text-gray-500">Jan. 2024–Heute</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Remote</span>
            </div>
            <p className="text-gray-300">
              Technische Leitung und Entwickler der App Myla. Fokus auf
              KI-gestützte Bildungstechnologie.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {[
                  <Javascript key="javascript" />,
                  <Typescript key="typescript" />,
                  <React key="react" />,
                  <ReactNative key="reactnative" />,
                  <NextJs key="nextjs" />,
                  <GCloud key="gcloud" />,
                  <Firebase key="firebase" />,
                  <MaterialUi key="materialui" />,
                  <Tamagui key="tamagui" />,
                ]}
              </div>
              <div className="flex flex-wrap gap-2">
                {['Agile Methods', 'Project Management', 'Software Design'].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="flex items-center rounded-full bg-blue-500/20 px-4 py-2 text-sm text-white"
                    >
                      {skill}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                Frontend Entwickler / Servant Lead - DeepUp GmbH
              </h3>
              <span className="text-gray-500">Jan. 2022–Sept. 2024</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Remote</span>
            </div>
            <p className="text-gray-300">Beschreibung TBD.</p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {[
                  <Javascript key="javascript" />,
                  <Typescript key="typescript" />,
                  <React key="react" />,
                  <GCloud key="gcloud" />,
                  <Cypress key="cypress" />,
                  <MaterialUi key="materialui" />,
                ]}
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Projekt Management',
                  'Software Design',
                  'Scrum',
                  'Code Review',
                  'Google Objective and Key Results',
                  'Teamleitung',
                  'Mentoring Studenten',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center rounded-full bg-blue-500/20 px-4 py-2 text-sm text-white"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                Fullstack Entwickler - RobinHeat
              </h3>
              <span className="text-gray-500">Juni 2020–Jan. 2022</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Remote</span>
            </div>
            <p className="text-gray-300">Beschreibung TBD.</p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-2">
                {[
                  <Javascript key="javascript" />,
                  <Typescript key="typescript" />,
                  <React key="react" />,
                  <ReactNative key="reactnative" />,
                  <Firebase key="firebase" />,
                  <Cypress key="cypress" />,
                  <MaterialUi key="materialui" />,
                ]}
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Projekt Management',
                  'Software Design',
                  'Scrum',
                  'Code Review',
                  'Google Objective and Key Results',
                  'Teamleitung',
                  'Mentoring Studenten',
                ].map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center rounded-full bg-blue-500/20 px-4 py-2 text-sm text-white"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                Frontend Entwickler - InVision Group
              </h3>
              <span className="text-gray-500">Jan. 2018–März 2020</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Düsseldorf, Deutschland</span>
            </div>
            <p className="text-gray-300">Beschreibung TBD.</p>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'React Native', 'JavaScript', 'Scrum'].map(
                (tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Weber Maschinenbau GmbH</h3>
              <span className="text-gray-500">Aug. 2013–Dez. 2017</span>
            </div>
            <p className="text-gray-300">
              Verschiedene Positionen: Frontend Entwickler, Teamleiter
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Breidenbach, Hessen</span>
            </div>
            <p className="text-gray-300">Beschreibung TBD.</p>
            <div className="flex flex-wrap gap-2">
              {['React.js', 'JavaScript', 'Project Management'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">
                Software Entwickler - Innovapps GmbH
              </h3>
              <span className="text-gray-500">Aug. 2011–Aug. 2013</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Wiesbaden, Deutschland</span>
            </div>
            <p className="text-gray-300">Beschreibung TBD.</p>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'Software Development'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl font-bold">Software Entwickler - CSH</h3>
              <span className="text-gray-500">Aug. 2008–Jan. 2011</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Seligenstadt</span>
            </div>
            <p className="text-gray-300">
              Mitentwicklung für CAWA Framework (PHP based)
            </p>
            <div className="flex flex-wrap gap-2">
              {['PHP', 'JavaScript'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </GridItem>
    </SkillsWrapper>
  )
}
