"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { createQueryString } from "@/app/_lib/createQueryString"

const TechButton = ({ content, ...props }) => {

  const router = useRouter()
  const searchParams = useSearchParams()

  const handleNavigation = () => {
    router.push("/productos?" + createQueryString("tech", content.id, searchParams))
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