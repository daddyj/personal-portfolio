import 'atropos/css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './styles.css'

import { useEffect, useRef } from 'react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Grid, GridItem } from '@/app/components/Grid'
import {
  Canvas,
  Firebase,
  GCloud,
  NextJs,
  React,
  ReactNative,
  Tamagui,
} from '@/app/components/Icons'
import { Aws } from '@/app/components/Icons/Aws'
import { Docker } from '@/app/components/Icons/Docker'
import { Javascript } from '@/app/components/Icons/Javascript'
import { MongoDB } from '@/app/components/Icons/MongoDB'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

import { Project } from './Project'

export const Projects = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    if (isVisible) setCurrentSection('projects')
    if (isFullyVisible) setFullyVisible('projects')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <Grid ref={gridWrapper} id="projects" className="grid-rows-[auto_1fr]">
      <GridItem className="col-span-10">
        <h1 className="text-4xl lg:text-6xl">Beispiele meiner Arbeit</h1>
      </GridItem>

      <GridItem className="col-span-10">
        <Swiper
          effect={'coverflow'}
          centeredSlides={true}
          navigation
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiperProjects"
        >
          <SwiperSlide>
            <Project
              projectId="1"
              url="https://fusionslab.de/"
              title="White Label CMS Lösung"
              customer="tinkerbrain GmbH"
              description="Mit dieser erweiterten, eigenen White Label CMS Lösung kann die Kundin pro Mandant ein eigenes Backend mit eigenen Inhalten verwalten und veröffentlichen und somit mehrere interne Tools ersetzen."
              role="Fullstack Entwickler und DevOps Engineer für AWS Fargate Hosting"
              technologies={[
                <Javascript key="javascript" />,
                <MongoDB key="mongodb" />,
                <Aws key="aws" />,
                <Docker key="docker" />,
              ]}
              images={['/apostrophe-1.jpg', '/apostrophe-2.jpg']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              hasAi
              url="https://the-answer.org/myla-for-school"
              projectId="2"
              title="Myla"
              customer="The Answer GmbH"
              description="Die App Myla hat als Ziel eine individuelle Lernbegleitung für jedes Kind anzubieten. Es nutzt künstliche Intelligenz in einer geführten und interaktiven Erfahrung für die Kinder, so dass Sie spielerisch das selbstständige Lernen erhalten."
              role="Appentwickler für iOS / Android und Webentwickler für Schulportal."
              technologies={[
                <ReactNative key="react-native" />,
                <Firebase key="firebase" />,
                <Tamagui key="tamagui" />,
                <GCloud key="gcloud" />,
                <NextJs key="nextjs" />,
                <React key="react" />,
              ]}
              images={['/myla-3.png', '/myla-2.png', '/myla-1.png']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              projectId="3"
              title="Queer*link"
              customer="Queer*link e.V."
              url="https://www.queerlink.org/"
              description="Die Website Queer*link e.V. ist eine Plattform für Queer* Menschen und ihre Angehörigen. Sie bietet Informationen, Ressourcen und eine Community für alle, die sich in der LGBTQ+ Community engagieren."
              role="Webentwickler für Queer*link e.V."
              technologies={[
                <React key="react" />,
                <NextJs key="nextjs" />,
                <Tamagui key="material-ui" />,
                <Firebase key="firebase" />,
                <Canvas key="canvas" />,
              ]}
              images={['/queerlink-1.jpg', '/queerlink-2.jpg']}
            />
          </SwiperSlide>
        </Swiper>
      </GridItem>
    </Grid>
  )
}
