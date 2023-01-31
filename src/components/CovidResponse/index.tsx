import './_covidresponse.scss'
import East from '@mui/icons-material/East'

const CovidResponse = (): JSX.Element => {
  return (
    <section
      id='response'
      className='response'>
      <p className='bold'>Covid 19 Response: No one should be left behind.</p>
      <p>
        Check out our different ways of helping schools and institutions during
        the pandemic <East className='goto' />
      </p>
    </section>
  )
}

export default CovidResponse
