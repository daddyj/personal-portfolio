'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Grid, GridItem } from '../components/Grid'
import { PixelGlitchScreen } from '../components/PixelGlitchScreen'
import { useNavigationContext } from '../lib/useNavigationContext'
import { useViewportIntersect } from '../lib/useViewportIntersect'

const testimonials = [
  {
    name: 'Vera Herberholt',
    role: 'Assistenz der Geschäftsführung',
    company: 'tinkerbrain',
    quote:
      'Acun hat unser Projekt technisch komplett umgesetzt, zuverlässig betreut und war stets ein flexibler, vertrauensvoller Ansprechpartner.',
  },
  {
    name: 'Mathias Eisenhut',
    role: 'Projektleiter',
    company: 'Queer*link',
    quote:
      'Top-Entwickler: Acun Gürsoy übertraf mit kreativen Ideen für unsere LGBTQ+ Webseite alle Erwartungen. Stets lösungsorientiert & absolut empfehlenswert',
  },
  {
    name: 'Tyll Selhorst',
    role: 'Mitgründer',
    company: 'The Answer GmbH',
    quote:
      'Acun hat das technische Feld vollständig betreut und uns zusätzlich bei Projektmanagement und agiler Arbeitsweise weiter gefördert!',
  },
  {
    name: 'Sebastian Weber',
    role: 'Agile Coach',
    company: 'DeepUp GmbH',
    quote:
      'Acun ist ein Vorbild für Servant Leadership und ganzheitliche Organisationsentwicklung. Er war Inspiration und Sparringspartner für mich.',
  },
]

export const Testimonials = () => {
  const { setCurrentSection, setFullyVisible } = useNavigationContext()
  const gridWrapper = useRef<HTMLDivElement>(null)
  const { isVisible, isFullyVisible } = useViewportIntersect(gridWrapper)

  const isInView = useInView(gridWrapper, {
    once: false,
    margin: '-100px 0px',
  })

  useEffect(() => {
    if (isVisible) setCurrentSection('testimonials')
    if (isFullyVisible) setFullyVisible('testimonials')
  }, [isFullyVisible, isVisible, setCurrentSection, setFullyVisible])

  return (
    <Grid
      ref={gridWrapper}
      id="testimonials"
      className="relative h-screen grid-rows-[auto_auto_auto] lg:grid-rows-[auto_1fr_auto]"
    >
      <motion.div
        className="absolute inset-0 hidden sm:block"
        animate={isInView ? 'visible' : 'hidden'}
        initial="hidden"
      >
        <PixelGlitchScreen interval={1260} gridSize={8} />
        <PixelGlitchScreen interval={420} gridSize={30} />
        <PixelGlitchScreen interval={840} gridSize={20} />
      </motion.div>
      <h1 className="text-4xl font-light text-white md:text-6xl">Meinungen</h1>
      <GridItem className="animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-240 col-span-10 flex justify-center">
        <div className="flex w-full self-center sm:w-2/3">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            className="h-[400px] w-full"
            navigation
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full flex-col gap-6 rounded-lg p-8 px-40">
                  <blockquote className="text-center text-2xl text-gray-200 italic md:text-4xl">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="mt-auto">
                    <p className="text-lg font-medium text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-400">{testimonial.role}</p>
                    <p className="text-blue-400">{testimonial.company}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </GridItem>
    </Grid>
  )
}
