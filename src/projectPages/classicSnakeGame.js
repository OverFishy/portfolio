import { ProjectPageStructureText } from "./projectPage.js"

import snake1 from '../images/projectImages/snake/snake1.PNG'
import snake2 from '../images/projectImages/snake/snake2.png'
import snake3 from '../images/projectImages/snake/snake3.PNG'
import snakegif1 from '../images/projectImages/snake/snakegif1.gif'
import snake from '../images/snake.png'

export function ClassicSnakeGame() {
  return (
    < ProjectPageStructureText
    projectName={'Classic Snake Game'}
    projectPurpose={'The purpse of this project was personal learning and grow, I looked for a nice idea to procatice some new concepts I have learned. on a side note Snake was the first game I have ever played, so remaking it was a blase'}
    projectWebStack={'Html Css and JS'}
    projectProblens={'Couple of the challenges I faced building the snake game was creating the game controlleres for moible, using the touch inputs. The other one was about constently rerender the game, deleting and creating element.'}
    projectlessons={'Some nice learning experience about developing apps that target mobile users'}
    projectPics={[snake, snake3, snake1, snake2, snakegif1]}
    github={'https://github.com/OverFishy/Snake-game'}
    site={'https://overfishy.github.io/Snake-game/'}
  />
  )
}
