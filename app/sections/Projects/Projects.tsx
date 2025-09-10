import 'atropos/css'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import './styles.css'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Grid, GridItem } from '@/app/components/Grid'
import {
  FirebaseSvg,
  GCloudSvg,
  NextJsSvg,
  ReactNativeSvg,
  ReactSvg,
  TamaguiSvg,
} from '@/app/components/Icons'
import { JavascriptSvg } from '@/app/components/Icons/Javascript'
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
              title="White Label CMS Lösung"
              customer="tinkerbrain GmbH"
              description="TBD"
              technologies={[<JavascriptSvg key="javascript" />]} // TODO: what's missing: AWS, Docker
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
                <TamaguiSvg key="tamagui" />,
                <GCloudSvg key="gcloud" />,
                <Image
                  key="certified"
                  src="/certified.png"
                  alt="certified"
                  width={100}
                  height={100}
                />,
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
                <ReactSvg key="react" />,
                <NextJsSvg key="nextjs" />,
                <TamaguiSvg key="material-ui" />,
                <FirebaseSvg key="firebase" />,
              ]}
              images={['/queerlink-1.jpg', '/queerlink-2.jpg']}
            />
          </SwiperSlide>
        </Swiper>
      </GridItem>
    </Grid>
  )
}
