import {motion, AnimatePresence} from 'framer-motion';
import {useSnapshot} from 'valtio';
import state from '../store';
import { CustomButton } from '../components';

import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/motion'

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down')}>
            <img
              src = "./balloon.png"
              alt = "logo"
              className="w-8 h-8 object-contain"
            />
          </motion.header>
          <motion.div className='home-content' {...
          headContainerAnimation}>
            <motion.div>
              <h1 className='head-text'>
                 MOCKUPS <br></br>REINVENTED.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation}
            className='flex flex-col gap-5'>
              <p className='max-w-hd font-normal text-gray-600 text-base'> 
              Create a tshirt of your own using <strong>AI-powered </strong> 
              and <strong>3-D</strong> animation!</p>
              <CustomButton
              type="filled"
              title="Customize It"
              handleClick={() => state.intro = false}
              customStyles="w-fit px-4 py-2.5"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home