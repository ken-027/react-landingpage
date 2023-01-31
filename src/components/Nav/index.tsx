import { useState, useEffect } from 'react'
import './_nav.scss'
import logo from '../../assets/logo.png'
import Menu from '@mui/icons-material/Menu'
import ArrowBack from '@mui/icons-material/ArrowBack'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'

const navLIst: { text: string; link: string; arrowDown?: JSX.Element }[] = [
  {
    text: 'Home',
    link: './',
  },
  {
    text: 'About Us',
    link: '#aboutus',
  },
  {
    text: 'Products',
    link: '#products',
    arrowDown: <KeyboardArrowDown className='arrowdown' />,
  },
  {
    text: 'Blogs',
    link: '#blogs',
  },
  {
    text: 'Contact',
    link: '#contact',
  },
]

const Nav = (): JSX.Element => {
  const [isShow, setisShow] = useState<boolean>(false)
  const [responseHeight, setresponseHeight] = useState<number>(0)
  const html = document.querySelector('html') as HTMLElement

  useEffect(() => {
    const covidResponse = document.getElementById('response') as HTMLElement
    setresponseHeight(covidResponse?.clientHeight)

    if (isShow) {
      html.style.overflowY = 'hidden'
    } else {
      html.style.overflowY = 'auto'
    }
  }, [isShow])

  // useEffect(() => {
  //   setTimeout(() => {
  //     const covidResponse = document.getElementById('response') as HTMLElement
  //     setresponseHeight(covidResponse?.clientHeight)
  //   }, 1000)
  // }, [responseHeight, isShow])

  return (
    <nav>
      <a href='./'>
        <img
          src={logo}
          alt='Educat Logo'
        />
      </a>
      <a
        onClick={() => setisShow((prevState) => !prevState)}
        className='navButton'>
        {isShow ? <ArrowBack /> : <Menu />}
      </a>
      <div
        style={{
          top: responseHeight,
        }}
        className={`links ${!isShow && `hide`}`}>
        <ul>
          {navLIst.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                onClick={() => setisShow(false)}>
                {item.text} {item.arrowDown}
              </a>
            </li>
          ))}
        </ul>
        <a
          onClick={() => setisShow(false)}
          href='#book'
          className='book'>
          book A DEMO
        </a>
      </div>
    </nav>
  )
}

export default Nav
