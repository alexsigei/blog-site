import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header name={blog.name} />

      <About
        image={blog.image}
        about={blog.about}
      />
    </>
  )
}

export default App
