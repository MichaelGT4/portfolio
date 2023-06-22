import './styles/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar} from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'

export default function App() {
  return (
    <main>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
      </div>
    </main>
  );
}


