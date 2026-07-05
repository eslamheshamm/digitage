import Link from "next/link"

export const metadata = {
  title: "Page Not Found — Digitage Studio",
}

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center text-center text-white py-24 md:py-36 fade-in-up">
      <h3 className="flex items-center font-semibold">
        <div className="border-b-2 w-4 h-1 border-white mr-2"></div>
        Error 404
      </h3>
      <h1 className="font-rock font-bold text-primary text-7xl md:text-9xl leading-none my-6">
        404
      </h1>
      <h2 className="font-rock font-bold text-2xl md:text-4xl lg:text-5xl leading-snug mb-6">
        This page is not the dream <br /> you were looking for..
      </h2>
      <p className="font-title font-light opacity-70 max-w-md mb-10">
        The page you requested doesn&rsquo;t exist or has been moved. Let&rsquo;s
        get you back to the trendy legacy.
      </p>
      <Link
        href="/"
        className="py-4 px-8 tracking-wider text-black font-title font-bold rounded-lg bg-primary uppercase transition-transform duration-150 ease-out hover:scale-[1.03] active:scale-[0.97] motion-reduce:transition-none motion-reduce:hover:transform-none focus:outline-none"
      >
        Back to home
      </Link>
    </section>
  )
}
