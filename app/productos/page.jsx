// "use client"

// import { useState, useEffect } from "react"
import { db } from "@/firebase/config"
import { collection, query, where, getDocs } from "firebase/firestore"
import ProductsGallery from "../_components/products_gallery/ProductsGallery"
// import { useSearchParams } from "next/navigation"

const ProductsPage = ({ searchParams }) => {

    // const [products, setProducts] = useState()
    // const [loading, setLoading] = useState()
    // const searchParams = useSearchParams()
    // const tech = searchParams.get('tech')
    // console.log(searchParams)
    // useEffect(() => {

    //     const cleanup = async () => {

    //         try {

    //             const temp = []
    //             const q = query(collection(db, "prendas"), where("tecnica", "array-contains", tech))
    //             const querySnapshot = await getDocs(q)
    //             querySnapshot.forEach((doc) => temp.push({ id: doc.id, data: doc.data()}))
    //             setProducts(temp)

    //         } catch (err) {

    //             console.log(err)
    //         }
    //     }

    //     return () => cleanup()

    // }, [])

    // let temp = []
    
    // try {

    //     const fetchData = async () => {
            
    //         // const temp = []
    //         const q = query(collection(db, "prendas"), where("tecnica", "array-contains", searchParams.tech))
    //         const querySnapshot = await getDocs(q)
    //         querySnapshot.forEach((doc) => {
    //             // console.log(doc.data())
    //             temp.push({ id: doc.id, data: doc.data() })})
    
    //             console.log("HERE")
    //         // return temp
    //     }

    //     fetchData()

    // } catch (err) {

    //     console.log(err)
    // }

    // const data = fetchData()

    // fetchData()

    // console.log("TEMP", temp)

    // console.log(data)

    return (
        <section className="w-full flex flex-col justify-center items-start">
            {/* <ProductsGallery products={data} /> */}
        </section>
    )
}

export default ProductsPage