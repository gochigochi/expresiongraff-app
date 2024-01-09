"use client"

import { createQueryString } from "@/app/_lib/createQueryString"
import { useRouter, useSearchParams } from "next/navigation"

const TechButton = ({ content, ...props }) => {

  const router = useRouter()
  const searchParams = useSearchParams()

  const handleNavigation = () => {

    const queryString = createQueryString("tecnica", content.id, searchParams)

    router.push(`/productos/${content.id}?${queryString}`)
  }

  return (
    <button
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
      {...props}>
      {content.title}
    </button>
  )
}

export default TechButton