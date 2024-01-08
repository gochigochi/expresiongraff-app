import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create( persist((set) => ({
    productData: {
        title: "",
        unitaryprice: 0,
        image: "",
        availablecolors: [],
    },
    setProductData: (product) => set(state => ({ productData: {...product} }))
}), 
{
    name: "product-storage",
    getStorage: () => sessionStorage,
  }
))

export default useStore;