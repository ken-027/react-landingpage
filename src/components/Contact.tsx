import { motion } from 'framer-motion'
import '@/sass/components/_contact.scss'

import Paws from '@/assets/paws.svg'
import Cat from '@/assets/cat.svg'

const Contact = (): JSX.Element => {
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{
        translateY: '5vh',
        zIndex: -2,
      }}
      whileInView={{
        translateY: 0,
        zIndex: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      id='contact'
      className='contact box'>
      <div className='cta'>
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
          }}>
          Want to see what Educat can do for you?
        </motion.h2>
        <motion.p
          viewport={{ once: true }}
          initial={{
            opacity: 0.2,
            translateY: '3vh',
            zIndex: -2,
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            zIndex: 0,
          }}
          transition={{
            duration: 0.6,
          }}>
          Learn more by booking a demo today and discover why Educat is the only
          platform you'll ever need for your learning and training needs.
        </motion.p>
        <a
          type='button'
          className='letstalk'
          href='#contact'>
          LET'S TALK!
        </a>
      </div>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}
        className='images'>
        <img
          src={Cat}
          alt='Cat'
        />
        <img
          src={Paws}
          alt='Paws'
        />
      </motion.div>
    </motion.section>
  )
}

export default Contact
