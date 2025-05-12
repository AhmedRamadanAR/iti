import './components/Header';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';

function App() {
  return (
     <div className="App">
      <Header />
      <AboutMe/>
      <Skills/>
      <Portfolio />
      <Footer/> 
    </div>
  )
}

export default App
