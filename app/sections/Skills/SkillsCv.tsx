import { DocumentIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

import { GridItem } from '@/app/components/Grid'

import { SkillsWrapper } from './SkillsWrapper'

export const SkillsCv = () => (
  <SkillsWrapper skillsKey="skillsCv">
    <GridItem className="col-span-10 sm:col-span-4">
      <h2 className="text-4xl font-bold sm:text-6xl sm:font-normal">
        Lebenslauf
      </h2>
    </GridItem>
    <GridItem className="col-span-10 sm:col-span-6">
      <p className="text-xl sm:text-2xl">
        Nachfolgend unterschiedliche Perspektiven um einen detaillierteren
        Einblick in meine bisherige Erfahrung zu bekommen. <br />
        Da ich viele Jahre auch in angestellten Verhältnissen gearbeitet habe,
        bietet sich durch folgende Perspektiven auch dazu ein besseres
        Verständnis.
      </p>
    </GridItem>
    <GridItem className="col-[none] sm:col-span-4" />
    <GridItem className="col-span-10 flex flex-col items-center justify-around gap-16 sm:col-span-6 sm:flex-row">
      <a href="/docs/acun_guersoy_cv_2025.pdf" target="_blank">
        <div className="flex h-40 min-w-[180px] flex-col items-center justify-end gap-2 border-b-2 border-transparent transition-all hover:scale-[125%] hover:rotate-2 hover:cursor-pointer hover:border-blue-500 hover:font-bold hover:text-blue-500">
          <DocumentIcon className="size-24 sm:size-32" />
          <p>PDF herunterladen</p>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/acun-g%C3%BCrsoy-83b8ab139/"
        target="_blank"
      >
        <div className="flex h-40 min-w-[180px] flex-col items-center justify-end gap-4 border-b-2 border-transparent transition-all hover:scale-[125%] hover:rotate-2 hover:cursor-pointer hover:border-blue-500 hover:font-bold hover:text-blue-500">
          <div className="rounded-sm bg-white p-4">
            <Image
              width={128}
              height={128}
              src="/logos/linkedin.svg"
              alt="Link to Github account"
            />
          </div>
          <p>LinkedIn Profil</p>
        </div>
      </a>
      <a href="https://github.com/daddyj" target="_blank">
        <div className="flex h-40 min-w-[180px] flex-col items-center justify-end gap-4 border-b-2 border-transparent transition-all hover:scale-[125%] hover:rotate-2 hover:cursor-pointer hover:border-blue-500 hover:font-bold hover:text-blue-500">
          <Image
            width={128}
            height={128}
            src="/logos/github.svg"
            alt="Link to Github account"
            className=""
          />
          <p>Github Konto</p>
        </div>
      </a>
    </GridItem>
  </SkillsWrapper>
)
