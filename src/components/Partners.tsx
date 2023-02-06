import { motion } from 'framer-motion'
import '@/sass/components/_partner.scss'

import Partner1 from '@/assets/partners/partner1.png'
import Partner2 from '@/assets/partners/partner2.png'
import Partner3 from '@/assets/partners/partner3.png'
import Partner4 from '@/assets/partners/partner4.png'
import Partner5 from '@/assets/partners/partner5.png'
import Partner6 from '@/assets/partners/partner6.png'

const images: { src: string; title: string }[] = [
  { src: Partner1, title: 'Knowledge Channel' },
  { src: Partner2, title: 'Partner Two' },
  { src: Partner3, title: 'Partner Three' },
  { src: Partner4, title: 'Philippine Acadamey' },
  { src: Partner5, title: 'Partner Five' },
  { src: Partner6, title: 'FH Moms' },
]

const Partners = () => {
  return (
    <section
      id='partners'
      className='partners'>
      <motion.p
        viewport={{ once: true }}
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}
        className='subtitle'>
        OUR HAPPY CLIENTS
      </motion.p>
      <motion.h2
        viewport={{ once: true }}
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}>
        Our Partners
      </motion.h2>
      <div className='images'>
        {images.map((image, index) => (
          <motion.img
            viewport={{ once: true }}
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
            }}
            key={index}
            className='image'
            src={image.src}
            alt={image.title}
          />
        ))}
      </div>
    </section>
  )
}

export default Partners
