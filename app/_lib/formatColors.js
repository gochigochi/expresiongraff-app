export const formatColors = (colors) => {

    const formattedColors = colors.map(color => {
        
        let withClass

        switch (color) {
            case 'azul-marino':
                withClass = { hex: "#003366", class: "bg-[#003366]" }
                break
            case 'azul-francia':
                withClass = { hex: "#281ece", class: "bg-[#281ece]" }
                break
            case 'verde-benetton':
                withClass = { hex: "#0c8711", class: "bg-[#0c8711]" }
                break
            case 'rojo':
                withClass = { hex: "#ae350b", class: "bg-[#ae350b]" }
                break
            case 'negro':
                withClass = { hex: "#000000", class: "bg-[#000000]" }
                break
            case 'gris':
                withClass = { hex: "#9b9b9b", class: "bg-[#9b9b9b]" }
                break
            default:
                withClass = { hex: "#ffffff", class: "bg-[#ffffff] border border-slate-300" }
        }

        return withClass
    })

    return formattedColors
}