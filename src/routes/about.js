import { NavBar } from '../navbar'
import { FooterTest } from '../footer'
import './about.css'

export function About() {
  return (
    <div className='about-container'>
      < NavBar />
      <div className='about'>
        <div className='mantar' id='about'>
          <h1>Whatever you can do or dream you can, begin it;<br/> Boldness has genius, power, and magic in it.</h1>
          <p>
            A quote that has guided me over the past few years and that I use as my mantra to stay true to myself and my path.
          </p>
        </div>
        <h2>
          My story
        </h2>
        <p>
          <strong>Ever since I can remember, I have been fascinated by puzzles and Legos. </strong>
          Back then, my mother would bring me a Lego set every now and then, and I could occupy myself with it for hours.
          My mother says she had to argue with me to make me leave the set because I couldn't stop until every piece was in its proper place.
          As an adult, I can say that I have adopted some crucial skills from this experience and incorporated them into my life:
          pay attention to small details, be curious, build something from scratch, and most importantly: have fun doing it!
        </p>
        <h2>As a developer</h2>
        <p>
          I think what fascinates me most about web development is the constant logical challenges you encounter when programming.
          You have a goal you want to achieve, and countless ways of getting there!
          And with every new technology I learn about, my ability to solve those challenges is strengthened.
          With those logic challenges in mind, as a developer, I put a lot of emphasis trying to write the cleanest, most consistent, readable and
          manageable code above all else. It's great when features work, but it's even greater when they can stay that way regardless
          of who is working on them.
        </p>
        <h2>As a person</h2>
        <p>
          If I had to describe myself in a few words, I am friendly, very social, find the positive in almost everything, and love to challenge myself.
          I enjoy dealing with challenges and finding out-of-the-box solutions. My creativity helps me change my perspective and overcome difficult obstacles.
          I am curious by nature and enjoy picking up new skills and techniques. As a result, I have developed a wide range of skills and interests, which in
          one way or another reflect in my career.
          </p>
          <h2>Let's have a chat</h2>
          <p><strong>I want to hear from you!</strong></p>
          <p>
            Feel free to contact me through my social media or this website.
          </p>
      </div>
      < FooterTest />
    </div>
  );
}
