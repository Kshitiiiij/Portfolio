import './App.css'
import Header from './component/header/Header'
import Home from './component/home/Home'
import About from './component/about/About'

function App() {

  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </>
  )
}

export default App
