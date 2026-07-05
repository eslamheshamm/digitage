import Image from "next/image"

export const Card = ({ heading, smallHeading, text, img, style }) => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 justify-items-start rounded-3xl my-16 md:my-24 w-full bg-primary"
      style={style}
    >
      <article
        className="px-8 mt-16 mb-8 md:px-14 lg:px-20 md:my-14 flex flex-col justify-center"
        data-sal="slide-right"
        data-sal-duration="500"
        data-sal-easing="ease-out-quart"
      >
        <h1 className="font-rock font-bold text-2xl md:text-4xl lg:text-5xl leading-snug mb-6 text-primary justify-center">
          <span className="text-2xl">{smallHeading}</span>
          <br />
          {heading}
        </h1>
        <p className="font-title leading-normal text-white/70 font-light mb-8">
          {text}
        </p>
      </article>
      <div
        className="w-full flex justify-center items-center row-start-1 row-end-2 md:col-start-2 mt-8 md:mt-0"
        data-sal="slide-left"
        data-sal-duration="500"
        data-sal-easing="ease-out-quart"
      >
        <figure className="w-full">
          <Image src={img} alt={heading} className="w-full h-auto" quality={100} />
        </figure>
      </div>
    </section>
  )
}

export const CardFlipped = ({ heading, smallHeading, text, img, style }) => {
  return (
    <section
      className="grid grid-cols-1 md:grid-cols-2 justify-items-start rounded-3xl my-16 md:my-24"
      style={style}
    >
      <div
        className="w-full flex justify-center items-center row-start-1 row-end-2 mt-8 md:mt-0"
        data-sal="slide-right"
        data-sal-duration="500"
        data-sal-easing="ease-out-quart"
      >
        <figure className="w-full">
          <Image src={img} alt={heading} className="w-full h-auto" quality={100} />
        </figure>
      </div>
      <article
        className="px-8 mt-16 mb-8 md:px-14 lg:px-20 md:my-14 flex flex-col justify-center"
        data-sal="slide-left"
        data-sal-duration="500"
        data-sal-easing="ease-out-quart"
      >
        <h1 className="font-rock font-bold text-2xl md:text-4xl lg:text-5xl leading-snug mb-6 text-primary justify-center">
          <span className="text-2xl">{smallHeading}</span>
          <br />
          {heading}
        </h1>
        <p className="font-title leading-normal text-white/70 font-light mb-8">
          {text}
        </p>
      </article>
    </section>
  )
}
