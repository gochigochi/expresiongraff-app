"use client"

import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

const Footer = () => {

    const pathname = usePathname()
    const [show, setShow] = useState(false)
    const date = new Date().getFullYear()

    useEffect(() => setShow(pathname === "/" || pathname.includes("detalles")), [pathname])

    return (
        <footer className={`w-full mt-2 ${show ? "relative" : "hidden"}`}>
            <div className="flex h-5 max-w-screen-xl mx-auto px-5 justify-center sm:justify-end">
                <p className="text-xs">&#169; Expresiongraff, {date} by diegoui.</p>
            </div>
        </footer>
    )
}

export default Footer