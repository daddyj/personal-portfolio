import 'atropos/css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './styles.css'

import Atropos, { AtroposInstance } from 'atropos'
import { useEffect, useRef } from 'react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Grid, GridItem } from '@/app/components/Grid'
import {
  Firebase,
  FirebaseSvg,
  Nextjs,
  React,
  ReactNativeSvg,
  Tamagui,
} from '@/app/components/Icons'
import { JavascriptSvg } from '@/app/components/Icons/Javascript'
import { MaterialUi } from '@/app/components/Icons/MaterialUi'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

import { Project } from './Project'

export const Projects = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  const myAtropos = useRef<AtroposInstance | null>(null)

  useEffect(() => {
    myAtropos.current = Atropos({
      el: '.project-1',
      activeOffset: 20,
      shadowScale: 1.05,
    })
    Atropos({
      el: '.project-2',
      activeOffset: 20,
      shadowScale: 1.05,
    })
    Atropos({
      el: '.project-3',
      activeOffset: 20,
      shadowScale: 1.05,
    })
  })

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
              title="White Label CMS Lösung"
              customer="tinkerbrain GmbH"
              description="TBD"
              technologies={[<JavascriptSvg key="javascript" />]}
              images={['/apostrophe-1.jpg', '/apostrophe-2.jpg']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              projectId="2"
              title="Myla"
              customer="The Answer GmbH"
              description="Die App Myla hat als Ziel eine individuelle Lernbegleitung für jedes Kind anzubieten. Es nutzt künstliche Intelligenz in einer geführten und interaktiven Erfahrung für die Kinder, so dass Sie spielerisch das selbstständige Lernen erhalten. Die App habe ich vollständig entwickelt und im iOS AppStore für iPads und iPhones veröffentlicht. Android ist auch in Planung. Mehr Informationen findest Du hier"
              technologies={[
                <ReactNativeSvg key="react-native" />,
                <FirebaseSvg key="firebase" />,
                <Tamagui key="tamagui" />,
              ]}
              images={['/myla-3.png', '/myla-2.png', '/myla-1.png']}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Project
              projectId="3"
              title="Queer*link"
              customer="Queer*link e.V."
              description="Die Website Queer*link e.V. ist eine Plattform für Queer* Menschen und ihre Angehörigen. Sie bietet Informationen, Ressourcen und eine Community für alle, die sich in der LGBTQ+ Community engagieren. Ich habe die Website vollständig entwickelt und in Eigenleistung betreut. Sie dient als Basis für die Entwicklung der App Queer*link welches als nächstes in Planung ist."
              technologies={[
                <React key="react" />,
                <Nextjs key="nextjs" />,
                <MaterialUi key="material-ui" />,
                <Firebase key="firebase" />,
              ]}
              images={['/queerlink-1.jpg', '/queerlink-2.jpg']}
            />
          </SwiperSlide>
        </Swiper>
      </GridItem>
    </Grid>
  )
}
