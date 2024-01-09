import { db } from "@/firebase/config"
import { collection, query, where, getDocs } from "firebase/firestore"
import ProductsGallery from "@/app/_components/products_gallery/ProductsGallery"

const ProductsPage = async ({ params }) => {

    const fetchData = async () => {

        let temp = []
        const q = query(collection(db, "prendas"), where("tecnica", "array-contains", params.tecnica))
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            temp.push({ id: doc.id, data: doc.data() })
        })

        return temp
    }

    const products = await fetchData()

    return (
        <section className="w-full flex flex-col justify-center items-start">
            <ProductsGallery products={products} />
        </section>
    )
}

export default ProductsPage