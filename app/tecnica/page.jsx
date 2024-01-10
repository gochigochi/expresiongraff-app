"use client"

import { AnimatePresence } from 'framer-motion'
import useAnimatePresence from '../_hooks/useAnimatePresence'
import TechButton from '../_components/buttons/navigation_buttons/TechButton'

const tecs = [
  {
    // img: bordadoIcon,
    id: "bordado",
    title: "Bordado",
    properties: [
      "Adaptable a cualquier tipo de prenda",
      "Diseños versátiles, sencillos o complejos"
    ]
  },
  {
    // img: serigrafiaIcon,
    id: "estampado",
    title: "Estampado",
    properties: [
      "Ideal para telas naturales",
      "Adecuado p/ diseños de pocos colores"
    ]
  },
  {
    // img: sublimacionIcon,
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
    <section className="flex w-full flex-col items-center justify-center px-24">
      <div className="flex w-full gap-x-3 justify-center">
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
