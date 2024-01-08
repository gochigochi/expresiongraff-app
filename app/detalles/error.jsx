'use client'

import { useEffect } from 'react'
import PrimaryButton from '../_components/buttons/PrimaryButton'

export default function Error({ error, reset }) {
    
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen grid place-items-center">
            <div>
                <h2 className="text-center mb-1">Ocurrió un error.</h2>
                <PrimaryButton onClick={() => reset()}>
                    Vuelva a intentarlo
                </PrimaryButton>
            </div>
        </div>
    )
}