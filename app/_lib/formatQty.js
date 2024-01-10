export const formatQty = (qty) => {

    switch (qty) {

        case "A":
            return "10-20"
        case "B":
            return "21-50"
        case "C":
            return "51-100"
        case "D":
            return "101-200"
    }
}