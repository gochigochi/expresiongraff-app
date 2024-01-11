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
        <section className="w-full flex flex-col-reverse sm:flex-row gap-4">
            <Summary product={product} selected={selected} />
            <Customization product={product} selected={selected} handleFormChange={handleFormChange} />
        </section>
    )
}

export default ProductDetails