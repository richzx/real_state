import React from 'react'
import './App.css'
import Hero from './components/Hero'
import NewstDeals from './components/NewstDeals'
import AboutUs from './components/AboutUs'
import BestDeals from './components/BestDeals'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div>
        <Hero />
        <NewstDeals />
        <AboutUs />
        <BestDeals />
        <Footer />
      </div>
    </>
  )
}

export default App
