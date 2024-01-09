import { useRouter, useSearchParams } from "next/navigation"
import { createQueryString } from "@/app/_lib/createQueryString"

const ProductsButton = ({ children, product, ...props }) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const handleNavigation = () => {

        const queryString = createQueryString(null, null, searchParams)

        router.push(`/detalles/${product.id}?${queryString}`)
    }

    return (
        <div
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
            "
            {...props}
        >
            {children}
        </div>
    )
}

export default ProductsButton