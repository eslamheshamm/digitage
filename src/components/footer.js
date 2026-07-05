const Footer = () => {
  return (
    <footer className="flex flex-row justify-between items-center py-8 md:py-10 w-11/12 max-w-[1700px] mx-auto text-white">
      <img src="/assets/logo.svg" alt="Digitage Studio" />
      <p>copyright digitage {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer
