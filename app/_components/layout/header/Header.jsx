"use client"

import Link from "next/link"
import Stepper from "../../stepper/Stepper"
import { usePathname } from "next/navigation"
import ContactMenu from "../../contact_menu/ContactMenu"

const Header = () => {

    const pathname = usePathname()

    return (
        <header className="w-full">
            <nav className="flex h-14 max-w-screen-xl justify-between items-center mx-auto mt-2 px-5">
                <div className="text-xl">
                    <Link href="/">
                        <img src="/exg-logo.svg" alt="" className="w-auto h-12" />
                    </Link>
                </div>
                <ContactMenu />
            </nav>
            {/* {
                pathname !== "/" ?
                    <div className="flex items-center h-14 w-9/12 max-w-4xl">
                        <Stepper />
                    </div> : null
            } */}
        </header>
    )
}

export default Header