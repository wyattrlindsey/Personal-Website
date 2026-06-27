interface NavbarProps {}

export default function Navbar({}: NavbarProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="navbar">
      <a href="#top" className="left" onClick={() => scrollToSection('top')}>
        Wyatt Lindsey
      </a>
      <a href="#bottom" onClick={() => scrollToSection('bottom')}>
        Contact
      </a>
      <a href="#projects" onClick={() => scrollToSection('projects')}>
        Projects
      </a>
      <a href="#aboutMe" onClick={() => scrollToSection('aboutMe')}>
        About
      </a>
    </nav>
  )
}
