import { Link } from "react-router-dom";

const appLink = <Link to="/">App</Link>
const aboutLink = <Link to="/about">About</Link>

export function NavBar() {
  const url = window.location.href
  console.log(url);
  let linkToShow

  if (url.includes("about")) {
    linkToShow = appLink
  } else {
    linkToShow = aboutLink
  }
  return (
    <div className="Nav-bar">
      {linkToShow}
      <Link to="/Projects">Projects</Link>
      <Link to="/Contact">Contact</Link>
    </div>
  )
}
