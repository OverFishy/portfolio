// import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import './navbar.css'

// const appLink = <Link to="/">App</Link>
// const aboutLink = <Link to="/about">About</Link>

export function NavBar() {
  // const url = window.location.href
  // let linkToShow

  // if (url.includes("about")) {
  //   linkToShow = appLink
  // } else {
  //   linkToShow = aboutLink
  // }

  return (
    <nav>
      <ul className="menuItems">
        <li><Link to="/" data-item='Home'>Home</Link></li>
        <li><Link to="/#projects" data-item='Projects'>Projects</Link></li>
        <li><Link to="/about" data-item='About'>About</Link></li>
        <li><Link to="/#contact" data-item='Contact'>Contact</Link></li>
        {/* <li><a href='/' data-item='Home'>Home</a></li>
        <li><a href='about' data-item='About'>About</a></li>
        <li><a href='/#projects' data-item='Projects' >Projects</a></li>
        <li><a href='#' data-item='Contact'>Contact</a></li> */}
      </ul>
    </nav>
  )
}
