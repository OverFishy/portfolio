import { Header } from './header';
import { MySkillsTest } from './myskills';
import { Projects } from './projectSection'
import { Contact} from './contact'
import { FooterTest } from './footer'
import './App.css';

function App() {
  return (
    <div className="App">
      < Header />
      < MySkillsTest />
      < Projects />
      < Contact />
      < FooterTest />
    </div>
  );
}


export default App;
