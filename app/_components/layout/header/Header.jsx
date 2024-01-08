"use client"

import Link from "next/link"
import Stepper from "../../stepper/Stepper"
import { usePathname } from "next/navigation"

const Header = () => {

    const pathname = usePathname()

    return (
        <header className="w-full">
            <nav className="flex h-14 max-w-screen-xl justify-between items-center mx-auto mt-2 px-5">
                <div className="text-xl">
                    <Link href="/">ExpresionGraff</Link>
                </div>
                <Link href="/tech">Tech</Link>
            </nav>
            {
                pathname !== "/" ?
                <div className="flex items-center h-14 w-9/12 mx-auto mt-3 px-5">
                    <Stepper />
                </div> : null
            }
        </header>
    )
}

export default Header