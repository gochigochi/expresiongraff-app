"use client"

import { useState, useEffect } from "react"
import { db } from "@/firebase/config"
import { collection, query, where, getDocs } from "firebase/firestore"
import ProductsGallery from "../_components/products_gallery/ProductsGallery"
import { useSearchParams } from "next/navigation"

const ProductsPage = () => {

    const [products, setProducts] = useState()
    const [loading, setLoading] = useState()
    const searchParams = useSearchParams()
    const tech = searchParams.get('tech')

    useEffect(() => {
        
        const cleanup = async () => {

            try {

                const temp = []
                const q = query(collection(db, "prendas"), where("tecnica", "array-contains", tech))
                const querySnapshot = await getDocs(q)
                querySnapshot.forEach((doc) => temp.push({ id: doc.id, data: doc.data()}))
                setProducts(temp)

            } catch (err) {

                console.log(err)
            }
        }

        return () => cleanup()

    }, [])

    return (
        <section className="w-full flex flex-col justify-center items-start px-5">
            <ProductsGallery products={products} loading={loading} />
        </section>
    )
}

export default ProductsPage