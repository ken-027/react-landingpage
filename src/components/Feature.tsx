// import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { motion } from 'framer-motion'
import { Navigation, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'

import '@/sass/components/_feature.scss'

import Feature1 from '@/assets/feature1.png'
import Feature2 from '@/assets/feature2.png'
import Feature3 from '@/assets/feature3.png'

const list: {
  title: string
  description: string
  image: string
}[] = [
  {
    title: 'Offline Learning',
    description:
      'The ideal solution to empower learners with no access to an internet connection.',
    image: Feature1,
  },
  {
    title: 'Supplementary Learning Materials',
    description:
      'Our printed and interactive learning materials are perfect to help strengthen your learning.',
    image: Feature2,
  },
  {
    title: 'All-in-one LMS Platform',
    description: 'All the solutions you need in one powerful platform.',
    image: Feature3,
  },
]

const Feature = (): JSX.Element => {
  // const [isInView, setisInView] = useState<boolean>(false)
  return (
    <motion.section
      viewport={{ once: true }}
      initial={{
        translateY: '5vh',
        zIndex: -2,
      }}
      // onViewportEnter={() => setisInView(true)}
      // onViewportLeave={() => setisInView(false)}
      whileInView={{
        translateY: 0,
        zIndex: 0,
      }}
      transition={{
        duration: 0.6,
      }}
      id='feature'
      className='feature box'>
      <Swiper
        navigation
        spaceBetween={50}
        allowTouchMove={false}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className='list'>
        {list.map((item, index) => (
          <SwiperSlide
            key={index}
            className='item'>
            <div className='wrapper'>
              <h2 className='heading'>Do more with Educat</h2>
              <div className='description'>
                <h2>0{++index}</h2>
                <div className='describe'>
                  <p className='title'>{item.title}</p>
                  <p className='text'>{item.description}</p>
                </div>
              </div>
            </div>

            <div className='image'>
              <img
                src={item.image}
                alt={item.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  )
}

export default Feature
