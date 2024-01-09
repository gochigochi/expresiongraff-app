"use client"

import { useRouter } from "next/navigation"

const TechButton = ({ content, ...props }) => {

  const router = useRouter()

  const handleNavigation = () => {
    router.push(`/productos/${content.id}`)
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