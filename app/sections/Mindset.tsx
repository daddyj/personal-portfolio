import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'

import { motion, useInView } from 'framer-motion'
import { Brain, LayoutPanelTop, MessageSquare } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { Navigation, Pagination, Parallax } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Card } from '@/app/components/Card'
import { Grid, GridItem } from '@/app/components/Grid'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

export const Mindset = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)
  const isInView = useInView(gridWrapper, {
    once: false,
    margin: '-100px 0px',
  })

  useEffect(() => {
    if (isVisible) setCurrentSection('mindset')
    if (isFullyVisible) setFullyVisible('mindset')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <Grid id="mindset" ref={gridWrapper} className="grid-rows-[1fr] gap-8">
      <GridItem className="col-span-10 hidden gap-8 lg:flex">
        <Swiper
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="swiperMindset"
        >
          {/* Photo by Maxim Berg on Unsplash: https://unsplash.com/photos/vLfzJSGCU9c */}
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              backgroundImage: 'url(mindset-background.jpg)',
            }}
            data-swiper-parallax="-23%"
          ></div>
          <SwiperSlide>
            <motion.h2
              data-swiper-parallax="0"
              variants={headingVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="text-4xl lg:text-8xl"
            >
              Agil denken
            </motion.h2>
            <div className="title" data-swiper-parallax="-750">
              <Brain className="h-16 w-16" />
            </div>
            <div className="text" data-swiper-parallax="-250">
              <p>
                Ich bin seit über 15 Jahren als Softwareentwickler tätig –
                sowohl im Web- als auch im App-Bereich, in agilen Teams und mit
                crossfunktionalen Rollen. In der Zeit habe ich gelernt, dass
                Veränderungen und neue Anforderungen kein Störfaktor, sondern
                Teil des Entwicklungsprozesses sind. Mit Methoden wie SCRUM,
                Kanban oder auch OKRs arbeite ich strukturiert,
                lösungsorientiert und mit dem Blick dafür, was dem Team wirklich
                weiterhilft. Dabei habe ich nie aufgehört, neue Ansätze
                auszuprobieren oder mich von Kolleg:innen inspirieren zu lassen
                – denn das gehört für mich genauso zu einer guten
                Entwicklerkultur wie sauberer Code.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.h2
              variants={headingVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="text-4xl lg:text-8xl"
            >
              Klar kommunizieren
            </motion.h2>
            <div className="title" data-swiper-parallax="-750">
              <MessageSquare className="h-16 w-16" />
            </div>
            <div className="text" data-swiper-parallax="-250">
              <p>
                Ich lege viel Wert auf einen methodischen und gleichzeitig
                menschlichen Ansatz in der Zusammenarbeit. Gute Kommunikation
                bedeutet für mich, dass technische Zusammenhänge so erklärt
                werden, dass alle im Projekt – ob Entwickler:in, Designer:in
                oder Kunde – sie verstehen und mitgestalten können. Ich sehe
                mich oft als Brücke zwischen Anforderungen und Umsetzung. Dabei
                helfen mir sowohl meine Erfahrungen aus klassischem
                Projektmanagement als auch aus agilen Rollen. Transparenz,
                ehrliches Feedback und ein respektvoller Umgang auf Augenhöhe
                sind für mich selbstverständlich – und machen am Ende jedes
                Projekt besser.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.h2
              data-swiper-parallax="0"
              variants={headingVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="text-4xl lg:text-8xl"
            >
              Smart entwickeln
            </motion.h2>
            <div className="title" data-swiper-parallax="-750">
              <LayoutPanelTop className="h-16 w-16" />
            </div>
            <div className="text" data-swiper-parallax="-250">
              <p>
                Ich arbeite mit einem modernen Stack rund um React, React
                Native, Next.js, Firebase und Tailwind – bewusst gewählt, weil
                er schnelle Ergebnisse liefert, sauber skalierbar ist und
                perfekt mit aktuellen Trends wie AI-assisted Development
                harmoniert. Gerade durch Tools wie Copilot und automatisierte
                Tests wird klar: guter Code ist kein Selbstzweck, sondern
                Teamarbeit auf Augenhöhe. Ich schreibe verständlich,
                wiederverwendbar und mit Blick auf das große Ganze – für
                Nutzer:innen, Entwickler:innen und alle, die das Produkt
                langfristig betreuen wollen. Und ja, auch durch fremden (AI-)
                Code kann ich mich durcharbeiten und Probleme lösen.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
        {/* <Card icon={Brain} title="Agil denken" delay={0.6} isInView={isInView}>
          Ich bin seit über 15 Jahren als Softwareentwickler tätig – sowohl im
          Web- als auch im App-Bereich, in agilen Teams und mit
          crossfunktionalen Rollen. In der Zeit habe ich gelernt, dass
          Veränderungen und neue Anforderungen kein Störfaktor, sondern Teil des
          Entwicklungsprozesses sind. Mit Methoden wie SCRUM, Kanban oder auch
          OKRs arbeite ich strukturiert, lösungsorientiert und mit dem Blick
          dafür, was dem Team wirklich weiterhilft. Dabei habe ich nie
          aufgehört, neue Ansätze auszuprobieren oder mich von Kolleg:innen
          inspirieren zu lassen – denn das gehört für mich genauso zu einer
          guten Entwicklerkultur wie sauberer Code.
        </Card>
        <Card
          icon={MessageSquare}
          title="Klar kommunizieren"
          delay={0.9}
          isInView={isInView}
        >
          Ich lege viel Wert auf einen methodischen und gleichzeitig
          menschlichen Ansatz in der Zusammenarbeit. Gute Kommunikation bedeutet
          für mich, dass technische Zusammenhänge so erklärt werden, dass alle
          im Projekt – ob Entwickler:in, Designer:in oder Kunde – sie verstehen
          und mitgestalten können. Ich sehe mich oft als Brücke zwischen
          Anforderungen und Umsetzung. Dabei helfen mir sowohl meine Erfahrungen
          aus klassischem Projektmanagement als auch aus agilen Rollen.
          Transparenz, ehrliches Feedback und ein respektvoller Umgang auf
          Augenhöhe sind für mich selbstverständlich – und machen am Ende jedes
          Projekt besser.
        </Card>
        <Card
          icon={LayoutPanelTop}
          title="Smart entwickeln"
          delay={1.2}
          isInView={isInView}
        >
          Ich arbeite mit einem modernen Stack rund um React, React Native,
          Next.js, Firebase und Tailwind – bewusst gewählt, weil er schnelle
          Ergebnisse liefert, sauber skalierbar ist und perfekt mit aktuellen
          Trends wie AI-assisted Development harmoniert. Gerade durch Tools wie
          Copilot und automatisierte Tests wird klar: guter Code ist kein
          Selbstzweck, sondern Teamarbeit auf Augenhöhe. Ich schreibe
          verständlich, wiederverwendbar und mit Blick auf das große Ganze – für
          Nutzer:innen, Entwickler:innen und alle, die das Produkt langfristig
          betreuen wollen. Und ja, auch durch fremden (AI-) Code kann ich mich
          durcharbeiten und Probleme lösen.
        </Card> */}
      </GridItem>

      <GridItem className="col-span-10 lg:hidden">
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-4xl lg:text-6xl"
        >
          Agil denken. Klar kommunizieren. Smart entwickeln.
        </motion.h2>
      </GridItem>
      <GridItem className="col-span-10 lg:hidden">
        <Card icon={Brain} title="Agil denken" delay={0.6} isInView={isInView}>
          Ich bin seit über 15 Jahren als Softwareentwickler tätig – sowohl im
          Web- als auch im App-Bereich, in agilen Teams und mit
          crossfunktionalen Rollen. In der Zeit habe ich gelernt, dass
          Veränderungen und neue Anforderungen kein Störfaktor, sondern Teil des
          Entwicklungsprozesses sind. Mit Methoden wie SCRUM, Kanban oder auch
          OKRs arbeite ich strukturiert, lösungsorientiert und mit dem Blick
          dafür, was dem Team wirklich weiterhilft. Dabei habe ich nie
          aufgehört, neue Ansätze auszuprobieren oder mich von Kolleg:innen
          inspirieren zu lassen – denn das gehört für mich genauso zu einer
          guten Entwicklerkultur wie sauberer Code.
        </Card>
      </GridItem>
      <GridItem className="col-span-10 lg:hidden">
        <Card
          icon={MessageSquare}
          title="Klar kommunizieren"
          delay={0.9}
          isInView={isInView}
        >
          Ich lege viel Wert auf einen methodischen und gleichzeitig
          menschlichen Ansatz in der Zusammenarbeit. Gute Kommunikation bedeutet
          für mich, dass technische Zusammenhänge so erklärt werden, dass alle
          im Projekt – ob Entwickler:in, Designer:in oder Kunde – sie verstehen
          und mitgestalten können. Ich sehe mich oft als Brücke zwischen
          Anforderungen und Umsetzung. Dabei helfen mir sowohl meine Erfahrungen
          aus klassischem Projektmanagement als auch aus agilen Rollen.
          Transparenz, ehrliches Feedback und ein respektvoller Umgang auf
          Augenhöhe sind für mich selbstverständlich – und machen am Ende jedes
          Projekt besser.
        </Card>
      </GridItem>
      <GridItem className="col-span-10 lg:hidden">
        <Card
          icon={LayoutPanelTop}
          title="Smart entwickeln"
          delay={1.2}
          isInView={isInView}
        >
          Ich arbeite mit einem modernen Stack rund um React, React Native,
          Next.js, Firebase und Tailwind – bewusst gewählt, weil er schnelle
          Ergebnisse liefert, sauber skalierbar ist und perfekt mit aktuellen
          Trends wie AI-assisted Development harmoniert. Gerade durch Tools wie
          Copilot und automatisierte Tests wird klar: guter Code ist kein
          Selbstzweck, sondern Teamarbeit auf Augenhöhe. Ich schreibe
          verständlich, wiederverwendbar und mit Blick auf das große Ganze – für
          Nutzer:innen, Entwickler:innen und alle, die das Produkt langfristig
          betreuen wollen. Und ja, auch durch fremden (AI-) Code kann ich mich
          durcharbeiten und Probleme lösen.
        </Card>
      </GridItem>
    </Grid>
  )
}
