import { useState, useEffect } from 'react'
import '@/sass/components/_nav.scss'

import logo from '@/assets/logo.png'
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
    link: '#about',
  },
  {
    text: 'Products',
    link: '#products',
    arrowDown: <KeyboardArrowDown className='arrowdown' />,
  },
  {
    text: 'Blogs',
    link: '#testimonial',
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
    const pinnedTop = document.getElementById('response') as HTMLElement
    setresponseHeight(pinnedTop?.clientHeight)

    if (isShow) {
      html.style.overflowY = 'hidden'
    } else {
      html.style.overflowY = 'auto'
    }
  }, [isShow])

  return (
    <nav>
      <a
        href='./'
        className='logolink'>
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
        <div
          className='backdrop'
          onClick={() => setisShow(false)}></div>
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
          type='button'
          onClick={() => setisShow(false)}
          href='#booking'
          className='book'>
          book A DEMO
        </a>
      </div>
    </nav>
  )
}

export default Nav
