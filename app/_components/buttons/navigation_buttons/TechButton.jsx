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
            w-full
            xs:w-72
            h-[26rem]
            flex
            flex-col
            relative
            rounded-xl
            border 
            border-inherit
            overflow-hidden
            cursor-pointer
            mb-4
            md:mb-0
            "
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0, transition: { duration: .4 } }}
      exit={{ opacity: 0, y: -10, transition: { duration: .2 } }}
      {...props}
    >
      <img src={content.img} alt="" className="w-full h-36 object-cover" />
      <div className="h-56 p-6">
        <h3 className="text-2xl font-medium">{content.title}</h3>
        <div className="w-1/2 h-[1px] absolute left-[50%] -translate-x-1/2 bg-slate-100 mt-3"></div>
        {
          content.properties.map(property => {
            return (
              <div key={property} className="flex my-7">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#38BDF8" className="w-6 h-6">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>

                </span>
                <span className="ml-3 text-left">
                  {property}
                </span>
              </div>
            )
          })
        }
      </div>
    </motion.button>
  )
}

export default TechButton