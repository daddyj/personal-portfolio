import Image from "next/image"
import { Grid, GridItem } from "./Grid"
import { ArrowDownIcon } from "@heroicons/react/24/outline"

export const About = () => {
  return (
    // <div className="w-screen h-screen bg-[tomato] flex flex-col">
    //   <div className="flex flex-col p-[80px] px-[160px] pr-0 pb-0 h-screen gap-[80px]">
    //     <div className="w-[70vw]">
    //       <h1 className="bold text-6xl">Software Entwickler / <br /> Teamlead</h1>
    //     </div>
    //     <div className="flex justify-end px-[80px]">
    //       <div className="overflow-hidden bg-[url(/about-me.png)] bg-fixed bg-no-repeat bg-top w-[70vw] h-[30vh]" />
    //     </div>
    //     <div className="flex flex-1 w-[60vw] items-end self-end">
    //       <h2 className="text-3xl text-justify bg-black p-16 px-[40px]">
    //         Hi, ich bin Acun. Ich bin seit über 15 Jahren in der Industrie als Software Entwickler tätig, sowohl Fullstack als auch mit Fokus im Frontend. <br />
    //         Ich unterstütze Entwicklungsteams sowohl aktiv bei der Entwicklung im Web- und App-Bereich als auch organisatorisch als Team Lead mit agilen Methodiken.
    //       </h2>
    //     </div>
    //   </div>
    // </div>
    <Grid rows={6}>
      <GridItem className="col-span-10" />
      <GridItem className="col-span-6">
        <div className="">
          <h1 className="bold text-9xl">Hi!</h1>
        </div>
      </GridItem>
      <GridItem className="col-span-4 flex justify-end animate-fade animate-once animate-duration-1500 animate-ease-out">
        <div className="w-72 h-72 rounded-full bg-center bg-no-repeat" style={{ backgroundImage: 'url(/about-me.png)', backgroundSize: "200%", backgroundPositionY: -100 }}>
        </div>
      </GridItem>
      <GridItem className="col-span-10" />
      <GridItem className="col-span-10" />
      <GridItem className="col-span-10" />
      <GridItem className="col-span-4" />
      <GridItem className="col-span-6 flex items-end justify-end" >
        <h2 className="text-3xl bg-black animate-fade-left animate-once">
          Ich bin Acun. Ich bin seit über 15 Jahren in der Industrie als Software Entwickler tätig, sowohl Fullstack als auch mit Fokus im Frontend. <br />
          Ich unterstütze Entwicklungsteams sowohl aktiv bei der Entwicklung im Web- und App-Bereich als auch organisatorisch als Team Lead mit agilen Methodiken.
        </h2>
      </GridItem>
    </Grid>
  )
}