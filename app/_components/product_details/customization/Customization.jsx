import { memo } from "react"
import FieldSet from "./fieldset/FieldSet"
import { toHex } from "@/app/_lib/formatColors"

const Customization = ({ product, selected, handleFormChange }) => {
    return (
        <form
            className="
            flex 
            flex-col 
            grow 
            gap-5
            sm:gap-6
            items-center 
            px-7 
            rounded-2xl 
            border 
            border-slate-200
            pt-5
            "
        >
            <h2 className="w-full font-bold sm:hidden">Seleccione los detalles</h2>
            <FieldSet legend="Color" note={<p className="absolute bottom-1 left-0 text-xs">*consultar por otros colores</p>}>
                {
                    toHex(product.colores).map(color => {
                        return (
                            <label
                                key={color.hex}
                                className={`
                                    w-5 
                                    h-5 
                                    rounded-full 
                                    inline-block 
                                    cursor-pointer
                                    ${color.class} 
                                    ${selected.color === color.hex && "outline outline-offset-2 outline-sky-400"}
                                    `}
                            >
                                <input
                                    className="sr-only"
                                    type="radio"
                                    name="color"
                                    value={color.hex}
                                    onChange={(e) => handleFormChange(e)}
                                />
                            </label>
                        )
                    })
                }
            </FieldSet>
            <FieldSet legend="Cantidad de prendas">
                {
                    [
                        { id: "10-20", value: "A" },
                        { id: "21-50", value: "B" },
                        { id: "51-100", value: "C" },
                        { id: "101-200", value: "D" }
                    ].map(item => {
                        return (
                            <label
                                key={item.id}
                                className={`
                                        flex
                                        flex-basis-12
                                        items-center 
                                        justify-center 
                                        rounded-md border 
                                        py-3 
                                        px-4 
                                        text-sm 
                                        hover:bg-gray-50 
                                        cursor-pointer
                                        ${selected.qty === item.value && "outline outline-offset-2 outline-sky-400"}
                                    `}>
                                <input
                                    type="radio"
                                    name="qty"
                                    value={item.value}
                                    className="sr-only"
                                    onChange={(e) => handleFormChange(e)}
                                />
                                <span>{item.id}</span>
                            </label>
                        )
                    })
                }
            </FieldSet>
            <FieldSet legend="Posición del logo" note={<p className="absolute bottom-1 left-0 text-xs">*frente: logo chico, dorso: logo grande</p>}>
                {
                    [
                        { id: "Frente", value: "frente" },
                        { id: "Dorso", value: "dorso" },
                        { id: "Frente y dorso", value: "ambos" },
                    ].map(item => {
                        return (
                            <label
                                key={item.value}
                                className={`
                                        flex 
                                        items-center 
                                        justify-center 
                                        rounded-md border 
                                        py-3 
                                        px-4 
                                        text-sm 
                                        hover:bg-gray-50 
                                        cursor-pointer
                                        ${selected.position === item.value && "outline outline-offset-2 outline-sky-400"}
                                    `}>
                                <input
                                    type="radio"
                                    name="position"
                                    value={item.value}
                                    className="sr-only"
                                    onChange={(e) => handleFormChange(e)}
                                />
                                <span>{item.id}</span>
                            </label>
                        )
                    })
                }
                {/* *frente: logo chico, dorso: logo grande */}
            </FieldSet>
            <FieldSet legend="Tamaño del logo">
                {
                    [
                        { id: "≈10x10cm", value: "small" },
                        { id: "≈25x25cm", value: "big" },
                    ].map(item => {
                        return (
                            <label
                                key={item.value}
                                className={`
                                        flex 
                                        items-center 
                                        justify-center 
                                        rounded-md border 
                                        py-3 
                                        px-4 
                                        text-sm 
                                        hover:bg-gray-50 
                                        cursor-pointer
                                        ${selected.size === item.value && "outline outline-offset-2 outline-sky-400"}
                                    `}>
                                <input
                                    type="radio"
                                    name="size"
                                    value={item.value}
                                    className="sr-only"
                                    onChange={(e) => handleFormChange(e)}
                                />
                                <span>{item.id}</span>
                            </label>
                        )
                    })
                }
            </FieldSet>
        </form>
    )
}

export default memo(Customization)