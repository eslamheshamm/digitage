import Image from "next/image"
import Button from "../button"
import heroImage from "@/images/hero.png"

const Hero = () => {
  const card = {
    boxShadow: "0px 8px 70px 0px #141108, 8%",
    background:
      "linear-gradient(89.14deg, rgba(18, 18, 17, 0.11) 3.09%, rgba(29, 24, 9, 0) 106.74%)",
  }
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 place-items-center shadow-sm rounded-3xl text-white"
      style={card}
    >
      <article
        className="px-8 my-10 md:p-16"
        data-sal="slide-right"
        data-sal-duration="500"
        data-sal-easing="ease-out-quart"
      >
        <h3 className="flex items-center font-semibold">
          <div className="border-b-2 w-4 h-1 border-white mr-2"></div>
          Creative Agency
        </h3>
        <h1 className="font-rock font-bold text-3xl md:text-4xl lg:text-6xl leading-snug my-4">
          The dream is not that you see while you are asleep..
        </h1>
        <p className="font-title leading-normal font-light mb-8 opacity-70">
          We established Digitage studio due to leaving a trendy legacy for all
          business owners. That’s not coming from anything, we got it from our
          experiences while dealing with a huge number of businesses owners,
          every one of them has this dream, Digitage studio is here for this
          exciting mission.
        </p>
        <Button>Let's Connect</Button>
      </article>

      <div
        className="w-full flex justify-center items-center row-start-1 row-end-2 md:col-start-2 my-8 md:my-0"
        data-sal="slide-left"
        data-sal-duration="500"
        data-sal-easing="ease-out-quart"
      >
        <figure className="w-full md:w-10/12">
          <Image
            src={heroImage}
            alt="Digitage Studio hero"
            className="w-full h-auto"
            quality={100}
            priority
          />
        </figure>
      </div>
    </section>
  )
}

export default Hero
