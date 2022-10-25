import { Header } from './components/header';
import { MySkillsTest } from './components/myskills';
import { Projects } from './projectSection/projectSection'
import { Contact} from './components/contact'
import { FooterTest } from '../../shared/footer'
import './HomePage.css';

function HomePage() {
  return (
    <div className="HomePage">
      < Header />
      < MySkillsTest />
      < Projects />
      < Contact />
      < FooterTest />
    </div>
  );
}


export default HomePage;
