import '@/sass/components/_footer.scss'

import logo from '@/assets/logo.png'
import PCI from '@/assets/pci-social.png'

import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'

const navLIst: { text: string; link: string }[] = [
  {
    text: 'About Us',
    link: '#about',
  },
  {
    text: 'Products',
    link: '#products',
  },
  {
    text: 'Shop',
    link: '#',
  },
  {
    text: 'Terms of Use',
    link: '#',
  },
  {
    text: 'Data Privacy',
    link: '#',
  },
]

const socialLinks: { icon: JSX.Element; link: string }[] = [
  {
    icon: <Facebook />,
    link: 'https://facebook.com',
  },
  {
    icon: <Instagram />,
    link: 'https://instagram.com',
  },
  {
    icon: <Twitter />,
    link: 'https://twitter.com',
  },
]

const Footer = () => {
  return (
    <footer>
      <div className='socials'>
        <ul>
          {socialLinks.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.icon}</a>
            </li>
          ))}
          <li>
            <a
              target='_blank'
              href='./'>
              <img
                src={PCI}
                alt='PCI Social Link'
              />
            </a>
          </li>
        </ul>
      </div>
      <div className='links'>
        <img
          src={logo}
          alt='Educat Logo'
        />
        <p className='copyright'>&copy; Copyright 2021. All rights reserved.</p>
        <ul>
          {navLIst.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
