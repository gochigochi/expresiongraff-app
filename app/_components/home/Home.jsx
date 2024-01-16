"use client"

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import useAnimatePresence from '@/app/_hooks/useAnimatePresence'
import LandingButton from '../buttons/navigation_buttons/LandingButton'

const logos = [
  "/logo2.svg",
  "/logo3.svg",
  "/logo4.svg",
  "/logo5.svg",
  "/logo6.svg",
  "/logo7.svg",
]

const Home = () => {

  const { show, setShow } = useAnimatePresence()
  const index = useRef(0)
  const [ currentLogo, setCurrentLogo ] = useState(logos[index.current])

  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentLogo(logos[index.current])
      if (index.current >= logos.length - 1) {
        index.current = 0
      } else {
        index.current++
      }
    }, 1000)

    return () => clearInterval(interval)

  }, [])

  return (
    <section className="flex grow">
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="relative bottom-6 sm:bottom-0">
          <AnimatePresence mode='wait'>
            {
              show ?
                <>
                  <motion.h1
                    key="copy"
                    className="text-5xl mb-4 select-none"
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
      <div className="hidden md:grid place-items-center absolute inset-0 -z-10 w-full md:relative md:w-1/2">
        {
          show ?
          <motion.div
            key="img"
            className="relative h-[32rem] w-[32rem]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: .4 } }}
            exit={{ opacity: 0, y: -10, transition: { duration: .2 } }}
          >
            <Image src="/shirt.png" alt="" fill priority sizes="50vw" style={{ objectFit: "contain" }} />
            <div
              className="absolute top-[10.5rem] right-[12rem] w-8 h-8 grid place-items-center"
              style={{ transform: "rotate(3deg) rotate3d(0, 1, 0, 20deg" }}
            >
              <div className="relative w-full h-full">
                <Image src={currentLogo} alt="" fill sizes="10vw" />
              </div>
            </div>
          </motion.div> : null
        }
      </div>
    </section>
  )
}

export default Home