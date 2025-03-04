import { GridItem } from '@/app/components/Grid'

import { SkillsWrapper } from './SkillsWrapper'

export const SkillsSocial = () => (
  <SkillsWrapper skillsKey="skillsSocial">
    <GridItem className="col-span-10 flex flex-col sm:col-span-4 sm:gap-16">
      <h2 className="text-4xl font-bold sm:text-6xl sm:font-normal">
        Social Skills
      </h2>
      <div
        className="my-16 h-56 w-56 rounded-full bg-blue-500 bg-center bg-no-repeat sm:my-0 sm:h-64 sm:w-64"
        style={{
          backgroundImage: 'url(/skills-cv-section-me.jpeg)',
          backgroundSize: '100%',
        }}
      />
    </GridItem>
    <GridItem className="col-span-10 sm:col-span-6 sm:pt-0">
      <p className="text-xl sm:text-2xl">
        Meine Leidenschaft für technologische Optimierung kombiniere ich mit
        einem starken methodischen und kommunikativen Ansatz. Als
        Softwareentwickler lege ich großen Wert darauf, eine verständliche
        Brücke zwischen Technik und gemeinsamer Projektentwicklung zu schaffen.
        Agile Arbeitsmethoden begeistern mich und prägen seit mehreren Jahren
        meinen Arbeitsstil. Gleichzeitig verfüge ich über fundierte Erfahrungen
        im klassischen Projektmanagement nach der Wasserfall-Methodik –
        Flexibilität und Anpassungsfähigkeit sind für mich selbstverständlich.
        <br />
        <br />
        Ansonsten findet man mich mit meinem best buddy stets in der Natur
        wieder, denn hier kann ich maximal abschalten und alle notwendige
        Energie sammeln die ich mir wünsche.
      </p>
    </GridItem>
    <GridItem className="col-span-10 sm:col-span-4" />
    <GridItem className="col-span-10 flex flex-col justify-end gap-4 sm:col-span-6">
      <div className="text-md flex flex-wrap gap-2 sm:gap-4 sm:text-2xl">
        <p className="font-bold">Agile Methoden:</p>
        <p>SCRUM</p>
        <p>#</p>
        <p>Kanban</p>
        <p>#</p>
        <p>Google-OKRs</p>
        <p>#</p>
        <p>Lean</p>
        <p>#</p>
        <p>Design-Sprint</p>
      </div>
      <div className="text-md flex flex-wrap gap-2 sm:gap-4 sm:text-2xl">
        <p className="font-bold">Tools:</p>
        <p>Google-Meet</p>
        <p>#</p>
        <p>Slack</p>
        <p>#</p>
        <p>Teams</p>
        <p>#</p>
        <p>Miro / Trello / Atlassian Tools</p>
      </div>
    </GridItem>
  </SkillsWrapper>
)
