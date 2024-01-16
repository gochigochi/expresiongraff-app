"use client"

import Link from "next/link"
import Image from "next/image"
import Stepper from "../../stepper/Stepper"
import { usePathname } from "next/navigation"
import ContactMenu from "../../contact_menu/ContactMenu"

const Header = () => {

    const pathname = usePathname()

    return (
        <header className="w-full">
            <nav className="flex h-14 max-w-screen-xl justify-between items-center mx-auto mt-2 px-5">
                <div className="relative w-52 h-12">
                    <Link href="/">
                        <Image src="/logo.svg" alt="" className="w-auto h-12" fill priority />
                    </Link>
                </div>
                <ContactMenu />
            </nav>
            {
                pathname !== "/" ?
                    <div className="flex items-center h-16 sm:h-24 w-9/12 max-w-4xl mx-auto">
                        <Stepper />
                    </div> : null
            }
        </header>
    )
}

export default Header