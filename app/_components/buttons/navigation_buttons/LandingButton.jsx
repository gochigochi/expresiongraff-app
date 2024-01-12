"use client"

import { useRouter} from 'next/navigation'
import { motion } from "framer-motion"

const LandingButton = ({ setter }) => {

    const router = useRouter()

    const handleNavigation = () => {
        setter(false)
        setTimeout(() => router.push("/tecnica"), 400)
    }

    return (
        <motion.button
            key="btn"
            className="bg-sky-400 px-5 py-3 text-white rounded-full tracking-widest self-end select-none"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: .2, duration: .2 } }}
            exit={{ opacity: 0, y: -10, transition: { duration: .2 } }}
            onClick={handleNavigation}
        >
            Calculá tu presupuesto
        </motion.button>
    )
}

export default LandingButton