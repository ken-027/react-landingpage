import logo from '../../assets/logo.png'
import Facebook from '@mui/icons-material/Facebook'
import Instagram from '@mui/icons-material/Instagram'
import Twitter from '@mui/icons-material/Twitter'
import PCI from '../../assets/pci-social.png'
import './_footer.scss'

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
    link: '#shop',
  },
  {
    text: 'Terms of Use',
    link: '#terms',
  },
  {
    text: 'Data Privacy',
    link: '#dataprivacy',
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
            <a href='./'>
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
