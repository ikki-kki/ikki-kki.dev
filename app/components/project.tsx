import { Project } from './type'
import Next from '@/components/svg/next'
import NPM from '@/components/svg/npm'
import Raycast from '@/components/svg/raycast'

const ProjectItem = ({ title, description, category }: Project) => {
  return (
    <div>
      <div className="flex gap-2 items-center">
        <h3>{title}</h3>
        {category === 'raycast-extension' ? (
          <Raycast />
        ) : category === 'next-js' ? (
          <Next />
        ) : (
          <NPM />
        )}
      </div>
      <p className="text-foreground mt-2 text-sm">{description}</p>
    </div>
  )
}

export default ProjectItem
