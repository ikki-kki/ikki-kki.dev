import ProjectItem from './project'
import { Project } from './type'

const projects: Project[] = [
  {
    title: 'GH Link',
    description: 'A Link in Bio website configured with only a JSON file.',
    url: 'https://gh-link.vercel.app/',
    category: 'next-js',
  },
  {
    title: 'SVGL',
    description: 'The Raycast extension to search SVG logos via svgl.',
    url: 'https://www.raycast.com/1weiho/svgl',
    category: 'raycast-extension',
  },
  {
    title: 'Open Graph',
    description: 'Preview Open Graph meta tags of a website.',
    url: 'https://www.raycast.com/1weiho/open-graph',
    category: 'raycast-extension',
  },
  {
    title: 'rwdot',
    description: 'Shows your window’s Tailwind size for easier RWD.',
    url: 'https://www.npmjs.com/package/rwdot',
    category: 'npm-package',
  },
]

const Projects = () => {
  return (
    <div className="md:mt-40 mt-20">
      <h2 className="mt-16 text-2xl text-black">Projects</h2>

      <div className="mt-8 md:mt-16 space-y-6 md:space-y-12">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  )
}

export default Projects
