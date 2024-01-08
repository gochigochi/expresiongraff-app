"use client"

import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LandingButton from './_components/buttons/navigation_buttons/LandingButton'

export default function Home() {

  const [show, setShow] = useState(false)

  useEffect(() => setShow(true), [])

  return (
    <section className="flex">
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
