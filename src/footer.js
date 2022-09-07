import { HashLink as Link } from 'react-router-hash-link';
import './footer.css'

import GitHubIconColor from './images/socialIcons/GitHubIconColor.svg'
import GmailColor from './images/socialIcons/GmailColor.svg'
import IGColor from './images/socialIcons/IGColor.svg'
import LinkedinColor from './images/socialIcons/LinkedinColor.svg'

const gitHubLink = 'https://github.com/OverFishy'
const ig = 'https://www.instagram.com/ofek_shtrit/'
const linkedIn = 'https://www.linkedin.com/in/ofekshtrit/'
const gmail = 'mailto:ofek1997shtrit@gmail.com'

export function FooterTest() {
  return (
    <div class="footer-basic">
      <div className='footer-line' />
      <div class="social-links">
        <a href={gitHubLink} target="_blank" rel="noopener noreferrer"><img src={GitHubIconColor} alt='Git Hub' ></img></a>
        <a href={gmail} target="_blank" rel="noopener noreferrer"><img src={GmailColor} alt='Gmail' ></img></a>
        <a href={ig} target="_blank" rel="noopener noreferrer"><img src={IGColor} alt='IG' ></img></a>
        <a href={linkedIn} target="_blank" rel="noopener noreferrer"><img src={LinkedinColor} alt='Linkedin' ></img></a>
      </div>
      <ul class="list-inline">
        <li><Link to="/#header" class="list-inline-item">Home</Link></li>
        <li><Link to="/about#about" class="list-inline-item">About</Link></li>
        <li><Link to="/#projects" class="list-inline-item">Projects</Link></li>
        <li><Link to="/#contact" class="list-inline-item">Contact</Link></li>
      </ul>
      <p class="copyright">Ofek Shitrit © 2022</p>
    </div>
  )
}
