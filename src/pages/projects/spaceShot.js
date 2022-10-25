import { ProjectPageStructureText } from "../../shared/projectPage.js"

import spaceshot1 from '../../images/projectImages/spaceshot/spaceshot1.JPG'
import spaceshot2 from '../../images/projectImages/spaceshot/spaceshot2.JPG'
import spaceshot3 from '../../images/projectImages/spaceshot/spaceshot3.JPG'
import spaceshot4 from '../../images/projectImages/spaceshot/spaceshot4.JPG'
import spaceshot5 from '../../images/projectImages/spaceshot/spaceshot5.JPG'
import spaceshot6 from '../../images/projectImages/spaceshot/spaceshot6.JPG'
import spaceshotgif1 from '../../images/projectImages/spaceshot/spaceshotgif1.gif'


export function SpaceShot() {
  return (
      < ProjectPageStructureText
      projectName={'SpaceShot'}
      projectPurpose={'SpaceShot will always have a special place in my heart! It all started when I sat down with a good friend and talked about how little effort is put into mobile games these days, and how we could easily build something of our own ( silly us...).'}
      // projectPurpose={'Spaceshot will always have a warm spot in my heart! it all started when me and a great friend of my set down and spoken about how little effort is being put into mobiles game today, and how we could totlay pull it off (silly us..).'}
      projectWebStack={'For SpaceShot we used Unity and C#. Whereas on this project I took a leadership / creative position and worked closley with the developers.'}
      // projectWebStack={'For spaceshot we have used Unity, and c#. I had a leadership position at spaceshot rather then the tech side.'}
      projectProblens={'I would say that we encountered some difficulties during development, many of which were due to the fact that it was our first mobile game. We had to learn a lot on the fly, such as hiring and building a team, marketing, and product testing.'}
      // projectProblens={'I would say we ran into problems during development, alot of them due to the fact it was our first game. we had to learn alot on the fly, like hiring & building a team, to marketing and product testing'}
      projectlessons={'I took some valuable lessons from SpaceShot on how to work more effectively in a team, how to lead a team and that I have a thing for tec.'}
      // projectlessons={'I took some valuables lessons from Spaceshot, how to better work in a team, manage a team, and that I have a thing for tec.'}
      projectPics={[spaceshot1, spaceshot2, spaceshot3, spaceshot4, spaceshot5, spaceshot6, spaceshotgif1]}
      backToProject={'/#spaceshot'}
      />
  )
}
