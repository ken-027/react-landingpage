import './_header.scss'
import Banner from '../../assets/hero-banner.png'
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown'

const Header = () => {
  return (
    <header>
      <section className='content'>
        <div className='description'>
          <h1>The LMS that's built for your needs</h1>
          <p>
            Experience seamless communication, easy data migration, and secured
            user management in one awesome platform.
          </p>
          <a
            href='#lmsportal'
            className='goto'>
            Go To LMS Portal
          </a>
        </div>
        <div className='image'>
          <img
            src={Banner}
            alt='Banner Logo'
          />
        </div>
      </section>
      <a
        href='#products'
        className='gotoproducts'>
        <KeyboardArrowDown />
      </a>
    </header>
  )
}

export default Header
