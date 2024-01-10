"use client"

import { AnimatePresence, motion } from 'framer-motion'
import LandingButton from './_components/buttons/navigation_buttons/LandingButton'
import useAnimatePresence from './_hooks/useAnimatepresence'

export default function Home() {

  const { show, setShow } = useAnimatePresence()

  return (
    <section className="flex grow">
      <div className="w-1/2 flex justify-center items-center">
        <div className="flex-col">
          <AnimatePresence mode='wait'>
            {
              show ?
                <>
                  <motion.h1
                    key="copy"
                    className="text-5xl mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0, transition: { duration: .4 } }}
                    exit={{ opacity: 0, y: -10, transition: { duration: .2 } }}
                  >
                    Dale la identidad de tu empresa a cada prenda
                  </motion.h1>
                  <LandingButton setter={setShow} />
                </> : null
            }
          </AnimatePresence>
        </div>
      </div>
      <div className="w-1/2">
            {/* THREE JS */}
      </div>
    </section>
  )
}
