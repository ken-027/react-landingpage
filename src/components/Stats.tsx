import { useState } from 'react'
import '@/sass/components/_stats.scss'

import { motion } from 'framer-motion'
import { useSpring, animated } from '@react-spring/web'

const stats: { number: number; text: string }[] = [
  {
    number: 1200,
    text: 'Learning Materials Donated',
  },
  {
    number: 5500,
    text: 'LMS Users',
  },
  {
    number: 3000,
    text: 'Trained Professionals',
  },
  {
    number: 5,
    text: 'Lorem Ipsum',
  },
]

const AnimatedItem = ({ number }: { number: number }): JSX.Element => {
  const statnum = useSpring({ val: number, from: { val: 0 } })

  return (
    <animated.p className='number'>
      {statnum.val.to((val) =>
        Math.floor(val)
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ','),
      )}
    </animated.p>
  )
}

const Stats = () => {
  const [onViewPort, setonViewPort] = useState<boolean>(false)

  return (
    <motion.section
      id='stats'
      onViewportEnter={() => setonViewPort(true)}
      onViewportLeave={() => setonViewPort(false)}
      className='stats'>
      {onViewPort &&
        stats.map((stat, index) => (
          <div
            className='item'
            key={index}>
            {onViewPort ? <AnimatedItem number={stat.number} /> : <p>0</p>}
            <animated.p className='title'>{stat.text}</animated.p>
          </div>
        ))}
    </motion.section>
  )
}

export default Stats
