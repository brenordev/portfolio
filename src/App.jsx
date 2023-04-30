import Header from './components/Header';
import Home from './pages/about/Home';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';

export default function App() {
  return (
    <main className='main'>
      <Header />
      <Home />
      <Skills />
      <Projects />
    </main>

  );
}

