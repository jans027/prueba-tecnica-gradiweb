import React, { useEffect, useState } from 'react'
import { productos } from '../functions/funciones'
import Imagenes from './Imagenes'
import Informacion from './Informacion'



const Home = () => {

    const [items, setItems] = useState(null)


    useEffect(() => {
        productos(setItems)
    }, [])

    // console.log(items)


    return (
        <>
            {
                items !== null ? (
                    <div className='contenedorPrincipal'>
                        <Imagenes/>
                        <Informacion/>
                    </div>
                ) : ('No hay datos')
            }
        </>
    )
}

export default Home