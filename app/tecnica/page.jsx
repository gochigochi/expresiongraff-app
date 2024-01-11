"use client"

import { AnimatePresence } from 'framer-motion'
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
    <section className="flex w-full items-center justify-center">
      <div className="flex flex-col md:flex-row w-full gap-x-3 justify-center items-center mt-4 md:mt-0">
        <AnimatePresence>
          {
            show ? 
            tecs.map(tec => <TechButton key={tec.id} content={tec} setShow={setShow} />) : null
          }
        </AnimatePresence>
      </div>
    </section>
  )
}
