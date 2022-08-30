import { Header } from './header';
import { MySkills } from './myskills';
import './App.css';
import { Projects } from './projectSection'
import { Contact} from './contact'
import { Footer } from './footer'

function App() {
  return (
    <div className="App">
      < Header />
      < MySkills />
      < Projects />
      < Contact />
      < Footer />
    </div>
  );
}


export default App;

      // function App() {
      //   return (
      //     <BrowserRouter>
      //       <Routes>
      //       <div className="App">
      //         < Header />
      //         < Route path='about' component={About} />
      //         < MySkills />
      //         < Projects />
      //         < Contact />
      //         < Footer />
      //       </div>
      //       </Routes>
      //     </BrowserRouter>
      //   );
      // }
