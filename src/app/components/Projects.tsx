import Image from 'next/image'
import { Grid, GridItem } from './Grid'

// const ProjectsToggle = () => {
//   return 
// }

export const Projects = ({ id }: { id?: string }) => {
  return (
    <Grid id={id} className="grid-rows-[auto_80px_auto_auto]">
      <GridItem className='col-span-10'>
        <h1 className="text-6xl">Meine aktiven Projekte</h1>
      </GridItem>
      <GridItem className='col-span-10' />
      <GridItem className='col-span-3 text-4xl flex flex-col gap-8'>
        <p className="border-b-2">Myla - App</p>
        <p className="text-gray-800 border-b-2 border-transparent hover:border-b-2 hover:border-white hover:text-white transition-all hover:cursor-pointer">THE ANSWER GmbH Homepage</p>
        <p className="text-gray-800 border-b-2 border-transparent hover:border-b-2 hover:border-white hover:text-white transition-all hover:cursor-pointer">Acun Gürsoy Homepage</p>
      </GridItem>
      <GridItem className='col-span-3 flex flex-col gap-8'>
        <div className='text-2xl'>
          <p className='font-bold'>Rolle in dem Projekt:</p>
          <p>Fullstack Entwicklung App und Bereitstellung der Cloud Infrastruktur.</p>
        </div>
        <div className='text-2xl'>
          <p className='font-bold'>TechStack (TODO use icons with animation effect):</p>
          <div className='flex flex-wrap gap-2'>
            <p>React-Native</p>
            <p>#</p>
            <p>Tamagui UI Kit</p>
            <p>#</p>
            <p>Firebase</p>
            <p>#</p>
            <p>Google-Cloud</p>
          </div>
        </div>
      </GridItem>
      <GridItem className='col-span-4 flex justify-end items-start'>
        <div className="flex rounded-sm overflow-hidden">
          <Image src="/myla-1.png" width={330 / 2.5} height={717 / 2.5} alt="Erstes Bild zu Myla App" />
          <Image src="/myla-2.png" width={330 / 2.5} height={717 / 2.5} alt="Erstes Bild zu Myla App" />
        </div>
      </GridItem>
      <GridItem className='col-span-3' />
      <GridItem className='col-span-7 flex items-end' >
        <p className="text-2xl">Die App Myla hat als Ziel eine individuelle Lernbegleitung für jedes Kind anzubieten. Es nutzt künstliche Intelligenz in einer geführten und interaktiven Erfahrung für die Kinder, so dass Sie spielerisch das selbstständige Lernen erhalten. <br />
          Die App habe ich vollständig entwickelt und im iOS AppStore für iPads und iPhones veröffentlicht. Android ist auch in Planung. Mehr Informationen findest Du hier: [TODO URL einfügen zu THE ANSWER Homepage]</p>
      </GridItem>
    </Grid>
  )
}