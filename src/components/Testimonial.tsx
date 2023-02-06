import { motion } from 'framer-motion'
import '@/sass/components/_testimonial.scss'
import testimonial from '@/assets/testimonial.png'

const Testimonial = (): JSX.Element => {
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
      id='testimonial'
      className='testimonial'>
      <div className=''>
        <div className='description'>
          <motion.h2
            viewport={{ once: true }}
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.6,
            }}>
            They Said It First
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
            }}
            className='describe'>
            Scuola Maria is fortunate to work with PCI early on when the
            pandemic hit the country. My ideas and my curriculum design all came
            to life in the NEST — our exclusive LMS for our students. If not for
            PCI, we wouldn't be able to continue education at this very
            difficult time. Ina Gonda-Ramos, MAE-CDE, LPT Program Director of
            Scuola Maria
          </motion.p>
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.6,
            }}
            className='name'>
            <p>Ina Gonda-Ramos, MAE-CDE, LPT</p>
            <small>Program Director of Scuola Maria</small>
          </motion.div>
          <ul className='bullets-container'>
            <li>
              <a
                className='bullet active'
                href='#testimonial'></a>
            </li>
            <li>
              <a
                className='bullet'
                href='#testimonial'></a>
            </li>
          </ul>
        </div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
          }}
          className='image'>
          <img
            src={testimonial}
            alt='Testimonial'
          />
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Testimonial
