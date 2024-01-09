"use client"

import { useCallback, useState } from "react"
import Customization from "./customization/Customization"
import Summary from "./summary/Summary"

const ProductDetails = ({ product }) => {

    const [selected, setSelected] = useState({ color: "#ffffff", qty: "A", position: "frente", size: "small" })

    const handleFormChange = useCallback((e) => {
        setSelected({ ...selected, [e.target.name]: e.target.value })
    })

    return (
        <section className="w-full flex pt-8 gap-5">
            <div className="flex flex-col items-center justify-between w-1/2">
                <div className="grow flex max-h-96 items-center justify-center py-2">
                    <img
                        src={product.img}
                        alt={product.title}
                        className="w-auto h-full"
                    />
                </div>
                <Summary />
            </div>
            <Customization product={product} selected={selected} handleFormChange={handleFormChange} />
        </section>
    )
}

export default ProductDetails