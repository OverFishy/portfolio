import { Header } from './header';
import { MySkills, MySkillsTest } from './myskills';
import './App.css';
import { Projects } from './projectSection'
import { Contact} from './contact'
import { Footer } from './footer'

function App() {
  return (
    <div className="App">
      < Header />
      < MySkillsTest />
      < Projects />
      < Contact />
      < Footer />
    </div>
  );
}


export default App;
