"use client"

import { AnimatePresence, motion } from 'framer-motion'
import useAnimatePresence from '../_hooks/useAnimatePresence'
import TechButton from '../_components/buttons/navigation_buttons/TechButton'

const tecs = [
  {
    img: "/bordado.jpg",
    id: "bordado",
    title: "Bordado",
    properties: [
      "Adaptable a cualquier tipo de prenda",
      "Diseños versátiles, sencillos o complejos"
    ]
  },
  {
    img: "/estampado.jpg",
    id: "estampado",
    title: "Estampado",
    properties: [
      "Ideal para telas naturales",
      "Adecuado p/ diseños de pocos colores"
    ]
  },
  {
    img: "/sublimado.jpg",
    id: "sublimado",
    title: "Sublimado",
    properties: [
      "Ideal para prendas grises o blancas",
      "Ideal para diseños full color o con detalles finos"
    ]
  }
]

export default function Tech() {

  const { show, setShow } = useAnimatePresence()

  return (
    <AnimatePresence>
      {
        show ?
          <section 
            className="
            flex w-full 
            mt-4
            sm:mt-0 
            items-center 
            justify-start 
            sm:justify-center 
            flex-col 
            gap-0
            sm:gap-8
            "
          >
            <motion.h2
              className="text-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: .4 } }}
              exit={{ opacity: 0, y: -10, transition: { duration: .2 } }}
            >
              Seleccione una técnica
            </motion.h2>
            <div className="flex flex-col md:flex-row w-full gap-x-3 justify-center items-center mt-4 md:mt-0">
              {
                tecs.map(tec => <TechButton key={tec.id} content={tec} setShow={setShow} />)
              }
            </div>
          </section> : null
      }
    </AnimatePresence>
  )
}
