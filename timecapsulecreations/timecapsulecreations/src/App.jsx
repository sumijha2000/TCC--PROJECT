import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Section from './components/Section/Section'
import Programs from './components/Programs/Programs'
import Programs2 from './components/Programs2/Programs2'
import Programs3 from './components/Programs3/Programs3'
import Footer from './components/Footer/Footer'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Section/>
      <Programs/>
      <Programs2/>
      <Programs3/>
      <Footer/>
    </div>
  )
}

export default App