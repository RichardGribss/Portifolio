import './App.css'

import { useState } from 'react'

import Header from './Components/Header'
import Home from './Components/Home'
import Section from './Components/Section'
import Footer from './Components/Footer'

function App() {
  const [theme, setTheme] = useState(false)

  const trocaTema = () => {
    if(theme===false){
      document.body.classList.add('light');
      setTheme(true)
    }else{
      document.body.classList.remove('light');
      setTheme(false)
    }
  };

  return (
    <div>
      <Header theme={theme} trocaTema={trocaTema} />
      <Home />
      <Section theme={theme} />
      <Footer />
    </div>    
  )
}

export default App
