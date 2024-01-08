import { createQueryString } from "@/app/_lib/createQueryString"
import { useRouter, useSearchParams } from "next/navigation"
import useStore from "@/app/_lib/store"

const ProductsButton = ({ children, product, ...props }) => {

    const router = useRouter()
    const searchParams = useSearchParams()
    const setProductData = useStore(state => state.setProductData)

    const handleNavigation = () => {
        setProductData({ 
            title: product.data.title,
            image: product.data.img,
            availablecolors: product.data.colores,
            unitaryprice: product.data.price,
        })

        const slug = product.id.replace(/[^a-z0-9_]+/gi, '-').replace(/^-|-$/g, '').toLowerCase()

        const queryString = createQueryString("producto", slug, searchParams)

        router.push("/detalles?" + queryString)
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