import React from 'react'
import Hero from './components/Hero'
import NewstDeals from './components/NewstDeals'
import AboutUs from './components/AboutUs'
import BestDeals from './components/BestDeals'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <div className='w-11/12 m-auto md:w-4/5 '>
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
