interface NavbarProps {}

import { NavLink } from 'react-router-dom'

export default function Navbar({}: NavbarProps) {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'navLink active' : 'navLink'

  return (
    <header className="navbar">
      <div className="container">
        <NavLink to="/" className="brand">
          Wyatt Lindsey
        </NavLink>
        <nav className="navLinks">
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
