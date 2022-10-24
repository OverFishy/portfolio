import { Project } from './project'

import flexpanelsgallery from'./images/flexpanelsgallery.png';
import madoggo from'./images/madoggo.png';
import snake from'./images/snake.png';
import spaceshot from'./images/spaceshot.JPG';
import sudoku from'./images/sudoku.png';
import chatapp from './images/chat-app.png'

export function Projects() {
  return (
    <div className='project-container'>
          <h2 id="projects">Projects</h2>
          <Project name='SpaceShot' position='Co-Founder' src={spaceshot} id='spaceshot'>
            Created and led a team of up to 6 developers/creatives to develop SpaceShot, a beautiful mobile casual game.
            I developed the idea, created a sketch and prototype, assembled and led a team, ran test cycles with up to 200+ participants, collected data, analyzed it, and adjusted it!
          </Project>
          <Project name='Flex panels gallery' position='Learning project' src={flexpanelsgallery} id='flexpanelsgallery'>
            As part of my learning journey, while taking a JS course, I created this personal website that shows a bit of my personality, using the power of CSS flex box properties and vanilla JS.
          </Project>
          <Project name='MaDoggo' position='Full-Stack developer' src={madoggo} id='madoggo'>
            Having a dog that doesn't have dog friends can be a pain!
            MaDoggo is a project I developed as a final project at Le Wagon Bootcamp. As a member of a 4-person team, I managed the backend side of the application, which allows you to create a user, view dog parks nearby, know who is on site with their dogs and even have a live chat!
          </Project>
          <Project name='Classic Snake Game' position='Personal project' src={snake} id='snake'>
            As someone who grew up before smartphones, Snake will always have a warm place in my heart.
            I decided to recreate the classic game by designing the structure of the app and continuously tackling new challenges as the game progresses.
          </Project>
          <Project name='Sudoku' position='Personal project' src={sudoku} id='sudoku'>
            I used to play Sudoku with my grandmother, a LOT. She taught me the logic behind this jumble of numbers.
            So it was only logical for me to create a Sudoku game as part of my development journey! Along the way, I had to overcome a few challenges,
            such as compatibility with a variety of devices and diving into algorithms to create a random playing field.
          </Project>
          <Project name='Chat App' position='Learning project' src={chatapp} id='chatapp'>
            As part of my learning journey, I have decided to learn node.js.
            In a duration of 2 months I have finished one course & created 4 applications, one of those is the live ChatApp!
            It's as simple as choosing a name and a room name and youre done, you have a chat room for you and anyone you would like
            to invite to have a chat.
          </Project>
       </div>
  )
}
