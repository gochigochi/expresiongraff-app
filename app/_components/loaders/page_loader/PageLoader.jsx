import Image from "next/image"
import { motion } from "framer-motion"

const PageLoader = () => {
    return (
        <div
            key="loader"
            className="fixed inset-0 w-screen h-screen bg-white grid place-items-center"
            initial={{opacity: 1}}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: .2 } }}
        >
            <div className="animate-pulse relative w-16 h-16">
                <Image src="/light-logo.jpg" alt="" priority fill style={{objectFit: "contain"}} sizes="25vw" />
            </div>
        </div>
    )
}

export default PageLoader