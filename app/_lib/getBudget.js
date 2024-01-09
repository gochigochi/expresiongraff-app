export const getBudget = (selected) => {

    let precioLogo = 0

    // Bordado
    if(selected.tecnica === "bordado") {

        //Logo Chico
        if(selected.size === "small") {
            
            // Frente
            if(selected.ubicacion === "frente") {

                if(selected.cantidad === "A") {
                    precioLogo = 250
                }

                if(selected.cantidad === "B") {
                    precioLogo = 200
                }

                if(selected.cantidad === "C") {
                    precioLogo = 175
                }

                if(selected.cantidad === "D") {
                    precioLogo = 150
                }
            }

            // Dorso
            if(selected.ubicacion === "dorso") {
                if(selected.cantidad === "A") {
                    precioLogo = 450
                }

                if(selected.cantidad === "B") {
                    precioLogo = 400
                }

                if(selected.cantidad === "C") {
                    precioLogo = 375
                }

                if(selected.cantidad === "D") {
                    precioLogo = 350
                }
            }

            // Frente y Dorso
            if(selected.ubicacion === "ambos") {
                if(selected.cantidad === "A") {
                    precioLogo = 450
                }

                if(selected.cantidad === "B") {
                    precioLogo = 400
                }

                if(selected.cantidad === "C") {
                    precioLogo = 375
                }

                if(selected.cantidad === "D") {
                    precioLogo = 350
                }
            }
        }

        // Logo Grande
        if(selected.size === "big") {
             // Frente
             if(selected.ubicacion === "frente") {

                if(selected.cantidad === "A") {
                    precioLogo = 250
                }

                if(selected.cantidad === "B") {
                    precioLogo = 200
                }

                if(selected.cantidad === "C") {
                    precioLogo = 175
                }

                if(selected.cantidad === "D") {
                    precioLogo = 150
                }
            }

            // Dorso
            if(selected.ubicacion === "dorso") {
                if(selected.cantidad === "A") {
                    precioLogo = 450
                }

                if(selected.cantidad === "B") {
                    precioLogo = 400
                }

                if(selected.cantidad === "C") {
                    precioLogo = 375
                }

                if(selected.cantidad === "D") {
                    precioLogo = 350
                }
            }

            // Frente y Dorso
            if(selected.ubicacion === "ambos") {
                if(selected.cantidad === "A") {
                    precioLogo = 450
                }

                if(selected.cantidad === "B") {
                    precioLogo = 400
                }

                if(selected.cantidad === "C") {
                    precioLogo = 375
                }

                if(selected.cantidad === "D") {
                    precioLogo = 350
                }
            }
        }
    }
    
    // Estampado
    if(selected.tecnica === "estampado") {
        
        //Logo Chico
        if(selected.size === "small") {
            
            // Frente
            if(selected.ubicacion === "frente") {

                if(selected.cantidad === "A") {
                    precioLogo = 250
                }

                if(selected.cantidad === "B") {
                    precioLogo = 200
                }

                if(selected.cantidad === "C") {
                    precioLogo = 150
                }

                if(selected.cantidad === "D") {
                    precioLogo = 100
                }
            }

            // Dorso
            if(selected.ubicacion === "dorso") {
                if(selected.cantidad === "A") {
                    precioLogo = 250
                }

                if(selected.cantidad === "B") {
                    precioLogo = 200
                }

                if(selected.cantidad === "C") {
                    precioLogo = 150
                }

                if(selected.cantidad === "D") {
                    precioLogo = 100
                }
            }

            // Frente y Dorso
            if(selected.ubicacion === "ambos") {
                if(selected.cantidad === "A") {
                    precioLogo = 450
                }

                if(selected.cantidad === "B") {
                    precioLogo = 400
                }

                if(selected.cantidad === "C") {
                    precioLogo = 375
                }

                if(selected.cantidad === "D") {
                    precioLogo = 350
                }
            }
        }

        // Logo Grande
        if(selected.size === "big") {
             // Frente
             if(selected.ubicacion === "frente") {

                if(selected.cantidad === "A") {
                    precioLogo = 250
                }

                if(selected.cantidad === "B") {
                    precioLogo = 200
                }

                if(selected.cantidad === "C") {
                    precioLogo = 175
                }

                if(selected.cantidad === "D") {
                    precioLogo = 150
                }
            }

            // Dorso
            if(selected.ubicacion === "dorso") {
                if(selected.cantidad === "A") {
                    precioLogo = 250
                }

                if(selected.cantidad === "B") {
                    precioLogo = 200
                }

                if(selected.cantidad === "C") {
                    precioLogo = 150
                }

                if(selected.cantidad === "D") {
                    precioLogo = 100
                }
            }

            // Frente y Dorso
            if(selected.ubicacion === "ambos") {
                if(selected.cantidad === "A") {
                    precioLogo = 450
                }

                if(selected.cantidad === "B") {
                    precioLogo = 400
                }

                if(selected.cantidad === "C") {
                    precioLogo = 375
                }

                if(selected.cantidad === "D") {
                    precioLogo = 350
                }
            }
        }
    }

    // Sublimado
    if(selected.tecnica === "sublimado") {
        
        //Logo Chico
        if(selected.size === "small") {
            
            // Frente
            if(selected.ubicacion === "frente") {

                if(selected.cantidad === "A") {
                    precioLogo = 200
                }

                if(selected.cantidad === "B") {
                    precioLogo = 150
                }

                if(selected.cantidad === "C") {
                    precioLogo = 125
                }

                if(selected.cantidad === "D") {
                    precioLogo = 100
                }
            }

            // Dorso
            if(selected.ubicacion === "dorso") {
                if(selected.cantidad === "A") {
                    precioLogo = 200
                }

                if(selected.cantidad === "B") {
                    precioLogo = 150
                }

                if(selected.cantidad === "C") {
                    precioLogo = 125
                }

                if(selected.cantidad === "D") {
                    precioLogo = 100
                }
            }

            // Frente y Dorso
            if(selected.ubicacion === "ambos") {
                if(selected.cantidad === "A") {
                    precioLogo = 200
                }

                if(selected.cantidad === "B") {
                    precioLogo = 150
                }

                if(selected.cantidad === "C") {
                    precioLogo = 125
                }

                if(selected.cantidad === "D") {
                    precioLogo = 100
                }
            }
        }

        // Logo Grande
        if(selected.size === "big") {
             // Frente
             if(selected.ubicacion === "frente") {

                if(selected.cantidad === "A") {
                    precioLogo = 200
                }

                if(selected.cantidad === "B") {
                    precioLogo = 150
                }

                if(selected.cantidad === "C") {
                    precioLogo = 125
                }

                if(selected.cantidad === "D") {
                    precioLogo = 100
                }
            }

            // Dorso
            if(selected.ubicacion === "dorso") {
                if(selected.cantidad === "A") {
                    precioLogo = 200
                }

                if(selected.cantidad === "B") {
                    precioLogo = 150
                }

                if(selected.cantidad === "C") {
                    precioLogo = 125
                }

                if(selected.cantidad === "D") {
                    precioLogo = 100
                }
            }

            // Frente y Dorso
            if(selected.ubicacion === "ambos") {
                if(selected.cantidad === "A") {
                    precioLogo = 200
                }

                if(selected.cantidad === "B") {
                    precioLogo = 150
                }

                if(selected.cantidad === "C") {
                    precioLogo = 125
                }

                if(selected.cantidad === "D") {
                    precioLogo = 100
                }
            }
        }
    }

    return precioLogo
}