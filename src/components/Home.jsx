import React, { useEffect, useState } from 'react'
import { productos } from '../functions/funciones'



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
                        <h4>Catalog/Sneakers/{items.title}</h4>
                        <img src={items.images[0]} alt="" />
                    </div>
                ) : ('No datos')
            }
        </>
    )
}

export default Home