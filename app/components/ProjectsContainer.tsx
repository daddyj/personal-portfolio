'use client'

import { ProjectSubsection } from './ProjectSubsection'

interface ProjectsContainerProps {
  subsectionProgress: number[]
}

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({
  subsectionProgress,
}) => {
  return (
    <div className="relative h-[calc(100%-6rem)]">
      {[0, 1, 2, 3].map((index) => (
        <ProjectSubsection
          key={index}
          title={`Project ${index + 1}`}
          progress={subsectionProgress[index]}
          zIndex={40 + index}
        />
      ))}
    </div>
  )
}
