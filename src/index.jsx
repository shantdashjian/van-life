import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <h1>Home</h1>
  )
}

function About() {
  return (
    <h1>About</h1>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)