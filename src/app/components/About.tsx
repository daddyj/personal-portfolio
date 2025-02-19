export const About = () => {
  return (
    <div className="w-screen h-screen bg-[tomato] flex flex-col">
      <div className="flex flex-col p-[80px] px-[160px] pr-0 pb-0 h-screen gap-[80px]">
        <div className="w-[70vw]">
          <h1 className="bold text-6xl">Software Entwickler / <br /> Teamlead</h1>
        </div>
        <div className="flex justify-end px-[80px]">
          <div className="overflow-hidden bg-[url(/about-me.png)] bg-fixed bg-no-repeat bg-top w-[70vw] h-[30vh]" />
        </div>
        <div className="flex flex-1 w-[60vw] items-end self-end">
          <h2 className="text-3xl text-justify bg-black p-16 px-[40px]">
            Hi, ich bin Acun. Ich bin seit über 15 Jahren in der Industrie als Software Entwickler tätig, sowohl Fullstack als auch mit Fokus im Frontend. <br />
            Ich unterstütze Entwicklungsteams sowohl aktiv bei der Entwicklung im Web- und App-Bereich als auch organisatorisch als Team Lead mit agilen Methodiken.
          </h2>
        </div>
      </div>
    </div>
  )
}