'use client'

import 'swiper/css'
import 'swiper/css/pagination'

import { motion, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Grid, GridItem } from '../../components/Grid'
import { PixelGlitchScreen } from '../../components/PixelGlitchScreen'
import { useNavigationContext } from '../../lib/useNavigationContext'
import { useViewportIntersect } from '../../lib/useViewportIntersect'
import { testimonials } from './constants'

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
            pagination
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: false,
            // }}
            className="h-[400px] w-full"
            navigation
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="flex h-full flex-col gap-16 rounded-lg p-4 px-8 sm:justify-between sm:p-8">
                  <blockquote className="text-center text-xl text-gray-200 italic sm:text-4xl">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div className="flex flex-col items-center text-center sm:mt-auto sm:items-start">
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
