import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'

import { useEffect, useRef } from 'react'

import { GridItem } from '@/app/components/Grid'
import { Firebase, Tamagui } from '@/app/components/Icons'
import { Aws } from '@/app/components/Icons/Aws'
import { CSharp } from '@/app/components/Icons/CSharp'
import { Css } from '@/app/components/Icons/CSS'
import { Cypress } from '@/app/components/Icons/Cypress'
import { GCloud } from '@/app/components/Icons/GCloud'
import { Html } from '@/app/components/Icons/Html'
import { Javascript } from '@/app/components/Icons/Javascript'
import { MaterialUi } from '@/app/components/Icons/MaterialUi'
import { MySQL } from '@/app/components/Icons/MySQL'
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
      className="gap-8 px-8 sm:px-2 sm:pl-32 lg:grid-rows-[1fr]"
    >
      <GridItem className="col-span-10 sm:px-0">
        <h2 className="text-4xl font-bold lg:text-6xl lg:font-normal">
          Laufbahn
        </h2>
        <div className="mt-8 flex flex-col gap-8">
          <div className="flex flex-col gap-4 border-b-2 border-b-blue-500/20 pb-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
              <h3 className="text-2xl font-bold">Freelancer</h3>
              <span className="text-gray-500">Sept. 2024–Heute</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Nordrhein-Westfalen, Deutschland</span>
              <span>•</span>
              <span>Hybrid</span>
            </div>
            <p className="text-gray-300 sm:pr-48">
              Freiberuflicher Fullstack-Entwickler für Web und Mobile.
              Unterstützung von Entwicklungsteams sowohl in der aktiven
              Entwicklung als auch als Team Lead. DevOps Awareness vorhanden :)
              .
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-2">
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
              ]}
            </div>
          </div>

          <div className="flex flex-col gap-4 border-b-2 border-b-blue-500/20 pb-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
              <h3 className="text-2xl font-bold">
                Mitgründer - THE ANSWER GmbH
              </h3>
              <span className="text-gray-500">Jan. 2024–Heute</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Remote</span>
            </div>
            <p className="text-gray-300 sm:pr-48">
              Mitgründer einer Softwarefirma um unser eigenes Produkt
              &quot;Myla&quot; offiziell zu vertreiben und damit in der
              Bildungswelt einen wertvollen Beitrag zu leisten. Vollständige
              Entwicklung der App mit React-Native und Ermöglichung von Vertrieb
              derselben App für B2C und (mit kundenspezifischer Konfiguration)
              auch B2B über ein eigenes Schulportal im Web.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-4 sm:gap-2">
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
              <div className="flex flex-wrap gap-4 sm:gap-2">
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

          <div className="flex flex-col gap-4 border-b-2 border-b-blue-500/20 pb-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
              <h3 className="text-2xl font-bold">
                Frontend Entwickler / Servant Lead - DeepUp GmbH
              </h3>
              <span className="text-gray-500">Jan. 2022–Sept. 2024</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Remote</span>
            </div>
            <p className="text-gray-300 sm:pr-48">
              Als Frontend Entwickler maßgeblich an der Entwicklung von Tools
              für das kundenorientierte Produktportfolio beteiligt.
              Verantwortlich für die firmenweite Implementierung agiler
              Methoden, insbesondere die Einführung von Google Objectives and
              Key Results (OKR). Als Mentor unterstützte ich Berufseinsteiger in
              ihrer Entwicklung. In meiner Rolle als Servant Lead übernahm ich
              Personalverantwortung für ein Team von 8-12 Mitarbeitern.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-4 sm:gap-2">
                {[
                  <Javascript key="javascript" />,
                  <Typescript key="typescript" />,
                  <React key="react" />,
                  <GCloud key="gcloud" />,
                  <Cypress key="cypress" />,
                  <MaterialUi key="materialui" />,
                ]}
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-2">
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

          <div className="flex flex-col gap-4 border-b-2 border-b-blue-500/20 pb-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
              <h3 className="text-2xl font-bold">
                Fullstack Entwickler - RobinHeat
              </h3>
              <span className="text-gray-500">Juni 2020–Jan. 2022</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Remote</span>
            </div>
            <p className="text-gray-300 sm:pr-48">
              Als Teil eines dreiköpfigen Startups war ich verantwortlich für
              die Migration einer bestehenden JavaScript Codebasis zu TypeScript
              sowie die Implementierung umfassender End-to-End Tests mit
              Cypress.io. Das Produktportfolio umfasste sowohl Web-Portale als
              auch native Anwendungen für iOS und Android.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-4 sm:gap-2">
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
              <div className="flex flex-wrap gap-4 sm:gap-2">
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

          <div className="flex flex-col gap-4 border-b-2 border-b-blue-500/20 pb-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
              <h3 className="text-2xl font-bold">
                Frontend Entwickler - InVision Group
              </h3>
              <span className="text-gray-500">Jan. 2018–März 2020</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Düsseldorf, Deutschland</span>
            </div>
            <p className="text-gray-300 sm:pr-48">
              Als Frontend Entwickler war ich maßgeblich an der
              Weiterentwicklung des firmeneigenen Workforce Management Produkts
              injixo beteiligt. Zusätzlich entwickelte ich eine React Native App
              für Marketing-Zwecke. In dieser Zeit konnte ich meine Expertise in
              agilen Methoden durch die intensive Anwendung von Scrum,
              Lean-Prinzipien nach The Toyota Way und Google OKRs (Objectives
              and Key Results) vertiefen.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-4 sm:gap-2">
                {[
                  <Javascript key="javascript" />,
                  <Typescript key="typescript" />,
                  <React key="react" />,
                  <ReactNative key="reactnative" />,
                  <Cypress key="cypress" />,
                  <MaterialUi key="materialui" />,
                ]}
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-2">
                {[
                  'Software Design',
                  'Scrum',
                  'Code Review',
                  'Google Objective and Key Results',
                  'The Toyota Way',
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

          <div className="flex flex-col gap-4 border-b-2 border-b-blue-500/20 pb-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
              <h3 className="text-2xl font-bold">Weber Maschinenbau GmbH</h3>
              <span className="text-gray-500">Aug. 2013–Dez. 2017</span>
            </div>
            <p className="text-gray-300 sm:pr-48">
              Verschiedene Positionen: Frontend Entwickler, Teamleiter
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Breidenbach, Hessen</span>
            </div>
            <p className="text-gray-300 sm:pr-48">
              Als Frontend Entwickler war ich verantwortlich für die Entwicklung
              der grafischen Benutzeroberfläche WeberPowerControl für die
              firmeneigenen Maschinen. In der Position als Projekt- und
              Teamleiter koordinierte ich erfolgreich die weltweite Einführung
              des neuen Interfaces bei unseren Kunden, inklusive Vor-Ort-Support
              in Chicago und anderen Standorten. Zusätzlich vertrat ich den
              Bereich Research & Development als technischer Ansprechpartner auf
              internationalen Fachmessen.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-4 sm:gap-2">
                {[
                  <Javascript key="javascript" />,
                  <React key="react" />,
                  <Cypress key="cypress" />,
                ]}
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-2">
                {['Projekt Management', 'Teamleitung', 'Scrum'].map((skill) => (
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

          <div className="flex flex-col gap-4 border-b-2 border-b-blue-500/20 pb-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
              <h3 className="text-2xl font-bold">
                Software Entwickler - Innovapps GmbH
              </h3>
              <span className="text-gray-500">Aug. 2011–Aug. 2013</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Wiesbaden, Deutschland</span>
            </div>
            <p className="text-gray-300 sm:pr-48">
              Entwicklung maßgeschneiderter Fullstack-Lösungen mit C# und
              Javascript (jQuery). Als Projektmanager fungierte ich als direkte
              Schnittstelle zu den Kunden und begleitete Projekte ganzheitlich
              von der initialen Anforderungsanalyse über die Implementierung bis
              hin zum Deployment und Support.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-4 sm:gap-2">
                {[
                  <Javascript key="javascript" />,
                  <Html key="html" />,
                  <Css key="css" />,
                  <CSharp key="csharp" />,
                  <MySQL key="mysql" />,
                ]}
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-2">
                {['Projekt Management'].map((skill) => (
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

          <div className="flex flex-col gap-4 border-b-2 border-b-blue-500/20 pb-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center sm:gap-0">
              <h3 className="text-2xl font-bold">Software Entwickler - CSH</h3>
              <span className="text-gray-500">Aug. 2008–Jan. 2011</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Seligenstadt</span>
            </div>
            <p className="text-gray-300 sm:pr-48">
              Als eigenständiger Fullstack-Entwickler erstellte ich
              maßgeschneiderte Softwarelösungen für Kunden in der
              Produktionsindustrie unter Verwendung von PHP und JavaScript. Die
              Entwicklung erfolgte direkt vor Ort beim Kunden, um eine enge
              Abstimmung zu gewährleisten. Zusätzlich war ich Co-Entwickler des
              firmeninternen Tools CAWA, welches als Grundlage für die
              Entwicklung der hauseigenen ERP-Software SilverP diente.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex flex-wrap gap-4 sm:gap-2">
                {[
                  <Php key="php" />,
                  <Html key="html" />,
                  <Css key="css" />,
                  <Javascript key="javascript" />,
                ]}
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-2">
                {['Projekt Management'].map((skill) => (
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
        </div>
      </GridItem>
    </SkillsWrapper>
  )
}
