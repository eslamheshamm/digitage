import Image from "next/image"
import child from "@/images/child.png"
import car from "@/images/car.png"
import horse from "@/images/horse.png"

const BannerThree = () => {
  const companyProfile =
    "https://drive.google.com/u/0/uc?id=1K0KZJ8taqEbifGABAUZX4gqMwMM18mZP&export=download"
  return (
    <section className="flex flex-col items-center w-full my-16">
      <div className="w-full grid grid-cols-1 sm:grid-cols-3">
        <figure
          className="w-full"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-easing="ease-out-quart"
        >
          <Image src={child} alt="Child" className="imageBlack" quality={100} />
        </figure>
        <figure
          className="w-full"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-delay="100"
          data-sal-easing="ease-out-quart"
        >
          <Image src={car} alt="car" className="imageBlack" quality={100} />
        </figure>
        <figure
          className="w-full"
          data-sal="fade"
          data-sal-duration="500"
          data-sal-delay="200"
          data-sal-easing="ease-out-quart"
        >
          <Image src={horse} alt="horse" className="imageBlack" quality={100} />
        </figure>
      </div>
      <button className="bg-primary py-6 px-4 text-sm md:text-base md:py-6 md:px-10 uppercase tracking-wider md:tracking-widest shadow-xl font-semibold rounded-xl mt-12 transition-transform duration-200 ease-out hover:-translate-y-1 hover:scale-105 active:scale-[0.97] motion-reduce:transition-none motion-reduce:hover:transform-none focus:outline-none">
        <a href={companyProfile} download>
          OUR company profile
        </a>
      </button>
    </section>
  )
}

export default BannerThree
