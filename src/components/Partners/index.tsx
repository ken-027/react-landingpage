import Partner1 from '../../assets/Partners/partner1.png'
import Partner2 from '../../assets/Partners/partner2.png'
import Partner3 from '../../assets/Partners/partner3.png'
import Partner4 from '../../assets/Partners/partner4.png'
import Partner5 from '../../assets/Partners/partner5.png'
import Partner6 from '../../assets/Partners/partner6.png'
import './_partner.scss'

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
      <p className='subtitle'>OUR HAPPY CLIENTS</p>
      <h2>Our Partners</h2>
      <div className='images'>
        {images.map((image, index) => (
          <img
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
