import { Link } from 'react-router-dom'

// Link is like a normal <a> link, but it knows which page is currently active
// and can automatically add an "active" class to it.
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* Simple "custom logo": a colored circle with your initials inside */}
        <img src="/images/logo.png" alt="FS Logo" className="logo-shape" />
        <span className="logo-text">My Portfolio</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
