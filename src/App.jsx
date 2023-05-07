import './App.css'
import Header from './component/header/Header'
import Home from './component/home/Home'
import About from './component/about/About'
import Skills from './component/skills/Skills'
import Portfolio from './component/portfolio/Portfolio'
import Qualifications from './component/qualification/Qualification'

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        {/* <Qualifications /> */}
        <Portfolio />
      </main>
    </>
  )
}

export default App
