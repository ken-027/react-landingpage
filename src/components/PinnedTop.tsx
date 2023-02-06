import { motion } from 'framer-motion'
import '@/sass/components/_pinnedtop.scss'

import East from '@mui/icons-material/East'

const PinnedTop = (): JSX.Element => {
  const adjustTop = (isEnter: boolean = true): void => {
    const navContainer = document.querySelector('nav .links') as HTMLElement

    if (isEnter) {
      const pinnedTop = document.getElementById('response') as HTMLElement
      navContainer.style.top = `${pinnedTop?.clientHeight}px`
    } else {
      navContainer.style.top = '0'
    }
  }
  return (
    <motion.section
      onViewportLeave={() => adjustTop(false)}
      onViewportEnter={() => adjustTop()}
      id='response'
      className='response'>
      <p className='bold'>Covid 19 Response: No one should be left behind.</p>
      <p>
        Check out our different ways of helping schools and institutions during
        the pandemic <East className='goto' />
      </p>
    </motion.section>
  )
}

export default PinnedTop
