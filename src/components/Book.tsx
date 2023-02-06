import { motion } from 'framer-motion'
import '@/sass/components/_book.scss'

import { ReactSVG } from 'react-svg'
import monitoring from '@/assets/icons/monitoring.svg'
import messaging from '@/assets/icons/messaging.svg'
import announcement from '@/assets/icons/announcement.svg'
import calendar from '@/assets/icons/calendar.svg'
import assessment from '@/assets/icons/assessment.svg'
import tools from '@/assets/icons/tools.svg'
import users from '@/assets/icons/users.svg'
import section from '@/assets/icons/section.svg'
import security from '@/assets/icons/security.svg'
import analytics from '@/assets/icons/analytics.svg'

const list: { image: string; title: string }[] = [
  {
    image: monitoring,
    title: 'Progress Monitoring',
  },
  {
    image: messaging,
    title: 'Messaging',
  },
  {
    image: announcement,
    title: 'Announcements',
  },
  {
    image: calendar,
    title: 'Calendar',
  },
  {
    image: assessment,
    title: 'Assessments',
  },
  {
    image: tools,
    title: 'Authoring Tool',
  },
  {
    image: users,
    title: 'User Management',
  },
  {
    image: section,
    title: 'Section Management',
  },
  {
    image: security,
    title: 'Security',
  },
  {
    image: analytics,
    title: 'Analytics',
  },
]

const Book = (): JSX.Element => {
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
      id='booking'
      className='booking box'>
      <div className='description'>
        <motion.h2
          viewport={{ once: true }}
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.6,
          }}>
          Design to help you Work Smarter not Harder
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
          Educat LMS offers the perfect end-to-end solution for schools and
          businesses. It also provides you with all the features needed to make
          learning and training easier.{' '}
        </motion.p>
        <a
          type='button'
          href='#booking'
          className='bookdemo'>
          BOOK A DEMO
        </a>
      </div>
      <div className='icons'>
        {list.map((item, index) => (
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              // delay: index * 0.1,
            }}
            // viewport={{ once: true }}
            className='box'
            key={index}>
            <ReactSVG
              className='svg'
              src={item.image}
            />
            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Book
