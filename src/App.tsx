import { useState } from 'react'
import './App.css'
import Banner from './components/banner/Banner'
import Nav from './components/nav/Nav'
function App() {

  return (
    <>
      
         <Nav></Nav>
         <div className="md:max-w-[85%] md:mx-auto"><Banner></Banner></div>
          
    </>
  )
}

export default App
