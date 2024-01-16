"use client"

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import useAnimatePresence from '@/app/_hooks/useAnimatePresence'
import { Stage, useProgress } from '@react-three/drei'
import ShirtModel from '../shirt_model/ShirtModel'
import PageLoader from '../loaders/page_loader/PageLoader'
import LandingButton from '../buttons/navigation_buttons/LandingButton'

const Home = () => {

  const { setShow } = useAnimatePresence()
  const [loading, setLoading] = useState(true)
  const { progress } = useProgress()
  
  useEffect(() => {
    
    if (progress == 0) setLoading(true)

    if (progress == 100) setLoading(false)

  }, [progress])

  return (
    <section className="flex grow">
      <div className="w-full sm:w-1/2 flex justify-center items-center">
        <div className="relative bottom-6 sm:bottom-0">
          <AnimatePresence mode='wait'>
            {
              !loading ?
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
      <div className="hidden sm:block sm:relative w-1/2">
        <Canvas id="#three-canvas" camera={{ position: [.2, .4, .8], fov: 75 }}>
          <Suspense fallback={null}>
            <Stage>
              <ShirtModel />
            </Stage>
          </Suspense>
        </Canvas>
      </div>
      <AnimatePresence>
        {
          loading ? <PageLoader /> : null
        }
      </AnimatePresence>
    </section>
  )
}

export default Home