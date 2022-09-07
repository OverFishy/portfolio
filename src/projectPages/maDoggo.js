import { ProjectPageStructureText } from "./projectPage.js"

import madoggo1 from '../images/projectImages/madoggo/madoggo1.png'
import madoggo2 from '../images/projectImages/madoggo/madoggo2.png'
import madoggo3 from '../images/projectImages/madoggo/madoggo3.png'
import madoggo4 from '../images/projectImages/madoggo/madoggo4.png'
import madoggo5 from '../images/projectImages/madoggo/madoggo5.png'
import madoggo6 from '../images/projectImages/madoggo/madoggo6.png'

export function MaDoggo() {
  return (
    < ProjectPageStructureText
        projectName={'Madoggo'}
        projectPurpose={'My final project at Le Wagon Coding Bootcamp. The idea behind maDoggo was to solve a problem that many dog owners in cities struggle with: Their dog needs a dog friend. To solve this problem, we designed, coded and executed a web app that helps you find dogs in dog parks near you who are also looking for a friend.'}
        // projectPurpose={'My final project at Le Wagon coding bootcamp, the idea behind maDoggo was to help solve a pain many dog owners in urban places experience, their doggie needs a doggie freind. to solve that pain we designed coded and executed a web App that helps you locate dogs in dog parks near you who are also looking for a freind'}
        projectWebStack={"For this project we used Ruby & Ruby on Rails, HTML, CSS, JS and SQL. My main task was to lead the backend progress, connect / work with the database and create the app's core functionalities. Later I switched to the frontend side for some pretty pixel fun."}
        // projectWebStack={'For this project we used ruby & Ruby on Rails, HTML, CSS JS and SQL. My main position was to lead the back-end progress, connecting and working with a database & creating the crud functionality, later on I moved to the front end side for some pretty components'}
        projectProblens={'As a student in a bootcamp, I was expected to perform some tasks outside my field of knowledge in order to challenge my skills and abilities. For this I had to deal with different new challenges, develop and implement solutions on the go, work with various APIs, data structures and team members. '}
        // projectProblens={'As a student in a bootcamp I was required to make some things out of my knowledge scope, working with some APIs and stuctore, and manage on the go.'}
        projectlessons={'I learned many lessons during the development of maDoggo, but I think by far the most important was to see and understand how all parts of the project are connected (frontend, backend, the browser and the DB).'}
        // projectlessons={'I learned many lessons during the making of maDoggo, but I think the bigger one by far was actually seeing & procticing who all the parts connects (front end, back end, the browser & the DB)'}
        projectPics={[madoggo1, madoggo2, madoggo3, madoggo4, madoggo5, madoggo6]}
        github={'https://github.com/OverFishy/MaDoggo'}
        backToProject={'/#madoggo'}
      />
  )
}
