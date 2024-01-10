export const toHex = (colors) => {

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

export const toId = (colors) => {

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

export const fromHexToColorName = (color) => {

        let name

        switch (color) {

            case "#003366":
                name = "Azul Marino"
                break
            case "#281ece":
                name = "Azul Francia"
                break
            case "#0c8711":
                name = "Verde Benetton"
                break
            case "#ae350b":
                name = "Rojo"
                break
            case "#000000":
                name = "Negro"
                break
            case "#9b9b9b":
                name = "Gris"
                break
            default:
                name = "Blanco"
        }

        return name
}