import ProductDetails from "@/app/_components/product_details/ProductDetails"
import { db } from "@/firebase/config"
import { doc, getDoc } from "firebase/firestore"

const DetailsPage = async ({ params }) => {

    let product = {}
    const docRef = doc(db, "prendas", params.producto)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        product = docSnap.data()
    } else {
        console.log("No such document!")
    }

    return <ProductDetails product={product} />
}

export default DetailsPage