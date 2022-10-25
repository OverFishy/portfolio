import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css'

export function NavBar() {
  return (
    <nav>
      <ul className="menuItems">
        <li><Link to="/" data-item='Home'>Home</Link></li>
        <li><Link to="/#projects" data-item='Projects'>Projects</Link></li>
        <li><Link to="/about" data-item='About'>About</Link></li>
        <li><Link to="/#contact" data-item='Contact'>Contact</Link></li>

      </ul>
    </nav>
  )
}
