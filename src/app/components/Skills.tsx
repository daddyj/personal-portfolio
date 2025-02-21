import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { DocumentIcon } from "@heroicons/react/24/solid";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import { Grid, GridItem } from "./Grid";

export const Skills = () => {
  const [showAllTechSkills, setShowAllTechSkills] = useState(false)

  return (
    <>
      <Grid id="skillsTech" className="grid-rows-[auto_16px_1fr]">
        <GridItem className="col-span-4">
          <h2 className="text-6xl">Technologien</h2>
        </GridItem>
        <GridItem className="col-span-6">
          <p className="text-2xl">Ich habe über die Jahre eine Reihe von Technologien für die Web- und Appentwicklung genutzt und mich über die Zeit auf einen Techstack fokussiert um optimale Ergebnisse erzielen zu können. Dabei hat sich React als meine Kern-Bibliothek im Frontend herausgestellt um maximale Wiederverwendbarkeit auf unterschiedlichen Plattformen zu gewährleisten: Das Web, nativ auf iOS und nativ auf Android. Ich liebe es immer wieder neue Sachen auszuprobieren und mich immer wieder von Kolleg:innen inspirieren zu lassen!</p>
        </GridItem>

        <GridItem className="col-span-10" />

        <GridItem className="col-span-4" />
        <GridItem className="col-span-6 flex flex-col gap-4">
          {!showAllTechSkills && (
            <>
              <GlitchSkills />
              <div className="flex gap-4 text-xl items-center hover:text-blue-500 hover:cursor-pointer transition-all" onClick={() => setShowAllTechSkills(true)}>
                <EyeIcon className="size-12" />
                <p>Alle anzeigen</p>
              </div>
            </>
          )}
          {showAllTechSkills && (
            <>
              <div className="grid grid-cols-3 grid-rows-5 gap-[1px] h-full animate-fade">
                {
                  // @ts-expect-error type casting open
                  Object.keys(itemMapping).map((rowColString) => <GridItem key={rowColString} className="bg-blue-500 flex justify-center items-center font-bold">{itemMapping[rowColString]}</GridItem>)
                }
              </div>
              <div className="flex gap-4 text-xl items-center hover:text-blue-500 hover:cursor-pointer transition-all" onClick={() => setShowAllTechSkills(false)}>
                <EyeSlashIcon className="size-12" />
                <p>Zufällig anzeigen</p>
              </div>
            </>
          )}
        </GridItem>
      </Grid>
      <Grid id="skillsSocial" rows={2} className="">
        <GridItem className="col-span-4 flex flex-col gap-16">
          <h2 className="text-6xl ">Social Skills</h2>
          <div className="w-64 h-64 rounded-full bg-center bg-no-repeat bg-blue-500" style={{ backgroundImage: 'url(/skills-cv-section-me.png)', backgroundSize: "100%" }} />
        </GridItem>
        <GridItem className="col-span-6">
          <p className="text-2xl">Meine Leidenschaft für technologische Optimierung kombiniere ich mit einem starken methodischen und kommunikativen Ansatz. Als Softwareentwickler lege ich großen Wert darauf, eine verständliche Brücke zwischen Technik und gemeinsamer Projektentwicklung zu schaffen. Agile Arbeitsmethoden begeistern mich und prägen seit mehreren Jahren meinen Arbeitsstil. Gleichzeitig verfüge ich über fundierte Erfahrungen im klassischen Projektmanagement nach der Wasserfall-Methodik – Flexibilität und Anpassungsfähigkeit sind für mich selbstverständlich.<br />
            <br />
            Ansonsten findet man mich mit meinem best buddy stets in der Natur wieder, denn hier kann ich maximal abschalten und alle notwendige Energie sammeln die ich mir wünsche.</p>
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
            <p>Design-Sprint</p>
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
      <Grid id="skillsCv" className="grid-rows-[auto_1fr]">
        <GridItem className="col-span-4">
          <h2 className="text-6xl">Lebenslauf</h2>
        </GridItem>
        <GridItem className="col-span-6">
          <p className="text-2xl">Nachfolgend ein paar unterschiedliche Perspektiven um einen detaillierteren Einblick in meine bisherige Erfahrung zu bekommen. <br />
            Da ich viele Jahre auch in angestellten Verhältnissen gearbeitet habe, bietet sich durch folgende Perspektiven auch dazu ein besseres Verständnis.</p>
        </GridItem>
        <GridItem className="col-span-4" />
        <GridItem className="col-span-6 flex gap-16 items-center justify-between">
          <a href="#" target="_blank">
            <div className="flex flex-col items-center justify-end h-40 min-w-[180px] hover:font-bold hover:text-blue-500 hover:cursor-pointer gap-2 border-b-2 border-transparent hover:border-blue-500 hover:rotate-2 hover:scale-[121%] transition-all">
              <DocumentIcon className="size-32" />
              <p>PDF herunterladen</p>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/acun-g%C3%BCrsoy-83b8ab139/" target="_blank">
            <div className="flex flex-col items-center justify-end h-40 min-w-[180px] hover:font-bold hover:text-blue-500 hover:cursor-pointer gap-4 border-b-2 border-transparent hover:border-blue-500 hover:rotate-2 hover:scale-[121%] transition-all">
              <div className="bg-white p-4 rounded-sm">
                <Image width={128} height={128} src="/linkedin-logo.svg" alt="Link to Github account" />
              </div>
              <p>LinkedIn Profil</p>
            </div>
          </a>
          <a href="https://github.com/daddyj" target="_blank">
            <div className="flex flex-col items-center justify-end h-40 min-w-[180px] hover:font-bold hover:text-blue-500 hover:cursor-pointer gap-4 border-b-2 border-transparent hover:border-blue-500 hover:rotate-2 hover:scale-[121%] transition-all">
              <Image width={128} height={128} src="/github-logo.svg" alt="Link to Github account" className="" />
              <p>Github Konto</p>
            </div>
          </a>
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
    const w = Math.ceil(cellWidth) - 1;
    const h = Math.ceil(cellHeight) - 1;

    // Draw black rectangle
    ctx.fillStyle = '#2B7FFF';
    ctx.fillRect(x, y, w, h);

    // Optional: draw some text inside the cell
    ctx.fillStyle = 'white';
    ctx.font = '32px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // console.log({ label, textWidth: ctx.measureText(label).width, cellWidth })
    ctx.fillText(label, x + w / 2, y + h / 2, ctx.measureText(label).width * 0.88);

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

      // console.log({ randomCol, randomRow })

      // @ts-expect-error need casting
      glitchCell(ctx, randomRow, randomCol, itemMapping[`${randomRow},${randomCol}`], 2000)
      // @ts-expect-error need casting
      glitchCell(ctx, randomRow2, randomCol2, itemMapping[`${randomRow2},${randomCol2}`], 1750)
    }, 1000);

    let lastHoveredCell: number | null = null;

    const onMouseMove = (e: MouseEvent) => {
      console.log('mousemove!')
      if (!gridRef.current) return;

      // Get mouse position relative to the canvas
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      // Figure out which cell the mouse is over
      const col = Math.floor(mouseX / cellWidth);
      const row = Math.floor(mouseY / cellHeight);

      // Calculate a unique cell index (row * cols + col)
      const cellIndex = row * cols + col;

      // If the user moves into a *new* cell, trigger the glitch
      if (cellIndex !== lastHoveredCell) {
        lastHoveredCell = cellIndex;
        glitchCell(ctx, row, col);
      }
    };

    const onMouseLeave = () => {
      // Reset so when the mouse re-enters, we can trigger again
      lastHoveredCell = null;
    };

    // Attach listeners
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseleave', onMouseLeave);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden border-1 border-blue-500 animate-fade">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
    </div>
  );
}
