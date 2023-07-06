import Header from './components/Header';
import Home from './pages/about/Home';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import React from 'react';

export default function App() {
  return (
    <main className='main'>
      <Header />
      <Home />
      <Skills />
      <Projects/>
      <Contact/>
    </main>

  );
}

