import { Brain, LayoutPanelTop, MessageSquare } from 'lucide-react'
import { useEffect, useRef } from 'react'

import { Grid, GridItem } from '@/app/components/Grid'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

export const Mindset = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  useEffect(() => {
    if (isVisible) setCurrentSection('mindset')
    if (isFullyVisible) setFullyVisible('mindset')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <Grid id="mindset" ref={gridWrapper} className="grid-rows-[auto_1fr]">
      <GridItem className="col-span-8">
        <h2 className="text-7xl">
          Agil denken. Klar kommunizieren. Smart entwickeln.
        </h2>
      </GridItem>
      <GridItem className="col-span-10 flex flex-col items-center gap-4 border-2 bg-[var(--background)] p-6 sm:col-span-3">
        <Brain className="h-12 w-12" />
        <h3 className="text-2xl font-bold">Agil denken</h3>
        <p className="text-sm">
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
        </p>
      </GridItem>
      <GridItem className="col-span-10 flex flex-col items-center gap-4 border-2 bg-[var(--background)] p-6 sm:col-span-3">
        <MessageSquare className="h-12 w-12" />
        <h3 className="text-2xl font-bold">Klar kommunizieren</h3>
        <p className="text-sm">
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
        </p>
      </GridItem>
      <GridItem className="col-span-10 flex flex-col items-center gap-4 border-2 bg-[var(--background)] p-6 sm:col-span-3">
        <LayoutPanelTop className="h-12 w-12" />
        <h3 className="text-2xl font-bold">Smart entwickeln</h3>
        <p className="text-sm">
          Mein Techstack basiert auf modernen Web- und Mobile-Technologien wie
          React, React Native, Next.js, Firebase und Tailwind. Ich habe viele
          Tools ausprobiert, aber mich bewusst auf Technologien fokussiert, die
          mir helfen, stabile und skalierbare Lösungen auf allen Plattformen
          umzusetzen – egal ob für iOS, Android oder im Web. Dabei geht es mir
          nie nur ums Technische: Ich entwickle so, dass Nutzer:innen das
          Ergebnis intuitiv verstehen – und Teams das Projekt effizient
          weiterentwickeln können. Clean Code, Wiederverwendbarkeit und
          Performance sind für mich keine Buzzwords, sondern Grundlage meines
          Handwerks.
        </p>
      </GridItem>
    </Grid>
  )
}
