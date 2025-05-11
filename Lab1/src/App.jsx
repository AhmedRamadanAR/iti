import './components/Header';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutMe from './components/AboutMe';

function App() {
  return (
     <div className="App">
      <Header />
      <AboutMe/>
      <Footer/> 
    </div>
  )
}

export default App
