import { ProjectPageStructureText } from "./projectPage.js"

import sudoku1 from '../images/projectImages/sudoku/sudoku1.PNG'
import sudoku2 from '../images/projectImages/sudoku/sudoku2.PNG'
import sudoku3 from '../images/projectImages/sudoku/sudoku3.PNG'
import sudokugif1 from '../images/projectImages/sudoku/sudokugif1.gif'
import sudoku from '../images/sudoku.png'

export function Sudoku() {
  return (
    < ProjectPageStructureText
        projectName={'Sudoku'}
        projectPurpose={'The purpse of this project was personal learning and growth, as I wanted to understand better on algorythmics and calculations, I found the sudoku with the numbers and logicks to be a good fit'}
        projectWebStack={'Html Css and JS'}
        projectProblens={'some difficulties I expreiriense was creating the logic behind the game, setting up rules to determine if a player was correct in his number placement or not'}
        projectlessons={'I would say the best lesson I got while working on this project was the actual coding experience and implementing some of the newer things I have learned'}
        projectPics={[sudoku, sudoku1, sudoku2, sudoku3, sudokugif1]}
        github={'https://github.com/OverFishy/Sudoku'}
        site={'https://overfishy.github.io/Sudoku/sudoku.html'}
      />
  )
}
