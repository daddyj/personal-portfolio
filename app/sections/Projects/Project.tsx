import 'atropos/css'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import Atropos from 'atropos'
import Image from 'next/image'
import { JSX, useEffect, useRef } from 'react'
import { Autoplay, EffectCards, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Project = ({
  title,
  customer,
  description,
  technologies,
  images,
  projectId,
}: {
  title: string
  customer: string
  description: string
  technologies: JSX.Element[]
  images: string[]
  projectId: string
}) => {
  const progressCircle = useRef<SVGSVGElement>(null)
  const progressContent = useRef<HTMLSpanElement>(null)
  // const onAutoplayTimeLeft = (
  //   s: SwiperClass,
  //   time: number,
  //   progress: number
  // ) => {
  //   progressCircle.current?.style.setProperty(
  //     '--progress',
  //     (1 - progress).toString()
  //   )
  //   progressContent.current?.textContent = `${Math.ceil(time / 1000)}s`
  // }

  useEffect(() => {
    Atropos({
      el: `.project-${projectId}`,
      activeOffset: 5,
      shadowScale: 1.05,
      rotateYMax: 1,
    })
  })

  return (
    <div
      className={`atropos project-${projectId} overflow-hidden rounded-2xl`}
      style={{ height: '100%', width: '100%' }}
    >
      <div className="atropos-scale">
        <div className="atropos-rotate">
          <div className="atropos-inner">
            <div className="flex h-full gap-16 border-1 border-blue-500/10 bg-black/80 px-16 py-8">
              <div className="flex h-full flex-1 flex-col gap-4">
                <h3 className="text-6xl font-thin">{title}</h3>
                <h4 className="text-2xl font-normal">Kunde: {customer}</h4>
                <p className="flex-1 text-2xl">Beschreibung: {description}</p>
                <div>
                  <Swiper
                    effect="cards"
                    grabCursor
                    modules={[EffectCards]}
                    className="swiperSkillsCvTechnologies"
                    onDrag={(e) => {
                      e.stopPropagation()
                    }}
                  >
                    {technologies.map((technology) => (
                      <SwiperSlide key={technology.key}>
                        <div className="h-full w-full overflow-hidden rounded-xl">
                          {technology}
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
              <div className="flex h-full w-1/2 flex-1 flex-col justify-center">
                <Swiper
                  cssMode
                  spaceBetween={30}
                  centeredSlides={false}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                  }}
                  pagination
                  modules={[Autoplay, Pagination]}
                  // onAutoplayTimeLeft={onAutoplayTimeLeft}
                  className="swiperProject"
                >
                  {images.map((imageUrl) => (
                    <SwiperSlide key={imageUrl}>
                      <div className="h-11/12 w-full">
                        <Image
                          src={imageUrl}
                          alt={imageUrl}
                          width={1920}
                          height={1080}
                          className="h-full w-full rounded-2xl"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                  <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                      <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
