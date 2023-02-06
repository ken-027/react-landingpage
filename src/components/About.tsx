import { motion } from 'framer-motion'
import '@/styles/sass/components/_about.scss'

import lms1 from '../assets/lms1.png'
import lms2 from '../assets/lms2.png'

const list: {
  image: string
  title: string
  description: string
  link: string
}[] = [
  {
    image: lms1,
    title: 'General Education',
    description:
      'Transform your learning digitally. Streamline all your school processes in one platform made especially for students, for teachers, and for parents.',
    link: '#about',
  },
  {
    image: lms2,
    title: 'Professional Training',
    description:
      'Bringing you a platform that provides end to end solution in the training process for your employees, customers, or partners that allows. ',
    link: '#about',
  },
]

const About = (): JSX.Element => {
  return (
    <section
      id='about'
      className='about'>
      <motion.h2
        viewport={{ once: true }}
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}>
        The LMS that's built for every need
      </motion.h2>
      <div className='list'>
        {list.map((item, index) => (
          <div
            className='item'
            key={index}>
            <div className='image'>
              <motion.img
                viewport={{ once: true }}
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                }}
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className='description'>
              <motion.h2
                viewport={{ once: true }}
                initial={{ opacity: 0.2 }}
                whileInView={{ opacity: 1 }}
                transition={{
                  duration: 0.6,
                }}>
                {item.title}
              </motion.h2>
              <motion.div
                viewport={{ once: true }}
                initial={{
                  opacity: 0.2,
                  translateY: '5vh',
                  zIndex: -2,
                }}
                transition={{ duration: 0.6 }}
                whileInView={{
                  opacity: 1,
                  translateY: 0,
                  zIndex: 0,
                }}>
                <p>{item.description}</p>
                <a href={item.link}>Learn more</a>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
