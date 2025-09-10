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
      className={`atropos project-${projectId} overflow-hidden rounded-2xl`}
      style={{ height: '100%', width: '100%' }}
    >
      <div className="atropos-scale">
        <div className="atropos-rotate">
          <div className="atropos-inner">
            <div className="relative flex h-full gap-16 border-1 border-blue-500/20 bg-black/80 px-16 py-8">
              <div className="flex h-full flex-1 flex-col gap-4">
                <div className="flex items-center gap-4">
                  <h3 className="text-6xl font-thin">{title}</h3>
                  {url && (
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink />
                    </a>
                  )}
                </div>
                <h4 className="text-2xl font-normal">Kunde: {customer}</h4>
                <p className="flex-1 text-2xl">Beschreibung: {description}</p>
                <p className="flex-1 text-2xl">Rolle: {role}</p>
                <div className="flex flex-wrap gap-8">
                  {technologies.map((technology) => (
                    <div key={technology.key}>{technology}</div>
                  ))}
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
                      <div className="h-full w-full">
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
                </Swiper>
              </div>
              {hasAi && (
                <div className="absolute right-0 bottom-0 z-10">
                  <Image
                    key="certified"
                    src="/certified.png"
                    alt="certified"
                    width={100}
                    height={100}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
