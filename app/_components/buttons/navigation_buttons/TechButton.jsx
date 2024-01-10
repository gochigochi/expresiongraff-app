import { createQueryString } from "@/app/_lib/createQueryString"
import { motion } from "framer-motion"
import { useRouter, useSearchParams } from "next/navigation"

const TechButton = ({ setShow, content, ...props }) => {

  const router = useRouter()
  const searchParams = useSearchParams()

  const handleNavigation = () => {

    const queryString = createQueryString("tecnica", content.id, searchParams)
    setShow(false)
    setTimeout(() => {
      router.push(`/productos/${content.id}?${queryString}`)
    }, 400)
  }

  return (
          <motion.button
            key={content.id}
            onClick={handleNavigation}
            className="
            grow-1 
            shrink-0 
            basis-[32.9%]
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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0, transition: { duration: .4 } }}
            exit={{ opacity: 0, y: -10, transition: { duration: .2 } }}
            {...props}
            >
            {content.title}
          </motion.button>
  )
}

export default TechButton