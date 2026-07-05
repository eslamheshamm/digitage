import Link from "next/link"
import SocialIcons from "./social-media"

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center w-11/12 lg:w-10/12 xl:w-9/12 mx-auto py-6 md:mb-16">
      <div className="hidden lg:block w-full">
        {/* empty just to trick flex and center my items */}
      </div>
      <h1 className="w-full">
        <Link href="/" className="cursor-default">
          <img src="/assets/logo.svg" alt="Digitage Studio" />
        </Link>
      </h1>
      <div>
        <SocialIcons />
      </div>
    </header>
  )
}

export default Header
