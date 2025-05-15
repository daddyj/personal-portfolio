'use client'

import { PROJECTS } from '@/app/lib/constants/projects'

import { ProjectSubsection } from './ProjectSubsection'

interface ProjectsContainerProps {
  subsectionProgress: number[]
}

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({
  subsectionProgress,
}) => {
  return (
    <div className="relative h-[calc(100%-6rem)]">
      {PROJECTS.map((project, index) => (
        <ProjectSubsection
          key={project.id}
          title={project.title}
          progress={subsectionProgress[index]}
          zIndex={40 + index}
        />
      ))}
    </div>
  )
}
