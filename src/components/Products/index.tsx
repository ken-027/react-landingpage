import './_product.scss'
import LMS from '../../assets/product1.svg'
import Library from '../../assets/product2.svg'
import Rover from '../../assets/product3.svg'

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
      <p className='subtitle'>OUR PRODUCTS</p>
      <h2>Learn without Limits</h2>
      <div className='list'>
        {products.map((product, index) => (
          <div
            key={index}
            className='card'>
            <img
              src={product.image}
              alt={product.title}
            />
            <p className='title'>{product.title}</p>
            <p className='description'>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Products
