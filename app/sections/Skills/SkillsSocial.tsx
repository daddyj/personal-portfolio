import { GridItem } from '@/app/components/Grid'

import { AgileMethods } from './AgileMethods'
import { SkillsWrapper } from './SkillsWrapper'

export const SkillsSocial = () => (
  <SkillsWrapper skillsKey="skillsSocial">
    <GridItem className="col-span-10">
      <h2 className="text-4xl font-bold sm:text-6xl sm:font-normal">
        Agil denken.
      </h2>
    </GridItem>
    <GridItem className="col-span-10">
      <AgileMethods />
    </GridItem>
  </SkillsWrapper>
)
