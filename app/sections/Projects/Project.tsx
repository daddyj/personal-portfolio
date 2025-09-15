import 'atropos/css'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import Atropos from 'atropos'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { JSX, useEffect } from 'react'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export const Project = ({
  title,
  customer,
  description,
  role,
  technologies,
  images,
  projectId,
  hasAi,
  url,
}: {
  title: string
  customer: string
  description: string
  role: string
  technologies: JSX.Element[]
  images: string[]
  projectId: string
  hasAi?: boolean
  url?: string
}) => {
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
      className={`atropos project-${projectId} relative rounded-2xl`}
      style={{ height: '100%', width: '100%' }}
    >
      <div className="atropos-scale">
        <div className="atropos-rotate">
          <div className="atropos-inner">
            <div className="relative flex h-full gap-16 rounded-2xl border-1 border-blue-500/20 bg-black/80 px-10 py-8 sm:px-16">
              <div className="flex h-full flex-1 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-4xl font-thin sm:text-6xl">{title}</h3>
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Externer Link zu Projekt"
                    >
                      <ExternalLink />
                    </a>
                  )}
                </div>
                <h4 className="text-xl font-normal sm:text-2xl">
                  Kunde: {customer}
                </h4>
                <p className="flex-1 text-base sm:text-2xl">
                  Beschreibung: {description}
                </p>
                <p className="flex-1 text-base sm:text-2xl">Rolle: {role}</p>
                <div className="flex flex-wrap gap-8">
                  {technologies.map((technology) => (
                    <div key={technology.key}>{technology}</div>
                  ))}
                </div>
              </div>
              <div className="hidden h-full w-1/2 flex-1 flex-col justify-center sm:flex">
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
                      <div className="h-full w-full">
                        <Image
                          src={imageUrl}
                          alt={imageUrl}
                          fill
                          sizes="100vw"
                          className="h-full w-full rounded-2xl"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
      {hasAi && (
        <div className="absolute right-0 -bottom-16 z-1 h-40 w-40">
          <Image
            key="certified"
            src="/certified.png"
            alt="certified"
            sizes="400px"
            fill
            className="rounded-full"
          />
        </div>
      )}
    </div>
  )
}
