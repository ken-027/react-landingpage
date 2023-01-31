import './_contact.scss'
import Paws from '../../assets/paws.svg'
import Cat from '../../assets/cat.svg'

const Contact = () => {
  return (
    <section
      id='contact'
      className='contact'>
      <div className='cta'>
        <h2>Want to see what Educat can do for you?</h2>
        <p>
          Learn more by booking a demo today and discover why Educat is the only
          platform you'll ever need for your learning and training needs.
        </p>
        <a
          className='letstalk'
          href='#'>
          LET'S TALK!
        </a>
      </div>
      <div className='images'>
        <img
          src={Cat}
          alt='Cat'
        />
        <img
          src={Paws}
          alt='Paws'
        />
      </div>
    </section>
  )
}

export default Contact
