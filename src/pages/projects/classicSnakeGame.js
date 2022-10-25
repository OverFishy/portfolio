import { ProjectPageStructureText } from "../../shared/projectPage.js"

import snake1 from '../../images/projectImages/snake/snake1.PNG'
import snake2 from '../../images/projectImages/snake/snake2.jpg'
import snake3 from '../../images/projectImages/snake/snake3.jpg'
import snakegif1 from '../../images/projectImages/snake/snakegif1.gif'
import snake from '../../images/projectCardImages/snake.png'

export function ClassicSnakeGame() {
  return (
    < ProjectPageStructureText
    projectName={'Classic Snake Game'}
    projectPurpose={'The purpose of this project was personal learning and growth. I was looking for an idea to practice some new concepts I had learned. On a side note, Snake was the first game I ever played, so it was a blast to recreate it.'}
    // projectPurpose={'The purpse of this project was personal learning and grow, I looked for a nice idea to procatice some new concepts I have learned. on a side note Snake was the first game I have ever played, so remaking it was a blase'}
    projectWebStack={'HTML, CSS and JS'}
    // projectWebStack={'Html Css and JS'}
    projectProblens={'Some of the challenges I faced in recreating Snake were designing the game controls for mobile devices using touch input. The other was constantly re-rendering the game, deleting and creating elements.'}
    // projectProblens={'Couple of the challenges I faced building the snake game was creating the game controlleres for moible, using the touch inputs. The other one was about constently rerender the game, deleting and creating element.'}
    projectlessons={'A nice learning experience about developing applications for mobile users.'}
    // projectlessons={'Some nice learning experience about developing apps that target mobile users'}
    projectPics={[snake, snake3, snake2, snakegif1, snake1]}
    github={'https://github.com/OverFishy/Snake-game'}
    site={'https://overfishy.github.io/Snake-game/'}
    backToProject={'/#snake'}
  />
  )
}
