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
        title: "Detalles y presupuesto",
        path: "/detalles",
    },
]

const Stepper = () => {

    const pathname = usePathname()
    const index = useRef()

    index.current = content.findIndex(el => pathname.includes(el.path)) + 1

    return (
        <div className="relative w-full mt-6 sm:mt-0">
            <div className="absolute top-1/2 translate-y-2/4 w-full flex l-0">
                <div className="w-3/4 mx-auto border-t-2 border-dashed border-white"></div>
            </div>
            <div className="relative w-full flex">
                {
                    content.map(item => {
                        return (
                            <div
                                key={item.id}
                                className="
                                relative 
                                flex 
                                flex-auto  
                                justify-center 
                                w-11/12  
                                mx-auto
                                "
                            >
                                <div
                                    className={`
                                        relative
                                        text-xs
                                        h-10
                                        flex
                                        items-center
                                        border-t-2
                                        ${index.current >= item.id ? "border-sky-500" : "bg-white"}
                                    `}
                                >

                                    {
                                        index.current > item.id ?

                                            <svg 
                                            className="
                                            absolute
                                            inset-1/2
                                            -translate-x-1/2
                                            -translate-y-1/2
                                            sm:relative
                                            sm:inset-0
                                            sm:translate-x-0
                                            sm:translate-y-0
                                            grid
                                            place-items-center
                                            w-7
                                            h-7
                                            " 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 24 24" 
                                            fill="#38BDF8"
                                            >
                                                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                                            </svg> :
                                            <span
                                                className={`
                                                absolute
                                                inset-1/2
                                                -translate-x-1/2
                                                -translate-y-1/2
                                                sm:relative
                                                sm:inset-0
                                                sm:translate-x-0
                                                sm:translate-y-0
                                                w-5
                                                h-5
                                                border-2
                                                rounded-full
                                                grid
                                                place-items-center
                                                ${index.current >= item.id ? "border-sky-500" : "border-gray-200"}
                                                ${index.current >= item.id ? "" : "text-gray-200"}
                                                `}
                                            >
                                                {item.id}
                                            </span>
                                    }
                                    <span
                                        className={`
                                        opacity-0
                                        sm:opacity-100
                                        ml-2 
                                        text-xs 
                                        ${index.current >= item.id ? "" : "text-gray-200"}
                                        `}
                                    >
                                        {item.title}
                                    </span>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Stepper