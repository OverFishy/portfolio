import { Routes, Route, Link } from "react-router-dom";
import { About } from './about';
import { Header } from './header';
import { MySkills } from './myskills';
import './App.css';
import { Projects } from './projectSection'

function App() {
  return (
      <div className="App">
        < Header />
        < MySkills />
        < Projects />
      </div>

  );
}

export default App;

//  Routing function
// function Home() {
//   return (
//     <>
//       <main>
//         <h2>Welcome to the homepage!</h2>
//         <p>You can do this, I believe in you.</p>
//       </main>
//       <nav>
//         <Link to="/about">About</Link>
//       </nav>
//     </>
//   );
// }

// Router funcionality
{/* <div className="RouteTest">
        <h1>Welcome to React Router Test!</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Routes>
      </div> */}
