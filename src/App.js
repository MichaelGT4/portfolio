import './styles/App.css';
import { NavBar} from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';

export default function App() {
  return (
    <main>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
      </div>
    </main>
  );
}


