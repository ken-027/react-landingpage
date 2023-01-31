import { useState } from 'react'
import './styles/sass/config/_index.scss'

import CovidResponse from './components/CovidResponse'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Header from './components/Header'
import Products from './components/Products'
import More from './components/More'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Contact from './components/Contact'
import Book from './components/Book'

function App(): JSX.Element {
  return (
    <>
      <CovidResponse />
      <div className='container'>
        <Nav />
        <main>
          <Header />
          <Products />
          {/* <More /> */}
          {/* <Book /> */}
          <Stats />
          <Partners />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
