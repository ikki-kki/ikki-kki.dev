import ProjectItem from './project'
import { Project } from './type'

const projects: Project[] = [
  {
    title: 'GH Link',
    description: 'A Link in Bio website configured with only a JSON file.',
    category: 'next-js',
  },
  {
    title: 'SVGL',
    description: 'The Raycast extension to search SVG logos via svgl.',
    category: 'raycast-extension',
  },
  {
    title: 'Open Graph',
    description: 'Preview Open Graph meta tags of a website.',
    category: 'raycast-extension',
  },
  {
    title: 'rwdot',
    description: 'Shows your window’s Tailwind size for easier RWD.',
    category: 'npm-package',
  },
]

const Projects = () => {
  return (
    <div className="md:mt-40 mt-20">
      <h2 className="mt-16 text-2xl">Projects</h2>

      <div className="mt-8 md:mt-16 space-y-6 md:space-y-12">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
