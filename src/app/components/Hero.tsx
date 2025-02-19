/* eslint-disable @next/next/no-img-element */
export const Hero = () => {
  return (
    <div className="h-screen w-screen bg-red-200 relative">
      <img src="/hero-2.png" alt="Hero Intro Banner" className="absolute top-0 left-0 w-full h-full transition-opacity duration-500" style={{ objectFit: 'cover' }} />

      <video autoPlay muted loop playsInline aria-label="Hero Video by Ron Lach : https://www.pexels.com/video/back-view-of-a-boy-looking-a-screen-9783697/" className="w-full h-screen absolute" style={{ objectFit: 'cover' }}>
        <source src="/hero-2.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-col absolute p-16 bg-[tomato] max-w-[40vw] pr-36 animate-fade-right animate-once animate-duration-1200 animate-ease-out animate-delay-240">
        <h1 className="text-6xl">Acun Gürsoy</h1>
      </div>

      <div className="flex flex-col items-center gap-8 absolute bottom-0 right-0 p-12 bg-[tomato] max-w-[70vw] animate-fade-up animate-once animate-duration-1200 animate-ease-out animate-delay-420">
        <h2 className="text-5xl">Software Entwicklung Web / Mobile</h2>
        <a href="#" className="text-4xl font-bold border-b-2 transition-all duration-120 hover:text-6xl hover:rotate-[-2deg] hover:border-2 hover:p-4 animate-pulse hover:animate-none">Hier lang</a>
      </div>
    </div >
  )
}