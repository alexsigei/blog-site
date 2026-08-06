import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import About from './components/About'
import blog from './blog'
import ArticleList from './components/ArticleList'

function App() {
  return (
    <div className="app">
      <Header name={blog.name} />

      <About
        image={blog.image}
        about={blog.about}
      />
      <ArticleList posts={blog.posts}/>
    </div>
  )
}

export default App
