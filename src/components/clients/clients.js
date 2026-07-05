import Image from "next/image"
import Carousel from "./Carousel/Carousel"
import logo1 from "./logos/01.png"
import logo2 from "./logos/02.png"
import logo3 from "./logos/03.png"
import logo4 from "./logos/04.png"
import logo5 from "./logos/05.png"
import logo6 from "./logos/06.png"
import logo7 from "./logos/07.png"
import logo8 from "./logos/08.png"
import logo9 from "./logos/09.png"
import logo10 from "./logos/10.png"
import logo11 from "./logos/11.png"
import logo12 from "./logos/12.png"
import logo13 from "./logos/13.png"
import logo14 from "./logos/14.png"
import logo15 from "./logos/15.png"
import logo16 from "./logos/16.png"
import logo17 from "./logos/17.png"
import logo18 from "./logos/18.png"
import logo19 from "./logos/19.png"
import logo20 from "./logos/20.png"
import logo21 from "./logos/21.png"
import logo22 from "./logos/22.png"
import logo23 from "./logos/23.png"
import logo24 from "./logos/24.png"
import logo25 from "./logos/25.png"
import logo26 from "./logos/26.png"
import logo27 from "./logos/27.png"
import logo28 from "./logos/28.png"
import logo29 from "./logos/29.png"
import logo30 from "./logos/30.png"

const logos = [
  logo1, logo2, logo3, logo7, logo8, logo9, logo10, logo11, logo12, logo4,
  logo5, logo6, logo13, logo14, logo15, logo16, logo17, logo18, logo19,
  logo20, logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28,
  logo29, logo30,
]

const Clients = () => {
  return (
    <section className="flex justify-center items-center flex-col mt-36 mb-20 text-white">
      <h2 className="uppercase font-title font-bold text-xs mb-10">clients</h2>
      <div
        className="flex justify-around items-center h-full w-full"
        data-sal="zoom-in"
        data-sal-duration="450"
        data-sal-easing="ease-out-quart"
      >
        <Carousel show={4} infiniteLoop withIndicator>
          {logos.map((logo, index) => (
            <h2 key={index} data-testid={`carousel-item-${(index % 3) + 1}`}>
              <Image
                src={logo}
                alt="logo"
                className="w-32 h-auto imageBlack"
                quality={100}
              />
            </h2>
          ))}
        </Carousel>
      </div>
    </section>
  )
}

export default Clients
