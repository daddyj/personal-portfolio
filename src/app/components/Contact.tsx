import { EnvelopeIcon } from "@heroicons/react/24/outline"
import { Grid, GridItem } from "./Grid"

export const Contact = ({ id }: { id?: string }) => {
  return (
    <Grid id={id} className="grid-rows-[auto_1fr]">
      <GridItem className="col-span-10 flex">
        <p className="text-6xl">Lass uns sprechen!</p>
      </GridItem>
      <GridItem className="col-span-10 flex justify-center items-center">
        <a href="mailto:acun.guersoy@gmail.com" className="text-6xl flex gap-2 items-center uppercase border-b-2 text-blue-400 transition-all duration-210 hover:text-8xl hover:rotate-2 hover:border-2 hover:p-16"><EnvelopeIcon className="size-24" /> Schreib eine E-Mail</a>
      </GridItem>


    </Grid>
  )
}