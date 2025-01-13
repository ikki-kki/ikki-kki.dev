import Earth from './earth'
import Balancer from 'react-wrap-balancer'

const Geo = () => {
  return (
    <div className="mt-32 flex space-x-12 justify-center items-center py-40">
      <Earth />
      <div className="max-w-[500px] text-foreground">
        <Balancer>
          If you don’t know where Taiwan is, here’s a little reference for you,
          I live here :)
        </Balancer>
      </div>
    </div>
  )
}

export default Geo
