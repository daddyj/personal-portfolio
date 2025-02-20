import { useEffect, useRef } from "react";
import { Grid, GridItem } from "./Grid"
import Image from 'next/image'
import { DocumentIcon } from "@heroicons/react/24/outline";

export const Skills = () => {
  return (
    <>
      <Grid className="grid-rows-[1fr_1fr]">
        <GridItem className="col-span-4">
          <h2 className="text-5xl font-bold">Technologien</h2>
        </GridItem>
        <GridItem className="col-span-6">
          <p className="text-2xl">Ich habe über die Jahre eine Reihe von Technologien für die Web- und Appentwicklung genutzt und mich über die Zeit auf einen Techstack fokussiert um optimale Ergebnisse erzielen zu können. Dabei hat sich React als meine Kern-Bibliothek herausgestellt um maximale Wiederverwendbarkeit von auf unterschiedlichen Plattformen zu gewährleisten: Das Web, native auf iOS und nativ auf Android. Ich liebe es immer wieder neue Sachen auszuprobieren und mich immer wieder von Kolleg:innen inspirieren zu lassen!</p>
        </GridItem>
        <GridItem className="col-span-4" />
        <GridItem className="col-span-6">
          <GlitchSkills />
        </GridItem>
      </Grid>
      <Grid rows={3}>
        <GridItem className="col-span-4">
          <h2 className="text-5xl font-bold">Social Skills</h2>
        </GridItem>
        <GridItem className="col-span-6">
          <p className="text-3xl">Neben der Liebe zur Optimierung im technologischen Bereich sehe ich es als essentiell an als Software Entwickler auch methodisch und kommunikativ eine verständliche Brücke zur gemeinsamen Entwicklung zu schaffen. Agile Arbeitsweisen begeistern mich und begleiten mich nun seit mehreren Jahren. Gleichzeitig ist mir ein klassisches Projektmanagement nach Wasserfall Methodik auch kein Fremdwort.</p>
        </GridItem>
        <GridItem className="col-span-4" />
        <GridItem className="col-span-6 flex flex-col text-xl gap-4 justify-end">
          <div className="flex gap-4 flex-wrap text-2xl">
            <p className="font-bold">Agile Methoden:</p>
            <p>SCRUM</p>
            <p>#</p>
            <p>Kanban</p>
            <p>#</p>
            <p>Google-OKRs</p>
            <p>#</p>
            <p>Lean</p>
            <p>#</p>
            <p>Requirements-Engineering</p>
          </div>
          <div className="flex gap-4 flex-wrap text-2xl">
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
      </Grid>
      <Grid className="grid-rows-[auto_1fr]">
        <GridItem className="col-span-4">
          <h2 className="text-5xl font-bold">Lebenslauf</h2>
        </GridItem>
        <GridItem className="col-span-6">
          <p className="text-3xl">Hier sind Verweise zu meinem Lebenslauf in unterschiedlichen Formaten. Dort sind gute Überblicke über meine bisherige Berufserfahrung aufgelistet. Schau gerne mal rein.</p>
        </GridItem>
        <GridItem className="col-span-4" />
        <GridItem className="col-span-6 flex justify-around items-center">
          <div className="flex flex-col gap-4 items-center">
            <DocumentIcon className="size-32" />
            <p>PDF herunterladen</p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div className="bg-white p-8">
              <Image width={256} height={128} src="/linkedin-logo.svg" alt="Link to Github account" />
            </div>
            <p>LinkedIn Profil</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <Image width={128} height={128} src="/github-logo.svg" alt="Link to Github account" className="" />
            <p>Github Konto</p>
          </div>
        </GridItem>
      </Grid>
    </>
  )
}
// Programmiersprachen:
const itemMapping = {
  '0,0': 'Javascript',
  '0,1': 'Typescript',
  '0,2': 'HTML',
  '1,0': 'CSS / SCSS',
  '1,1': 'SASS / CSS-in-JS',
  '1,2': 'React-Native',
  '2,0': 'React',
  '2,1': 'NextJS',
  '2,2': 'Tamagui UI',
  '3,0': 'Material UI',
  '3,1': 'Tailwind CSS',
  '3,2': 'Firebase',
  '4,0': 'Git',
  '4,1': 'Github / GitLab',
  '4,2': 'Google Cloud',
}
// // UI-Bibliotheken/-Frameworks:
// React - Native
// React
// NextJS
// // UI-Style/-Component KITs:
// Tamagui
// Material UI
// Tailwind CSS
// // Cloud:
// Firebase
// Git
// Github / GitLab
// Google Cloud

const GlitchSkills = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Store grid info for reuse in random glitch + hover
  const gridRef = useRef<{
    rows: number;
    cols: number;
    cellWidth: number;
    cellHeight: number;
  }>(null);

  // Helper function to "glitch" a specific cell
  function glitchCell(ctx: CanvasRenderingContext2D, row: number, col: number, label = 'glitch!', timeout = 1500) {
    if (!gridRef.current) return;
    const { cellWidth, cellHeight } = gridRef.current;

    // Calculate pixel coordinates
    const x = Math.round(col * cellWidth);
    const y = Math.round(row * cellHeight);
    const w = Math.ceil(cellWidth);
    const h = Math.ceil(cellHeight);

    // Draw black rectangle
    ctx.fillStyle = 'cornflowerblue';
    ctx.fillRect(x, y, w, h);

    // Optional: draw some text inside the cell
    ctx.fillStyle = 'white';
    ctx.font = '48px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    console.log({ label, textWidth: ctx.measureText(label).width, cellWidth })
    ctx.fillText(label, x + w / 2, y + h / 2, ctx.measureText(label).width * 0.75);

    // Clear after 150ms
    setTimeout(() => {
      ctx.clearRect(x, y, w, h);
    }, timeout);
  }

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
    const rows = 5;
    const cols = 3;
    const cellWidth = width / cols;
    const cellHeight = height / rows;
    gridRef.current = { rows, cols, cellWidth, cellHeight };

    // Draw black squares at random intervals
    const intervalId = setInterval(() => {
      // Pick a random cell
      const randomCol = Math.floor(Math.random() * cols);
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol2 = Math.floor(Math.random() * cols);
      const randomRow2 = Math.floor(Math.random() * rows);
      // const randomCol3 = Math.floor(Math.random() * cols);
      // const randomRow3 = Math.floor(Math.random() * rows);

      console.log({ randomCol, randomRow })

      glitchCell(ctx, randomRow, randomCol, itemMapping[`${randomRow},${randomCol}`], 1550)
      glitchCell(ctx, randomRow2, randomCol2, itemMapping[`${randomRow2},${randomCol2}`], 1750)
    }, 2000);

    // Clean up on unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
