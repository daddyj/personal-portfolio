import { useEffect, useRef } from "react";
import { Grid, GridItem } from "./Grid";
import { ArrowDownIcon } from "@heroicons/react/24/outline";


export const Hero = () => {
  return (
    <>
      <Grid rows={`[auto_auto_auto_auto]`}>

        <div className="absolute w-screen h-screen">
          <GlitchVideo glitchOnly />
        </div>

        <GridItem className="col-span-10" />

        <GridItem className="col-span-8 flex flex-col bg-black animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-440">
          <h1 className="text-8xl uppercase">Software Entwickler</h1>
          <h2 className="text-xl uppercase">Web / Mobile</h2>
        </GridItem>
        <GridItem className="col-span-2" />

        <GridItem className="col-span-10" />

        <GridItem className="col-span-6" />
        <GridItem className="col-span-4 flex items-end justify-end p-1 px-2 gap-4 bg-black animate-fade-up animate-once animate-duration-1200 animate-ease-out animate-delay-720" >
          <h2 className="text-8xl text-end">Acun Gürsoy</h2>
          {/* <a href="#" className="text-4xl font-bold border-b-2 transition-all duration-120 hover:text-6xl hover:rotate-[-2deg] hover:border-2 hover:p-4 animate-pulse hover:animate-none">Hier lang</a> */}
        </GridItem>
      </Grid>
    </>
  )
}

const GlitchVideo = ({ glitchOnly = false }: { glitchOnly?: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Match the viewport
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // 10x10 grid
    const rows = 10;
    const cols = 10;
    const cellWidth = width / cols;
    const cellHeight = height / rows;

    // Draw black squares at random intervals
    const intervalId = setInterval(() => {
      // Pick a random cell
      const randomCol = Math.floor(Math.random() * cols);
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol2 = Math.floor(Math.random() * cols);
      const randomRow2 = Math.floor(Math.random() * rows);
      // const randomCol3 = Math.floor(Math.random() * cols);
      // const randomRow3 = Math.floor(Math.random() * rows);

      const x = Math.round(randomCol * cellWidth);
      const y = Math.round(randomRow * cellHeight);
      const x2 = Math.round(randomCol2 * cellWidth);
      const y2 = Math.round(randomRow2 * cellHeight);
      // const x3 = Math.round(randomCol3 * cellWidth);
      // const y3 = Math.round(randomRow3 * cellHeight);

      const w = Math.ceil(cellWidth);
      const h = Math.ceil(cellHeight);

      // Draw black square
      ctx.fillStyle = '#2B7FFF';
      ctx.fillRect(x, y, w, h);
      // Draw black square
      ctx.fillStyle = '#2B7FFF';
      ctx.fillRect(x2, y2, w, h);
      // Draw black square
      // ctx.fillStyle = 'black';
      // ctx.fillRect(x3, y3, w, h);

      setTimeout(() => {
        ctx.clearRect(x, y, w, h);
      }, (Math.random() * 200) + 200);
      setTimeout(() => {
        ctx.clearRect(x2, y2, w, h);
      }, (Math.random() * 100) + 100);
      // setTimeout(() => {
      //   ctx.clearRect(x3, y3, w, h);
      // }, 40);
    }, (Math.random() * 500) + 250);

    // Clean up on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {!glitchOnly && (
        <video
          src="/hero-2.mp4"
          aria-label="Hero Video by Ron Lach : https://www.pexels.com/video/back-view-of-a-boy-looking-a-screen-9783697/"
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-screen h-screen object-cover"
        />
      )}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-screen h-screen pointer-events-none"
      />
    </div>
  );
};