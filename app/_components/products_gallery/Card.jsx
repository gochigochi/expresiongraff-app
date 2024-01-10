import { motion } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"
import useAnimatePresence from "@/app/_hooks/useAnimatePresence"
import { createQueryString } from "@/app/_lib/createQueryString"

const Card = ({ product, index, setShow, ...props }) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const handleNavigation = () => {

        const queryString = createQueryString(null, null, searchParams)
        setShow(false)
        setTimeout(() => {
            router.push(`/detalles/${product.id}?${queryString}`)
        }, 400)
    }

    return (
        <motion.div
            onClick={handleNavigation}
            className="
            relative
            grow-1 
            shrink-0 
            basis-[32.9%]
            my-4
            mr-[0.4rem]
            snap-start
            pl-1
            pb-1
            select-none
            origin-center
            "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: .4 } }}
            exit={{ opacity: 0, y: -20, transition: { duration: .2 } }}
            {...props}
        >
            <div 
            className="
            relative
            p-6
            h-[25rem]
            shadow-md
            shadow-gray-300
            rounded-xl
            border 
            border-inherit
            overflow-hidden
            cursor-pointer
            "
            >
                <h2 className="relative text-4xl z-10">{product.data.title}</h2>
                <img
                    src={product.data.img}
                    className="
                    absolute
                    w-11/12
                    h-[25rem]
                    top-20
                    left-16
                    object-contain
                    "
                />
            </div>
        </motion.div>
    )
}

export default Card