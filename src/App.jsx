import { useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { useSelector } from 'react-redux'
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import ContactMe from './components/ContactMe';


function App() {
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  return (
    <>
      <NavBar />
     
      <main className="app-content">
         <Home/>
         <About/>
         <Skills/>
         <Projects/>
        <ContactMe/>
      </main>
      
    </>
  )
}

export default App
