const SocialIcons = () => {
  const Item = ({ children, link }) => (
    <li className="mr-5">
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </li>
  )
  return (
    <ul className="flex items-center">
      <Item link="https://www.linkedin.com/company/digitagestudio/">
        <img src="/assets/linkedin.svg" alt="LinkedIn" className="w-5 h-auto" />
      </Item>
      <Item link="https://wa.me/201555354072">
        <img src="/assets/whatsapp.svg" alt="WhatsApp" />
      </Item>
      <Item link="https://www.facebook.com/DigitageStudio/">
        <img src="/assets/facebook.svg" alt="Facebook" />
      </Item>
      <Item link="https://www.instagram.com/digitagestudio/">
        <img src="/assets/instagram.svg" alt="Instagram" />
      </Item>
      <Item link="https://twitter.com/digitagestudio">
        <img src="/assets/twitter.svg" alt="Twitter" />
      </Item>
    </ul>
  )
}

export default SocialIcons
