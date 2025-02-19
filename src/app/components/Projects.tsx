import Image from 'next/image'

export const Projects = () => {
  return (
    <div className="w-screen h-screen bg-black">
      <div className="flex flex-col p-20 px-40 gap-30">
        <h1 className="text-6xl">Meine aktiven Projekte</h1>
        {/* Projekt: Myla */}
        <div className="flex gap-12">
          <div className="flex rounded-sm w-132 overflow-hidden">
            <Image src="/myla-1.png" width={330 / 1.25} height={717 / 1.25} alt="Erstes Bild zu Myla App" />
            <Image src="/myla-2.png" width={330 / 1.25} height={717 / 1.25} alt="Erstes Bild zu Myla App" />
          </div>
          <div className="flex flex-1">
            <p className="text-2xl text-justify">Die App Myla hat als Ziel eine individuelle Lernbegleitung für jedes Kind anzubieten. Es nutzt künstliche Intelligenz in einer geführten und interaktiven Erfahrung für die Kinder, so dass Sie spielerisch das selbstständige Lernen erhalten. <br />
              Die App habe ich vollständig entwickelt und im iOS AppStore für iPads und iPhones veröffentlicht. Android ist auch in Planung. Mehr Informationen findest Du hier: [TODO URL einfügen zu THE ANSWER Homepage]</p>
          </div>
        </div>
      </div>
    </div>
  )
}