import ProductsButton from "../buttons/navigation_buttons/ProductsButton"

const Card = ({ product, index, ...props }) => {
    return (
        <ProductsButton product={product} {...props}>
            <div className="
                    relative
                    p-6
                    h-[25rem]
                    shadow-md
                    shadow-gray-300
                    rounded-xl
                    border 
                    border-inherit
                    overflow-hidden
                    cursor-pointer
                "
            >
                <h2 className="relative text-4xl z-10">{product.data.title}</h2>
                <img
                    src={product.data.img}
                    className="
                        absolute
                        w-11/12
                        h-[25rem]
                        top-20
                        left-16
                        object-contain
                    "
                />
            </div>
        </ProductsButton>
    )
}

export default Card