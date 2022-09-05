import { HashLink as Link } from 'react-router-hash-link';
import './footer.css'

import GitHubIconColor from './images/socialIcons/GitHubIconColor.svg'
import GmailColor from './images/socialIcons/GmailColor.svg'
import IGColor from './images/socialIcons/IGColor.svg'
import LinkedinColor from './images/socialIcons/LinkedinColor.svg'

const gitHubLink = 'https://github.com/OverFishy'
const ig = 'https://www.instagram.com/ofek_shtrit/'
const linkedIn = 'https://www.linkedin.com/in/ofekshtrit/'
const gmail = 'https://mail.google.com/'

// export function Footer() {
//   return (
//     <div className="footer">
//       <div className="peronal-details">
//         <h2>Ofek Shtrit</h2>
//         <h3>Built and designed by Ofek Shtrit</h3>
//       </div>
//       <li className="links">
//         <ul>About/Bio</ul>
//         <ul>Projects</ul>
//       </li>
//       <li className="get-in-touch">
//         <ul><FontAwesomeIcon icon={faLinkedin}></ FontAwesomeIcon></ul>
//         <ul><FontAwesomeIcon icon={faInstagram}></ FontAwesomeIcon></ul>
//         <ul><FontAwesomeIcon icon={faEnvelopeSquare} /></ul>
//         <ul><FontAwesomeIcon icon={faGithubSquare}></ FontAwesomeIcon></ul>
//       </li>
//     </div>
//   )
// }

export function FooterTest() {
  return (
    <div class="footer-basic">
      <div className='footer-line' />
      <div class="social-links">
        <a href={gitHubLink}><img src={GitHubIconColor} alt='Git Hub'></img></a>
        <a href={gmail}><img src={GmailColor} alt='Gmail'></img></a>
        <a href={ig}><img src={IGColor} alt='IG'></img></a>
        <a href={linkedIn}><img src={LinkedinColor} alt='Linkedin'></img></a>
      </div>
      <ul class="list-inline">
        <li><Link to="/#header" class="list-inline-item">Home</Link></li>
        <li><Link to="/about" class="list-inline-item">About</Link></li>
        <li><Link to="/#projects" class="list-inline-item">projects</Link></li>
        <li><Link to="/#contact" class="list-inline-item">Contact</Link></li>
      </ul>
      <p class="copyright">Ofek Shtrit © 2022</p>
    </div>
  )
}



{/* <li class="list-inline-item">Home</li>
<li class="list-inline-item">Services</li>
<li class="list-inline-item">About</li>
<li class="list-inline-item">Terms</li>
<li class="list-inline-item">Privacy Policy</li> */}
