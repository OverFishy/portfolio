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
    <div className="nav">
      <div className="slide">
        <a href="#">Link Hover</a>
      </div>
      <div className="slide">
        <a href="#">Link Hover</a>
      </div>
    </div>
  )
}
{/* <div className="nav">
<div className="nav-box">
  <a href="#">Home</a>
  <div className="nav-box-color"></div>
</div>
<div className="nav-box">
  <a href="#">Blog</a>
  <div className="nav-box-color"></div>
</div>
<div className="nav-box">
  <a href="#">Work</a>
  <div className="nav-box-color"></div>
</div>
<div className="nav-box">
  <a href="#">About</a>
  <div className="nav-box-color"></div>
</div>
</div> */}


// Trying to get the coloring to work
{/* <div className="nav">
<div className="nav-box">
  <p id='example1' href="#">Home</p>
  <div className="nav-box-color">
    Home
  </div>
</div>
</div> */}
