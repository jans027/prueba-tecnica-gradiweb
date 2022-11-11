import React, { useEffect, useState } from 'react'
import { productos } from '../functions/funciones'

const Informacion = () => {

    const [items, setItems] = useState(null)


    useEffect(() => {
        productos(setItems)
    }, [])
    return (
        <div>Informacion</div>
    )
}

export default Informacion