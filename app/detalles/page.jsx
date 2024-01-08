"use client"

import useStore from "../_lib/store"

const DetailsPage = () => {

    const productData = useStore(state => state.productData)

    console.log("DETALLES", productData)

    return (
        <section className="w-full flex flex-col justify-center items-start px-5">
            Detalles
        </section>
    )
}

export default DetailsPage