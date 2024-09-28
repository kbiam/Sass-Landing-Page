import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Ticker/>
      <Features/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </>
  )
}

export default App
