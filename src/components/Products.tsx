import '@/sass/components/_product.scss'

import LMS from '@/assets/product1.svg'
import Library from '@/assets/product2.svg'
import Rover from '@/assets/product3.svg'
import { motion } from 'framer-motion'

const products: { image: string; title: string; description: string }[] = [
  {
    image: LMS,
    title: 'Educat LMS',
    description:
      'A Learning Management System and content library that offers a variety of ways on how to learn through blended learning.',
  },
  {
    image: Library,
    title: 'Educat Library',
    description:
      'An online library that contains Digital Modules, Worksheets and Assessments aligned with DepEd’s K to 12 Curriculum',
  },
  {
    image: Rover,
    title: 'Educat Rover',
    description:
      'An offline solution run by mini-computers that are equipped with wireless local area network for contactless file transfers.',
  },
]

const Products = () => {
  return (
    <section
      id='products'
      className='products'>
      <motion.p
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.6,
        }}
        viewport={{ once: true }}
        className='subtitle'>
        OUR PRODUCTS
      </motion.p>
      <motion.h2
        initial={{ opacity: 0.2 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
        }}>
        Learn without Limits
      </motion.h2>
      <div className='list'>
        {products.map((product, index) => (
          <motion.div
            viewport={{ once: true }}
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            key={index}
            className='card'>
            <img
              src={product.image}
              alt={product.title}
            />
            <motion.p
              viewport={{ once: true }}
              initial={{ opacity: 0.2 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.3,
              }}
              className='title'>
              {product.title}
            </motion.p>
            <motion.p
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.4,
              }}
              initial={{
                opacity: 0.2,
                translateY: 20,
              }}
              whileInView={{
                translateY: 0,
                opacity: 1,
              }}
              className='description'>
              {product.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Products
