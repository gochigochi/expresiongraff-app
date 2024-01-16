"use client"

import { useCallback, useState } from "react"
import Customization from "./customization/Customization"
import Summary from "./summary/Summary"
import { motion, AnimatePresence } from "framer-motion"
import useAnimatePresence from "@/app/_hooks/useAnimatePresence"

const ProductDetails = ({ product }) => {

    const [selected, setSelected] = useState({ color: "#ffffff", qty: "A", position: "frente", size: "small" })
    const { show, setShow } = useAnimatePresence()

    const handleFormChange = useCallback((e) => {
        setSelected({ ...selected, [e.target.name]: e.target.value })
    })

    return (
        <AnimatePresence>
            <motion.section
                className="w-full flex flex-col-reverse sm:flex-row gap-4 mt-4 sm:mt-0"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0, transition: { duration: .4 } }}
                exit={{ opacity: 0, y: -10, transition: { duration: .2 } }}
            >
                <Summary product={product} selected={selected} />
                <Customization product={product} selected={selected} handleFormChange={handleFormChange} />
            </motion.section>
        </AnimatePresence>
    )
}

export default ProductDetails