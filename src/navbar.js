import { Link } from "react-router-dom";
import './navbar.css'

const appLink = <Link to="/">App</Link>
const aboutLink = <Link to="/about">About</Link>

export function NavBar() {
  const url = window.location.href
  let linkToShow

  if (url.includes("about")) {
    linkToShow = appLink
  } else {
    linkToShow = aboutLink
  }

  return (
    <nav>
      <ul class="menuItems">
        <li><a href='#' data-item='Home'>Home</a></li>
        <li><a href='#' data-item='About'>About</a></li>
        <li><a href='#' data-item='Projects'>Projects</a></li>
        <li><a href='#' data-item='Contact'>Contact</a></li>
      </ul>
    </nav>
  )
}
