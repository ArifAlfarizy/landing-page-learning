import Overview from "./Images/Overview"
import { Navbar } from "./Navbar"
import Platform from "./Platform"
import Slogan from "./Slogan"

const Hero = () => {
  return (
    <div>
      <Navbar />
      <Slogan />
      <Overview url="/billboard.webp" />
      <Platform />
    </div>
  )
}

export default Hero