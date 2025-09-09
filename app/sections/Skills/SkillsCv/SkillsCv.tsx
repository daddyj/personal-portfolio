import 'swiper/css'
import 'swiper/css/effect-cards'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './styles.css'

import { AnimatePresence, motion } from 'framer-motion'
import { Award } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { EffectCards, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { GridItem } from '@/app/components/Grid'
import { NextJsSvg, ReactSvg, TamaguiSvg } from '@/app/components/Icons'
import { JavascriptSvg } from '@/app/components/Icons/Javascript'
import { MaterialUiSvg } from '@/app/components/Icons/MaterialUi'
import { TailwindCssSvg } from '@/app/components/Icons/TailwindCss'
import { TypescriptSvg } from '@/app/components/Icons/Typescript'
import { useNavigationContext } from '@/app/lib/useNavigationContext'
import { useViewportIntersect } from '@/app/lib/useViewportIntersect'

import { SkillsWrapper } from '../SkillsWrapper'

export const SkillsCv = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      const width = index == 1 ? '60px' : '20px'
      return (
        '<span class="' +
        className +
        '", style="width: ' +
        width +
        '">' +
        (index + 1) +
        '</span>'
      )
    },
  }

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
        <Swiper
          rewind
          slidesPerView={1}
          cssMode
          navigation
          pagination={pagination}
          modules={[Pagination, Navigation]}
          className="swiperSkillsCv"
        >
          <SwiperSlide>
            <AnimatePresence mode="wait">
              {
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-between sm:py-8"
                >
                  <div className="flex flex-1 gap-8 pr-16">
                    <div className="flex-1">
                      <p className="text-2xl lg:text-6xl lg:font-light">
                        2008 - 2011
                      </p>
                    </div>

                    <div className="flex-2">
                      <p className="line-height-12 text-2xl">
                        Beginn meiner Karriere als selbstständiger Entwickler
                        mit Fokus auf Projektarbeit für Kunden inklusive
                        Kundenbesuch, Beratung und Entwicklung vor Ort.
                        <br />
                        Da diese Phase gegen Ende während meines Studiums
                        stattfand, habe ich die Möglichkeit gehabt praktische
                        Erfahrungen in echten Projekten in der Wirtschaft zu
                        sammeln. So konnte ich auch beginnen meine
                        kommunikativen Fähigkeiten zu entwickeln.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-around">
                    <div className="flex flex-col items-center gap-16">
                      <h4 className="text-6xl font-normal">Technologien</h4>
                      <Swiper
                        effect="cards"
                        grabCursor
                        modules={[EffectCards]}
                        className="swiperSkillsCvTechnologies"
                        onDrag={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <SwiperSlide>
                          <JavascriptSvg />
                        </SwiperSlide>
                        <SwiperSlide>
                          <p>PHP tbd</p>
                        </SwiperSlide>
                        <SwiperSlide>
                          <p>MySQL tbd</p>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="flex flex-col items-center gap-16">
                      <h4 className="text-6xl font-normal">Kundenbenefits</h4>
                      <Swiper
                        effect="cards"
                        grabCursor
                        modules={[EffectCards]}
                        className="swiperSkillsCvTechnologies"
                        onDrag={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <SwiperSlide>
                          <div className="font-sm flex flex-col items-center gap-2 p-4 text-center text-base">
                            <Award className="h-16 w-16" />
                            <p className="flex-1">
                              Kundenbetreuung und -beratung
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="font-sm flex flex-col items-center gap-2 p-4 text-center text-base">
                            <Award className="h-16 w-16" />
                            <p className="flex-1">
                              Tiefes Verständnis für Produktionsplanung und Best
                              Practices
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="font-sm flex flex-col items-center gap-2 p-4 text-center text-base">
                            <Award className="h-16 w-16" />
                            <p className="flex-1">
                              Fähigkeit, komplexe technische Lösungen
                              verständlich zu kommunizieren
                            </p>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </SwiperSlide>
          <SwiperSlide>
            <AnimatePresence mode="wait">
              {
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-between gap-16 sm:py-8"
                >
                  <div className="flex flex-1 gap-8 pr-16">
                    <div className="flex-1">
                      <p className="text-2xl lg:text-6xl lg:font-light">
                        2011 - 2025
                      </p>
                    </div>

                    <div className="flex-2">
                      <p className="line-height-12 text-2xl">
                        14 Jahre Erfahrung in verschiedenen Unternehmen, wo ich
                        tiefe Einblicke in Unternehmensstrukturen und Teamarbeit
                        gewonnen habe.
                        <br />
                        Durch die Zeit habe ich eine Menge Erfahrung in der
                        Zusammenarbeit mit großen Unternehmen und die
                        Möglichkeit gehabt meine Teamführungsfähigkeiten zu
                        entwickeln.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-around">
                    <div className="flex flex-col items-center gap-16">
                      <h4 className="text-6xl font-normal">Technologien</h4>
                      <Swiper
                        effect="cards"
                        grabCursor
                        modules={[EffectCards]}
                        className="swiperSkillsCvTechnologies"
                        onDrag={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <SwiperSlide>
                          <ReactSvg />
                        </SwiperSlide>
                        <SwiperSlide>
                          <TypescriptSvg />
                        </SwiperSlide>
                        <SwiperSlide>
                          <p>C# tbd</p>
                        </SwiperSlide>
                        <SwiperSlide>
                          <p>Node.js tbd</p>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="flex flex-col items-center gap-16">
                      <h4 className="text-6xl font-normal">Kundenbenefits</h4>
                      <Swiper
                        effect="cards"
                        grabCursor
                        modules={[EffectCards]}
                        className="swiperSkillsCvTechnologies"
                        onDrag={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <SwiperSlide>
                          <div className="font-sm flex flex-col items-center gap-2 p-4 text-center text-base">
                            <Award className="h-16 w-16" />
                            <p className="flex-1">
                              Verantwortlich für die technische Leitung und
                              Mentoring von Entwicklerteams
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="font-sm flex flex-col items-center gap-2 p-4 text-center text-base">
                            <Award className="h-16 w-16" />
                            <p className="flex-1">
                              Erfolgreiches globales Ausrollen einer neuen
                              Benutzeroberfläche von 0 auf 100%
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="font-sm flex flex-col items-center gap-2 p-4 text-center text-base">
                            <Award className="h-16 w-16" />
                            <p className="flex-1">
                              Umfassende Erfahrung in der Zusammenarbeit mit
                              großen Unternehmen
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="font-sm flex flex-col items-center gap-2 p-4 text-center text-base">
                            <Award className="h-16 w-16" />
                            <p className="flex-1">
                              Weiterbildung zur Teamführung
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="font-sm flex flex-col items-center gap-2 p-4 text-center text-base">
                            <Award className="h-16 w-16" />
                            <p className="flex-1">
                              Expertise in der Integration von modernen
                              Technologien in bestehende Systeme
                            </p>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </SwiperSlide>
          <SwiperSlide>
            <AnimatePresence mode="wait">
              {
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col justify-between gap-16 sm:py-8"
                >
                  <div className="flex flex-1 gap-8 pr-16">
                    <div className="flex-1">
                      <p className="text-2xl lg:text-6xl lg:font-light">
                        2025 - heute
                      </p>
                    </div>

                    <div className="flex-2">
                      <p className="line-height-12 text-2xl">
                        Selbstständigkeit wieder aktiviert um eigene Produkte zu
                        entwickeln und für ausgewählte Projekte zu arbeiten und
                        Impact zu erzielen.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-1 justify-around">
                    <div className="flex flex-col items-center gap-16">
                      <h4 className="text-6xl font-normal">Technologien</h4>
                      <Swiper
                        effect="cards"
                        grabCursor
                        modules={[EffectCards]}
                        className="swiperSkillsCvTechnologies"
                        onDrag={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <SwiperSlide>
                          <TypescriptSvg />
                        </SwiperSlide>
                        <SwiperSlide>
                          <NextJsSvg />
                        </SwiperSlide>
                        <SwiperSlide>
                          <TamaguiSvg />
                        </SwiperSlide>
                        <SwiperSlide>
                          <TailwindCssSvg />
                        </SwiperSlide>
                        <SwiperSlide>
                          <MaterialUiSvg />
                        </SwiperSlide>
                        <SwiperSlide>
                          <p>Firebase tbd</p>
                        </SwiperSlide>
                        <SwiperSlide>
                          <p>AWS tbd</p>
                        </SwiperSlide>
                        <SwiperSlide>
                          <p>Docker tbd</p>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                    <div className="flex flex-col items-center gap-16">
                      <h4 className="text-6xl font-normal">Kundenbenefits</h4>
                      <Swiper
                        effect="cards"
                        grabCursor
                        modules={[EffectCards]}
                        className="swiperSkillsCvTechnologies"
                        onDrag={(e) => {
                          e.stopPropagation()
                        }}
                      >
                        <SwiperSlide>
                          <div className="font-sm flex flex-col items-center gap-2 p-4 text-center text-base">
                            <Award className="h-16 w-16" />
                            <p className="flex-1">
                              Kundenbetreuung und -beratung
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="font-sm flex flex-col items-center gap-2 p-4 text-center text-base">
                            <Award className="h-16 w-16" />
                            <p className="flex-1">
                              Tiefes Verständnis für Produktionsplanung und Best
                              Practices
                            </p>
                          </div>
                        </SwiperSlide>
                        <SwiperSlide>
                          <div className="font-sm flex flex-col items-center gap-2 p-4 text-center text-base">
                            <Award className="h-16 w-16" />
                            <p className="flex-1">
                              Fähigkeit, komplexe technische Lösungen
                              verständlich zu kommunizieren
                            </p>
                          </div>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </motion.div>
              }
            </AnimatePresence>
          </SwiperSlide>
        </Swiper>
      </GridItem>
    </SkillsWrapper>
  )
}
