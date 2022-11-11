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
                        <div className='contenedorImagenes'>
                            <h5>
                                <span>Catalog / Sneakers / </span> {items.title}</h5>
                            <img src={items.images[0]} alt="imagen1" />
                            <div className='contenedorMiniaturas'>
                                <img src={items.images[1]} alt="imagen2" />
                                <img src={items.images[2]} alt="imagen2" />
                                <img src={items.images[3]} alt="imagen2" />
                            </div>
                        </div>
                    </div>
                ) : ('No datos')
            }
        </>
    )
}

export default Home