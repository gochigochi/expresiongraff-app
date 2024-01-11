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

    console.log(product)

    return (
        <motion.div
            onClick={handleNavigation}
            className="
            relative
            grow-1 
            shrink-0 
            basis-[16rem]
            md:basis-[32.9%]
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
            rounded-2xl 
            border 
            border-slate-200
            rounded-xl
            overflow-hidden
            cursor-pointer
            flex
            flex-col
            justify-between
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
                    mix-blend-multiply
                    "
                />
                <div>
                    {
                        product.data.tecnica.map(tech => {
                            return (
                                <div
                                    className="
                                    relative
                                    index-100
                                    w-fit
                                    px-4
                                    py-[.2rem]
                                    mt-[.1rem]
                                    text-xs
                                    rounded-full
                                    bg-sky-300
                                    "
                                >
                                    {tech}
                                </div>
                            )
                        }
                        )

                    }
                    <div
                        className="
                        relative
                        index-100
                        w-fit
                        px-4
                        py-[.2rem]
                        mt-[.1rem]
                        text-xs
                        rounded-full
                        bg-gray-100
                        "
                    >
                        varios colores
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Card