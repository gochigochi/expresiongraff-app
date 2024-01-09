"use client"

import { useRef } from "react"
import { usePathname } from "next/navigation"

const content = [
    {
        id: 1,
        title: "Selección de técnica",
        path: "/tecnica",
    },
    {
        id: 2,
        title: "Selección de prendas",
        path: "/productos",
    },
    {
        id: 3,
        title: "Detalles",
        path: "/detalles",
    },
    {
        id: 4,
        title: "Presupuesto",
        path: "/presupuesto",
    },
]

const Stepper = () => {

    const pathname = usePathname()
    const index = useRef()

    index.current = content.findIndex(el => pathname.includes(el.path)) + 1

    return (
        <div className="relative w-full">
            <div className="absolute top-1/2 translate-y-2/4 w-full flex l-0">
                <div className="w-3/4 mx-auto border-t-2 border-dashed border-white"></div>
            </div>
            <div className="relative w-full flex">
                {
                    content.map(item => {
                        return (
                            <div key={item.id} className="relative flex flex-auto  justify-center w-11/12  mx-auto">
                                <div
                                    className={`
                                        bg-white
                                        text-xs
                                        w-10
                                        h-10
                                        grid
                                        place-items-center
                                        rounded-full
                                        ${index.current > item.id ? "bg-amber-200" : "bg-white"}
                                    `}
                                >
                                {item.id}
                                </div>
                                <p
                                    className={`text-xs absolute -bottom-8 ${index.current >= item.id ? "" : "text-gray-300"}`}>{item.title}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Stepper