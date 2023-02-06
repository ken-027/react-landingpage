import { useState } from 'react'
import './styles/sass/config/_index.scss'

import PinnedTop from './components/PinnedTop'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Header from './components/Header'
import Products from './components/Products'
import Feature from './components/Feature'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Book from './components/Book'
import About from './components/About'
import Testimonial from './components/Testimonial'

function App(): JSX.Element {
  return (
    <>
      <PinnedTop />
      <div className='container'>
        <Nav />
        <main>
          <Header />
          <Products />
          <Feature />
          <About />
          <Book />
          <Stats />
          <Testimonial />
          <Partners />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
