export interface Project {
  id: number
  title: string
  description: string
  // Add more project properties as needed
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for project 1',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for project 2',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for project 3',
  },
  {
    id: 4,
    title: 'Project 4',
    description: 'Description for project 4',
  },
]

export const PROJECTS_COUNT = PROJECTS.length
