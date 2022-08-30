import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faInstagram, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

export function Footer() {
  return (
    <div className="footer">
      <div className="peronal-details">
        <h2>Ofek Shtrit</h2>
        <h3>Built and designed by Ofek Shtrit</h3>
      </div>
      <li className="links">
        <ul>About/Bio</ul>
        <ul>Projects</ul>
      </li>
      <li className="get-in-touch">
        <ul><FontAwesomeIcon icon={faLinkedin}></ FontAwesomeIcon></ul>
        <ul><FontAwesomeIcon icon={faInstagram}></ FontAwesomeIcon></ul>
        <ul><FontAwesomeIcon icon={faEnvelopeSquare} /></ul>
        <ul><FontAwesomeIcon icon={faGithubSquare}></ FontAwesomeIcon></ul>
      </li>
    </div>
  )
}
