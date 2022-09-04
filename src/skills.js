import css3 from './images/techIcons/css3.svg'
import html5 from './images/techIcons/html5.svg'
import js from './images/techIcons/js.svg'
import nodeJs from './images/techIcons/nodeJs.svg'
import react from './images/techIcons/react.svg'
import ruby from './images/techIcons/ruby.svg'
import sql from './images/techIcons/sql.svg'


export function Icons() {
  return (
    <div className="icons">
      <img src={css3} alt="React Logo" />
      <img src={html5} alt="html5 Logo" />
      <img src={js} alt="js Logo" />
      <img src={nodeJs} alt="nodeJs Logo" />
      <img src={react} alt="React Logo" />
      <img src={ruby} alt="ruby Logo" />
      <img src={sql} alt="sql Logo" />

    </div>
  )
}


export function Skills() {
  return (
    <ul className="skills">
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
      <li>Ruby</li>
      <li>Ruby On Rails</li>
      <li>Css/Scss</li>
      <li>Html</li>
      <li>SQL</li>
      <li>MongoDB</li>
      <li>liostgreSQL</li>
      <li>Git</li>
      <li>GitHub</li>
    </ul>

  )
}
