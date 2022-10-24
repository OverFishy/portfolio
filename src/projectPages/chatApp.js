import { ProjectPageStructureText } from "./projectPage.js"

import chatapp1 from '../images/chat-app.png'
import chatapp2 from '../images/projectImages/chatapp/chat-app1.png'
import chatapp3 from '../images/projectImages/chatapp/chat-app2.png'

export function ChatApp() {
  return (
    < ProjectPageStructureText
    projectName={'Chat App'}
    projectPurpose={'The purpose of this project was personal learning and growth. As part of my node.js cours I have builded the live chat app'}
    projectWebStack={'HTML, CSS, JS node.js, express and socketIO.'}
    projectProblens={'Some of the challenges I faced making the live chat app was the fact it was, live. I needed to learn about web sockets, who granted the ability to have a live 2 sided communication between clients and a server.'}
    projectlessons={'Recived hands on experience working with node.js express and websockets throught socketIO.'}
    projectPics={[chatapp1, chatapp2, chatapp3]}
    github={'https://github.com/OverFishy/Chat-App'}
    site={'https://shtrit-chat-app.herokuapp.com'}
    backToProject={'/#chatapp'}
  />
  )
}
