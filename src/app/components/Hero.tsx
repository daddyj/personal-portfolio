import { useEffect, useRef } from "react";
import { Grid, GridItem } from "./Grid";


export const Hero = () => {
  return (
    <Grid rows={4}>
      <div className="absolute w-screen h-screen">
        <HeroEffectCanvas />
      </div>

      {/* <video autoPlay muted loop playsInline aria-label="Hero Video by Ron Lach : https://www.pexels.com/video/back-view-of-a-boy-looking-a-screen-9783697/" className="w-full h-screen absolute" style={{ objectFit: 'cover' }}>
        <source src="/hero-2.mp4" type="video/mp4" />
      </video> */}

      <GridItem colSpan={4} className="col-span-4 flex justify-center items-center p-4 bg-black animate-fade-down animate-once animate-duration-1200 animate-ease-out animate-delay-5240">
        <h1 className="text-6xl text-center">Acun Gürsoy</h1>
      </GridItem>

      <GridItem colSpan={6} className="col-span-6" />
      <GridItem colSpan={10} className="col-span-10" />
      <GridItem colSpan={10} className="col-span-10" />


      <GridItem colSpan={4} />
      <GridItem colSpan={6} className="flex flex-col items-center justify-center p-1 px-2 gap-4 bg-black animate-fade-up animate-once animate-duration-1200 animate-ease-out animate-delay-5420" >
        <h2 className="text-5xl text-center">Software Entwicklung <br /> Web / Mobile</h2>
        <a href="#" className="text-4xl font-bold border-b-2 transition-all duration-120 hover:text-6xl hover:rotate-[-2deg] hover:border-2 hover:p-4 animate-pulse hover:animate-none">Hier lang</a>
      </GridItem>
    </Grid>
  )
}

const HeroEffectCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to viewport dimensions
    const cw = window.innerWidth;
    const ch = window.innerHeight;
    canvas.width = cw;
    canvas.height = ch;

    // Disable image smoothing to avoid anti-aliasing gaps
    ctx.imageSmoothingEnabled = false;

    const img = new Image();
    img.src = '/hero-2.png'; // Replace with your image path
    img.onload = () => {
      // Scale the image so its height equals the canvas height
      const scaleFactor = ch / img.naturalHeight;
      const scaledWidth = img.naturalWidth * scaleFactor;

      let sxBase = 0;         // Starting x in source image
      let sWidthBase = img.naturalWidth; // Portion of image width used
      let dxBase = 0;         // x offset in destination (canvas)
      let dWidth = scaledWidth; // Drawn width on canvas

      if (scaledWidth >= cw) {
        // Crop the image horizontally by taking the centered portion.
        sWidthBase = cw / scaleFactor; // The width of the source that maps to canvas width
        sxBase = (img.naturalWidth - sWidthBase) / 2;
        dWidth = cw; // Drawn width covers the full canvas
      } else {
        // Center the image horizontally if it's narrower than the canvas
        dxBase = (cw - scaledWidth) / 2;
      }

      // Start with a black background
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, cw, ch);

      // Setup grid: for example, a 10x10 grid
      const rows = 10;
      const cols = 10;
      const totalCells = rows * cols;

      // Calculate cell sizes (rounding helps avoid gaps)
      const cellDestWidth = Math.round(dWidth / cols);
      const cellDestHeight = Math.round(ch / rows);
      const cellSrcWidth = sWidthBase / cols;
      const cellSrcHeight = img.naturalHeight / rows;

      // Create and shuffle an array of cell indices
      const cells = Array.from({ length: totalCells }, (_, i) => i);
      const shuffledCells = cells.sort(() => Math.random() - 0.5);

      // Reveal each cell over a 5-second period
      shuffledCells.forEach((cellIndex, i) => {
        setTimeout(() => {
          const row = Math.floor(cellIndex / cols);
          const col = cellIndex % cols;

          // Destination coordinates (with rounding)
          const dx = Math.round(dxBase + col * cellDestWidth);
          const dy = Math.round(row * cellDestHeight);

          // Source coordinates
          const sx = sxBase + col * cellSrcWidth;
          const sy = row * cellSrcHeight;

          ctx.drawImage(
            img,
            sx, sy, cellSrcWidth, cellSrcHeight,
            dx, dy, cellDestWidth, cellDestHeight
          );
        }, (5000 / totalCells) * i);
      });
    };
  }, []);

  return <canvas ref={canvasRef} className="w-screen h-screen" />;
};