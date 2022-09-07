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
            {/* A sentence that guided me in the past years, and I use as my mantra, to stay true to myself and my path */}
          </p>
        </div>
        <h2>
          My story
          {/* My quick story */}
        </h2>
        <p>
          <strong>Ever since I can remember, I have been fascinated by puzzles and Legos.</strong>
          Back then, my mother would bring me a Lego set every now and then, and I could occupy myself with it for hours.
          My mother says she had to argue with me to make me leave the set because I couldn't stop until every piece was in its proper place.
          As an adult, I can say that I have adopted some crucial skills from this experience and incorporated them into my life:
          pay attention to small details, be curious, build something from scratch, and most importantly: have fun doing it!
          {/* <strong>I have been intriged by puzzels & legos ever since.</strong> Back in the day my mother would bring me a set of legos
          every once in a while, and I would just sit down, for hours at a time, and connecting all the parts and bits
          with a LOT of attention, my mother told me she needed to argue with me to leave it because I would just stay there untill
          I would have finished. As an adult I can say that I took some key parts of that experience, and implemented them
          at my life, attention to small details, being curious, build something from the ground up, and most importently,
          have fun! */}
        </p>
        <h2>As a developer</h2>
        <p>
          I think what fascinates me most about web development is the constant logical challenges you encounter when programming.
          You have a goal you want to achieve, and countless ways of getting there!
          And with every new technology I learn about, my ability to solve those challenges is strengthened.
          But besides all the logical challenges to solve, as a developer I try to write the cleanest, most consistent, readable and
          manageable code above all else. It's great when features work, but it's even greater when they can stay that way regardless
          of who is working on them.
          {/* I think what have caught my attention in web development is the constent logic challenges you face
          when ever you code, you got a destanation you want to each, and countless ways to each there!
          from all of the possible ways, as a developer, I try to look for the most
          Clean, consistent, readable and maintainable code. It’s great when features work,
          but it’s even greater whenever they can stay that way, regardless of who’s working on them.
          with each new technology I learn my ability to solve challenges empowers! */}
        </p>
        <h2>As a person</h2>
        <p>
          If I had to describe myself in a few words, I am friendly, very social, find the positive in almost everything, and love to challenge myself.
          I enjoy dealing with challenges and finding out-of-the-box solutions. My creativity helps me change my perspective and overcome difficult obstacles.
          I am curious by nature and enjoy picking up new skills and techniques. As a result, I have developed a wide range of skills and interests, which in
          one way or another reflect in my career.
          {/* If I had to describe myself in a few words, I'm frindly, really social, will find the positive point
          in almost anything, and I love to challenge myself.
          I’ll take a problem, break it into smaller bits and just tackle myself into solution.
          Creativity has helped me sail around tough obstacles.
          I’m curious by nature and I love learning.
          I’ve amassed a wide range of skills and interests that when put together, end up feeding my career in one way or another. */}
          </p>
          <h2>Let's have a chat</h2>
          <p><strong>I want to hear from you!</strong></p>
          <p>
            Feel free to contact me through my social media or this website.
            {/* Feel welcome to reach out thourght out my social media or this website */}
          </p>
      </div>
      < FooterTest />
    </div>
  );
}
